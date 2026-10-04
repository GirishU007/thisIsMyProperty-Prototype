// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { FlowBar } from "@/components/proto/FlowBar";

export const metadata: Metadata = { title: "Add your home" };

export default function Page() {
  return (
    <div className="ux ux-flowpage">
      <FlowBar step="2" of="4" />
      <div className="ux-flowmain">
        <div className="ux-card ux-flowcard wide">
          <h1>Welcome, Jane. Which home is this for?</h1>
          <p className="sub">Type the address and we’ll fill in what public records already know.</p>
          <label className="ux-field">
            <span className="lb">Property address</span>
            <span className="ux-input focus">
              <svg width="18" height="18">
                <use href="#i-pin" />
              </svg>{" "}123 Happiness Street, Safety Harbor, FL 34695</span>
          </label>
          <div id="ob1-found" hidden>
            <div className="ux-found">
              <div className="top">
                <span className="photo ph1"></span>
                <div>
                  <span className="ux-tag green">
                    <svg width="13" height="13">
                      <use href="#i-check" />
                    </svg>{" "}Found in public records</span>
                  <b style={{ marginTop: "6px" }}>123 Happiness Street</b>
                  <span className="ux-muted" style={{ fontSize: "14px" }}>Safety Harbor, FL 34695</span>
                </div>
              </div>
              <div className="facts2">
                <div>Type<b>Single Family</b>
                </div>
                <div>Built<b className="num">2015</b>
                </div>
                <div>Living area<b className="num">2,842 sq ft</b>
                </div>
                <div>Bedrooms<b className="num">4</b>
                </div>
                <div>Bathrooms<b className="num">3.5</b>
                </div>
                <div>Lot<b className="num">0.23 acres</b>
                </div>
              </div>
            </div>
            <button className="ux-btn pri lg block" data-go="/setup/document">Yes, this is my home</button>
            <a className="ux-link ux-skip" data-toast="You can correct any of these details later from the property page.">Something is wrong, let me edit</a>
          </div>
          <div id="ob1-find">
            <button className="ux-btn pri lg block" data-act="ob1-find">Find my home</button>
          </div>
        </div>
      </div>
    </div>
  );
}
