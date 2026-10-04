// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/proto/PublicNav";
import { PublicFooter } from "@/components/proto/PublicFooter";

export const metadata: Metadata = { title: "Brokers & teams" };

export default function Page() {
  return (
    <div className="ux ux-pub">
      <PublicNav active="brokers" />
      <section className="ux-sec tint" style={{ minHeight: "calc(100vh - 130px)" }}>
        <div className="ux-in ux-narrow" style={{ textAlign: "center" }}>
          <span className="ux-tag amber">Coming soon</span>
          <h1 className="ux-h2" style={{ fontSize: "40px", marginTop: "14px" }}>Brokers and teams: a healthier approach to homeownership.</h1>
          <p className="ux-h2sub">We are building tools for brokers and teams to serve clients better, strengthen relationships and create new opportunities.</p>
          <div className="ux-notify center" data-notify>
            <span className="ux-input">
              <svg width="18" height="18">
                <use href="#i-mail" />
              </svg>{" "}you@brokerage.com</span>
            <button className="ux-btn pri" data-act="notify">Notify me</button>
          </div>
          <p className="ux-fine">One email at launch, with features and early access.</p>
          <div className="ux-grid4" style={{ marginTop: "40px", textAlign: "left" }}>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-home-health" />
                </svg>
              </span>
              <h3>Serve clients better</h3>
              <p>Give them the tools to understand, maintain and protect their homes.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-trend" />
                </svg>
              </span>
              <h3>Create opportunities</h3>
              <p>Turn home data into deeper conversations and long-term relationships.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-users3" />
                </svg>
              </span>
              <h3>Support your team</h3>
              <p>Shared resources, team seats and roll-up reporting.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-heart-hand" />
                </svg>
              </span>
              <h3>A bigger mission</h3>
              <p>A more informed and sustainable real estate industry.</p>
            </div>
          </div>
          <p className="ux-allplans" style={{ marginTop: "28px" }}>Already an agent?{" "}
            <Link className="ux-link" href="/agents">See what agents get today</Link>
          </p>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
