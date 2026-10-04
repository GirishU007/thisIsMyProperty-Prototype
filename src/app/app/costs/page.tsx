// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "Costs & estimates" };

export default function Page() {
  return (
    <AppShell active="costs" title={"Costs & estimates"} sub="See a fair local price before you hire anyone.">
      <div>
        <div className="ux-eyebrow" style={{ color: "var(--slate)", marginBottom: "8px" }}>What job are you pricing?</div>
        <div className="ux-jobs" id="jobs">
          <button className="ux-chip is-on" data-job="wh">Water heater replacement</button>
          <button className="ux-chip" data-job="hvac">HVAC replacement</button>
          <button className="ux-chip" data-job="roof">Roof replacement</button>
          <button className="ux-chip" data-toast="Lists every job type, with search.">More jobs</button>
        </div>
      </div>
      <div className="ux-costgrid">
        <div className="ux-card">
          <div className="ux-eyebrow" style={{ color: "var(--slate)" }}>Fair price in Safety Harbor, FL</div>
          <div className="ux-range">
            <div className="big num" id="c-range">$1,450 – $2,300</div>
            <p className="ux-muted" id="c-desc">50-gallon electric tank, installed, with haul-away.</p>
            <div className="track">
              <span className="dot" id="c-dot" data-typ="Typical $1,850"></span>
            </div>
            <div className="ends">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
          <div className="ux-break">
            <div className="hdsum">
              <span>Equipment</span>
              <b className="num" id="c-a">$900</b>
            </div>
            <div className="hdsum">
              <span>Labor</span>
              <b className="num" id="c-b">$700</b>
            </div>
            <div className="hdsum">
              <span>Permit and haul-away</span>
              <b className="num" id="c-c">$250</b>
            </div>
          </div>
          <Link className="ux-link ux-skip" id="c-full" href="/app/costs/estimate" hidden>Open the full HVAC estimate report →</Link>
          <div className="ux-note" style={{ marginTop: "16px" }}>
            <svg width="17" height="17">
              <use href="#i-info" />
            </svg>
            {" "}
            <span>Sample figures for this prototype, based on recent jobs recorded nearby.</span>
          </div>
        </div>
        <div className="ux-card">
          <div className="ux-eyebrow" style={{ color: "var(--slate)" }}>Recommended pros for this job</div>
          <div className="ux-pro">
            <span className="av hpav0"></span>
            <div>
              <b>Harbor Plumbing</b>
              <span>4.9 · 212 jobs · Licensed and insured</span>
            </div>
          </div>
          <div className="ux-pro">
            <span className="av hpav1"></span>
            <div>
              <b>Gulf Coast Water Heaters</b>
              <span>4.8 · 147 jobs · Licensed and insured</span>
            </div>
          </div>
          <div className="ux-pro">
            <span className="av hpav2"></span>
            <div>
              <b>Sunline Home Services</b>
              <span>4.7 · 96 jobs · Licensed and insured</span>
            </div>
          </div>
          <button className="ux-btn pri block" style={{ marginTop: "14px" }} data-act="quotes">Request quotes from all three</button>
          <Link className="ux-link ux-skip" href="/app/pros">Browse all pros</Link>
          <p className="ux-fine" style={{ textAlign: "left" }}>Pros see the job and your city, not your contact details, until you choose one.</p>
        </div>
      </div>
    </AppShell>
  );
}
