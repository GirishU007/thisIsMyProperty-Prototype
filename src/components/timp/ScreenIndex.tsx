// Prototype screen index (reviewer aid) — ported from the end of design-reference/prototype.html.
// Open/close is handled by PrototypeBehaviors. Hide it by setting NEXT_PUBLIC_SHOW_SCREEN_INDEX=false.
import Link from "next/link";

export function ScreenIndex() {
  if (process.env.NEXT_PUBLIC_SHOW_SCREEN_INDEX === "false") return null;
  return (
    <>
    {/* ============================ SCREEN INDEX (prototype navigation aid) ============================ */}
    {" "}
    <button className="fab" id="fab" aria-haspopup="dialog">
      <svg width="15" height="15">
        <use href="#i-grid" />
      </svg>{" "}Screens</button>
    {" "}
    <div className="sheet" id="sheet" role="dialog" aria-label="Prototype screen index">
      {" "}
      <div className="sheet-in">
        {" "}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          {" "}
          <div>
            <h3>Prototype screen index</h3>
            <p className="sub">21 screens. Every route below is reachable by clicking through the UI — this list is a shortcut for reviewers.</p>
          </div>
          {" "}
          <button id="sheet-x" style={{ marginLeft: "auto", color: "var(--slate)" }} aria-label="Close">
            <svg width="20" height="20">
              <use href="#i-x" />
            </svg>
          </button>
          {" "}</div>
        {" "}
        <div className="idxgroup">
          {" "}
          <span className="eyebrow">Public site</span>
          {" "}
          <div className="idxlist">
            {" "}
            <Link className="idx" href="/">
              <span className="n num">01</span>{" "}Landing Page{" "}
              <code>/</code>
            </Link>
            {" "}
            <Link className="idx" href="/agents">
              <span className="n num">02</span>{" "}Agent Landing Page{" "}
              <code>/agents</code>
            </Link>
            {" "}
            <Link className="idx" href="/mission">
              <span className="n num">03</span>{" "}Our Mission: The Greater Good{" "}
              <code>/mission</code>
            </Link>
            {" "}
            <Link className="idx" href="/providers/homeowners">
              <span className="n num">02d</span>{" "}Service Providers — Homeowners{" "}
              <code>/providers/homeowners</code>
            </Link>
            {" "}
            <Link className="idx" href="/providers">
              <span className="n num">02c</span>{" "}Service Providers{" "}
              <code>/providers</code>
            </Link>
            {" "}
            <Link className="idx" href="/brokers">
              <span className="n num">02b</span>{" "}Brokers & Teams{" "}
              <code>/brokers</code>
            </Link>
            {" "}
            <Link className="idx" href="/how">
              <span className="n num">03b</span>{" "}How It Works{" "}
              <code>/how</code>
            </Link>
            {" "}
            <Link className="idx" href="/try">
              <span className="n num">03e</span>{" "}Try It For Free{" "}
              <code>/try</code>
            </Link>
            {" "}
            <Link className="idx" href="/register">
              <span className="n num">03c</span>{" "}Homeowner Registration{" "}
              <code>/register</code>
            </Link>
            {" "}
            <Link className="idx" href="/register/agent">
              <span className="n num">03d</span>{" "}Agent Registration{" "}
              <code>/register/agent</code>
            </Link>
            {" "}
            <Link className="idx" href="/pricing">
              <span className="n num">04</span>{" "}Pricing{" "}
              <code>/pricing</code>
            </Link>
            {" "}
            <Link className="idx" href="/pricing/agents">
              <span className="n num">03b</span>{" "}Agent Pricing{" "}
              <code>/pricing/agents</code>
            </Link>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="idxgroup">
          {" "}
          <span className="eyebrow">Homeowner app</span>
          {" "}
          <div className="idxlist">
            {" "}
            <Link className="idx" href="/ho">
              <span className="n num">05</span>{" "}Dashboard{" "}
              <code>/ho</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/reports">
              <span className="n num">06</span>{" "}My Reports{" "}
              <code>/ho/reports</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/improvements">
              <span className="n num">06c</span>{" "}Home Improvements (Summary){" "}
              <code>/ho/improvements</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/improvements/detailed">
              <span className="n num">06d</span>{" "}Home Improvements (Detailed){" "}
              <code>/ho/improvements/detailed</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/health">
              <span className="n num">06</span>{" "}Home Health{" "}
              <code>/ho/health</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/report">
              <span className="n num">06b</span>{" "}Home Health Score Report{" "}
              <code>/ho/report</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/profile">
              <span className="n num">07</span>{" "}My Properties{" "}
              <code>/ho/profile</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/alerts">
              <span className="n num">08</span>{" "}Alerts{" "}
              <code>/ho/alerts</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/maintenance">
              <span className="n num">08b</span>{" "}Upcoming Maintenance{" "}
              <code>/ho/maintenance</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/vault">
              <span className="n num">09</span>{" "}Property Vault{" "}
              <code>/ho/vault</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/add">
              <span className="n num">09b</span>{" "}Add New{" "}
              <code>/ho/add</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/estimate">
              <span className="n num">10</span>{" "}Costs & Estimates{" "}
              <code>/ho/estimate</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/estimate/hvac">
              <span className="n num">10b</span>{" "}HVAC Price Estimate{" "}
              <code>/ho/estimate/hvac</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/providers">
              <span className="n num">11</span>{" "}Vendors{" "}
              <code>/ho/providers</code>
            </Link>
            {" "}
            <Link className="idx" href="/ho/resources">
              <span className="n num">12</span>{" "}Resources{" "}
              <code>/ho/resources</code>
            </Link>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="idxgroup">
          {" "}
          <span className="eyebrow">Agent app</span>
          {" "}
          <div className="idxlist">
            {" "}
            <Link className="idx" href="/agent">
              <span className="n num">13</span>{" "}Agent Dashboard{" "}
              <code>/agent</code>
            </Link>
            {" "}
            <Link className="idx" href="/agent/clients">
              <span className="n num">14</span>{" "}My Clients{" "}
              <code>/agent/clients</code>
            </Link>
            {" "}
            <Link className="idx" href="/agent/vaults">
              <span className="n num">15</span>{" "}Property Vaults{" "}
              <code>/agent/vaults</code>
            </Link>
            {" "}
            <Link className="idx" href="/agent/alerts">
              <span className="n num">16</span>{" "}Alerts{" "}
              <code>/agent/alerts</code>
            </Link>
            {" "}
            <Link className="idx" href="/agent/marketing">
              <span className="n num">17</span>{" "}My Marketing Center{" "}
              <code>/agent/marketing</code>
            </Link>
            {" "}
            <Link className="idx" href="/agent/resources">
              <span className="n num">18</span>{" "}Resources{" "}
              <code>/agent/resources</code>
            </Link>
            {" "}
            <Link className="idx" href="/agent/providers">
              <span className="n num">19</span>{" "}Service Providers{" "}
              <code>/agent/providers</code>
            </Link>
            {" "}</div>
          {" "}</div>
        {" "}
        <p className="tiny muted" style={{ marginTop: "16px" }}>Prototype scope per the requirements deck: main level for each section only, no sub-levels. HVAC and Roof data is representative sample data.</p>
        {" "}</div>
      {" "}</div>
    </>
  );
}
