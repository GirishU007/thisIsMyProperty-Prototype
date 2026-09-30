/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/07-agent-vaults.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Property Vaults" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-ag-vaults" data-route="/agent/vaults">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="agent" active="vaults" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar" style={{ gap: "18px" }}>
            <MenuButton />
            {" "}
            <span className="bigsearch">
              <svg width="16" height="16">
                <use href="#i-search" />
              </svg>{" "}Search clients, properties, documents, or keywords…</span>
            {" "}
            <div className="appbar-right">
              {" "}
              <Link className="iconbtn" href="/agent/alerts">
                <svg width="18" height="18">
                  <use href="#i-bell" />
                </svg>
                <span className="dot num">3</span>
              </Link>
              {" "}
              <button className="iconbtn" data-stub="Help center">
                <svg width="18" height="18">
                  <use href="#i-help" />
                </svg>
              </button>
              {" "}
              <span className="whoblock">
                <span className="ph"></span>
                <span>
                  <b>Welcome, Sarah</b>
                  <span>Agent</span>
                </span>
                {" "}
                <svg width="14" height="14" style={{ color: "var(--slate)" }}>
                  <use href="#i-chevd" />
                </svg>
              </span>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="content">
            {" "}
            <div className="pvhead">
              {" "}
              <div>
                {" "}
                <h1>Property Vaults</h1>
                {" "}
                <div className="sub">Manage your client vaults, properties, and important information — all in one place.</div>
                {" "}</div>
              {" "}
              <button className="add" data-stub="Add New Client">
                <svg width="17" height="17">
                  <use href="#i-plus" />
                </svg>{" "}Add New Client</button>
              {" "}</div>
            {" "}
            <div className="pvstats">
              {" "}
              <div className="pvstat">
                <span className="ic">
                  <svg width="26" height="26">
                    <use href="#i-users3" />
                  </svg>
                </span>
                {" "}
                <div>
                  <div className="n num">28</div>
                  <div className="t">Client Vaults</div>
                  <div className="s">Total clients</div>
                </div>
              </div>
              {" "}
              <div className="pvstat">
                <span className="ic">
                  <svg width="26" height="26">
                    <use href="#i-home" />
                  </svg>
                </span>
                {" "}
                <div>
                  <div className="n num">56</div>
                  <div className="t">Client Properties</div>
                  <div className="s">Across all vaults</div>
                </div>
              </div>
              {" "}
              <div className="pvstat">
                <span className="ic">
                  <svg width="26" height="26">
                    <use href="#i-doc" />
                  </svg>
                </span>
                {" "}
                <div>
                  <div className="n num">1,248</div>
                  <div className="t">Total Documents</div>
                  <div className="s">All client vaults</div>
                </div>
              </div>
              {" "}
              <div className="pvstat">
                <span className="ic">
                  <svg width="26" height="26">
                    <use href="#i-clock" />
                  </svg>
                </span>
                {" "}
                <div>
                  <div className="n num">24</div>
                  <div className="t">Upcoming Maintenance</div>
                  <div className="s">Next 90 days</div>
                </div>
              </div>
              {" "}</div>
            {" "}
            <div className="tabbar">
              {" "}
              <span className="tab is-on">Client Vaults</span>
              {" "}
              <button className="tab" data-stub="Client properties">Client Properties</button>
              {" "}
              <button className="tab" data-stub="Needs attention">Needs Attention{" "}
                <span className="c">12</span>
              </button>
              {" "}
              <button className="tab" data-stub="Upcoming maintenance">Upcoming Maintenance{" "}
                <span className="c amber">24</span>
              </button>
              {" "}
              <button className="tab" data-stub="Recently viewed">Recently Viewed</button>
              {" "}
              <span className="right">
                {" "}
                <span className="searchbox">
                  <svg width="14" height="14">
                    <use href="#i-search" />
                  </svg>{" "}Search clients or properties…</span>
                {" "}
                <button className="btn btn-ghost" style={{ padding: "9px 15px" }} data-stub="Filters">
                  <svg width="15" height="15">
                    <use href="#i-funnel" />
                  </svg>{" "}Filters</button>
                {" "}</span>
              {" "}</div>
            {" "}
            <div className="pvbody">
              {" "}
              <div className="pvlist">
                {" "}
                <div className="hd">
                  <h3>Client Vaults (28)</h3>
                  {" "}
                  <span className="pvsort">Last Name A–Z{" "}
                    <svg width="12" height="12">
                      <use href="#i-chevd" />
                    </svg>
                  </span>
                </div>
                {" "}
                <button className="pvrow is-on" data-stub="John Smith">
                  <span className="av" style={{ background: "#DCEBF5" }}>JS</span>
                  <span>
                    <b>John Smith</b>
                    <span className="p">2 properties</span>
                  </span>
                  <span className="rt">
                    <span className="l">Last activity</span>
                    <span className="d num">Sep 2, 2026</span>
                  </span>
                </button>
                {" "}
                <button className="pvrow" data-stub="Maria Kennedy">
                  <span className="av" style={{ background: "#F6E2DE" }}>MK</span>
                  <span>
                    <b>Maria Kennedy</b>
                    <span className="p">1 property</span>
                  </span>
                  <span className="rt">
                    <span className="l">Last activity</span>
                    <span className="d num">Aug 20, 2026</span>
                  </span>
                </button>
                {" "}
                <button className="pvrow" data-stub="David Thompson">
                  <span className="av" style={{ background: "#DEE9F6" }}>DT</span>
                  <span>
                    <b>David Thompson</b>
                    <span className="p">3 properties</span>
                  </span>
                  <span className="rt">
                    <span className="l">Last activity</span>
                    <span className="d num">Sep 1, 2026</span>
                  </span>
                </button>
                {" "}
                <button className="pvrow" data-stub="Sheryl Larson">
                  <span className="av" style={{ background: "#DCF0E6" }}>SL</span>
                  <span>
                    <b>Sheryl Larson</b>
                    <span className="p">1 property</span>
                  </span>
                  <span className="rt">
                    <span className="l">Last activity</span>
                    <span className="d num">Aug 15, 2026</span>
                  </span>
                </button>
                {" "}
                <button className="pvrow" data-stub="Robert Brown">
                  <span className="av" style={{ background: "#E6E2F6" }}>RB</span>
                  <span>
                    <b>Robert Brown</b>
                    <span className="p">2 properties</span>
                  </span>
                  <span className="rt">
                    <span className="l">Last activity</span>
                    <span className="d num">Aug 28, 2026</span>
                  </span>
                </button>
                {" "}
                <button className="pvrow" data-stub="Anna Collins">
                  <span className="av" style={{ background: "#D6F0F0" }}>AC</span>
                  <span>
                    <b>Anna Collins</b>
                    <span className="p">1 property</span>
                  </span>
                  <span className="rt">
                    <span className="l">Last activity</span>
                    <span className="d num">Aug 10, 2026</span>
                  </span>
                </button>
                {" "}
                <button className="pvrow" data-stub="Jennifer Wilson">
                  <span className="av" style={{ background: "#DCEBF5" }}>JW</span>
                  <span>
                    <b>Jennifer Wilson</b>
                    <span className="p">1 property</span>
                  </span>
                  <span className="rt">
                    <span className="l">Last activity</span>
                    <span className="d num">Sep 3, 2026</span>
                  </span>
                </button>
                {" "}
                <button className="pvrow" data-stub="Michael Lee">
                  <span className="av" style={{ background: "#E2E9F6" }}>ML</span>
                  <span>
                    <b>Michael Lee</b>
                    <span className="p">3 properties</span>
                  </span>
                  <span className="rt">
                    <span className="l">Last activity</span>
                    <span className="d num">Aug 25, 2026</span>
                  </span>
                </button>
                {" "}
                <div className="pvpage">
                  {" "}
                  <span className="n">Showing 1–8 of 28 clients</span>
                  {" "}
                  <span className="pg is-on num">1</span>
                  {" "}
                  <button className="pg num" data-stub="Page 2">2</button>
                  {" "}
                  <button className="pg num" data-stub="Page 3">3</button>
                  {" "}
                  <button className="pg num" data-stub="Page 4">4</button>
                  {" "}
                  <button className="pg" data-stub="Next page">
                    <svg width="13" height="13">
                      <use href="#i-chev" />
                    </svg>
                  </button>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div>
                {" "}
                <div className="pvdet">
                  {" "}
                  <div className="who">
                    {" "}
                    <span className="av">JS</span>
                    {" "}
                    <div>
                      <h2>John Smith</h2>
                      <div className="meta">john.smith@email.com  |  (813) 555-1234</div>
                    </div>
                    {" "}
                    <span className="acts">
                      {" "}
                      <button className="line" data-stub="Send email">
                        <svg width="16" height="16">
                          <use href="#i-mail" />
                        </svg>{" "}Send Email</button>
                      {" "}
                      <button className="solid" data-stub="Add property">
                        <svg width="16" height="16">
                          <use href="#i-plus" />
                        </svg>{" "}Add Property</button>
                      {" "}
                      <button className="iconbtn" data-stub="More actions">
                        <svg width="16" height="16">
                          <use href="#i-vdots" />
                        </svg>
                      </button>
                      {" "}</span>
                    {" "}</div>
                  {" "}
                  <div className="pvtabs">
                    {" "}
                    <span className="pvtab is-on">Properties (2)</span>
                    {" "}
                    <button className="pvtab" data-stub="Documents">Documents</button>
                    {" "}
                    <button className="pvtab" data-stub="Maintenance">Maintenance</button>
                    {" "}
                    <button className="pvtab" data-stub="Notes">Notes</button>
                    {" "}
                    <button className="pvtab" data-stub="Client details">Client Details</button>
                    {" "}</div>
                  {" "}
                  <div className="pvmain">
                    {" "}
                    <div className="pvcards">
                      {" "}
                      <div className="pvcard">
                        {" "}
                        <div className="ph ph1">
                          <span className="tag">Primary Home</span>
                          <span className="dots">
                            <svg width="14" height="14">
                              <use href="#i-vdots" />
                            </svg>
                          </span>
                        </div>
                        {" "}
                        <div className="bd">
                          {" "}
                          <div className="ad">123 Happiness Street<br />Safety Harbor, FL 34695</div>
                          {" "}
                          <div className="st">
                            {" "}
                            <div>
                              <div className="k">Property Health Score</div>
                              <div className="sc good num">82</div>
                              <div className="lab good">Good</div>
                            </div>
                            {" "}
                            <div>
                              <div className="k">Est. Value</div>
                              <div className="val num">$675,000</div>
                              <div className="dl num">↑ 5.2%</div>
                              <div className="vs">vs. last year</div>
                            </div>
                            {" "}</div>
                          {" "}
                          <Link className="go" href="/ho/profile">View Property{" "}
                            <svg width="15" height="15">
                              <use href="#i-arrow" />
                            </svg>
                          </Link>
                          {" "}</div>
                        {" "}</div>
                      {" "}
                      <div className="pvcard">
                        {" "}
                        <div className="ph pv-vac">
                          <span className="tag">Vacation Home</span>
                          <span className="dots">
                            <svg width="14" height="14">
                              <use href="#i-vdots" />
                            </svg>
                          </span>
                        </div>
                        {" "}
                        <div className="bd">
                          {" "}
                          <div className="ad">456 Pine Ridge Drive<br />Dunedin, FL 34698</div>
                          {" "}
                          <div className="st">
                            {" "}
                            <div>
                              <div className="k">Property Health Score</div>
                              <div className="sc good num">76</div>
                              <div className="lab good">Good</div>
                            </div>
                            {" "}
                            <div>
                              <div className="k">Est. Value</div>
                              <div className="val num">$520,000</div>
                              <div className="dl num">↑ 3.1%</div>
                              <div className="vs">vs. last year</div>
                            </div>
                            {" "}</div>
                          {" "}
                          <Link className="go" href="/ho/profile">View Property{" "}
                            <svg width="15" height="15">
                              <use href="#i-arrow" />
                            </svg>
                          </Link>
                          {" "}</div>
                        {" "}</div>
                      {" "}</div>
                    {" "}
                    <div>
                      {" "}
                      <div className="pvqa">
                        {" "}
                        <h3>Quick Actions</h3>
                        {" "}
                        <button data-stub="Upload Document">
                          <svg width="18" height="18">
                            <use href="#i-doc" />
                          </svg>{" "}Upload Document</button>
                        {" "}
                        <button data-stub="Add Note">
                          <svg width="18" height="18">
                            <use href="#i-pencil" />
                          </svg>{" "}Add Note</button>
                        {" "}
                        <button data-stub="Schedule Maintenance">
                          <svg width="18" height="18">
                            <use href="#i-wrench" />
                          </svg>{" "}Schedule Maintenance</button>
                        {" "}
                        <button data-stub="Send Client Update">
                          <svg width="18" height="18">
                            <use href="#i-send" />
                          </svg>{" "}Send Client Update</button>
                        {" "}
                        <button data-stub="Generate Report">
                          <svg width="18" height="18">
                            <use href="#i-chart" />
                          </svg>{" "}Generate Report</button>
                        {" "}</div>
                      {" "}
                      <div className="pvins">
                        {" "}
                        <svg className="ic" width="20" height="20">
                          <use href="#i-bulb" />
                        </svg>
                        {" "}
                        <div>
                          <b>Client Vault Insights</b>
                          {" "}
                          <span>2 properties  |  8 documents</span>
                          {" "}
                          <span>3 upcoming maintenance items</span>
                        </div>
                        {" "}</div>
                      {" "}</div>
                    {" "}</div>
                  {" "}
                  <div className="pvact">
                    {" "}
                    <div className="hd">
                      <h3>Recent Activity for John Smith</h3>
                      <Link className="link" href="/agent/clients">View All Activity →</Link>
                    </div>
                    {" "}
                    <div className="pvarow">
                      <svg width="18" height="18">
                        <use href="#i-doc" />
                      </svg>
                      <b>Uploaded HVAC service receipt</b>
                      <span className="pr">123 Happiness Street</span>
                      <span className="dt num">Sep 2, 2026</span>
                    </div>
                    {" "}
                    <div className="pvarow">
                      <svg width="18" height="18">
                        <use href="#i-wrench" />
                      </svg>
                      <b>Scheduled roof inspection</b>
                      <span className="pr">456 Pine Ridge Drive</span>
                      <span className="dt num">Aug 28, 2026</span>
                    </div>
                    {" "}
                    <div className="pvarow">
                      <svg width="18" height="18">
                        <use href="#i-home" />
                      </svg>
                      <b>Updated property details</b>
                      <span className="pr">123 Happiness Street</span>
                      <span className="dt num">Aug 15, 2026</span>
                    </div>
                    {" "}</div>
                  {" "}</div>
                {" "}</div>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
