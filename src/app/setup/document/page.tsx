// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import { FlowBar } from "@/components/proto/FlowBar";

export const metadata: Metadata = { title: "Your first document" };

export default function Page() {
  return (
    <div className="ux ux-flowpage">
      <FlowBar step="3" of="4" />
      <div className="ux-flowmain">
        <div className="ux-card ux-flowcard wide">
          <h1>Add one document to start your Vault</h1>
          <p className="sub">A receipt, a warranty or an inspection report. We read it and file it for you.</p>
          <div id="ob2-drop">
            <div className="ux-drop">
              <svg width="34" height="34">
                <use href="#i-cloud" />
              </svg>
              <b>Drop a file here, or take a photo</b>
              <span>PDF, JPG or PNG</span>
              <button className="ux-btn pri" data-act="ob2-upload">Choose a file</button>
            </div>
            <div className="ux-ideas">
              <span className="ux-muted" style={{ fontSize: "14px", alignSelf: "center" }}>Good first documents:</span>
              <span className="ux-tag grey">Last HVAC service</span>
              <span className="ux-tag grey">Roof warranty</span>
              <span className="ux-tag grey">Home inspection</span>
            </div>
            <Link className="ux-link ux-skip" href="/setup/score">Skip for now</Link>
          </div>
          <div id="ob2-read" hidden>
            <div className="ux-read">
              <div className="h">
                <svg width="18" height="18">
                  <use href="#i-check" />
                </svg>{" "}We read your document. Is this right?</div>
              <dl>
                <dt>File</dt>
                <dd>HVAC-service-invoice.pdf</dd>
                <dt>Type</dt>
                <dd>Maintenance receipt</dd>
                <dt>System</dt>
                <dd>HVAC</dd>
                <dt>Vendor</dt>
                <dd>Cool Air Solutions</dd>
                <dt>Date</dt>
                <dd>May 10, 2026</dd>
                <dt>Amount</dt>
                <dd className="num">$185.00</dd>
              </dl>
            </div>
            <button className="ux-btn pri lg block" data-go="/setup/score">Looks right, save it</button>
            <a className="ux-link ux-skip" data-toast="Each field becomes editable here.">Edit the details</a>
          </div>
        </div>
      </div>
    </div>
  );
}
