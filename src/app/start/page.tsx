// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { FlowBar } from "@/components/proto/FlowBar";

export const metadata: Metadata = { title: "Get started" };

export default function Page() {
  return (
    <div className="ux ux-flowpage">
      <FlowBar />
      <div className="ux-flowmain">
        <div className="ux-flowwide">
          <h1 className="ux-h2" style={{ fontSize: "34px" }}>Who is this for?</h1>
          <p className="ux-h2sub">Pick one and we’ll set up the right account. Both are free to start.</p>
          <div className="ux-choose">
            <Link className="ux-card" href="/signup">
              <span className="ic">
                <svg width="26" height="26">
                  <use href="#i-home" />
                </svg>
              </span>
              <h3>I own a home</h3>
              <p>Keep your records, see a health score for every system and get reminders before things fail.</p>
              <span className="ux-link">Create a homeowner account →</span>
            </Link>
            <Link className="ux-card" href="/signup/agent">
              <span className="ic">
                <svg width="26" height="26">
                  <use href="#i-handshake" />
                </svg>
              </span>
              <h3>I’m a real estate agent</h3>
              <p>Gift clients a Property Vault at closing and stay in touch with a reason to call.</p>
              <span className="ux-link">Create an agent account →</span>
            </Link>
          </div>
          <div className="ux-choose small">
            <Link className="ux-card" href="/pros/join">
              <span className="ic">
                <svg width="20" height="20">
                  <use href="#i-tools" />
                </svg>
              </span>
              <div>
                <h3>I’m a service pro</h3>
                <p>The pro network is coming soon.</p>
              </div>
            </Link>
            <Link className="ux-card" href="/brokers">
              <span className="ic">
                <svg width="20" height="20">
                  <use href="#i-users3" />
                </svg>
              </span>
              <div>
                <h3>I run a brokerage or team</h3>
                <p>Team plans are coming soon.</p>
              </div>
            </Link>
          </div>
          <p className="ux-fine">Already have an account?{" "}
            <Link className="ux-link" href="/app">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
