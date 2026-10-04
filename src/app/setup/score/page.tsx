// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { FlowBar } from "@/components/proto/FlowBar";

export const metadata: Metadata = { title: "Your first score" };

export default function Page() {
  return (
    <div className="ux ux-flowpage">
      <FlowBar step="4" of="4" />
      <div className="ux-flowmain">
        <div className="ux-card ux-flowcard ux-reveal">
          <div className="ux-eyebrow">Your starting score</div>
          <div className="hdring">
            <svg viewBox="0 0 120 120" role="img" aria-label="Property health score 82 out of 100">
              <defs>
                <linearGradient id="obgrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="#2E8B57" />
                  <stop offset="1" stopColor="#19A7A5" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="50" fill="none" stroke="#E7EFF4" strokeWidth="11" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="url(#obgrad)" strokeWidth="11" strokeLinecap="round" strokeDasharray="257.6 314.2" />
            </svg>
            <div className="v">
              <b className="num">82</b>
            </div>
          </div>
          <div className="grade">Good</div>
          <p className="ux-muted" style={{ marginTop: "4px" }}>123 Happiness Street</p>
          <ul>
            <li>
              <svg width="18" height="18">
                <use href="#i-info" />
              </svg>
              {" "}
              <span>Based on the age of your home and the records you’ve added so far.</span>
            </li>
            <li className="warn">
              <svg width="18" height="18">
                <use href="#i-warn" />
              </svg>
              {" "}
              <span>
                <b style={{ color: "var(--navy)" }}>One thing to look at:</b>{" "}appliances from 2015 are nearing the end of their typical life.</span>
            </li>
            <li>
              <svg width="18" height="18">
                <use href="#i-plus-circle" />
              </svg>
              {" "}
              <span>Every document you add makes the score more accurate.</span>
            </li>
          </ul>
          <button className="ux-btn pri lg block" data-go="/app">Go to my dashboard</button>
        </div>
      </div>
    </div>
  );
}
