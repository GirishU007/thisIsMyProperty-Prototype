/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/26-ho-alerts.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Alerts" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-alerts" data-route="/ho/alerts">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="ho" active="alerts" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              <h1>Alerts – All Properties</h1>
              <div className="sub">Stay informed and take action with timely alerts that help you protect your homes and manage costs.</div>
            </div>
            {" "}
            <div className="appbar-right">
              {" "}
              <span className="searchbox">
                <svg width="14" height="14">
                  <use href="#i-search" />
                </svg>{" "}Search alerts…</span>
              {" "}
              <Link className="btn btn-ghost" style={{ padding: "7px 12px" }} href="/ho/maintenance">
                <svg width="14" height="14">
                  <use href="#i-wrench" />
                </svg>{" "}Upcoming Maintenance</Link>
              <button className="btn btn-ghost" style={{ padding: "7px 12px" }} data-stub="Alert settings">
                <svg width="14" height="14">
                  <use href="#i-gear" />
                </svg>{" "}Alert Settings</button>
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
            <div className="alertcats">
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "var(--red)" }}>
                  <svg width="20" height="20">
                    <use href="#i-wrench" />
                  </svg>
                </div>
                <div className="k">Maintenance Alerts</div>
                <div className="n num">2</div>
                <div className="s">Requires Attention</div>
                <Link className="link" href="/ho/maintenance">View All →</Link>
              </div>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "var(--amber)" }}>
                  <svg width="20" height="20">
                    <use href="#i-recall" />
                  </svg>
                </div>
                <div className="k">Product Recalls</div>
                <div className="n num">1</div>
                <div className="s">Requires Attention</div>
                <Link className="link" href="/ho/alerts">View All →</Link>
              </div>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "var(--violet)" }}>
                  <svg width="20" height="20">
                    <use href="#i-shield" />
                  </svg>
                </div>
                <div className="k">Warranty Expirations</div>
                <div className="n num">2</div>
                <div className="s">Expiring Soon</div>
                <Link className="link" href="/ho/alerts">View All →</Link>
              </div>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "#3B7EA1" }}>
                  <svg width="20" height="20">
                    <use href="#i-calendar" />
                  </svg>
                </div>
                <div className="k">Account Subscription</div>
                <div className="n num">1</div>
                <div className="s">Expiring Soon</div>
                <Link className="link" href="/pricing">View All →</Link>
              </div>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "var(--teal-deep)" }}>
                  <svg width="20" height="20">
                    <use href="#i-bell" />
                  </svg>
                </div>
                <div className="k">Other Alerts</div>
                <div className="n num">4</div>
                <div className="s">New Alerts</div>
                <Link className="link" href="/ho/alerts">View All →</Link>
              </div>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "var(--slate)" }}>
                  <svg width="20" height="20">
                    <use href="#i-doc" />
                  </svg>
                </div>
                <div className="k">Documents & Reports</div>
                <div className="n num">6</div>
                <div className="s">Need Review</div>
                <Link className="link" href="/ho/vault">View All →</Link>
              </div>
              {" "}</div>
            {" "}
            <div className="withrail">
              {" "}
              <div>
                {" "}
                <div className="filters">
                  {" "}
                  <button className="filt is-on">All Alerts (10)</button>
                  {" "}
                  <button className="filt">Requires Attention{" "}
                    <span className="c num">3</span>
                  </button>
                  {" "}
                  <button className="filt">Expiring Soon{" "}
                    <span className="c amber num">3</span>
                  </button>
                  {" "}
                  <button className="filt">Upcoming{" "}
                    <span className="c slate num">4</span>
                  </button>
                  {" "}
                  <button className="filt">Completed</button>
                  {" "}
                  <span className="sm muted" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "5px" }}>Sort by: Most Recent{" "}
                    <svg width="12" height="12">
                      <use href="#i-chevd" />
                    </svg>
                  </span>
                  {" "}</div>
                {" "}
                <p className="sm muted" style={{ margin: "10px 0 2px" }}>Showing 1–4 of 10 alerts</p>
                {" "}
                <div className="arow">
                  {" "}
                  <svg width="18" height="18" style={{ color: "var(--red)" }}>
                    <use href="#i-wrench" />
                  </svg>
                  {" "}
                  <span className="tagpill tp-red">Maintenance</span>
                  {" "}
                  <div>
                    <b>HVAC System Maintenance Due</b>
                    <p>Regular maintenance helps extend the life of your system and improves efficiency.</p>
                    <span className="where">
                      <svg width="11" height="11">
                        <use href="#i-home" />
                      </svg>{" "}123 Happiness Street, Safety Harbor, FL 34695</span>
                  </div>
                  {" "}
                  <span className="sm muted">Sep 12, 2026</span>
                  {" "}
                  <button className="abtn" style={{ background: "var(--red)" }} data-stub="Schedule HVAC service">Schedule Now</button>
                  {" "}
                  <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                    <use href="#i-vdots" />
                  </svg>
                  {" "}</div>
                {" "}
                <div className="arow">
                  {" "}
                  <svg width="18" height="18" style={{ color: "var(--amber)" }}>
                    <use href="#i-recall" />
                  </svg>
                  {" "}
                  <span className="tagpill tp-amber">Product Recall</span>
                  {" "}
                  <div>
                    <b>Water Heater Recall Notice</b>
                    <p>Rheem has issued a recall for certain water heater models due to potential overheating.</p>
                    <span className="where">
                      <svg width="11" height="11">
                        <use href="#i-home" />
                      </svg>{" "}245 Peaceful Lane, Palm Harbor, FL 34683</span>
                  </div>
                  {" "}
                  <span className="sm muted">Sep 10, 2026</span>
                  {" "}
                  <button className="abtn" style={{ background: "var(--amber)" }} data-stub="Recall details">View Details</button>
                  {" "}
                  <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                    <use href="#i-vdots" />
                  </svg>
                  {" "}</div>
                {" "}
                <div className="arow">
                  {" "}
                  <svg width="18" height="18" style={{ color: "var(--teal-deep)" }}>
                    <use href="#i-drop" />
                  </svg>
                  {" "}
                  <span className="tagpill tp-teal">Utility Alert</span>
                  {" "}
                  <div>
                    <b>Water Usage Increase</b>
                    <p>Your water usage was 28% higher than last month.</p>
                    <span className="where">
                      <svg width="11" height="11">
                        <use href="#i-home" />
                      </svg>{" "}245 Peaceful Lane, Palm Harbor, FL 34683</span>
                  </div>
                  {" "}
                  <span className="sm muted">Sep 7, 2026</span>
                  {" "}
                  <button className="abtn" style={{ background: "var(--teal-deep)" }} data-stub="Utility usage report">View Usage</button>
                  {" "}
                  <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                    <use href="#i-vdots" />
                  </svg>
                  {" "}</div>
                {" "}
                <div className="arow">
                  {" "}
                  <svg width="18" height="18" style={{ color: "var(--slate)" }}>
                    <use href="#i-clip" />
                  </svg>
                  {" "}
                  <span className="tagpill tp-slate">Inspection</span>
                  {" "}
                  <div>
                    <b>Annual Roof Inspection Recommended</b>
                    <p>It’s been 11 months since your last roof inspection.</p>
                    <span className="where">
                      <svg width="11" height="11">
                        <use href="#i-home" />
                      </svg>{" "}1117 Humble Way, Dunedin, FL 34698</span>
                  </div>
                  {" "}
                  <span className="sm muted">Sep 6, 2026</span>
                  {" "}
                  <Link className="abtn" style={{ background: "var(--slate)" }} href="/ho/providers">Find a Pro</Link>
                  {" "}
                  <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                    <use href="#i-vdots" />
                  </svg>
                  {" "}</div>
                {" "}
                <div style={{ textAlign: "center", marginTop: "14px" }}>
                  <button className="btn btn-ghost" data-stub="Load more alerts">Load More Alerts{" "}
                    <svg width="13" height="13">
                      <use href="#i-chevd" />
                    </svg>
                  </button>
                </div>
                {" "}</div>
              {" "}
              <div style={{ display: "grid", gap: "14px" }}>
                {" "}
                <div className="minisect" style={{ background: "#F1FAFA", borderColor: "#CFE9E9" }}>
                  {" "}
                  <div className="minisect-h">
                    <svg className="ic" width="16" height="16">
                      <use href="#i-bell" />
                    </svg>
                    <b>Never miss an important alert.</b>
                  </div>
                  {" "}
                  <p className="tiny muted" style={{ marginBottom: "9px" }}>Choose how you want to be notified so you never miss what matters most.</p>
                  {" "}
                  <div className="alertline" style={{ borderTopColor: "#DCEDED" }}>
                    <svg className="ic" width="15" height="15" style={{ color: "var(--teal-deep)" }}>
                      <use href="#i-mail" />
                    </svg>
                    <div>
                      <b>Email</b>
                      <span>Receive alerts via email</span>
                    </div>
                  </div>
                  {" "}
                  <div className="alertline" style={{ borderTopColor: "#DCEDED" }}>
                    <svg className="ic" width="15" height="15" style={{ color: "var(--teal-deep)" }}>
                      <use href="#i-phone" />
                    </svg>
                    <div>
                      <b>Text Message</b>
                      <span>Get text notifications</span>
                    </div>
                  </div>
                  {" "}
                  <div className="alertline" style={{ borderTopColor: "#DCEDED" }}>
                    <svg className="ic" width="15" height="15" style={{ color: "var(--teal-deep)" }}>
                      <use href="#i-bell" />
                    </svg>
                    <div>
                      <b>In-App</b>
                      <span>See alerts in real time</span>
                    </div>
                  </div>
                  {" "}
                  <button className="tiny" style={{ color: "var(--teal-deep)", fontWeight: "700", marginTop: "8px" }} data-stub="Manage alert settings">Manage Alert Settings →</button>
                  {" "}</div>
                {" "}
                <div className="minisect">
                  {" "}
                  <div className="minisect-h">
                    <svg className="ic" width="16" height="16" style={{ color: "var(--amber)" }}>
                      <use href="#i-bulb" />
                    </svg>
                    <b>What types of alerts will I receive?</b>
                  </div>
                  {" "}
                  <p className="tiny muted">We monitor key areas of your home to keep you informed about important updates and deadlines.</p>
                  {" "}
                  <Link className="tiny" href="/ho/resources" style={{ color: "var(--teal-deep)", fontWeight: "700", display: "block", marginTop: "8px" }}>Learn more about alerts →</Link>
                  {" "}</div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="grid4" style={{ marginTop: "16px" }}>
              {" "}
              <div className="whyit" style={{ margin: "0" }}>
                <svg className="ic" width="17" height="17">
                  <use href="#i-shield-check" />
                </svg>
                <div>
                  <b>Timely & Relevant</b>
                  <br />
                  <span className="tiny">Alerts tailored to your home and location.</span>
                </div>
              </div>
              {" "}
              <div className="whyit" style={{ margin: "0" }}>
                <svg className="ic" width="17" height="17">
                  <use href="#i-check" />
                </svg>
                <div>
                  <b>Protect Your Home</b>
                  <br />
                  <span className="tiny">Take action early and avoid costly repairs.</span>
                </div>
              </div>
              {" "}
              <div className="whyit" style={{ margin: "0" }}>
                <svg className="ic" width="17" height="17">
                  <use href="#i-dollar" />
                </svg>
                <div>
                  <b>Save Time & Money</b>
                  <br />
                  <span className="tiny">Stay ahead of issues and manage costs.</span>
                </div>
              </div>
              {" "}
              <div className="whyit" style={{ margin: "0" }}>
                <svg className="ic" width="17" height="17">
                  <use href="#i-users" />
                </svg>
                <div>
                  <b>Peace of Mind</b>
                  <br />
                  <span className="tiny">We help you keep your home running smoothly.</span>
                </div>
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
