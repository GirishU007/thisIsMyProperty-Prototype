// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { AgentShell } from "@/components/proto/AgentShell";

export const metadata: Metadata = { title: "Today" };

export default function Page() {
  return (
    <AgentShell active="today" title="Good morning, Sarah" sub="4 clients could use a nudge from you today.">
      <div className="ux-kpis">
        <div className="ux-card ux-kpi">
          <b className="num">128</b>
          <span>Active clients</span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">86%</b>
          <span>Opened their vault this quarter</span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">4</b>
          <span>Need follow-up today</span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">3</b>
          <span>Likely to move within a year</span>
        </div>
      </div>
      <div className="ux-sech">
        <h2>Reach out today</h2>
        <span className="ct red" id="ag-ct">4</span>
      </div>
      <div className="ux-card ux-tasks">
        <div className="ux-task over">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-recall" />
            </svg>
          </span>
          <div className="tx">
            <b>John Smith · water heater recall</b>
            <span>245 Peaceful Ln. Rheem recall affects his model.</span>
          </div>
          <span className="ux-tag red">Recall</span>
          <button className="ux-btn pri sm" data-act="ag-send" data-msg="Recall notice sent to John Smith.">Notify client</button>
        </div>
        <div className="ux-task">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-gear" />
            </svg>
          </span>
          <div className="tx">
            <b>Maria Kennedy · HVAC service overdue</b>
            <span>1117 Humble Way. 28 days past due.</span>
          </div>
          <span className="ux-tag amber">Maintenance</span>
          <button className="ux-btn sec sm" data-act="ag-send" data-msg="Reminder sent to Maria Kennedy.">Send reminder</button>
        </div>
        <div className="ux-task">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-shield" />
            </svg>
          </span>
          <div className="tx">
            <b>David Thompson · roof warranty ends soon</b>
            <span>Expires in 30 days. A good moment to recommend an inspection.</span>
          </div>
          <span className="ux-tag amber">Warranty</span>
          <button className="ux-btn sec sm" data-act="ag-send" data-msg="Roofer recommendation sent to David Thompson.">Recommend a pro</button>
        </div>
        <div className="ux-task">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-trend" />
            </svg>
          </span>
          <div className="tx">
            <b>Sheryl Larson · home value up 8%</b>
            <span>She viewed her value estimate twice this week.</span>
          </div>
          <span className="ux-tag teal">Opportunity</span>
          <button className="ux-btn sec sm" data-act="ag-send" data-msg="Value update shared with Sheryl Larson.">Share value report</button>
        </div>
      </div>
      <div className="ux-note">
        <svg width="17" height="17">
          <use href="#i-info" />
        </svg>
        {" "}
        <span>You only see homes whose owners have shared their vault with you.</span>
      </div>
    </AgentShell>
  );
}
