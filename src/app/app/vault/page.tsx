// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "Vault" };

export default function Page() {
  return (
    <AppShell active="vault" title="Vault" sub="128 documents for 123 Happiness St.">
      <div className="ux-toolbar">
        <span className="ux-input ux-search">
          <svg width="18" height="18">
            <use href="#i-search" />
          </svg>
          {" "}
          <span className="ux-muted">Search documents</span>
        </span>
        <button className="ux-btn pri" data-act="add-doc">
          <svg width="17" height="17">
            <use href="#i-plus" />
          </svg>{" "}Add document</button>
      </div>
      <div className="ux-filter" id="vault-filter">
        <button className="ux-chip is-on" data-f="all">All{" "}
          <span className="n num">128</span>
        </button>
        <button className="ux-chip" data-f="Receipt">Receipts{" "}
          <span className="n num">38</span>
        </button>
        <button className="ux-chip" data-f="Warranty">Warranties{" "}
          <span className="n num">12</span>
        </button>
        <button className="ux-chip" data-f="Inspection">Inspections{" "}
          <span className="n num">5</span>
        </button>
        <button className="ux-chip" data-f="Manual">Manuals{" "}
          <span className="n num">9</span>
        </button>
        <button className="ux-chip" data-f="Permit">Permits{" "}
          <span className="n num">4</span>
        </button>
      </div>
      <div className="ux-card ux-tasks" id="vault-list">
        <div className="ux-doc head">
          <span></span>
          <span>Document</span>
          <span className="c-sys">System</span>
          <span className="c-date">Date</span>
          <span style={{ textAlign: "right" }}>Amount</span>
        </div>
        <div className="ux-doc" data-type="Receipt">
          <span className="fi">
            <svg width="19" height="19">
              <use href="#i-doc" />
            </svg>
          </span>
          <div>
            <b>Kitchen remodel receipt</b>
            <span className="s">Receipt · Bayside Kitchens</span>
          </div>
          <span className="s c-sys">Interior</span>
          <span className="s c-date num">May 21, 2026</span>
          <span className="amt">$18,450</span>
        </div>
        <div className="ux-doc" data-type="Receipt">
          <span className="fi">
            <svg width="19" height="19">
              <use href="#i-wrench" />
            </svg>
          </span>
          <div>
            <b>Plumbing service</b>
            <span className="s">Receipt · Harbor Plumbing</span>
          </div>
          <span className="s c-sys">Plumbing</span>
          <span className="s c-date num">May 12, 2026</span>
          <span className="amt">$240</span>
        </div>
        <div className="ux-doc" data-type="Receipt">
          <span className="fi">
            <svg width="19" height="19">
              <use href="#i-gear" />
            </svg>
          </span>
          <div>
            <b>HVAC service invoice</b>
            <span className="s">Receipt · Cool Air Solutions</span>
          </div>
          <span className="s c-sys">HVAC</span>
          <span className="s c-date num">May 10, 2026</span>
          <span className="amt">$185</span>
        </div>
        <div className="ux-doc" data-type="Warranty">
          <span className="fi">
            <svg width="19" height="19">
              <use href="#i-shield-check" />
            </svg>
          </span>
          <div>
            <b>Roof warranty</b>
            <span className="s">Warranty · GAF Timberline HDZ · to 2033</span>
          </div>
          <span className="s c-sys">Roof</span>
          <span className="s c-date num">May 1, 2026</span>
          <span className="amt">–</span>
        </div>
        <div className="ux-doc" data-type="Warranty">
          <span className="fi">
            <svg width="19" height="19">
              <use href="#i-shield-check" />
            </svg>
          </span>
          <div>
            <b>HVAC system warranty</b>
            <span className="s">Warranty · Goodman GSXC18 · to 2036</span>
          </div>
          <span className="s c-sys">HVAC</span>
          <span className="s c-date num">Mar 20, 2026</span>
          <span className="amt">–</span>
        </div>
        <div className="ux-doc" data-type="Inspection">
          <span className="fi">
            <svg width="19" height="19">
              <use href="#i-clip" />
            </svg>
          </span>
          <div>
            <b>Annual roof inspection</b>
            <span className="s">Inspection report · Suncoast Roofing</span>
          </div>
          <span className="s c-sys">Roof</span>
          <span className="s c-date num">Oct 4, 2025</span>
          <span className="amt">$150</span>
        </div>
        <div className="ux-doc" data-type="Manual">
          <span className="fi">
            <svg width="19" height="19">
              <use href="#i-book" />
            </svg>
          </span>
          <div>
            <b>Water heater manual</b>
            <span className="s">Manual · Rheem ProTerra 50</span>
          </div>
          <span className="s c-sys">Water heater</span>
          <span className="s c-date num">Jul 10, 2025</span>
          <span className="amt">–</span>
        </div>
      </div>
      <div className="ux-note">
        <svg width="17" height="17">
          <use href="#i-shield-check" />
        </svg>
        {" "}
        <span>Your documents are encrypted. Only you, and people you invite, can see them.</span>
      </div>
    </AppShell>
  );
}
