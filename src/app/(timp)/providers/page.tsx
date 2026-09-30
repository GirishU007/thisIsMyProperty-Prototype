/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/16-providers.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = { title: "Service Providers" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-sp" data-route="/providers">
      {" "}
      <div className="pubwrap">
        {" "}
        <PublicNav active="providers" />
        {" "}
        <div className="sphero">
          {" "}
          <div className="tx">
            {" "}
            <h1>Service Providers<br />Partner{" "}
              <em>for a</em>
              <br />
              <em>Stronger Tomorrow.</em>
            </h1>
            {" "}
            <p>Connect with motivated homeowners, grow your business, and be part of a platform that’s changing the way people care for their homes.</p>
            {" "}
            <div className="acts">
              {" "}
              <Link className="pill" href="/ho/providers">Learn More{" "}
                <svg width="17" height="17">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              {" "}
              <button className="txtlink" data-stub="Contact us about the Service Provider Program">Contact Us{" "}
                <svg width="15" height="15">
                  <use href="#i-arrow" />
                </svg>
              </button>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="spshot" role="img" aria-label="A service professional in a ThisIsMyProperty shirt outside a home, captioned Together, We Keep Homes Healthier."></div>
          {" "}</div>
        {" "}
        <div className="spwhy">
          {" "}
          <div>
            <span className="ic">
              <svg width="36" height="36">
                <use href="#i-users3" />
              </svg>
            </span>
            <b>Reach<br />Motivated Clients</b>
            <p>Connect with homeowners who value proactive home maintenance.</p>
          </div>
          {" "}
          <div>
            <span className="ic">
              <svg width="36" height="36">
                <use href="#i-chart" />
              </svg>
            </span>
            <b>Grow<br />Your Business</b>
            <p>Increase visibility and generate consistent opportunities.</p>
          </div>
          {" "}
          <div>
            <span className="ic">
              <svg width="36" height="36">
                <use href="#i-handshake" />
              </svg>
            </span>
            <b>Build<br />Lasting Relationships</b>
            <p>Be a trusted resource in your community.</p>
          </div>
          {" "}
          <div>
            <span className="ic">
              <svg width="36" height="36">
                <use href="#i-shield-check" />
              </svg>
            </span>
            <b>Showcase<br />Your Expertise</b>
            <p>Highlight your services and build credibility with reviews.</p>
          </div>
          {" "}
          <div>
            <span className="ic">
              <svg width="36" height="36">
                <use href="#i-home" />
              </svg>
            </span>
            <b>Be Part of<br />The Greater Good</b>
            <p>Help homeowners protect their biggest investment and stronger communities.</p>
          </div>
          {" "}</div>
        {" "}
        <div className="spprog">
          {" "}
          <div className="spvan" role="img" aria-label="A service van reading Quality Service, Stronger Homes"></div>
          {" "}
          <div className="spcard">
            {" "}
            <span className="eyebrow">Our Service Provider Program</span>
            {" "}
            <h2>Quality Service.<br />Real Connections.</h2>
            {" "}
            <p>ThisIsMyProperty.com will feature a carefully vetted network of service providers who share our commitment to quality, integrity and exceptional customer service. Our goal is to connect homeowners with trusted professionals while giving service providers valuable exposure and business opportunities.</p>
            {" "}</div>
          {" "}
          <div className="sppts">
            {" "}
            <div className="sppt">
              <span className="ic">
                <svg width="21" height="21">
                  <use href="#i-shield-check" />
                </svg>
              </span>
              <div>
                <b>Application & Screening</b>
                <p>All service providers go through a strict vetting process.</p>
              </div>
            </div>
            {" "}
            <div className="sppt">
              <span className="ic">
                <svg width="21" height="21">
                  <use href="#i-users3" />
                </svg>
              </span>
              <div>
                <b>Trusted & Reviewed</b>
                <p>Only verified providers are listed. Customer reviews come from our paid members.</p>
              </div>
            </div>
            {" "}
            <div className="sppt">
              <span className="ic">
                <svg width="21" height="21">
                  <use href="#i-star" />
                </svg>
              </span>
              <div>
                <b>Commitment to Excellence</b>
                <p>Providers agree to our code of ethics and professionalism.</p>
              </div>
            </div>
            {" "}
            <div className="sppt">
              <span className="ic">
                <svg width="21" height="21">
                  <use href="#i-leaf" />
                </svg>
              </span>
              <div>
                <b>Value for Homeowners</b>
                <p>Be part of a platform that promotes proactive homeownership and stronger communities.</p>
              </div>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="spsoon">
          {" "}
          <div className="ic">
            <svg width="46" height="46">
              <use href="#i-logo" />
            </svg>
          </div>
          {" "}
          <h2>COMING SOON!</h2>
          {" "}
          <p>We are finalizing the details of our Service Provider Program, including account options, pricing and additional features. Check back soon for more information on how you can join and start benefiting from ThisIsMyProperty.com.</p>
          {" "}</div>
        {" "}
        <div className="spjoin">
          {" "}
          <div className="spscr" role="img" aria-label="Let’s build stronger homes together."></div>
          {" "}
          <div className="rt">
            {" "}
            <h2>Interested in Becoming a Service Provider?</h2>
            {" "}
            <p>We’d love to tell you more. Contact us today to be among the first to receive program updates and learn how you can get involved.</p>
            {" "}
            <button className="btn" style={{ background: "var(--teal-deep)", color: "#fff", borderRadius: "999px", textTransform: "none", letterSpacing: "0", fontSize: "14px", padding: "13px 26px", marginTop: "18px" }} data-stub="Contact us about the Service Provider Program">Contact Us{" "}
              <svg width="16" height="16">
                <use href="#i-arrow" />
              </svg>
            </button>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="spend">
          {" "}
          <div>
            <span className="ic">
              <svg width="36" height="36">
                <use href="#i-users3" />
              </svg>
            </span>
            <b>More Homeowners</b>
          </div>
          {" "}
          <div>
            <span className="ic">
              <svg width="36" height="36">
                <use href="#i-chart" />
              </svg>
            </span>
            <b>More Opportunities</b>
          </div>
          {" "}
          <div>
            <span className="ic">
              <svg width="36" height="36">
                <use href="#i-handshake" />
              </svg>
            </span>
            <b>Stronger Communities</b>
          </div>
          {" "}
          <div>
            <span className="ic">
              <svg width="36" height="36">
                <use href="#i-heart" />
              </svg>
            </span>
            <b>A Healthier Tomorrow</b>
          </div>
          {" "}</div>
        {" "}
        <PublicFooter />
        {" "}</div>
    </section>
  );
}
