// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/proto/PublicNav";
import { PublicFooter } from "@/components/proto/PublicFooter";

export const metadata: Metadata = { title: "Pricing" };

export default function Page() {
  return (
    <div className="ux ux-pub">
      <PublicNav active="pricing" />
      <section className="ux-sec tint" style={{ minHeight: "calc(100vh - 130px)" }}>
        <div className="ux-in" style={{ textAlign: "center" }}>
          <div className="ux-audience">
            <Link className="is-on" href="/pricing">Homeowners</Link>
            <Link href="/pricing/agents">Agents</Link>
          </div>
          <h1 className="ux-h2" style={{ fontSize: "38px" }}>Start free. Upgrade when you’re ready.</h1>
          <p className="ux-h2sub">Your Vault and your data come with you on every plan.</p>
          <div className="ux-cycle" role="group" aria-label="Billing">
            <button className="is-on" data-cycle="m">Monthly</button>
            <button data-cycle="y">Yearly{" "}
              <small>save 14%</small>
            </button>
          </div>
          <div className="ux-plans" style={{ textAlign: "left" }}>
            <div className="ux-card ux-plan">
              <h3>Basic</h3>
              <p className="ux-for">The essentials, for one home.</p>
              <div className="ux-price num">$0</div>
              <div className="ux-bill">Free, for as long as you like</div>
              <ul>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Dashboard and Home Health Score</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}The Vault for all your documents</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Warranty and insurance reminders</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}2 price estimates a year</li>
              </ul>
              <button className="ux-btn sec block" data-go="/signup">Start free</button>
            </div>
            <div className="ux-card ux-plan ux-pop">
              <span className="ux-tag teal ux-badge" style={{ background: "var(--teal-deep)", color: "#fff" }}>Most popular</span>
              <h3>Plus</h3>
              <p className="ux-for">Deeper insight and downloads, for one home.</p>
              <div className="ux-price num">
                <span data-price="a" data-m="$29" data-y="$25">$29</span>
                <small data-per>{" "}/ month</small>
              </div>
              <div className="ux-bill" data-bill data-m="Billed monthly. Cancel anytime." data-y="$300 billed once a year.">Billed monthly. Cancel anytime.</div>
              <ul>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Everything in Basic</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Detailed score for every system</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Certified PDF and Excel reports</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}2 price estimates a month</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Free transfer to the next owner</li>
              </ul>
              <button className="ux-btn pri block" data-go="/signup">Start free, upgrade later</button>
            </div>
            <div className="ux-card ux-plan">
              <h3>Premium</h3>
              <p className="ux-for">For up to four homes on one account.</p>
              <div className="ux-price num">
                <span data-price="b" data-m="$49" data-y="$42">$49</span>
                <small data-per>{" "}/ month</small>
              </div>
              <div className="ux-bill" data-bill data-m="Billed monthly. Cancel anytime." data-y="$500 billed once a year.">Billed monthly. Cancel anytime.</div>
              <ul>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Everything in Plus</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Up to 4 properties</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Reporting across all your homes</li>
                <li>
                  <svg width="17" height="17">
                    <use href="#i-check" />
                  </svg>{" "}Agent access, only with your permission</li>
              </ul>
              <button className="ux-btn sec block" data-go="/signup">Start free, upgrade later</button>
            </div>
          </div>
          <p className="ux-allplans">
            <b>On every plan:</b>{" "}bank-level encryption, your contact details are never sold, cancel anytime.</p>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
