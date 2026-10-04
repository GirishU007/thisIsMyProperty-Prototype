// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "HVAC price estimate" };

export default function Page() {
  return (
    <AppShell active="costs" title="HVAC price estimate" sub="123 Happiness Street · based on 47 verified invoices from similar homes in the Tampa Bay area.">
      <div className="ux-docbar">
        <Link className="ux-link" href="/app/costs">← Back to Costs & estimates</Link>
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
      <div className="ux-plans" style={{ marginTop: "0" }}>
        <div className="ux-card ux-plan">
          <h3>Basic</h3>
          <p className="ux-for">Reliable and functional.</p>
          <div className="ux-price num sm">$8,200 – $10,400</div>
          <ul>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}Standard efficiency, 14 to 16 SEER2</li>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}Single-stage system</li>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}1 to 5 year parts warranty</li>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}Removal and disposal included</li>
          </ul>
        </div>
        <div className="ux-card ux-plan ux-pop">
          <span className="ux-tag teal ux-badge" style={{ background: "var(--teal-deep)", color: "#fff" }}>Most popular</span>
          <h3>Mid-range</h3>
          <p className="ux-for">The best balance of comfort, efficiency and price.</p>
          <div className="ux-price num sm">$10,500 – $13,800</div>
          <ul>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}Higher efficiency, 16 to 18 SEER2</li>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}Two-stage or variable speed</li>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}5 to 10 year parts warranty</li>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}Removal and disposal included</li>
          </ul>
        </div>
        <div className="ux-card ux-plan">
          <h3>Higher-end</h3>
          <p className="ux-for">Quietest, with the lowest running cost.</p>
          <div className="ux-price num sm">$14,500 – $19,000+</div>
          <ul>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}High efficiency, 18 to 22+ SEER2</li>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}Variable speed, smart controls</li>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}10+ year parts warranty</li>
            <li>
              <svg width="17" height="17">
                <use href="#i-check" />
              </svg>{" "}Removal and disposal included</li>
          </ul>
        </div>
      </div>
      <div className="ux-costgrid">
        <div className="ux-card">
          <div className="ux-eyebrow" style={{ color: "var(--slate)" }}>What homeowners actually paid</div>
          <div className="ux-tablewrap">
            <table className="ux-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Home size</th>
                  <th>System</th>
                  <th className="r">Total cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aug 2026</td>
                  <td className="num">2,400 sq ft</td>
                  <td>3.5 ton</td>
                  <td className="num r">$10,850</td>
                </tr>
                <tr>
                  <td>Jul 2026</td>
                  <td className="num">2,850 sq ft</td>
                  <td>4 ton</td>
                  <td className="num r">$11,975</td>
                </tr>
                <tr>
                  <td>Jun 2026</td>
                  <td className="num">3,000 sq ft</td>
                  <td>4 ton</td>
                  <td className="num r">$12,400</td>
                </tr>
                <tr>
                  <td>Apr 2026</td>
                  <td className="num">2,700 sq ft</td>
                  <td>3.5 ton</td>
                  <td className="num r">$11,200</td>
                </tr>
                <tr>
                  <td>Mar 2026</td>
                  <td className="num">3,200 sq ft</td>
                  <td>5 ton</td>
                  <td className="num r">$13,600</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>
                    <b>Median, Tampa Bay area</b>
                  </td>
                  <td className="num r">
                    <b>$11,975</b>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="ux-card">
          <div className="ux-eyebrow" style={{ color: "var(--slate)" }}>Compare a quote you have</div>
          <div className="ux-quote">
            <span>Your quote</span>
            <b className="num">$15,900</b>
          </div>
          <div className="ux-range">
            <div className="track over">
              <span className="dot" data-typ="Your quote" style={{ left: "92%" }}></span>
            </div>
            <div className="ends">
              <span>$10,500</span>
              <span>Fair range</span>
              <span>$13,800</span>
            </div>
          </div>
          <p style={{ marginTop: "14px" }}>
            <span className="ux-tag red">$2,100 above the fair range</span>
          </p>
          <p className="ux-muted" style={{ fontSize: "14.5px", marginTop: "8px" }}>Worth getting more quotes before you decide.</p>
          <button className="ux-btn pri block" style={{ marginTop: "14px" }} data-act="quotes">Request quotes from 3 pros</button>
          <Link className="ux-link ux-skip" href="/app/pros">Browse all pros</Link>
        </div>
      </div>
      <div className="ux-note">
        <svg width="17" height="17">
          <use href="#i-info" />
        </svg>
        {" "}
        <span>Estimates come from documented homeowner invoices for comparable jobs. Actual prices vary with home conditions, system size, brand and permits. This is pricing information, not a contractor quote, and we are not paid by the contractors in the data.</span>
      </div>
    </AppShell>
  );
}
