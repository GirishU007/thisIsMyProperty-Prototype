/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/14-try.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = { title: "Try It For Free" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-try" data-route="/try">
      {" "}
      <div className="pubwrap">
        {" "}
        <PublicNav active="try" />
        {" "}
        <div className="tfhero">
          {" "}
          <div>
            {" "}
            <span className="eyebrow">Take Control Today</span>
            {" "}
            <h1>Try It For Free</h1>
            {" "}
            <h2>A Smarter Way to Care for<br />Your Home Starts Here.</h2>
            {" "}
            <p>Create your free account and experience how ThisIsMyProperty.com helps you understand, maintain and protect your home — all in one secure place.</p>
            {" "}
            <div className="tfsteps">
              {" "}
              <div>
                <span className="ic">
                  <svg width="25" height="25">
                    <use href="#i-home" />
                  </svg>
                </span>
                <b>Easy<br />Sign Up</b>
                <p>Get started in minutes.</p>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="25" height="25">
                    <use href="#i-chart" />
                  </svg>
                </span>
                <b>Explore<br />the Platform</b>
                <p>See what’s possible for your home.</p>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="25" height="25">
                    <use href="#i-lock" />
                  </svg>
                </span>
                <b>Upgrade<br />Anytime</b>
                <p>Unlock full features when you’re ready.</p>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="tfshot" role="img" aria-label="A couple at a laptop outside their home, captioned Knowledge today. A brighter tomorrow."></div>
          {" "}</div>
        {" "}
        <div className="tfmid">
          {" "}
          <div>
            {" "}
            <h2>With Your Free Account, You Can:</h2>
            {" "}
            <div className="tfcan">
              {" "}
              <div>
                <span className="ic">
                  <svg width="23" height="23">
                    <use href="#i-home" />
                  </svg>
                </span>
                <div>
                  <b>Add Your Property</b>
                  <p>Enter your address and basic details.</p>
                </div>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="23" height="23">
                    <use href="#i-chart" />
                  </svg>
                </span>
                <div>
                  <b>Explore Your Dashboard</b>
                  <p>Get a snapshot of your home’s key information.</p>
                </div>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="23" height="23">
                    <use href="#i-doc" />
                  </svg>
                </span>
                <div>
                  <b>See What’s Possible</b>
                  <p>Preview sample reports, alerts and resources.</p>
                </div>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="23" height="23">
                    <use href="#i-bulb" />
                  </svg>
                </span>
                <div>
                  <b>Learn About Our Features</b>
                  <p>Discover how ThisIsMyProperty.com can help you in the short and long term.</p>
                </div>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="tfform">
            {" "}
            <h2>Create Your Free Account</h2>
            {" "}
            <div className="sub">It only takes a minute.</div>
            {" "}
            <div className="tfrow">
              {" "}
              <div className="tfin">First Name</div>
              {" "}
              <div className="tfin">Last Name</div>
              {" "}</div>
            {" "}
            <div className="tfin">Email Address</div>
            {" "}
            <div className="tfin">Create a Password{" "}
              <svg width="16" height="16">
                <use href="#i-eye" />
              </svg>
            </div>
            {" "}
            <Link className="tfbtn" href="/ho">Create My Free Account{" "}
              <svg width="17" height="17">
                <use href="#i-arrow" />
              </svg>
            </Link>
            {" "}
            <div className="tfalready">Already have an account?{" "}
              <Link href="/ho">Sign In</Link>
            </div>
            {" "}
            <div className="tfterms">By creating an account, you agree to our{" "}
              <Link href="/">Terms of Service</Link>{" "}and{" "}
              <Link href="/">Privacy Policy</Link>.</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div style={{ padding: "0 24px" }}>
          {" "}
          <div className="tfup">
            {" "}
            <h2>Upgrade to a Premium Plan Anytime</h2>
            {" "}
            <p>Get even more powerful tools and insights.</p>
            {" "}
            <div className="tfupgrid">
              {" "}
              <div>
                <span className="ic">
                  <svg width="30" height="30">
                    <use href="#i-clip" />
                  </svg>
                </span>
                <b>Full Access<br />to All Reports</b>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="30" height="30">
                    <use href="#i-bell" />
                  </svg>
                </span>
                <b>Personalized<br />Alerts & Reminders</b>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="30" height="30">
                    <use href="#i-users3" />
                  </svg>
                </span>
                <b>Recommended<br />Vendors (Customers Only)</b>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="30" height="30">
                    <use href="#i-chart" />
                  </svg>
                </span>
                <b>Market Insights<br />& Home Value Tools</b>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="30" height="30">
                    <use href="#i-gear" />
                  </svg>
                </span>
                <b>More Properties<br />& Advanced Features</b>
              </div>
              {" "}
              <div className="cta">
                {" "}
                <Link className="b" href="/pricing">View Pricing{" "}
                  <svg width="16" height="16">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                {" "}
                <span>No credit card required<br />to sign up.</span>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="tfbot">
          {" "}
          <div className="tfquote">
            {" "}
            <div className="tfhouse" role="img" aria-label="A Florida home with palms"></div>
            {" "}
            <div className="q">
              {" "}
              <span className="mark">“</span>
              {" "}
              <p>This platform gives me peace of mind. I love having all of my home’s information in one place!</p>
              {" "}
              <b>— Melissa T.</b>
              <span>Homeowner, Tampa, FL</span>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="tfhealth">
            {" "}
            <h3>Your home’s health.<br />A brighter tomorrow.</h3>
            {" "}
            <div className="row">
              {" "}
              <div>
                <span className="ic">
                  <svg width="32" height="32">
                    <use href="#i-shield-check" />
                  </svg>
                </span>
                <b>More Knowledge</b>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="32" height="32">
                    <use href="#i-heart" />
                  </svg>
                </span>
                <b>Greater Confidence</b>
              </div>
              {" "}
              <div>
                <span className="ic">
                  <svg width="32" height="32">
                    <use href="#i-home" />
                  </svg>
                </span>
                <b>A Stronger Future</b>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <PublicFooter />
        {" "}</div>
    </section>
  );
}
