// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/proto/PublicNav";
import { PublicFooter } from "@/components/proto/PublicFooter";

export const metadata: Metadata = { title: "About us" };

export default function Page() {
  return (
    <div className="ux ux-pub">
      <PublicNav active="about" />
      <section className="ux-sec">
        <div className="ux-in ux-narrow ux-story">
          <div className="ux-eyebrow">About us</div>
          <h1>Our story</h1>
          <p className="lede">The idea behind ThisIsMyProperty began nearly 20 years before the company did.</p>
          <p>As a Tampa Bay real estate professional, Stacy Kitchell started keeping records of the improvements her clients made to their homes, with their permission: roofs, HVAC systems, water heaters, electrical work, renovations and what each one cost. Those records helped her show buyers the value of a home’s upgrades, and gave owners real-world guidance on what it costs to maintain and improve a property.</p>
          <p>But she saw the same problem again and again. A home’s history was scattered across receipts, emails, folders and memories, and much of it disappeared when the home changed hands.</p>
          <p>In 2016, Shivi and Girish bought their first home with Stacy’s help. When they sold it in 2021 before moving to Montpellier, France, they saw her documentation process firsthand. Over the years, the client relationship grew into a close friendship.</p>
          <p>In October 2025, over lunch near the Mediterranean, Stacy asked them a question:</p>
          <blockquote>“What if every homeowner had one place to preserve, understand and manage the history and health of their home?”</blockquote>
          <p>In March 2026, the three began building the answer. What started as a way to document home improvements became ThisIsMyProperty, a platform that helps homeowners organize, maintain, improve and understand one of their most important investments.</p>
          <p>Their shared values shaped the company’s mission: empower homeowners, strengthen the professionals and communities that serve them, and make giving back part of the company’s purpose.{" "}
            <Link className="ux-link" href="/mission">Read our mission →</Link>
          </p>
        </div>
      </section>
      <section className="ux-sec tint">
        <div className="ux-in">
          <div className="ux-eyebrow">Team</div>
          <h2 className="ux-h2" style={{ textAlign: "left", marginTop: "8px" }}>Built by people who’ve lived the problem.</h2>
          <div className="ux-grid3 ux-team">
            <div className="ux-card ux-member">
              <div className="top">
                <span className="ph team-stacy" role="img" aria-label="Stacy Kitchell"></span>
                <div>
                  <h3>Stacy Kitchell</h3>
                  <span className="role">Founder & CEO</span>
                </div>
              </div>
              <p>35+ years across real estate sales and investing, finance, enterprise technology and entrepreneurship. Leads fundraising, partnerships and go-to-market.</p>
              <a className="ux-link" href="https://www.linkedin.com/in/stacy-kitchell-2065903a" target="_blank" rel="noopener noreferrer">linkedin.com/in/stacy-kitchell-2065903a</a>
            </div>
            <div className="ux-card ux-member">
              <div className="top">
                <span className="ph team-shivi" role="img" aria-label="Shivi Ukarande"></span>
                <div>
                  <h3>Shivi Ukarande</h3>
                  <span className="role">Co-Founder & CPO</span>
                </div>
              </div>
              <p>Investment banker with deep customer-experience expertise. Leads product strategy and the end-to-end customer experience. Co-Founder of Heirportal.</p>
              <a className="ux-link" href="https://www.linkedin.com/in/shivi-ukarande-2295a01" target="_blank" rel="noopener noreferrer">linkedin.com/in/shivi-ukarande-2295a01</a>
            </div>
            <div className="ux-card ux-member">
              <div className="top">
                <span className="ph team-girish" role="img" aria-label="Girish Ukarande"></span>
                <div>
                  <h3>Girish Ukarande</h3>
                  <span className="role">Co-Founder & CTO</span>
                </div>
              </div>
              <p>20+ years leading enterprise platform strategy, architecture and engineering in complex, regulated environments. Leads technology, reliability and scale.</p>
              <a className="ux-link" href="https://www.linkedin.com/in/girishukarande" target="_blank" rel="noopener noreferrer">linkedin.com/in/girishukarande</a>
            </div>
          </div>
          <div className="ux-banner">
            <b>A home needs a living record. ThisIsMyProperty is building it.</b>
            <span>ThisIsMyProperty.com</span>
          </div>
          <p className="ux-fine" style={{ textAlign: "left", marginTop: "16px" }}>The idea began with Stacy’s nearly 20 years documenting client homes in Tampa Bay.</p>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
