import { NextResponse } from "next/server";

function indexable(): boolean {
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

export function proxy() {
  const response = NextResponse.next();
  if (!indexable()) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico)$).*)"],
};
