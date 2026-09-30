// Implied prototype session for the TIMP screens.
// Entering the homeowner app (/ho...) or agent app (/agent...) — or signing in for real
// with Supabase — marks the visitor as signed in, so the public pages stop offering
// "Try it free / Sign In" and show their account instead. /signout clears it.
export const TIMP_SESSION_COOKIE = "timp_session";

export type TimpRole = "ho" | "agent";

export function timpRoleForPath(pathname: string): TimpRole | null {
  if (/^\/ho(\/|$)/.test(pathname)) return "ho";
  if (/^\/agent(\/|$)/.test(pathname)) return "agent"; // not /agents (public landing page)
  return null;
}

export function parseTimpRole(value: string | undefined): TimpRole | null {
  return value === "ho" || value === "agent" ? value : null;
}

export const TIMP_SESSION_COOKIE_OPTIONS = {
  path: "/",
  httpOnly: true,
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 7, // 7 days
};
