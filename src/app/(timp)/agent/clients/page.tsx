/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/03-agent-clients.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "My Clients" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-clients" data-route="/agent/clients">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="agent" active="clients" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar" style={{ gap: "18px" }}>
            <MenuButton />
            {" "}
            <span className="bigsearch">
              <svg width="16" height="16">
                <use href="#i-search" />
              </svg>{" "}Search clients, properties, notes, or keywords…</span>
            {" "}
            <div className="appbar-right">
              {" "}
              <Link className="iconbtn" href="/agent/alerts">
                <svg width="18" height="18">
                  <use href="#i-bell" />
                </svg>
                <span className="dot num">3</span>
              </Link>
              {" "}
              <button className="iconbtn" data-stub="Help center">
                <svg width="18" height="18">
                  <use href="#i-help" />
                </svg>
              </button>
              {" "}
              <span className="whoblock">
                <span className="ph"></span>
                <span>
                  <b>Welcome, Sarah</b>
                  <span>Agent</span>
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
            <div className="sect-title" style={{ marginTop: "0", alignItems: "flex-start" }}>
              {" "}
              <div>
                <h1 style={{ fontSize: "31px", letterSpacing: "-.02em" }}>Client Engagement</h1>
                {" "}
                <div className="sub">Stay connected. Stronger relationships create lasting opportunities.</div>
              </div>
              {" "}
              <button className="btn" style={{ marginLeft: "auto", background: "var(--navy-deep)", color: "#fff", fontSize: "13px", textTransform: "none", letterSpacing: "0", padding: "13px 20px", borderRadius: "var(--r-sm)" }} data-stub="Add New Client">
                <svg width="17" height="17">
                  <use href="#i-plus" />
                </svg>{" "}Add New Client</button>
              {" "}</div>
            {" "}
            <div className="kpis five">
              {" "}
              <div className="kpi">
                <span className="orb ">
                  <svg width="23" height="23">
                    <use href="#i-users3" />
                  </svg>
                </span>
                <div>
                  <div className="n num">128</div>
                  <div className="t">Total Clients</div>
                </div>
              </div>
              {" "}
              <div className="kpi">
                <span className="orb t">
                  <svg width="23" height="23">
                    <use href="#i-send" />
                  </svg>
                </span>
                <div>
                  <div className="n num">94</div>
                  <div className="t">Active This Year</div>
                  <div className="s">(73%)</div>
                </div>
              </div>
              {" "}
              <div className="kpi">
                <span className="orb g">
                  <svg width="23" height="23">
                    <use href="#i-trend" />
                  </svg>
                </span>
                <div>
                  <div className="n num">+28%</div>
                  <div className="t">Client Interactions</div>
                  <div className="s">vs. last quarter</div>
                </div>
              </div>
              {" "}
              <div className="kpi">
                <span className="orb a">
                  <svg width="23" height="23">
                    <use href="#i-calendar" />
                  </svg>
                </span>
                <div>
                  <div className="n num">18</div>
                  <div className="t">Clients Need Follow Up</div>
                </div>
              </div>
              {" "}
              <div className="kpi">
                <span className="orb ">
                  <svg width="23" height="23">
                    <use href="#i-users" />
                  </svg>
                </span>
                <div>
                  <div className="n num">12</div>
                  <div className="t">New Clients This Year</div>
                </div>
              </div>
              {" "}</div>
            {" "}
            <div className="tabbar">
              {" "}
              <span className="tab is-on">All Clients</span>
              {" "}
              <button className="tab" data-stub="High engagement clients">High Engagement{" "}
                <span className="c" style={{ background: "#DFF1E6", color: "#1E7A4C" }}>28</span>
              </button>
              {" "}
              <button className="tab" data-stub="Clients needing follow up">Needs Follow Up{" "}
                <span className="c">18</span>
              </button>
              {" "}
              <button className="tab" data-stub="Past clients">Past Clients{" "}
                <span className="c amber">12</span>
              </button>
              {" "}
              <span className="right">
                {" "}
                <span className="searchbox">
                  <svg width="14" height="14">
                    <use href="#i-search" />
                  </svg>{" "}Search clients…</span>
                {" "}
                <button className="btn btn-ghost" style={{ padding: "9px 15px" }} data-stub="Filters">
                  <svg width="15" height="15">
                    <use href="#i-funnel" />
                  </svg>{" "}Filters</button>
                {" "}</span>
              {" "}</div>
            {" "}
            <div className="tablewrap">
              {" "}
              <table className="clients">
                {" "}
                <thead>
                  <tr>
                    {" "}
                    <th>
                      <span className="cbox"></span>
                    </th>
                    {" "}
                    <th>Client Name{" "}
                      <svg width="11" height="11">
                        <use href="#i-chevd" />
                      </svg>
                    </th>
                    {" "}
                    <th>Properties{" "}
                      <svg width="11" height="11">
                        <use href="#i-chevd" />
                      </svg>
                    </th>
                    {" "}
                    <th>Last Interaction{" "}
                      <svg width="11" height="11">
                        <use href="#i-chevd" />
                      </svg>
                    </th>
                    {" "}
                    <th># of Interactions<br />
                      <span style={{ fontWeight: "400", color: "var(--slate)" }}>(Last 90 Days)</span>
                      {" "}
                      <svg width="11" height="11">
                        <use href="#i-chevd" />
                      </svg>
                    </th>
                    {" "}
                    <th>Engagement Level{" "}
                      <svg width="11" height="11">
                        <use href="#i-chevd" />
                      </svg>
                    </th>
                    {" "}
                    <th>Next Follow Up{" "}
                      <svg width="11" height="11">
                        <use href="#i-chevd" />
                      </svg>
                    </th>
                    {" "}
                    <th>Primary Opportunity{" "}
                      <svg width="11" height="11">
                        <use href="#i-chevd" />
                      </svg>
                    </th>
                    {" "}
                    <th style={{ textAlign: "right" }}>Actions</th>
                    {" "}</tr>
                </thead>
                {" "}
                <tbody>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="cbox"></span>
                    </td>
                    {" "}
                    <td>
                      <span className="cname">
                        <span className="cav cav-img cav-cav0"></span>
                        <b>John Smith</b>
                      </span>
                    </td>
                    {" "}
                    <td className="num">2</td>
                    {" "}
                    <td>
                      <span className="lastint">
                        <b className="num">Sep 2, 2026</b>
                        <span>Sent listing</span>
                      </span>
                    </td>
                    {" "}
                    <td className="num">14</td>
                    {" "}
                    <td>
                      <span className="eng eng-vhigh">Very High</span>
                    </td>
                    {" "}
                    <td>
                      <span className="duered num">Sep 15, 2026</span>
                    </td>
                    {" "}
                    <td>List current home</td>
                    {" "}
                    <td>
                      <span className="viewcell">
                        <Link href="/agent/vaults">View{" "}
                          <svg width="13" height="13">
                            <use href="#i-arrow" />
                          </svg>
                        </Link>
                        <svg className="dots" width="15" height="15">
                          <use href="#i-vdots" />
                        </svg>
                      </span>
                    </td>
                    {" "}</tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="cbox"></span>
                    </td>
                    {" "}
                    <td>
                      <span className="cname">
                        <span className="cav cav-img cav-cav1"></span>
                        <b>Maria Kennedy</b>
                      </span>
                    </td>
                    {" "}
                    <td className="num">1</td>
                    {" "}
                    <td>
                      <span className="lastint">
                        <b className="num">Aug 28, 2026</b>
                        <span>Phone call</span>
                      </span>
                    </td>
                    {" "}
                    <td className="num">12</td>
                    {" "}
                    <td>
                      <span className="eng eng-high">High</span>
                    </td>
                    {" "}
                    <td>
                      <span className="num">Sep 10, 2026</span>
                    </td>
                    {" "}
                    <td>Buy next home</td>
                    {" "}
                    <td>
                      <span className="viewcell">
                        <Link href="/agent/vaults">View{" "}
                          <svg width="13" height="13">
                            <use href="#i-arrow" />
                          </svg>
                        </Link>
                        <svg className="dots" width="15" height="15">
                          <use href="#i-vdots" />
                        </svg>
                      </span>
                    </td>
                    {" "}</tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="cbox"></span>
                    </td>
                    {" "}
                    <td>
                      <span className="cname">
                        <span className="cav cav-img cav-cav2"></span>
                        <b>David Thompson</b>
                      </span>
                    </td>
                    {" "}
                    <td className="num">3</td>
                    {" "}
                    <td>
                      <span className="lastint">
                        <b className="num">Aug 20, 2026</b>
                        <span>Property tour</span>
                      </span>
                    </td>
                    {" "}
                    <td className="num">10</td>
                    {" "}
                    <td>
                      <span className="eng eng-high">High</span>
                    </td>
                    {" "}
                    <td>
                      <span className="duered num">Sep 5, 2026</span>
                    </td>
                    {" "}
                    <td>Investment property</td>
                    {" "}
                    <td>
                      <span className="viewcell">
                        <Link href="/agent/vaults">View{" "}
                          <svg width="13" height="13">
                            <use href="#i-arrow" />
                          </svg>
                        </Link>
                        <svg className="dots" width="15" height="15">
                          <use href="#i-vdots" />
                        </svg>
                      </span>
                    </td>
                    {" "}</tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="cbox"></span>
                    </td>
                    {" "}
                    <td>
                      <span className="cname">
                        <span className="cav cav-img cav-cav3"></span>
                        <b>Sheryl Larson</b>
                      </span>
                    </td>
                    {" "}
                    <td className="num">1</td>
                    {" "}
                    <td>
                      <span className="lastint">
                        <b className="num">Aug 15, 2026</b>
                        <span>Email</span>
                      </span>
                    </td>
                    {" "}
                    <td className="num">8</td>
                    {" "}
                    <td>
                      <span className="eng eng-med">Medium</span>
                    </td>
                    {" "}
                    <td>
                      <span className="num">Sep 20, 2026</span>
                    </td>
                    {" "}
                    <td>Refinance options</td>
                    {" "}
                    <td>
                      <span className="viewcell">
                        <Link href="/agent/vaults">View{" "}
                          <svg width="13" height="13">
                            <use href="#i-arrow" />
                          </svg>
                        </Link>
                        <svg className="dots" width="15" height="15">
                          <use href="#i-vdots" />
                        </svg>
                      </span>
                    </td>
                    {" "}</tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="cbox"></span>
                    </td>
                    {" "}
                    <td>
                      <span className="cname">
                        <span className="cav cav-img cav-cav4"></span>
                        <b>Robert Brown</b>
                      </span>
                    </td>
                    {" "}
                    <td className="num">2</td>
                    {" "}
                    <td>
                      <span className="lastint">
                        <b className="num">Aug 10, 2026</b>
                        <span>Document shared</span>
                      </span>
                    </td>
                    {" "}
                    <td className="num">6</td>
                    {" "}
                    <td>
                      <span className="eng eng-med">Medium</span>
                    </td>
                    {" "}
                    <td>
                      <span className="num">Sep 18, 2026</span>
                    </td>
                    {" "}
                    <td>Home improvements</td>
                    {" "}
                    <td>
                      <span className="viewcell">
                        <Link href="/agent/vaults">View{" "}
                          <svg width="13" height="13">
                            <use href="#i-arrow" />
                          </svg>
                        </Link>
                        <svg className="dots" width="15" height="15">
                          <use href="#i-vdots" />
                        </svg>
                      </span>
                    </td>
                    {" "}</tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="cbox"></span>
                    </td>
                    {" "}
                    <td>
                      <span className="cname">
                        <span className="cav cav-img cav-cav5"></span>
                        <b>Anna Collins</b>
                      </span>
                    </td>
                    {" "}
                    <td className="num">1</td>
                    {" "}
                    <td>
                      <span className="lastint">
                        <b className="num">Aug 5, 2026</b>
                        <span>Phone call</span>
                      </span>
                    </td>
                    {" "}
                    <td className="num">4</td>
                    {" "}
                    <td>
                      <span className="eng eng-low">Low</span>
                    </td>
                    {" "}
                    <td>
                      <span className="num">Sep 25, 2026</span>
                    </td>
                    {" "}
                    <td>Market update</td>
                    {" "}
                    <td>
                      <span className="viewcell">
                        <Link href="/agent/vaults">View{" "}
                          <svg width="13" height="13">
                            <use href="#i-arrow" />
                          </svg>
                        </Link>
                        <svg className="dots" width="15" height="15">
                          <use href="#i-vdots" />
                        </svg>
                      </span>
                    </td>
                    {" "}</tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="cbox"></span>
                    </td>
                    {" "}
                    <td>
                      <span className="cname">
                        <span className="cav" style={{ background: "#4C8BE2" }}>JW</span>
                        <b>Jennifer Wilson</b>
                      </span>
                    </td>
                    {" "}
                    <td className="num">1</td>
                    {" "}
                    <td>
                      <span className="lastint">
                        <b className="num">Jul 28, 2026</b>
                        <span>Email</span>
                      </span>
                    </td>
                    {" "}
                    <td className="num">3</td>
                    {" "}
                    <td>
                      <span className="eng eng-low">Low</span>
                    </td>
                    {" "}
                    <td>
                      <span className="num">Oct 1, 2026</span>
                    </td>
                    {" "}
                    <td>Buy in 2027</td>
                    {" "}
                    <td>
                      <span className="viewcell">
                        <Link href="/agent/vaults">View{" "}
                          <svg width="13" height="13">
                            <use href="#i-arrow" />
                          </svg>
                        </Link>
                        <svg className="dots" width="15" height="15">
                          <use href="#i-vdots" />
                        </svg>
                      </span>
                    </td>
                    {" "}</tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="cbox"></span>
                    </td>
                    {" "}
                    <td>
                      <span className="cname">
                        <span className="cav" style={{ background: "#4C8BE2" }}>ML</span>
                        <b>Michael Lee</b>
                      </span>
                    </td>
                    {" "}
                    <td className="num">3</td>
                    {" "}
                    <td>
                      <span className="lastint">
                        <b className="num">Jul 15, 2026</b>
                        <span>Report sent</span>
                      </span>
                    </td>
                    {" "}
                    <td className="num">2</td>
                    {" "}
                    <td>
                      <span className="eng eng-low">Low</span>
                    </td>
                    {" "}
                    <td>
                      <span className="num">Oct 10, 2026</span>
                    </td>
                    {" "}
                    <td>Check in</td>
                    {" "}
                    <td>
                      <span className="viewcell">
                        <Link href="/agent/vaults">View{" "}
                          <svg width="13" height="13">
                            <use href="#i-arrow" />
                          </svg>
                        </Link>
                        <svg className="dots" width="15" height="15">
                          <use href="#i-vdots" />
                        </svg>
                      </span>
                    </td>
                    {" "}</tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="cbox"></span>
                    </td>
                    {" "}
                    <td>
                      <span className="cname">
                        <span className="cav cav-img cav-cav8"></span>
                        <b>Patricia Green</b>
                      </span>
                    </td>
                    {" "}
                    <td className="num">1</td>
                    {" "}
                    <td>
                      <span className="lastint">
                        <b className="num">Jun 30, 2026</b>
                        <span>Phone call</span>
                      </span>
                    </td>
                    {" "}
                    <td className="num">1</td>
                    {" "}
                    <td>
                      <span className="eng eng-low">Low</span>
                    </td>
                    {" "}
                    <td>
                      <span className="num">Oct 15, 2026</span>
                    </td>
                    {" "}
                    <td>Land purchase</td>
                    {" "}
                    <td>
                      <span className="viewcell">
                        <Link href="/agent/vaults">View{" "}
                          <svg width="13" height="13">
                            <use href="#i-arrow" />
                          </svg>
                        </Link>
                        <svg className="dots" width="15" height="15">
                          <use href="#i-vdots" />
                        </svg>
                      </span>
                    </td>
                    {" "}</tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="cbox"></span>
                    </td>
                    {" "}
                    <td>
                      <span className="cname">
                        <span className="cav cav-img cav-cav9"></span>
                        <b>Thomas Wilson</b>
                      </span>
                    </td>
                    {" "}
                    <td className="num">2</td>
                    {" "}
                    <td>
                      <span className="lastint">
                        <b className="num">Jun 25, 2026</b>
                        <span>Market update</span>
                      </span>
                    </td>
                    {" "}
                    <td className="num">1</td>
                    {" "}
                    <td>
                      <span className="eng eng-low">Low</span>
                    </td>
                    {" "}
                    <td>
                      <span className="num">Oct 20, 2026</span>
                    </td>
                    {" "}
                    <td>Future listing</td>
                    {" "}
                    <td>
                      <span className="viewcell">
                        <Link href="/agent/vaults">View{" "}
                          <svg width="13" height="13">
                            <use href="#i-arrow" />
                          </svg>
                        </Link>
                        <svg className="dots" width="15" height="15">
                          <use href="#i-vdots" />
                        </svg>
                      </span>
                    </td>
                    {" "}</tr>
                  {" "}</tbody>
                {" "}</table>
              {" "}
              <div className="tfoot">
                {" "}
                <span className="n">Showing 1–10 of 128 clients</span>
                {" "}
                <span className="pager">
                  {" "}
                  <button className="pg" data-stub="Previous page">
                    <svg width="13" height="13" style={{ transform: "rotate(180deg)" }}>
                      <use href="#i-chev" />
                    </svg>
                  </button>
                  {" "}
                  <span className="pg is-on num">1</span>
                  {" "}
                  <button className="pg num" data-stub="Page 2">2</button>
                  {" "}
                  <button className="pg num" data-stub="Page 3">3</button>
                  {" "}
                  <button className="pg num" data-stub="Page 4">4</button>
                  {" "}
                  <button className="pg num" data-stub="Page 5">5</button>
                  {" "}
                  <span className="pg">…</span>
                  {" "}
                  <button className="pg num" data-stub="Page 13">13</button>
                  {" "}
                  <button className="pg" data-stub="Next page">
                    <svg width="13" height="13">
                      <use href="#i-chev" />
                    </svg>
                  </button>
                  {" "}</span>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="tipbar">
              {" "}
              <svg className="ic" width="30" height="30">
                <use href="#i-bulb" />
              </svg>
              {" "}
              <b>Pro Tip:</b>
              {" "}
              <p>Consistent communication builds trust and keeps you top of mind. Try setting a follow up today!</p>
              {" "}
              <button className="btn-pill" data-stub="Schedule outreach">
                <svg width="17" height="17">
                  <use href="#i-calendar" />
                </svg>{" "}Schedule Outreach{" "}
                <svg width="15" height="15">
                  <use href="#i-arrow" />
                </svg>
              </button>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
