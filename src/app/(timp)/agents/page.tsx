/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/02-agents.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = { title: "Agent Landing Page" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-agents" data-route="/agents">
      {" "}
      <div className="pubwrap">
        {" "}
        <PublicNav active="agents" />
        {" "}
        <div className="hero">
          {" "}
          <div className="hero-in ag">
            {" "}
            <div>
              {" "}
              <h1>More Than a Closing.<br />
                <span style={{ color: "var(--teal-deep)" }}>A Relationship That Lasts.</span>
              </h1>
              {" "}
              <p className="lede">Give your clients lasting value with the Property Vault — a home management platform they’ll use every day. Stay top of mind, become their go-to resource, and win the next move.</p>
              {" "}
              <ul className="agfeat">
                {" "}
                <li>
                  <span className="ic">
                    <svg width="19" height="19">
                      <use href="#i-gift" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    <b>Give your clients{" "}
                      <em>and friends a discounted membership.</em>
                    </b>
                    <span>Provide a free Property Vault at closing.</span>
                  </div>
                </li>
                {" "}
                <li>
                  <span className="ic">
                    <svg width="19" height="19">
                      <use href="#i-heart" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    <b>Stay Connected. Stay Top of Mind.</b>
                    <span>Help clients long after the transaction.</span>
                  </div>
                </li>
                {" "}
                <li>
                  <span className="ic">
                    <svg width="19" height="19">
                      <use href="#i-users" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    <b>Be Their Trusted Resource.</b>
                    <span>Useful tools, insights and alerts they rely on.</span>
                  </div>
                </li>
                {" "}</ul>
              {" "}
              <div className="hero-actions">
                {" "}
                <Link className="btn btn-primary" href="/register/agent">Try it free</Link>
                {" "}
                <Link className="btn btn-ghost" href="/pricing/agents">See agent plans</Link>
                {" "}</div>
              {" "}</div>
            {" "}
            <img className="agdevice" alt="The ThisIsMyProperty agent dashboard shown on a laptop" src="/images/timp/agents-agdevice.jpg" />
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section" style={{ paddingTop: "34px", paddingBottom: "0" }}>
          {" "}
          <div className="section-in">
            {" "}
            <div className="agstats">
              {" "}
              <div className="agstat-lead">
                {" "}
                <span className="orb">
                  <svg width="24" height="24">
                    <use href="#i-users" />
                  </svg>
                </span>
                {" "}
                <p>Agents who stay in touch after closing earn{" "}
                  <b>3x more repeat and referral business.</b>
                </p>
                {" "}</div>
              {" "}
              <div className="agstat">
                <div className="top">
                  <span className="ic">
                    <svg width="20" height="20">
                      <use href="#i-users" />
                    </svg>
                  </span>
                  <span className="n num">3X</span>
                </div>
                <div className="lab">More repeat & referral business</div>
              </div>
              {" "}
              <div className="agstat">
                <div className="top">
                  <span className="ic">
                    <svg width="20" height="20">
                      <use href="#i-home" />
                    </svg>
                  </span>
                  <span className="n num">2.5X</span>
                </div>
                <div className="lab">More likely to be used again when they move</div>
              </div>
              {" "}
              <div className="agstat">
                <div className="top">
                  <span className="ic">
                    <svg width="20" height="20">
                      <use href="#i-hands" />
                    </svg>
                  </span>
                  <span className="n num">90%</span>
                </div>
                <div className="lab">Of clients value ongoing agent communication</div>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section">
          {" "}
          <div className="section-in">
            {" "}
            <div className="section-head">
              <h2>How It Works for You</h2>
            </div>
            {" "}
            <div className="steps four">
              {" "}
              <div className="step-line"></div>
              {" "}
              <div className="step">
                <div className="step-n num">1</div>
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-gift" />
                  </svg>
                </div>
                <h4>Give at Closing</h4>
                <p>Deliver a free Property Vault to your clients as a thoughtful, valuable closing gift.</p>
              </div>
              {" "}
              <div className="step">
                <div className="step-n num">2</div>
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-phone" />
                  </svg>
                </div>
                <h4>Stay in Their World</h4>
                <p>They receive helpful alerts, tips and resources that keep you front and center.</p>
              </div>
              {" "}
              <div className="step">
                <div className="step-n num">3</div>
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-chart" />
                  </svg>
                </div>
                <h4>Provide Ongoing Value</h4>
                <p>Offer tools and insights that help them care for and protect their home.</p>
              </div>
              {" "}
              <div className="step">
                <div className="step-n num">4</div>
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-handshake" />
                  </svg>
                </div>
                <h4>Win the Next Move</h4>
                <p>When they’re ready to buy or sell, they’ll call the agent who has always been there.</p>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section" style={{ background: "var(--paper)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
          {" "}
          <div className="section-in agtools">
            {" "}
            <img className="agdevice" alt="Marketing Center shown on a laptop beside a client reminder on a phone" src="/images/timp/agents-agdevice-2.jpg" />
            {" "}
            <div>
              {" "}
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "24px", fontWeight: "600", marginBottom: "6px" }}>Tools That Make You Look Good</h2>
              {" "}
              <div className="agtool">
                <span className="ic">
                  <svg width="18" height="18">
                    <use href="#i-megaphone" />
                  </svg>
                </span>
                {" "}
                <div>
                  <b>Marketing Center</b>
                  <span>Done-for-you emails, social posts and flyers.</span>
                </div>
              </div>
              {" "}
              <div className="agtool">
                <span className="ic">
                  <svg width="18" height="18">
                    <use href="#i-chart" />
                  </svg>
                </span>
                {" "}
                <div>
                  <b>Client Activity Feed</b>
                  <span>See what your clients are doing in their Property Vaults.</span>
                </div>
              </div>
              {" "}
              <div className="agtool">
                <span className="ic">
                  <svg width="18" height="18">
                    <use href="#i-bell" />
                  </svg>
                </span>
                {" "}
                <div>
                  <b>Smart Alerts</b>
                  <span>Know when clients have important maintenance or homeownership needs.</span>
                </div>
              </div>
              {" "}
              <div className="agtool">
                <span className="ic">
                  <svg width="18" height="18">
                    <use href="#i-doc" />
                  </svg>
                </span>
                {" "}
                <div>
                  <b>Reports & Insights</b>
                  <span>Track engagement and identify future opportunities.</span>
                </div>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section">
          {" "}
          <div className="section-in">
            {" "}
            <div className="agquote">
              {" "}
              <div className="agquote-a">
                {" "}
                <span className="mark">“</span>
                {" "}
                <p>The Property Vault changed the way I stay in touch with my clients. They love the value, and I love the referrals.</p>
                {" "}
                <div className="who">– Jessica M.{" "}
                  <span>Realtor®, Tampa Bay</span>
                </div>
                {" "}</div>
              {" "}
              <div className="agquote-b">
                {" "}
                <div>
                  <div className="ic">
                    <svg width="21" height="21">
                      <use href="#i-heart" />
                    </svg>
                  </div>
                  <h4>Clients Love It</h4>
                  <p>Practical. Helpful. Easy to use. They actually thank you for it.</p>
                </div>
                {" "}
                <div>
                  <div className="ic">
                    <svg width="21" height="21">
                      <use href="#i-users" />
                    </svg>
                  </div>
                  <h4>You Stay Top of Mind</h4>
                  <p>Useful communication keeps you the first agent they call.</p>
                </div>
                {" "}
                <div>
                  <div className="ic">
                    <svg width="21" height="21">
                      <use href="#i-star" />
                    </svg>
                  </div>
                  <h4>Stronger Relationships</h4>
                  <p>Build trust that leads to more business and lifelong clients.</p>
                </div>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section" style={{ paddingTop: "0", paddingBottom: "52px" }}>
          {" "}
          <div className="section-in">
            {" "}
            <div className="movement">
              {" "}
              <div className="ico">
                <svg width="24" height="24">
                  <use href="#i-handshake" />
                </svg>
              </div>
              {" "}
              <div>
                {" "}
                <h3>Turn Every Closing Into the Beginning of the Next.</h3>
                {" "}
                <p>Join thousands of agents who are building stronger client relationships with ThisIsMyProperty.</p>
                {" "}</div>
              {" "}
              <div className="right">
                {" "}
                <Link className="btn btn-white" href="/register/agent">Try it free today</Link>
                {" "}
                <div className="tiny" style={{ color: "rgba(255,255,255,.6)", marginTop: "6px" }}>No credit card required.</div>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <PublicFooter />
        {" "}</div>
      {" "}</section>
  );
}
