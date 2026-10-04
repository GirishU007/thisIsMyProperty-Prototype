// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { AgentShell } from "@/components/proto/AgentShell";

export const metadata: Metadata = { title: "Clients" };

export default function Page() {
  return (
    <AgentShell active="clients" title="Clients" sub="128 clients. 18 are due a follow-up.">
      <div className="ux-kpis">
        <div className="ux-card ux-kpi">
          <b className="num">128</b>
          <span>Total clients</span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">94</b>
          <span>Active this year (73%)</span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">18</b>
          <span>Need a follow-up</span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">12</b>
          <span>New this year</span>
        </div>
      </div>
      <div className="ux-toolbar">
        <span className="ux-input ux-search">
          <svg width="18" height="18">
            <use href="#i-search" />
          </svg>
          {" "}
          <span className="ux-muted">Search clients</span>
        </span>
        <button className="ux-btn pri" data-toast="Invites a client and creates their vault.">
          <svg width="17" height="17">
            <use href="#i-plus" />
          </svg>{" "}Add client</button>
      </div>
      <div className="ux-filter" id="client-filter">
        <button className="ux-chip is-on" data-f="all">All{" "}
          <span className="n num">128</span>
        </button>
        <button className="ux-chip" data-f="Very high,High">High engagement{" "}
          <span className="n num">28</span>
        </button>
        <button className="ux-chip" data-f="Medium">Medium</button>
        <button className="ux-chip" data-f="Low">Needs follow-up{" "}
          <span className="n num">18</span>
        </button>
      </div>
      <div className="ux-card ux-tasks ux-tablewrap">
        <table className="ux-table" id="client-list">
          <thead>
            <tr>
              <th>Client</th>
              <th className="c-hide">Homes</th>
              <th className="c-hide">Last contact</th>
              <th>Engagement</th>
              <th className="c-hide2">Next follow-up</th>
              <th className="c-hide2">Opportunity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr data-type="Very high">
              <td>
                <span className="ux-who">
                  <span className="avatar">JS</span>
                  <b>John Smith</b>
                </span>
              </td>
              <td className="num c-hide">2</td>
              <td className="c-hide">Sep 2, 2026<span className="s">Sent listing</span>
              </td>
              <td>
                <span className="ux-tag green">Very high</span>
              </td>
              <td className="num c-hide2">Sep 15, 2026</td>
              <td className="c-hide2">List current home</td>
              <td className="r">
                <Link className="ux-btn sec sm" href="/agent/vaults">Open</Link>
              </td>
            </tr>
            <tr data-type="High">
              <td>
                <span className="ux-who">
                  <span className="avatar">MK</span>
                  <b>Maria Kennedy</b>
                </span>
              </td>
              <td className="num c-hide">1</td>
              <td className="c-hide">Aug 28, 2026<span className="s">Phone call</span>
              </td>
              <td>
                <span className="ux-tag green">High</span>
              </td>
              <td className="num c-hide2">Sep 10, 2026</td>
              <td className="c-hide2">Buy next home</td>
              <td className="r">
                <Link className="ux-btn sec sm" href="/agent/vaults">Open</Link>
              </td>
            </tr>
            <tr data-type="High">
              <td>
                <span className="ux-who">
                  <span className="avatar">DT</span>
                  <b>David Thompson</b>
                </span>
              </td>
              <td className="num c-hide">3</td>
              <td className="c-hide">Aug 20, 2026<span className="s">Property tour</span>
              </td>
              <td>
                <span className="ux-tag green">High</span>
              </td>
              <td className="num c-hide2">Sep 5, 2026</td>
              <td className="c-hide2">Investment property</td>
              <td className="r">
                <Link className="ux-btn sec sm" href="/agent/vaults">Open</Link>
              </td>
            </tr>
            <tr data-type="Medium">
              <td>
                <span className="ux-who">
                  <span className="avatar">SL</span>
                  <b>Sheryl Larson</b>
                </span>
              </td>
              <td className="num c-hide">1</td>
              <td className="c-hide">Aug 15, 2026<span className="s">Email</span>
              </td>
              <td>
                <span className="ux-tag amber">Medium</span>
              </td>
              <td className="num c-hide2">Sep 20, 2026</td>
              <td className="c-hide2">Refinance options</td>
              <td className="r">
                <Link className="ux-btn sec sm" href="/agent/vaults">Open</Link>
              </td>
            </tr>
            <tr data-type="Medium">
              <td>
                <span className="ux-who">
                  <span className="avatar">RB</span>
                  <b>Robert Brown</b>
                </span>
              </td>
              <td className="num c-hide">2</td>
              <td className="c-hide">Aug 10, 2026<span className="s">Document shared</span>
              </td>
              <td>
                <span className="ux-tag amber">Medium</span>
              </td>
              <td className="num c-hide2">Sep 18, 2026</td>
              <td className="c-hide2">Home improvements</td>
              <td className="r">
                <Link className="ux-btn sec sm" href="/agent/vaults">Open</Link>
              </td>
            </tr>
            <tr data-type="Low">
              <td>
                <span className="ux-who">
                  <span className="avatar">AC</span>
                  <b>Anna Collins</b>
                </span>
              </td>
              <td className="num c-hide">1</td>
              <td className="c-hide">Aug 5, 2026<span className="s">Phone call</span>
              </td>
              <td>
                <span className="ux-tag grey">Low</span>
              </td>
              <td className="num c-hide2">Sep 25, 2026</td>
              <td className="c-hide2">Market update</td>
              <td className="r">
                <Link className="ux-btn sec sm" href="/agent/vaults">Open</Link>
              </td>
            </tr>
            <tr data-type="Low">
              <td>
                <span className="ux-who">
                  <span className="avatar">JW</span>
                  <b>Jennifer Wilson</b>
                </span>
              </td>
              <td className="num c-hide">1</td>
              <td className="c-hide">Jul 28, 2026<span className="s">Email</span>
              </td>
              <td>
                <span className="ux-tag grey">Low</span>
              </td>
              <td className="num c-hide2">Oct 1, 2026</td>
              <td className="c-hide2">Buy in 2027</td>
              <td className="r">
                <Link className="ux-btn sec sm" href="/agent/vaults">Open</Link>
              </td>
            </tr>
            <tr data-type="Low">
              <td>
                <span className="ux-who">
                  <span className="avatar">ML</span>
                  <b>Michael Lee</b>
                </span>
              </td>
              <td className="num c-hide">3</td>
              <td className="c-hide">Jul 15, 2026<span className="s">Report sent</span>
              </td>
              <td>
                <span className="ux-tag grey">Low</span>
              </td>
              <td className="num c-hide2">Oct 10, 2026</td>
              <td className="c-hide2">Check in</td>
              <td className="r">
                <Link className="ux-btn sec sm" href="/agent/vaults">Open</Link>
              </td>
            </tr>
            <tr data-type="Low">
              <td>
                <span className="ux-who">
                  <span className="avatar">PG</span>
                  <b>Patricia Green</b>
                </span>
              </td>
              <td className="num c-hide">1</td>
              <td className="c-hide">Jun 30, 2026<span className="s">Phone call</span>
              </td>
              <td>
                <span className="ux-tag grey">Low</span>
              </td>
              <td className="num c-hide2">Oct 15, 2026</td>
              <td className="c-hide2">Land purchase</td>
              <td className="r">
                <Link className="ux-btn sec sm" href="/agent/vaults">Open</Link>
              </td>
            </tr>
            <tr data-type="Low">
              <td>
                <span className="ux-who">
                  <span className="avatar">TW</span>
                  <b>Thomas Wilson</b>
                </span>
              </td>
              <td className="num c-hide">2</td>
              <td className="c-hide">Jun 25, 2026<span className="s">Market update</span>
              </td>
              <td>
                <span className="ux-tag grey">Low</span>
              </td>
              <td className="num c-hide2">Oct 20, 2026</td>
              <td className="c-hide2">Future listing</td>
              <td className="r">
                <Link className="ux-btn sec sm" href="/agent/vaults">Open</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="ux-muted" style={{ fontSize: "14px" }}>Showing 10 of 128 clients.{" "}
        <a className="ux-link" data-toast="Loads the next 10 clients.">Show more</a>
      </p>
    </AgentShell>
  );
}
