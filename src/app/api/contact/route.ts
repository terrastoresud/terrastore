import { Resend } from "resend";
import { validateContact, type ContactInput } from "@/lib/contact";

const recent = new Map<string, number>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "local";
}

function limited(key: string): boolean {
  const now = Date.now();
  for (const [entry, time] of recent) {
    if (now - time > WINDOW_MS) recent.delete(entry);
  }
  const hits = [...recent.entries()].filter(([entry, time]) => entry.startsWith(`${key}:`) && now - time < WINDOW_MS);
  return hits.length >= MAX_HITS;
}

function remember(key: string, fingerprint: string) {
  recent.set(`${key}:${fingerprint}`, Date.now());
}

function seen(key: string, fingerprint: string): boolean {
  const time = recent.get(`${key}:${fingerprint}`);
  return typeof time === "number" && Date.now() - time < WINDOW_MS;
}

function mailConfig(): { key: string; from: string; to: string } | null {
  const key = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  if (!key || !from || !to) return null;
  return { key, from, to };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function oneLine(value: string): string {
  return value.replace(/[\r\n\t]+/g, " ").trim();
}

function row(label: string, value: string): string {
  return `<tr>
    <th style="padding:10px 16px 10px 0;text-align:left;vertical-align:top;color:#5c564e;font-weight:600;white-space:nowrap">${label}</th>
    <td style="padding:10px 0;vertical-align:top">${value}</td>
  </tr>`;
}

function phoneCell(phone: string): string {
  const shown = escapeHtml(phone);
  const compact = phone.replace(/[^\d+]/g, "");
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) digits = `212${digits.slice(1)}`;
  const tel = compact ? `<a href="tel:${escapeHtml(compact)}">${shown}</a>` : shown;
  const whatsapp = digits ? ` <a href="https://wa.me/${digits}">WhatsApp</a>` : "";
  return `${tel}${whatsapp}`;
}

function messageHtml(payload: Omit<ContactInput, "consent" | "company">): string {
  const when = new Intl.DateTimeFormat("fr-MA", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Casablanca",
  }).format(new Date());
  const dimensions = payload.dimensions ? escapeHtml(payload.dimensions) : "Non précisées";
  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#1c1916;line-height:1.5">
    <p style="margin:0 0 16px">Nouvelle demande d’étude depuis terrastore.ma.</p>
    <table style="border-collapse:collapse;width:100%;max-width:560px">
      ${row("Nom", escapeHtml(payload.name))}
      ${row("Téléphone / WhatsApp", phoneCell(payload.phone))}
      ${row("Ville", escapeHtml(payload.city))}
      ${row("Type de projet", escapeHtml(payload.projectType))}
      ${row("Dimensions", dimensions)}
      ${row("Besoin", escapeHtml(payload.message).replace(/\n/g, "<br>"))}
    </table>
    <p style="margin:16px 0 0;color:#5c564e;font-size:13px">Reçue le ${escapeHtml(when)} (Africa/Casablanca).</p>
  </div>`;
}

export async function POST(request: Request) {
  if (!mailConfig()) {
    return Response.json({ ok: false, code: "unconfigured" }, { status: 503 });
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return Response.json({ ok: false, message: "L’envoi n’a pas abouti." }, { status: 415 });
  }

  const length = Number(request.headers.get("content-length") || 0);
  if (length > 20_000) {
    return Response.json({ ok: false, message: "L’envoi n’a pas abouti." }, { status: 413 });
  }

  const key = clientKey(request);
  if (limited(key)) {
    return Response.json({ ok: false, message: "Trop de tentatives. Réessayez plus tard." }, { status: 429 });
  }

  let body: ContactInput;
  try {
    body = (await request.json()) as ContactInput;
  } catch {
    return Response.json({ ok: false, message: "L’envoi n’a pas abouti." }, { status: 400 });
  }

  const fields = validateContact({
    name: String(body.name ?? ""),
    phone: String(body.phone ?? ""),
    city: String(body.city ?? ""),
    projectType: String(body.projectType ?? ""),
    dimensions: String(body.dimensions ?? ""),
    message: String(body.message ?? ""),
    consent: Boolean(body.consent),
    company: String(body.company ?? ""),
  });

  if (Object.keys(fields).length) {
    return Response.json({ fields }, { status: 400 });
  }

  if (String(body.company ?? "").trim()) {
    return Response.json({ ok: true });
  }

  const payload = {
    name: body.name.trim(),
    phone: body.phone.trim(),
    city: body.city.trim(),
    projectType: body.projectType,
    dimensions: body.dimensions.trim(),
    message: body.message.trim(),
  };
  const fingerprint = `${payload.phone}|${payload.message}`.toLowerCase();
  if (seen(key, fingerprint)) {
    return Response.json({ ok: false, message: "Cette demande a déjà été transmise récemment." }, { status: 409 });
  }

  const config = mailConfig();
  if (!config) {
    return Response.json({ ok: false, code: "unconfigured" }, { status: 503 });
  }

  try {
    const resend = new Resend(config.key);
    const { error } = await resend.emails.send({
      from: config.from,
      to: config.to,
      subject: `Nouvelle demande – ${oneLine(payload.projectType)} – ${oneLine(payload.city)} – ${oneLine(payload.name)}`,
      html: messageHtml(payload),
    });
    if (error) {
      return Response.json({ ok: false, message: "L’envoi n’a pas abouti." }, { status: 502 });
    }
  } catch {
    return Response.json({ ok: false, message: "L’envoi n’a pas abouti." }, { status: 502 });
  }

  remember(key, fingerprint);
  return Response.json({ ok: true });
}
