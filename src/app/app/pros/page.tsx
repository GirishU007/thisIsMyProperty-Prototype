// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "Find a pro" };

export default function Page() {
  return (
    <AppShell active="pros" title="Find a pro" sub="Vetted local pros, reviewed by other members.">
      <div className="ux-filter" id="pro-filter">
        <button className="ux-chip is-on" data-f="all">All</button>
        <button className="ux-chip" data-f="HVAC">HVAC</button>
        <button className="ux-chip" data-f="Plumbing">Plumbing</button>
        <button className="ux-chip" data-f="Electrical">Electrical</button>
        <button className="ux-chip" data-f="Roofing">Roofing</button>
        <button className="ux-chip" data-f="Painting">Painting</button>
        <button className="ux-chip" data-f="Landscaping">Landscaping</button>
      </div>
      <div className="ux-prolist" id="pro-list">
        <div className="ux-card ux-procard" data-type="HVAC">
          <span className="av hpav0"></span>
          <div className="tx">
            <b>Cool Air Solutions</b>
            <span className="cat">HVAC · Tampa, FL · 12.4 mi</span>
            <p>Energy-efficient installations and repairs. Serviced this home in May.</p>
            <div className="meta">
              <span className="rate">
                <svg width="15" height="15">
                  <use href="#i-star-f" />
                </svg>{" "}4.9</span>
              <span>256 reviews</span>
              <span className="ux-tag green">
                <svg width="13" height="13">
                  <use href="#i-check" />
                </svg>{" "}Verified</span>
              <span className="ux-tag grey">Licensed and insured</span>
            </div>
          </div>
          <div className="acts">
            <button className="ux-btn pri sm" data-act="pro-quote" data-pro="Cool Air Solutions">Request a quote</button>
            <button className="ux-btn sec sm" data-toast="Pro profile: not built in this prototype yet.">View profile</button>
          </div>
        </div>
        <div className="ux-card ux-procard" data-type="Plumbing">
          <span className="av hpav1"></span>
          <div className="tx">
            <b>Harbor Plumbing</b>
            <span className="cat">Plumbing · Safety Harbor, FL · 2.1 mi</span>
            <p>Water heaters, leak detection and repiping. Installed this home’s water heater.</p>
            <div className="meta">
              <span className="rate">
                <svg width="15" height="15">
                  <use href="#i-star-f" />
                </svg>{" "}4.9</span>
              <span>212 reviews</span>
              <span className="ux-tag green">
                <svg width="13" height="13">
                  <use href="#i-check" />
                </svg>{" "}Verified</span>
              <span className="ux-tag grey">Licensed and insured</span>
            </div>
          </div>
          <div className="acts">
            <button className="ux-btn pri sm" data-act="pro-quote" data-pro="Harbor Plumbing">Request a quote</button>
            <button className="ux-btn sec sm" data-toast="Pro profile: not built in this prototype yet.">View profile</button>
          </div>
        </div>
        <div className="ux-card ux-procard" data-type="Roofing">
          <span className="av hpav2"></span>
          <div className="tx">
            <b>Suncoast Roofing</b>
            <span className="cat">Roofing · Clearwater, FL · 6.8 mi</span>
            <p>Shingle and tile roofs, storm inspections. Replaced this home’s roof in 2023.</p>
            <div className="meta">
              <span className="rate">
                <svg width="15" height="15">
                  <use href="#i-star-f" />
                </svg>{" "}4.8</span>
              <span>184 reviews</span>
              <span className="ux-tag green">
                <svg width="13" height="13">
                  <use href="#i-check" />
                </svg>{" "}Verified</span>
              <span className="ux-tag grey">Licensed and insured</span>
            </div>
          </div>
          <div className="acts">
            <button className="ux-btn pri sm" data-act="pro-quote" data-pro="Suncoast Roofing">Request a quote</button>
            <button className="ux-btn sec sm" data-toast="Pro profile: not built in this prototype yet.">View profile</button>
          </div>
        </div>
        <div className="ux-card ux-procard" data-type="Electrical">
          <span className="av hpav1"></span>
          <div className="tx">
            <b>Tampa Electric Pros</b>
            <span className="cat">Electrical · Tampa, FL · 14.0 mi</span>
            <p>Panel upgrades, surge protection and EV chargers.</p>
            <div className="meta">
              <span className="rate">
                <svg width="15" height="15">
                  <use href="#i-star-f" />
                </svg>{" "}4.8</span>
              <span>147 reviews</span>
              <span className="ux-tag green">
                <svg width="13" height="13">
                  <use href="#i-check" />
                </svg>{" "}Verified</span>
              <span className="ux-tag grey">Licensed and insured</span>
            </div>
          </div>
          <div className="acts">
            <button className="ux-btn pri sm" data-act="pro-quote" data-pro="Tampa Electric Pros">Request a quote</button>
            <button className="ux-btn sec sm" data-toast="Pro profile: not built in this prototype yet.">View profile</button>
          </div>
        </div>
        <div className="ux-card ux-procard" data-type="Painting">
          <span className="av hpav0"></span>
          <div className="tx">
            <b>Gulf Coast Painting</b>
            <span className="cat">Painting · Dunedin, FL · 5.2 mi</span>
            <p>Interior and exterior painting with coating warranties.</p>
            <div className="meta">
              <span className="rate">
                <svg width="15" height="15">
                  <use href="#i-star-f" />
                </svg>{" "}4.7</span>
              <span>96 reviews</span>
              <span className="ux-tag green">
                <svg width="13" height="13">
                  <use href="#i-check" />
                </svg>{" "}Verified</span>
              <span className="ux-tag grey">Licensed and insured</span>
            </div>
          </div>
          <div className="acts">
            <button className="ux-btn pri sm" data-act="pro-quote" data-pro="Gulf Coast Painting">Request a quote</button>
            <button className="ux-btn sec sm" data-toast="Pro profile: not built in this prototype yet.">View profile</button>
          </div>
        </div>
        <div className="ux-card ux-procard" data-type="Landscaping">
          <span className="av hpav2"></span>
          <div className="tx">
            <b>Green Coast Landscape</b>
            <span className="cat">Landscaping · Palm Harbor, FL · 4.4 mi</span>
            <p>Native plantings, fencing and irrigation.</p>
            <div className="meta">
              <span className="rate">
                <svg width="15" height="15">
                  <use href="#i-star-f" />
                </svg>{" "}4.7</span>
              <span>88 reviews</span>
              <span className="ux-tag green">
                <svg width="13" height="13">
                  <use href="#i-check" />
                </svg>{" "}Verified</span>
              <span className="ux-tag grey">Licensed and insured</span>
            </div>
          </div>
          <div className="acts">
            <button className="ux-btn pri sm" data-act="pro-quote" data-pro="Green Coast Landscape">Request a quote</button>
            <button className="ux-btn sec sm" data-toast="Pro profile: not built in this prototype yet.">View profile</button>
          </div>
        </div>
      </div>
      <div className="ux-note">
        <svg width="17" height="17">
          <use href="#i-shield-check" />
        </svg>
        {" "}
        <span>Every pro is screened for licensing, insurance and references, and has signed our code of ethics. Reviews come from paying members only.</span>
      </div>
    </AppShell>
  );
}
