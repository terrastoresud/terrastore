/** Production on the public domain is indexable. Previews and local builds stay closed. */

function blockedHost(raw: string | undefined): boolean {
  if (!raw) return false;
  try {
    const host = new URL(raw).hostname.toLowerCase();
    return (
      host === "localhost" ||
      host === "127.0.0.1" ||
      host.endsWith(".localhost") ||
      host.endsWith(".vercel.app")
    );
  } catch {
    return true;
  }
}

export function isIndexable(): boolean {
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv === "production") {
    return !blockedHost(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (vercelEnv && vercelEnv !== "production") return false;
  if (process.env.NEXT_PUBLIC_SITE_INDEXABLE !== "true") return false;
  if (blockedHost(process.env.NEXT_PUBLIC_SITE_URL)) return false;
  return Boolean(process.env.NEXT_PUBLIC_SITE_URL?.trim());
}

export function robotsDirective(): { index: boolean; follow: boolean } {
  return isIndexable()
    ? { index: true, follow: true }
    : { index: false, follow: false };
}
