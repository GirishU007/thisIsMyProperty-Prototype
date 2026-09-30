/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/30-ho-resources.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Resources" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-resources" data-route="/ho/resources">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="ho" active="resources" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar agbar">
            <MenuButton />
            {" "}
            <span className="agsearch">
              <svg width="15" height="15">
                <use href="#i-search" />
              </svg>{" "}Search resources, blogs, videos or tips…</span>
            {" "}
            <div className="appbar-right">
              {" "}
              <Link className="iconbtn" href="/ho/alerts">
                <svg width="18" height="18">
                  <use href="#i-bell" />
                </svg>
                <span className="dot num">2</span>
              </Link>
              {" "}
              <button className="iconbtn" data-stub="Help centre">
                <svg width="18" height="18">
                  <use href="#i-help" />
                </svg>
              </button>
              {" "}
              <div className="avatar">JS</div>
              {" "}
              <span className="who-mini">Hi, Jane{" "}
                <svg width="13" height="13" style={{ color: "var(--slate)" }}>
                  <use href="#i-chevd" />
                </svg>
              </span>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="content">
            {" "}
            <div className="pagehead">
              {" "}
              <div>
                {" "}
                <div className="crumb">
                  <Link href="/ho">My Dashboard</Link>
                  {" "}
                  <svg width="12" height="12">
                    <use href="#i-chev" />
                  </svg>
                  {" "}
                  <b>Resources</b>
                </div>
                {" "}
                <h1>Resources</h1>
                {" "}
                <div className="sub">Expert advice, helpful tips, and trusted information for homeowners.</div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="knowbar">
              {" "}
              <span className="orb">
                <svg width="28" height="28">
                  <use href="#i-home" />
                </svg>
              </span>
              {" "}
              <div className="m">
                <b>Knowledge is power.</b>
                <p>Stay informed and make confident decisions about your home.</p>
              </div>
              {" "}
              <span className="rbanner"></span>
              {" "}</div>
            {" "}
            <div className="rescards">
              {" "}
              <div className="rescard">
                {" "}
                <div className="rescard-h">
                  <span className="orb" style={{ background: "#0F8280" }}>
                    <svg width="20" height="20">
                      <use href="#i-doc" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    <b>1. Blogs</b>
                    <p>Expert insights, how-to guides, and seasonal advice to help you care for your home.</p>
                  </div>
                </div>
                {" "}
                <span className="rimg rimg-rblog"></span>
                {" "}
                <button className="reslink" data-stub="Spring Home Maintenance Checklist">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--teal-deep)" }}>
                    <use href="#i-doc" />
                  </svg>{" "}Spring Home Maintenance Checklist{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="reslink" data-stub="How to Extend the Life of Your Roof">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--teal-deep)" }}>
                    <use href="#i-doc" />
                  </svg>{" "}How to Extend the Life of Your Roof{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="reslink" data-stub="Understanding Your Home's Systems">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--teal-deep)" }}>
                    <use href="#i-doc" />
                  </svg>{" "}Understanding Your Home’s Systems{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="resbtn" style={{ color: "var(--teal-deep)" }} data-stub="View All Blogs">View All Blogs →</button>
                {" "}</div>
              {" "}
              <div className="rescard">
                {" "}
                <div className="rescard-h">
                  <span className="orb" style={{ background: "#6D5BD0" }}>
                    <svg width="20" height="20">
                      <use href="#i-megaphone" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    <b>2. Podcasts</b>
                    <p>Listen on the go to expert interviews and practical advice for homeowners.</p>
                  </div>
                </div>
                {" "}
                <span className="rimg rimg-rpod"></span>
                {" "}
                <button className="reslink" data-stub="Smart Homeowner Podcast: Ep. 23">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--violet)" }}>
                    <use href="#i-chev" />
                  </svg>{" "}Smart Homeowner Podcast: Ep. 23{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="reslink" data-stub="Preventative Maintenance Matters">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--violet)" }}>
                    <use href="#i-chev" />
                  </svg>{" "}Preventative Maintenance Matters{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="reslink" data-stub="Ask the Expert: Home Systems 101">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--violet)" }}>
                    <use href="#i-chev" />
                  </svg>{" "}Ask the Expert: Home Systems 101{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="resbtn" style={{ color: "var(--violet)" }} data-stub="View All Podcasts">View All Podcasts →</button>
                {" "}</div>
              {" "}
              <div className="rescard">
                {" "}
                <div className="rescard-h">
                  <span className="orb" style={{ background: "#1C7FD6" }}>
                    <svg width="20" height="20">
                      <use href="#i-eye" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    <b>3. Helpful Homeowner Videos</b>
                    <p>Step-by-step videos to help you understand and maintain your home.</p>
                  </div>
                </div>
                {" "}
                <span className="rimg rimg-rvid"></span>
                {" "}
                <button className="reslink" data-stub="How Your HVAC System Works">
                  <svg className="ic" width="15" height="15" style={{ color: "#1C7FD6" }}>
                    <use href="#i-chev" />
                  </svg>{" "}How Your HVAC System Works{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="reslink" data-stub="Cleaning Your Gutters the Right Way">
                  <svg className="ic" width="15" height="15" style={{ color: "#1C7FD6" }}>
                    <use href="#i-chev" />
                  </svg>{" "}Cleaning Your Gutters the Right Way{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="reslink" data-stub="Detecting Water Leaks Early">
                  <svg className="ic" width="15" height="15" style={{ color: "#1C7FD6" }}>
                    <use href="#i-chev" />
                  </svg>{" "}Detecting Water Leaks Early{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="resbtn" style={{ color: "#1C7FD6" }} data-stub="View All Videos">View All Videos →</button>
                {" "}</div>
              {" "}
              <div className="rescard">
                {" "}
                <div className="rescard-h">
                  <span className="orb" style={{ background: "#E08A1E" }}>
                    <svg width="20" height="20">
                      <use href="#i-help" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    <b>4. FAQs About Homeownership</b>
                    <p>Answers to the most common questions homeowners ask.</p>
                  </div>
                </div>
                {" "}
                <span className="rimg rimg-rfaq"></span>
                {" "}
                <button className="reslink" data-stub="How often should I service my HVAC system?">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--amber)" }}>
                    <use href="#i-arrow" />
                  </svg>{" "}How often should I service my HVAC system?{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="reslink" data-stub="What is a home warranty?">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--amber)" }}>
                    <use href="#i-arrow" />
                  </svg>{" "}What is a home warranty?{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="reslink" data-stub="How can I improve my home's energy efficiency?">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--amber)" }}>
                    <use href="#i-arrow" />
                  </svg>{" "}How can I improve my home’s energy efficiency?{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="resbtn" style={{ color: "var(--amber)" }} data-stub="View All FAQs">View All FAQs →</button>
                {" "}</div>
              {" "}
              <div className="rescard">
                {" "}
                <div className="rescard-h">
                  <span className="orb" style={{ background: "#2E8B57" }}>
                    <svg width="20" height="20">
                      <use href="#i-dollar" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    <b>5. Quick & Easy Money-saving Tips</b>
                    <p>Practical tips you can use today to save money and protect your home.</p>
                  </div>
                </div>
                {" "}
                <span className="rimg rimg-rtips"></span>
                {" "}
                <button className="reslink" data-stub="Seal air leaks and save on energy bills">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--green)" }}>
                    <use href="#i-check" />
                  </svg>{" "}Seal air leaks and save on energy bills{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="reslink" data-stub="Insulate your water heater">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--green)" }}>
                    <use href="#i-check" />
                  </svg>{" "}Insulate your water heater{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="reslink" data-stub="Fix small leaks before they get costly">
                  <svg className="ic" width="15" height="15" style={{ color: "var(--green)" }}>
                    <use href="#i-check" />
                  </svg>{" "}Fix small leaks before they get costly{" "}
                  <svg className="chev" width="13" height="13">
                    <use href="#i-chev" />
                  </svg>
                </button>
                {" "}
                <button className="resbtn" style={{ color: "var(--green)" }} data-stub="View All Tips">View All Tips →</button>
                {" "}</div>
              {" "}
              <div style={{ display: "grid", gap: "14px" }}>
                {" "}
                <div className="infocard">
                  <svg className="ic" width="26" height="26">
                    <use href="#i-shield-check" />
                  </svg>
                  {" "}
                  <div>
                    <b>Trusted. Verified. Always Here.</b>
                    <p>Our content is created and reviewed by trusted experts so you can feel confident in every decision.</p>
                  </div>
                </div>
                {" "}
                <div className="infocard">
                  <svg className="ic" width="26" height="26">
                    <use href="#i-mail" />
                  </svg>
                  {" "}
                  <div>
                    <b>Have a topic you’d like us to cover?</b>
                    <p>Let us know!</p>
                    {" "}
                    <button className="resbtn" style={{ color: "var(--teal-deep)", marginTop: "10px" }} data-stub="Send Suggestion">Send Suggestion →</button>
                  </div>
                </div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="tipbar">
              {" "}
              <svg className="ic" width="28" height="28">
                <use href="#i-star" />
              </svg>
              {" "}
              <b>More resources coming soon!</b>
              {" "}
              <p>We’re always adding new content to help you be the best homeowner you can be.</p>
              {" "}
              <button className="btn-pill" data-stub="Check Back Soon">Check Back Soon{" "}
                <svg width="13" height="13">
                  <use href="#i-arrow" />
                </svg>
              </button>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
