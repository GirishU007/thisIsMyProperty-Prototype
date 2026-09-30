/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/33-ho-estimate-hvac.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "HVAC Price Estimate" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-est-hvac" data-route="/ho/estimate/hvac">
      {" "}
      <div className="reportwrap">
        {" "}
        <div className="repbar">
          {" "}
          <Link className="back" href="/ho/estimate">
            <svg width="15" height="15" style={{ transform: "rotate(180deg)" }}>
              <use href="#i-chev" />
            </svg>{" "}Back to Request Price Estimate</Link>
          {" "}
          <span className="sp"></span>
          {" "}
          <button className="btn btn-ghost" style={{ padding: "8px 14px" }} data-stub="Print estimate">
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
          <div className="est-hero">
            {" "}
            <div className="t">
              {" "}
              <h1>HVAC PRICE ESTIMATE</h1>
              {" "}
              <h2>Real Data. Real Prices. Real Peace of Mind.</h2>
              {" "}
              <p>Our estimates are based on actual, verified homeowner invoices and receipts from similar homes in your area, so you can plan confidently and avoid overpaying.</p>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="est-prop">
            {" "}
            <div className="ph"></div>
            {" "}
            <div className="ad">
              {" "}
              <b>123 Happiness Street<br />Safety Harbor, FL 34695</b>
              {" "}
              <p>Single Family Home  |  Built 2018<br />2,850 sq ft  |  0.24 acres</p>
              {" "}</div>
            {" "}
            <div className="est-meta">
              {" "}
              <div className="c">
                <svg width="15" height="15">
                  <use href="#i-pin" />
                </svg>
                <div>
                  <b>Tampa, FL</b>(Tampa Bay Area)</div>
              </div>
              {" "}
              <div className="c">
                <svg width="15" height="15">
                  <use href="#i-calendar" />
                </svg>
                <div>
                  <b>Report Date</b>September 10, 2026</div>
              </div>
              {" "}
              <div className="c">
                <svg width="15" height="15">
                  <use href="#i-doc" />
                </svg>
                <div>
                  <b>Based on</b>47 verified invoices from similar homes</div>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="est-h">
            {" "}
            <h2>Estimated Pricing Options</h2>
            {" "}
            <span>All estimates include equipment, labor and standard installation. Actual costs may vary based on home-specific conditions.</span>
            {" "}</div>
          {" "}
          <div className="est-cards">
            {" "}
            <div className="est-card">
              {" "}
              <div className="acimg"></div>
              {" "}
              <h3>BASIC</h3>
              <div className="subt">Reliable & Functional</div>
              {" "}
              <div className="price num">$8,200 – $10,400</div>
              {" "}
              <ul>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Standard efficiency (14–16 SEER2)</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Single-stage system</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Standard brand options</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>1–5 year parts warranty</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Includes removal & disposal</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Typical for value-focused replacements</li>
              </ul>
              {" "}
              <span className="pill">GOOD VALUE</span>
              {" "}</div>
            {" "}
            <div className="est-card est-pop">
              {" "}
              <div className="ribbon">Most Popular</div>
              {" "}
              <div className="acimg"></div>
              {" "}
              <h3>MID-RANGE</h3>
              <div className="subt">Enhanced Comfort & Efficiency</div>
              {" "}
              <div className="price num">$10,500 – $13,800</div>
              {" "}
              <ul>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Higher efficiency (16–18 SEER2)</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Two-stage or variable-speed options</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Popular brand options (Trane, Carrier, Lennox, Rheem, etc.)</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>5–10 year parts warranty</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Includes removal & disposal</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Best balance of performance, efficiency and value</li>
              </ul>
              {" "}
              <span className="pill on">BEST VALUE</span>
              {" "}</div>
            {" "}
            <div className="est-card">
              {" "}
              <div className="acimg"></div>
              {" "}
              <h3>HIGHER-END</h3>
              <div className="subt">Premium Performance</div>
              {" "}
              <div className="price num">$14,500 – $19,000+</div>
              {" "}
              <ul>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>High efficiency (18–22+ SEER2)</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Variable-speed technology</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Premium brand options</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Enhanced air filtration & smart controls</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>10+ year parts warranty</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Includes removal & disposal</li>
                <li>
                  <i className="ck">
                    <svg width="9" height="9">
                      <use href="#i-check" />
                    </svg>
                  </i>Quieter operation, maximum comfort and energy savings</li>
              </ul>
              {" "}
              <span className="pill">PREMIUM COMFORT</span>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="est-two">
            {" "}
            <div className="est-pan">
              {" "}
              <h3>What Homeowners Actually Paid</h3>
              {" "}
              <p className="lede">Recent verified invoices from similar homes in the Tampa Bay area.</p>
              {" "}
              <div className="tablewrap">
                {" "}
                <table className="esttbl">
                  {" "}
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Home Size (sq ft)</th>
                      <th>System Size</th>
                      <th>Total Cost</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td>Aug 2026</td>
                      <td className="num">2,400</td>
                      <td className="num">3.5 Ton</td>
                      <td className="num">$10,850</td>
                    </tr>
                    {" "}
                    <tr>
                      <td>Jul 2026</td>
                      <td className="num">2,850</td>
                      <td className="num">4 Ton</td>
                      <td className="num">$11,975</td>
                    </tr>
                    {" "}
                    <tr>
                      <td>Jun 2026</td>
                      <td className="num">3,000</td>
                      <td className="num">4 Ton</td>
                      <td className="num">$12,400</td>
                    </tr>
                    {" "}
                    <tr>
                      <td>Apr 2026</td>
                      <td className="num">2,700</td>
                      <td className="num">3.5 Ton</td>
                      <td className="num">$11,200</td>
                    </tr>
                    {" "}
                    <tr>
                      <td>Mar 2026</td>
                      <td className="num">3,200</td>
                      <td className="num">5 Ton</td>
                      <td className="num">$13,600</td>
                    </tr>
                    {" "}
                    <tr className="med">
                      <td colSpan={3}>Median Price (Tampa Bay Area)</td>
                      <td className="num">$11,975</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="est-pan">
              {" "}
              <h3>Compare Your Quote</h3>
              {" "}
              <p className="lede">See how your contractor’s quote compares to the estimated fair price range.</p>
              {" "}
              <div className="qwrap">
                {" "}
                <div className="qcall">Your Quote<b className="num">$15,900</b>
                </div>
                {" "}
                <div className="qbar">
                  <i className="qdot"></i>
                </div>
                {" "}
                <div className="qfoot">
                  {" "}
                  <span className="e">LOW</span>
                  {" "}
                  <span className="qfair">Estimated Fair Price Range<b className="num">$10,500 – $13,800</b>
                  </span>
                  {" "}
                  <span className="e">HIGH</span>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div className="qnote">
                <b className="num">$2,100</b>{" "}above the upper end of the estimated fair-price range. Consider getting additional estimates from our preferred providers.</div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="est-ctas">
            {" "}
            <div className="estcta">
              <button className="b" data-stub="Check my existing quote">
                <svg width="16" height="16">
                  <use href="#i-doc" />
                </svg>{" "}CHECK MY EXISTING QUOTE</button>
              {" "}
              <span className="cap">Upload a contractor’s estimate for a detailed comparison.</span>
            </div>
            {" "}
            <div className="estcta solid">
              <button className="b" data-stub="Request estimates from preferred providers">
                <svg width="16" height="16">
                  <use href="#i-users" />
                </svg>{" "}REQUEST ESTIMATES<br />FROM PREFERRED PROVIDERS</button>
              {" "}
              <span className="cap">Get up to 3 estimates from our vetted local professionals.</span>
            </div>
            {" "}
            <div className="estcta">
              <Link className="b" href="/ho/providers">
                <svg width="16" height="16">
                  <use href="#i-search" />
                </svg>{" "}BROWSE PREFERRED SERVICE PROVIDERS{" "}
                <svg width="15" height="15">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              {" "}
              <span className="cap">View our trusted local partners.</span>
            </div>
            {" "}</div>
          {" "}
          <div className="est-end">
            {" "}
            <div className="endpanel">
              {" "}
              <div className="endpanel-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-bulb" />
                </svg>
                <b>Important Notes</b>
              </div>
              {" "}
              <div className="takeaway">
                <span className="tk">
                  <svg width="9" height="9">
                    <use href="#i-check" />
                  </svg>
                </span>
                <span>Estimates are based on documented homeowner invoices and comparable project characteristics.</span>
              </div>
              {" "}
              <div className="takeaway">
                <span className="tk">
                  <svg width="9" height="9">
                    <use href="#i-check" />
                  </svg>
                </span>
                <span>Actual pricing may vary based on home conditions, system size, brand, materials, permits and market conditions.</span>
              </div>
              {" "}
              <div className="takeaway">
                <span className="tk">
                  <svg width="9" height="9">
                    <use href="#i-check" />
                  </svg>
                </span>
                <span>This is a pricing information service and not a contractor quote.</span>
              </div>
              {" "}
              <div className="takeaway">
                <span className="tk">
                  <svg width="9" height="9">
                    <use href="#i-check" />
                  </svg>
                </span>
                <span>We do not receive compensation from the contractors used in our pricing analysis.</span>
              </div>
              {" "}</div>
            {" "}
            <div className="endpanel">
              {" "}
              <div className="endpanel-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-clip" />
                </svg>
                <b>Next Steps</b>
              </div>
              {" "}
              <div className="stepn">
                <i>1</i>
                <span>Choose the option that best fits your needs.</span>
              </div>
              {" "}
              <div className="stepn">
                <i>2</i>
                <span>Request estimates from our preferred providers (optional).</span>
              </div>
              {" "}
              <div className="stepn">
                <i>3</i>
                <span>Upload the final invoice to your vault to keep your records.</span>
              </div>
              {" "}
              <div className="stepn">
                <i>4</i>
                <span>Leave a review to help other homeowners.</span>
              </div>
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
