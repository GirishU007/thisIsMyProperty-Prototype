// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "Dashboard" };

export default function Page() {
  return (
    <AppShell active="dash" title="123 Happiness Street" sub="Safety Harbor, FL 34695 · Primary home">
      <div className="dx">
        {/* property context: one slim strip instead of a full card */}
        <div className="dx-prop">
          <Link className="photo ph1 dx-thumb" href="/app/property" aria-label="Photo of 123 Happiness Street"></Link>
          <div className="dx-prop-tx">
            <b>Single Family Home</b>
            <span className="num">Built 2015 · 2,842 sq ft · 4 bed · 3.5 bath · 0.23 acres</span>
          </div>
          <Link className="dx-prop-link" href="/app/property">View Property Details →</Link>
          <Link className="btn btn-ghost hdedit" href="/app/property">
            <svg width="13" height="13">
              <use href="#i-pencil" />
            </svg>{" "}Edit</Link>
        </div>
        {/* 1. the score and what to do about it */}
        <div className="dx-hero">
          <div className="tile dx-score">
            <div className="tile-h">
              <span className="eyebrow">Property Health Score</span>
              <svg className="i" width="13" height="13">
                <use href="#i-info" />
              </svg>
            </div>
            <div className="dx-score-in">
              <div className="hdring">
                <svg viewBox="0 0 120 120" role="img" aria-label="Property health score 82 out of 100">
                  <defs>
                    <linearGradient id="dxgrad" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0" stopColor="#2E8B57" />
                      <stop offset="1" stopColor="#19A7A5" />
                    </linearGradient>
                  </defs>
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#E7EFF4" strokeWidth="11" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="url(#dxgrad)" strokeWidth="11" strokeLinecap="round" strokeDasharray="257.6 314.2" />
                </svg>
                <div className="v">
                  <b className="num">82</b>
                </div>
              </div>
              <div className="dx-score-tx">
                <div className="dx-grade">
                  <b>Good</b>
                  <span>Trending up ↑</span>
                </div>
                <p>Your home is in good shape. One system needs attention:{" "}
                  <Link href="/app/health">Appliances is rated Fair</Link>.</p>
                <div className="dx-upd">Updated May 20, 2026</div>
              </div>
            </div>
            <Link className="link" href="/app/health/report">View Score Details →</Link>
          </div>
          <div className="tile dx-next">
            <div className="tile-h">
              <span className="eyebrow">What to do next</span>
              <Link className="sm" href="/app/todo" style={{ marginLeft: "auto", color: "var(--teal-deep)", fontWeight: "700" }}>View All</Link>
            </div>
            <div className="dx-act is-over">
              <span className="dx-ic">
                <svg width="18" height="18">
                  <use href="#i-gear" />
                </svg>
              </span>
              <div className="tx">
                <b>HVAC Service</b>
                <span className="s">Was due Aug 15, 2026</span>
              </div>
              <span className="dx-tag over">28 days overdue</span>
              <button className="btn btn-primary dx-go" data-act="schedule" data-job="HVAC service">Schedule</button>
            </div>
            <div className="dx-act">
              <span className="dx-ic">
                <svg width="18" height="18">
                  <use href="#i-roof" />
                </svg>
              </span>
              <div className="tx">
                <b>Roof Inspection</b>
                <span className="s">Due Oct 1, 2026</span>
              </div>
              <span className="dx-tag soon">Due in 19 days</span>
              <button className="btn btn-ghost dx-go" data-act="schedule" data-job="Roof inspection">Schedule</button>
            </div>
            <div className="dx-act">
              <span className="dx-ic">
                <svg width="18" height="18">
                  <use href="#i-appliance" />
                </svg>
              </span>
              <div className="tx">
                <b>Appliances</b>
                <span className="s">Rated Fair · plan for replacement</span>
              </div>
              <span className="dx-tag soon">Needs review</span>
              <Link className="btn btn-ghost dx-go" href="/app/health">Review</Link>
            </div>
            <div className="dx-later">
              <svg width="14" height="14">
                <use href="#i-calendar" />
              </svg>{" "}Later: Air Filter Replacement, due Dec 20, 2026</div>
          </div>
        </div>
        {/* 2. quick actions, within reach */}
        <div className="dx-qa">
          <a className="dx-qbtn" data-act="add-doc">
            <svg width="17" height="17">
              <use href="#i-dollar" />
            </svg>{" "}Add Expense</a>
          <a className="dx-qbtn" data-act="add-doc">
            <svg width="17" height="17">
              <use href="#i-wrench" />
            </svg>{" "}Add Maintenance / Repair</a>
          <a className="dx-qbtn" data-act="add-doc">
            <svg width="17" height="17">
              <use href="#i-tools" />
            </svg>{" "}Add Improvement</a>
          <a className="dx-qbtn" data-act="add-doc">
            <svg width="17" height="17">
              <use href="#i-shield" />
            </svg>{" "}Add Warranty</a>
          <Link className="dx-qbtn" href="/app/costs">
            <svg width="17" height="17">
              <use href="#i-tag" />
            </svg>{" "}Request Price Estimate</Link>
          <Link className="dx-qbtn" href="/app/pros">
            <svg width="17" height="17">
              <use href="#i-users" />
            </svg>{" "}Find a Pro</Link>
        </div>
        {/* 3. systems */}
        <div className="tile dx-sys">
          <div className="tile-h">
            <span className="eyebrow">System Health Overview</span>
            <Link className="sm" href="/app/health" style={{ marginLeft: "auto", color: "var(--teal-deep)", fontWeight: "700" }}>View All Systems</Link>
          </div>
          <div className="hdsys">
            <div className="sysx">
              <div className="ic">
                <svg width="21" height="21">
                  <use href="#i-roof" />
                </svg>
              </div>
              <div className="bdg ok">
                <svg width="11" height="11">
                  <use href="#i-check" />
                </svg>
              </div>
              <div className="nm">Roof</div>
              <div className="st good">Good</div>
            </div>
            <div className="sysx">
              <div className="ic">
                <svg width="21" height="21">
                  <use href="#i-snow" />
                </svg>
              </div>
              <div className="bdg ok">
                <svg width="11" height="11">
                  <use href="#i-check" />
                </svg>
              </div>
              <div className="nm">HVAC</div>
              <div className="st good">Good</div>
            </div>
            <div className="sysx">
              <div className="ic">
                <svg width="21" height="21">
                  <use href="#i-pipe" />
                </svg>
              </div>
              <div className="bdg ok">
                <svg width="11" height="11">
                  <use href="#i-check" />
                </svg>
              </div>
              <div className="nm">Plumbing</div>
              <div className="st good">Good</div>
            </div>
            <div className="sysx">
              <div className="ic">
                <svg width="21" height="21">
                  <use href="#i-bolt" />
                </svg>
              </div>
              <div className="bdg ok">
                <svg width="11" height="11">
                  <use href="#i-check" />
                </svg>
              </div>
              <div className="nm">Electrical</div>
              <div className="st good">Good</div>
            </div>
            <Link className="sysx is-fair" href="/app/health">
              <div className="ic">
                <svg width="21" height="21">
                  <use href="#i-appliance" />
                </svg>
              </div>
              <div className="bdg warn">
                <svg width="11" height="11">
                  <use href="#i-warn" />
                </svg>
              </div>
              <div className="nm">Appliances</div>
              <div className="st fair">Fair</div>
            </Link>
            <div className="sysx">
              <div className="ic">
                <svg width="21" height="21">
                  <use href="#i-exterior" />
                </svg>
              </div>
              <div className="bdg ok">
                <svg width="11" height="11">
                  <use href="#i-check" />
                </svg>
              </div>
              <div className="nm">Exterior</div>
              <div className="st good">Good</div>
            </div>
            <div className="sysx">
              <div className="ic">
                <svg width="21" height="21">
                  <use href="#i-interior" />
                </svg>
              </div>
              <div className="bdg ok">
                <svg width="11" height="11">
                  <use href="#i-check" />
                </svg>
              </div>
              <div className="nm">Interior</div>
              <div className="st good">Good</div>
            </div>
          </div>
        </div>
        {/* 4. money */}
        <div className="dx-two">
          <div className="tile">
            <div className="tile-h">
              <span className="eyebrow">Property Value Estimate</span>
              <svg className="i" width="13" height="13">
                <use href="#i-info" />
              </svg>
            </div>
            <div className="dx-val">
              <div className="hdval">
                <div className="tiny muted">Estimated Value</div>
                <b className="num">$675,000</b>
                <div className="up num">↑ 5.2%{" "}
                  <em>vs. last year</em>
                </div>
                <div className="tiny muted" style={{ marginTop: "10px" }}>Estimated Range</div>
                <div className="sm num" style={{ color: "var(--navy)", fontWeight: "700" }}>$640,000 – $710,000</div>
              </div>
              <svg className="spark" viewBox="0 0 260 62" role="img" aria-label="Estimated value trending up over the last twelve months">
                <path d="M6 52 L27 47 L48 49 L69 41 L90 38 L111 40 L132 33 L153 35 L174 27 L195 24 L216 18 L237 8" fill="none" stroke="#19A7A5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 52 L27 47 L48 49 L69 41 L90 38 L111 40 L132 33 L153 35 L174 27 L195 24 L216 18 L237 8 L237 60 L6 60 Z" fill="#19A7A5" opacity=".09" />
                <circle cx="6" cy="52" r="2.6" fill="#0F8280" />
                <circle cx="69" cy="41" r="2.6" fill="#0F8280" />
                <circle cx="132" cy="33" r="2.6" fill="#0F8280" />
                <circle cx="195" cy="24" r="2.6" fill="#0F8280" />
                <circle cx="237" cy="8" r="3" fill="#0F8280" />
              </svg>
            </div>
            <div className="tiny muted" style={{ marginTop: "8px" }}>Last Updated: May 15, 2026</div>
            <a className="link" data-toast="Value details: not built in this prototype yet.">View Value Details →</a>
          </div>
          <div className="tile">
            <div className="tile-h">
              <span className="eyebrow">Property Summary</span>
              <svg className="i" width="13" height="13">
                <use href="#i-info" />
              </svg>
            </div>
            <div className="hdsum">
              <span>Total Improvements</span>
              <b className="num">$191,673</b>
            </div>
            <div className="hdsum">
              <span>Total Maintenance / Repairs</span>
              <b className="num">$38,720</b>
            </div>
            <div className="hdsum">
              <span>Total Expenses</span>
              <b className="num">$62,310</b>
            </div>
            <div className="hdsum">
              <span>Documents in Vault</span>
              <b className="num">128</b>
            </div>
            <div className="hdsum">
              <span>Warranties Active</span>
              <b className="num">7</b>
            </div>
            <Link className="link" href="/app/vault">View Full Property Summary →</Link>
          </div>
        </div>
        {/* 5. records and reference */}
        <div className="dx-three">
          <div className="tile">
            <div className="tile-h">
              <span className="eyebrow">Recent Activity</span>
              <Link className="sm" href="/app/vault" style={{ marginLeft: "auto", color: "var(--teal-deep)", fontWeight: "700" }}>View All</Link>
            </div>
            <div className="hdrow">
              <svg className="ic" width="17" height="17">
                <use href="#i-doc" />
              </svg>
              <div className="tx">
                <b>Receipt uploaded</b>
                <span className="s">123 Happiness St</span>
              </div>
              <span className="dt q">May 21, 2026</span>
            </div>
            <div className="hdrow">
              <svg className="ic" width="17" height="17">
                <use href="#i-wrench" />
              </svg>
              <div className="tx">
                <b>Plumbing service added</b>
                <span className="s">123 Happiness St</span>
              </div>
              <span className="dt q">May 12, 2026</span>
            </div>
            <div className="hdrow">
              <svg className="ic" width="17" height="17">
                <use href="#i-gear" />
              </svg>
              <div className="tx">
                <b>HVAC service added</b>
                <span className="s">123 Happiness St</span>
              </div>
              <span className="dt q">May 10, 2026</span>
            </div>
            <div className="hdrow">
              <svg className="ic" width="17" height="17">
                <use href="#i-shield-check" />
              </svg>
              <div className="tx">
                <b>New warranty added</b>
                <span className="s">123 Happiness St</span>
              </div>
              <span className="dt q">May 1, 2026</span>
            </div>
          </div>
          <div className="tile">
            <div className="tile-h">
              <span className="eyebrow">Top Active Warranties</span>
              <Link className="sm" href="/app/vault" style={{ marginLeft: "auto", color: "var(--teal-deep)", fontWeight: "700" }}>View All</Link>
            </div>
            <div className="hdrow">
              <svg className="ic" width="17" height="17">
                <use href="#i-snow" />
              </svg>
              <div className="tx">
                <b>HVAC System</b>
                <span className="s">Goodman GSXC18</span>
                <span className="s">Expires: Mar 20, 2036</span>
              </div>
              <span className="reg">Registered</span>
            </div>
            <div className="hdrow">
              <svg className="ic" width="17" height="17">
                <use href="#i-roof" />
              </svg>
              <div className="tx">
                <b>Roof</b>
                <span className="s">GAF Timberline HDZ</span>
                <span className="s">Expires: Jun 15, 2033</span>
              </div>
              <span className="reg">Registered</span>
            </div>
            <div className="hdrow">
              <svg className="ic" width="17" height="17">
                <use href="#i-water" />
              </svg>
              <div className="tx">
                <b>Water Heater</b>
                <span className="s">Rheem ProTerra 50</span>
                <span className="s">Expires: Jul 10, 2030</span>
              </div>
              <span className="reg">Registered</span>
            </div>
          </div>
          <div className="tile">
            <div className="tile-h">
              <span className="eyebrow">Market & Cost Trends</span>
              <span className="sm static-link" style={{ marginLeft: "auto", color: "var(--teal-deep)", fontWeight: "700" }}>View Trends</span>
            </div>
            <p className="dx-trend">Roof replacement costs in your area are up{" "}
              <b style={{ color: "var(--navy)" }}>6.2%</b>{" "}compared to last year.</p>
            <svg className="spark" viewBox="0 0 260 56" role="img" aria-label="Roof replacement cost index trending up over twelve months">
              <path d="M8 40 L31 38 L54 41 L77 36 L100 38 L123 31 L146 33 L169 26 L192 24 L215 17 L238 8" fill="none" stroke="#19A7A5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="8" cy="40" r="2.6" fill="#0F8280" />
              <circle cx="54" cy="41" r="2.6" fill="#0F8280" />
              <circle cx="100" cy="38" r="2.6" fill="#0F8280" />
              <circle cx="146" cy="33" r="2.6" fill="#0F8280" />
              <circle cx="192" cy="24" r="2.6" fill="#0F8280" />
              <circle cx="238" cy="8" r="3" fill="#0F8280" />
            </svg>
          </div>
        </div>
        <div className="encstrip">
          <svg width="19" height="19">
            <use href="#i-shield-check" />
          </svg>
          <div>
            <b>Your data is encrypted and secure.</b>
            <span>Bank-level security to protect what matters most.</span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
