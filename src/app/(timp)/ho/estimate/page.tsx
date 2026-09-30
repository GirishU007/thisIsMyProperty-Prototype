/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/32-ho-estimate.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Costs & Estimates" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-estimate" data-route="/ho/estimate">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="ho" active="estimate" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              <h1>Request Price Estimate</h1>
              <div className="sub">Get certified, data-driven price estimates for home products and services based on verified homeowner data.</div>
            </div>
            {" "}
            <div className="appbar-right">
              {" "}
              <div className="minisect" style={{ padding: "9px 12px", display: "flex", gap: "9px", alignItems: "flex-start", background: "#F1FAFA", borderColor: "#CFE9E9", maxWidth: "290px" }}>
                {" "}
                <svg width="18" height="18" style={{ color: "var(--teal-deep)", flexShrink: "0" }}>
                  <use href="#i-shield-check" />
                </svg>
                {" "}
                <div>
                  <b className="sm">Trusted. Independent. Data-Verified.</b>
                  <p className="tiny muted">Our estimates are based on real project data from verified homeowners.</p>
                </div>
                {" "}</div>
              {" "}
              <div className="avatar">SM</div>
              {" "}
              <span className="who-mini">Welcome, Sarah{" "}
                <svg width="13" height="13" style={{ color: "var(--slate)" }}>
                  <use href="#i-chevd" />
                </svg>
              </span>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="content">
            {" "}
            <div className="wizard">
              {" "}
              <div className="wstep is-on">
                <span className="n num">1</span>
                <div>
                  <b>Select Product</b>
                  <span>Choose what you need</span>
                </div>
              </div>
              {" "}
              <div className="wstep">
                <span className="n num">2</span>
                <div>
                  <b>Provide Details</b>
                  <span>Tell us about your home</span>
                </div>
              </div>
              {" "}
              <div className="wstep">
                <span className="n num">3</span>
                <div>
                  <b>Review & Compare</b>
                  <span>Compare options</span>
                </div>
              </div>
              {" "}
              <div className="wstep">
                <span className="n num">4</span>
                <div>
                  <b>Get Your Estimate</b>
                  <span>Instant price report</span>
                </div>
              </div>
              {" "}</div>
            {" "}
            <div className="withrail narrow">
              {" "}
              <div className="minisect">
                {" "}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                  {" "}
                  <div>
                    <h3 style={{ fontSize: "14px" }}>1. Select a Product or Service</h3>
                    <p className="sm muted">What would you like an estimate for?</p>
                  </div>
                  {" "}
                  <span className="searchbox" style={{ marginLeft: "auto" }}>
                    <svg width="14" height="14">
                      <use href="#i-search" />
                    </svg>{" "}Search products or services…</span>
                  {" "}</div>
                {" "}
                <div className="prodgrid">
                  {" "}
                  <button className="prod is-on">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-snow" />
                      </svg>
                    </div>
                    <b>HVAC System</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Water Heater estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-water" />
                      </svg>
                    </div>
                    <b>Water Heater</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Roofing estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-roof" />
                      </svg>
                    </div>
                    <b>Roofing</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub={"Windows & Doors estimate"}>
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-window" />
                      </svg>
                    </div>
                    <b>Windows & Doors</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Electrical Panel estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-bolt" />
                      </svg>
                    </div>
                    <b>Electrical Panel</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Kitchen Remodel estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-interior" />
                      </svg>
                    </div>
                    <b>Kitchen Remodel</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Bathroom Remodel estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-bath" />
                      </svg>
                    </div>
                    <b>Bathroom Remodel</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Flooring estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-grid" />
                      </svg>
                    </div>
                    <b>Flooring</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Appliances estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-appliance" />
                      </svg>
                    </div>
                    <b>Appliances</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Solar Panels estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-solar" />
                      </svg>
                    </div>
                    <b>Solar Panels</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Painting estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-paint" />
                      </svg>
                    </div>
                    <b>Painting</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Deck / Patio estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-deck" />
                      </svg>
                    </div>
                    <b>Deck / Patio</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Plumbing estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-pipe" />
                      </svg>
                    </div>
                    <b>Plumbing</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Insulation estimate">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-insul" />
                      </svg>
                    </div>
                    <b>Insulation</b>
                  </button>
                  {" "}
                  <button className="prod" data-stub="Other product or service">
                    <div className="ic">
                      <svg width="21" height="21">
                        <use href="#i-dots" />
                      </svg>
                    </div>
                    <b>Other</b>
                  </button>
                  {" "}</div>
                {" "}
                <div className="notice">
                  {" "}
                  <svg className="ic" width="17" height="17" style={{ color: "var(--amber)" }}>
                    <use href="#i-bulb" />
                  </svg>
                  {" "}
                  <div>
                    <b>Why our estimates are better</b>
                    <p>We use verified homeowner data, product pricing, labor costs in your area, and real project history to deliver the most accurate estimates available.</p>
                  </div>
                  {" "}</div>
                {" "}
                <Link className="btn btn-primary" style={{ marginTop: "14px" }} href="/ho/estimate/hvac">Next: Provide Details{" "}
                  <svg width="15" height="15">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                {" "}</div>
              {" "}
              <div className="minisect">
                {" "}
                <div className="minisect-h">
                  <b>Your Estimate Summary</b>
                </div>
                {" "}
                <div className="alertline" style={{ borderTop: "0" }}>
                  <svg className="ic" width="17" height="17" style={{ color: "var(--teal-deep)" }}>
                    <use href="#i-snow" />
                  </svg>
                  <div style={{ flex: "1" }}>
                    <b>HVAC System</b>
                  </div>
                  <button className="tiny" style={{ color: "var(--teal-deep)", fontWeight: "700" }} data-stub="Change product">Change</button>
                </div>
                {" "}
                <div className="eyebrow" style={{ margin: "10px 0 5px" }}>Estimated Property</div>
                {" "}
                <div className="alertline" style={{ borderTop: "0" }}>
                  <svg className="ic" width="16" height="16" style={{ color: "var(--slate)" }}>
                    <use href="#i-home" />
                  </svg>
                  <div>
                    <b>123 Happiness Street</b>
                    <span>Safety Harbor, FL 34695</span>
                  </div>
                </div>
                {" "}
                <div className="kv">
                  <span className="lab">Home Size</span>
                  <b className="num">2,850 sq ft</b>
                </div>
                {" "}
                <div className="kv">
                  <span className="lab">Home Type</span>
                  <b>Single Family</b>
                </div>
                {" "}
                <div className="kv">
                  <span className="lab">Year Built</span>
                  <b className="num">2018</b>
                </div>
                {" "}
                <div className="eyebrow" style={{ margin: "12px 0 5px" }}>What You’ll Receive</div>
                {" "}
                <ul className="recvlist">
                  {" "}
                  <li>
                    <svg className="ic" width="14" height="14">
                      <use href="#i-check" />
                    </svg>
                    <div>
                      <b>3 Product Option Estimates</b>
                      <span>Good · Better · Best</span>
                    </div>
                  </li>
                  {" "}
                  <li>
                    <svg className="ic" width="14" height="14">
                      <use href="#i-check" />
                    </svg>
                    <div>
                      <b>Detailed Cost Breakdown</b>
                      <span>Labor, materials & permits</span>
                    </div>
                  </li>
                  {" "}
                  <li>
                    <svg className="ic" width="14" height="14">
                      <use href="#i-check" />
                    </svg>
                    <div>
                      <b>Price Range in Your Area</b>
                      <span>Based on verified projects</span>
                    </div>
                  </li>
                  {" "}
                  <li>
                    <svg className="ic" width="14" height="14">
                      <use href="#i-check" />
                    </svg>
                    <div>
                      <b>Recommendations</b>
                      <span>From homeowner data insights</span>
                    </div>
                  </li>
                  {" "}</ul>
                {" "}
                <div className="whyit" style={{ marginTop: "12px" }}>
                  <svg className="ic" width="16" height="16">
                    <use href="#i-lock" />
                  </svg>
                  <div>
                    <b className="sm">Your information is secure.</b>
                    <br />
                    <span className="tiny">We never share your data.</span>
                  </div>
                </div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="minisect" style={{ marginTop: "14px" }}>
              {" "}
              <div className="minisect-h">
                <b>Popular Estimate Requests</b>
                <Link className="link" href="/ho/providers">View All →</Link>
              </div>
              {" "}
              <p className="tiny muted" style={{ margin: "-4px 0 10px" }}>See what other homeowners are estimating this month.</p>
              {" "}
              <div className="popular">
                {" "}
                <div className="pop">
                  <svg className="ic" width="20" height="20">
                    <use href="#i-snow" />
                  </svg>
                  <div>
                    <b>HVAC System</b>
                    <span>Avg. Estimate</span>
                    <span className="est num">$7,200 – $12,400</span>
                  </div>
                </div>
                {" "}
                <div className="pop">
                  <svg className="ic" width="20" height="20">
                    <use href="#i-roof" />
                  </svg>
                  <div>
                    <b>Roof Replacement</b>
                    <span>Avg. Estimate</span>
                    <span className="est num">$8,900 – $16,300</span>
                  </div>
                </div>
                {" "}
                <div className="pop">
                  <svg className="ic" width="20" height="20">
                    <use href="#i-water" />
                  </svg>
                  <div>
                    <b>Water Heater</b>
                    <span>Avg. Estimate</span>
                    <span className="est num">$1,100 – $2,300</span>
                  </div>
                </div>
                {" "}
                <div className="pop">
                  <svg className="ic" width="20" height="20">
                    <use href="#i-interior" />
                  </svg>
                  <div>
                    <b>Kitchen Remodel</b>
                    <span>Avg. Estimate</span>
                    <span className="est num">$18,500 – $42,000</span>
                  </div>
                </div>
                {" "}
                <Link className="tiny" href="/ho/providers" style={{ color: "var(--teal-deep)", fontWeight: "700" }}>View All →</Link>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="notice">
              {" "}
              <svg className="ic" width="17" height="17">
                <use href="#i-info" />
              </svg>
              {" "}
              <div>
                <b>Estimates are independent and unbiased.</b>
                <p>We are not contractors. We provide data-driven estimates so you can make informed decisions.</p>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
