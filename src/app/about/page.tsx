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
          <div className="ux-grid3 ux-founders">
            <div className="ux-card">
              <span className="avatar lg">SK</span>
              <b>Stacy Kitchell</b>
              <span>Founder & CEO</span>
            </div>
            <div className="ux-card">
              <span className="avatar lg">SU</span>
              <b>Shivi Ukarande</b>
              <span>Co-Founder & Chief Product Officer</span>
            </div>
            <div className="ux-card">
              <span className="avatar lg">GU</span>
              <b>Girish Ukarande</b>
              <span>Co-Founder & Chief Technology Officer</span>
            </div>
          </div>
          <p>Their shared values shaped the company’s mission: empower homeowners, strengthen the professionals and communities that serve them, and make giving back part of the company’s purpose.{" "}
            <Link className="ux-link" href="/mission">Read our mission →</Link>
          </p>
          <p className="close">A home needs a living record. ThisIsMyProperty is building it.</p>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
