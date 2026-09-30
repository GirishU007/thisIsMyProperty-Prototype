/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/22-ho-vault.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Property Vault" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-vault" data-route="/ho/vault">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="ho" active="vault" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              <h1>My Vault</h1>
              <div className="sub">All of your property documents and records in one secure place.{" "}
                <Link href="/ho/resources" style={{ color: "var(--teal-deep)", fontWeight: "700" }}>Learn more</Link>
              </div>
            </div>
            {" "}
            <div className="appbar-right">
              {" "}
              <span className="searchbox">
                <svg width="14" height="14">
                  <use href="#i-search" />
                </svg>{" "}Search the Vault…</span>
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
              <div>
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
                      <use href="#i-calendar" />
                    </svg>
                    <div>
                      <div className="k">Year Built</div>
                      <div className="v num">2015</div>
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
                  <span className="muted">You’re doing great. Keep up with scheduled maintenance to protect your investment.</span>
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
                <p className="tiny muted" style={{ marginTop: "8px" }}>Great progress! The more you add, the more valuable your insights and the easier it will be to find your important property information.</p>
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
                    <b>JUN</b>
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
                    <b>JUL</b>
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
                    <b>AUG</b>
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
                    <span>It’s been 3 months since your last change. May 15, 2026</span>
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
                    <span>Samsung Refrigerator warranty expires in 45 days. May 15, 2026</span>
                  </div>
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </Link>
                {" "}
                <Link className="alertline" href="/ho/alerts">
                  <svg className="ic" width="15" height="15" style={{ color: "#3B7EA1" }}>
                    <use href="#i-info" />
                  </svg>
                  <div>
                    <b>Registration Required</b>
                    <span>Your Generac Generator warranty registration is pending. May 14, 2026</span>
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
                    <span>Home Depot · Paint Supplies<br />May 20, 2026</span>
                  </div>
                </div>
                {" "}
                <div className="alertline">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--green)" }}>
                    <use href="#i-shield-check" />
                  </svg>
                  <div>
                    <b>Warranty added</b>
                    <span>Samsung Refrigerator<br />May 18, 2026</span>
                  </div>
                </div>
                {" "}
                <div className="alertline">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--slate)" }}>
                    <use href="#i-wrench" />
                  </svg>
                  <div>
                    <b>HVAC Service record added</b>
                    <span>Cool Air Services<br />May 15, 2026</span>
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
                <p className="tiny muted">Home Value Index (Tampa Area)</p>
                {" "}
                <div style={{ fontSize: "16px", fontWeight: "800", color: "var(--green)", textAlign: "center" }} className="num">+6.2%</div>
                {" "}
                <p className="tiny muted" style={{ textAlign: "center", marginBottom: "4px" }}>12 Month Change</p>
                {" "}
                <svg className="spark" viewBox="0 0 240 60" role="img" aria-label="Tampa area home value index rising from about $400K to $700K over 12 months">
                  {" "}
                  <line x1="30" y1="8" x2="234" y2="8" stroke="#EAF1F5" />
                  <line x1="30" y1="24" x2="234" y2="24" stroke="#EAF1F5" />
                  <line x1="30" y1="40" x2="234" y2="40" stroke="#EAF1F5" />
                  {" "}
                  <text x="2" y="11" fontSize="7" fill="#5E748A">$700K</text>
                  <text x="2" y="27" fontSize="7" fill="#5E748A">$600K</text>
                  <text x="2" y="43" fontSize="7" fill="#5E748A">$500K</text>
                  <text x="2" y="53" fontSize="7" fill="#5E748A">$400K</text>
                  {" "}
                  <path d="M34 46 L62 42 L90 39 L118 34 L146 30 L174 22 L202 16 L230 9" fill="none" stroke="#19A7A5" strokeWidth="2" />
                  {" "}
                  <path d="M34 46 L62 42 L90 39 L118 34 L146 30 L174 22 L202 16 L230 9 L230 52 L34 52 Z" fill="#19A7A5" opacity=".08" />
                  {" "}
                  <circle cx="230" cy="9" r="3.2" fill="#0F8280" />
                  {" "}
                  <text x="34" y="59" fontSize="6.5" fill="#5E748A">Jun ’25</text>
                  <text x="112" y="59" fontSize="6.5" fill="#5E748A">Dec ’25</text>
                  <text x="205" y="59" fontSize="6.5" fill="#5E748A">Jun ’26</text>
                  {" "}</svg>
                {" "}
                <p className="tiny muted" style={{ marginTop: "4px" }}>Home values in your area are trending up.</p>
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
                  <span className="tiny muted">Find trusted local pros for your home</span>
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
                  <span className="tiny muted">Home tips, blogs, checklists & more!</span>
                </span>
              </Link>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
