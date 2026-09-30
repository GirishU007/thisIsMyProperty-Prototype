/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/09-agent-providers.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Service Providers" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-ag-prov" data-route="/agent/providers">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="agent" active="vendors" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              <h1>Recommended Vendors</h1>
              <div className="sub">Trusted pros for a healthier home.</div>
            </div>
            {" "}
            <div className="appbar-right">
              {" "}
              <Link className="iconbtn" href="/agent/alerts">
                <svg width="17" height="17">
                  <use href="#i-bell" />
                </svg>
                <span className="dot num">3</span>
              </Link>
              {" "}
              <button className="iconbtn" data-stub="Help center">
                <svg width="17" height="17">
                  <use href="#i-help" />
                </svg>
              </button>
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
            <div className="rvhero">
              {" "}
              <div>
                {" "}
                <h1>Recommended<br />Vendors</h1>
                {" "}
                <h2>Trusted Pros for a Healthier Home.</h2>
                {" "}
                <p>
                  <b>Our Recommended Vendors</b>{" "}are trusted, verified professionals who help you maintain, protect and improve your home — so you can enjoy peace of mind today and for years to come.</p>
                {" "}
                <div className="rvtrust">
                  {" "}
                  <div>
                    <span className="ic">
                      <svg width="32" height="32">
                        <use href="#i-shield-check" />
                      </svg>
                    </span>
                    <b>Vetted & Verified</b>
                    <p>Quality, licensing, insurance and more</p>
                  </div>
                  {" "}
                  <div>
                    <span className="ic">
                      <svg width="34" height="34">
                        <use href="#i-users3" />
                      </svg>
                    </span>
                    <b>Recommended by Customers & Staff</b>
                    <p>Trusted by homeowners like you</p>
                  </div>
                  {" "}
                  <div>
                    <span className="ic">
                      <svg width="32" height="32">
                        <use href="#i-badge" />
                      </svg>
                    </span>
                    <b>Committed to Our Standards</b>
                    <p>Must follow our Code of Ethics and Professionalism</p>
                  </div>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div className="rvshot" role="img" aria-label="A ThisIsMyProperty service professional beside a branded van, captioned Trusted. Verified. Here for your home."></div>
              {" "}</div>
            {" "}
            <div className="rvsplit">
              {" "}
              <div className="rvcard">
                {" "}
                <h3 style={{ fontSize: "18px" }}>Service Providers</h3>
                {" "}
                <p className="tiny muted" style={{ marginTop: "4px" }}>Find trusted, verified professionals for your home projects and maintenance needs.</p>
                {" "}
                <div className="rvband">
                  {" "}
                  <span className="sh">
                    <svg width="20" height="20">
                      <use href="#i-shield-check" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    <b>Trusted. Verified. Always Here.</b>
                    <p>All service providers are reviewed for quality, licensing, insurance, and customer satisfaction.</p>
                  </div>
                  {" "}
                  <span className="ph"></span>
                  {" "}</div>
                {" "}
                <div className="rvcats">
                  {" "}
                  <button className="rvcat" data-stub="HVAC vendors">
                    <span className="ic">
                      <svg width="19" height="19">
                        <use href="#i-snow" />
                      </svg>
                    </span>
                    <span>HVAC</span>
                  </button>
                  {" "}
                  <button className="rvcat" data-stub="Plumbing vendors">
                    <span className="ic">
                      <svg width="19" height="19">
                        <use href="#i-drop" />
                      </svg>
                    </span>
                    <span>Plumbing</span>
                  </button>
                  {" "}
                  <button className="rvcat" data-stub="Electrical vendors">
                    <span className="ic">
                      <svg width="19" height="19">
                        <use href="#i-bolt" />
                      </svg>
                    </span>
                    <span>Electrical</span>
                  </button>
                  {" "}
                  <button className="rvcat" data-stub="Roofing vendors">
                    <span className="ic">
                      <svg width="19" height="19">
                        <use href="#i-roof" />
                      </svg>
                    </span>
                    <span>Roofing</span>
                  </button>
                  {" "}
                  <button className="rvcat" data-stub="Appliances vendors">
                    <span className="ic">
                      <svg width="19" height="19">
                        <use href="#i-appliance" />
                      </svg>
                    </span>
                    <span>Appliances</span>
                  </button>
                  {" "}
                  <button className="rvcat" data-stub="Landscaping vendors">
                    <span className="ic">
                      <svg width="19" height="19">
                        <use href="#i-leaf" />
                      </svg>
                    </span>
                    <span>Landscaping</span>
                  </button>
                  {" "}
                  <button className="rvcat" data-stub="Pest Control vendors">
                    <span className="ic">
                      <svg width="19" height="19">
                        <use href="#i-shield" />
                      </svg>
                    </span>
                    <span>Pest Control</span>
                  </button>
                  {" "}
                  <button className="rvcat" data-stub="Cleaning vendors">
                    <span className="ic">
                      <svg width="19" height="19">
                        <use href="#i-safe" />
                      </svg>
                    </span>
                    <span>Cleaning</span>
                  </button>
                  {" "}
                  <button className="rvcat" data-stub="More vendors">
                    <span className="ic">
                      <svg width="19" height="19">
                        <use href="#i-dots" />
                      </svg>
                    </span>
                    <span>More</span>
                  </button>
                  {" "}</div>
                {" "}
                <div className="rvtop">
                  {" "}
                  <h3>Top Rated Service Providers</h3>
                  {" "}
                  <span className="cnt">Showing 1–12 of 56 providers</span>
                  {" "}
                  <span className="rvsort">Sort by: Highest Rated{" "}
                    <svg width="12" height="12">
                      <use href="#i-chevd" />
                    </svg>
                  </span>
                  {" "}</div>
                {" "}
                <div className="rvprov">
                  {" "}
                  <span className="rvlogo" role="img" aria-label="Cool Air Solutions"></span>
                  {" "}
                  <div>
                    {" "}
                    <h4>Cool Air Solutions</h4>
                    {" "}
                    <div className="rvtags">
                      <span>HVAC</span>
                      <span>Air Conditioning</span>
                    </div>
                    {" "}
                    <p>Specializing in energy-efficient HVAC installations and repairs.</p>
                    {" "}
                    <div className="rvloc">
                      <svg width="13" height="13">
                        <use href="#i-pin" />
                      </svg>{" "}Tampa, FL  ·  12.4 mi</div>
                    {" "}</div>
                  {" "}
                  <div>
                    {" "}
                    <div className="rvrate">
                      <span className="num">4.9</span>
                      <span className="stars">★★★★★</span>
                      <span className="rev">(256 reviews)</span>
                    </div>
                    {" "}
                    <div className="rvchk">
                      <svg width="14" height="14">
                        <use href="#i-check" />
                      </svg>{" "}Verified</div>
                    {" "}
                    <div className="rvchk">
                      <svg width="14" height="14">
                        <use href="#i-check" />
                      </svg>{" "}Licensed & Insured</div>
                    {" "}</div>
                  {" "}
                  <div className="rvacts">
                    {" "}
                    <button className="b line" data-stub="View Cool Air Solutions profile">View Profile</button>
                    {" "}
                    <button className="b solid" data-stub="Request a quote from Cool Air Solutions">Request Quote</button>
                    {" "}</div>
                  {" "}</div>
                {" "}
                <p className="rvpreview">This is a preview.{" "}
                  <Link href="/register">Sign in</Link>{" "}to see the full list of Recommended Vendors.</p>
                {" "}</div>
              {" "}
              <div className="rvexcl">
                {" "}
                <div className="lock">
                  <svg width="30" height="30">
                    <use href="#i-lock" />
                  </svg>
                </div>
                {" "}
                <h3>Exclusive Access<br />for Our Customers</h3>
                {" "}
                <p>Our complete list of Recommended Vendors is a benefit of a paid{" "}
                  <b>ThisIsMyProperty.com account.</b>
                </p>
                {" "}
                <div className="only">Only our customers can:</div>
                {" "}
                <div className="rvonly">
                  {" "}
                  <div>
                    <i>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>
                    </i>
                    <span>Access our full list of vetted vendors</span>
                  </div>
                  {" "}
                  <div>
                    <i>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>
                    </i>
                    <span>See real reviews and ratings from fellow homeowners</span>
                  </div>
                  {" "}
                  <div>
                    <i>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>
                    </i>
                    <span>Contact vendors directly through your account</span>
                  </div>
                  {" "}</div>
                {" "}
                <Link className="btn btn-primary" href="/pricing" style={{ width: "100%", justifyContent: "center", marginTop: "18px", fontSize: "13px", textTransform: "none", letterSpacing: "0", padding: "14px" }}>View Pricing & Sign Up{" "}
                  <svg width="16" height="16">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="rvjoin">
              {" "}
              <div>
                {" "}
                <h2>How Vendors Join<br />Our Program</h2>
                {" "}
                <p>Service providers can be recommended by our customers and staff, and can also apply to join our program. All applicants undergo a strict screening process and must commit to our Code of Ethics and Professionalism.</p>
                {" "}
                <button className="btn" style={{ background: "var(--navy-deep)", color: "#fff", textTransform: "none", letterSpacing: "0", fontSize: "12.5px", padding: "13px 18px", marginTop: "18px" }} data-stub="Learn more about the vendor program">Learn More About Our Vendor Program{" "}
                  <svg width="15" height="15">
                    <use href="#i-arrow" />
                  </svg>
                </button>
                {" "}</div>
              {" "}
              <div className="rvsteps">
                {" "}
                <div className="rvstep">
                  <div className="ic">
                    <svg width="34" height="34">
                      <use href="#i-users3" />
                    </svg>
                  </div>
                  <b>Apply or<br />Be Recommended</b>
                  <p>Vendors can apply to join or be recommended by customers or our staff.</p>
                  <svg className="arw" width="16" height="16">
                    <use href="#i-chev" />
                  </svg>
                </div>
                {" "}
                <div className="rvstep">
                  <div className="ic">
                    <svg width="34" height="34">
                      <use href="#i-doc" />
                    </svg>
                  </div>
                  <b>Strict Screening</b>
                  <p>We verify licensing, insurance, references and more.</p>
                  <svg className="arw" width="16" height="16">
                    <use href="#i-chev" />
                  </svg>
                </div>
                {" "}
                <div className="rvstep">
                  <div className="ic">
                    <svg width="34" height="34">
                      <use href="#i-shield-check" />
                    </svg>
                  </div>
                  <b>Commit to Our Standards</b>
                  <p>All vendors must agree to our Code of Ethics and Professionalism.</p>
                  <svg className="arw" width="16" height="16">
                    <use href="#i-chev" />
                  </svg>
                </div>
                {" "}
                <div className="rvstep">
                  <div className="ic">
                    <svg width="34" height="34">
                      <use href="#i-star" />
                    </svg>
                  </div>
                  <b>Ongoing Review</b>
                  <p>Customer feedback helps us ensure high quality and reliability.</p>
                  <svg className="arw" width="16" height="16">
                    <use href="#i-chev" />
                  </svg>
                </div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="rvcta">
              {" "}
              <div className="ph" role="img" aria-label="A home at dusk"></div>
              {" "}
              <div className="tx">
                {" "}
                <h3>A better home starts<br />with trusted professionals.</h3>
                {" "}
                <p>Join thousands of homeowners who are taking control of their home’s health with ThisIsMyProperty.com.</p>
                {" "}
                <Link className="b" href="/pricing">Click here to learn more about our programs, benefits and pricing{" "}
                  <svg width="16" height="16">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
