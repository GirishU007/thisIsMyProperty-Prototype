import Link from "next/link";
import { cookies } from "next/headers";
import { Brand } from "./Brand";
import { Icon } from "./Icon";
import { SESSION_COOKIE, parseRole } from "@/lib/session";

const LINKS = [
  { k: "home", t: "Homeowners", href: "/" },
  { k: "agents", t: "Agents", href: "/agents" },
  { k: "how", t: "How it works", href: "/how" },
  { k: "pricing", t: "Pricing", href: "/pricing" },
];

// Public top navigation. Four links, one sign-in and one primary button.
// The buttons follow the audience of the page, and the signed-in state (see src/lib/session.ts).
export async function PublicNav({ active }: { active: string }) {
  const role = parseRole((await cookies()).get(SESSION_COOKIE)?.value);
  const on = active === "pricing-agents" ? "pricing" : active;

  const agentPage = active === "agents" || active === "pricing-agents";
  const homeownerPage = active === "home" || active === "how" || active === "pricing";
  const startHref = agentPage ? "/signup/agent" : homeownerPage ? "/signup" : "/start";
  const signInHref = agentPage ? "/agent" : "/app";
  const dashHref = role === "agent" ? "/agent" : "/app";

  return (
    <header className="ux-nav">
      <div className="ux-nav-in">
        <Link className="brand" href="/" aria-label="ThisIsMyProperty.com home">
          <Brand />
        </Link>
        <nav className="ux-nav-links">
          {LINKS.map((l) => (
            <Link key={l.k} href={l.href} className={l.k === on ? "is-on" : undefined}>
              {l.t}
            </Link>
          ))}
        </nav>
        {role ? (
          <div className="ux-nav-cta">
            <Link className="ux-btn pri sm" href={dashHref}>
              My dashboard
            </Link>
            <button className="ux-userbtn" data-act="usermenu" aria-label="Account menu">
              {role === "agent" ? (
                <span className="avatar ux-av-sarah"></span>
              ) : (
                <span className="avatar">JS</span>
              )}
              <span className="nm">{role === "agent" ? "Sarah" : "Jane"}</span>
              <Icon n="chevd" s={13} />
            </button>
            <div className="ux-menu" id="usermenu" hidden>
              <Link href={dashHref}>
                <Icon n="home" s={17} /> My dashboard
              </Link>
              <hr />
              <a href="/signout">
                <Icon n="arrow" s={17} /> Sign out
              </a>
            </div>
            <button className="ux-navbtn" aria-label="Menu">
              <Icon n="menu" s={20} />
            </button>
          </div>
        ) : (
          <div className="ux-nav-cta">
            <Link className="in" href={signInHref}>
              Sign in
            </Link>
            <Link className="ux-btn pri sm" href={startHref}>
              Get started
            </Link>
            <button className="ux-navbtn" aria-label="Menu">
              <Icon n="menu" s={20} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
