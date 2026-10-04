// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { FlowBar } from "@/components/proto/FlowBar";

export const metadata: Metadata = { title: "Create your account" };

export default function Page() {
  return (
    <div className="ux ux-flowpage">
      <FlowBar step="1" of="4" />
      <div className="ux-flowmain">
        <div className="ux-card ux-flowcard">
          <h1>Create your account</h1>
          <p className="sub">About a minute. Then we’ll set up your home together.</p>
          <div className="ux-row2">
            <label className="ux-field">
              <span className="lb">First name</span>
              <span className="ux-input">Jane</span>
            </label>
            <label className="ux-field">
              <span className="lb">Last name</span>
              <span className="ux-input">Sutton</span>
            </label>
          </div>
          <label className="ux-field">
            <span className="lb">Email</span>
            <span className="ux-input">
              <svg width="18" height="18">
                <use href="#i-mail" />
              </svg>{" "}jane@example.com</span>
          </label>
          <label className="ux-field">
            <span className="lb">Password{" "}
              <span className="hint">· at least 10 characters</span>
            </span>
            <span className="ux-input focus">
              <svg width="18" height="18">
                <use href="#i-lock" />
              </svg>{" "}•••••••••••{" "}
              <span style={{ marginLeft: "auto" }} className="ux-link">Show</span>
            </span>
          </label>
          <div className="ux-planline">
            <svg width="18" height="18">
              <use href="#i-check" />
            </svg>
            {" "}
            <span>You’re starting on{" "}
              <b>Basic, free</b>.</span>
            <Link href="/pricing">Compare plans</Link>
          </div>
          <button className="ux-btn pri lg block" data-go="/setup/home">Create my account</button>
          <p className="ux-fine">By continuing you agree to the Terms and Privacy Policy. Your contact details are never sold.</p>
          <p className="ux-fine">Already have an account?{" "}
            <Link className="ux-link" href="/app">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
