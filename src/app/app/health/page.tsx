// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "Home health" };

export default function Page() {
  return (
    <AppShell active="health" title="Home health" sub="How each system is doing, and why.">
      <div className="ux-tabs" id="health-tabs">
        <button className="is-on" data-tab="systems">Systems</button>
        <button data-tab="reports">Reports</button>
      </div>
      <div id="health-systems">
        <div className="ux-healthtop">
          <div className="ux-card" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className="hdring" style={{ width: "128px", height: "128px", margin: "0", flexShrink: "0" }}>
              <svg viewBox="0 0 120 120" role="img" aria-label="Property health score 82 out of 100">
                <defs>
                  <linearGradient id="hlgrad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stopColor="#2E8B57" />
                    <stop offset="1" stopColor="#19A7A5" />
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r="50" fill="none" stroke="#E7EFF4" strokeWidth="11" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="url(#hlgrad)" strokeWidth="11" strokeLinecap="round" strokeDasharray="257.6 314.2" />
              </svg>
              <div className="v">
                <b className="num">82</b>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "24px", fontWeight: "700", color: "var(--navy)" }}>Good</div>
              <p className="ux-muted" style={{ fontSize: "14.5px" }}>Up 3 points since January. Updated May 20, 2026.</p>
              <Link className="ux-link" href="/app/health/report">Open the full report →</Link>
            </div>
          </div>
          <div className="ux-card">
            <div className="ux-eyebrow" style={{ color: "var(--slate)" }}>How the score is worked out</div>
            <ul className="ux-how" style={{ marginTop: "8px" }}>
              <li>
                <svg width="17" height="17">
                  <use href="#i-calendar" />
                </svg>{" "}Age of each system against its typical life</li>
              <li>
                <svg width="17" height="17">
                  <use href="#i-wrench" />
                </svg>{" "}Maintenance you have recorded, and how recent it is</li>
              <li>
                <svg width="17" height="17">
                  <use href="#i-shield-check" />
                </svg>{" "}Active warranties and open recalls</li>
            </ul>
          </div>
        </div>
        <div className="ux-card ux-tasks" style={{ marginTop: "16px" }}>
          <div className="ux-sysrow">
            <span className="ic">
              <svg width="21" height="21">
                <use href="#i-snow" />
              </svg>
            </span>
            <b>HVAC</b>
            <span className="barx">
              <i style={{ width: "88%" }}></i>
            </span>
            <span className="n">88</span>
            <span className="ux-tag green">Good</span>
            <span></span>
          </div>
          <div className="ux-sysrow">
            <span className="ic">
              <svg width="21" height="21">
                <use href="#i-roof" />
              </svg>
            </span>
            <b>Roof</b>
            <span className="barx">
              <i style={{ width: "85%" }}></i>
            </span>
            <span className="n">85</span>
            <span className="ux-tag green">Good</span>
            <span></span>
          </div>
          <div className="ux-sysrow">
            <span className="ic">
              <svg width="21" height="21">
                <use href="#i-bolt" />
              </svg>
            </span>
            <b>Electrical</b>
            <span className="barx">
              <i style={{ width: "85%" }}></i>
            </span>
            <span className="n">85</span>
            <span className="ux-tag green">Good</span>
            <span></span>
          </div>
          <div className="ux-sysrow">
            <span className="ic">
              <svg width="21" height="21">
                <use href="#i-pipe" />
              </svg>
            </span>
            <b>Plumbing</b>
            <span className="barx">
              <i style={{ width: "80%" }}></i>
            </span>
            <span className="n">80</span>
            <span className="ux-tag green">Good</span>
            <span></span>
          </div>
          <div className="ux-sysrow">
            <span className="ic">
              <svg width="21" height="21">
                <use href="#i-interior" />
              </svg>
            </span>
            <b>Interior</b>
            <span className="barx">
              <i style={{ width: "80%" }}></i>
            </span>
            <span className="n">80</span>
            <span className="ux-tag green">Good</span>
            <span></span>
          </div>
          <div className="ux-sysrow">
            <span className="ic">
              <svg width="21" height="21">
                <use href="#i-exterior" />
              </svg>
            </span>
            <b>Exterior</b>
            <span className="barx">
              <i className="fair" style={{ width: "75%" }}></i>
            </span>
            <span className="n">75</span>
            <span className="ux-tag amber">Fair</span>
            <span></span>
          </div>
          <button className="ux-sysrow" data-act="toggle-appl" aria-expanded="true">
            <span className="ic">
              <svg width="21" height="21">
                <use href="#i-appliance" />
              </svg>
            </span>
            <b>Appliances</b>
            <span className="barx">
              <i className="fair" style={{ width: "65%" }}></i>
            </span>
            <span className="n">65</span>
            <span className="ux-tag amber">Fair</span>
            <span className="chev">
              <svg width="16" height="16">
                <use href="#i-chevd" />
              </svg>
            </span>
          </button>
          <div className="ux-sysdetail" id="appl-detail">
            <div className="it">
              <b>Water heater</b>
              <span>10.6 years old. Typical life is 8 to 12 years.</span>
              <button className="ux-btn sec sm" data-go="/app/costs">See what a new one costs</button>
            </div>
            <div className="it">
              <b>Dishwasher</b>
              <span>11 years old. Typical life is 9 to 13 years.</span>
              <button className="ux-btn sec sm" data-toast="Adds a reminder to your To do list.">Remind me in 6 months</button>
            </div>
          </div>
        </div>
      </div>
      <div id="health-reports" hidden>
        <div className="ux-card ux-tasks">
          <div className="ux-task">
            <span className="ic">
              <svg width="20" height="20">
                <use href="#i-chart" />
              </svg>
            </span>
            <div className="tx">
              <b>Home Health Score report</b>
              <span>The full breakdown of your score, system by system. Updated May 20, 2026.</span>
            </div>
            <Link className="ux-btn pri sm" href="/app/health/report">Open report</Link>
          </div>
          <div className="ux-task">
            <span className="ic">
              <svg width="20" height="20">
                <use href="#i-tools" />
              </svg>
            </span>
            <div className="tx">
              <b>Home improvements</b>
              <span>Every improvement and what it cost: $191,673 across 18 projects.</span>
            </div>
            <Link className="ux-btn sec sm" href="/app/health/improvements">Open report</Link>
          </div>
          <div className="ux-task">
            <span className="ic">
              <svg width="20" height="20">
                <use href="#i-dollar" />
              </svg>
            </span>
            <div className="tx">
              <b>HVAC price estimate</b>
              <span>Fair local prices for a replacement, from 47 verified invoices.</span>
            </div>
            <Link className="ux-btn sec sm" href="/app/costs/estimate">Open report</Link>
          </div>
        </div>
        <div className="ux-note" style={{ marginTop: "16px" }}>
          <svg width="17" height="17">
            <use href="#i-info" />
          </svg>
          {" "}
          <span>Every report can be printed or downloaded as a certified PDF, and shared with a buyer, lender or insurer.</span>
        </div>
      </div>
    </AppShell>
  );
}
