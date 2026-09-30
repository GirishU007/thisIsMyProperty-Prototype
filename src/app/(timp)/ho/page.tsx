/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/21-ho.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Dashboard" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-ho" data-route="/ho">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="ho" active="dash" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              {" "}
              <div className="ptitle">
                <h1>123 Happiness Street</h1>
                <span className="homepill">Primary Home</span>
              </div>
              {" "}
              <div className="sub">Safety Harbor, FL 34695</div>
              {" "}</div>
            {" "}
            <div className="appbar-right">
              {" "}
              <Link className="iconbtn" href="/ho/alerts">
                <svg width="17" height="17">
                  <use href="#i-bell" />
                </svg>
                <span className="dot num">2</span>
              </Link>
              {" "}
              <Link className="iconbtn" href="/ho/resources">
                <svg width="17" height="17">
                  <use href="#i-help" />
                </svg>
              </Link>
              {" "}
              <div className="avatar">JS</div>
              {" "}
              <span className="who-mini">Hi, Jane{" "}
                <svg width="13" height="13" style={{ color: "var(--slate)" }}>
                  <use href="#i-chevd" />
                </svg>
              </span>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="content">
            {" "}
            <div className="hdhead">
              {" "}
              <h2>Property Profile</h2>
              {" "}
              <span className="btn btn-ghost hdedit" data-stub="Edit property profile">
                <svg width="13" height="13">
                  <use href="#i-pencil" />
                </svg>{" "}Edit</span>
              {" "}</div>
            {" "}
            <div className="hdgrid">
              {" "}
              {/* ---------- column 1 ---------- */}
              {" "}
              <div className="hdcol">
                {" "}
                <div className="tile">
                  {" "}
                  <div className="hdpg">
                    {" "}
                    <Link className="photo ph1" href="/ho/profile" aria-label="Photo of 123 Happiness Street"></Link>
                    {" "}
                    <div className="facts">
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="16" height="16">
                          <use href="#i-home" />
                        </svg>
                        <div>
                          <div className="k">Property Type</div>
                          <div className="v">Single Family Home</div>
                        </div>
                      </div>
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="16" height="16">
                          <use href="#i-pin" />
                        </svg>
                        <div>
                          <div className="k">Lot Size</div>
                          <div className="v num">0.23 acres</div>
                        </div>
                      </div>
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="16" height="16">
                          <use href="#i-calendar" />
                        </svg>
                        <div>
                          <div className="k">Year Built</div>
                          <div className="v num">2015</div>
                        </div>
                      </div>
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="16" height="16">
                          <use href="#i-bed" />
                        </svg>
                        <div>
                          <div className="k">Bedrooms</div>
                          <div className="v num">4</div>
                        </div>
                      </div>
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="16" height="16">
                          <use href="#i-area" />
                        </svg>
                        <div>
                          <div className="k">Living Area</div>
                          <div className="v num">2,842 sq ft</div>
                        </div>
                      </div>
                      {" "}
                      <div className="fact">
                        <svg className="ic" width="16" height="16">
                          <use href="#i-bath" />
                        </svg>
                        <div>
                          <div className="k">Bathrooms</div>
                          <div className="v num">3.5</div>
                        </div>
                      </div>
                      {" "}</div>
                    {" "}</div>
                  {" "}
                  <Link className="link" href="/ho/profile">View Property Details →</Link>
                  {" "}</div>
                {" "}
                <div className="tile">
                  {" "}
                  <div className="tile-h">
                    <span className="eyebrow">System Health Overview</span>
                    <svg className="i" width="13" height="13">
                      <use href="#i-info" />
                    </svg>
                  </div>
                  {" "}
                  <div className="hdsys">
                    {" "}
                    <div className="sysx">
                      <div className="ic">
                        <svg width="21" height="21">
                          <use href="#i-roof" />
                        </svg>
                      </div>
                      <div className="bdg ok">
                        <svg width="11" height="11">
                          <use href="#i-check" />
                        </svg>
                      </div>
                      <div className="nm">Roof</div>
                      <div className="st good">Good</div>
                    </div>
                    {" "}
                    <div className="sysx">
                      <div className="ic">
                        <svg width="21" height="21">
                          <use href="#i-snow" />
                        </svg>
                      </div>
                      <div className="bdg ok">
                        <svg width="11" height="11">
                          <use href="#i-check" />
                        </svg>
                      </div>
                      <div className="nm">HVAC</div>
                      <div className="st good">Good</div>
                    </div>
                    {" "}
                    <div className="sysx">
                      <div className="ic">
                        <svg width="21" height="21">
                          <use href="#i-pipe" />
                        </svg>
                      </div>
                      <div className="bdg ok">
                        <svg width="11" height="11">
                          <use href="#i-check" />
                        </svg>
                      </div>
                      <div className="nm">Plumbing</div>
                      <div className="st good">Good</div>
                    </div>
                    {" "}
                    <div className="sysx">
                      <div className="ic">
                        <svg width="21" height="21">
                          <use href="#i-bolt" />
                        </svg>
                      </div>
                      <div className="bdg ok">
                        <svg width="11" height="11">
                          <use href="#i-check" />
                        </svg>
                      </div>
                      <div className="nm">Electrical</div>
                      <div className="st good">Good</div>
                    </div>
                    {" "}
                    <div className="sysx">
                      <div className="ic">
                        <svg width="21" height="21">
                          <use href="#i-appliance" />
                        </svg>
                      </div>
                      <div className="bdg warn">
                        <svg width="11" height="11">
                          <use href="#i-warn" />
                        </svg>
                      </div>
                      <div className="nm">Appliances</div>
                      <div className="st fair">Fair</div>
                    </div>
                    {" "}
                    <div className="sysx">
                      <div className="ic">
                        <svg width="21" height="21">
                          <use href="#i-exterior" />
                        </svg>
                      </div>
                      <div className="bdg ok">
                        <svg width="11" height="11">
                          <use href="#i-check" />
                        </svg>
                      </div>
                      <div className="nm">Exterior</div>
                      <div className="st good">Good</div>
                    </div>
                    {" "}
                    <div className="sysx">
                      <div className="ic">
                        <svg width="21" height="21">
                          <use href="#i-interior" />
                        </svg>
                      </div>
                      <div className="bdg ok">
                        <svg width="11" height="11">
                          <use href="#i-check" />
                        </svg>
                      </div>
                      <div className="nm">Interior</div>
                      <div className="st good">Good</div>
                    </div>
                    {" "}</div>
                  {" "}
                  <Link className="link" href="/ho/health" style={{ textAlign: "center" }}>View All Systems →</Link>
                  {" "}</div>
                {" "}
                <div className="hdpair">
                  {" "}
                  <div className="tile">
                    {" "}
                    <div className="tile-h">
                      <span className="eyebrow">Property Value Estimate</span>
                      <svg className="i" width="13" height="13">
                        <use href="#i-info" />
                      </svg>
                    </div>
                    {" "}
                    <div className="hdval">
                      {" "}
                      <div className="tiny muted">Estimated Value</div>
                      {" "}
                      <b className="num">$675,000</b>
                      {" "}
                      <div className="up num">↑ 5.2%{" "}
                        <em>vs. last year</em>
                      </div>
                      {" "}</div>
                    {" "}
                    <svg className="spark" viewBox="0 0 260 62" role="img" aria-label="Estimated value trending up over the last twelve months">
                      {" "}
                      <path d="M6 52 L27 47 L48 49 L69 41 L90 38 L111 40 L132 33 L153 35 L174 27 L195 24 L216 18 L237 8" fill="none" stroke="#19A7A5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      {" "}
                      <path d="M6 52 L27 47 L48 49 L69 41 L90 38 L111 40 L132 33 L153 35 L174 27 L195 24 L216 18 L237 8 L237 60 L6 60 Z" fill="#19A7A5" opacity=".09" />
                      {" "}
                      <circle cx="6" cy="52" r="2.6" fill="#0F8280" />
                      <circle cx="69" cy="41" r="2.6" fill="#0F8280" />
                      <circle cx="132" cy="33" r="2.6" fill="#0F8280" />
                      <circle cx="195" cy="24" r="2.6" fill="#0F8280" />
                      <circle cx="237" cy="8" r="3" fill="#0F8280" />
                      {" "}</svg>
                    {" "}
                    <div className="tiny muted" style={{ marginTop: "6px" }}>Estimated Range</div>
                    {" "}
                    <div className="sm num" style={{ color: "var(--navy)", fontWeight: "700" }}>$640,000 – $710,000</div>
                    {" "}
                    <div className="tiny muted" style={{ marginTop: "4px" }}>Last Updated: May 15, 2026</div>
                    {" "}
                    <span className="link static-link">View Value Details →</span>
                    {" "}</div>
                  {" "}
                  <div className="tile">
                    {" "}
                    <div className="tile-h">
                      <span className="eyebrow">Property Summary</span>
                      <svg className="i" width="13" height="13">
                        <use href="#i-info" />
                      </svg>
                    </div>
                    {" "}
                    <div className="hdsum">
                      <span>Total Improvements</span>
                      <b className="num">$191,673</b>
                    </div>
                    {" "}
                    <div className="hdsum">
                      <span>Total Maintenance / Repairs</span>
                      <b className="num">$38,720</b>
                    </div>
                    {" "}
                    <div className="hdsum">
                      <span>Total Expenses</span>
                      <b className="num">$62,310</b>
                    </div>
                    {" "}
                    <div className="hdsum">
                      <span>Documents in Vault</span>
                      <b className="num">128</b>
                    </div>
                    {" "}
                    <div className="hdsum">
                      <span>Warranties Active</span>
                      <b className="num">7</b>
                    </div>
                    {" "}
                    <Link className="link" href="/ho/vault">View Full Property Summary →</Link>
                    {" "}</div>
                  {" "}</div>
                {" "}</div>
              {" "}
              {/* ---------- column 2 ---------- */}
              {" "}
              <div className="hdcol">
                {" "}
                <div className="tile">
                  {" "}
                  <div className="tile-h">
                    <span className="eyebrow">Property Health Score</span>
                    <svg className="i" width="13" height="13">
                      <use href="#i-info" />
                    </svg>
                  </div>
                  {" "}
                  <div className="hdring">
                    {" "}
                    <svg viewBox="0 0 120 120" role="img" aria-label="Property health score 82 out of 100">
                      {" "}
                      <defs>
                        <linearGradient id="hdgrad" x1="0" y1="1" x2="1" y2="0">
                          {" "}
                          <stop offset="0" stopColor="#2E8B57" />
                          <stop offset="1" stopColor="#19A7A5" />
                        </linearGradient>
                      </defs>
                      {" "}
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#E7EFF4" strokeWidth="11" />
                      {" "}
                      <circle cx="60" cy="60" r="50" fill="none" stroke="url(#hdgrad)" strokeWidth="11" strokeLinecap="round" strokeDasharray="257.6 314.2" />
                      {" "}</svg>
                    {" "}
                    <div className="v">
                      <b className="num">82</b>
                    </div>
                    {" "}</div>
                  {" "}
                  <div className="hdsc-foot">
                    {" "}
                    <div className="g">Good</div>
                    {" "}
                    <div className="t">Trending Up ↑</div>
                    {" "}
                    <div className="u">Updated: May 20, 2026</div>
                    {" "}</div>
                  {" "}
                  <Link className="link" href="/ho/report" style={{ textAlign: "center" }}>View Score Details →</Link>
                  {" "}</div>
                {" "}
                <div className="tile">
                  {" "}
                  <div className="tile-h">
                    <span className="eyebrow">Recent Activity</span>
                    <Link className="sm" href="/ho/vault" style={{ marginLeft: "auto", color: "var(--teal-deep)", fontWeight: "700" }}>View All</Link>
                  </div>
                  {" "}
                  <div className="hdrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-doc" />
                    </svg>
                    <div className="tx">
                      <b>Receipt uploaded</b>
                      <span className="s">123 Happiness St</span>
                    </div>
                    <span className="dt q">May 21, 2026</span>
                  </div>
                  {" "}
                  <div className="hdrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-wrench" />
                    </svg>
                    <div className="tx">
                      <b>Plumbing service added</b>
                      <span className="s">123 Happiness St</span>
                    </div>
                    <span className="dt q">May 12, 2026</span>
                  </div>
                  {" "}
                  <div className="hdrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-gear" />
                    </svg>
                    <div className="tx">
                      <b>HVAC service added</b>
                      <span className="s">123 Happiness St</span>
                    </div>
                    <span className="dt q">May 10, 2026</span>
                  </div>
                  {" "}
                  <div className="hdrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-shield-check" />
                    </svg>
                    <div className="tx">
                      <b>New warranty added</b>
                      <span className="s">123 Happiness St</span>
                    </div>
                    <span className="dt q">May 1, 2026</span>
                  </div>
                  {" "}
                  <Link className="link" href="/ho/vault">View All Activity →</Link>
                  {" "}</div>
                {" "}
                <div className="tile">
                  {" "}
                  <div className="tile-h">
                    <span className="eyebrow">Top Active Warranties</span>
                    <Link className="sm" href="/ho/vault" style={{ marginLeft: "auto", color: "var(--teal-deep)", fontWeight: "700" }}>View All</Link>
                  </div>
                  {" "}
                  <div className="hdrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-snow" />
                    </svg>
                    <div className="tx">
                      <b>HVAC System</b>
                      <span className="s">Goodman GSXC18</span>
                      <span className="s">Expires: Mar 20, 2036</span>
                    </div>
                    <span className="reg">Registered</span>
                  </div>
                  {" "}
                  <div className="hdrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-roof" />
                    </svg>
                    <div className="tx">
                      <b>Roof</b>
                      <span className="s">GAF Timberline HDZ</span>
                      <span className="s">Expires: Jun 15, 2033</span>
                    </div>
                    <span className="reg">Registered</span>
                  </div>
                  {" "}
                  <div className="hdrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-water" />
                    </svg>
                    <div className="tx">
                      <b>Water Heater</b>
                      <span className="s">Rheem ProTerra 50</span>
                      <span className="s">Expires: Jul 10, 2030</span>
                    </div>
                    <span className="reg">Registered</span>
                  </div>
                  {" "}
                  <Link className="link" href="/ho/vault">View All Warranties →</Link>
                  {" "}</div>
                {" "}</div>
              {" "}
              {/* ---------- column 3 ---------- */}
              {" "}
              <div className="hdcol">
                {" "}
                <div className="tile">
                  {" "}
                  <div className="tile-h">
                    <span className="eyebrow">Upcoming Maintenance</span>
                    <svg className="i" width="13" height="13">
                      <use href="#i-info" />
                    </svg>
                    <Link className="sm" href="/ho/maintenance" style={{ marginLeft: "auto", color: "var(--teal-deep)", fontWeight: "700" }}>View All</Link>
                  </div>
                  {" "}
                  <div className="hdrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-gear" />
                    </svg>
                    <div className="tx">
                      <b>HVAC Service</b>
                      <span className="s">28 days overdue</span>
                    </div>
                    <span className="dt">Aug 15, 2026</span>
                  </div>
                  {" "}
                  <div className="hdrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-roof" />
                    </svg>
                    <div className="tx">
                      <b>Roof Inspection</b>
                      <span className="s">Due in 19 days</span>
                    </div>
                    <span className="dt">Oct 1, 2026</span>
                  </div>
                  {" "}
                  <div className="hdrow">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-snow" />
                    </svg>
                    <div className="tx">
                      <b>Air Filter Replacement</b>
                      <span className="s">Due in 99 days</span>
                    </div>
                    <span className="dt">Dec 20, 2026</span>
                  </div>
                  {" "}
                  <Link className="link" href="/ho/maintenance" style={{ textAlign: "center" }}>View All Maintenance →</Link>
                  {" "}</div>
                {" "}
                <div className="tile hdins">
                  {" "}
                  <div className="tile-h">
                    <span className="eyebrow">Smart Insights</span>
                  </div>
                  {" "}
                  <div className="insight-h">
                    {" "}
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-shield-check" />
                      </svg>
                    </div>
                    {" "}
                    <div>
                      <b>Great job! You’re keeping up with your home.</b>
                      <p>Your roof was replaced 3 years ago and is in great shape.</p>
                    </div>
                    {" "}</div>
                  {" "}
                  <Link className="link" href="/ho/health">See All Insights →</Link>
                  {" "}</div>
                {" "}
                <div className="tile">
                  {" "}
                  <div className="tile-h">
                    <span className="eyebrow">Market & Cost Trends</span>
                    <span className="sm static-link" style={{ marginLeft: "auto", color: "var(--teal-deep)", fontWeight: "700" }}>View Trends</span>
                  </div>
                  {" "}
                  <p className="tiny muted">Roof replacement costs in your area are up{" "}
                    <b style={{ color: "var(--navy)" }}>6.2%</b>{" "}compared to last year.</p>
                  {" "}
                  <svg className="spark" viewBox="0 0 260 56" role="img" aria-label="Roof replacement cost index trending up over twelve months">
                    {" "}
                    <path d="M8 40 L31 38 L54 41 L77 36 L100 38 L123 31 L146 33 L169 26 L192 24 L215 17 L238 8" fill="none" stroke="#19A7A5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    {" "}
                    <circle cx="8" cy="40" r="2.6" fill="#0F8280" />
                    <circle cx="54" cy="41" r="2.6" fill="#0F8280" />
                    <circle cx="100" cy="38" r="2.6" fill="#0F8280" />
                    <circle cx="146" cy="33" r="2.6" fill="#0F8280" />
                    <circle cx="192" cy="24" r="2.6" fill="#0F8280" />
                    <circle cx="238" cy="8" r="3" fill="#0F8280" />
                    {" "}</svg>
                  {" "}</div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="sect-title">
              <h2>Quick Actions</h2>
            </div>
            {" "}
            <div className="qa6">
              {" "}
              <Link className="qacard c-teal" href="/ho/add">
                <span className="ic">
                  <svg width="18" height="18">
                    <use href="#i-dollar" />
                  </svg>
                </span>
                <span>
                  <b>Add Expense</b>
                </span>
              </Link>
              {" "}
              <Link className="qacard c-teal" href="/ho/add">
                <span className="ic">
                  <svg width="18" height="18">
                    <use href="#i-wrench" />
                  </svg>
                </span>
                <span>
                  <b>Add Maintenance / Repair</b>
                </span>
              </Link>
              {" "}
              <Link className="qacard c-green" href="/ho/add">
                <span className="ic">
                  <svg width="18" height="18">
                    <use href="#i-tools" />
                  </svg>
                </span>
                <span>
                  <b>Add Improvement</b>
                </span>
              </Link>
              {" "}
              <Link className="qacard c-violet" href="/ho/add">
                <span className="ic">
                  <svg width="18" height="18">
                    <use href="#i-shield" />
                  </svg>
                </span>
                <span>
                  <b>Add Warranty</b>
                </span>
              </Link>
              {" "}
              <Link className="qacard c-amber" href="/ho/estimate">
                <span className="ic">
                  <svg width="18" height="18">
                    <use href="#i-tag" />
                  </svg>
                </span>
                <span>
                  <b>Request Price Estimate</b>
                </span>
              </Link>
              {" "}
              <Link className="qacard c-teal" href="/ho/providers">
                <span className="ic">
                  <svg width="18" height="18">
                    <use href="#i-users" />
                  </svg>
                </span>
                <span>
                  <b>Find a Vendor</b>
                </span>
              </Link>
              {" "}</div>
            {" "}
            <div className="encstrip">
              {" "}
              <svg width="19" height="19">
                <use href="#i-shield-check" />
              </svg>
              {" "}
              <div>
                <b>Your data is encrypted and secure.</b>
                <span>Bank-level security to protect what matters most.</span>
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
