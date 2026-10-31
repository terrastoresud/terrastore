"use client";

import Link from "next/link";
import { useState } from "react";
import { projectTypes } from "@/content/navigation";
import { emptyContact, validateContact, type ContactInput, type FieldErrors } from "@/lib/contact";

function track(name: string) {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;
  gtag("event", name);
}

export function QuoteForm() {
  const [values, setValues] = useState<ContactInput>(emptyContact);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "unconfigured" | "error">("idle");
  const [started, setStarted] = useState(false);

  function update<K extends keyof ContactInput>(key: K, value: ContactInput[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onFocus() {
    if (started) return;
    setStarted(true);
    track("form_start");
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("idle");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = (await response.json()) as { ok?: boolean; code?: string; fields?: FieldErrors };
      if (body.fields) {
        setErrors(body.fields);
        setStatus("idle");
        return;
      }
      if (response.ok && body.ok) {
        setStatus("sent");
        track("form_submit");
        setValues(emptyContact());
        return;
      }
      if (body.code === "unconfigured" || response.status === 503) {
        setStatus("unconfigured");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const errorEntries = Object.entries(errors).filter(([, message]) => message);

  return (
    <form onSubmit={onSubmit} onFocus={onFocus} noValidate className="space-y-5">
      {errorEntries.length ? (
        <div role="alert" className="border border-line bg-sand px-4 py-3 text-sm">
          <p>Le message n’est pas parti. Corrigez les champs indiqués.</p>
          <ul className="mt-2 list-disc pl-5">
            {errorEntries.map(([key, message]) => (
              <li key={key}>
                <a href={`#${key}`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {status === "sent" ? (
        <p role="status" className="border-l-2 border-ink px-4 py-3">
          Votre demande a été transmise. Nous revenons vers vous pour préciser le projet.
        </p>
      ) : null}
      {status === "unconfigured" ? (
        <p role="status" className="border-l-2 border-mark px-4 py-3 text-sm leading-6">
          Le formulaire est prêt, mais l’envoi n’est pas encore activé. Rien n’a été enregistré.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="border-l-2 border-mark px-4 py-3 text-sm">
          L’envoi n’a pas abouti. Réessayez dans un moment.
        </p>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-2">
      <Field id="name" label="Nom" error={errors.name}>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          className="field"
          required
        />
      </Field>
      <Field id="phone" label="Téléphone ou WhatsApp" error={errors.phone}>
        <input
          id="phone"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
          className="field"
          required
        />
      </Field>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
      <Field id="city" label="Ville du projet" error={errors.city}>
        <input
          id="city"
          name="city"
          autoComplete="address-level2"
          value={values.city}
          onChange={(event) => update("city", event.target.value)}
          className="field"
          required
        />
      </Field>
      <Field id="projectType" label="Type de projet" error={errors.projectType}>
        <select
          id="projectType"
          name="projectType"
          value={values.projectType}
          onChange={(event) => update("projectType", event.target.value)}
          className="field"
          required
        >
          <option value="">Choisir</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>
      </div>
      <Field id="dimensions" label="Dimensions approximatives (facultatif)" error={errors.dimensions}>
        <input
          id="dimensions"
          name="dimensions"
          value={values.dimensions}
          onChange={(event) => update("dimensions", event.target.value)}
          className="field"
        />
      </Field>
      <Field id="message" label="Besoin" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className="field min-h-36"
          required
        />
      </Field>
      <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Société</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-6" htmlFor="consent">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(event) => update("consent", event.target.checked)}
            className="mt-1 size-5"
            required
          />
          <span>
            J’accepte que ces informations soient utilisées pour répondre à ma demande, selon la{" "}
            <Link href="/politique-confidentialite" className="underline">
              politique de confidentialité
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="mt-2 text-sm text-accent">
            {errors.consent}
          </p>
        ) : null}
      </div>
      <button type="submit" className="btn inline-flex btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Envoi…" : "Envoyer la demande"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
