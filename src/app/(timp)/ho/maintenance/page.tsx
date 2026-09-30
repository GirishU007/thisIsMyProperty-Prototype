/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/27-ho-maintenance.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Upcoming Maintenance" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-maint" data-route="/ho/maintenance">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="ho" active="alerts" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              <Link className="crumb" href="/ho/alerts">
                <svg width="12" height="12" style={{ transform: "rotate(180deg)" }}>
                  <use href="#i-chev" />
                </svg>{" "}Back to My Alerts</Link>
              {" "}
              <div className="printonly">ThisIsMyProperty.com  ·  All Properties</div>
              {" "}
              <h1>Upcoming Maintenance</h1>
              <div className="sub">Stay ahead of repairs, replacements and routine care. A well-maintained home protects your investment.</div>
            </div>
            {" "}
            <div className="appbar-right">
              {" "}
              <button className="btn btn-ghost" style={{ padding: "7px 13px" }} data-print>
                <svg width="14" height="14">
                  <use href="#i-doc" />
                </svg>{" "}Print</button>
              {" "}
              <span className="searchbox">
                <svg width="14" height="14">
                  <use href="#i-search" />
                </svg>{" "}Search…</span>
              {" "}
              <Link className="iconbtn" href="/ho/alerts">
                <svg width="17" height="17">
                  <use href="#i-bell" />
                </svg>
                <span className="dot num">2</span>
              </Link>
              {" "}
              <div className="avatar">JS</div>
              {" "}
              <span className="who-mini">Hi, Jane{" "}
                <svg width="13" height="13" style={{ color: "var(--slate)" }}>
                  <use href="#i-chevd" />
                </svg>
              </span>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="content">
            {" "}
            <div className="umtop">
              {" "}
              <span className="lb">Property</span>
              {" "}
              <span className="umsel" data-stub="Filter by property">All Properties{" "}
                <svg width="12" height="12">
                  <use href="#i-chevd" />
                </svg>
              </span>
              {" "}</div>
            {" "}
            <div className="withrail">
              {" "}
              <div>
                {" "}
                <div className="umstats">
                  {" "}
                  <div className="umstat">
                    <span className="ic" style={{ background: "#DFF2F2", color: "var(--teal-deep)" }}>
                      <svg width="20" height="20">
                        <use href="#i-wrench" />
                      </svg>
                    </span>
                    {" "}
                    <div>
                      <div className="n num">8</div>
                      <div className="k">Upcoming<br />Items</div>
                      <Link className="link" href="/ho/maintenance">View All →</Link>
                    </div>
                  </div>
                  {" "}
                  <div className="umstat">
                    <span className="ic" style={{ background: "#FBE0E2", color: "var(--red)" }}>
                      <svg width="20" height="20">
                        <use href="#i-calendar" />
                      </svg>
                    </span>
                    {" "}
                    <div>
                      <div className="n num red">1</div>
                      <div className="k">Overdue</div>
                      <Link className="link" href="/ho/maintenance">View Overdue →</Link>
                    </div>
                  </div>
                  {" "}
                  <div className="umstat">
                    <span className="ic" style={{ background: "#FCEBD5", color: "var(--amber)" }}>
                      <svg width="20" height="20">
                        <use href="#i-clock" />
                      </svg>
                    </span>
                    {" "}
                    <div>
                      <div className="n num amber">2</div>
                      <div className="k">Due in<br />Next 30 Days</div>
                      <Link className="link" href="/ho/maintenance">View Next 30 Days →</Link>
                    </div>
                  </div>
                  {" "}
                  <div className="umstat">
                    <span className="ic" style={{ background: "#E3EDF7", color: "#2A5A85" }}>
                      <svg width="20" height="20">
                        <use href="#i-home" />
                      </svg>
                    </span>
                    {" "}
                    <div>
                      <div className="n num">1</div>
                      <div className="k">Long-Term<br />
                        <span className="tiny muted">({">"} 6 Months)</span>
                      </div>
                      <Link className="link" href="/ho/maintenance">View Long-Term →</Link>
                    </div>
                  </div>
                  {" "}</div>
                {" "}
                <div className="filters">
                  {" "}
                  <button className="filt is-on">All Maintenance</button>
                  {" "}
                  <button className="filt">By Property</button>
                  {" "}
                  <button className="filt">By Category</button>
                  {" "}
                  <span className="searchbox" style={{ marginLeft: "auto", padding: "6px 10px", fontSize: "11.5px" }}>
                    <svg width="13" height="13">
                      <use href="#i-search" />
                    </svg>{" "}Search maintenance items…</span>
                  {" "}
                  <button className="filt">
                    <svg width="13" height="13" style={{ verticalAlign: "-2px" }}>
                      <use href="#i-funnel" />
                    </svg>{" "}Filter</button>
                  {" "}</div>
                {" "}
                <div className="tablewrap">
                  {" "}
                  <table className="clients um">
                    {" "}
                    <thead>
                      <tr>
                        {" "}
                        <th>Item</th>
                        <th>Property</th>
                        <th>Category</th>
                        {" "}
                        <th>Due Date{" "}
                          <svg width="11" height="11">
                            <use href="#i-chevd" />
                          </svg>
                        </th>
                        {" "}
                        <th>Status</th>
                        <th>Actions</th>
                        {" "}</tr>
                    </thead>
                    {" "}
                    <tbody>
                      {" "}
                      <tr>
                        <td>
                          <span className="umitem">
                            <span className="umthumb u-hvac"></span>
                            <span>
                              <b>HVAC Service</b>
                              <span>Semi-annual service</span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="umprop">123 Happiness Street<br />Safety Harbor, FL 34695</span>
                        </td>
                        <td>
                          <span className="umcat">
                            <svg width="16" height="16">
                              <use href="#i-snow" />
                            </svg>{" "}HVAC</span>
                        </td>
                        <td>
                          <span className="umdue">
                            <b className="red">Aug 15, 2026</b>
                            <span>(28 days overdue)</span>
                          </span>
                        </td>
                        <td>
                          <span className="umst umst-over">Overdue</span>
                        </td>
                        <td>
                          <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                            <use href="#i-vdots" />
                          </svg>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <span className="umitem">
                            <span className="umthumb u-roof"></span>
                            <span>
                              <b>Roof Inspection</b>
                              <span>Annual inspection</span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="umprop">123 Happiness Street<br />Safety Harbor, FL 34695</span>
                        </td>
                        <td>
                          <span className="umcat">
                            <svg width="16" height="16">
                              <use href="#i-roof" />
                            </svg>{" "}Roofing</span>
                        </td>
                        <td>
                          <span className="umdue">
                            <b className="">Oct 1, 2026</b>
                            <span>(19 days)</span>
                          </span>
                        </td>
                        <td>
                          <span className="umst umst-soon">Due Soon</span>
                        </td>
                        <td>
                          <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                            <use href="#i-vdots" />
                          </svg>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <span className="umitem">
                            <span className="umthumb u-pool"></span>
                            <span>
                              <b>Pool Service</b>
                              <span>Monthly service</span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="umprop">1117 Humble Way<br />Dunedin, FL 34698</span>
                        </td>
                        <td>
                          <span className="umcat">
                            <svg width="16" height="16">
                              <use href="#i-pool" />
                            </svg>{" "}Pool / Spa</span>
                        </td>
                        <td>
                          <span className="umdue">
                            <b className="">Oct 10, 2026</b>
                            <span>(28 days)</span>
                          </span>
                        </td>
                        <td>
                          <span className="umst umst-soon">Due Soon</span>
                        </td>
                        <td>
                          <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                            <use href="#i-vdots" />
                          </svg>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <span className="umitem">
                            <span className="umthumb u-wheat"></span>
                            <span>
                              <b>Water Heater</b>
                              <span>Check for leaks & performance</span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="umprop">245 Peaceful Lane<br />Palm Harbor, FL 34683</span>
                        </td>
                        <td>
                          <span className="umcat">
                            <svg width="16" height="16">
                              <use href="#i-water" />
                            </svg>{" "}Water Heater</span>
                        </td>
                        <td>
                          <span className="umdue">
                            <b className="">Nov 28, 2026</b>
                            <span>(77 days)</span>
                          </span>
                        </td>
                        <td>
                          <span className="umst umst-sched">Scheduled</span>
                        </td>
                        <td>
                          <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                            <use href="#i-vdots" />
                          </svg>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <span className="umitem">
                            <span className="umthumb u-pest"></span>
                            <span>
                              <b>Pest Control</b>
                              <span>Quarterly service</span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="umprop">1117 Humble Way<br />Dunedin, FL 34698</span>
                        </td>
                        <td>
                          <span className="umcat">
                            <svg width="16" height="16">
                              <use href="#i-shield" />
                            </svg>{" "}Pest Control</span>
                        </td>
                        <td>
                          <span className="umdue">
                            <b className="">Dec 15, 2026</b>
                            <span>(94 days)</span>
                          </span>
                        </td>
                        <td>
                          <span className="umst umst-up">Upcoming</span>
                        </td>
                        <td>
                          <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                            <use href="#i-vdots" />
                          </svg>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <span className="umitem">
                            <span className="umthumb u-filter"></span>
                            <span>
                              <b>Air Filter Replacement</b>
                              <span>Replace filter (every 3 months)</span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="umprop">123 Happiness Street<br />Safety Harbor, FL 34695</span>
                        </td>
                        <td>
                          <span className="umcat">
                            <svg width="16" height="16">
                              <use href="#i-snow" />
                            </svg>{" "}HVAC</span>
                        </td>
                        <td>
                          <span className="umdue">
                            <b className="">Dec 20, 2026</b>
                            <span>(99 days)</span>
                          </span>
                        </td>
                        <td>
                          <span className="umst umst-up">Upcoming</span>
                        </td>
                        <td>
                          <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                            <use href="#i-vdots" />
                          </svg>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <span className="umitem">
                            <span className="umthumb u-paint"></span>
                            <span>
                              <b>Exterior Paint Inspection</b>
                              <span>Check for wear, cracks or water damage</span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="umprop">245 Peaceful Lane<br />Palm Harbor, FL 34683</span>
                        </td>
                        <td>
                          <span className="umcat">
                            <svg width="16" height="16">
                              <use href="#i-paint" />
                            </svg>{" "}Exterior</span>
                        </td>
                        <td>
                          <span className="umdue">
                            <b className="">Mar 1, 2027</b>
                            <span>(170 days)</span>
                          </span>
                        </td>
                        <td>
                          <span className="umst umst-up">Upcoming</span>
                        </td>
                        <td>
                          <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                            <use href="#i-vdots" />
                          </svg>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <span className="umitem">
                            <span className="umthumb u-land"></span>
                            <span>
                              <b>Landscaping Refresh</b>
                              <span>Trim, mulch and seasonal plants</span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="umprop">1117 Humble Way<br />Dunedin, FL 34698</span>
                        </td>
                        <td>
                          <span className="umcat">
                            <svg width="16" height="16">
                              <use href="#i-tree" />
                            </svg>{" "}Landscaping</span>
                        </td>
                        <td>
                          <span className="umdue">
                            <b className="">Apr 15, 2027</b>
                            <span>(215 days)</span>
                          </span>
                        </td>
                        <td>
                          <span className="umst umst-up">Upcoming</span>
                        </td>
                        <td>
                          <svg width="14" height="14" style={{ color: "#B6C4CE" }}>
                            <use href="#i-vdots" />
                          </svg>
                        </td>
                      </tr>
                      {" "}</tbody>
                    {" "}</table>
                  {" "}
                  <div className="tfoot">
                    <span className="n">Showing 1–8 of 8 items</span>
                    {" "}
                    <span className="pager">
                      <span className="n">Rows per page: 10</span>
                      <span className="pg">‹</span>
                      <span className="pg is-on num">1</span>
                      <span className="pg">›</span>
                    </span>
                    {" "}</div>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div style={{ display: "grid", gap: "14px" }}>
                {" "}
                <div className="minisect" style={{ background: "#F1FAFA", borderColor: "#CFE9E9" }}>
                  {" "}
                  <div className="minisect-h">
                    <svg className="ic" width="16" height="16">
                      <use href="#i-plus-circle" />
                    </svg>
                    <b>Quick Add</b>
                  </div>
                  {" "}
                  <p className="tiny" style={{ color: "var(--navy)", fontWeight: "700", marginBottom: "3px" }}>Add a Maintenance Item</p>
                  {" "}
                  <p className="tiny muted" style={{ marginBottom: "10px" }}>Track upcoming maintenance, repairs or improvements.</p>
                  {" "}
                  <Link className="btn btn-primary" href="/ho/add" style={{ width: "100%", justifyContent: "center", padding: "10px 12px" }}>
                    <svg width="13" height="13">
                      <use href="#i-plus" />
                    </svg>{" "}Add Maintenance Item</Link>
                  {" "}</div>
                {" "}
                <div className="minisect">
                  {" "}
                  <div className="minisect-h">
                    <svg className="ic" width="16" height="16" style={{ color: "var(--amber)" }}>
                      <use href="#i-bulb" />
                    </svg>
                    <b>Maintenance Tips</b>
                    <Link className="link" href="/ho/resources">View All</Link>
                  </div>
                  {" "}
                  <div className="umtip" role="img" aria-label="An outdoor air-conditioning condenser unit beside a home"></div>
                  {" "}
                  <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--navy)", lineHeight: "1.3" }}>Keep Your HVAC Running Efficiently</p>
                  {" "}
                  <p className="tiny muted" style={{ marginTop: "5px" }}>Schedule regular maintenance twice a year to improve efficiency, lower energy bills and extend the life of your system.</p>
                  {" "}
                  <Link className="tiny" href="/ho/resources" style={{ color: "var(--teal-deep)", fontWeight: "700", display: "block", marginTop: "8px" }}>Read More →</Link>
                  {" "}
                  <div className="umdots">
                    <i className="on"></i>
                    <i></i>
                    <i></i>
                  </div>
                  {" "}</div>
                {" "}
                <div className="minisect">
                  {" "}
                  <div className="minisect-h">
                    <svg className="ic" width="16" height="16">
                      <use href="#i-users" />
                    </svg>
                    <b>Trusted Service Providers</b>
                  </div>
                  {" "}
                  <p className="tiny muted" style={{ marginBottom: "10px" }}>Need help with maintenance? Our vetted providers are here to help.</p>
                  {" "}
                  <Link className="btn btn-ghost" href="/ho/providers" style={{ width: "100%", justifyContent: "center", padding: "10px 12px" }}>Find a Service Provider{" "}
                    <svg width="13" height="13">
                      <use href="#i-arrow" />
                    </svg>
                  </Link>
                  {" "}</div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="grid4" style={{ marginTop: "16px" }}>
              {" "}
              <div className="whyit" style={{ margin: "0" }}>
                <svg className="ic" width="17" height="17">
                  <use href="#i-clock" />
                </svg>
                <div>
                  <b>Never Miss a Service</b>
                  <br />
                  <span className="tiny">Routine care scheduled around your home’s systems.</span>
                </div>
              </div>
              {" "}
              <div className="whyit" style={{ margin: "0" }}>
                <svg className="ic" width="17" height="17">
                  <use href="#i-dollar" />
                </svg>
                <div>
                  <b>Avoid Costly Repairs</b>
                  <br />
                  <span className="tiny">Small fixes today prevent big bills tomorrow.</span>
                </div>
              </div>
              {" "}
              <div className="whyit" style={{ margin: "0" }}>
                <svg className="ic" width="17" height="17">
                  <use href="#i-shield-check" />
                </svg>
                <div>
                  <b>Protect Warranties</b>
                  <br />
                  <span className="tiny">Documented service keeps coverage intact.</span>
                </div>
              </div>
              {" "}
              <div className="whyit" style={{ margin: "0" }}>
                <svg className="ic" width="17" height="17">
                  <use href="#i-trend" />
                </svg>
                <div>
                  <b>Support Your Value</b>
                  <br />
                  <span className="tiny">A maintained home holds its worth at resale.</span>
                </div>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
