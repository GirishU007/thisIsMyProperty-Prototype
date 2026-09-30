/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/34-agent.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Agent Dashboard" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-agent" data-route="/agent">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="agent" active="dash" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              <h1>Agent Dashboard</h1>
              <div className="sub">Welcome back, Sarah! Here’s an overview of your business.</div>
            </div>
            {" "}
            <div className="appbar-right">
              {" "}
              <span className="searchbox" style={{ minWidth: "0" }}>
                <svg width="15" height="15">
                  <use href="#i-search" />
                </svg>{" "}Search</span>
              {" "}
              <Link className="iconbtn" href="/agent/alerts">
                <svg width="17" height="17">
                  <use href="#i-bell" />
                </svg>
                <span className="dot num">3</span>
              </Link>
              {" "}
              <button className="iconbtn" data-stub="Help center">
                <svg width="17" height="17">
                  <use href="#i-help" />
                </svg>
              </button>
              {" "}
              <span className="whoblock">
                <span className="ph"></span>
                <span>
                  <b>Welcome, Sarah</b>
                </span>
                {" "}
                <svg width="14" height="14" style={{ color: "var(--slate)" }}>
                  <use href="#i-chevd" />
                </svg>
              </span>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="content">
            {" "}
            <div className="akpis">
              {" "}
              <div className="akpi">
                <div className="t">
                  <b>My Clients</b>
                  <svg width="14" height="14">
                    <use href="#i-info" />
                  </svg>
                </div>
                {" "}
                <div className="ic">
                  <svg width="34" height="34">
                    <use href="#i-users3" />
                  </svg>
                </div>
                {" "}
                <div className="n num">128</div>
                <div className="d num">↑ 12%</div>
                <div className="s">vs. last month</div>
              </div>
              {" "}
              <div className="akpi">
                <div className="t">
                  <b>Property Vaults</b>
                  <svg width="14" height="14">
                    <use href="#i-info" />
                  </svg>
                </div>
                {" "}
                <div className="ic">
                  <svg width="34" height="34">
                    <use href="#i-home" />
                  </svg>
                </div>
                {" "}
                <div className="n num">96</div>
                <div className="d num">↑ 8%</div>
                <div className="s">vs. last month</div>
              </div>
              {" "}
              <div className="akpi">
                <div className="t">
                  <b>Client Engagement</b>
                  <svg width="14" height="14">
                    <use href="#i-info" />
                  </svg>
                </div>
                {" "}
                <div className="ic">
                  <svg width="34" height="34">
                    <use href="#i-chart" />
                  </svg>
                </div>
                {" "}
                <div className="n num">87%</div>
                <div className="d num">↑ 6%</div>
                <div className="s">vs. last month</div>
              </div>
              {" "}
              <div className="akpi">
                <div className="t">
                  <b>Next Opportunities</b>
                  <svg width="14" height="14">
                    <use href="#i-info" />
                  </svg>
                </div>
                {" "}
                <div className="ic">
                  <svg width="34" height="34">
                    <use href="#i-handshake" />
                  </svg>
                </div>
                {" "}
                <div className="n num">14</div>
                <div className="d num">↑ 27%</div>
                <div className="s">vs. last month</div>
              </div>
              {" "}</div>
            {" "}
            <div className="atwo">
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <b style={{ fontSize: "16px" }}>Recent Client Activity</b>
                  <Link className="link" href="/agent/clients">View All</Link>
                </div>
                {" "}
                <div className="actrow">
                  <span className="av" style={{ background: "#DCEBF5" }}>JF</span>
                  <div>
                    <b>Johnson Family</b>
                    <span>Uploaded HVAC receipt</span>
                  </div>
                  <span className="dt num">May 20, 2026</span>
                </div>
                {" "}
                <div className="actrow">
                  <span className="av" style={{ background: "#D9E7F2" }}>SL</span>
                  <div>
                    <b>Smith League</b>
                    <span>Requested price estimate</span>
                  </div>
                  <span className="dt num">May 19, 2026</span>
                </div>
                {" "}
                <div className="actrow">
                  <span className="av" style={{ background: "#D7EFE8" }}>MC</span>
                  <div>
                    <b>Martinez Client</b>
                    <span>Added new property</span>
                  </div>
                  <span className="dt num">May 18, 2026</span>
                </div>
                {" "}
                <div className="actrow">
                  <span className="av" style={{ background: "#DDE7F5" }}>BC</span>
                  <div>
                    <b>Brown Client</b>
                    <span>Viewed market report</span>
                  </div>
                  <span className="dt num">May 17, 2026</span>
                </div>
                {" "}
                <div className="actrow">
                  <span className="av" style={{ background: "#FBE3DC" }}>TK</span>
                  <div>
                    <b>Taylor Family</b>
                    <span>Updated insurance information</span>
                  </div>
                  <span className="dt num">May 16, 2026</span>
                </div>
                {" "}</div>
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <b style={{ fontSize: "16px" }}>Top Client Alerts</b>
                  <Link className="link" href="/agent/alerts">View All</Link>
                </div>
                {" "}
                <div className="alrow">
                  <span className="ic" style={{ background: "#FBE3E3", color: "var(--red)" }}>
                    <svg width="19" height="19">
                      <use href="#i-warn" />
                    </svg>
                  </span>
                  <b>Roof inspection due</b>
                  <span className="c">3 Clients</span>
                </div>
                {" "}
                <div className="alrow">
                  <span className="ic" style={{ background: "#E4EDF3", color: "var(--navy)" }}>
                    <svg width="19" height="19">
                      <use href="#i-gear" />
                    </svg>
                  </span>
                  <b>HVAC service due</b>
                  <span className="c">5 Clients</span>
                </div>
                {" "}
                <div className="alrow">
                  <span className="ic" style={{ background: "#E2EEF7", color: "#3B7EA1" }}>
                    <svg width="19" height="19">
                      <use href="#i-doc" />
                    </svg>
                  </span>
                  <b>Warranty expiring</b>
                  <span className="c">2 Clients</span>
                </div>
                {" "}
                <div className="alrow">
                  <span className="ic" style={{ background: "#DCF0EF", color: "var(--teal-deep)" }}>
                    <svg width="19" height="19">
                      <use href="#i-drop" />
                    </svg>
                  </span>
                  <b>Water heater replacement</b>
                  <span className="c">2 Clients</span>
                </div>
                {" "}
                <div className="alrow">
                  <span className="ic" style={{ background: "#E2EAF7", color: "var(--navy)" }}>
                    <svg width="19" height="19">
                      <use href="#i-home" />
                    </svg>
                  </span>
                  <b>Home insurance renewal</b>
                  <span className="c">4 Clients</span>
                </div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="sect-title">
              <h2>Property Vaults Overview</h2>
              <Link className="link" href="/agent/vaults">View All</Link>
            </div>
            {" "}
            <div className="agprops">
              {" "}
              <div className="agprop">
                {" "}
                <Link className="photo ph1" href="/agent/vaults"></Link>
                {" "}
                <div className="bd">
                  {" "}
                  <div className="ad">
                    <b>123 Happiness Street<br />Safety Harbor, FL 34695</b>
                    <svg width="15" height="15" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                      <use href="#i-vdots" />
                    </svg>
                  </div>
                  {" "}
                  <div className="st">
                    {" "}
                    <div>
                      <div className="k">Home Health Score</div>
                      <div className="sc good num">82</div>
                      <div className="note good">Good</div>
                    </div>
                    {" "}
                    <div>
                      <div className="k">Est. Value</div>
                      <div className="val num">$675,000</div>
                      <div className="dl num">↑ 5.2%</div>
                      <div className="vs">(vs. last year)</div>
                    </div>
                    {" "}</div>
                  {" "}</div>
                {" "}
                <Link className="go" href="/agent/vaults">View Property →</Link>
                {" "}</div>
              {" "}
              <div className="agprop">
                {" "}
                <Link className="photo ph2" href="/agent/vaults"></Link>
                {" "}
                <div className="bd">
                  {" "}
                  <div className="ad">
                    <b>245 Peaceful Lane<br />Palm Harbor, FL 34683</b>
                    <svg width="15" height="15" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                      <use href="#i-vdots" />
                    </svg>
                  </div>
                  {" "}
                  <div className="st">
                    {" "}
                    <div>
                      <div className="k">Home Health Score</div>
                      <div className="sc fair num">74</div>
                      <div className="note fair">Fair</div>
                    </div>
                    {" "}
                    <div>
                      <div className="k">Est. Value</div>
                      <div className="val num">$525,000</div>
                      <div className="dl num">↑ 3.1%</div>
                      <div className="vs">(vs. last year)</div>
                    </div>
                    {" "}</div>
                  {" "}</div>
                {" "}
                <Link className="go" href="/agent/vaults">View Property →</Link>
                {" "}</div>
              {" "}
              <div className="agprop">
                {" "}
                <Link className="photo ph3" href="/agent/vaults"></Link>
                {" "}
                <div className="bd">
                  {" "}
                  <div className="ad">
                    <b>1117 Humble Way<br />Dunedin, FL 34698</b>
                    <svg width="15" height="15" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                      <use href="#i-vdots" />
                    </svg>
                  </div>
                  {" "}
                  <div className="st">
                    {" "}
                    <div>
                      <div className="k">Home Health Score</div>
                      <div className="sc good num">79</div>
                      <div className="note good">Good</div>
                    </div>
                    {" "}
                    <div>
                      <div className="k">Est. Value</div>
                      <div className="val num">$430,000</div>
                      <div className="dl num">↑ 4.0%</div>
                      <div className="vs">(vs. last year)</div>
                    </div>
                    {" "}</div>
                  {" "}</div>
                {" "}
                <Link className="go" href="/agent/vaults">View Property →</Link>
                {" "}</div>
              {" "}
              <Link className="agadd" href="/agent/vaults">
                {" "}
                <div>
                  <div className="ring">
                    <svg width="26" height="26">
                      <use href="#i-plus" />
                    </svg>
                  </div>
                  {" "}
                  <b>Add Property</b>
                  <span>You have 3 property<br />slots remaining.</span>
                </div>
                {" "}</Link>
              {" "}</div>
            {" "}
            <div className="split-main">
              {" "}
              <div>
                {" "}
                <div className="sect-title" style={{ marginTop: "0" }}>
                  <h2>Quick Actions</h2>
                </div>
                {" "}
                <div className="qa">
                  {" "}
                  <Link className="qabtn" href="/agent/clients">
                    <span className="ic">
                      <svg width="14" height="14">
                        <use href="#i-users" />
                      </svg>
                    </span>{" "}Add Client</Link>
                  {" "}
                  <Link className="qabtn" href="/agent/marketing">
                    <span className="ic">
                      <svg width="14" height="14">
                        <use href="#i-megaphone" />
                      </svg>
                    </span>{" "}Create Marketing</Link>
                  {" "}
                  <button className="qabtn" data-stub="Generate report">
                    <span className="ic">
                      <svg width="14" height="14">
                        <use href="#i-doc" />
                      </svg>
                    </span>{" "}Generate Report</button>
                  {" "}
                  <Link className="qabtn" href="/agent/vaults">
                    <span className="ic">
                      <svg width="14" height="14">
                        <use href="#i-home" />
                      </svg>
                    </span>{" "}Add Property</Link>
                  {" "}
                  <Link className="qabtn" href="/ho/estimate">
                    <span className="ic">
                      <svg width="14" height="14">
                        <use href="#i-tag" />
                      </svg>
                    </span>{" "}Request Price Estimate</Link>
                  {" "}
                  <Link className="qabtn" href="/agent/providers">
                    <span className="ic">
                      <svg width="14" height="14">
                        <use href="#i-users3" />
                      </svg>
                    </span>{" "}Find a Vendor</Link>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div className="insight">
                {" "}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="eyebrow">Market & Cost Trends</span>
                  <span className="sm static-link" style={{ marginLeft: "auto", color: "var(--teal-deep)", fontWeight: "700" }}>View Trends</span>
                </div>
                {" "}
                <p className="sm muted" style={{ margin: "7px 0 4px" }}>Roof replacement costs in your area are up 6.2% compared to last year.</p>
                {" "}
                <svg className="spark" viewBox="0 0 260 52" role="img" aria-label="Roof replacement cost index trending up 6.2 percent over 12 months">
                  {" "}
                  <path d="M4 44 L30 41 L56 38 L82 40 L108 34 L134 31 L160 33 L186 26 L212 20 L238 12" fill="none" stroke="#19A7A5" strokeWidth="2" />
                  {" "}
                  <path d="M4 44 L30 41 L56 38 L82 40 L108 34 L134 31 L160 33 L186 26 L212 20 L238 12 L238 50 L4 50 Z" fill="#19A7A5" opacity=".08" />
                  {" "}
                  <circle cx="4" cy="44" r="2.4" fill="#19A7A5" />
                  <circle cx="56" cy="38" r="2.4" fill="#19A7A5" />
                  <circle cx="108" cy="34" r="2.4" fill="#19A7A5" />
                  <circle cx="160" cy="33" r="2.4" fill="#19A7A5" />
                  <circle cx="212" cy="20" r="2.4" fill="#19A7A5" />
                  {" "}
                  <circle cx="238" cy="12" r="3.6" fill="#0F8280" />
                  {" "}</svg>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="whyit">
              {" "}
              <svg className="ic" width="18" height="18">
                <use href="#i-star" />
              </svg>
              {" "}
              <div>
                <b>Why it matters</b>
                {" "}
                <span>Accurate records help you strengthen client relationships, grow your business, and create more opportunities. Build your clients’ Property Vault.</span>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
