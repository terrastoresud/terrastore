import { validateContact, type ContactInput } from "@/lib/contact";

type Delivery =
  | { ok: true }
  | { ok: false; code: "unconfigured" | "upstream" | "invalid_target" };

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

function target(): { url: string; key: string } | null {
  const url = process.env.CONTACT_API_URL?.trim();
  const key = process.env.CONTACT_API_KEY?.trim();
  if (!url || !key) return null;
  try {
    const parsed = new URL(url);
    const local = parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
    if (parsed.protocol === "https:" || (parsed.protocol === "http:" && local)) {
      return { url, key };
    }
  } catch {
    return null;
  }
  return null;
}

async function deliver(payload: Omit<ContactInput, "consent" | "company">): Promise<Delivery> {
  const api = target();
  if (!api) return { ok: false, code: "unconfigured" };
  try {
    const response = await fetch(api.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api.key}`,
      },
      body: JSON.stringify({ ...payload, source: "terrastore-website" }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return { ok: false, code: "upstream" };
    return { ok: true };
  } catch {
    return { ok: false, code: "upstream" };
  }
}

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") || 0);
  if (length > 20_000) {
    return Response.json({ ok: false, code: "invalid" }, { status: 413 });
  }

  const key = clientKey(request);
  if (limited(key)) {
    return Response.json(
      { ok: false, code: "rate_limited", message: "Trop de tentatives. Réessayez plus tard." },
      { status: 429 },
    );
  }

  let body: ContactInput;
  try {
    body = (await request.json()) as ContactInput;
  } catch {
    return Response.json({ ok: false, code: "invalid" }, { status: 400 });
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
    return Response.json({ ok: false, code: "invalid", fields }, { status: 400 });
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
  if (!target()) {
    remember(key, `attempt:${Date.now()}`);
    return Response.json(
      {
        ok: false,
        code: "unconfigured",
        message: "L’envoi n’est pas encore activé. Aucune donnée n’a été enregistrée.",
      },
      { status: 503 },
    );
  }
  if (seen(key, fingerprint)) {
    return Response.json(
      { ok: false, code: "duplicate", message: "Cette demande a déjà été transmise récemment." },
      { status: 409 },
    );
  }

  const result = await deliver(payload);
  if (!result.ok && result.code === "unconfigured") {
    return Response.json(
      { ok: false, code: "unconfigured", message: "L’envoi n’est pas encore activé." },
      { status: 503 },
    );
  }
  if (!result.ok) {
    return Response.json(
      { ok: false, code: "upstream", message: "L’envoi n’a pas abouti." },
      { status: 502 },
    );
  }
  remember(key, fingerprint);
  return Response.json({ ok: true });
}
