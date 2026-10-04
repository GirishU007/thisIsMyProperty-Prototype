// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { AgentShell } from "@/components/proto/AgentShell";

export const metadata: Metadata = { title: "Alerts" };

export default function Page() {
  return (
    <AgentShell active="alerts" title="Alerts" sub="What is happening across your clients’ homes, and where you can help.">
      <div className="ux-filter" id="alert-filter">
        <button className="ux-chip is-on" data-f="all">All{" "}
          <span className="n num">58</span>
        </button>
        <button className="ux-chip" data-f="attention">Needs you{" "}
          <span className="n num">18</span>
        </button>
        <button className="ux-chip" data-f="week">This week{" "}
          <span className="n num">12</span>
        </button>
      </div>
      <div className="ux-card ux-tasks" id="alert-list">
        <div className="ux-task" data-type="attention">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-gear" />
            </svg>
          </span>
          <div className="tx">
            <b>HVAC replacement due</b>
            <span>John Smith · 123 Main St, Tampa · Sep 12, 2026</span>
          </div>
          <span className="ux-tag amber">Maintenance</span>
          <button className="ux-btn sec sm" data-act="ag-send" data-msg="Notice sent to John Smith.">Notify client</button>
        </div>
        <div className="ux-task over" data-type="attention">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-recall" />
            </svg>
          </span>
          <div className="tx">
            <b>Rheem water heater recall affects 2 clients</b>
            <span>Maria Kennedy, Robert Brown · Sep 10, 2026</span>
          </div>
          <span className="ux-tag red">Recall</span>
          <button className="ux-btn pri sm" data-act="ag-send" data-msg="Recall notice sent to 2 clients.">Notify both</button>
        </div>
        <div className="ux-task" data-type="attention">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-shield" />
            </svg>
          </span>
          <div className="tx">
            <b>Dishwasher warranty expires in 30 days</b>
            <span>Sheryl Larson · 456 Pine Ridge Dr · Sep 9, 2026</span>
          </div>
          <span className="ux-tag amber">Warranty</span>
          <button className="ux-btn sec sm" data-act="ag-send" data-msg="Reminder sent to Sheryl Larson.">Send reminder</button>
        </div>
        <div className="ux-task" data-type="attention">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-roof" />
            </svg>
          </span>
          <div className="tx">
            <b>Annual roof inspection overdue</b>
            <span>Michael Lee · 987 Whispering Trl · Sep 6, 2026</span>
          </div>
          <span className="ux-tag amber">Inspection</span>
          <button className="ux-btn sec sm" data-act="ag-send" data-msg="Roofer recommendation sent to Michael Lee.">Recommend a pro</button>
        </div>
        <div className="ux-task" data-type="week">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-doc" />
            </svg>
          </span>
          <div className="tx">
            <b>New roof invoice uploaded</b>
            <span>David Thompson · 876 Oak Ln · Sep 8, 2026</span>
          </div>
          <span className="ux-tag grey">Vault activity</span>
          <Link className="ux-btn sec sm" href="/agent/vaults">Open vault</Link>
        </div>
        <div className="ux-task" data-type="week">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-lock" />
            </svg>
          </span>
          <div className="tx">
            <b>Vault access approved</b>
            <span>Anna Collins · 321 Sunset Dr · Sep 7, 2026</span>
          </div>
          <span className="ux-tag grey">Access</span>
          <Link className="ux-btn sec sm" href="/agent/vaults">Open vault</Link>
        </div>
      </div>
      <p className="ux-muted" style={{ fontSize: "14px" }}>Showing 6 of 58 alerts.{" "}
        <a className="ux-link" data-toast="Loads more alerts.">Show more</a>
      </p>
      <div className="ux-grid2">
        <div className="ux-card ux-feat">
          <span className="ic">
            <svg width="22" height="22">
              <use href="#i-megaphone" />
            </svg>
          </span>
          <h3>Turn an alert into a conversation</h3>
          <p>Each alert is a reason to reach out with something useful, not a generic check-in.</p>
          <Link className="ux-btn sec sm" href="/agent/marketing">Create a campaign</Link>
        </div>
        <div className="ux-card ux-feat">
          <span className="ic">
            <svg width="22" height="22">
              <use href="#i-lock" />
            </svg>
          </span>
          <h3>How client alerts work</h3>
          <p>You see alerts only for homes whose owners have shared their vault with you.</p>
        </div>
      </div>
    </AgentShell>
  );
}
