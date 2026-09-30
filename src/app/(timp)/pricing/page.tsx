/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/12-pricing.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = { title: "Pricing" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-pricing" data-route="/pricing">
      {" "}
      <div className="pubwrap">
        {" "}
        <PublicNav active="pricing" />
        {" "}
        <div className="pricing-hero">
          {" "}
          <h1>Homeowner Pricing</h1>
          {" "}
          <p>Start free. Upgrade when you’re ready. Cancel anytime.</p>
          {" "}</div>
        {" "}
        <div className="prow" id="prow-ho">
          {" "}
          <div className="pintro">
            {" "}
            <h2 className="ptitle">Plans for Every Homeowner</h2>
            {" "}
            <p>Get the tools, insights, and support you need to protect, maintain, and maximize your home.</p>
            {" "}</div>
          {" "}
          <div className="pcards">
            {" "}
            <div className="pscript">
              <div className="scr scr-ho"></div>
            </div>
            {" "}
            <div className="pcard">
              {" "}
              <div className="picon">
                <svg width="42" height="42">
                  <use href="#i-home" />
                </svg>
              </div>
              {" "}
              <h3>Homeowner Basic</h3>
              <div className="phomes">(1 Home)</div>
              {" "}
              <p className="pdesc">The essentials to get started. One central place to easily manage and maintain one of the largest assets you own — your home.</p>
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
              <Link className="cta cta-line" href="/register">Get Started</Link>
              {" "}</div>
            {" "}
            <div className="pcard is-pop">
              {" "}
              <span className="poptag">Most Popular</span>
              {" "}
              <div className="picon">
                <svg width="42" height="42">
                  <use href="#i-home-health" />
                </svg>
              </div>
              {" "}
              <h3>Homeowner Plus</h3>
              <div className="phomes">(1 Home)</div>
              {" "}
              <p className="pdesc">One central place to easily manage and maintain your home with advanced tools and reports.</p>
              {" "}
              <hr />
              {" "}
              <div className="pamt">
                <b className="num">$29.00</b>
                <span>Monthly Membership</span>
              </div>
              {" "}
              <div className="pamt">
                <b className="num">$300.00</b>
                <span>Annual Membership</span>
              </div>
              {" "}
              <span className="psave">Save 14%</span>
              {" "}
              <div className="spacer"></div>
              {" "}
              <Link className="cta cta-solid" href="/register">Choose Plan</Link>
              {" "}</div>
            {" "}
            <div className="pcard">
              {" "}
              <div className="picon">
                <svg width="44" height="44">
                  <use href="#i-store" />
                </svg>
              </div>
              {" "}
              <h3>Homeowner-Premium</h3>
              <div className="phomes">(Up to 4 homes)</div>
              {" "}
              <p className="pdesc">One central place to easily manage and maintain multiple properties.</p>
              {" "}
              <hr />
              {" "}
              <div className="pamt">
                <b className="num">$49.00</b>
                <span>Monthly Membership</span>
              </div>
              {" "}
              <div className="pamt">
                <b className="num">$500.00</b>
                <span>Annual Membership</span>
              </div>
              {" "}
              <span className="psave">Save 15%</span>
              {" "}
              <div className="spacer"></div>
              {" "}
              <Link className="cta cta-line" href="/register">Choose Plan</Link>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="ftable-wrap">
            <table className="ftable ho">
              {" "}
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Homeowner Basic<span>(1 Home)</span>
                  </th>
                  <th>Homeowner Plus<span>(1 Home)</span>
                  </th>
                  <th>Homeowner-Premium<span>(Up to 4 homes)</span>
                  </th>
                </tr>
              </thead>
              {" "}
              <tbody>
                {" "}
                <tr>
                  <td>Data Integrity – Certified Reports</td>
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
                  <td>Built by Industry Experts</td>
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
                  <td>Personal Contact Information NEVER Sold</td>
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
                  <td>Greater Good Driven</td>
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
                  <td>Realtor Account Access</td>
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
                  <td>The Vault</td>
                  <td className="val">Basic</td>
                  <td className="val">Advanced</td>
                  <td className="val">Advanced</td>
                </tr>
                {" "}
                <tr>
                  <td>Home Improvement / Upgrade Reports</td>
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
                  <td>Utility Bill Cost History Reports</td>
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
                  <td>Certified Price Estimates</td>
                  <td className="val">2 per Year<small>(add’l reports @ $25/report)</small>
                  </td>
                  <td className="val">2 per Month<small>(add’l reports @ $25/report)</small>
                  </td>
                  <td className="val">2 per Month<small>(add’l reports @ $25/report)</small>
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>Property Dashboard</td>
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
                  <td>Property Health Score</td>
                  <td className="val">Basic</td>
                  <td className="val">Advanced</td>
                  <td className="val">Advanced</td>
                </tr>
                {" "}
                <tr>
                  <td>Account Transferability to future homebuyer</td>
                  <td className="val">$199 transfer fee</td>
                  <td className="val">Included</td>
                  <td className="val">Included</td>
                </tr>
                {" "}
                <tr>
                  <td>Monthly Email summaries of Property Health Score</td>
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
                  <td>Email Reminders: Warranties</td>
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
                  <td>Email Reminders: Insurance Expiration</td>
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
                  <td>Advanced-level Reporting<small>Certified PDF, TXT and Excel downloads</small>
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
                  <td>Issue Resolution</td>
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
                  <td>Pro Advice</td>
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
                {" "}</tbody>
              {" "}</table>
          </div>
          {" "}
          <div className="commband">
            {" "}
            <div className="lead">
              <svg width="36" height="36">
                <use href="#i-users3" />
              </svg>
              <b>A Community<br />you can trust</b>
            </div>
            {" "}
            <p className="copy">Join a growing community of homeowners, Realtors, and property professionals working together for a greater good.</p>
            {" "}
            <div className="items">
              {" "}
              <div>
                <svg width="24" height="24">
                  <use href="#i-shield-check" />
                </svg>Your Data<br />Stays Private</div>
              {" "}
              <div>
                <svg width="24" height="24">
                  <use href="#i-heart" />
                </svg>Built for a<br />Greater Good</div>
              {" "}
              <div>
                <svg width="24" height="24">
                  <use href="#i-leaf" />
                </svg>Knowledge Today.<br />A Stronger Tomorrow.</div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        {/* ROW 2 — AGENT PRICING */}
        {" "}
        <div className="pcross">
          {" "}
          <div>
            <b>Are you a real estate professional?</b>
            <span>Realtor plans include unlimited client vaults, branded reports and marketing tools.</span>
          </div>
          {" "}
          <Link className="b" href="/pricing/agents">See Agent Pricing{" "}
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
