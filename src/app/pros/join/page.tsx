// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { PublicNav } from "@/components/proto/PublicNav";
import { PublicFooter } from "@/components/proto/PublicFooter";

export const metadata: Metadata = { title: "For service pros" };

export default function Page() {
  return (
    <div className="ux ux-pub">
      <PublicNav active="pros" />
      <section className="ux-hero sm">
        <div className="ux-hero-in">
          <div>
            <span className="ux-tag amber">Coming soon</span>
            <h1 style={{ marginTop: "12px" }}>Service pros:{" "}
              <em>partner for a stronger tomorrow.</em>
            </h1>
            <p className="lede">Connect with homeowners who plan ahead, grow your business, and be part of a platform that is changing how people care for their homes.</p>
            <div className="ux-notify" data-notify>
              <span className="ux-input">
                <svg width="18" height="18">
                  <use href="#i-mail" />
                </svg>{" "}you@yourbusiness.com</span>
              <button className="ux-btn pri" data-act="notify">Tell me when it opens</button>
            </div>
            <p className="fine">We are finalizing account options and pricing. One email when the program opens.</p>
          </div>
          <div className="ux-heropic spvan" role="img" aria-label="A service professional beside a work van"></div>
        </div>
      </section>
      <section className="ux-sec tint">
        <div className="ux-in">
          <h2 className="ux-h2">Why join</h2>
          <div className="ux-grid4" style={{ marginTop: "30px" }}>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-users" />
                </svg>
              </span>
              <h3>Reach motivated clients</h3>
              <p>Homeowners who value looking after their home before things break.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-trend" />
                </svg>
              </span>
              <h3>Grow your business</h3>
              <p>More visibility and a steady flow of quote requests.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-star" />
                </svg>
              </span>
              <h3>Show your expertise</h3>
              <p>Build credibility with reviews from verified members.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-heart-hand" />
                </svg>
              </span>
              <h3>Part of the greater good</h3>
              <p>Help people protect their biggest investment.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="ux-sec">
        <div className="ux-in ux-narrow">
          <h2 className="ux-h2">How the program will work</h2>
          <ol className="ux-timeline">
            <li>
              <span className="n">1</span>
              <div>
                <h3>Application and screening</h3>
                <p>Every pro goes through a strict vetting process: licensing, insurance and references.</p>
              </div>
            </li>
            <li>
              <span className="n">2</span>
              <div>
                <h3>Commitment to excellence</h3>
                <p>You agree to our code of ethics and professionalism.</p>
              </div>
            </li>
            <li>
              <span className="n">3</span>
              <div>
                <h3>Listed and reviewed</h3>
                <p>Only verified pros are listed. Reviews come from paying members.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
