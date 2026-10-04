import type { ReactNode } from "react";
import Link from "next/link";
import { Brand } from "./Brand";
import { Icon } from "./Icon";

const NAV = [
  { k: "dash", t: "Dashboard", href: "/app", i: "home" },
  { k: "todo", t: "To do", href: "/app/todo", i: "bell", count: true },
  { k: "health", t: "Home health", href: "/app/health", i: "home-health" },
  { k: "vault", t: "Vault", href: "/app/vault", i: "folder" },
  { k: "costs", t: "Costs & estimates", href: "/app/costs", i: "dollar" },
  { k: "pros", t: "Find a pro", href: "/app/pros", i: "tools" },
];

// Homeowner app shell: sidebar, page header, content, and the phone tab bar.
// Menus, the drawer and the to-do count are driven by Behaviors.tsx.
export function AppShell({
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
      <aside className="side">
        <Link className="side-brand" href="/app">
          <Brand />
        </Link>
        <button className="ux-propsw" data-act="propsw" aria-expanded="false">
          <span className="th"></span>
          <span>
            <b>123 Happiness St</b>
            <span>Safety Harbor, FL</span>
          </span>
          <Icon n="chevd" s={14} />
        </button>
        <div className="ux-proplist" id="proplist" hidden>
          <button className="is-on" data-toast="This is the property you are viewing.">
            <Icon n="home" s={15} /> 123 Happiness St
          </button>
          <button data-toast="Switches every screen to 245 Peaceful Ln.">
            <Icon n="home" s={15} /> 245 Peaceful Ln
          </button>
          <button data-toast="Switches every screen to 1117 Humble Way.">
            <Icon n="home" s={15} /> 1117 Humble Way
          </button>
          <button data-go="/app/property">
            <Icon n="pencil" s={15} /> Property details
          </button>
        </div>
        {NAV.map((n) => (
          <Link key={n.k} className={cls(n.k)} href={n.href}>
            <Icon n={n.i} s={19} /> {n.t}
            {n.count ? (
              <>
                {" "}
                <span className="pill num" data-todo-count="">
                  3
                </span>
              </>
            ) : null}
          </Link>
        ))}
        <div className="side-sep"></div>
        <a className="snav" data-toast="Settings: account, plan, notifications and people with access. Not built in this prototype yet.">
          <Icon n="cog" s={19} /> Settings
        </a>
        <Link className={cls("help")} href="/app/help">
          <Icon n="help" s={19} /> Help
        </Link>
      </aside>
      <div className="main">
        <div className="ux-appbar">
          <div>
            <h1>{title}</h1>
            {sub ? <div className="sub">{sub}</div> : null}
          </div>
          <div className="r">
            <button className="ux-btn pri sm hide-sm" data-act="add-doc">
              <Icon n="plus" s={16} /> Add
            </button>
            <button className="ux-userbtn" data-act="usermenu" aria-label="Account menu">
              <span className="avatar">JS</span>
              <span className="nm">Jane</span>
              <Icon n="chevd" s={13} />
            </button>
            <div className="ux-menu" id="usermenu" hidden>
              <a data-toast="Account and plan settings: not built in this prototype yet.">
                <Icon n="cog" s={17} /> Account &amp; plan
              </a>
              <a data-toast="Refer a friend or your agent: not built in this prototype yet.">
                <Icon n="gift" s={17} /> Refer a friend
              </a>
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
          <Link className={cls("dash", "")} href="/app">
            <Icon n="home" s={21} />
            <span>Dashboard</span>
          </Link>
          <Link className={cls("todo", "")} href="/app/todo">
            <Icon n="bell" s={21} />
            <span>To do</span>
            <em className="num" data-todo-count="">
              3
            </em>
          </Link>
          <button className="add" data-act="add-doc">
            <i>
              <Icon n="plus" s={22} />
            </i>
            <span>Add</span>
          </button>
          <Link className={cls("vault", "")} href="/app/vault">
            <Icon n="folder" s={21} />
            <span>Vault</span>
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
