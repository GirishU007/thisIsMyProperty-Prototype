/* eslint-disable @next/next/no-img-element */
// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/proto/PublicNav";
import { PublicFooter } from "@/components/proto/PublicFooter";

export const metadata: Metadata = { title: "For agents" };

export default function Page() {
  return (
    <div className="ux ux-pub">
      <PublicNav active="agents" />
      <section className="ux-hero sm">
        <div className="ux-hero-in">
          <div>
            <div className="ux-eyebrow">For real estate agents</div>
            <h1 style={{ marginTop: "10px" }}>More than a closing.{" "}
              <em>A relationship that lasts.</em>
            </h1>
            <p className="lede">Give every client a Property Vault at closing. They use it all year, and you stay the agent they call for the next move.</p>
            <div className="act">
              <Link className="ux-btn pri lg" href="/signup/agent">Start free as an agent</Link>
              <Link className="ux-btn sec lg" href="/pricing/agents">See agent pricing</Link>
            </div>
            <p className="fine">Free to start. No credit card.</p>
          </div>
          <img className="ux-heroimg" src="/images/timp/agents-agdevice.jpg" alt="The agent dashboard shown on a laptop" />
        </div>
      </section>
      <section className="ux-sec tint">
        <div className="ux-in">
          <h2 className="ux-h2">Agents who stay in touch earn the next move.</h2>
          <div className="ux-stats">
            <div>
              <b className="num">3x</b>
              <span>more repeat and referral business</span>
            </div>
            <div>
              <b className="num">2.5x</b>
              <span>more likely to be used again when clients move</span>
            </div>
            <div>
              <b className="num">90%</b>
              <span>of clients value hearing from their agent</span>
            </div>
          </div>
        </div>
      </section>
      <section className="ux-sec">
        <div className="ux-in ux-narrow">
          <h2 className="ux-h2">How it works for you</h2>
          <ol className="ux-timeline">
            <li>
              <span className="n">1</span>
              <div>
                <h3>Give it at closing</h3>
                <p>A free Property Vault is a closing gift your clients keep using.</p>
              </div>
            </li>
            <li>
              <span className="n">2</span>
              <div>
                <h3>Stay in their world</h3>
                <p>They get useful reminders and tips with your name on them.</p>
              </div>
            </li>
            <li>
              <span className="n">3</span>
              <div>
                <h3>Reach out with a reason</h3>
                <p>A recall, an overdue service or a jump in value gives you something real to say.</p>
              </div>
            </li>
            <li>
              <span className="n">4</span>
              <div>
                <h3>Win the next move</h3>
                <p>When they are ready to buy or sell, they call the agent who was there all along.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="ux-sec tint">
        <div className="ux-in">
          <h2 className="ux-h2">The tools you get</h2>
          <div className="ux-grid4" style={{ marginTop: "30px" }}>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-home" />
                </svg>
              </span>
              <h3>Today</h3>
              <p>Which clients to contact today, and why.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-case" />
                </svg>
              </span>
              <h3>Client vaults</h3>
              <p>Every home your clients have shared with you.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-bell" />
                </svg>
              </span>
              <h3>Alerts</h3>
              <p>Maintenance, recalls and warranties across your clients.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-megaphone" />
                </svg>
              </span>
              <h3>Marketing</h3>
              <p>Ready-made emails, posts and flyers.</p>
            </div>
          </div>
          <div className="ux-proof" style={{ marginTop: "40px" }}>
            <div className="q">
              <blockquote>“The Property Vault changed the way I stay in touch with my clients. They love the value, and I love the referrals.”</blockquote>
              <div className="who">
                <b style={{ color: "#fff" }}>Jessica M.</b>{" "}· Realtor®, Tampa Bay</div>
            </div>
            <div className="pic" style={{ backgroundImage: "url('/images/timp/agents-agdevice-2.jpg')" }} role="img" aria-label="Marketing Center on a laptop beside a client reminder on a phone"></div>
          </div>
          <div className="ux-final" style={{ marginTop: "52px" }}>
            <h2 className="ux-h2">Turn every closing into the start of the next one.</h2>
            <div className="act">
              <Link className="ux-btn pri lg" href="/signup/agent">Start free as an agent</Link>
              <Link className="ux-btn sec lg" href="/agent">See the agent view</Link>
            </div>
          </div>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
