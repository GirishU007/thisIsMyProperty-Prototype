// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { AgentShell } from "@/components/proto/AgentShell";

export const metadata: Metadata = { title: "Property vaults" };

export default function Page() {
  return (
    <AgentShell active="vaults" title="Property vaults" sub="28 clients have shared 56 homes with you.">
      <div className="ux-split">
        <div className="ux-card ux-people">
          <span className="ux-input ux-search" style={{ maxWidth: "none" }}>
            <svg width="18" height="18">
              <use href="#i-search" />
            </svg>
            {" "}
            <span className="ux-muted">Search clients or addresses</span>
          </span>
          <button className="ux-person is-on" data-act="pick-client" data-name="John Smith">
            <span className="avatar">JS</span>
            <span>
              <b>John Smith</b>
              <span>2 homes · active Sep 2, 2026</span>
            </span>
          </button>
          <button className="ux-person" data-act="pick-client" data-name="Maria Kennedy">
            <span className="avatar">MK</span>
            <span>
              <b>Maria Kennedy</b>
              <span>1 home · active Aug 20, 2026</span>
            </span>
          </button>
          <button className="ux-person" data-act="pick-client" data-name="David Thompson">
            <span className="avatar">DT</span>
            <span>
              <b>David Thompson</b>
              <span>3 homes · active Sep 1, 2026</span>
            </span>
          </button>
          <button className="ux-person" data-act="pick-client" data-name="Sheryl Larson">
            <span className="avatar">SL</span>
            <span>
              <b>Sheryl Larson</b>
              <span>1 home · active Aug 15, 2026</span>
            </span>
          </button>
          <button className="ux-person" data-act="pick-client" data-name="Robert Brown">
            <span className="avatar">RB</span>
            <span>
              <b>Robert Brown</b>
              <span>2 homes · active Aug 28, 2026</span>
            </span>
          </button>
          <button className="ux-person" data-act="pick-client" data-name="Anna Collins">
            <span className="avatar">AC</span>
            <span>
              <b>Anna Collins</b>
              <span>1 home · active Aug 10, 2026</span>
            </span>
          </button>
          <button className="ux-person" data-act="pick-client" data-name="Jennifer Wilson">
            <span className="avatar">JW</span>
            <span>
              <b>Jennifer Wilson</b>
              <span>1 home · active Sep 3, 2026</span>
            </span>
          </button>
          <button className="ux-person" data-act="pick-client" data-name="Michael Lee">
            <span className="avatar">ML</span>
            <span>
              <b>Michael Lee</b>
              <span>3 homes · active Aug 25, 2026</span>
            </span>
          </button>
          <p className="ux-muted" style={{ fontSize: "13.5px", padding: "8px 4px 0" }}>Showing 8 of 28.{" "}
            <a className="ux-link" data-toast="Loads more clients.">Show more</a>
          </p>
        </div>
        <div className="ux-detail">
          <div className="ux-card ux-clienthead">
            <span className="avatar lg" id="cl-av">JS</span>
            <div className="tx">
              <h2 id="cl-name">John Smith</h2>
              <p className="ux-muted">2 homes · 8 documents · 3 upcoming maintenance items</p>
            </div>
            <div className="ux-actrow">
              <button className="ux-btn pri sm" data-act="ag-update">
                <svg width="15" height="15">
                  <use href="#i-send" />
                </svg>{" "}Send an update</button>
              <button className="ux-btn sec sm" data-toast="Generates a branded Home Health or Improvements report for this client.">
                <svg width="15" height="15">
                  <use href="#i-doc" />
                </svg>{" "}Create report</button>
              <button className="ux-btn sec sm" data-toast="Adds a private note to this client.">
                <svg width="15" height="15">
                  <use href="#i-pencil" />
                </svg>{" "}Add note</button>
            </div>
          </div>
          <div className="ux-grid2">
            <div className="ux-card ux-homecard">
              <span className="photo ph1"></span>
              <div className="tx">
                <span className="ux-tag teal">Primary home</span>
                <b>123 Happiness Street</b>
                <span className="ux-muted">Safety Harbor, FL 34695</span>
                <div className="row">
                  <span>
                    <small>Health score</small>
                    <b className="num">82{" "}
                      <span className="ux-tag green">Good</span>
                    </b>
                  </span>
                  <span>
                    <small>Est. value</small>
                    <b className="num">$675,000</b>
                    <em>↑ 5.2%</em>
                  </span>
                </div>
              </div>
            </div>
            <div className="ux-card ux-homecard">
              <span className="photo ph2"></span>
              <div className="tx">
                <span className="ux-tag grey">Vacation home</span>
                <b>456 Pine Ridge Drive</b>
                <span className="ux-muted">Dunedin, FL 34698</span>
                <div className="row">
                  <span>
                    <small>Health score</small>
                    <b className="num">76{" "}
                      <span className="ux-tag green">Good</span>
                    </b>
                  </span>
                  <span>
                    <small>Est. value</small>
                    <b className="num">$520,000</b>
                    <em>↑ 3.1%</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ux-sech">
            <h2>Recent activity</h2>
          </div>
          <div className="ux-card ux-tasks">
            <div className="ux-task">
              <span className="ic">
                <svg width="20" height="20">
                  <use href="#i-doc" />
                </svg>
              </span>
              <div className="tx">
                <b>Uploaded an HVAC service receipt</b>
                <span>123 Happiness Street</span>
              </div>
              <span className="ux-muted num">Sep 2, 2026</span>
            </div>
            <div className="ux-task">
              <span className="ic">
                <svg width="20" height="20">
                  <use href="#i-roof" />
                </svg>
              </span>
              <div className="tx">
                <b>Scheduled a roof inspection</b>
                <span>456 Pine Ridge Drive</span>
              </div>
              <span className="ux-muted num">Aug 28, 2026</span>
            </div>
            <div className="ux-task">
              <span className="ic">
                <svg width="20" height="20">
                  <use href="#i-pencil" />
                </svg>
              </span>
              <div className="tx">
                <b>Updated property details</b>
                <span>123 Happiness Street</span>
              </div>
              <span className="ux-muted num">Aug 15, 2026</span>
            </div>
          </div>
          <div className="ux-note">
            <svg width="17" height="17">
              <use href="#i-lock" />
            </svg>
            {" "}
            <span>You see what this client chose to share. They can change or end your access at any time.</span>
          </div>
        </div>
      </div>
    </AgentShell>
  );
}
