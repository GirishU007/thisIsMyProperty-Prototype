/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/18-how.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = { title: "How It Works" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-how" data-route="/how">
      {" "}
      <div className="pubwrap">
        {" "}
        <PublicNav active="how" />
        {" "}
        <div className="btcrumb">
          <Link href="/">Home</Link>
          {" "}
          <svg width="12" height="12">
            <use href="#i-chev" />
          </svg>
          {" "}
          <b style={{ color: "var(--navy)" }}>How It Works</b>
        </div>
        {" "}
        <div className="hwhero">
          {" "}
          <div>
            {" "}
            <h1>How It Works</h1>
            {" "}
            <h2>A Smarter Way to Care for<br />One of Your Biggest Investments.</h2>
            {" "}
            <p>ThisIsMyProperty.com helps homeowners understand, maintain, protect and document their property — all in one secure, easy-to-use platform. In just a few steps, you can build your Property Vault and get the insights you need to make smarter decisions, save money and enjoy peace of mind.</p>
            {" "}</div>
          {" "}
          <div className="hwshot" role="img" aria-label="A modern home at dusk, captioned Know Today. Plan for Tomorrow."></div>
          {" "}</div>
        {" "}
        <div className="section-in" style={{ padding: "0 24px" }}>
          {" "}
          <div className="gsband">
            {" "}
            <h2>Getting Started Is Easy</h2>
            {" "}
            <p className="lede">Go from sign up to valuable insights in just a few simple steps.</p>
            {" "}
            <div className="gsrow">
              {" "}
              <div className="gsstep">
                <div className="orb">
                  <span className="n num">1</span>
                  <svg width="30" height="30">
                    <use href="#i-badge" />
                  </svg>
                </div>
                <b>Create Your Account</b>
                <p>Sign up in minutes and choose the plan that fits your needs.</p>
                <svg className="arw" width="17" height="17">
                  <use href="#i-arrow" />
                </svg>
              </div>
              {" "}
              <div className="gsstep">
                <div className="orb">
                  <span className="n num">2</span>
                  <svg width="30" height="30">
                    <use href="#i-home" />
                  </svg>
                </div>
                <b>Add Your Property</b>
                <p>Enter your property address and basic details to create your Property Profile.</p>
                <svg className="arw" width="17" height="17">
                  <use href="#i-arrow" />
                </svg>
              </div>
              {" "}
              <div className="gsstep">
                <div className="orb">
                  <span className="n num">3</span>
                  <svg width="30" height="30">
                    <use href="#i-doc" />
                  </svg>
                </div>
                <b>Build Your Vault</b>
                <p>Add your home’s systems, receipts, warranties, service records and more — all in one secure place.</p>
                <svg className="arw" width="17" height="17">
                  <use href="#i-arrow" />
                </svg>
              </div>
              {" "}
              <div className="gsstep">
                <div className="orb">
                  <span className="n num">4</span>
                  <svg width="30" height="30">
                    <use href="#i-chart" />
                  </svg>
                </div>
                <b>Get Insights & Alerts</b>
                <p>Receive your Property Health Score, maintenance alerts, recall notifications and more.</p>
                <svg className="arw" width="17" height="17">
                  <use href="#i-arrow" />
                </svg>
              </div>
              {" "}
              <div className="gsstep">
                <div className="orb">
                  <span className="n num">5</span>
                  <svg width="30" height="30">
                    <use href="#i-shield-check" />
                  </svg>
                </div>
                <b>Take Action with Confidence</b>
                <p>Use our reports, resources and trusted service providers to keep your home in top shape for years to come.</p>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="hwall">
            {" "}
            <div>
              {" "}
              <h2>Everything You Need — All in One Place</h2>
              {" "}
              <p className="lede">Powerful tools. Practical insights. A healthier home.</p>
              {" "}
              <Link className="hwfeat" href="/ho">
                <span className="ic">
                  <svg width="21" height="21">
                    <use href="#i-home" />
                  </svg>
                </span>
                <span>
                  <b>My Dashboard</b>
                  <p>See your property’s health at a glance.</p>
                </span>
              </Link>
              {" "}
              <Link className="hwfeat" href="/ho/vault">
                <span className="ic">
                  <svg width="21" height="21">
                    <use href="#i-safe" />
                  </svg>
                </span>
                <span>
                  <b>My Vault</b>
                  <p>Store receipts, warranties, insurance, tax documents and more.</p>
                </span>
              </Link>
              {" "}
              <Link className="hwfeat" href="/ho/alerts">
                <span className="ic">
                  <svg width="21" height="21">
                    <use href="#i-bell" />
                  </svg>
                </span>
                <span>
                  <b>My Alerts</b>
                  <p>Stay ahead of maintenance, recalls and important dates.</p>
                </span>
              </Link>
              {" "}
              <Link className="hwfeat" href="/ho/health">
                <span className="ic">
                  <svg width="21" height="21">
                    <use href="#i-doc" />
                  </svg>
                </span>
                <span>
                  <b>My Reports</b>
                  <p>Generate valuable reports to track your home’s health, improvements and value.</p>
                </span>
              </Link>
              {" "}
              <Link className="hwfeat" href="/ho/resources">
                <span className="ic">
                  <svg width="21" height="21">
                    <use href="#i-book" />
                  </svg>
                </span>
                <span>
                  <b>Resources</b>
                  <p>Helpful guides, articles and tips for homeownership.</p>
                </span>
              </Link>
              {" "}
              <Link className="hwfeat" href="/ho/providers">
                <span className="ic">
                  <svg width="21" height="21">
                    <use href="#i-users3" />
                  </svg>
                </span>
                <span>
                  <b>Service Providers</b>
                  <p>Access our vetted list of trusted local professionals (paid accounts only).</p>
                </span>
              </Link>
              {" "}</div>
            {" "}
            <div className="hwdev" role="img" aria-label="The ThisIsMyProperty dashboard shown on a laptop and a phone"></div>
            {" "}</div>
          {" "}
          <div className="hwbottom">
            {" "}
            <div className="hwsofa" role="img" aria-label="A sunlit living room, captioned A healthier home. A brighter tomorrow."></div>
            {" "}
            <div className="hwready">
              {" "}
              <h3>Ready to Get Started?</h3>
              {" "}
              <p>Join thousands of homeowners who are taking control of their home’s health with ThisIsMyProperty.com.</p>
              {" "}
              <div className="row">
                {" "}
                <Link className="btn btn-primary" href="/try">Try it free{" "}
                  <svg width="16" height="16">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                {" "}
                <span>No credit card required.</span>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <PublicFooter />
        {" "}</div>
    </section>
  );
}
