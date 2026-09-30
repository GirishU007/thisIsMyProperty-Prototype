/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/23-ho-reports.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "My Reports" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-reports" data-route="/ho/reports">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="ho" active="reports" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              <h1>My Reports</h1>
              <div className="sub">Your home. Your data. Insights for a smarter tomorrow.</div>
            </div>
            {" "}
            <div className="appbar-right">
              {" "}
              <span className="searchbox" style={{ minWidth: "0" }}>
                <svg width="15" height="15">
                  <use href="#i-search" />
                </svg>{" "}Search</span>
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
            <div className="mrban">
              {" "}
              <span className="ic">
                <svg width="28" height="28">
                  <use href="#i-doc" />
                </svg>
              </span>
              {" "}
              <div>
                {" "}
                <h2>Available Reports</h2>
                {" "}
                <p>Generate, view or download reports to better understand and manage your property.</p>
                {" "}</div>
              {" "}
              <span className="art" role="img" aria-label="Knowledge today. A healthier home tomorrow."></span>
              {" "}</div>
            {" "}
            <div className="mrcards">
              {" "}
              <div className="mrcard">
                <div className="hd">
                  <svg width="28" height="28">
                    <use href="#i-home-health" />
                  </svg>
                  <h3>Property Health<br />(Summary)</h3>
                </div>
                <p>A high-level overview of your home’s overall condition, including system health scores and key insights.</p>
                <Link className="gen" href="/ho/health">Generate Report{" "}
                  <svg width="15" height="15">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                <Link className="samp" href="/ho/health">View Sample</Link>
              </div>
              {" "}
              <div className="mrcard">
                <div className="hd">
                  <svg width="28" height="28">
                    <use href="#i-doc" />
                  </svg>
                  <h3>Property Health<br />(Detailed)</h3>
                </div>
                <p>An in-depth analysis of your home’s systems, components, maintenance history and recommendations.</p>
                <Link className="gen" href="/ho/report">Generate Report{" "}
                  <svg width="15" height="15">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                <Link className="samp" href="/ho/report">View Sample</Link>
              </div>
              {" "}
              <div className="mrcard">
                <div className="hd">
                  <svg width="28" height="28">
                    <use href="#i-wrench" />
                  </svg>
                  <h3>Home Improvements/<br />Upgrades (Summary)</h3>
                </div>
                <p>A summary of completed improvements and upgrades, including estimated value and impact on your home’s health.</p>
                <Link className="gen" href="/ho/improvements">Generate Report{" "}
                  <svg width="15" height="15">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                <Link className="samp" href="/ho/improvements">View Sample</Link>
              </div>
              {" "}
              <div className="mrcard">
                <div className="hd">
                  <svg width="28" height="28">
                    <use href="#i-chart" />
                  </svg>
                  <h3>Home Improvements/<br />Upgrades (Detailed)</h3>
                </div>
                <p>A comprehensive list of all improvements and upgrades, with dates, costs, warranties and supporting details.</p>
                <Link className="gen" href="/ho/improvements/detailed">Generate Report{" "}
                  <svg width="15" height="15">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                <Link className="samp" href="/ho/improvements/detailed">View Sample</Link>
              </div>
              {" "}</div>
            {" "}
            <div className="mrsplit">
              {" "}
              <div className="mrsect">
                {" "}
                <div className="hd">
                  <h2>Recent Reports</h2>
                  <span className="link static-link">View All Reports →</span>
                </div>
                {" "}
                <p>Your previously generated reports are saved here for easy access.</p>
                {" "}
                <div className="tablewrap" style={{ marginTop: "0", border: "0", borderRadius: "0" }}>
                  {" "}
                  <table className="mrtab">
                    {" "}
                    <thead>
                      <tr>
                        <th>Report Name</th>
                        <th>Property</th>
                        <th>Generated On</th>
                        <th>Type</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    {" "}
                    <tbody>
                      {" "}
                      <tr>
                        <td>
                          <Link className="mrname" href="/ho/health">
                            <svg width="20" height="20">
                              <use href="#i-home-health" />
                            </svg>
                            <b>Property Health (Summary)</b>
                          </Link>
                        </td>
                        <td>123 Happiness Street</td>
                        <td className="num">May 20, 2026</td>
                        <td>PDF</td>
                        {" "}
                        <td>
                          <span className="mracts">
                            <button className="mrdl" data-stub="Download report">
                              <svg width="15" height="15">
                                <use href="#i-download" />
                              </svg>{" "}Download</button>
                            <svg className="dots" width="15" height="15">
                              <use href="#i-vdots" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <Link className="mrname" href="/ho/report">
                            <svg width="20" height="20">
                              <use href="#i-doc" />
                            </svg>
                            <b>Property Health (Detailed)</b>
                          </Link>
                        </td>
                        <td>123 Happiness Street</td>
                        <td className="num">Apr 15, 2026</td>
                        <td>PDF</td>
                        {" "}
                        <td>
                          <span className="mracts">
                            <button className="mrdl" data-stub="Download report">
                              <svg width="15" height="15">
                                <use href="#i-download" />
                              </svg>{" "}Download</button>
                            <svg className="dots" width="15" height="15">
                              <use href="#i-vdots" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <Link className="mrname" href="/ho/improvements">
                            <svg width="20" height="20">
                              <use href="#i-wrench" />
                            </svg>
                            <b>Home Improvements/<br />Upgrades (Summary)</b>
                          </Link>
                        </td>
                        <td>245 Peaceful Lane</td>
                        <td className="num">Mar 10, 2026</td>
                        <td>PDF</td>
                        {" "}
                        <td>
                          <span className="mracts">
                            <button className="mrdl" data-stub="Download report">
                              <svg width="15" height="15">
                                <use href="#i-download" />
                              </svg>{" "}Download</button>
                            <svg className="dots" width="15" height="15">
                              <use href="#i-vdots" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <Link className="mrname" href="/ho/improvements/detailed">
                            <svg width="20" height="20">
                              <use href="#i-chart" />
                            </svg>
                            <b>Home Improvements/<br />Upgrades (Detailed)</b>
                          </Link>
                        </td>
                        <td>1117 Humble Way</td>
                        <td className="num">Feb 22, 2026</td>
                        <td>PDF</td>
                        {" "}
                        <td>
                          <span className="mracts">
                            <button className="mrdl" data-stub="Download report">
                              <svg width="15" height="15">
                                <use href="#i-download" />
                              </svg>{" "}Download</button>
                            <svg className="dots" width="15" height="15">
                              <use href="#i-vdots" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      {" "}
                      <tr>
                        <td>
                          <Link className="mrname" href="/ho/health">
                            <svg width="20" height="20">
                              <use href="#i-doc" />
                            </svg>
                            <b>Property Health (Summary)</b>
                          </Link>
                        </td>
                        <td>245 Peaceful Lane</td>
                        <td className="num">Jan 8, 2026</td>
                        <td>PDF</td>
                        {" "}
                        <td>
                          <span className="mracts">
                            <button className="mrdl" data-stub="Download report">
                              <svg width="15" height="15">
                                <use href="#i-download" />
                              </svg>{" "}Download</button>
                            <svg className="dots" width="15" height="15">
                              <use href="#i-vdots" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      {" "}</tbody>
                    {" "}</table>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div>
                {" "}
                <div className="mrtips">
                  {" "}
                  <div className="hd">
                    <span className="bulb">
                      <svg width="22" height="22">
                        <use href="#i-bulb" />
                      </svg>
                    </span>
                    {" "}
                    <b>Tips for Getting the Most from Your Reports</b>
                  </div>
                  {" "}
                  <div className="mrtip">
                    <i>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>
                    </i>
                    <span>Generate a new report after completing a major improvement or service.</span>
                  </div>
                  {" "}
                  <div className="mrtip">
                    <i>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>
                    </i>
                    <span>Use the detailed reports to plan and budget for future projects.</span>
                  </div>
                  {" "}
                  <div className="mrtip">
                    <i>
                      <svg width="12" height="12">
                        <use href="#i-check" />
                      </svg>
                    </i>
                    <span>Share reports with your trusted advisor or contractor.</span>
                  </div>
                  {" "}</div>
                {" "}
                <div className="mrwell">
                  {" "}
                  <div className="ph" role="img" aria-label="A sunlit living room"></div>
                  {" "}
                  <div className="tx">
                    {" "}
                    <h3>A well-maintained home<br />is a happier home.</h3>
                    {" "}
                    <p>Use your reports to stay informed, plan ahead and protect your investment for years to come.</p>
                    {" "}</div>
                  {" "}</div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="mrsec">
              {" "}
              <span className="sh">
                <svg width="22" height="22">
                  <use href="#i-shield-check" />
                </svg>
              </span>
              {" "}
              <div>
                <b>Your data is encrypted and secure.</b>
                <span>Bank-level security to protect what matters most.</span>
              </div>
              {" "}
              <span className="rt">
                <button className="btn btn-ghost" data-stub="Contact support">Contact Support{" "}
                  <svg width="15" height="15">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </span>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
