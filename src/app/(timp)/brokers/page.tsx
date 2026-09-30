/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/17-brokers.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = { title: "Brokers & Teams" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-brokers" data-route="/brokers">
      {" "}
      <div className="pubwrap">
        {" "}
        <PublicNav active="brokers" />
        {" "}
        <div className="btcrumb">
          <Link href="/">Home</Link>
          {" "}
          <svg width="12" height="12">
            <use href="#i-chev" />
          </svg>
          {" "}
          <b style={{ color: "var(--navy)" }}>Brokers & Teams</b>
        </div>
        {" "}
        <div className="bthero">
          {" "}
          <div>
            {" "}
            <h1>Brokers & Teams</h1>
            {" "}
            <div className="btscript" role="img" aria-label="Coming soon"></div>
            {" "}
            <h2>Powering Real Estate Professionals<br />with a Healthier Approach to Homeownership.</h2>
            {" "}
            <p>We’re building powerful tools and resources for brokers, teams and real estate professionals to better serve their clients, strengthen relationships and create new opportunities.</p>
            {" "}
            <p className="back">Check back soon for more details!</p>
            {" "}</div>
          {" "}
          <div className="btshot" role="img" aria-label="A laptop on a desk beside a mug reading Homes Thrive People Do Too, under a poster reading Educate Empower Elevate Together"></div>
          {" "}</div>
        {" "}
        <div className="section-in" style={{ padding: "0 24px" }}>
          {" "}
          <div className="btvals">
            {" "}
            <div>
              {" "}
              <div className="ic">
                <svg width="38" height="38">
                  <use href="#i-handshake" />
                </svg>
              </div>
              {" "}
              <b>Serve Your Clients Better</b>
              {" "}
              <p>Give your clients the tools to understand, maintain and protect their homes.</p>
              {" "}</div>
            {" "}
            <div>
              {" "}
              <div className="ic">
                <svg width="34" height="34">
                  <use href="#i-chart" />
                </svg>
              </div>
              {" "}
              <b>Create New Opportunities</b>
              {" "}
              <p>Turn home data into deeper conversations and long-term client relationships.</p>
              {" "}</div>
            {" "}
            <div>
              {" "}
              <div className="ic">
                <svg width="36" height="36">
                  <use href="#i-users3" />
                </svg>
              </div>
              {" "}
              <b>Support Your Team</b>
              {" "}
              <p>Resources designed to help brokers and teams work smarter, together.</p>
              {" "}</div>
            {" "}
            <div>
              {" "}
              <div className="ic">
                <svg width="34" height="34">
                  <use href="#i-cog" />
                </svg>
              </div>
              {" "}
              <b>Be Part of a Bigger Mission</b>
              {" "}
              <p>Join us in creating a more informed, empowered and sustainable real estate industry.</p>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="btnotify">
            {" "}
            <div className="env">
              <svg width="28" height="28">
                <use href="#i-mail" />
              </svg>
            </div>
            {" "}
            <div>
              {" "}
              <b>Want to be the first to know?</b>
              {" "}
              <p>Sign up to receive updates on our Brokers & Teams program launch, including features, benefits and early access opportunities.</p>
              {" "}</div>
            {" "}
            <div className="r">
              <button className="btn btn-primary" data-stub={"Notify me about Brokers & Teams"}>Notify Me{" "}
                <svg width="16" height="16">
                  <use href="#i-arrow" />
                </svg>
              </button>
            </div>
            {" "}</div>
          {" "}
          <div className="btquote" role="img" aria-label="A healthier housing future is better — together."></div>
          {" "}</div>
        {" "}
        <PublicFooter />
        {" "}</div>
    </section>
  );
}
