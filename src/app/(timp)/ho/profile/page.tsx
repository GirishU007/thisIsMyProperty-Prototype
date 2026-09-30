/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/25-ho-profile.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "My Properties" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-profile" data-route="/ho/profile">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="ho" active="profile" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              {" "}
              <div className="sm muted" style={{ marginBottom: "2px" }}>Property Profile  / {" "}
                <b style={{ color: "var(--navy)" }}>123 Happiness Street, Safety Harbor, FL 34695</b>
                {" "}
                <svg width="12" height="12" style={{ verticalAlign: "-1px" }}>
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <h1>123 Happiness Street</h1>
              {" "}</div>
            {" "}
            <div className="appbar-right">
              {" "}
              <span className="searchbox">
                <svg width="14" height="14">
                  <use href="#i-search" />
                </svg>{" "}Search</span>
              {" "}
              <Link className="iconbtn" href="/ho/alerts">
                <svg width="17" height="17">
                  <use href="#i-bell" />
                </svg>
                <span className="dot num">3</span>
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
            <div className="vaultgrid">
              {" "}
              <div className="photo" style={{ height: "150px" }}>
                <span className="photo-tag" style={{ left: "auto", right: "8px", background: "rgba(255,255,255,.92)", color: "var(--navy)" }}>
                  <svg width="9" height="9" style={{ verticalAlign: "-1px" }}>
                    <use href="#i-pencil" />
                  </svg>{" "}Edit Property</span>
                {" "}
                <span className="photo-btn">
                  <svg width="11" height="11">
                    <use href="#i-camera" />
                  </svg>{" "}View Photos</span>
                {" "}</div>
              {" "}
              <div className="minisect">
                {" "}
                <h3 style={{ fontSize: "15px" }}>123 Happiness Street</h3>
                {" "}
                <p className="sm muted">Safety Harbor, FL 34695 · Single Family Home</p>
                {" "}
                <div className="facts">
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
                      <use href="#i-pin" />
                    </svg>
                    <div>
                      <div className="k">Lot Size</div>
                      <div className="v num">0.23 acres</div>
                    </div>
                  </div>
                  {" "}
                  <div className="fact">
                    <svg className="ic" width="15" height="15">
                      <use href="#i-garage" />
                    </svg>
                    <div>
                      <div className="k">Garage</div>
                      <div className="v">2 Car Attached</div>
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
                      <use href="#i-grid" />
                    </svg>
                    <div>
                      <div className="k"># of Spaces</div>
                      <div className="v num">2</div>
                    </div>
                  </div>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div className="minisect heartwrap" style={{ justifyContent: "flex-start" }}>
                {" "}
                <div className="eyebrow" style={{ marginBottom: "6px" }}>Property Health Score</div>
                {" "}
                <div className="heart">
                  {" "}
                  <svg viewBox="0 0 100 92">
                    <path d="M50 86S8 62 8 36A22 22 0 0 1 50 25 22 22 0 0 1 92 36c0 26-42 50-42 50z" fill="none" stroke="#19A7A5" strokeWidth="3.5" />
                  </svg>
                  {" "}
                  <div className="val">
                    <b className="num">82</b>
                    <span>Good</span>
                  </div>
                  {" "}</div>
                {" "}
                <p className="tiny" style={{ marginTop: "6px" }}>
                  <b style={{ color: "var(--navy)" }}>Well maintained!</b>
                  <br />
                  <span className="muted">Keep up with scheduled maintenance to protect your investment.</span>
                </p>
                {" "}
                <Link className="tiny" href="/ho/health" style={{ color: "var(--teal-deep)", fontWeight: "700", marginTop: "7px" }}>View full Home Health →</Link>
                {" "}</div>
              {" "}
              <div className="minisect" style={{ textAlign: "center" }}>
                {" "}
                <div className="eyebrow" style={{ marginBottom: "6px" }}>Overall Property Completion</div>
                {" "}
                <div className="donut" style={{ margin: "0 auto" }}>
                  <div className="val">
                    <b className="num">76%</b>
                    <span>Healthy Record</span>
                  </div>
                </div>
                {" "}
                <p className="tiny muted" style={{ marginTop: "8px" }}>Great progress! The more you add, the more valuable your insights become.</p>
                {" "}
                <button className="tiny" style={{ color: "var(--teal-deep)", fontWeight: "700" }} data-stub="See what’s missing (opens in a new window)">See what’s missing →</button>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="minisect" style={{ marginTop: "14px" }}>
              {" "}
              <div className="minisect-h">
                <svg className="ic" width="15" height="15">
                  <use href="#i-grid" />
                </svg>
                <b>System Health Overview</b>
                <Link className="link" href="/ho/health">View all systems →</Link>
              </div>
              {" "}
              <div className="systems">
                {" "}
                <div className="sysx">
                  <div className="ic">
                    <svg width="17" height="17">
                      <use href="#i-snow" />
                    </svg>
                  </div>
                  <div className="nm">HVAC</div>
                  <div className="st good">Good</div>
                  <div className="sc num">85 / 100</div>
                  <div className="bar">
                    <i className="bg-good" style={{ width: "85%" }}></i>
                  </div>
                </div>
                {" "}
                <div className="sysx">
                  <div className="ic">
                    <svg width="17" height="17">
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
                <div className="sysx">
                  <div className="ic">
                    <svg width="17" height="17">
                      <use href="#i-bolt" />
                    </svg>
                  </div>
                  <div className="nm">Electrical</div>
                  <div className="st fair">Fair</div>
                  <div className="sc num">65 / 100</div>
                  <div className="bar">
                    <i className="bg-fair" style={{ width: "65%" }}></i>
                  </div>
                </div>
                {" "}
                <div className="sysx">
                  <div className="ic">
                    <svg width="17" height="17">
                      <use href="#i-roof" />
                    </svg>
                  </div>
                  <div className="nm">Roof</div>
                  <div className="st good">Good</div>
                  <div className="sc num">78 / 100</div>
                  <div className="bar">
                    <i className="bg-good" style={{ width: "78%" }}></i>
                  </div>
                </div>
                {" "}
                <div className="sysx">
                  <div className="ic">
                    <svg width="17" height="17">
                      <use href="#i-water" />
                    </svg>
                  </div>
                  <div className="nm">Water Heater</div>
                  <div className="st fair">Fair</div>
                  <div className="sc num">60 / 100</div>
                  <div className="bar">
                    <i className="bg-fair" style={{ width: "60%" }}></i>
                  </div>
                </div>
                {" "}
                <div className="sysx">
                  <div className="ic">
                    <svg width="17" height="17">
                      <use href="#i-appliance" />
                    </svg>
                  </div>
                  <div className="nm">Appliances</div>
                  <div className="st good">Good</div>
                  <div className="sc num">82 / 100</div>
                  <div className="bar">
                    <i className="bg-good" style={{ width: "82%" }}></i>
                  </div>
                </div>
                {" "}
                <div className="sysx">
                  <div className="ic">
                    <svg width="17" height="17">
                      <use href="#i-pool" />
                    </svg>
                  </div>
                  <div className="nm">Pool / Spa</div>
                  <div className="st good">Good</div>
                  <div className="sc num">88 / 100</div>
                  <div className="bar">
                    <i className="bg-good" style={{ width: "88%" }}></i>
                  </div>
                </div>
                {" "}
                <div className="sysx">
                  <div className="ic">
                    <svg width="17" height="17">
                      <use href="#i-exterior" />
                    </svg>
                  </div>
                  <div className="nm">Exterior</div>
                  <div className="st good">Good</div>
                  <div className="sc num">80 / 100</div>
                  <div className="bar">
                    <i className="bg-good" style={{ width: "80%" }}></i>
                  </div>
                </div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="grid4" style={{ marginTop: "14px" }}>
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <svg className="ic" width="15" height="15">
                    <use href="#i-wrench" />
                  </svg>
                  <b>Upcoming Maintenance</b>
                  <Link className="link" href="/ho/maintenance">See all</Link>
                </div>
                {" "}
                <Link className="alertline" href="/ho/alerts">
                  <span className="datecell">
                    <b>SEP</b>
                    <span className="num">15</span>
                  </span>
                  <div>
                    <b>HVAC System Service</b>
                    <span>Every 6 months</span>
                  </div>
                  <span className="tagpill tp-amber">Due soon</span>
                </Link>
                {" "}
                <Link className="alertline" href="/ho/alerts">
                  <span className="datecell">
                    <b>OCT</b>
                    <span className="num">10</span>
                  </span>
                  <div>
                    <b>Roof Inspection</b>
                    <span>Annually</span>
                  </div>
                  <span className="tagpill tp-teal">Upcoming</span>
                </Link>
                {" "}
                <Link className="alertline" href="/ho/alerts">
                  <span className="datecell">
                    <b>NOV</b>
                    <span className="num">05</span>
                  </span>
                  <div>
                    <b>Water Heater Flush</b>
                    <span>Every 12 months</span>
                  </div>
                  <span className="tagpill tp-teal">Upcoming</span>
                </Link>
                {" "}
                <Link className="link" href="/ho/maintenance" style={{ display: "block", marginTop: "8px", fontSize: "11px", fontWeight: "700", color: "var(--teal-deep)" }}>View all upcoming maintenance →</Link>
                {" "}</div>
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <svg className="ic" width="15" height="15">
                    <use href="#i-bell" />
                  </svg>
                  <b>My Alerts</b>
                  <Link className="link" href="/ho/alerts">See all</Link>
                </div>
                {" "}
                <Link className="alertline" href="/ho/alerts">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--amber)" }}>
                    <use href="#i-warn" />
                  </svg>
                  <div>
                    <b>HVAC Filter Change Due</b>
                    <span>It’s been 3 months since your last change.</span>
                  </div>
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </Link>
                {" "}
                <Link className="alertline" href="/ho/alerts">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--red)" }}>
                    <use href="#i-recall" />
                  </svg>
                  <div>
                    <b>Roof Inspection</b>
                    <span>Annual inspection recommended.</span>
                  </div>
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </Link>
                {" "}
                <Link className="alertline" href="/ho/alerts">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--amber)" }}>
                    <use href="#i-warn" />
                  </svg>
                  <div>
                    <b>Warranty Expiring Soon</b>
                    <span>Samsung Refrigerator, 45 days.</span>
                  </div>
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </Link>
                {" "}
                <Link className="link" href="/ho/alerts" style={{ display: "block", marginTop: "8px", fontSize: "11px", fontWeight: "700", color: "var(--teal-deep)" }}>View all alerts →</Link>
                {" "}</div>
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <svg className="ic" width="15" height="15">
                    <use href="#i-doc" />
                  </svg>
                  <b>Recent Activity</b>
                  <Link className="link" href="/ho/vault">See all</Link>
                </div>
                {" "}
                <div className="alertline">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--teal-deep)" }}>
                    <use href="#i-doc" />
                  </svg>
                  <div>
                    <b>Receipt added</b>
                    <span>Home Depot · Paint Supplies<br />Sep 2, 2026</span>
                  </div>
                </div>
                {" "}
                <div className="alertline">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--green)" }}>
                    <use href="#i-shield-check" />
                  </svg>
                  <div>
                    <b>Warranty added</b>
                    <span>Samsung Refrigerator<br />Aug 28, 2026</span>
                  </div>
                </div>
                {" "}
                <div className="alertline">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--slate)" }}>
                    <use href="#i-wrench" />
                  </svg>
                  <div>
                    <b>HVAC Service record added</b>
                    <span>Cool Air Services<br />Aug 15, 2026</span>
                  </div>
                </div>
                {" "}</div>
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <svg className="ic" width="15" height="15">
                    <use href="#i-chart" />
                  </svg>
                  <b>Market Trends</b>
                </div>
                {" "}
                <p className="tiny muted">Home values in your area are trending up.</p>
                {" "}
                <svg className="spark" style={{ height: "78px" }} viewBox="0 0 240 78" role="img" aria-label="Local home value trend rising over 12 months">
                  {" "}
                  <line x1="10" y1="14" x2="232" y2="14" stroke="#EAF1F5" />
                  <line x1="10" y1="38" x2="232" y2="38" stroke="#EAF1F5" />
                  <line x1="10" y1="60" x2="232" y2="60" stroke="#DCE6ED" />
                  {" "}
                  <path d="M14 56 L40 52 L66 54 L92 46 L118 42 L144 36 L170 28 L196 22 L224 12" fill="none" stroke="#19A7A5" strokeWidth="2" />
                  {" "}
                  <path d="M14 56 L40 52 L66 54 L92 46 L118 42 L144 36 L170 28 L196 22 L224 12 L224 60 L14 60 Z" fill="#19A7A5" opacity=".08" />
                  {" "}
                  <circle cx="224" cy="12" r="3.4" fill="#0F8280" />
                  {" "}
                  <text x="10" y="72" fontSize="7.5" fill="#5E748A">Sep ’25</text>
                  <text x="105" y="72" fontSize="7.5" fill="#5E748A">Mar ’26</text>
                  <text x="196" y="72" fontSize="7.5" fill="#5E748A">Sep ’26</text>
                  {" "}</svg>
                {" "}
                <button className="tiny" style={{ color: "var(--teal-deep)", fontWeight: "700", marginTop: "4px" }} data-stub="Full market report">View full market report →</button>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="sect-title">
              <h2>Quick Actions</h2>
            </div>
            {" "}
            <div className="grid4">
              {" "}
              <button className="qabtn" data-stub="Add a document or record">
                <span className="ic">
                  <svg width="14" height="14">
                    <use href="#i-plus" />
                  </svg>
                </span>
                {" "}
                <span>
                  <b style={{ display: "block" }}>Add New</b>
                  <span className="tiny muted">Add a document or record</span>
                </span>
              </button>
              {" "}
              <Link className="qabtn" href="/ho/estimate">
                <span className="ic">
                  <svg width="14" height="14">
                    <use href="#i-dollar" />
                  </svg>
                </span>
                {" "}
                <span>
                  <b style={{ display: "block" }}>Request Price Estimate</b>
                  <span className="tiny muted">Get cost estimates for repairs or replacements</span>
                </span>
              </Link>
              {" "}
              <Link className="qabtn" href="/ho/providers">
                <span className="ic">
                  <svg width="14" height="14">
                    <use href="#i-users" />
                  </svg>
                </span>
                {" "}
                <span>
                  <b style={{ display: "block" }}>Service Providers</b>
                  <span className="tiny muted">Pre-qualified pros for your home</span>
                </span>
              </Link>
              {" "}
              <Link className="qabtn" href="/ho/resources">
                <span className="ic">
                  <svg width="14" height="14">
                    <use href="#i-book" />
                  </svg>
                </span>
                {" "}
                <span>
                  <b style={{ display: "block" }}>Resources</b>
                  <span className="tiny muted">Home tips, blogs, checklists & more</span>
                </span>
              </Link>
              {" "}</div>
            {" "}
            <div className="whyit">
              <svg className="ic" width="18" height="18">
                <use href="#i-lock" />
              </svg>
              <div>
                <b>Your data is encrypted and secure.</b>
                {" "}
                <span>Bank-level security to protect what matters most.</span>
              </div>
            </div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
