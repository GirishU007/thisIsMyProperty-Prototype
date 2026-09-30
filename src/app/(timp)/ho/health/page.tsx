/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/24-ho-health.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Home Health" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-health" data-route="/ho/health">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="ho" active="reports" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              <Link className="crumb" href="/ho/reports">
                <svg width="12" height="12" style={{ transform: "rotate(180deg)" }}>
                  <use href="#i-chev" />
                </svg>{" "}Back to My Reports</Link>
              <h1>Property Health Summary Report</h1>
              <div className="sub">A quick look at the current health of your home.</div>
            </div>
            {" "}
            <div className="appbar-right">
              {" "}
              <button className="btn btn-ghost" style={{ padding: "8px 13px" }} data-stub="Print report">
                <svg width="15" height="15">
                  <use href="#i-doc" />
                </svg>{" "}Print Report</button>
              {" "}
              <Link className="btn btn-ghost" style={{ padding: "8px 13px" }} href="/ho/report">
                <svg width="15" height="15">
                  <use href="#i-download" />
                </svg>{" "}Download PDF</Link>
              {" "}
              <Link className="btn btn-ghost" style={{ padding: "8px 13px" }} href="/ho/reports">
                <svg width="15" height="15">
                  <use href="#i-chart" />
                </svg>{" "}Other Reports</Link>
              {" "}
              <div style={{ textAlign: "right" }}>
                <div className="eyebrow">Report Date</div>
                <div className="sm" style={{ fontWeight: "600", color: "var(--navy)" }}>May 20, 2026</div>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="content">
            {" "}
            <div className="phr-top">
              {" "}
              <div className="minisect">
                {" "}
                <div className="phr-prop">
                  {" "}
                  <div className="photo ph1"></div>
                  {" "}
                  <div>
                    {" "}
                    <span className="sellab">Select Property:</span>
                    {" "}
                    <div className="selbox">123 Happiness Street, Safety Harbor, FL 34695{" "}
                      <svg width="14" height="14">
                        <use href="#i-chevd" />
                      </svg>
                    </div>
                    {" "}
                    <div className="seldrop">
                      {" "}
                      <span className="is-on">123 Happiness Street, Safety Harbor, FL 34695</span>
                      {" "}
                      <span>245 Peaceful Lane, Palm Harbor, FL 34683</span>
                      {" "}
                      <span>1117 Humble Way, Dunedin, FL 34698</span>
                      {" "}</div>
                    {" "}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "9px", flexWrap: "wrap" }}>
                      {" "}
                      <h3 style={{ fontSize: "16px" }}>123 Happiness Street</h3>
                      <span className="tagpill tp-teal">Primary home</span>
                      {" "}</div>
                    {" "}
                    <p className="sm muted">Safety Harbor, FL 34695</p>
                    {" "}
                    <div className="facts">
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="15" height="15">
                          <use href="#i-home" />
                        </svg>
                        <div>
                          <div className="k">Property Type</div>
                          <div className="v">Single Family Home</div>
                        </div>
                      </div>
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="15" height="15">
                          <use href="#i-bed" />
                        </svg>
                        <div>
                          <div className="k">Bedrooms</div>
                          <div className="v num">4</div>
                        </div>
                      </div>
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="15" height="15">
                          <use href="#i-calendar" />
                        </svg>
                        <div>
                          <div className="k">Year Built</div>
                          <div className="v num">2015</div>
                        </div>
                      </div>
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="15" height="15">
                          <use href="#i-bath" />
                        </svg>
                        <div>
                          <div className="k">Bathrooms</div>
                          <div className="v num">3.5</div>
                        </div>
                      </div>
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="15" height="15">
                          <use href="#i-area" />
                        </svg>
                        <div>
                          <div className="k">Living Area</div>
                          <div className="v num">2,842 sq ft</div>
                        </div>
                      </div>
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="15" height="15">
                          <use href="#i-tree" />
                        </svg>
                        <div>
                          <div className="k">Lot Size</div>
                          <div className="v num">0.23 acres</div>
                        </div>
                      </div>
                      {" "}</div>
                    {" "}</div>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div className="scorecard">
                {" "}
                <div className="hd">
                  <b>Property Health Score</b>
                  <svg width="13" height="13">
                    <use href="#i-info" />
                  </svg>
                </div>
                {" "}
                <div className="heartg">
                  <svg viewBox="0 0 160 140" aria-hidden="true">
                    {" "}
                    <defs>
                      <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1">
                        {" "}
                        <stop offset="0" stopColor="#19A7A5" />
                        <stop offset="1" stopColor="#1C6E8C" />
                      </linearGradient>
                    </defs>
                    {" "}
                    <path d="M80 130 C80 130 12 92 12 51 C12 27 30 12 51 12 C66 12 76 21 80 30 C84 21 94 12 109 12 C130 12 148 27 148 51 C148 92 80 130 80 130 Z" fill="none" stroke="url(#hg1)" strokeWidth="9" strokeLinejoin="round" />
                    {" "}
                    <path d="M80 116 C80 116 26 86 26 53 C26 34 40 23 56 23 C68 23 76 30 80 37 C84 30 92 23 104 23 C120 23 134 34 134 53 C134 86 80 116 80 116 Z" fill="none" stroke="#9FD3DD" strokeWidth="2" />
                    {" "}</svg>
                  <div className="v">
                    <b className="num">82</b>
                    <span>Good</span>
                  </div>
                </div>
                {" "}
                <div className="wm">Well maintained!</div>
                {" "}
                <p>You’re doing great. Keep up with scheduled maintenance to protect your investment.</p>
                {" "}
                <Link className="link" href="/ho/report">View full Property Health →</Link>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="withrail narrow">
              {" "}
              <div style={{ display: "grid", gap: "14px" }}>
                {" "}
                <div className="minisect">
                  {" "}
                  <div className="minisect-h">
                    <b>System Health Overview</b>
                    <span className="link static-link">View All Systems →</span>
                  </div>
                  {" "}
                  <p className="tiny muted" style={{ margin: "-5px 0 11px" }}>The current condition of your major home systems.</p>
                  {" "}
                  <div className="hsysgrid">
                    {" "}
                    <div className="hsys">
                      <div className="ic">
                        <svg width="23" height="23">
                          <use href="#i-roof" />
                        </svg>
                      </div>
                      <div className="nm">Roof</div>
                      <div className="st good">Good</div>
                      <div className="sc num">85 / 100</div>
                      <div className="bar">
                        <i className="bg-good" style={{ width: "85%" }}></i>
                      </div>
                    </div>
                    {" "}
                    <div className="hsys">
                      <div className="ic">
                        <svg width="23" height="23">
                          <use href="#i-snow" />
                        </svg>
                      </div>
                      <div className="nm">HVAC</div>
                      <div className="st good">Good</div>
                      <div className="sc num">88 / 100</div>
                      <div className="bar">
                        <i className="bg-good" style={{ width: "88%" }}></i>
                      </div>
                    </div>
                    {" "}
                    <div className="hsys">
                      <div className="ic">
                        <svg width="23" height="23">
                          <use href="#i-drop" />
                        </svg>
                      </div>
                      <div className="nm">Plumbing</div>
                      <div className="st good">Good</div>
                      <div className="sc num">80 / 100</div>
                      <div className="bar">
                        <i className="bg-good" style={{ width: "80%" }}></i>
                      </div>
                    </div>
                    {" "}
                    <div className="hsys">
                      <div className="ic">
                        <svg width="23" height="23">
                          <use href="#i-bolt" />
                        </svg>
                      </div>
                      <div className="nm">Electrical</div>
                      <div className="st good">Good</div>
                      <div className="sc num">85 / 100</div>
                      <div className="bar">
                        <i className="bg-good" style={{ width: "85%" }}></i>
                      </div>
                    </div>
                    {" "}
                    <div className="hsys">
                      <div className="ic">
                        <svg width="23" height="23">
                          <use href="#i-appliance" />
                        </svg>
                      </div>
                      <div className="nm">Appliances</div>
                      <div className="st fair">Fair</div>
                      <div className="sc num">65 / 100</div>
                      <div className="bar">
                        <i className="bg-fair" style={{ width: "65%" }}></i>
                      </div>
                    </div>
                    {" "}
                    <div className="hsys">
                      <div className="ic">
                        <svg width="23" height="23">
                          <use href="#i-exterior" />
                        </svg>
                      </div>
                      <div className="nm">Exterior</div>
                      <div className="st good">Good</div>
                      <div className="sc num">75 / 100</div>
                      <div className="bar">
                        <i className="bg-good" style={{ width: "75%" }}></i>
                      </div>
                    </div>
                    {" "}
                    <div className="hsys">
                      <div className="ic">
                        <svg width="23" height="23">
                          <use href="#i-interior" />
                        </svg>
                      </div>
                      <div className="nm">Interior</div>
                      <div className="st good">Good</div>
                      <div className="sc num">80 / 100</div>
                      <div className="bar">
                        <i className="bg-good" style={{ width: "80%" }}></i>
                      </div>
                    </div>
                    {" "}
                    <div className="hsys">
                      <div className="ic">
                        <svg width="23" height="23">
                          <use href="#i-pool" />
                        </svg>
                      </div>
                      <div className="nm">Pool / Spa</div>
                      <div className="st good">Good</div>
                      <div className="sc num">82 / 100</div>
                      <div className="bar">
                        <i className="bg-good" style={{ width: "82%" }}></i>
                      </div>
                    </div>
                    {" "}</div>
                  {" "}
                  <div className="legend2">
                    {" "}
                    <span>
                      <i style={{ background: "var(--green)" }}></i>{" "}Good (80–100)</span>
                    {" "}
                    <span>
                      <i style={{ background: "var(--amber)" }}></i>{" "}Fair (60–79)</span>
                    {" "}
                    <span>
                      <i style={{ background: "var(--red)" }}></i>{" "}Needs Attention (0–59)</span>
                    {" "}</div>
                  {" "}</div>
                {" "}
                <div className="minisect">
                  {" "}
                  <div className="minisect-h">
                    <b>Top Improvement Opportunities</b>
                    <Link className="link" href="/ho/estimate">View All →</Link>
                  </div>
                  {" "}
                  <div className="opp">
                    <svg className="ic" width="18" height="18">
                      <use href="#i-bulb" />
                    </svg>
                    <div style={{ flex: "1" }}>
                      <b>Improve Energy Efficiency</b>
                      <p>Upgrading insulation and windows could lower energy costs.</p>
                    </div>
                    <div className="money">
                      <div className="k">Potential Savings</div>
                      <div className="v num">$420 – $680 / year</div>
                      <Link className="tiny" href="/ho/estimate" style={{ color: "var(--teal-deep)", fontWeight: "700" }}>Learn More →</Link>
                    </div>
                  </div>
                  {" "}
                  <div className="opp">
                    <svg className="ic" width="18" height="18">
                      <use href="#i-shield-check" />
                    </svg>
                    <div style={{ flex: "1" }}>
                      <b>Preventative Maintenance</b>
                      <p>Staying on top of maintenance can extend system life and prevent costly repairs.</p>
                    </div>
                    <div className="money">
                      <div className="k">Potential Savings</div>
                      <div className="v num">Up to $2,300</div>
                      <Link className="tiny" href="/ho/estimate" style={{ color: "var(--teal-deep)", fontWeight: "700" }}>Learn More →</Link>
                    </div>
                  </div>
                  {" "}
                  <div className="opp">
                    <svg className="ic" width="18" height="18">
                      <use href="#i-paint" />
                    </svg>
                    <div style={{ flex: "1" }}>
                      <b>Exterior Refresh</b>
                      <p>Repainting and sealing exterior surfaces can protect and boost curb appeal.</p>
                    </div>
                    <div className="money">
                      <div className="k">Estimated Cost</div>
                      <div className="v num" style={{ color: "var(--navy)" }}>$2,000 – $3,500</div>
                      <Link className="tiny" href="/ho/estimate" style={{ color: "var(--teal-deep)", fontWeight: "700" }}>Learn More →</Link>
                    </div>
                  </div>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div style={{ display: "grid", gap: "14px" }}>
                {" "}
                <div className="minisect">
                  {" "}
                  <div className="minisect-h">
                    <b>Upcoming Maintenance</b>
                    <Link className="link" href="/ho/maintenance">View All</Link>
                  </div>
                  {" "}
                  <div className="mrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-gear" />
                    </svg>
                    <div>
                      <b>HVAC Service</b>
                      <span>Checkup & Tune-up</span>
                    </div>
                    <div className="rt">
                      <div className="d">Due in 45 days</div>
                      <div className="dd num">Jul 15, 2026</div>
                    </div>
                  </div>
                  {" "}
                  <div className="mrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-roof" />
                    </svg>
                    <div>
                      <b>Roof Inspection</b>
                      <span>Annual Inspection</span>
                    </div>
                    <div className="rt">
                      <div className="d">Due in 120 days</div>
                      <div className="dd num">Sep 28, 2026</div>
                    </div>
                  </div>
                  {" "}
                  <div className="mrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-wrench" />
                    </svg>
                    <div>
                      <b>Plumbing Service</b>
                      <span>Whole Home Check</span>
                    </div>
                    <div className="rt">
                      <div className="d">Due in 180 days</div>
                      <div className="dd num">Nov 27, 2026</div>
                    </div>
                  </div>
                  {" "}
                  <Link className="link" href="/ho/alerts" style={{ display: "block", textAlign: "center", marginTop: "10px", fontSize: "11.5px", fontWeight: "700", color: "var(--teal-deep)" }}>View All Maintenance →</Link>
                  {" "}</div>
                {" "}
                <div className="minisect">
                  {" "}
                  <div className="minisect-h">
                    <b>Risk Alerts</b>
                    <span className="tagpill" style={{ background: "var(--red)", color: "#fff" }}>2</span>
                    <Link className="link" href="/ho/alerts">View All</Link>
                  </div>
                  {" "}
                  <div className="riskrow">
                    <svg className="ic" width="18" height="18" style={{ color: "var(--red)" }}>
                      <use href="#i-warn" />
                    </svg>
                    <div>
                      <b>Water Heater</b>
                      <p>10.6 years old<br />Typical life expectancy is 8–12 years.</p>
                      <Link className="go" href="/ho/alerts">Review Now →</Link>
                    </div>
                  </div>
                  {" "}
                  <div className="riskrow">
                    <svg className="ic" width="18" height="18" style={{ color: "var(--amber)" }}>
                      <use href="#i-warn" />
                    </svg>
                    <div>
                      <b>Appliances</b>
                      <p>2 items approaching end of life<br />Consider planning for replacement.</p>
                      <Link className="go" href="/ho/alerts" style={{ color: "var(--amber)" }}>View Details →</Link>
                    </div>
                  </div>
                  {" "}</div>
                {" "}
                <div className="minisect">
                  {" "}
                  <div className="minisect-h">
                    <b>Home Health Insights</b>
                    <span className="link static-link">View Trends</span>
                  </div>
                  {" "}
                  <div className="insight-h">
                    {" "}
                    <div className="ic">
                      <svg width="20" height="20">
                        <use href="#i-shield-check" />
                      </svg>
                    </div>
                    {" "}
                    <div>
                      <b>Great job! Your home is in good shape.</b>
                      <p>You’re staying ahead of maintenance, which helps protect your investment and gives you peace of mind.</p>
                    </div>
                    {" "}</div>
                  {" "}
                  <Link className="link" href="/ho/report" style={{ display: "block", marginTop: "10px", fontSize: "11.5px", fontWeight: "700", color: "var(--teal-deep)" }}>See All Insights →</Link>
                  {" "}</div>
                {" "}
                <div className="minisect">
                  {" "}
                  <div className="minisect-h">
                    <b>Market & Cost Trends</b>
                    <span className="link static-link">View Trends</span>
                  </div>
                  {" "}
                  <p className="sm muted" style={{ margin: "-4px 0 4px" }}>Home maintenance costs in your area are up 6.2% compared to last year.</p>
                  {" "}
                  <svg className="spark" viewBox="0 0 260 52" role="img" aria-label="Home maintenance cost index trending up 6.2 percent over 12 months">
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
              {" "}</div>
            {" "}
            <div className="phr-3">
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <b>Home Value Impact</b>
                  <svg className="i" width="13" height="13" style={{ marginLeft: "auto", color: "#B6C4CE" }}>
                    <use href="#i-info" />
                  </svg>
                </div>
                {" "}
                <div className="valrow">
                  {" "}
                  <div className="valcircle">
                    <svg width="24" height="24">
                      <use href="#i-home" />
                    </svg>
                  </div>
                  {" "}
                  <div>
                    <div className="pos">Positive</div>
                    <p>Your home is well maintained. This supports long-term value and buyer confidence.</p>
                  </div>
                  {" "}</div>
                {" "}
                <Link className="link" href="/ho/profile" style={{ display: "block", marginTop: "11px", fontSize: "11.5px", fontWeight: "700", color: "var(--teal-deep)" }}>View Value Estimate →</Link>
                {" "}</div>
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <b>Cost Summary</b>
                  <span className="tiny muted">(Next 12 Months)</span>
                  <svg className="i" width="13" height="13" style={{ marginLeft: "auto", color: "#B6C4CE" }}>
                    <use href="#i-info" />
                  </svg>
                </div>
                {" "}
                <div className="kv" style={{ borderTop: "0" }}>
                  <span className="lab">Planned Maintenance</span>
                  <b className="num">$1,850</b>
                </div>
                {" "}
                <div className="kv">
                  <span className="lab">Potential Repairs</span>
                  <b className="num">$1,200</b>
                </div>
                {" "}
                <div className="kv">
                  <span className="lab">Preventative Services</span>
                  <b className="num">$650</b>
                </div>
                {" "}
                <div className="totalrow">
                  <span>Total Estimated Cost</span>
                  <b className="t num">$3,700</b>
                </div>
                {" "}
                <Link className="link" href="/ho/estimate" style={{ display: "block", marginTop: "11px", fontSize: "11.5px", fontWeight: "700", color: "var(--teal-deep)" }}>View Full Cost Details →</Link>
                {" "}</div>
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <b>Documents & Records</b>
                  <svg className="i" width="13" height="13" style={{ marginLeft: "auto", color: "#B6C4CE" }}>
                    <use href="#i-info" />
                  </svg>
                </div>
                {" "}
                <div className="docrow">
                  <svg className="ic" width="16" height="16">
                    <use href="#i-shield-check" />
                  </svg>
                  <b>Warranties</b>
                  <span className="num">12 Active</span>
                </div>
                {" "}
                <div className="docrow">
                  <svg className="ic" width="16" height="16">
                    <use href="#i-doc" />
                  </svg>
                  <b>Receipts</b>
                  <span className="num">38 Saved</span>
                </div>
                {" "}
                <div className="docrow">
                  <svg className="ic" width="16" height="16">
                    <use href="#i-clip" />
                  </svg>
                  <b>Inspection Reports</b>
                  <span className="num">5 Reports</span>
                </div>
                {" "}
                <div className="docrow">
                  <svg className="ic" width="16" height="16">
                    <use href="#i-book" />
                  </svg>
                  <b>Manuals</b>
                  <span className="num">9 Items</span>
                </div>
                {" "}
                <Link className="link" href="/ho/vault" style={{ display: "block", marginTop: "11px", fontSize: "11.5px", fontWeight: "700", color: "var(--teal-deep)" }}>Go to Property Vault →</Link>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="keepstrip">
              {" "}
              <div className="star">
                <svg width="24" height="24">
                  <use href="#i-star" />
                </svg>
              </div>
              {" "}
              <div>
                <b>Keep it up!</b>
                <p>Regular care today prevents big expenses tomorrow.</p>
              </div>
              {" "}
              <div className="q">
                <b>Questions?</b>
                <p>We’re here to help you keep your home healthy and your investment strong.</p>
              </div>
              {" "}
              <div className="r">
                <button className="btn btn-ghost" data-stub="Contact Support">Contact Support{" "}
                  <svg width="15" height="15">
                    <use href="#i-arrow" />
                  </svg>
                </button>
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
