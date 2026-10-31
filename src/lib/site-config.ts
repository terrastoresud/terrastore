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
  legalForm: "SARL à associé unique",
  tradeRegister: "Agadir n° 58317",
  tagline: "Protection solaire et aménagement sur mesure",
  locale: "fr-MA",
  htmlLang: "fr",
  siteUrl: pub("NEXT_PUBLIC_SITE_URL")?.replace(/\/$/, "") ?? null,
  phone: pub("NEXT_PUBLIC_PHONE") ?? "+212 661-232722",
  whatsapp: pub("NEXT_PUBLIC_WHATSAPP") ?? "+212 661-232722",
  email: pub("NEXT_PUBLIC_CONTACT_EMAIL") ?? "contact@terrastore.ma",
  streetAddress: "N° 264, Rue Tafoukt, Bloc 1, Cité Lagouira",
  locality: "Agadir",
  region: null as string | null,
  postalCode: null as string | null,
  country: "MA",
  countryName: "Maroc",
  latitude: null as number | null,
  longitude: null as number | null,
  googleBusinessProfileUrl: null as string | null,
  openingHours: null as string[] | null,
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  },
  areaServed: "Maroc",
  gaId: pub("NEXT_PUBLIC_GA_ID"),
  googleSiteVerification: pub("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION"),
} as const;

const PRODUCTION_SITE_URL = "https://www.terrastore.ma";

export function getSiteUrl(): string {
  const raw = siteConfig.siteUrl;
  if (!raw) return PRODUCTION_SITE_URL;
  try {
    const host = new URL(raw).hostname.toLowerCase();
    if (
      host === "localhost" ||
      host === "127.0.0.1" ||
      host.endsWith(".localhost") ||
      host.endsWith(".vercel.app")
    ) {
      return PRODUCTION_SITE_URL;
    }
  } catch {
    return PRODUCTION_SITE_URL;
  }
  return raw;
}

export function mailtoHref(): string | null {
  if (!siteConfig.email) return null;
  return `mailto:${siteConfig.email}`;
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

export function formatAddress(): string | null {
  if (!siteConfig.streetAddress || !siteConfig.locality) return null;
  return `${siteConfig.streetAddress}, ${siteConfig.locality}, ${siteConfig.countryName}`;
}

export function mapHref(): string | null {
  const address = formatAddress();
  if (!address) return null;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
