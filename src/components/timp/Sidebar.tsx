// App sidebars — ported from HO_NAV / AG_NAV / buildSidebar() in design-reference/shell.js.
// The My Properties collapse and the mobile drawer are handled by PrototypeBehaviors.
import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { Brand } from "./Brand";

type Item = {
  k: string;
  t: ReactNode;
  i: string;
  href?: string;
  stub?: string;
  badge?: string;
  props?: boolean;
};

const REFER_LABEL = (
  <>
    Refer a Friend
    <br />
    or Realtor
  </>
);

const HO_PROPS = [
  { t: "123 Happiness St", href: "/ho", on: true },
  { t: "245 Peaceful Ln", href: "/ho/profile" },
  { t: "1117 Humble Way", href: "/ho/profile" },
];
const HO_NAV: Item[] = [
  { k: "dash", t: "My Dashboard", i: "i-home", href: "/ho" },
  { k: "profile", t: "My Properties", i: "i-home-health", href: "/ho/profile", props: true },
  { k: "vault", t: "My Vault", i: "i-folder", href: "/ho/vault" },
  { k: "alerts", t: "My Alerts", i: "i-bell", href: "/ho/alerts", badge: "2" },
  { k: "reports", t: "My Reports", i: "i-chart", href: "/ho/reports" },
  { k: "estimate", t: "Request Price Estimate", i: "i-dollar", href: "/ho/estimate" },
];
const HO_NAV2: Item[] = [
  { k: "resources", t: "Resources", i: "i-book", href: "/ho/resources" },
  { k: "providers", t: "Service Providers", i: "i-users", href: "/ho/providers" },
  { k: "refer", t: REFER_LABEL, i: "i-gift", stub: "Refer a Friend or Realtor" },
];
const AG_NAV: Item[] = [
  { k: "dash", t: "My Dashboard", i: "i-home", href: "/agent" },
  { k: "clients", t: "My Clients", i: "i-users", href: "/agent/clients" },
  { k: "vaults", t: "My Property Vaults", i: "i-case", href: "/agent/vaults" },
  { k: "activity", t: "My Activity", i: "i-activity", stub: "My Activity" },
  { k: "alerts", t: "My Alerts", i: "i-bell", href: "/agent/alerts", badge: "3" },
  { k: "mkt", t: "My Marketing Center", i: "i-megaphone", href: "/agent/marketing" },
  { k: "reports", t: "My Reports", i: "i-doc", stub: "My Reports" },
];
const AG_NAV2: Item[] = [
  { k: "resources", t: "Resources", i: "i-book", href: "/agent/resources" },
  { k: "vendors", t: "Service Providers", i: "i-tools", href: "/agent/providers" },
];

function NavItem({ n, active }: { n: Item; active: string }) {
  const cls = "snav" + (n.k === active ? " is-on" : "");
  const body = (
    <>
      <svg className="ic" width="19" height="19">
        <use href={"#" + n.i} />
      </svg>{" "}
      {n.t}
      {n.badge ? <span className="pill num">{n.badge}</span> : null}
      {n.props ? (
        <svg className="chevx" width="12" height="12">
          <use href="#i-chevd" />
        </svg>
      ) : null}
    </>
  );
  return n.stub ? (
    <button className={cls} style={{ width: "auto", textAlign: "left" }} data-stub={n.stub}>
      {body}
    </button>
  ) : (
    <Link className={cls} href={n.href!}>
      {body}
    </Link>
  );
}

function StubButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="snav" style={{ width: "auto", textAlign: "left" }} data-stub={label}>
      <svg className="ic" width="19" height="19">
        <use href={"#" + icon} />
      </svg>{" "}
      {label}
    </button>
  );
}

export function Sidebar({ kind, active }: { kind: string; active: string }) {
  if (kind === "agent") {
    return (
      <aside className="side side-agent">
        <Link className="side-brand" href="/" aria-label="ThisIsMyProperty.com home">
          <Brand />
        </Link>
        {AG_NAV.map((n) => (
          <NavItem key={n.k} n={n} active={active} />
        ))}
        <div className="side-sep"></div>
        {AG_NAV2.map((n) => (
          <NavItem key={n.k} n={n} active={active} />
        ))}
        <div className="side-sep"></div>
        <Link className="snav-mission" href="/mission">
          <svg className="ic" width="24" height="24" style={{ color: "var(--side-accent)" }}>
            <use href="#i-heart-fill" />
          </svg>
          <div>
            <b style={{ color: "var(--side-accent)" }}>OUR MISSION:</b>
            <span>The Greater Good.</span>
          </div>
        </Link>
        <NavItem n={{ k: "refer", t: REFER_LABEL, i: "i-gift", stub: "Refer a Friend or Realtor" }} active={active} />
        <div className="side-sep"></div>
        <StubButton icon="i-help" label="Help" />
      </aside>
    );
  }

  return (
    <aside className="side">
      <Link className="side-brand" href="/" aria-label="ThisIsMyProperty.com home">
        <Brand />
      </Link>
      <div className="side-sep" style={{ marginTop: "2px" }}></div>
      {HO_NAV.map((n) => (
        <Fragment key={n.k}>
          <NavItem n={n} active={active} />
          {n.props ? (
            <div className="snav-sub" data-props="">
              {HO_PROPS.map((p) => (
                <Link key={p.t} className={"subnav" + (p.on ? " is-on" : "")} href={p.href}>
                  <svg className="ic" width="15" height="15">
                    <use href="#i-home" />
                  </svg>{" "}
                  {p.t}
                </Link>
              ))}
            </div>
          ) : null}
          {n.k === "vault" ? (
            <Link className="snav-add" href="/ho/add">
              <svg width="19" height="19">
                <use href="#i-plus-circle" />
              </svg>{" "}
              Add New
            </Link>
          ) : null}
        </Fragment>
      ))}
      <div className="side-sep"></div>
      <Link className="snav-mission ho-mission" href="/mission">
        <svg className="ic" width="22" height="22">
          <use href="#i-heart-hand" />
        </svg>
        <div>
          <b style={{ color: "var(--side-accent)" }}>OUR MISSION:</b>
          <span>The Greater Good</span>
        </div>
      </Link>
      <div className="side-sep"></div>
      {HO_NAV2.map((n) => (
        <NavItem key={n.k} n={n} active={active} />
      ))}
      <div className="side-sep"></div>
      <StubButton icon="i-cog" label="Settings" />
      <StubButton icon="i-help" label="Help" />
    </aside>
  );
}
