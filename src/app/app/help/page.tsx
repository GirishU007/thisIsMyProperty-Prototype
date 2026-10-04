// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "Help & resources" };

export default function Page() {
  return (
    <AppShell active="help" title={"Help & resources"} sub="Guides, answers and people to ask.">
      <div className="ux-toolbar">
        <span className="ux-input ux-search">
          <svg width="18" height="18">
            <use href="#i-search" />
          </svg>
          {" "}
          <span className="ux-muted">Search guides and answers</span>
        </span>
      </div>
      <div className="ux-sech">
        <h2>Common questions</h2>
      </div>
      <div className="ux-card ux-faq">
        <details open>
          <summary>How often should I service my HVAC system?</summary>
          <p>Twice a year is typical in Florida: once before the cooling season and once before the heating season. Change filters every one to three months. We add both to your To do list.</p>
        </details>
        <details>
          <summary>What is a home warranty?</summary>
          <p>A service contract that covers repair or replacement of major systems and appliances. It is different from a manufacturer warranty and from home insurance. Store all three in your Vault and we track the expiry dates.</p>
        </details>
        <details>
          <summary>How can I improve my home’s energy efficiency?</summary>
          <p>Start with air leaks and insulation, then look at the age of your HVAC and water heater. Home health shows which systems are costing you the most.</p>
        </details>
        <details>
          <summary>How is my Home Health Score worked out?</summary>
          <p>From the age of each system against its typical life, the maintenance you have recorded, and any active warranties or open recalls. Adding documents makes it more accurate.</p>
        </details>
      </div>
      <div className="ux-sech">
        <h2>Guides</h2>
      </div>
      <div className="ux-grid3">
        <a className="ux-card ux-res" data-toast="Guide: not built in this prototype yet.">
          <span className="ph rimg-rblog"></span>
          <span className="k">Checklist</span>
          <b>Spring home maintenance checklist</b>
        </a>
        <a className="ux-card ux-res" data-toast="Guide: not built in this prototype yet.">
          <span className="ph rimg-rtips"></span>
          <span className="k">Money-saving tip</span>
          <b>Seal air leaks and save on energy bills</b>
        </a>
        <a className="ux-card ux-res" data-toast="Guide: not built in this prototype yet.">
          <span className="ph rimg-rfaq"></span>
          <span className="k">Guide</span>
          <b>How to extend the life of your roof</b>
        </a>
      </div>
      <div className="ux-sech">
        <h2>Watch and listen</h2>
      </div>
      <div className="ux-grid3">
        <a className="ux-card ux-res" data-toast="Video: not built in this prototype yet.">
          <span className="ph rimg-rvid"></span>
          <span className="k">Video</span>
          <b>How your HVAC system works</b>
        </a>
        <a className="ux-card ux-res" data-toast="Video: not built in this prototype yet.">
          <span className="ph rimg-rvid"></span>
          <span className="k">Video</span>
          <b>Detecting water leaks early</b>
        </a>
        <a className="ux-card ux-res" data-toast="Podcast: not built in this prototype yet.">
          <span className="ph rimg-rpod"></span>
          <span className="k">Podcast</span>
          <b>Preventative maintenance matters</b>
        </a>
      </div>
      <div className="ux-grid2">
        <div className="ux-card ux-feat">
          <span className="ic">
            <svg width="22" height="22">
              <use href="#i-mail" />
            </svg>
          </span>
          <h3>Contact support</h3>
          <p>We reply within one working day.</p>
          <button className="ux-btn sec sm" data-toast="Contact support: not built in this prototype yet.">Send a message</button>
        </div>
        <div className="ux-card ux-feat">
          <span className="ic">
            <svg width="22" height="22">
              <use href="#i-bulb" />
            </svg>
          </span>
          <h3>Suggest a topic</h3>
          <p>Tell us what you would like a guide on.</p>
          <button className="ux-btn sec sm" data-toast="Suggest a topic: not built in this prototype yet.">Send a suggestion</button>
        </div>
      </div>
    </AppShell>
  );
}
