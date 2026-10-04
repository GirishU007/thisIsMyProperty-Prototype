// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { FlowBar } from "@/components/proto/FlowBar";

export const metadata: Metadata = { title: "Create your agent account" };

export default function Page() {
  return (
    <div className="ux ux-flowpage">
      <FlowBar />
      <div className="ux-flowmain">
        <div className="ux-card ux-flowcard">
          <h1>Create your agent account</h1>
          <p className="sub">About a minute. Then you can gift your first Vault.</p>
          <div className="ux-row2">
            <label className="ux-field">
              <span className="lb">First name</span>
              <span className="ux-input">Sarah</span>
            </label>
            <label className="ux-field">
              <span className="lb">Last name</span>
              <span className="ux-input">Mitchell</span>
            </label>
          </div>
          <label className="ux-field">
            <span className="lb">Work email</span>
            <span className="ux-input">
              <svg width="18" height="18">
                <use href="#i-mail" />
              </svg>{" "}sarah@brokerage.com</span>
          </label>
          <label className="ux-field">
            <span className="lb">Password{" "}
              <span className="hint">· at least 10 characters</span>
            </span>
            <span className="ux-input">
              <svg width="18" height="18">
                <use href="#i-lock" />
              </svg>{" "}•••••••••••{" "}
              <span style={{ marginLeft: "auto" }} className="ux-link">Show</span>
            </span>
          </label>
          <label className="ux-field">
            <span className="lb">Brokerage</span>
            <span className="ux-input">Bayshore Realty Group</span>
          </label>
          <div className="ux-row2">
            <label className="ux-field">
              <span className="lb">License state</span>
              <span className="ux-input">Florida{" "}
                <span style={{ marginLeft: "auto", display: "inline-flex" }}>
                  <svg width="14" height="14">
                    <use href="#i-chevd" />
                  </svg>
                </span>
              </span>
            </label>
            <label className="ux-field">
              <span className="lb">License number</span>
              <span className="ux-input focus">SL 3 000 000</span>
            </label>
          </div>
          <div className="ux-planline">
            <svg width="18" height="18">
              <use href="#i-check" />
            </svg>
            {" "}
            <span>You’re starting on{" "}
              <b>Realtor-Basic, free</b>.</span>
            <Link href="/pricing/agents">Compare plans</Link>
          </div>
          <Link className="ux-btn pri lg block" href="/agent">Create my agent account</Link>
          <p className="ux-fine">By continuing you agree to the Terms and Privacy Policy, and confirm you are a licensed real estate professional.</p>
          <p className="ux-fine">Already have an account?{" "}
            <Link className="ux-link" href="/agent">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
