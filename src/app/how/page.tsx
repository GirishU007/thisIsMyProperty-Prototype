// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/proto/PublicNav";
import { PublicFooter } from "@/components/proto/PublicFooter";

export const metadata: Metadata = { title: "How it works" };

export default function Page() {
  return (
    <div className="ux ux-pub">
      <PublicNav active="how" />
      <section className="ux-hero sm">
        <div className="ux-hero-in">
          <div>
            <div className="ux-eyebrow">How it works</div>
            <h1 style={{ marginTop: "10px" }}>A smarter way to care for one of your biggest investments.</h1>
            <p className="lede">Understand, maintain, protect and document your home in one secure place. Most people are set up in about five minutes.</p>
            <div className="act">
              <Link className="ux-btn pri lg" href="/signup">Check my home’s health, free</Link>
              <Link className="ux-btn sec lg" href="/pricing">See pricing</Link>
            </div>
          </div>
          <div className="ux-heropic si-vault" role="img" aria-label="A homeowner photographing a receipt with a phone"></div>
        </div>
      </section>
      <section className="ux-sec tint">
        <div className="ux-in ux-narrow">
          <h2 className="ux-h2">From sign-up to your first insight</h2>
          <ol className="ux-timeline">
            <li>
              <span className="n">1</span>
              <div>
                <h3>Create your account</h3>
                <p>Name, email and a password. Everyone starts on the free plan.</p>
              </div>
            </li>
            <li>
              <span className="n">2</span>
              <div>
                <h3>Add your property</h3>
                <p>Type your address. We fill in what public records already know, and you confirm it.</p>
              </div>
            </li>
            <li>
              <span className="n">3</span>
              <div>
                <h3>Build your Vault</h3>
                <p>Snap or upload receipts, warranties, service records and inspection reports. We read each one and file it under the right system.</p>
              </div>
            </li>
            <li>
              <span className="n">4</span>
              <div>
                <h3>Get your score and reminders</h3>
                <p>See a health score for every major system, and get a heads-up for maintenance, expiring warranties and product recalls.</p>
              </div>
            </li>
            <li>
              <span className="n">5</span>
              <div>
                <h3>Act with confidence</h3>
                <p>Check a fair local price before you hire, and book a vetted pro from the same screen.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="ux-sec">
        <div className="ux-in">
          <h2 className="ux-h2">Everything in one place</h2>
          <p className="ux-h2sub">Five areas. Each one answers a single question.</p>
          <div className="ux-grid3" style={{ marginTop: "30px" }}>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-home" />
                </svg>
              </span>
              <h3>Dashboard</h3>
              <p>How is my home doing, and what should I do next?</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-bell" />
                </svg>
              </span>
              <h3>To do</h3>
              <p>What needs me, and how urgent is it?</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-home-health" />
                </svg>
              </span>
              <h3>Home health</h3>
              <p>Which systems are strong, which are wearing out, and why?</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-folder" />
                </svg>
              </span>
              <h3>Vault</h3>
              <p>Where is that receipt, warranty or manual?</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-dollar" />
                </svg>
              </span>
              <h3>Costs & estimates</h3>
              <p>What should this job cost around here?</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-users" />
                </svg>
              </span>
              <h3>Find a pro</h3>
              <p>Who can I trust to do it?</p>
            </div>
          </div>
          <div className="ux-final" style={{ marginTop: "52px" }}>
            <h2 className="ux-h2">Ready to see your home’s score?</h2>
            <div className="act">
              <Link className="ux-btn pri lg" href="/signup">Check my home’s health, free</Link>
            </div>
            <p className="ux-fine">Free for one home. No credit card.</p>
          </div>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
