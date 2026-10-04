// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/proto/PublicNav";
import { PublicFooter } from "@/components/proto/PublicFooter";

export const metadata: Metadata = { title: "Agent pricing" };

export default function Page() {
  return (
    <div className="ux ux-pub">
      <PublicNav active="pricing-agents" />
      <section className="ux-sec tint" style={{ minHeight: "calc(100vh - 130px)" }}>
        <div className="ux-in" style={{ textAlign: "center" }}>
          <div className="ux-audience">
            <Link href="/pricing">Homeowners</Link>
            <Link className="is-on" href="/pricing/agents">Agents</Link>
          </div>
          <h1 className="ux-h2" style={{ fontSize: "38px" }}>Start free. Grow into it.</h1>
          <p className="ux-h2sub">Every plan covers unlimited client homes. Your client list stays private.</p>
          <div className="ux-cycle" role="group" aria-label="Billing">
            <button className="is-on" data-cycle="m">Monthly</button>
            <button data-cycle="y">Yearly</button>
          </div>
          <div className="ux-plans" style={{ textAlign: "left" }}>
            <div className="ux-card ux-plan">
              <h3>Realtor-Basic</h3>
              <p className="ux-for">Try the platform and gift a Vault to a client.</p>
              <div className="ux-price num">$0</div>
              <div className="ux-bill">Free, for as long as you like</div>
              <ul>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Vault storage for client documents</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Free upload link for clients</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Branded Home Improvement Summary reports</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}1 price estimate per 25 verified uploads</li>
              </ul>
              <Link className="ux-btn sec block" href="/signup/agent">Start free</Link>
            </div>
            <div className="ux-card ux-plan ux-pop">
              <span className="ux-tag teal ux-badge" style={{ background: "var(--teal-deep)", color: "#fff" }}>Most popular</span>
              <h3>Realtor-Premium</h3>
              <p className="ux-for">Stay in touch with every client from one place.</p>
              <div className="ux-price num">
                <span data-price="a" data-m="$49" data-y="$1,000">$49</span>
                <small data-per data-m=" / month" data-y=" / year">{" "}/ month</small>
              </div>
              <div className="ux-bill" data-bill data-m="Introductory price. Cancel anytime." data-y="Billed once a year.">Introductory price. Cancel anytime.</div>
              <ul>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Everything in Realtor-Basic</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Agent dashboard with client alerts</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Branded client reports for listings</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}25 price estimates a month</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}10% off memberships you gift</li>
              </ul>
              <Link className="ux-btn pri block" href="/signup/agent">Start free, upgrade later</Link>
            </div>
            <div className="ux-card ux-plan">
              <h3>Realtor Pro</h3>
              <p className="ux-for">A lead-generation engine for an active book of clients.</p>
              <div className="ux-price num">
                <span data-price="b" data-m="$199" data-y="$2,000">$199</span>
                <small data-per data-m=" / month" data-y=" / year">{" "}/ month</small>
              </div>
              <div className="ux-bill" data-bill data-m="Billed monthly. Cancel anytime." data-y="Billed once a year. Save 16%.">Billed monthly. Cancel anytime.</div>
              <ul>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Everything in Realtor-Premium</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}MLS listing landing page</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Automatic email campaigns and social assets</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}50 price estimates a month</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}20% off memberships you gift</li>
              </ul>
              <Link className="ux-btn sec block" href="/signup/agent">Start free, upgrade later</Link>
            </div>
          </div>
          <p className="ux-allplans">
            <b>On every plan:</b>{" "}client phone numbers and emails are never sold or shared, certified data and reports, extra estimates at $25 each.</p>
          <div className="ux-card" style={{ marginTop: "28px", textAlign: "left" }}>
            <h3 style={{ fontSize: "18px" }}>Advertising add-ons{" "}
              <span className="ux-muted" style={{ fontWeight: "500", fontSize: "14.5px" }}>· Realtor Pro only</span>
            </h3>
            <div className="ux-tablewrap">
              <table className="ux-table">
                <tbody>
                  <tr>
                    <td>Preferred vendors page on the website</td>
                    <td className="num r">$39</td>
                  </tr>
                  <tr>
                    <td>Weekly Facebook ad, image only</td>
                    <td className="num r">$49</td>
                  </tr>
                  <tr>
                    <td>Featured Facebook / Instagram vendor, video under 2 minutes</td>
                    <td className="num r">$89</td>
                  </tr>
                  <tr>
                    <td>Featured Facebook / Instagram vendor, 5 to 10 minute video reposted weekly for a month</td>
                    <td className="num r">$399</td>
                  </tr>
                  <tr>
                    <td>Featured vendor podcast, 45 minutes, with promo video, 2 emails and YouTube</td>
                    <td className="num r">$1,499</td>
                  </tr>
                  <tr>
                    <td>Featured vendor postcard{" "}
                      <span className="ux-muted">(check RESPA rules)</span>
                    </td>
                    <td className="r">Contact sales</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="ux-agentband">
            <b>Running a brokerage or team?</b>
            <span>Team seats, roll-up reporting and onboarding support, with volume pricing.</span>
            <Link className="ux-btn sec sm" href="/brokers">Brokers & teams</Link>
          </div>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
