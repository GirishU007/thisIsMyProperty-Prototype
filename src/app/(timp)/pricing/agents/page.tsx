/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/13-pricing-agents.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = { title: "Agent Pricing" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-pricing-ag" data-route="/pricing/agents">
      {" "}
      <div className="pubwrap">
        {" "}
        <PublicNav active="pricing" />
        {" "}
        <div className="pricing-hero">
          {" "}
          <h1>Agent Pricing</h1>
          {" "}
          <p>For trial and newer Realtors, and successful Realtors and brokers.</p>
          {" "}</div>
        {" "}
        <div className="prow" id="prow-ag">
          {" "}
          <div className="pintro">
            {" "}
            <h2 className="ptitle">Plans for Realtors</h2>
            {" "}
            <p>Powerful tools to manage your clients, provide more value, and grow your business.</p>
            {" "}
            <div className="pvalues">
              {" "}
              <div>
                <svg width="22" height="22">
                  <use href="#i-users3" />
                </svg>{" "}Strengthen Client Relationships</div>
              {" "}
              <div>
                <svg width="22" height="22">
                  <use href="#i-chart" />
                </svg>{" "}Deliver More Value</div>
              {" "}
              <div>
                <svg width="22" height="22">
                  <use href="#i-home" />
                </svg>{" "}Save Time</div>
              {" "}
              <div>
                <svg width="22" height="22">
                  <use href="#i-rocket" />
                </svg>{" "}Grow Your Business</div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="pcards">
            {" "}
            <div className="pscript">
              {" "}
              <div className="scr scr-ag"></div>
              {" "}
              <div className="pchecks">
                {" "}
                <div>
                  <i>
                    <svg width="11" height="11">
                      <use href="#i-check" />
                    </svg>
                  </i>{" "}More Touchpoints</div>
                {" "}
                <div>
                  <i>
                    <svg width="11" height="11">
                      <use href="#i-check" />
                    </svg>
                  </i>{" "}More Referrals</div>
                {" "}
                <div>
                  <i>
                    <svg width="11" height="11">
                      <use href="#i-check" />
                    </svg>
                  </i>{" "}More Opportunities</div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="pcard">
              {" "}
              <div className="picon">
                <svg width="42" height="42">
                  <use href="#i-home" />
                </svg>
              </div>
              {" "}
              <h3>Realtor-Basic</h3>
              <div className="phomes">(Unlimited Homes)</div>
              {" "}
              <p className="pdesc">The essentials to get started.</p>
              {" "}
              <hr />
              {" "}
              <div className="pamt">
                <b className="num">$0.00</b>
                <span>Monthly Membership</span>
              </div>
              {" "}
              <div className="pamt">
                <b className="num">$0.00</b>
                <span>Annual Membership</span>
              </div>
              {" "}
              <div className="spacer"></div>
              {" "}
              <Link className="cta cta-line" href="/register/agent">Get Started</Link>
              {" "}</div>
            {" "}
            <div className="pcard is-pop">
              {" "}
              <span className="poptag">Most Popular</span>
              {" "}
              <div className="picon">
                <svg width="42" height="42">
                  <use href="#i-heart-hand" />
                </svg>
              </div>
              {" "}
              <h3>Realtor-Premium</h3>
              <div className="phomes">(Unlimited Homes)</div>
              {" "}
              <p className="pdesc">Resources and tools to stay in touch with your clients. One central place to easily manage and view multiple client properties.</p>
              {" "}
              <hr />
              {" "}
              <div className="pamt">
                <b className="num">
                  <small>Introductory Price</small>$49.00</b>
                <span>Monthly Membership</span>
              </div>
              {" "}
              <div className="pamt">
                <b className="num">$1,000.00</b>
                <span>Annual Membership</span>
              </div>
              {" "}
              <div className="spacer"></div>
              {" "}
              <Link className="cta cta-solid" href="/register/agent">Choose Plan</Link>
              {" "}</div>
            {" "}
            <div className="pcard">
              {" "}
              <div className="picon">
                <svg width="42" height="42">
                  <use href="#i-trend" />
                </svg>
              </div>
              {" "}
              <h3>Realtor Pro<em>Lead Gen Engine</em>
              </h3>
              {" "}
              <p className="pdesc">Tools to help you generate more leads.</p>
              {" "}
              <hr />
              {" "}
              <div className="pamt">
                <b className="num">$199.00</b>
                <span>Monthly Membership</span>
              </div>
              {" "}
              <div className="pamt">
                <b className="num">$2,000.00</b>
                <span>Annual Membership</span>
              </div>
              {" "}
              <div className="spacer"></div>
              {" "}
              <Link className="cta cta-line" href="/register/agent">Choose Plan</Link>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="ftable-wrap">
            <table className="ftable ag">
              {" "}
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Realtor-Basic<span>(Unlimited Homes)</span>
                  </th>
                  <th>Realtor-Premium<span>(Unlimited Homes)</span>
                  </th>
                  <th>Realtor Pro<em>Lead Gen Engine</em>
                  </th>
                </tr>
              </thead>
              {" "}
              <tbody>
                {" "}
                <tr>
                  <td>DATA PRIVACY – Your Database is PRIVATE.<small>Your client phone numbers and email addresses will not be sold or shared.</small>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Data Integrity<small>Certified data and reports.</small>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Built by Industry Experts<small>Experienced Brokers, Realtors, Property Investors & Real Estate Financial Analysts.</small>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Greater Good Driven<small>Real data. Real impact. For the greater good.</small>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>The Vault<small>Unlimited storage for client documents: invoices, receipts, estimates, inspection reports, appraisals, utility bills and more.</small>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Free Link for Clients<small>Document upload capability. Link to Seller / Buyer Resources.</small>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Branded Home Improvement Summary Reports<small>Printable history of all home-related upgrades and major purchases for listings and clients, plus sample reports for listing appointments.</small>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Certified Price Estimates<small>One-time cost estimate report for a home product or service, based on verified homeowner data (e.g. HVAC system – choose up to 3 manufacturer models).</small>
                  </td>
                  <td className="val">With each 25 verified upload credits, receive 1 free Certified Price Estimate<small>(or pay $25/report)</small>
                  </td>
                  <td className="val">25 estimates per month<small>(add’l reports @ $25/report)</small>
                  </td>
                  <td className="val">50 estimates per month<small>(add’l reports @ $25/report)</small>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Realtor Dashboard<small>Access / print receipts, documents, reports and client maintenance alerts; private access to recommended vendors, seller / buyer resources, price estimate services and more.</small>
                  </td>
                  <td className="na">—</td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Branded Client Reports<small>Property Health Score · Improvement / Upgrade Lists for showings, open houses and listing appointments.</small>
                  </td>
                  <td className="na">—</td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>MLS Listing Landing Page<small>Invite prospects to create a free or discounted account through you.</small>
                  </td>
                  <td className="na">—</td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Auto Email Campaigns to Clients<small>Generate referrals and repeat business.</small>
                  </td>
                  <td className="na">—</td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Social Media Assets<small>Get more engagement and leads.</small>
                  </td>
                  <td className="na">—</td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Shareable Links to Buyer and Seller Resources<small>For email and social media posting.</small>
                  </td>
                  <td className="na">—</td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Access to Helpful Forms<small>Recommended repairs / improvements, listing & buying process checklists, more.</small>
                  </td>
                  <td className="na">—</td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                  <td>
                    <svg className="tickc" width="15" height="15">
                      <use href="#i-check" />
                    </svg>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Discounted Membership for Clients (Annual Only)<small>Give as closing gifts.</small>
                  </td>
                  <td className="na">—</td>
                  <td className="val">10% off</td>
                  <td className="val">20% off</td>
                </tr>
                {" "}
                <tr>
                  <td>ADVERTISING – Preferred Vendors Page on Website</td>
                  <td className="na">—</td>
                  <td className="val">N/A</td>
                  <td className="val">$39.00</td>
                </tr>
                {" "}
                <tr>
                  <td>ADVERTISING – Weekly Facebook Ad<small>Image only.</small>
                  </td>
                  <td className="na">—</td>
                  <td className="val">N/A</td>
                  <td className="val">$49.00</td>
                </tr>
                {" "}
                <tr>
                  <td>ADVERTISING – Featured Facebook / IG Vendor<small>Short video under 2 minutes.</small>
                  </td>
                  <td className="na">—</td>
                  <td className="val">N/A</td>
                  <td className="val">$89.00</td>
                </tr>
                {" "}
                <tr>
                  <td>ADVERTISING – Featured Facebook / IG Vendor<small>Short video 5–10 minutes, reposted weekly for 1 month.</small>
                  </td>
                  <td className="na">—</td>
                  <td className="val">N/A</td>
                  <td className="val">$399.00</td>
                </tr>
                {" "}
                <tr>
                  <td>ADVERTISING – Featured Vendor<small>45-minute podcast, includes promo video and 2 emails the week prior, plus YouTube.</small>
                  </td>
                  <td className="na">—</td>
                  <td className="val">N/A</td>
                  <td className="val">$1,499.00</td>
                </tr>
                {" "}
                <tr>
                  <td>ADVERTISING – Featured Vendor (Postcard)<small>Check RESPA rules for limitations.</small>
                  </td>
                  <td className="na">—</td>
                  <td className="val">N/A</td>
                  <td className="val">Contact Sales</td>
                </tr>
                {" "}</tbody>
              {" "}</table>
          </div>
          {" "}
          <div className="agband">
            {" "}
            <div>
              <div className="hd">
                <svg width="24" height="24">
                  <use href="#i-users3" />
                </svg>
                <b>Join a Community<br />That Supports You</b>
              </div>
              {" "}
              <p>Connect with experienced brokers, realtors, and property investors.</p>
            </div>
            {" "}
            <div>
              <div className="hd">
                <svg width="24" height="24">
                  <use href="#i-bulb" />
                </svg>
                <b>Provide More Value<br />to Your Clients</b>
              </div>
              {" "}
              <p>Give them the tools, data, and insights to make confident decisions.</p>
            </div>
            {" "}
            <div>
              <div className="hd">
                <svg width="24" height="24">
                  <use href="#i-chart" />
                </svg>
                <b>Grow Your Business</b>
              </div>
              {" "}
              <p>Generate more leads, referrals, and repeat clients.</p>
            </div>
            {" "}
            <div>
              <div className="hd">
                <svg width="24" height="24">
                  <use href="#i-heart" />
                </svg>
                <b>Be Part of a<br />Greater Good</b>
              </div>
              {" "}
              <p>Real data. Real impact. Stronger communities.</p>
            </div>
            {" "}</div>
          {" "}
          <div className="whyit" style={{ marginTop: "18px" }}>
            {" "}
            <svg className="ic" width="18" height="18">
              <use href="#i-info" />
            </svg>
            {" "}
            <div>
              <b>Not sure which plan fits?</b>
              {" "}
              <span>Start on the free tier — your Vault and your data come with you when you upgrade.</span>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="pcross">
          {" "}
          <div>
            <b>Looking for homeowner plans?</b>
            <span>Homeowner plans start free and cover one to four properties.</span>
          </div>
          {" "}
          <Link className="b" href="/pricing">See Homeowner Pricing{" "}
            <svg width="16" height="16">
              <use href="#i-arrow" />
            </svg>
          </Link>
          {" "}</div>
        {" "}
        <PublicFooter />
        {" "}</div>
      {" "}</section>
  );
}
