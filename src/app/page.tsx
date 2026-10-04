/* eslint-disable @next/next/no-img-element */
// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { PublicNav } from "@/components/proto/PublicNav";
import { PublicFooter } from "@/components/proto/PublicFooter";

export const metadata: Metadata = { title: { absolute: "ThisIsMyProperty.com — Your home’s health at your fingertips" } };

export default function Page() {
  return (
    <div className="ux ux-pub">
      <PublicNav active="home" />
      <section className="ux-hero">
        <div className="ux-hero-in">
          <div>
            <div className="ux-eyebrow">For homeowners</div>
            <h1 style={{ marginTop: "10px" }}>Know your home’s health.{" "}
              <em>See what’s coming next.</em>
            </h1>
            <p className="lede">One place for your home’s records, a health score for every major system, and a heads-up before small jobs become expensive repairs.</p>
            <div className="act">
              <button className="ux-btn pri lg" data-go="/signup">Check my home’s health, free</button>
              <button className="ux-btn sec lg" data-scroll="how">See how it works</button>
            </div>
            <p className="fine">Free for one home. No credit card.</p>
          </div>
          <div className="shot" role="img" aria-label="The ThisIsMyProperty dashboard on a laptop and a phone"></div>
        </div>
      </section>
      <section className="ux-sec tint">
        <div className="ux-in">
          <h2 className="ux-h2">You know your car’s health better than your home’s.</h2>
          <div className="ux-vs">
            <div className="ux-card yes">
              <h3>
                <svg width="20" height="20">
                  <use href="#i-car" />
                </svg>{" "}Your car</h3>
              <ul>
                <li>
                  <svg width="18" height="18">
                    <use href="#i-check" />
                  </svg>{" "}Full service history</li>
                <li>
                  <svg width="18" height="18">
                    <use href="#i-check" />
                  </svg>{" "}Known mileage and condition</li>
                <li>
                  <svg width="18" height="18">
                    <use href="#i-check" />
                  </svg>{" "}Alerts before things fail</li>
                <li>
                  <svg width="18" height="18">
                    <use href="#i-check" />
                  </svg>{" "}A trusted record at resale</li>
              </ul>
            </div>
            <div className="ux-card no">
              <h3>
                <svg width="20" height="20">
                  <use href="#i-home" />
                </svg>{" "}Your home</h3>
              <ul>
                <li>
                  <svg width="18" height="18">
                    <use href="#i-x" />
                  </svg>{" "}No service history</li>
                <li>
                  <svg width="18" height="18">
                    <use href="#i-x" />
                  </svg>{" "}Unknown system conditions</li>
                <li>
                  <svg width="18" height="18">
                    <use href="#i-x" />
                  </svg>{" "}No warning before a failure</li>
                <li>
                  <svg width="18" height="18">
                    <use href="#i-x" />
                  </svg>{" "}Nothing transfers at resale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ux-sec">
        <div className="ux-in ux-house">
          <div>
            <div className="ux-eyebrow">Try it</div>
            <h2 style={{ marginTop: "8px" }}>Every system in your home gets a score.</h2>
            <p>Pick a system to see what ThisIsMyProperty tracks for it.</p>
            <div className="ux-syschips" id="home-chips">
              <button className="ux-syschip is-on" data-sys="roof">
                <svg width="16" height="16">
                  <use href="#i-roof" />
                </svg>{" "}Roof</button>
              <button className="ux-syschip" data-sys="hvac">
                <svg width="16" height="16">
                  <use href="#i-snow" />
                </svg>{" "}HVAC</button>
              <button className="ux-syschip" data-sys="plumbing">
                <svg width="16" height="16">
                  <use href="#i-pipe" />
                </svg>{" "}Plumbing</button>
              <button className="ux-syschip" data-sys="electrical">
                <svg width="16" height="16">
                  <use href="#i-bolt" />
                </svg>{" "}Electrical</button>
              <button className="ux-syschip" data-sys="water">
                <svg width="16" height="16">
                  <use href="#i-water" />
                </svg>{" "}Water heater</button>
              <button className="ux-syschip" data-sys="appliances">
                <svg width="16" height="16">
                  <use href="#i-appliance" />
                </svg>{" "}Appliances</button>
            </div>
            <div className="ux-sysinfo" id="home-sysinfo">
              <div className="sc num">
                <span id="hs-n">85</span>
                <small id="hs-g" className="good">Good</small>
              </div>
              <div>
                <b id="hs-t">Roof · GAF Timberline HDZ, replaced 2023</b>
                <span id="hs-d">Warranty to 2033. Next inspection due in 19 days.</span>
              </div>
            </div>
          </div>
          <div className="ux-house-pic">
            <img src="/images/timp/home-sbs-house.jpg" alt="Cutaway view of a home showing its major systems" />
          </div>
        </div>
      </section>
      <section className="ux-sec tint" id="anchor-how">
        <div className="ux-in">
          <h2 className="ux-h2">Set up in about five minutes</h2>
          <p className="ux-h2sub">Three steps. You can stop after any of them.</p>
          <div className="ux-steps3">
            <div className="ux-step">
              <div className="ph si-story"></div>
              <div className="k">STEP 1</div>
              <h3>Add your home</h3>
              <p>Type your address. We fill in what public records already know.</p>
            </div>
            <div className="ux-step">
              <div className="ph si-vault"></div>
              <div className="k">STEP 2</div>
              <h3>Snap a receipt or warranty</h3>
              <p>We read it and file it under the right system for you.</p>
            </div>
            <div className="ux-step">
              <div className="ph si-health"></div>
              <div className="k">STEP 3</div>
              <h3>Get your score and reminders</h3>
              <p>See what is in good shape, what needs attention, and what it should cost.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="ux-sec">
        <div className="ux-in">
          <div className="ux-proof">
            <div className="q">
              <blockquote>“I know what’s going on with my home, what’s coming next and what it should cost.”</blockquote>
              <div className="who">
                <b style={{ color: "#fff" }}>Mark T.</b>{" "}· Homeowner, Palm Harbor, FL</div>
              <div className="trust">
                <span>
                  <svg width="16" height="16">
                    <use href="#i-lock" />
                  </svg>{" "}Bank-level encryption</span>
                <span>
                  <svg width="16" height="16">
                    <use href="#i-shield-check" />
                  </svg>{" "}Your contact details are never sold</span>
              </div>
            </div>
            <div className="pic" role="img" aria-label="A couple reviewing their home on a tablet"></div>
          </div>
          <div className="ux-final" style={{ marginTop: "56px" }}>
            <h2 className="ux-h2">Ready to see your home’s score?</h2>
            <div className="act">
              <button className="ux-btn pri lg" data-go="/signup">Check my home’s health, free</button>
              <button className="ux-btn sec lg" data-go="/pricing">See pricing</button>
            </div>
          </div>
          <div className="ux-agentband">
            <b>Are you a real estate agent?</b>
            <span>Give clients a closing gift they keep using, and stay in touch after the sale.</span>
            <button className="ux-btn sec sm" data-go="/agent">See the agent view</button>
          </div>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
