/* eslint-disable @next/next/no-img-element */
// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { AgentShell } from "@/components/proto/AgentShell";

export const metadata: Metadata = { title: "Marketing" };

export default function Page() {
  return (
    <AgentShell active="marketing" title="Marketing" sub="Stay in touch with something worth reading.">
      <div className="ux-sech">
        <h2>Start something</h2>
      </div>
      <div className="ux-grid3">
        <a className="ux-card ux-feat link" data-toast="Email campaign builder: not built in this prototype yet.">
          <span className="ic">
            <svg width="22" height="22">
              <use href="#i-mail" />
            </svg>
          </span>
          <h3>Email campaign</h3>
          <p>Stay in touch with your whole database.</p>
        </a>
        <a className="ux-card ux-feat link" data-toast="Automated client touches: not built in this prototype yet.">
          <span className="ic">
            <svg width="22" height="22">
              <use href="#i-clock" />
            </svg>
          </span>
          <h3>Automatic client touches</h3>
          <p>Reminders tied to each client’s home.</p>
        </a>
        <a className="ux-card ux-feat link" data-toast="Social post builder: not built in this prototype yet.">
          <span className="ic">
            <svg width="22" height="22">
              <use href="#i-share" />
            </svg>
          </span>
          <h3>Social post</h3>
          <p>Branded posts and reels.</p>
        </a>
        <a className="ux-card ux-feat link" data-toast="Listing materials: not built in this prototype yet.">
          <span className="ic">
            <svg width="22" height="22">
              <use href="#i-home" />
            </svg>
          </span>
          <h3>Listing materials</h3>
          <p>Flyers, postcards and property pages.</p>
        </a>
        <a className="ux-card ux-feat link" data-toast="Buyer resources: not built in this prototype yet.">
          <span className="ic">
            <svg width="22" height="22">
              <use href="#i-book" />
            </svg>
          </span>
          <h3>Buyer resources</h3>
          <p>Guides, checklists and market insights.</p>
        </a>
        <a className="ux-card ux-feat link" data-toast="Brand assets: not built in this prototype yet.">
          <span className="ic">
            <svg width="22" height="22">
              <use href="#i-tag" />
            </svg>
          </span>
          <h3>Brand assets</h3>
          <p>Logos, cards and presentations.</p>
        </a>
      </div>
      <div className="ux-sech">
        <h2>Last 30 days</h2>
      </div>
      <div className="ux-kpis">
        <div className="ux-card ux-kpi">
          <b className="num">5,620</b>
          <span>Emails sent{" "}
            <em>↑ 12%</em>
          </span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">48%</b>
          <span>Average open rate{" "}
            <em>↑ 6%</em>
          </span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">9%</b>
          <span>Click-through rate{" "}
            <em>↑ 3%</em>
          </span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">2,450</b>
          <span>Social reach{" "}
            <em>↑ 25%</em>
          </span>
        </div>
      </div>
      <div className="ux-costgrid">
        <div>
          <div className="ux-sech" style={{ marginTop: "0" }}>
            <h2>Recent campaigns</h2>
          </div>
          <div className="ux-card ux-tasks" style={{ marginTop: "10px" }}>
            <div className="ux-task">
              <span className="ic">
                <svg width="20" height="20">
                  <use href="#i-mail" />
                </svg>
              </span>
              <div className="tx">
                <b>August market update</b>
                <span>Aug 28, 2026</span>
              </div>
              <span className="ux-tag green">62% opened</span>
            </div>
            <div className="ux-task">
              <span className="ic">
                <svg width="20" height="20">
                  <use href="#i-mail" />
                </svg>
              </span>
              <div className="tx">
                <b>Home maintenance fall reminders</b>
                <span>Aug 15, 2026</span>
              </div>
              <span className="ux-tag green">48% opened</span>
            </div>
            <div className="ux-task">
              <span className="ic">
                <svg width="20" height="20">
                  <use href="#i-home" />
                </svg>
              </span>
              <div className="tx">
                <b>Just listed: Odessa</b>
                <span>Aug 10, 2026</span>
              </div>
              <span className="ux-tag grey">1,248 recipients</span>
            </div>
            <div className="ux-task">
              <span className="ic">
                <svg width="20" height="20">
                  <use href="#i-mail" />
                </svg>
              </span>
              <div className="tx">
                <b>Summer thank you</b>
                <span>Jul 28, 2026</span>
              </div>
              <span className="ux-tag green">56% opened</span>
            </div>
          </div>
        </div>
        <div>
          <div className="ux-sech" style={{ marginTop: "0" }}>
            <h2>Templates</h2>
          </div>
          <div className="ux-card" style={{ marginTop: "10px" }}>
            <div className="ux-tpls">
              <img src="/images/timp/agent-marketing-marketing-template.jpg" alt="Marketing template" />
              <img src="/images/timp/agent-marketing-marketing-template-2.jpg" alt="Marketing template" />
              <img src="/images/timp/agent-marketing-marketing-template-3.jpg" alt="Marketing template" />
              <img src="/images/timp/agent-marketing-marketing-template-4.jpg" alt="Marketing template" />
            </div>
            <a className="ux-link ux-skip" data-toast="Template library: not built in this prototype yet.">See all templates</a>
          </div>
        </div>
      </div>
      <div className="ux-note">
        <svg width="17" height="17">
          <use href="#i-bulb" />
        </svg>
        {" "}
        <span>Use a client’s upcoming maintenance or a project milestone as your reason to reach out. Alerts lists them.</span>
      </div>
    </AgentShell>
  );
}
