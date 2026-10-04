// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "Property" };

export default function Page() {
  return (
    <AppShell active="property" title="Property" sub="Details for 123 Happiness St, and your other homes.">
      <div className="ux-propgrid">
        <div className="ux-card ux-prophead">
          <span className="photo ph1" role="img" aria-label="Photo of 123 Happiness Street"></span>
          <div className="tx">
            <span className="ux-tag teal">Primary home</span>
            <h2>123 Happiness Street</h2>
            <p className="ux-muted">Safety Harbor, FL 34695</p>
            <div className="ux-facts">
              <div>
                <span>Type</span>
                <b>Single Family Home</b>
              </div>
              <div>
                <span>Built</span>
                <b className="num">2015</b>
              </div>
              <div>
                <span>Living area</span>
                <b className="num">2,842 sq ft</b>
              </div>
              <div>
                <span>Bedrooms</span>
                <b className="num">4</b>
              </div>
              <div>
                <span>Bathrooms</span>
                <b className="num">3.5</b>
              </div>
              <div>
                <span>Lot</span>
                <b className="num">0.23 acres</b>
              </div>
              <div>
                <span>Garage</span>
                <b>2 car, attached</b>
              </div>
            </div>
            <div className="ux-actrow">
              <button className="ux-btn sec sm" data-toast="Edit property: not built in this prototype yet.">
                <svg width="15" height="15">
                  <use href="#i-pencil" />
                </svg>{" "}Edit details</button>
              <button className="ux-btn sec sm" data-toast="Photos: not built in this prototype yet.">
                <svg width="15" height="15">
                  <use href="#i-camera" />
                </svg>{" "}Photos</button>
            </div>
          </div>
        </div>
        <div className="ux-card">
          <div className="ux-eyebrow" style={{ color: "var(--slate)" }}>How complete is this home’s record?</div>
          <div className="ux-complete">
            <b className="num">76%</b>
            <span>A healthy record</span>
          </div>
          <div className="ux-bar">
            <i style={{ width: "76%" }}></i>
          </div>
          <p className="ux-muted" style={{ fontSize: "14px", marginTop: "10px" }}>The more you add, the more accurate your score and estimates become.</p>
          <ul className="ux-missing">
            <li>
              <svg width="17" height="17">
                <use href="#i-plus-circle" />
              </svg>
              {" "}
              <span>Add your home insurance policy</span>
              <button className="ux-link" data-act="add-doc">Add</button>
            </li>
            <li>
              <svg width="17" height="17">
                <use href="#i-plus-circle" />
              </svg>
              {" "}
              <span>Add serial numbers for 2 appliances</span>
              <button className="ux-link" data-act="add-doc">Add</button>
            </li>
            <li>
              <svg width="17" height="17">
                <use href="#i-plus-circle" />
              </svg>
              {" "}
              <span>Add your most recent inspection</span>
              <button className="ux-link" data-act="add-doc">Add</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="ux-sech">
        <h2>Your properties</h2>
        <span className="ct">3</span>
      </div>
      <div className="ux-card ux-tasks">
        <div className="ux-task">
          <span className="ux-thumb ph1"></span>
          <div className="tx">
            <b>123 Happiness Street</b>
            <span>Safety Harbor, FL · Primary home</span>
          </div>
          <span className="ux-tag green">82 · Good</span>
          <span className="ux-tag teal">Viewing</span>
        </div>
        <div className="ux-task">
          <span className="ux-thumb ph2"></span>
          <div className="tx">
            <b>245 Peaceful Lane</b>
            <span>Palm Harbor, FL · Rental</span>
          </div>
          <span className="ux-tag amber">74 · Fair</span>
          <button className="ux-btn sec sm" data-toast="Switches every screen to 245 Peaceful Lane.">Switch to this home</button>
        </div>
        <div className="ux-task">
          <span className="ux-thumb ph3"></span>
          <div className="tx">
            <b>1117 Humble Way</b>
            <span>Dunedin, FL · Rental</span>
          </div>
          <span className="ux-tag green">79 · Good</span>
          <button className="ux-btn sec sm" data-toast="Switches every screen to 1117 Humble Way.">Switch to this home</button>
        </div>
      </div>
      <div>
        <button className="ux-btn sec" data-toast="Add a property: starts the same address lookup as the guided setup.">
          <svg width="17" height="17">
            <use href="#i-plus" />
          </svg>{" "}Add a property</button>
      </div>
    </AppShell>
  );
}
