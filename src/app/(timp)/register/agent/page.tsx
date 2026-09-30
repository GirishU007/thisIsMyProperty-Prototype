/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/20-register-agent.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = { title: "Agent Registration" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-register-ag" data-route="/register/agent">
      {" "}
      <PublicNav active="reg-agent" />
      {" "}
      <div className="reg">
        {" "}
        <div className="reg-head">
          {" "}
          <h1>Create your agent account</h1>
          {" "}
          <p>Give your clients a Property Vault at closing — and stay in their world long after the keys change hands.</p>
          {" "}</div>
        {" "}
        <div className="reg-grid">
          {" "}
          <div className="regcard">
            {" "}
            <h3>Your details</h3>
            {" "}
            <div className="rsub">Takes about a minute.</div>
            {" "}
            <div className="fieldrow">
              {" "}
              <div className="field">
                <label>First name</label>
                <div className="inp">Sarah</div>
              </div>
              {" "}
              <div className="field">
                <label>Last name</label>
                <div className="inp">Mitchell</div>
              </div>
              {" "}</div>
            {" "}
            <div className="field">
              <label>Work email</label>
              <div className="inp">
                <svg width="14" height="14">
                  <use href="#i-mail" />
                </svg>{" "}sarah@brokerage.com</div>
            </div>
            {" "}
            <div className="field">
              <label>Create a password</label>
              <div className="inp">
                <svg width="14" height="14">
                  <use href="#i-lock" />
                </svg>{" "}••••••••••</div>
            </div>
            {" "}
            <div className="field">
              <label>Brokerage</label>
              <div className="inp">
                <svg width="14" height="14">
                  <use href="#i-case" />
                </svg>{" "}Bayshore Realty Group</div>
            </div>
            {" "}
            <div className="fieldrow">
              {" "}
              <div className="field">
                <label>License state</label>
                <div className="inp">Florida</div>
              </div>
              {" "}
              <div className="field">
                <label>License number</label>
                <div className="inp">SL 3 000 000</div>
              </div>
              {" "}</div>
            {" "}
            <div className="regcheck">
              <i>
                <svg width="9" height="9">
                  <use href="#i-check" />
                </svg>
              </i>
              <span>I agree to the Terms of Service and Privacy Policy, and confirm I am a licensed real estate professional.</span>
            </div>
            {" "}
            <Link className="btn btn-primary" href="/agent" style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}>Create my agent account</Link>
            {" "}
            <div className="regnote">No credit card required to start on Realtor-Basic.</div>
            {" "}
            <div className="regfoot">Already have an account?{" "}
              <Link href="/agent">Sign in</Link>
            </div>
            {" "}</div>
          {" "}
          <div>
            {" "}
            <div className="sect-title" style={{ marginTop: "0" }}>
              <h2>Choose your plan</h2>
              <Link className="link" href="/pricing/agents">Compare all features →</Link>
            </div>
            {" "}
            <div className="planpick">
              {" "}
              <button type="button" className="ppick is-on" data-plan>
                <span className="radio"></span>
                <span className="mid">
                  <span className="nm">Realtor-Basic</span>
                  <span className="ds">Try the platform and gift a Vault to a client.</span>
                  <ul>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Agent dashboard</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>1 gifted Homeowner Vault</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Marketing templates</li>
                  </ul>
                </span>
                <div className="pr">
                  <b className="num">$0</b>
                  <span>/month</span>
                </div>
              </button>
              {" "}
              <button type="button" className="ppick" data-plan>
                <span className="radio"></span>
                <span className="mid">
                  <span className="nm">Realtor-Premium</span>
                  <span className="regtag">Intro price</span>
                  <span className="ds">For newer Realtors building a repeat-business pipeline.</span>
                  <ul>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Everything in Realtor-Basic</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Gifted Vaults for your clients</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Client alerts & activity feed</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Marketing Center</li>
                  </ul>
                </span>
                <div className="pr">
                  <b className="num">$49</b>
                  <span>/month · $1,000/yr</span>
                </div>
              </button>
              {" "}
              <button type="button" className="ppick" data-plan>
                <span className="radio"></span>
                <span className="mid">
                  <span className="nm">Realtor Pro</span>
                  <span className="ds">For successful Realtors with an active book of clients.</span>
                  <ul>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Everything in Realtor-Premium</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Unlimited client Vaults</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Branded campaigns & co-marketing</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Priority support</li>
                  </ul>
                </span>
                <div className="pr">
                  <b className="num">$199</b>
                  <span>/month · $2,000/yr</span>
                </div>
              </button>
              {" "}
              <button type="button" className="ppick" data-plan>
                <span className="radio"></span>
                <span className="mid">
                  <span className="nm">Realtor Team Owners</span>
                  <span className="ds">For brokerages and teams. Volume pricing and onboarding support.</span>
                  <ul>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Everything in Realtor Pro</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Team seats & roll-up reporting</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Dedicated onboarding</li>
                  </ul>
                </span>
                <div className="pr">
                  <b style={{ fontSize: "14px" }}>Contact Sales</b>
                  <span>for pricing</span>
                </div>
              </button>
              {" "}</div>
            {" "}
            <div className="regtrust">
              {" "}
              <span>
                <svg width="15" height="15">
                  <use href="#i-gift" />
                </svg>{" "}Gift Vaults at closing</span>
              {" "}
              <span>
                <svg width="15" height="15">
                  <use href="#i-lock" />
                </svg>{" "}Client data stays the client’s</span>
              {" "}
              <span>
                <svg width="15" height="15">
                  <use href="#i-clock" />
                </svg>{" "}Cancel anytime</span>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}
      <PublicFooter />
      {" "}</section>
  );
}
