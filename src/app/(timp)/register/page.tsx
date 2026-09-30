/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/19-register.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = { title: "Homeowner Registration" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-register" data-route="/register">
      {" "}
      <PublicNav active="reg" />
      {" "}
      <div className="reg">
        {" "}
        <div className="reg-head">
          {" "}
          <h1>Create your homeowner account</h1>
          {" "}
          <p>Start free. Upgrade when you’re ready — your Vault and your data come with you.</p>
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
                <div className="inp">Jane</div>
              </div>
              {" "}
              <div className="field">
                <label>Last name</label>
                <div className="inp">Sutton</div>
              </div>
              {" "}</div>
            {" "}
            <div className="field">
              <label>Email address</label>
              <div className="inp">
                <svg width="14" height="14">
                  <use href="#i-mail" />
                </svg>{" "}jane@example.com</div>
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
              <label>Property address</label>
              <div className="inp">
                <svg width="14" height="14">
                  <use href="#i-home" />
                </svg>{" "}123 Happiness Street, Safety Harbor, FL</div>
            </div>
            {" "}
            <div className="regcheck">
              <i>
                <svg width="9" height="9">
                  <use href="#i-check" />
                </svg>
              </i>
              <span>I agree to the Terms of Service and Privacy Policy. My personal contact information is never sold.</span>
            </div>
            {" "}
            <Link className="btn btn-primary" href="/ho" style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}>Create my account</Link>
            {" "}
            <div className="regnote">No credit card required to start on Basic.</div>
            {" "}
            <div className="regfoot">Already have an account?{" "}
              <Link href="/ho">Sign in</Link>
            </div>
            {" "}</div>
          {" "}
          <div>
            {" "}
            <div className="sect-title" style={{ marginTop: "0" }}>
              <h2>Choose your plan</h2>
              <Link className="link" href="/pricing">Compare all features →</Link>
            </div>
            {" "}
            <div className="planpick">
              {" "}
              <button type="button" className="ppick is-on" data-plan>
                <span className="radio"></span>
                <span className="mid">
                  <span className="nm">Homeowner Basic</span>
                  <span className="ds">The essentials to get started. 1 home per account.</span>
                  <ul>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>The Vault — unlimited document storage</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Home Improvement Summary Reports</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Email reminders for warranties & insurance</li>
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
                  <span className="nm">Homeowner Plus</span>
                  <span className="regtag">Most popular</span>
                  <span className="ds">One central place to manage and maintain your home. 1 home per account.</span>
                  <ul>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Everything in Basic</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Property Dashboard & Home Health Score</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Certified downloadable PDFs</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>5 SmartHome Reports / yr</li>
                  </ul>
                </span>
                <div className="pr">
                  <b className="num">$29</b>
                  <span>/month · $300/yr</span>
                </div>
              </button>
              {" "}
              <button type="button" className="ppick" data-plan>
                <span className="radio"></span>
                <span className="mid">
                  <span className="nm">Homeowner Premium</span>
                  <span className="ds">For multiple properties. 2–4 homes on one account.</span>
                  <ul>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Everything in Plus, for 2–4 properties</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>6 SmartHome Reports / yr</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Portfolio-level reporting</li>
                    <li>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>Realtor access — only with your permission</li>
                  </ul>
                </span>
                <div className="pr">
                  <b className="num">$49</b>
                  <span>/month · $500/yr</span>
                </div>
              </button>
              {" "}</div>
            {" "}
            <div className="regtrust">
              {" "}
              <span>
                <svg width="15" height="15">
                  <use href="#i-lock" />
                </svg>{" "}Bank-level encryption</span>
              {" "}
              <span>
                <svg width="15" height="15">
                  <use href="#i-shield-check" />
                </svg>{" "}Your data is never sold</span>
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
