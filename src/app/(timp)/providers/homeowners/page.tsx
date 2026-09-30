/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/15-providers-homeowners.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = { title: "Service Providers — Homeowners" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-hp" data-route="/providers/homeowners">
      {" "}
      <div className="pubwrap">
        {" "}
        <PublicNav active="providers" />
        {" "}
        <div className="hph">
          {" "}
          <div>
            {" "}
            <span className="eyebrow">Trusted Local Experts</span>
            {" "}
            <h1>Reliable Home<br />Service Providers.<br />
              <em>Real Peace of Mind.</em>
            </h1>
            {" "}
            <p>As a ThisIsMyProperty.com (TIMP) account holder, you’ll get exclusive access to our carefully vetted network of trusted service providers — and you can read and share reviews from other homeowners just like you.</p>
            {" "}
            <div className="acts">
              {" "}
              <Link className="solid" href="/register">Create Your Account{" "}
                <svg width="16" height="16">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              {" "}
              <Link className="line" href="/ho/providers">Learn More</Link>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="hphshot" role="img" aria-label="A Florida home, captioned A Better Home Starts with the Right People."></div>
          {" "}
          <div className="hpcards">
            {" "}
            <div className="hpcard">
              <svg width="26" height="26">
                <use href="#i-shield-check" />
              </svg>
              <b>Vetted<br />& Trusted Professionals</b>
            </div>
            {" "}
            <div className="hpcard">
              <svg width="26" height="26">
                <use href="#i-users3" />
              </svg>
              <b>Real Reviews<br />from Homeowners</b>
            </div>
            {" "}
            <div className="hpcard">
              <svg width="26" height="26">
                <use href="#i-home" />
              </svg>
              <b>Wide Range<br />of Home Services</b>
            </div>
            {" "}
            <div className="hpcard">
              <svg width="26" height="26">
                <use href="#i-lock" />
              </svg>
              <b>Exclusive Access for TIMP<br />Account Holders</b>
            </div>
            {" "}
            <div className="hpcard">
              <svg width="26" height="26">
                <use href="#i-heart" />
              </svg>
              <b>A Healthier Home.<br />A Brighter Tomorrow.</b>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="hpben">
          {" "}
          <div className="hpben-in">
            {" "}
            <div className="hpcouple" role="img" aria-label="A couple with their dog at a laptop, captioned Maintain, Improve, Protect, Enjoy"></div>
            {" "}
            <div>
              {" "}
              <span className="eyebrow">A valuable benefit for our homeowners</span>
              {" "}
              <h2>Exclusive Access to Our<br />Recommended Service Providers</h2>
              {" "}
              <p>Your ThisIsMyProperty.com account includes private access to our list of recommended service providers. These professionals are suggested by our customers and staff, undergo a strict screening process, and must commit to our code of ethics and professionalism.</p>
              {" "}
              <div className="hplist">
                {" "}
                <div>
                  <i>
                    <svg width="12" height="12">
                      <use href="#i-check" />
                    </svg>
                  </i>
                  <span>Only TIMP account holders can view our list</span>
                </div>
                {" "}
                <div>
                  <i>
                    <svg width="12" height="12">
                      <use href="#i-check" />
                    </svg>
                  </i>
                  <span>Read and share reviews (account holders only)</span>
                </div>
                {" "}
                <div>
                  <i>
                    <svg width="12" height="12">
                      <use href="#i-check" />
                    </svg>
                  </i>
                  <span>Trusted, local professionals who understand our community</span>
                </div>
                {" "}
                <div>
                  <i>
                    <svg width="12" height="12">
                      <use href="#i-check" />
                    </svg>
                  </i>
                  <span>From routine maintenance to major projects</span>
                </div>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="hpsvc">
          {" "}
          <h2>A Wide Range of Trusted Home Services</h2>
          {" "}
          <p>Find the right professional for your home — all in one place.</p>
          {" "}
          <div className="hpgrid">
            {" "}
            <div>
              <span className="ic">
                <svg width="30" height="30">
                  <use href="#i-tools" />
                </svg>
              </span>
              <b>HVAC</b>
              <i></i>
            </div>
            {" "}
            <div>
              <span className="ic">
                <svg width="30" height="30">
                  <use href="#i-drop" />
                </svg>
              </span>
              <b>Plumbing</b>
              <i></i>
            </div>
            {" "}
            <div>
              <span className="ic">
                <svg width="30" height="30">
                  <use href="#i-bolt" />
                </svg>
              </span>
              <b>Electrical</b>
              <i></i>
            </div>
            {" "}
            <div>
              <span className="ic">
                <svg width="30" height="30">
                  <use href="#i-roof" />
                </svg>
              </span>
              <b>Roofing</b>
              <i></i>
            </div>
            {" "}
            <div>
              <span className="ic">
                <svg width="30" height="30">
                  <use href="#i-paint" />
                </svg>
              </span>
              <b>Painting</b>
              <i></i>
            </div>
            {" "}
            <div>
              <span className="ic">
                <svg width="30" height="30">
                  <use href="#i-leaf" />
                </svg>
              </span>
              <b>Landscaping</b>
              <i></i>
            </div>
            {" "}
            <div>
              <span className="ic">
                <svg width="30" height="30">
                  <use href="#i-pool" />
                </svg>
              </span>
              <b>Pool Services</b>
              <i></i>
            </div>
            {" "}
            <div>
              <span className="ic">
                <svg width="30" height="30">
                  <use href="#i-wrench" />
                </svg>
              </span>
              <b>Repairs &<br />Handyman</b>
              <i></i>
            </div>
            {" "}
            <div>
              <span className="ic">
                <svg width="30" height="30">
                  <use href="#i-shield" />
                </svg>
              </span>
              <b>Pest Control</b>
              <i></i>
            </div>
            {" "}
            <div>
              <span className="ic">
                <svg width="30" height="30">
                  <use href="#i-grid" />
                </svg>
              </span>
              <b>And More</b>
              <i></i>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="hpcta">
          {" "}
          <div className="hpcta-in">
            {" "}
            <div>
              {" "}
              <div className="hd">
                {" "}
                <span className="lk">
                  <svg width="26" height="26">
                    <use href="#i-lock" />
                  </svg>
                </span>
                {" "}
                <h3>Access Our Service Provider List<br />with Your TIMP Account</h3>
                {" "}</div>
              {" "}
              <p>Our service provider directory is a private resource for our account holders. Create an account today to get exclusive access, read reviews, and connect with trusted professionals.</p>
              {" "}</div>
            {" "}
            <div className="rt">
              {" "}
              <Link className="b" href="/register">Get Started Today{" "}
                <svg width="16" height="16">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              {" "}
              <span className="n">Affordable plans. Big peace of mind.</span>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="hpsay">
          {" "}
          <h2>What Homeowners Are Saying</h2>
          {" "}
          <div className="hpquotes">
            {" "}
            <div className="hpq">
              <span className="av hpav0"></span>
              <div>
                <p>“I love having a trusted list of professionals in one place. The reviews from other homeowners are so helpful!”</p>
                <b>– Melissa R.</b>
                <span>Safety Harbor, FL</span>
              </div>
            </div>
            {" "}
            <div className="hpq">
              <span className="av hpav1"></span>
              <div>
                <p>“We found an amazing HVAC company through TIMP. Professional, fair pricing and great service!”</p>
                <b>– David K.</b>
                <span>Dunedin, FL</span>
              </div>
            </div>
            {" "}
            <div className="hpq">
              <span className="av hpav2"></span>
              <div>
                <p>“It’s such a valuable benefit. I feel confident knowing the providers are vetted and reviewed by real homeowners.”</p>
                <b>– Jennifer L.</b>
                <span>Palm Harbor, FL</span>
              </div>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="hpjoin">
          {" "}
          <div className="hpjoin-in">
            {" "}
            <div className="hpscr" role="img" aria-label="Stronger homes. Happier lives."></div>
            {" "}
            <div className="md">
              {" "}
              <h2>Join Today and Get Exclusive Access</h2>
              {" "}
              <p>More than a home. A healthier tomorrow.</p>
              {" "}</div>
            {" "}
            <div className="rt">
              {" "}
              <Link className="b" href="/register">Create Your Account{" "}
                <svg width="16" height="16">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              {" "}
              <button className="q" data-stub="Contact us">Have questions? Contact Us →</button>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <PublicFooter />
        {" "}</div>
    </section>
  );
}
