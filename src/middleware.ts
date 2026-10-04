import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, SESSION_COOKIE_OPTIONS, parseRole, roleForPath } from "@/lib/session";

// Remembers the implied prototype session (see src/lib/session.ts).
export function middleware(request: NextRequest) {
  const response = NextResponse.next({ request });
  // Links are prefetched while they are merely visible; only a real visit signs the visitor in.
  if (request.headers.get("next-router-prefetch") || request.headers.get("purpose") === "prefetch") {
    return response;
  }
  const current = parseRole(request.cookies.get(SESSION_COOKIE)?.value);
  const next = roleForPath(request.nextUrl.pathname);
  if (next && next !== current) {
    response.cookies.set(SESSION_COOKIE, next, SESSION_COOKIE_OPTIONS);
  }
  return response;
}

export const config = {
  matcher: ["/app/:path*", "/agent/:path*"],
};
