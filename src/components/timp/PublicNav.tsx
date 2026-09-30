// Public top nav — ported from PUBNAV / pubnav() in design-reference/shell.js.
// Dropdown open/close is handled by PrototypeBehaviors (same logic as the prototype).
import { Fragment } from "react";
import Link from "next/link";
import { Brand } from "./Brand";

type NavItem = {
  k: string;
  t: string;
  href: string;
  soon?: string;
  sub?: string;
  menu?: { t: string; href: string }[];
};

const PUBNAV: NavItem[] = [
  { k: "home", t: "Homeowners", href: "/ho" },
  { k: "agents", t: "Agents", href: "/agents" },
  { k: "brokers", t: "Brokers & Teams", href: "/brokers", soon: "Coming Soon!" },
  { k: "how", t: "How It Works", href: "/how" },
  {
    k: "providers",
    t: "Service Providers",
    href: "/providers/homeowners",
    menu: [
      { t: "Homeowners", href: "/providers/homeowners" },
      { t: "Service Providers", href: "/providers" },
    ],
  },
  {
    k: "pricing",
    t: "Pricing",
    href: "/pricing",
    menu: [
      { t: "Homeowners", href: "/pricing" },
      { t: "Agents", href: "/pricing/agents" },
    ],
  },
  { k: "mission", t: "Our Mission", href: "/mission", sub: "For the Greater Good" },
];

export function PublicNav({ active }: { active: string }) {
  /* the CTAs follow the audience: agent pages sign in to the agent app */
  const isAg = active === "agents" || active === "reg-agent";
  const tryHref = isAg ? "/register/agent" : "/try";
  const inHref = isAg ? "/agent" : "/ho";

  return (
    <header className="topnav">
      <div className="topnav-in">
        <Link className="brand" href="/" aria-label="ThisIsMyProperty.com home">
          <Brand />
        </Link>
        <nav className="navlinks">
          {PUBNAV.map((n) => {
            const cls = "navlink" + (n.k === active ? " is-on" : "");
            const sub = n.sub ? (
              <small style={{ color: "var(--teal-deep)" }}>{n.sub}</small>
            ) : n.soon ? (
              <small>{n.soon}</small>
            ) : null;
            const link = (
              <Link className={cls} href={n.href}>
                {n.t}
                {sub}
                {n.menu ? (
                  <>
                    {" "}
                    <svg width="10" height="10" style={{ marginLeft: "4px" }}>
                      <use href="#i-chevd" />
                    </svg>
                  </>
                ) : null}
              </Link>
            );
            if (!n.menu) return <Fragment key={n.k}>{link}</Fragment>;
            return (
              <span key={n.k} className="navitem" data-navitem="">
                {link}
                <span className="navmenu">
                  {n.menu.map((m) => (
                    <Link key={m.href} href={m.href}>
                      {m.t}
                    </Link>
                  ))}
                </span>
              </span>
            );
          })}
        </nav>
        <div className="nav-cta">
          <Link className="btn-try" href={tryHref}>
            Try it free
          </Link>
          <Link className="signin" href={inHref}>
            <svg width="14" height="14">
              <use href="#i-badge" />
            </svg>{" "}
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
