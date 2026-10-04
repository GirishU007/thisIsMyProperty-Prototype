import type { ReactNode } from "react";
import Link from "next/link";
import { Brand } from "./Brand";
import { Icon } from "./Icon";

const NAV = [
  { k: "today", t: "Today", href: "/agent", i: "home" },
  { k: "clients", t: "Clients", href: "/agent/clients", i: "users" },
  { k: "vaults", t: "Property vaults", href: "/agent/vaults", i: "case" },
  { k: "alerts", t: "Alerts", href: "/agent/alerts", i: "bell" },
  { k: "marketing", t: "Marketing", href: "/agent/marketing", i: "megaphone" },
];
const MORE = [
  { k: "resources", t: "Resources", href: "/agent/resources", i: "book" },
  { k: "pros", t: "Recommended pros", href: "/agent/pros", i: "tools" },
];

// Agent app shell: sidebar, page header, content, and the phone tab bar.
export function AgentShell({
  active,
  title,
  sub,
  children,
}: {
  active: string;
  title: string;
  sub?: string;
  children: ReactNode;
}) {
  const cls = (k: string, base = "snav") => (k === active ? `${base} is-on`.trim() : base || undefined);
  return (
    <div className="ux ux-app app">
      <aside className="side side-agent">
        <Link className="side-brand" href="/" aria-label="ThisIsMyProperty.com home">
          <Brand />
        </Link>
        {NAV.map((n) => (
          <Link key={n.k} className={cls(n.k)} href={n.href}>
            <Icon n={n.i} s={19} /> {n.t}
          </Link>
        ))}
        <div className="side-sep"></div>
        {MORE.map((n) => (
          <Link key={n.k} className={cls(n.k)} href={n.href}>
            <Icon n={n.i} s={19} /> {n.t}
          </Link>
        ))}
        <div className="side-sep"></div>
        <a className="snav" data-toast="Settings: profile, branding, plan and team. Not built in this prototype yet.">
          <Icon n="cog" s={19} /> Settings
        </a>
        <a className="snav" data-toast="Help: guides and contact support. Not built in this prototype yet.">
          <Icon n="help" s={19} /> Help
        </a>
      </aside>
      <div className="main">
        <div className="ux-appbar">
          <div>
            <h1>{title}</h1>
            {sub ? <div className="sub">{sub}</div> : null}
          </div>
          <div className="r">
            <button className="ux-btn pri sm hide-sm" data-toast="Invites a client and creates their vault. Not built in this prototype yet.">
              <Icon n="plus" s={16} /> Add client
            </button>
            <button className="ux-userbtn" data-act="usermenu" aria-label="Account menu">
              <span className="avatar ux-av-sarah"></span>
              <span className="nm">Sarah</span>
              <Icon n="chevd" s={13} />
            </button>
            <div className="ux-menu" id="usermenu" hidden>
              <a data-toast="Profile, branding and plan settings: not built in this prototype yet.">
                <Icon n="cog" s={17} /> Account &amp; plan
              </a>
              <Link href="/pricing/agents">
                <Icon n="dollar" s={17} /> Agent plans
              </Link>
              <Link href="/mission">
                <Icon n="heart-hand" s={17} /> Our mission
              </Link>
              <hr />
              <a href="/signout">
                <Icon n="arrow" s={17} /> Sign out
              </a>
            </div>
          </div>
        </div>
        <div className="ux-content">{children}</div>
        <nav className="ux-tabbar" aria-label="Main">
          <Link className={cls("today", "")} href="/agent">
            <Icon n="home" s={21} />
            <span>Today</span>
          </Link>
          <Link className={cls("clients", "")} href="/agent/clients">
            <Icon n="users" s={21} />
            <span>Clients</span>
          </Link>
          <Link className={cls("vaults", "")} href="/agent/vaults">
            <Icon n="case" s={21} />
            <span>Vaults</span>
          </Link>
          <Link className={cls("alerts", "")} href="/agent/alerts">
            <Icon n="bell" s={21} />
            <span>Alerts</span>
          </Link>
          <button data-act="drawer">
            <Icon n="menu" s={21} />
            <span>More</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
