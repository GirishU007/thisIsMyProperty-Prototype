/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/28-ho-improvements.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Home Improvements (Summary)" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-imp" data-route="/ho/improvements">
      {" "}
      <div className="reportwrap">
        {" "}
        <div className="repbar">
          {" "}
          <Link className="back" href="/ho/reports">
            <svg width="15" height="15" style={{ transform: "rotate(180deg)" }}>
              <use href="#i-chev" />
            </svg>{" "}Back to My Reports</Link>
          {" "}
          <span className="sp"></span>
          {" "}
          <Link className="btn btn-ghost" style={{ padding: "8px 14px" }} href="/ho/improvements/detailed">
            <svg width="14" height="14">
              <use href="#i-chart" />
            </svg>{" "}View Detailed</Link>
          {" "}
          <button className="btn btn-ghost" style={{ padding: "8px 14px" }} data-stub="Print report">
            <svg width="14" height="14">
              <use href="#i-doc" />
            </svg>{" "}Print</button>
          {" "}
          <button className="btn btn-primary" style={{ padding: "8px 16px" }} data-stub="Download PDF">
            <svg width="14" height="14">
              <use href="#i-download" />
            </svg>{" "}Download PDF</button>
          {" "}</div>
        {" "}
        <div className="doc">
          {" "}
          <div className="doc-head">
            {" "}
            <svg className="brand-mark">
              <use href="#i-logo" />
            </svg>
            {" "}
            <div>
              <div className="bn">ThisIs<em>My</em>Property<span style={{ color: "var(--slate)" }}>.com</span>
              </div>
              {" "}
              <div className="bt">Your home’s health at your fingertips.™</div>
            </div>
            {" "}</div>
          {" "}
          <div className="imphead">
            {" "}
            <div>
              {" "}
              <h1>HOME{" "}
                <em>IMPROVEMENTS</em>{" "}SUMMARY</h1>
              {" "}
              <p>Track your home’s improvements and plan for what’s next.</p>
              {" "}</div>
            {" "}
            <span className="scriptart" role="img" aria-label="A healthier home. A brighter future."></span>
            {" "}</div>
          {" "}
          <div className="imptop">
            {" "}
            <span className="photo ph1" role="img" aria-label="Photo of 123 Happiness Street"></span>
            {" "}
            <div>
              {" "}
              <span className="sellab">Select Property:</span>
              {" "}
              <div className="selbox">123 Happiness Street, Safety Harbor, FL 34695{" "}
                <svg width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="seldrop">
                {" "}
                <span className="is-on">123 Happiness Street, Safety Harbor, FL 34695</span>
                {" "}
                <span>245 Peaceful Lane, Palm Harbor, FL 34683</span>
                {" "}
                <span>1117 Humble Way, Dunedin, FL 34698</span>
                {" "}</div>
              {" "}
              <div className="impaddr">
                {" "}
                <div>
                  <b>123 Happiness Street</b>
                  <span>Safety Harbor, FL 34695</span>
                </div>
                {" "}
                <span className="homepill">Primary Home</span>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="impfacts">
              {" "}
              <svg className="mk" width="46" height="46">
                <use href="#i-home-health" />
              </svg>
              {" "}
              <div className="r">
                <span>Property Type:</span>
                <span>Single Family Home</span>
              </div>
              {" "}
              <div className="r">
                <span>Year Built:</span>
                <span className="num">2015</span>
              </div>
              {" "}
              <div className="r">
                <span>Living Area:</span>
                <span className="num">2,842 sq ft</span>
              </div>
              {" "}
              <div className="r">
                <span>Lot Size:</span>
                <span className="num">0.23 acres</span>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="impstats">
            {" "}
            <div className="impstat">
              <svg width="30" height="30">
                <use href="#i-tools" />
              </svg>
              <b className="num">18</b>
              <span>Total Improvements</span>
            </div>
            {" "}
            <div className="impstat">
              <svg width="30" height="30">
                <use href="#i-dollar" />
              </svg>
              <b className="num">$191,673</b>
              <span>Total Amount Spent</span>
            </div>
            {" "}
            <div className="impstat">
              <svg width="30" height="30">
                <use href="#i-calendar" />
              </svg>
              <b className="num">2020 – 2026</b>
              <span>Years of Improvements</span>
            </div>
            {" "}
            <div className="impstat">
              <svg width="30" height="30">
                <use href="#i-home" />
              </svg>
              <b className="num">10</b>
              <span>Categories Updated</span>
            </div>
            {" "}</div>
          {" "}
          <div className="impsec-h">
            {" "}
            <svg className="hi" width="28" height="28">
              <use href="#i-doc" />
            </svg>
            {" "}
            <h2>Improvement History</h2>
            {" "}
            <span className="selpill" data-stub="Filter by category">All Categories{" "}
              <svg width="13" height="13">
                <use href="#i-chevd" />
              </svg>
            </span>
            {" "}</div>
          {" "}
          <div className="imptabwrap">
            {" "}
            <table className="imptab">
              {" "}
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount Paid</th>
                </tr>
              </thead>
              {" "}
              <tbody>
                {" "}
                <tr>
                  <td className="num">2026</td>
                  <td>HVAC System Replacement (4 Ton)</td>
                  <td>HVAC</td>
                  <td className="num">$12,800</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2025</td>
                  <td>Exterior Paint (Whole House)</td>
                  <td>Exterior</td>
                  <td className="num">$6,200</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2025</td>
                  <td>Pool Resurfacing</td>
                  <td>Pool & Outdoor</td>
                  <td className="num">$9,800</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2024</td>
                  <td>Impact Windows (Whole Home)</td>
                  <td>Exterior</td>
                  <td className="num">$26,000</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2024</td>
                  <td>New Refrigerator</td>
                  <td>Appliances</td>
                  <td className="num">$2,999</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2024</td>
                  <td>New Dishwasher</td>
                  <td>Appliances</td>
                  <td className="num">$1,199</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2024</td>
                  <td>New Range</td>
                  <td>Appliances</td>
                  <td className="num">$1,799</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2024</td>
                  <td>Kitchen Remodel</td>
                  <td>Kitchen</td>
                  <td className="num">$42,000</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2023</td>
                  <td>Electrical Panel Upgrade</td>
                  <td>Electrical</td>
                  <td className="num">$3,800</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2023</td>
                  <td>Primary Bathroom Remodel</td>
                  <td>Bathroom</td>
                  <td className="num">$24,000</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2023</td>
                  <td>Roof Replacement (Shingle)</td>
                  <td>Roofing</td>
                  <td className="num">$28,500</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2022</td>
                  <td>Fence & Landscaping</td>
                  <td>Exterior</td>
                  <td className="num">$7,200</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2022</td>
                  <td>Pool Heater Replacement</td>
                  <td>Pool & Outdoor</td>
                  <td className="num">$4,276</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2021</td>
                  <td>Interior Paint & Flooring</td>
                  <td>Interior</td>
                  <td className="num">$11,400</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2020</td>
                  <td>Garage Organization System</td>
                  <td>Interior</td>
                  <td className="num">$2,000</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2020</td>
                  <td>Lanai Cage Rescreen</td>
                  <td>Pool & Outdoor</td>
                  <td className="num">$3,450</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2020</td>
                  <td>Water Heater Replacement (Hybrid)</td>
                  <td>Plumbing</td>
                  <td className="num">$2,950</td>
                </tr>
                {" "}
                <tr>
                  <td className="num">2020</td>
                  <td>AC Duct Cleaning & Maintenance</td>
                  <td>HVAC</td>
                  <td className="num">$1,300</td>
                </tr>
                {" "}</tbody>
              {" "}</table>
            {" "}</div>
          {" "}
          <div className="imptot">
            <b>Total Amount Spent</b>
            <i className="num">$191,673</i>
          </div>
          {" "}
          <div className="impnotes">
            {" "}
            <div className="impnote">
              {" "}
              <svg width="34" height="34">
                <use href="#i-bulb" />
              </svg>
              {" "}
              <div>
                <h3>Keep Improving</h3>
                {" "}
                <p>A well-maintained home is a more comfortable, efficient and enjoyable place to live.</p>
              </div>
              {" "}</div>
            {" "}
            <div className="impnote">
              {" "}
              <svg width="34" height="34">
                <use href="#i-clip" />
              </svg>
              {" "}
              <div>
                <h3>Next Steps</h3>
                {" "}
                <li>
                  <svg width="15" height="15">
                    <use href="#i-check" />
                  </svg>{" "}Keep adding receipts and records.</li>
                {" "}
                <li>
                  <svg width="15" height="15">
                    <use href="#i-check" />
                  </svg>{" "}Set reminders for future maintenance.</li>
                {" "}
                <li>
                  <svg width="15" height="15">
                    <use href="#i-check" />
                  </svg>{" "}Use this summary to plan your next improvement.</li>
                {" "}
                <li>
                  <svg width="15" height="15">
                    <use href="#i-check" />
                  </svg>{" "}Consider getting estimates for upcoming projects.</li>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="impfoot">
            {" "}
            <span>THISISMYPROPERTY.COM</span>
            {" "}
            <span className="mid">KNOWLEDGE TODAY. A STRONGER TOMORROW.</span>
            {" "}
            <span>REPORT DATE: SEPTEMBER 22, 2026</span>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
