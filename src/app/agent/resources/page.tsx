// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { AgentShell } from "@/components/proto/AgentShell";

export const metadata: Metadata = { title: "Resources" };

export default function Page() {
  return (
    <AgentShell active="resources" title="Resources" sub="Guides you can read, and share with clients.">
      <div className="ux-toolbar">
        <span className="ux-input ux-search">
          <svg width="18" height="18">
            <use href="#i-search" />
          </svg>
          {" "}
          <span className="ux-muted">Search resources</span>
        </span>
      </div>
      <div className="ux-sech">
        <h2>Share with clients</h2>
      </div>
      <div className="ux-grid3">
        <div className="ux-card ux-res">
          <span className="ph rimg-rblog"></span>
          <span className="k">Checklist</span>
          <b>Spring home maintenance checklist</b>
          <button className="ux-btn sec sm" data-act="ag-share" data-msg="Link copied. Paste it into an email or post.">Copy share link</button>
        </div>
        <div className="ux-card ux-res">
          <span className="ph rimg-rfaq"></span>
          <span className="k">Guide</span>
          <b>How to extend the life of your roof</b>
          <button className="ux-btn sec sm" data-act="ag-share" data-msg="Link copied. Paste it into an email or post.">Copy share link</button>
        </div>
        <div className="ux-card ux-res">
          <span className="ph rimg-rtips"></span>
          <span className="k">Money-saving tip</span>
          <b>Seal air leaks and save on energy bills</b>
          <button className="ux-btn sec sm" data-act="ag-share" data-msg="Link copied. Paste it into an email or post.">Copy share link</button>
        </div>
        <div className="ux-card ux-res">
          <span className="ph rimg-rvid"></span>
          <span className="k">Video</span>
          <b>How your HVAC system works</b>
          <button className="ux-btn sec sm" data-act="ag-share" data-msg="Link copied. Paste it into an email or post.">Copy share link</button>
        </div>
        <div className="ux-card ux-res">
          <span className="ph rimg-rpod"></span>
          <span className="k">Podcast</span>
          <b>Preventative maintenance matters</b>
          <button className="ux-btn sec sm" data-act="ag-share" data-msg="Link copied. Paste it into an email or post.">Copy share link</button>
        </div>
        <div className="ux-card ux-res">
          <span className="ph rimg-rblog"></span>
          <span className="k">Guide</span>
          <b>Understanding your home’s systems</b>
          <button className="ux-btn sec sm" data-act="ag-share" data-msg="Link copied. Paste it into an email or post.">Copy share link</button>
        </div>
      </div>
      <div className="ux-sech">
        <h2>For you</h2>
      </div>
      <div className="ux-card ux-tasks">
        <div className="ux-task">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-clip" />
            </svg>
          </span>
          <div className="tx">
            <b>Listing appointment checklist</b>
            <span>Recommended repairs and improvements to raise before listing.</span>
          </div>
          <button className="ux-btn sec sm" data-toast="Downloads the form.">
            <svg width="16" height="16">
              <use href="#i-download" />
            </svg>{" "}Download</button>
        </div>
        <div className="ux-task">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-clip" />
            </svg>
          </span>
          <div className="tx">
            <b>Buying process checklist</b>
            <span>A step-by-step handout for buyers.</span>
          </div>
          <button className="ux-btn sec sm" data-toast="Downloads the form.">
            <svg width="16" height="16">
              <use href="#i-download" />
            </svg>{" "}Download</button>
        </div>
        <div className="ux-task">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-doc" />
            </svg>
          </span>
          <div className="tx">
            <b>Sample client reports</b>
            <span>Home Health Score and Improvement Summary, for listing appointments.</span>
          </div>
          <button className="ux-btn sec sm" data-toast="Downloads the sample reports.">
            <svg width="16" height="16">
              <use href="#i-download" />
            </svg>{" "}Download</button>
        </div>
      </div>
    </AgentShell>
  );
}
