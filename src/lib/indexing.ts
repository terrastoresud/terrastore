/** Indexing is on only for an explicit production flag and a non-preview host. */

export function isIndexable(): boolean {
  if (process.env.NEXT_PUBLIC_SITE_INDEXABLE !== "true") return false;

  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv && vercelEnv !== "production") return false;

  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return false;

  try {
    const host = new URL(raw).hostname.toLowerCase();
    if (
      host === "localhost" ||
      host === "127.0.0.1" ||
      host.endsWith(".localhost") ||
      host.endsWith(".vercel.app")
    ) {
      return false;
    }
  } catch {
    return false;
  }

  return true;
}

export function robotsDirective(): { index: boolean; follow: boolean } {
  return isIndexable()
    ? { index: true, follow: true }
    : { index: false, follow: false };
}
