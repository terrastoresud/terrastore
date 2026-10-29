/**
 * Single public configuration source.
 * Secrets (contact API) stay in server-only code.
 * Missing values are null and must not be rendered.
 */

function pub(name: string): string | null {
  const value = process.env[name]?.trim();
  return value ? value : null;
}

export const siteConfig = {
  brandName: "Terrastore",
  legalName: null as string | null,
  tagline: "Protection solaire et aménagement sur mesure",
  locale: "fr-MA",
  htmlLang: "fr",
  siteUrl: pub("NEXT_PUBLIC_SITE_URL")?.replace(/\/$/, "") ?? null,
  phone: pub("NEXT_PUBLIC_PHONE"),
  whatsapp: pub("NEXT_PUBLIC_WHATSAPP"),
  email: pub("NEXT_PUBLIC_CONTACT_EMAIL"),
  streetAddress: null as string | null,
  locality: null as string | null,
  region: null as string | null,
  postalCode: null as string | null,
  country: "MA",
  countryName: "Maroc",
  latitude: null as number | null,
  longitude: null as number | null,
  googleBusinessProfileUrl: null as string | null,
  openingHours: null as string[] | null,
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    linkedin: null as string | null,
  },
  areaServed: "Maroc",
  gaId: pub("NEXT_PUBLIC_GA_ID"),
  googleSiteVerification: pub("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION"),
} as const;

export function getSiteUrl(): string {
  return siteConfig.siteUrl ?? "http://localhost:3000";
}

export function hasDirectContact(): boolean {
  return Boolean(siteConfig.phone || siteConfig.whatsapp || siteConfig.email);
}

export function whatsappHref(text?: string): string | null {
  const raw = siteConfig.whatsapp;
  if (!raw) return null;
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.length < 8) return null;
  const query = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${digits}${query}`;
}

export function phoneHref(): string | null {
  if (!siteConfig.phone) return null;
  const compact = siteConfig.phone.replace(/[^\d+]/g, "");
  if (compact.length < 8) return null;
  return `tel:${compact}`;
}
