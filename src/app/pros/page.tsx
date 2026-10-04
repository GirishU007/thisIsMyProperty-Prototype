// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/proto/PublicNav";
import { PublicFooter } from "@/components/proto/PublicFooter";

export const metadata: Metadata = { title: "Find a pro" };

export default function Page() {
  return (
    <div className="ux ux-pub">
      <PublicNav active="pros" />
      <section className="ux-hero sm">
        <div className="ux-hero-in">
          <div>
            <div className="ux-eyebrow">Trusted local pros</div>
            <h1 style={{ marginTop: "10px" }}>Reliable pros.{" "}
              <em>Real peace of mind.</em>
            </h1>
            <p className="lede">Members get a private directory of vetted service pros, with reviews from other homeowners nearby.</p>
            <div className="act">
              <Link className="ux-btn pri lg" href="/signup">Create my account</Link>
              <Link className="ux-btn sec lg" href="/pricing">See pricing</Link>
            </div>
          </div>
          <div className="ux-heropic hpcouple" role="img" aria-label="A couple welcoming a service professional at their door"></div>
        </div>
      </section>
      <section className="ux-sec tint">
        <div className="ux-in">
          <h2 className="ux-h2">How a pro gets on the list</h2>
          <div className="ux-grid4" style={{ marginTop: "30px" }}>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-users" />
                </svg>
              </span>
              <h3>Recommended or applies</h3>
              <p>Suggested by members and staff, or the pro applies to join.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-shield-check" />
                </svg>
              </span>
              <h3>Strict screening</h3>
              <p>We check licensing, insurance and references.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-handshake" />
                </svg>
              </span>
              <h3>Commits to our standards</h3>
              <p>Every pro signs our code of ethics and professionalism.</p>
            </div>
            <div className="ux-card ux-feat">
              <span className="ic">
                <svg width="22" height="22">
                  <use href="#i-star" />
                </svg>
              </span>
              <h3>Reviewed by members</h3>
              <p>Ongoing reviews from paying members keep the list honest.</p>
            </div>
          </div>
          <h2 className="ux-h2" style={{ marginTop: "52px" }}>From routine maintenance to major projects</h2>
          <div className="ux-chiprow">
            <span className="ux-chip">HVAC</span>
            <span className="ux-chip">Plumbing</span>
            <span className="ux-chip">Electrical</span>
            <span className="ux-chip">Roofing</span>
            <span className="ux-chip">Painting</span>
            <span className="ux-chip">Landscaping</span>
            <span className="ux-chip">Pool services</span>
            <span className="ux-chip">Repairs and handyman</span>
            <span className="ux-chip">Pest control</span>
            <span className="ux-chip">And more</span>
          </div>
        </div>
      </section>
      <section className="ux-sec">
        <div className="ux-in">
          <h2 className="ux-h2">What homeowners say</h2>
          <div className="ux-grid3" style={{ marginTop: "30px" }}>
            <div className="ux-card ux-say">
              <p>“I love having a trusted list of professionals in one place. The reviews from other homeowners are so helpful.”</p>
              <div className="who">
                <span className="av hpav0"></span>
                <span>
                  <b>Melissa R.</b>Safety Harbor, FL</span>
              </div>
            </div>
            <div className="ux-card ux-say">
              <p>“We found an amazing HVAC company through the directory. Professional, fair pricing and great service.”</p>
              <div className="who">
                <span className="av hpav1"></span>
                <span>
                  <b>David K.</b>Dunedin, FL</span>
              </div>
            </div>
            <div className="ux-card ux-say">
              <p>“I feel confident knowing the pros are vetted and reviewed by real homeowners.”</p>
              <div className="who">
                <span className="av hpav2"></span>
                <span>
                  <b>Jennifer L.</b>Palm Harbor, FL</span>
              </div>
            </div>
          </div>
          <div className="ux-final" style={{ marginTop: "52px" }}>
            <h2 className="ux-h2">Get access to the directory</h2>
            <div className="act">
              <Link className="ux-btn pri lg" href="/signup">Create my account</Link>
            </div>
          </div>
          <div className="ux-agentband">
            <b>Are you a service pro?</b>
            <span>Reach homeowners who look after their homes, and build your reputation with real reviews.</span>
            <Link className="ux-btn sec sm" href="/pros/join">Join the network</Link>
          </div>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
