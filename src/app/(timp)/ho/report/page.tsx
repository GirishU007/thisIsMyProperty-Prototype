/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/10-ho-report.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Home Health Score Report" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-report" data-route="/ho/report">
      {" "}
      <div className="reportwrap">
        {" "}
        <div className="repbar">
          {" "}
          <Link className="back" href="/ho/health">
            <svg width="15" height="15" style={{ transform: "rotate(180deg)" }}>
              <use href="#i-chev" />
            </svg>{" "}Back to Home Health</Link>
          {" "}
          <Link className="back" href="/ho/reports" style={{ color: "var(--teal-deep)" }}>My Reports</Link>
          {" "}
          <span className="sp"></span>
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
          <div className="doc-hero" style={{ backgroundImage: "url(\"/images/timp/ho-report-doc-hero.jpg\")" }}>
            {" "}
            <div className="t">
              {" "}
              <h1>HOME HEALTH<br />SCORE REPORT</h1>
              {" "}
              <p>INSIGHTS TODAY.<br />A STRONGER TOMORROW.</p>
              {" "}</div>
            {" "}
            <div className="doc-facts">
              {" "}
              <b>123 Happiness Street<br />Safety Harbor, FL 34695</b>
              {" "}
              <hr />
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
              {" "}
              <div className="r">
                <span>Report Date:</span>
                <span>September 10, 2026</span>
              </div>
              {" "}
              <div className="r">
                <span>Prepared For:</span>
                <span>Homeowner</span>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="scorerow">
            {" "}
            <div>
              {" "}
              <div className="gauge-big">
                <div className="v">
                  {" "}
                  <svg width="30" height="30">
                    <use href="#i-heart-fill" />
                  </svg>
                  {" "}
                  <b className="num">87</b>
                  <span>OUT OF 100</span>
                  {" "}</div>
              </div>
              {" "}
              <span className="condpill">GOOD CONDITION</span>
              {" "}
              <div className="tagline">A healthier home. A brighter future.</div>
              {" "}</div>
            {" "}
            <div className="panel">
              {" "}
              <h3>WHAT YOUR SCORE MEANS</h3>
              {" "}
              <div className="legend-row">
                <i style={{ background: "#0E7C86" }}></i>
                <b>90 – 100</b>
                <span>Excellent Condition</span>
              </div>
              {" "}
              <div className="legend-row">
                <i style={{ background: "#1FA8B4" }}></i>
                <b>75 – 89</b>
                <span>Good Condition</span>
              </div>
              {" "}
              <div className="legend-row">
                <i style={{ background: "#F2C744" }}></i>
                <b>60 – 74</b>
                <span>Fair Condition</span>
              </div>
              {" "}
              <div className="legend-row">
                <i style={{ background: "#E8912B" }}></i>
                <b>40 – 59</b>
                <span>Needs Attention</span>
              </div>
              {" "}
              <div className="legend-row">
                <i style={{ background: "#E03B3B" }}></i>
                <b>Below 40</b>
                <span>Major Repairs Needed</span>
              </div>
              {" "}</div>
            {" "}
            <div className="panel">
              {" "}
              <h3>OVERALL ASSESSMENT</h3>
              {" "}
              <p>Your home is in good overall condition with no critical issues identified. Regular maintenance and a few recommended updates will help maintain its value and keep your home running smoothly for years to come.</p>
              {" "}
              <span className="script scriptart" role="img" aria-label="A healthier home. A brighter future."></span>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="secbar">DETAILED SYSTEM BREAKDOWN</div>
          {" "}
          <div className="sysrow four">
            {" "}
            <div className="syspanel">
              {" "}
              <div className="syspanel-h">
                <svg className="ic" width="22" height="22">
                  <use href="#i-roof" />
                </svg>
                <b>ROOFING</b>
              </div>
              {" "}
              <div className="sysscore">85{" "}
                <span>/ 100</span>
              </div>
              {" "}
              <span className="sysimg" style={{ backgroundImage: "url(\"/images/timp/ho-report-sysimg.jpg\")" }}></span>
              {" "}
              <div className="sysbody">
                {" "}
                <div className="kv2">
                  {" "}
                  <b>Condition:</b>
                  <span>Good</span>
                  {" "}
                  <b>Age:</b>
                  <span>8 years (est.)</span>
                  {" "}
                  <b>Material:</b>
                  <span>Architectural Shingles</span>
                  {" "}
                  <b>Expected Life:</b>
                  <span>25–30 years</span>
                  {" "}</div>
                {" "}
                <h4>Findings:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>No active leaks observed</li>
                  {" "}
                  <li>Normal wear and granule loss</li>
                  {" "}
                  <li>Flashing in good condition</li>
                  {" "}</ul>
                {" "}</div>
              {" "}
              <div className="sysrec">
                <h4>Recommendations:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>Monitor for wind/hurricane damage after major storms</li>
                  {" "}
                  <li>Plan for replacement in 10–15 years</li>
                  {" "}</ul>
              </div>
              {" "}</div>
            {" "}
            <div className="syspanel">
              {" "}
              <div className="syspanel-h">
                <svg className="ic" width="22" height="22">
                  <use href="#i-snow" />
                </svg>
                <b>HVAC</b>
              </div>
              {" "}
              <div className="sysscore">90{" "}
                <span>/ 100</span>
              </div>
              {" "}
              <span className="sysimg" style={{ backgroundImage: "url(\"/images/timp/ho-report-sysimg-2.jpg\")" }}></span>
              {" "}
              <div className="sysbody">
                {" "}
                <div className="kv2">
                  {" "}
                  <b>Condition:</b>
                  <span>Good</span>
                  {" "}
                  <b>Age:</b>
                  <span>6 years</span>
                  {" "}
                  <b>Type:</b>
                  <span>Central Electric (2 units)</span>
                  {" "}
                  <b>Expected Life:</b>
                  <span>15–20 years</span>
                  {" "}</div>
                {" "}
                <h4>Findings:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>System operating properly</li>
                  {" "}
                  <li>Regular maintenance on record</li>
                  {" "}
                  <li>No major issues noted</li>
                  {" "}</ul>
                {" "}</div>
              {" "}
              <div className="sysrec">
                <h4>Recommendations:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>Continue bi-annual servicing</li>
                  {" "}
                  <li>Keep filters changed regularly</li>
                  {" "}</ul>
              </div>
              {" "}</div>
            {" "}
            <div className="syspanel">
              {" "}
              <div className="syspanel-h">
                <svg className="ic" width="22" height="22">
                  <use href="#i-drop" />
                </svg>
                <b>PLUMBING</b>
              </div>
              {" "}
              <div className="sysscore">80{" "}
                <span>/ 100</span>
              </div>
              {" "}
              <span className="sysimg" style={{ backgroundImage: "url(\"/images/timp/ho-report-sysimg-3.jpg\")" }}></span>
              {" "}
              <div className="sysbody">
                {" "}
                <div className="kv2">
                  {" "}
                  <b>Condition:</b>
                  <span>Good</span>
                  {" "}
                  <b>Age:</b>
                  <span>Water Heater – 8 years</span>
                  {" "}
                  <b>Material:</b>
                  <span>PEX / Copper</span>
                  {" "}
                  <b>Expected Life:</b>
                  <span>40–50 years (pipes)</span>
                  {" "}</div>
                {" "}
                <h4>Findings:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>No active leaks</li>
                  {" "}
                  <li>Water heater functioning properly</li>
                  {" "}
                  <li>Minor signs of corrosion on exterior fittings</li>
                  {" "}</ul>
                {" "}</div>
              {" "}
              <div className="sysrec">
                <h4>Recommendations:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>Monitor fittings and valves</li>
                  {" "}
                  <li>Consider proactive replacement of water heater in 3–5 years</li>
                  {" "}</ul>
              </div>
              {" "}</div>
            {" "}
            <div className="syspanel">
              {" "}
              <div className="syspanel-h">
                <svg className="ic" width="22" height="22">
                  <use href="#i-bolt" />
                </svg>
                <b>ELECTRICAL</b>
              </div>
              {" "}
              <div className="sysscore">88{" "}
                <span>/ 100</span>
              </div>
              {" "}
              <span className="sysimg" style={{ backgroundImage: "url(\"/images/timp/ho-report-sysimg-4.jpg\")" }}></span>
              {" "}
              <div className="sysbody">
                {" "}
                <div className="kv2">
                  {" "}
                  <b>Condition:</b>
                  <span>Good</span>
                  {" "}
                  <b>Age:</b>
                  <span>8 years</span>
                  {" "}
                  <b>Service:</b>
                  <span>200 Amp</span>
                  {" "}
                  <b>Expected Life:</b>
                  <span>40–50 years</span>
                  {" "}</div>
                {" "}
                <h4>Findings:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>Panel and wiring in good condition</li>
                  {" "}
                  <li>GFCI and AFCI protection present</li>
                  {" "}
                  <li>No overloaded circuits observed</li>
                  {" "}</ul>
                {" "}</div>
              {" "}
              <div className="sysrec">
                <h4>Recommendations:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>Continue routine inspection</li>
                  {" "}
                  <li>Consider whole-home surge protection</li>
                  {" "}</ul>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="sysrow three">
            {" "}
            <div className="syspanel">
              {" "}
              <div className="syspanel-h">
                <svg className="ic" width="22" height="22">
                  <use href="#i-appliance" />
                </svg>
                <b>APPLIANCES</b>
              </div>
              {" "}
              <div className="sysscore">82{" "}
                <span>/ 100</span>
              </div>
              {" "}
              <span className="sysimg" style={{ backgroundImage: "url(\"/images/timp/ho-report-sysimg-5.jpg\")" }}></span>
              {" "}
              <div className="sysbody">
                {" "}
                <div className="kv2">
                  {" "}
                  <b>Condition:</b>
                  <span>Good</span>
                  {" "}
                  <b>Age:</b>
                  <span>3–8 years (varies)</span>
                  {" "}
                  <b>Expected Life:</b>
                  <span>10–15 years</span>
                  {" "}</div>
                {" "}
                <h4>Findings:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>All major appliances functioning</li>
                  {" "}
                  <li>Normal wear consistent with age</li>
                  {" "}
                  <li>Refrigerator ice maker slightly slow</li>
                  {" "}</ul>
                {" "}</div>
              {" "}
              <div className="sysrec">
                <h4>Recommendations:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>Monitor refrigerator performance</li>
                  {" "}
                  <li>Plan for replacement in 5–7 years (as needed)</li>
                  {" "}</ul>
              </div>
              {" "}</div>
            {" "}
            <div className="syspanel">
              {" "}
              <div className="syspanel-h">
                <svg className="ic" width="22" height="22">
                  <use href="#i-pool" />
                </svg>
                <b>POOL & OUTDOOR</b>
              </div>
              {" "}
              <div className="sysscore">85{" "}
                <span>/ 100</span>
              </div>
              {" "}
              <span className="sysimg" style={{ backgroundImage: "url(\"/images/timp/ho-report-sysimg-6.jpg\")" }}></span>
              {" "}
              <div className="sysbody">
                {" "}
                <div className="kv2">
                  {" "}
                  <b>Condition:</b>
                  <span>Good</span>
                  {" "}
                  <b>Pool Type:</b>
                  <span>Gunite</span>
                  {" "}
                  <b>Age:</b>
                  <span>~8 years</span>
                  {" "}
                  <b>Equipment:</b>
                  <span>Heater/Chiller (recently replaced)</span>
                  {" "}</div>
                {" "}
                <h4>Findings:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>Pool structure in good condition</li>
                  {" "}
                  <li>Equipment operating properly</li>
                  {" "}
                  <li>Calcium buildup on tile (cosmetic)</li>
                  {" "}
                  <li>Outdoor living areas well maintained</li>
                  {" "}</ul>
                {" "}</div>
              {" "}
              <div className="sysrec">
                <h4>Recommendations:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>Maintain proper water chemistry</li>
                  {" "}
                  <li>Plan for resurfacing in 5–10 years</li>
                  {" "}
                  <li>Continue regular cleaning and equipment service</li>
                  {" "}</ul>
              </div>
              {" "}</div>
            {" "}
            <div className="syspanel">
              {" "}
              <div className="syspanel-h">
                <svg className="ic" width="22" height="22">
                  <use href="#i-exterior" />
                </svg>
                <b>STRUCTURE & FOUNDATION</b>
              </div>
              {" "}
              <div className="sysscore">92{" "}
                <span>/ 100</span>
              </div>
              {" "}
              <span className="sysimg" style={{ backgroundImage: "url(\"/images/timp/ho-report-sysimg-7.jpg\")" }}></span>
              {" "}
              <div className="sysbody">
                {" "}
                <div className="kv2">
                  {" "}
                  <b>Condition:</b>
                  <span>Excellent</span>
                  {" "}
                  <b>Type:</b>
                  <span>Slab on Grade</span>
                  {" "}
                  <b>Expected Life:</b>
                  <span>50+ years</span>
                  {" "}</div>
                {" "}
                <h4>Findings:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>No visible cracks or settlement</li>
                  {" "}
                  <li>Exterior walls and stucco in good condition</li>
                  {" "}
                  <li>Doors and windows operate properly</li>
                  {" "}
                  <li>Overall structure appears stable</li>
                  {" "}</ul>
                {" "}</div>
              {" "}
              <div className="sysrec">
                <h4>Recommendations:</h4>
                {" "}
                <ul>
                  {" "}
                  <li>Continue routine monitoring</li>
                  {" "}
                  <li>Maintain proper drainage around the home</li>
                  {" "}</ul>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="endrow">
            {" "}
            <div className="endpanel">
              {" "}
              <div className="endpanel-h">
                <svg className="ic" width="24" height="24">
                  <use href="#i-clip" />
                </svg>
                <b>KEY TAKEAWAYS</b>
              </div>
              {" "}
              <div className="takeaway">
                <span className="tk">
                  <svg width="11" height="11">
                    <use href="#i-check" />
                  </svg>
                </span>Your home is in good overall condition.</div>
              {" "}
              <div className="takeaway">
                <span className="tk">
                  <svg width="11" height="11">
                    <use href="#i-check" />
                  </svg>
                </span>No critical issues identified.</div>
              {" "}
              <div className="takeaway">
                <span className="tk">
                  <svg width="11" height="11">
                    <use href="#i-check" />
                  </svg>
                </span>A few updates and routine maintenance items will help maintain value and prevent costly repairs.</div>
              {" "}
              <div className="takeaway">
                <span className="tk">
                  <svg width="11" height="11">
                    <use href="#i-check" />
                  </svg>
                </span>Regular inspections are the key to a healthier home.</div>
              {" "}</div>
            {" "}
            <div className="endpanel">
              {" "}
              <div className="endpanel-h">
                <svg className="ic" width="24" height="24">
                  <use href="#i-calendar" />
                </svg>
                <b>NEXT STEPS</b>
              </div>
              {" "}
              <div className="stepn">
                <i>1</i>Schedule roof inspection within 2 years.</div>
              {" "}
              <div className="stepn">
                <i>2</i>Service HVAC before next cooling season.</div>
              {" "}
              <div className="stepn">
                <i>3</i>Monitor and maintain pool equipment.</div>
              {" "}
              <div className="stepn">
                <i>4</i>Consider replacing water heater in 3–5 years.</div>
              {" "}
              <div className="stepn">
                <i>5</i>Continue routine maintenance and seasonal inspections.</div>
              {" "}</div>
            {" "}
            <div className="endpanel">
              {" "}
              <div className="endpanel-h">
                <svg className="ic" width="24" height="24">
                  <use href="#i-info" />
                </svg>
                <b>IMPORTANT NOTE</b>
              </div>
              {" "}
              <p style={{ fontSize: "12px", color: "var(--charcoal)", lineHeight: "1.5" }}>This report is based on a visual assessment of major systems and available information. It is not a home inspection and should not be considered a guarantee of condition. For a comprehensive evaluation, please consult licensed professionals for each system.</p>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="doc-foot">
            {" "}
            <b>THISISMYPROPERTY.COM</b>
            {" "}
            <span style={{ marginLeft: "auto" }}>KNOWLEDGE TODAY. A STRONGER TOMORROW.</span>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
