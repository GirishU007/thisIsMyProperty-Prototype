/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/08-agent-alerts.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Alerts" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-ag-alerts" data-route="/agent/alerts">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="agent" active="alerts" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar agbar">
            <MenuButton />
            {" "}
            <span className="agsearch">
              <svg width="15" height="15">
                <use href="#i-search" />
              </svg>{" "}Search alerts by client, property or type…</span>
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
              <button className="iconbtn" data-stub="Help centre">
                <svg width="18" height="18">
                  <use href="#i-help" />
                </svg>
              </button>
              {" "}
              <div className="avatar">SM</div>
              {" "}
              <span className="who-agent">
                <b>Welcome, Sarah</b>
                <span>Agent</span>
              </span>
              {" "}
              <svg width="14" height="14" style={{ color: "var(--slate)" }}>
                <use href="#i-chevd" />
              </svg>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="content">
            {" "}
            <div className="pagehead">
              {" "}
              <div>
                {" "}
                <div className="crumb">
                  <Link href="/agent">Agent Dashboard</Link>
                  {" "}
                  <svg width="12" height="12">
                    <use href="#i-chev" />
                  </svg>
                  {" "}
                  <b>Alerts</b>
                </div>
                {" "}
                <h1>Alerts</h1>
                {" "}
                <div className="sub">What is happening across your clients’ homes — and where you can help.</div>
                {" "}</div>
              {" "}
              <div className="spacer"></div>
              {" "}</div>
            {" "}
            <div className="alertcats" style={{ marginTop: "18px" }}>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "var(--red)" }}>
                  <svg width="20" height="20">
                    <use href="#i-wrench" />
                  </svg>
                </div>
                <div className="k">Client Maintenance</div>
                <div className="n num">24</div>
                <div className="s">Due within 12 months</div>
              </div>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "var(--violet)" }}>
                  <svg width="20" height="20">
                    <use href="#i-shield" />
                  </svg>
                </div>
                <div className="k">Warranty Expirations</div>
                <div className="n num">9</div>
                <div className="s">Expiring soon</div>
              </div>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "var(--amber)" }}>
                  <svg width="20" height="20">
                    <use href="#i-recall" />
                  </svg>
                </div>
                <div className="k">Product Recalls</div>
                <div className="n num">3</div>
                <div className="s">Affecting your clients</div>
              </div>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "#3B7EA1" }}>
                  <svg width="20" height="20">
                    <use href="#i-case" />
                  </svg>
                </div>
                <div className="k">Vault Activity</div>
                <div className="n num">12</div>
                <div className="s">New this week</div>
              </div>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "var(--teal-deep)" }}>
                  <svg width="20" height="20">
                    <use href="#i-users" />
                  </svg>
                </div>
                <div className="k">Access Requests</div>
                <div className="n num">4</div>
                <div className="s">Awaiting client approval</div>
              </div>
              {" "}
              <div className="acat">
                <div className="ic" style={{ color: "var(--slate)" }}>
                  <svg width="20" height="20">
                    <use href="#i-calendar" />
                  </svg>
                </div>
                <div className="k">Follow-ups Due</div>
                <div className="n num">6</div>
                <div className="s">Scheduled this week</div>
              </div>
              {" "}</div>
            {" "}
            <div className="withrail">
              {" "}
              <div>
                {" "}
                <div className="filters">
                  {" "}
                  <button className="filt is-on">All Alerts (58)</button>
                  {" "}
                  <button className="filt" data-stub="Requires attention">Requires Attention{" "}
                    <span className="c num">18</span>
                  </button>
                  {" "}
                  <button className="filt" data-stub="This week">This Week{" "}
                    <span className="c amber num">12</span>
                  </button>
                  {" "}
                  <button className="filt" data-stub="Completed">Completed</button>
                  {" "}
                  <span className="sm muted" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "5px" }}>Sort by: Most Recent{" "}
                    <svg width="12" height="12">
                      <use href="#i-chevd" />
                    </svg>
                  </span>
                  {" "}</div>
                {" "}
                <p className="sm muted" style={{ margin: "10px 0 2px" }}>Showing 1–6 of 58 alerts</p>
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
                    <b>HVAC replacement due</b>
                    <span className="where">
                      <svg width="11" height="11">
                        <use href="#i-users" />
                      </svg>{" "}John Smith · 123 Main St, Tampa</span>
                  </div>
                  {" "}
                  <span className="sm muted">Sep 12, 2026</span>
                  {" "}
                  <button className="abtn" style={{ background: "var(--red)" }} data-stub="Notify Client">Notify Client</button>
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
                    <b>Rheem water heater recall affects 2 clients</b>
                    <span className="where">
                      <svg width="11" height="11">
                        <use href="#i-users" />
                      </svg>{" "}Maria Kennedy, Robert Brown</span>
                  </div>
                  {" "}
                  <span className="sm muted">Sep 10, 2026</span>
                  {" "}
                  <button className="abtn" style={{ background: "var(--amber)" }} data-stub="Review Recall">Review Recall</button>
                  {" "}
                  <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                    <use href="#i-vdots" />
                  </svg>
                  {" "}</div>
                {" "}
                <div className="arow">
                  {" "}
                  <svg width="18" height="18" style={{ color: "var(--violet)" }}>
                    <use href="#i-shield" />
                  </svg>
                  {" "}
                  <span className="tagpill tp-violet">Warranty</span>
                  {" "}
                  <div>
                    <b>Dishwasher warranty expires in 30 days</b>
                    <span className="where">
                      <svg width="11" height="11">
                        <use href="#i-users" />
                      </svg>{" "}Sheryl Larson · 456 Pine Ridge Dr</span>
                  </div>
                  {" "}
                  <span className="sm muted">Sep 9, 2026</span>
                  {" "}
                  <button className="abtn" style={{ background: "var(--violet)" }} data-stub="Send Reminder">Send Reminder</button>
                  {" "}
                  <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                    <use href="#i-vdots" />
                  </svg>
                  {" "}</div>
                {" "}
                <div className="arow">
                  {" "}
                  <svg width="18" height="18" style={{ color: "#3B7EA1" }}>
                    <use href="#i-case" />
                  </svg>
                  {" "}
                  <span className="tagpill tp-blue">Vault Activity</span>
                  {" "}
                  <div>
                    <b>New roof invoice uploaded</b>
                    <span className="where">
                      <svg width="11" height="11">
                        <use href="#i-users" />
                      </svg>{" "}David Thompson · 876 Oak Ln</span>
                  </div>
                  {" "}
                  <span className="sm muted">Sep 8, 2026</span>
                  {" "}
                  <button className="abtn" style={{ background: "#3B7EA1" }} data-stub="Open Vault">Open Vault</button>
                  {" "}
                  <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                    <use href="#i-vdots" />
                  </svg>
                  {" "}</div>
                {" "}
                <div className="arow">
                  {" "}
                  <svg width="18" height="18" style={{ color: "var(--teal-deep)" }}>
                    <use href="#i-users" />
                  </svg>
                  {" "}
                  <span className="tagpill tp-teal">Access Request</span>
                  {" "}
                  <div>
                    <b>Vault access approved</b>
                    <span className="where">
                      <svg width="11" height="11">
                        <use href="#i-users" />
                      </svg>{" "}Anna Collins · 321 Sunset Dr</span>
                  </div>
                  {" "}
                  <span className="sm muted">Sep 7, 2026</span>
                  {" "}
                  <button className="abtn" style={{ background: "var(--teal-deep)" }} data-stub="View Vault">View Vault</button>
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
                    <b>Annual roof inspection overdue</b>
                    <span className="where">
                      <svg width="11" height="11">
                        <use href="#i-users" />
                      </svg>{" "}Michael Lee · 987 Whispering Trl</span>
                  </div>
                  {" "}
                  <span className="sm muted">Sep 6, 2026</span>
                  {" "}
                  <button className="abtn" style={{ background: "var(--slate)" }} data-stub="Recommend Pro">Recommend Pro</button>
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
                      <use href="#i-megaphone" />
                    </svg>
                    <b>Turn an alert into a conversation.</b>
                  </div>
                  {" "}
                  <p className="tiny muted" style={{ marginBottom: "9px" }}>Each alert is a reason to reach out. Send a relevant update rather than a generic check-in.</p>
                  {" "}
                  <button className="btn btn-primary" style={{ width: "100%" }} data-stub="Create a campaign from alerts">Create a Campaign</button>
                  {" "}</div>
                {" "}
                <div className="minisect">
                  {" "}
                  <div className="minisect-h">
                    <svg className="ic" width="16" height="16" style={{ color: "var(--amber)" }}>
                      <use href="#i-bulb" />
                    </svg>
                    <b>How client alerts work</b>
                  </div>
                  {" "}
                  <p className="tiny muted">You see alerts only for properties whose owners have shared their vault with you.</p>
                  {" "}</div>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
