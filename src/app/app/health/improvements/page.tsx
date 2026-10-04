// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "Home improvements report" };

export default function Page() {
  return (
    <AppShell active="health" title="Home improvements" sub="123 Happiness Street · everything you have improved, and what it cost.">
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
          <button className="ux-btn pri sm" data-act="add-doc">
            <svg width="16" height="16">
              <use href="#i-plus" />
            </svg>{" "}Add improvement</button>
        </span>
      </div>
      <div className="ux-kpis">
        <div className="ux-card ux-kpi">
          <b className="num">18</b>
          <span>Improvements</span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">$191,673</b>
          <span>Total spent</span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">2020 – 2026</b>
          <span>Years covered</span>
        </div>
        <div className="ux-card ux-kpi">
          <b className="num">10</b>
          <span>Categories</span>
        </div>
      </div>
      <div className="ux-filter" id="imp-filter">
        <button className="ux-chip is-on" data-f="all">All</button>
        <button className="ux-chip" data-f="HVAC">HVAC</button>
        <button className="ux-chip" data-f="Exterior">Exterior</button>
        <button className="ux-chip" data-f="Pool and outdoor">Pool and outdoor</button>
        <button className="ux-chip" data-f="Appliances">Appliances</button>
        <button className="ux-chip" data-f="Kitchen">Kitchen</button>
        <button className="ux-chip" data-f="Electrical">Electrical</button>
        <button className="ux-chip" data-f="Bathroom">Bathroom</button>
        <button className="ux-chip" data-f="Roofing">Roofing</button>
        <button className="ux-chip" data-f="Interior">Interior</button>
        <button className="ux-chip" data-f="Plumbing">Plumbing</button>
      </div>
      <div className="ux-card ux-tasks ux-tablewrap">
        <table className="ux-table" id="imp-list">
          <thead>
            <tr>
              <th>Year</th>
              <th>Improvement</th>
              <th className="c-cat">Category</th>
              <th className="c-con">Contractor</th>
              <th className="r">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr data-type="HVAC">
              <td className="num">2026</td>
              <td>
                <b>HVAC system replacement (4 ton)</b>
                <span className="s">Goodman GSXC18 · 10-year parts warranty</span>
              </td>
              <td className="c-cat">HVAC</td>
              <td className="c-con">Cool Air Solutions</td>
              <td className="num r">
                <b>$12,800</b>
              </td>
            </tr>
            <tr data-type="Exterior">
              <td className="num">2025</td>
              <td>
                <b>Exterior paint (whole house)</b>
                <span className="s">Sherwin-Williams Duration · 8-year coating warranty</span>
              </td>
              <td className="c-cat">Exterior</td>
              <td className="c-con">Gulf Coast Painting</td>
              <td className="num r">
                <b>$6,200</b>
              </td>
            </tr>
            <tr data-type="Pool and outdoor">
              <td className="num">2025</td>
              <td>
                <b>Pool resurfacing</b>
                <span className="s">Pebble Tec Classic · 7-year surface warranty</span>
              </td>
              <td className="c-cat">Pool and outdoor</td>
              <td className="c-con">Bay Pools</td>
              <td className="num r">
                <b>$9,800</b>
              </td>
            </tr>
            <tr data-type="Exterior">
              <td className="num">2024</td>
              <td>
                <b>Impact windows (whole home)</b>
                <span className="s">PGT WinGuard · wind rated, insurance credit</span>
              </td>
              <td className="c-cat">Exterior</td>
              <td className="c-con">Suncoast Windows</td>
              <td className="num r">
                <b>$26,000</b>
              </td>
            </tr>
            <tr data-type="Appliances">
              <td className="num">2024</td>
              <td>
                <b>New refrigerator</b>
                <span className="s">KitchenAid KRFC300ESS · 5-year warranty</span>
              </td>
              <td className="c-cat">Appliances</td>
              <td className="c-con">Best Buy</td>
              <td className="num r">
                <b>$2,999</b>
              </td>
            </tr>
            <tr data-type="Appliances">
              <td className="num">2024</td>
              <td>
                <b>New dishwasher</b>
                <span className="s">Bosch 800 Series · 5-year warranty</span>
              </td>
              <td className="c-cat">Appliances</td>
              <td className="c-con">Best Buy</td>
              <td className="num r">
                <b>$1,199</b>
              </td>
            </tr>
            <tr data-type="Appliances">
              <td className="num">2024</td>
              <td>
                <b>New range</b>
                <span className="s">KitchenAid KSGG700ESS · 5-year warranty</span>
              </td>
              <td className="c-cat">Appliances</td>
              <td className="c-con">Best Buy</td>
              <td className="num r">
                <b>$1,799</b>
              </td>
            </tr>
            <tr data-type="Kitchen">
              <td className="num">2024</td>
              <td>
                <b>Kitchen remodel</b>
                <span className="s">Quartz counters, soft-close cabinetry</span>
              </td>
              <td className="c-cat">Kitchen</td>
              <td className="c-con">Harbor Kitchens</td>
              <td className="num r">
                <b>$42,000</b>
              </td>
            </tr>
            <tr data-type="Electrical">
              <td className="num">2023</td>
              <td>
                <b>Electrical panel upgrade</b>
                <span className="s">Siemens 200 amp, with surge protection</span>
              </td>
              <td className="c-cat">Electrical</td>
              <td className="c-con">Tampa Electric Pros</td>
              <td className="num r">
                <b>$3,800</b>
              </td>
            </tr>
            <tr data-type="Bathroom">
              <td className="num">2023</td>
              <td>
                <b>Primary bathroom remodel</b>
                <span className="s">Walk-in shower, heated floor</span>
              </td>
              <td className="c-cat">Bathroom</td>
              <td className="c-con">Harbor Kitchens</td>
              <td className="num r">
                <b>$24,000</b>
              </td>
            </tr>
            <tr data-type="Roofing">
              <td className="num">2023</td>
              <td>
                <b>Roof replacement (shingle)</b>
                <span className="s">GAF Timberline HDZ · 10-year workmanship warranty</span>
              </td>
              <td className="c-cat">Roofing</td>
              <td className="c-con">Suncoast Roofing</td>
              <td className="num r">
                <b>$28,500</b>
              </td>
            </tr>
            <tr data-type="Exterior">
              <td className="num">2022</td>
              <td>
                <b>Fence and landscaping</b>
                <span className="s">Vinyl fence, native plantings</span>
              </td>
              <td className="c-cat">Exterior</td>
              <td className="c-con">Green Coast Landscape</td>
              <td className="num r">
                <b>$7,200</b>
              </td>
            </tr>
            <tr data-type="Pool and outdoor">
              <td className="num">2022</td>
              <td>
                <b>Pool heater replacement</b>
                <span className="s">Pentair MasterTemp 400 · 2-year parts warranty</span>
              </td>
              <td className="c-cat">Pool and outdoor</td>
              <td className="c-con">Bay Pools</td>
              <td className="num r">
                <b>$4,276</b>
              </td>
            </tr>
            <tr data-type="Interior">
              <td className="num">2021</td>
              <td>
                <b>Interior paint and flooring</b>
                <span className="s">Shaw luxury vinyl plank on the main level</span>
              </td>
              <td className="c-cat">Interior</td>
              <td className="c-con">Bayshore Interiors</td>
              <td className="num r">
                <b>$11,400</b>
              </td>
            </tr>
            <tr data-type="Interior">
              <td className="num">2020</td>
              <td>
                <b>Garage organization system</b>
                <span className="s">Gladiator GearTrack racks and cabinets</span>
              </td>
              <td className="c-cat">Interior</td>
              <td className="c-con">Self-installed</td>
              <td className="num r">
                <b>$2,000</b>
              </td>
            </tr>
            <tr data-type="Pool and outdoor">
              <td className="num">2020</td>
              <td>
                <b>Lanai cage rescreen</b>
                <span className="s">Pet-resistant screen</span>
              </td>
              <td className="c-cat">Pool and outdoor</td>
              <td className="c-con">Bay Screen Co.</td>
              <td className="num r">
                <b>$3,450</b>
              </td>
            </tr>
            <tr data-type="Plumbing">
              <td className="num">2020</td>
              <td>
                <b>Water heater replacement (hybrid)</b>
                <span className="s">Rheem ProTerra 50 · 10-year warranty</span>
              </td>
              <td className="c-cat">Plumbing</td>
              <td className="c-con">Harbor Plumbing</td>
              <td className="num r">
                <b>$2,950</b>
              </td>
            </tr>
            <tr data-type="HVAC">
              <td className="num">2020</td>
              <td>
                <b>AC duct cleaning and maintenance</b>
                <span className="s">Annual service plan</span>
              </td>
              <td className="c-cat">HVAC</td>
              <td className="c-con">Cool Air Solutions</td>
              <td className="num r">
                <b>$1,300</b>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>
                <b>Total</b>
              </td>
              <td className="c-cat"></td>
              <td className="c-con"></td>
              <td className="num r">
                <b id="imp-total">$191,673</b>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="ux-note">
        <svg width="17" height="17">
          <use href="#i-info" />
        </svg>
        {" "}
        <span>Receipts and warranties for each line are in your Vault. Use this report when you sell, refinance or renew insurance.</span>
      </div>
    </AppShell>
  );
}
