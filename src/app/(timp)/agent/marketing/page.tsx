/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/04-agent-marketing.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "My Marketing Center" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-marketing" data-route="/agent/marketing">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="agent" active="mkt" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar agbar">
            <MenuButton />
            {" "}
            <span className="agsearch">
              <svg width="15" height="15">
                <use href="#i-search" />
              </svg>{" "}Search clients, properties, or marketing tools…</span>
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
                  <b>My Marketing Center</b>
                </div>
                {" "}
                <h1>My Marketing Center</h1>
                {" "}
                <div className="sub">Engage. Educate. Stay Top of Mind.</div>
                {" "}</div>
              {" "}
              <div className="spacer"></div>
              {" "}
              <div className="impact">
                <b>Create. Connect.<br />Make an Impact.</b>
                <i></i>
              </div>
              {" "}</div>
            {" "}
            <div className="mkcats">
              {" "}
              <button className="mkcat" data-stub="Email Campaigns">
                <div className="ic">
                  <svg width="26" height="26">
                    <use href="#i-mail" />
                  </svg>
                </div>
                <b>Email Campaigns</b>
                <span>Stay in touch with your database</span>
              </button>
              {" "}
              <button className="mkcat" data-stub="Client Touch Campaigns">
                <div className="ic">
                  <svg width="26" height="26">
                    <use href="#i-users" />
                  </svg>
                </div>
                <b>Client Touch Campaigns</b>
                <span>Automated outreach & reminders</span>
              </button>
              {" "}
              <button className="mkcat" data-stub="Social Media Content">
                <div className="ic">
                  <svg width="19" height="19" style={{ color: "#C8388E" }}>
                    <use href="#i-ig" />
                  </svg>
                  <svg width="19" height="19" style={{ color: "#1877F2" }}>
                    <use href="#i-fb" />
                  </svg>
                  <svg width="19" height="19" style={{ color: "#0A66C2" }}>
                    <use href="#i-in" />
                  </svg>
                </div>
                <b>Social Media Content</b>
                <span>Branded posts & reels</span>
              </button>
              {" "}
              <button className="mkcat" data-stub="Listing Marketing">
                <div className="ic">
                  <svg width="26" height="26">
                    <use href="#i-book" />
                  </svg>
                </div>
                <b>Listing Marketing</b>
                <span>Flyers, postcards, property websites</span>
              </button>
              {" "}
              <button className="mkcat" data-stub="Buyer Resources">
                <div className="ic">
                  <svg width="26" height="26">
                    <use href="#i-home" />
                  </svg>
                </div>
                <b>Buyer Resources</b>
                <span>Guides, checklists & market insights</span>
              </button>
              {" "}
              <button className="mkcat" data-stub="Custom Materials">
                <div className="ic">
                  <svg width="26" height="26">
                    <use href="#i-chart" />
                  </svg>
                </div>
                <b>Custom Materials</b>
                <span>Business cards, presentations & more</span>
              </button>
              {" "}</div>
            {" "}
            <div className="mkgrid">
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <b style={{ fontSize: "15px" }}>Featured Templates</b>
                  {" "}
                  <button className="link" data-stub="All templates">View All Templates →</button>
                </div>
                {" "}
                <div className="tplrow">
                  {" "}
                  <img src="/images/timp/agent-marketing-marketing-template.jpg" alt="Marketing template" />
                  {" "}
                  <img src="/images/timp/agent-marketing-marketing-template-2.jpg" alt="Marketing template" />
                  {" "}
                  <img src="/images/timp/agent-marketing-marketing-template-3.jpg" alt="Marketing template" />
                  {" "}
                  <img src="/images/timp/agent-marketing-marketing-template-4.jpg" alt="Marketing template" />
                  {" "}
                  <img src="/images/timp/agent-marketing-marketing-template-5.jpg" alt="Marketing template" />
                  {" "}</div>
                {" "}</div>
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <b style={{ fontSize: "15px" }}>Recent Campaigns</b>
                  {" "}
                  <button className="link" data-stub="All campaigns">View All →</button>
                </div>
                {" "}
                <div className="camp">
                  <img src="/images/timp/agent-marketing-camp.jpg" alt="" />
                  <div className="m">
                    <b>August Market Update</b>
                    <span>Aug 28, 2026</span>
                  </div>
                  <div className="v">
                    <b className="num">62%</b>
                    <span>Open Rate</span>
                  </div>
                  <svg width="14" height="14" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                    <use href="#i-vdots" />
                  </svg>
                </div>
                {" "}
                <div className="camp">
                  <img src="/images/timp/agent-marketing-camp-2.jpg" alt="" />
                  <div className="m">
                    <b>Home Maintenance Fall Reminders</b>
                    <span>Aug 15, 2026</span>
                  </div>
                  <div className="v">
                    <b className="num">48%</b>
                    <span>Open Rate</span>
                  </div>
                  <svg width="14" height="14" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                    <use href="#i-vdots" />
                  </svg>
                </div>
                {" "}
                <div className="camp">
                  <img src="/images/timp/agent-marketing-camp-3.jpg" alt="" />
                  <div className="m">
                    <b>Just Listed – Odessa</b>
                    <span>Aug 10, 2026</span>
                  </div>
                  <div className="v">
                    <b className="num">1,248</b>
                    <span>Recipients</span>
                  </div>
                  <svg width="14" height="14" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                    <use href="#i-vdots" />
                  </svg>
                </div>
                {" "}
                <div className="camp">
                  <img src="/images/timp/agent-marketing-camp-4.jpg" alt="" />
                  <div className="m">
                    <b>Summer Thank You</b>
                    <span>Jul 28, 2026</span>
                  </div>
                  <div className="v">
                    <b className="num">56%</b>
                    <span>Open Rate</span>
                  </div>
                  <svg width="14" height="14" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                    <use href="#i-vdots" />
                  </svg>
                </div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="mkgrid">
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <b style={{ fontSize: "15px" }}>Marketing Performance</b>
                  {" "}
                  <button className="btn btn-ghost" style={{ marginLeft: "auto", padding: "7px 12px" }} data-stub="Change date range">Last 30 Days{" "}
                    <svg width="12" height="12">
                      <use href="#i-chevd" />
                    </svg>
                  </button>
                </div>
                {" "}
                <div className="perf">
                  {" "}
                  <div className="p">
                    <div className="ic">
                      <svg width="22" height="22">
                        <use href="#i-mail" />
                      </svg>
                    </div>
                    <div className="n num">5,620</div>
                    <div className="l">Emails Sent</div>
                    <div className="d num">↑ 12%</div>
                    <div className="w">vs. previous month</div>
                  </div>
                  {" "}
                  <div className="p">
                    <div className="ic">
                      <svg width="22" height="22">
                        <use href="#i-users" />
                      </svg>
                    </div>
                    <div className="n num">48%</div>
                    <div className="l">Average Open Rate</div>
                    <div className="d num">↑ 6%</div>
                    <div className="w">vs. previous month</div>
                  </div>
                  {" "}
                  <div className="p">
                    <div className="ic">
                      <svg width="22" height="22">
                        <use href="#i-cursor" />
                      </svg>
                    </div>
                    <div className="n num">9%</div>
                    <div className="l">Click Through Rate</div>
                    <div className="d num">↑ 3%</div>
                    <div className="w">vs. previous month</div>
                  </div>
                  {" "}
                  <div className="p">
                    <div className="ic">
                      <svg width="22" height="22">
                        <use href="#i-share" />
                      </svg>
                    </div>
                    <div className="n num">2,450</div>
                    <div className="l">Social Media Reach</div>
                    <div className="d num">↑ 25%</div>
                    <div className="w">vs. previous month</div>
                  </div>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <b style={{ fontSize: "15px" }}>Quick Actions</b>
                </div>
                {" "}
                <div className="qa2">
                  {" "}
                  <button data-stub="Create Email Campaign">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-mail" />
                    </svg>{" "}Create Email Campaign</button>
                  {" "}
                  <button data-stub="Schedule Social Post">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-calendar" />
                    </svg>{" "}Schedule Social Post</button>
                  {" "}
                  <button data-stub="Design a Flyer">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-doc" />
                    </svg>{" "}Design a Flyer</button>
                  {" "}
                  <button data-stub="Access Brand Assets">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-grid" />
                    </svg>{" "}Access Brand Assets</button>
                  {" "}
                  <button data-stub="View Content Calendar">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-calendar" />
                    </svg>{" "}View Content Calendar</button>
                  {" "}
                  <button data-stub="Manage Automations">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-cog" />
                    </svg>{" "}Manage Automations</button>
                  {" "}</div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="tipbar">
              {" "}
              <svg className="ic" width="30" height="30">
                <use href="#i-bulb" />
              </svg>
              {" "}
              <b>Marketing Tip</b>
              {" "}
              <p>Consistent, valuable communication builds trust and keeps you top of mind.<br />Use your clients’ upcoming home maintenance or project milestones as a reason to reach out!</p>
              {" "}
              <button className="iconbtn" data-stub="Dismiss tip">
                <svg width="16" height="16">
                  <use href="#i-x" />
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
