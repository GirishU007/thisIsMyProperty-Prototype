// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/proto/PublicNav";
import { PublicFooter } from "@/components/proto/PublicFooter";

export const metadata: Metadata = { title: "Our mission" };

export default function Page() {
  return (
    <div className="ux ux-pub">
      <PublicNav active="mission" />
      <section className="ux-hero sm">
        <div className="ux-hero-in">
          <div>
            <div className="ux-eyebrow">Our mission: the greater good</div>
            <h1 style={{ marginTop: "10px" }}>Better data. Stronger homes.{" "}
              <em>A better future for all.</em>
            </h1>
            <p className="lede">Real-world records of how home products perform, and what they cost to replace, can make the home services industry safer, fairer and more competitive.</p>
          </div>
          <div className="ux-heropic si-legacy" role="img" aria-label="Three generations of a family in front of their home"></div>
        </div>
      </section>
      <section className="ux-sec tint">
        <div className="ux-in">
          <h2 className="ux-h2">How your data helps</h2>
          <p className="ux-h2sub">Every record you add is combined, anonymously, with thousands of others.</p>
          <div className="ux-grid3" style={{ marginTop: "30px" }}>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-shield" />
                </svg>
              </span>
              <h3>Expose planned obsolescence</h3>
              <p>Identify products designed to fail early, so people can choose better.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-chart" />
                </svg>
              </span>
              <h3>Prevent price gouging</h3>
              <p>Detect unfair pricing, especially where it targets vulnerable people or specific zip codes.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-bell" />
                </svg>
              </span>
              <h3>Support recalls</h3>
              <p>Give agencies product failure data so hazards are found and recalled faster.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-bulb" />
                </svg>
              </span>
              <h3>Improve products</h3>
              <p>Anonymized failure reports help manufacturers build things that last longer.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-heart-hand" />
                </svg>
              </span>
              <h3>Give back to homeowners</h3>
              <p>Fund local crews who help elderly and disabled homeowners, and neighbors after disasters.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-megaphone" />
                </svg>
              </span>
              <h3>Drive competition</h3>
              <p>Invest in companies that challenge the status quo with better options.</p>
            </div>
          </div>
          <div className="ux-note" style={{ marginTop: "22px" }}>
            <svg width="17" height="17">
              <use href="#i-lock" />
            </svg>
            {" "}
            <span>
              <b>Your privacy comes first.</b>{" "}All data is encrypted and aggregated. We never sell or share your personal information.</span>
          </div>
        </div>
      </section>
      <section className="ux-sec">
        <div className="ux-in">
          <h2 className="ux-h2">Reinvesting in a better tomorrow</h2>
          <div className="ux-grid3" style={{ marginTop: "30px" }}>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-hands" />
                </svg>
              </span>
              <h3>The Neighbor Fund</h3>
              <p>A capped share of profit pays local crews for yard work, snow clearing, essential repairs and disaster cleanup for neighbors who cannot do it themselves.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-rocket" />
                </svg>
              </span>
              <h3>Investing in innovation</h3>
              <p>We back new companies that bring better products and fairer pricing to the market.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-users3" />
                </svg>
              </span>
              <h3>Stronger communities</h3>
              <p>Better data leads to stronger homes, lower costs and more resilient neighborhoods.</p>
            </div>
          </div>
          <div className="ux-final" style={{ marginTop: "52px" }}>
            <h2 className="ux-h2">Every record you add helps.</h2>
            <div className="act">
              <Link className="ux-btn pri lg" href="/start">Join the movement</Link>
            </div>
          </div>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
