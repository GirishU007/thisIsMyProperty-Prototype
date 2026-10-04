// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "Home Health Score report" };

export default function Page() {
  return (
    <AppShell active="health" title="Home Health Score report" sub="123 Happiness Street · Report date May 20, 2026">
      <div className="ux-docbar">
        <Link className="ux-link" href="/app/health?tab=reports">← Back to reports</Link>
        <span className="r">
          <button className="ux-btn sec sm" data-act="print">
            <svg width="16" height="16">
              <use href="#i-doc" />
            </svg>{" "}Print</button>
          <button className="ux-btn sec sm" data-toast="Downloads the certified PDF.">
            <svg width="16" height="16">
              <use href="#i-download" />
            </svg>{" "}Download PDF</button>
        </span>
      </div>
      <div className="ux-card ux-dochead">
        <div className="hdring">
          <svg viewBox="0 0 120 120" role="img" aria-label="Property health score 82 out of 100">
            <defs>
              <linearGradient id="rpgrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#2E8B57" />
                <stop offset="1" stopColor="#19A7A5" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="50" fill="none" stroke="#E7EFF4" strokeWidth="11" />
            <circle cx="60" cy="60" r="50" fill="none" stroke="url(#rpgrad)" strokeWidth="11" strokeLinecap="round" strokeDasharray="257.6 314.2" />
          </svg>
          <div className="v">
            <b className="num">82</b>
          </div>
        </div>
        <div className="tx">
          <div className="ux-eyebrow">Overall assessment</div>
          <h2>Good condition</h2>
          <p>Your home is in good overall condition with no critical issues. Regular maintenance and two planned replacements will keep it that way.</p>
          <div className="ux-scale">
            <span>
              <i style={{ background: "#2E8B57" }}></i>90–100 Excellent</span>
            <span className="on">
              <i style={{ background: "#7DBE6A" }}></i>75–89 Good</span>
            <span>
              <i style={{ background: "#E08A1E" }}></i>60–74 Fair</span>
            <span>
              <i style={{ background: "#D97A3A" }}></i>40–59 Needs attention</span>
            <span>
              <i style={{ background: "#D14343" }}></i>Below 40 Major repairs</span>
          </div>
        </div>
      </div>
      <div className="ux-sech">
        <h2>System by system</h2>
      </div>
      <div className="ux-card ux-sysblk">
        <div className="h">
          <span className="ic">
            <svg width="21" height="21">
              <use href="#i-snow" />
            </svg>
          </span>
          <h3>HVAC</h3>
          <span className="ux-tag green">Good</span>
          <b className="sc num">88<small>/100</small>
          </b>
        </div>
        <div className="ux-facts three">
          <div>
            <span>Age</span>
            <b>6 years</b>
          </div>
          <div>
            <span>Type</span>
            <b>Central electric, 2 units</b>
          </div>
          <div>
            <span>Typical life</span>
            <b>15 to 20 years</b>
          </div>
        </div>
        <div className="cols">
          <div>
            <h4>What we found</h4>
            <ul>
              <li>System operating properly</li>
              <li>Regular maintenance on record</li>
              <li>No major issues noted</li>
            </ul>
          </div>
          <div>
            <h4>What we recommend</h4>
            <ul>
              <li>Continue servicing twice a year</li>
              <li>Change filters regularly</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ux-card ux-sysblk">
        <div className="h">
          <span className="ic">
            <svg width="21" height="21">
              <use href="#i-roof" />
            </svg>
          </span>
          <h3>Roof</h3>
          <span className="ux-tag green">Good</span>
          <b className="sc num">85<small>/100</small>
          </b>
        </div>
        <div className="ux-facts three">
          <div>
            <span>Age</span>
            <b>3 years</b>
          </div>
          <div>
            <span>Material</span>
            <b>Architectural shingles</b>
          </div>
          <div>
            <span>Typical life</span>
            <b>25 to 30 years</b>
          </div>
        </div>
        <div className="cols">
          <div>
            <h4>What we found</h4>
            <ul>
              <li>No active leaks observed</li>
              <li>Normal wear and granule loss</li>
              <li>Flashing in good condition</li>
            </ul>
          </div>
          <div>
            <h4>What we recommend</h4>
            <ul>
              <li>Check for wind damage after major storms</li>
              <li>Inspect once a year</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ux-card ux-sysblk">
        <div className="h">
          <span className="ic">
            <svg width="21" height="21">
              <use href="#i-bolt" />
            </svg>
          </span>
          <h3>Electrical</h3>
          <span className="ux-tag green">Good</span>
          <b className="sc num">85<small>/100</small>
          </b>
        </div>
        <div className="ux-facts three">
          <div>
            <span>Age</span>
            <b>11 years</b>
          </div>
          <div>
            <span>Service</span>
            <b>200 amp</b>
          </div>
          <div>
            <span>Typical life</span>
            <b>40 to 50 years</b>
          </div>
        </div>
        <div className="cols">
          <div>
            <h4>What we found</h4>
            <ul>
              <li>Panel and wiring in good condition</li>
              <li>GFCI and AFCI protection present</li>
              <li>No overloaded circuits observed</li>
            </ul>
          </div>
          <div>
            <h4>What we recommend</h4>
            <ul>
              <li>Continue routine inspection</li>
              <li>Consider whole-home surge protection</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ux-card ux-sysblk">
        <div className="h">
          <span className="ic">
            <svg width="21" height="21">
              <use href="#i-pipe" />
            </svg>
          </span>
          <h3>Plumbing</h3>
          <span className="ux-tag green">Good</span>
          <b className="sc num">80<small>/100</small>
          </b>
        </div>
        <div className="ux-facts three">
          <div>
            <span>Pipes</span>
            <b>PEX and copper</b>
          </div>
          <div>
            <span>Water heater</span>
            <b>10.6 years old</b>
          </div>
          <div>
            <span>Typical life</span>
            <b>40 to 50 years, pipes</b>
          </div>
        </div>
        <div className="cols">
          <div>
            <h4>What we found</h4>
            <ul>
              <li>No active leaks</li>
              <li>Water heater working properly</li>
              <li>Minor corrosion on exterior fittings</li>
            </ul>
          </div>
          <div>
            <h4>What we recommend</h4>
            <ul>
              <li>Monitor fittings and valves</li>
              <li>Plan to replace the water heater within 1 to 2 years</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ux-card ux-sysblk">
        <div className="h">
          <span className="ic">
            <svg width="21" height="21">
              <use href="#i-interior" />
            </svg>
          </span>
          <h3>Interior</h3>
          <span className="ux-tag green">Good</span>
          <b className="sc num">80<small>/100</small>
          </b>
        </div>
        <div className="ux-facts three">
          <div>
            <span>Flooring</span>
            <b>Luxury vinyl plank, 2021</b>
          </div>
          <div>
            <span>Kitchen</span>
            <b>Remodeled 2024</b>
          </div>
          <div>
            <span>Primary bath</span>
            <b>Remodeled 2023</b>
          </div>
        </div>
        <div className="cols">
          <div>
            <h4>What we found</h4>
            <ul>
              <li>Finishes in good condition</li>
              <li>Doors and windows operate properly</li>
            </ul>
          </div>
          <div>
            <h4>What we recommend</h4>
            <ul>
              <li>Continue routine upkeep</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ux-card ux-sysblk">
        <div className="h">
          <span className="ic">
            <svg width="21" height="21">
              <use href="#i-exterior" />
            </svg>
          </span>
          <h3>Exterior</h3>
          <span className="ux-tag amber">Fair</span>
          <b className="sc num">75<small>/100</small>
          </b>
        </div>
        <div className="ux-facts three">
          <div>
            <span>Paint</span>
            <b>Whole house, 2025</b>
          </div>
          <div>
            <span>Windows</span>
            <b>Impact rated, 2024</b>
          </div>
          <div>
            <span>Structure</span>
            <b>Slab on grade</b>
          </div>
        </div>
        <div className="cols">
          <div>
            <h4>What we found</h4>
            <ul>
              <li>No visible cracks or settlement</li>
              <li>Stucco in good condition</li>
              <li>Some caulking due for renewal</li>
            </ul>
          </div>
          <div>
            <h4>What we recommend</h4>
            <ul>
              <li>Renew caulking at windows and doors</li>
              <li>Keep drainage clear around the home</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ux-card ux-sysblk">
        <div className="h">
          <span className="ic">
            <svg width="21" height="21">
              <use href="#i-appliance" />
            </svg>
          </span>
          <h3>Appliances</h3>
          <span className="ux-tag amber">Fair</span>
          <b className="sc num">65<small>/100</small>
          </b>
        </div>
        <div className="ux-facts three">
          <div>
            <span>Tracked</span>
            <b>6 appliances</b>
          </div>
          <div>
            <span>Age</span>
            <b>2 to 11 years</b>
          </div>
          <div>
            <span>Typical life</span>
            <b>10 to 15 years</b>
          </div>
        </div>
        <div className="cols">
          <div>
            <h4>What we found</h4>
            <ul>
              <li>All major appliances working</li>
              <li>Water heater and dishwasher near end of typical life</li>
              <li>Refrigerator ice maker slightly slow</li>
            </ul>
          </div>
          <div>
            <h4>What we recommend</h4>
            <ul>
              <li>Price a water heater replacement now</li>
              <li>Plan for a dishwasher within 1 to 2 years</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ux-grid2">
        <div className="ux-card">
          <div className="ux-eyebrow" style={{ color: "var(--slate)" }}>Next steps</div>
          <ol className="ux-nextsteps">
            <li>Schedule the overdue HVAC service.</li>
            <li>Book the annual roof inspection.</li>
            <li>Get a price for a new water heater.</li>
            <li>Keep adding receipts so the score stays accurate.</li>
          </ol>
          <Link className="ux-btn pri sm" href="/app/todo">Open To do</Link>
        </div>
        <div className="ux-card">
          <div className="ux-eyebrow" style={{ color: "var(--slate)" }}>Important note</div>
          <p style={{ fontSize: "14.5px", marginTop: "8px" }}>This report is based on the records in your Vault and the age of each system. It is not a home inspection and is not a guarantee of condition. For a full evaluation, consult a licensed professional for each system.</p>
        </div>
      </div>
    </AppShell>
  );
}
