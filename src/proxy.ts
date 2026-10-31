import { NextResponse } from "next/server";
import { isIndexable } from "@/lib/indexing";

export function proxy() {
  const response = NextResponse.next();
  if (!isIndexable()) {
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
