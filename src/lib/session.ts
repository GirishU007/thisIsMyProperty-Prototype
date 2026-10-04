// Implied prototype session. There is no real sign-in: entering the homeowner app (/app...)
// or the agent app (/agent...) marks the visitor as signed in, so the public pages stop
// offering "Sign in / Get started" and show the account menu instead. /signout clears it.
export const SESSION_COOKIE = "timp_session";

export type Role = "ho" | "agent";

export function roleForPath(pathname: string): Role | null {
  if (/^\/app(\/|$)/.test(pathname)) return "ho";
  if (/^\/agent(\/|$)/.test(pathname)) return "agent"; // not /agents (public page)
  return null;
}

export function parseRole(value: string | undefined): Role | null {
  return value === "ho" || value === "agent" ? value : null;
}

export const SESSION_COOKIE_OPTIONS = {
  path: "/",
  httpOnly: true,
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 7, // 7 days
};
