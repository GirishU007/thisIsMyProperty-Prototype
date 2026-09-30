/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/01-home.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { PublicNav } from "@/components/timp/PublicNav";
import { PublicFooter } from "@/components/timp/Footers";

export const metadata: Metadata = {
  title: { absolute: "ThisIsMyProperty.com — Your home’s health at your fingertips" },
};

export default function Page() {
  return (
    <section className="screen is-active" id="s-home" data-route="/home">
      {" "}
      <div className="pubwrap">
        {" "}
        <PublicNav active="home" />
        {" "}
        <div className="hero">
          {" "}
          <div className="hero-in">
            {" "}
            <div>
              {" "}
              <h1>Know Your Home’s Health.<br />
                <span className="l2">Predict What Comes Next.</span>
              </h1>
              {" "}
              <p className="hero-tag">Your home’s health at your fingertips.™</p>
              {" "}
              <p className="lede">One intelligent platform that helps homeowners understand, maintain, protect and document their property — while giving real estate professionals better tools to serve clients before, during and long after the transaction.</p>
              {" "}
              <div className="hero-actions">
                {" "}
                <Link className="btn btn-primary" href="/try">Try it free</Link>
                {" "}
                <Link className="btn btn-ghost" href="/how">See features{" "}
                  <svg className="ic" width="15" height="15">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                {" "}</div>
              {" "}
              <div className="stars">
                {" "}
                <span style={{ color: "#E8B23A", display: "flex", gap: "2px" }}>
                  {" "}
                  <svg width="14" height="14">
                    <use href="#i-star-f" />
                  </svg>
                  <svg width="14" height="14">
                    <use href="#i-star-f" />
                  </svg>
                  <svg width="14" height="14">
                    <use href="#i-star-f" />
                  </svg>
                  <svg width="14" height="14">
                    <use href="#i-star-f" />
                  </svg>
                  <svg width="14" height="14">
                    <use href="#i-star-f" />
                  </svg>
                  {" "}</span>
                {" "}
                <b>4.8/5</b>
                {" "}
                <span className="muted">from homeowners</span>
                {" "}</div>
              {" "}
              <p className="sm muted" style={{ marginTop: "6px" }}>Real value. Real peace of mind.</p>
              {" "}</div>
            {" "}
            <Link className="herodev" href="/ho" role="img" aria-label="The ThisIsMyProperty dashboard shown on a laptop and a phone"></Link>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section" style={{ paddingTop: "36px", paddingBottom: "0" }}>
          {" "}
          <div className="section-in">
            {" "}
            <div className="band">
              {" "}
              <div className="ico">
                <svg width="26" height="26">
                  <use href="#i-chart" />
                </svg>
              </div>
              {" "}
              <div className="big num">$500B+</div>
              {" "}
              <div className="txt">spent yearly on U.S. home repairs & maintenance — largely without a formal management tool.{" "}
                <span style={{ display: "block", marginTop: "7px", fontSize: "11px", color: "rgba(255,255,255,.65)" }}>(Source: joint industry home-improvement spend estimates)</span>
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
              <h2>You know your car’s health better than your home’s.</h2>
            </div>
            {" "}
            <div className="vs">
              {" "}
              <div className="vs-card">
                {" "}
                <div className="vs-head">
                  <div className="vs-orb a">
                    <svg width="21" height="21">
                      <use href="#i-car" />
                    </svg>
                  </div>
                  <h3 style={{ margin: "0" }}>Your car</h3>
                </div>
                {" "}
                <ul className="vs-list">
                  {" "}
                  <li>
                    <svg width="16" height="16" style={{ color: "var(--green)", flexShrink: "0" }}>
                      <use href="#i-check" />
                    </svg>{" "}Full service history</li>
                  {" "}
                  <li>
                    <svg width="16" height="16" style={{ color: "var(--green)", flexShrink: "0" }}>
                      <use href="#i-check" />
                    </svg>{" "}Known mileage & condition</li>
                  {" "}
                  <li>
                    <svg width="16" height="16" style={{ color: "var(--green)", flexShrink: "0" }}>
                      <use href="#i-check" />
                    </svg>{" "}Predictive maintenance alerts</li>
                  {" "}
                  <li>
                    <svg width="16" height="16" style={{ color: "var(--green)", flexShrink: "0" }}>
                      <use href="#i-check" />
                    </svg>{" "}Trusted resale record (CARFAX)</li>
                  {" "}</ul>
                {" "}</div>
              {" "}
              <div className="vs-mid">
                <span>VS.</span>
              </div>
              {" "}
              <div className="vs-card">
                {" "}
                <div className="vs-head">
                  <div className="vs-orb b">
                    <svg width="21" height="21">
                      <use href="#i-home" />
                    </svg>
                  </div>
                  <h3 style={{ margin: "0" }}>Your home</h3>
                </div>
                {" "}
                <ul className="vs-list">
                  {" "}
                  <li>
                    <svg width="16" height="16" style={{ color: "var(--red)", flexShrink: "0" }}>
                      <use href="#i-x" />
                    </svg>{" "}No service history</li>
                  {" "}
                  <li>
                    <svg width="16" height="16" style={{ color: "var(--red)", flexShrink: "0" }}>
                      <use href="#i-x" />
                    </svg>{" "}Unknown system conditions</li>
                  {" "}
                  <li>
                    <svg width="16" height="16" style={{ color: "var(--red)", flexShrink: "0" }}>
                      <use href="#i-x" />
                    </svg>{" "}No predictive insight</li>
                  {" "}
                  <li>
                    <svg width="16" height="16" style={{ color: "var(--red)", flexShrink: "0" }}>
                      <use href="#i-x" />
                    </svg>{" "}Nothing transfers at resale</li>
                  {" "}</ul>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section" style={{ background: "var(--paper)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
          {" "}
          <div className="section-in">
            {" "}
            <div className="section-head">
              <h2>How It Works</h2>
              <p>A smarter way to care for one of your biggest investments.</p>
            </div>
            {" "}
            <div className="steps has-shots">
              {" "}
              <div className="step">
                <div className="stephd">Upload Documents</div>
                <div className="stepshot si-vault">
                  <span className="sn num">01</span>
                </div>
                <p>Snap receipts, warranties and permits into one secure vault.</p>
              </div>
              {" "}
              <div className="step">
                <div className="stephd">Home Health Score</div>
                <div className="stepshot si-health">
                  <span className="sn num">02</span>
                </div>
                <p>One score shows the condition of every major system.</p>
              </div>
              {" "}
              <div className="step">
                <div className="stephd">Upcoming Maintenance</div>
                <div className="stepshot si-ahead">
                  <span className="sn num">03</span>
                </div>
                <p>Know what’s due before it becomes a repair.</p>
              </div>
              {" "}
              <div className="step">
                <div className="stephd">Price Estimate Request</div>
                <div className="stepshot si-cost">
                  <span className="sn num">04</span>
                </div>
                <p>See fair local prices before you hire.</p>
              </div>
              {" "}
              <div className="step">
                <div className="stephd">Preserve the Story</div>
                <div className="stepshot si-story">
                  <span className="sn num">05</span>
                </div>
                <p>A verified home history that passes to heirs and future owners.</p>
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
              <h2>All the tools you need to confidently care for your home.</h2>
            </div>
            {" "}
            <div className="tools">
              {" "}
              <Link className="tool" href="/ho/health">
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-heart" />
                  </svg>
                </div>
                <h4>Know Your Home’s Health</h4>
                <p>Get a clear view of your home’s systems and overall health in one simple score.</p>
              </Link>
              {" "}
              <Link className="tool" href="/ho/alerts">
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-calendar" />
                  </svg>
                </div>
                <h4>See What’s Coming</h4>
                <p>Predict maintenance needs and potential costs so you can plan ahead.</p>
              </Link>
              {" "}
              <Link className="tool" href="/ho/estimate">
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-dollar" />
                  </svg>
                </div>
                <h4>Know What Things Should Cost</h4>
                <p>Access local cost intelligence and price estimates with confidence.</p>
              </Link>
              {" "}
              <Link className="tool" href="/ho/vault">
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-folder" />
                  </svg>
                </div>
                <h4>Organize Everything</h4>
                <p>Store receipts, warranties, manuals and permits in your secure Property Vault.</p>
              </Link>
              {" "}
              <Link className="tool" href="/ho/alerts">
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-bell" />
                  </svg>
                </div>
                <h4>Get Smart Alerts</h4>
                <p>Receive timely reminders and alerts for maintenance, inspections and deadlines.</p>
              </Link>
              {" "}
              <Link className="tool" href="/ho">
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-chart" />
                  </svg>
                </div>
                <h4>Track & Report</h4>
                <p>See your home’s history, improvements, expenses and value all in one place.</p>
              </Link>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section" style={{ background: "var(--paper)", borderTop: "1px solid var(--line-soft)" }}>
          {" "}
          <div className="section-in sbs">
            {" "}
            <div>
              {" "}
              <h2>Know Your Home.<br />System by System.</h2>
              {" "}
              <p>Click any area to see real-time health, recommendations, service history and estimated costs.</p>
              {" "}
              <Link className="btn btn-primary" href="/ho/health" style={{ marginTop: "18px" }}>Explore the interactive home</Link>
              {" "}</div>
            {" "}
            <div className="syscluster">
              {" "}
              <div className="chipcol">
                {" "}
                <Link className="chip" href="/ho/health">
                  <svg className="ic" width="17" height="17">
                    <use href="#i-roof" />
                  </svg>{" "}Roof</Link>
                {" "}
                <Link className="chip" href="/ho/health">
                  <svg className="ic" width="17" height="17">
                    <use href="#i-snow" />
                  </svg>{" "}HVAC</Link>
                {" "}
                <Link className="chip" href="/ho/health">
                  <svg className="ic" width="17" height="17">
                    <use href="#i-drop" />
                  </svg>{" "}Plumbing</Link>
                {" "}
                <Link className="chip" href="/ho/health">
                  <svg className="ic" width="17" height="17">
                    <use href="#i-bolt" />
                  </svg>{" "}Electrical</Link>
                {" "}
                <Link className="chip" href="/ho/health">
                  <svg className="ic" width="17" height="17">
                    <use href="#i-water" />
                  </svg>{" "}Water Heater</Link>
                {" "}</div>
              {" "}
              <img className="sbs-house" alt="Cutaway view of a home showing its major systems" src="/images/timp/home-sbs-house.jpg" />
              {" "}
              <div className="chipcol">
                {" "}
                <Link className="chip" href="/ho/health">
                  <svg className="ic" width="17" height="17">
                    <use href="#i-window" />
                  </svg>{" "}Windows & Doors</Link>
                {" "}
                <Link className="chip" href="/ho/health">
                  <svg className="ic" width="17" height="17">
                    <use href="#i-exterior" />
                  </svg>{" "}Exterior / Siding</Link>
                {" "}
                <Link className="chip" href="/ho/health">
                  <svg className="ic" width="17" height="17">
                    <use href="#i-pool" />
                  </svg>{" "}Pool / Spa</Link>
                {" "}
                <Link className="chip" href="/ho/health">
                  <svg className="ic" width="17" height="17">
                    <use href="#i-interior" />
                  </svg>{" "}Interior</Link>
                {" "}
                <Link className="chip" href="/ho/health">
                  <svg className="ic" width="17" height="17">
                    <use href="#i-tree" />
                  </svg>{" "}Landscaping</Link>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section">
          {" "}
          <div className="section-in">
            {" "}
            <div className="section-head">
              <h2>A home is more than where you live. It’s your biggest investment.</h2>
            </div>
            {" "}
            <div className="values">
              {" "}
              <div className="value v1">
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-shield-check" />
                  </svg>
                </div>
                <h4>Protect Your Investment</h4>
                <p>Well-maintained homes retain more value and cost less to repair.</p>
              </div>
              {" "}
              <div className="value v2">
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-dollar" />
                  </svg>
                </div>
                <h4>Save Time & Money</h4>
                <p>Plan ahead, avoid surprises and get the best value for every repair.</p>
              </div>
              {" "}
              <div className="value v3">
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-heart" />
                  </svg>
                </div>
                <h4>Reduce Stress</h4>
                <p>Stay on top of what matters so you can enjoy your home.</p>
              </div>
              {" "}
              <div className="value v4">
                <div className="ic">
                  <svg width="24" height="24">
                    <use href="#i-users" />
                  </svg>
                </div>
                <h4>Build a Lasting Legacy</h4>
                <p>Create a verified history that passes on with the home — to your heirs, and to future homeowners.</p>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section" style={{ paddingTop: "0" }}>
          {" "}
          <div className="section-in">
            {" "}
            <div className="quote">
              {" "}
              <div className="quote-a">
                {" "}
                <span className="mark">“</span>
                {" "}
                <p>
                  <b style={{ color: "#fff" }}>ThisIsMyProperty</b>{" "}gives me peace of mind. I know what’s going on with my home, what’s coming next and what it should cost. It’s a game changer.</p>
                {" "}
                <div className="who">– Mark T.{" "}
                  <span>Homeowner, Palm Harbor, FL</span>
                </div>
                {" "}</div>
              {" "}
              <div className="quote-b">
                {" "}
                <div>
                  <div className="ic">
                    <svg width="17" height="17">
                      <use href="#i-lock" />
                    </svg>
                  </div>
                  <h4>Secure & Private</h4>
                  <p>Bank-level encryption keeps your data safe and private.</p>
                </div>
                {" "}
                <div>
                  <div className="ic">
                    <svg width="17" height="17">
                      <use href="#i-cloud" />
                    </svg>
                  </div>
                  <h4>Always Accessible</h4>
                  <p>Access your home information, anytime, anywhere.</p>
                </div>
                {" "}
                <div>
                  <div className="ic">
                    <svg width="17" height="17">
                      <use href="#i-users" />
                    </svg>
                  </div>
                  <h4>Trusted Network</h4>
                  <p>Connect with verified professionals you can trust.</p>
                </div>
                {" "}</div>
              {" "}
              <div className="quote-c"></div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="section" style={{ paddingTop: "0", paddingBottom: "56px" }}>
          {" "}
          <div className="section-in">
            {" "}
            <div className="ctapair">
              {" "}
              <div className="ctaband">
                {" "}
                <div className="ico">
                  <svg width="22" height="22">
                    <use href="#i-home" />
                  </svg>
                </div>
                {" "}
                <div>
                  {" "}
                  <span className="ctatag">Homeowner</span>
                  {" "}
                  <h3>Ready to take control of your home’s health?</h3>
                  {" "}
                  <p>Join thousands of homeowners building their Property Vault.</p>
                  {" "}</div>
                {" "}
                <div className="right">
                  {" "}
                  <Link className="btn btn-primary" href="/try">Try it free today</Link>
                  {" "}
                  <div className="tiny">No credit card required.</div>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div className="ctaband">
                {" "}
                <div className="ico">
                  <svg width="22" height="22">
                    <use href="#i-handshake" />
                  </svg>
                </div>
                {" "}
                <div>
                  {" "}
                  <span className="ctatag">Real Estate Professional</span>
                  {" "}
                  <h3>A closing gift your clients will actually use.</h3>
                  {" "}
                  <p>Stay connected through meaningful home data — the gift that keeps on giving.</p>
                  {" "}</div>
                {" "}
                <div className="right">
                  {" "}
                  <Link className="btn btn-primary" href="/register/agent">Try it free today</Link>
                  {" "}
                  <div className="tiny">
                    <Link href="/agents" style={{ color: "var(--teal-deep)", fontWeight: "700" }}>See how it works for agents →</Link>
                  </div>
                  {" "}</div>
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
