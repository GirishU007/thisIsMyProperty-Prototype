/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/29-ho-improvements-detailed.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Home Improvements (Detailed)" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-impd" data-route="/ho/improvements/detailed">
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
              <Link className="crumb" href="/ho/reports">
                <svg width="12" height="12" style={{ transform: "rotate(180deg)" }}>
                  <use href="#i-chev" />
                </svg>{" "}Back to My Reports</Link>
              <h1>Detailed Home Improvements</h1>
              <div className="sub">Document. Track. Maintain. Plan for what’s next.</div>
            </div>
            {" "}
            <div className="appbar-right">
              {" "}
              <span className="sm muted" style={{ textAlign: "right", lineHeight: "1.35" }}>Report Date:<br />
                <b style={{ color: "var(--navy)" }}>September 22, 2026</b>
              </span>
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
            <div className="idtop">
              {" "}
              <Link className="photo ph1" href="/ho" aria-label="Photo of 123 Happiness Street">
                {" "}
                <span className="photo-btn">
                  <svg width="11" height="11">
                    <use href="#i-camera" />
                  </svg>{" "}View More Photos</span>
                {" "}</Link>
              {" "}
              <div>
                {" "}
                <span className="sellab">Select Property:</span>
                {" "}
                <div className="selbox">123 Happiness Street, Safety Harbor, FL 34695{" "}
                  <svg width="14" height="14">
                    <use href="#i-chevd" />
                  </svg>
                </div>
                {" "}
                <div className="seldrop">
                  {" "}
                  <span className="is-on">123 Happiness Street, Safety Harbor, FL 34695</span>
                  {" "}
                  <span>245 Peaceful Lane, Palm Harbor, FL 34683</span>
                  {" "}
                  <span>1117 Humble Way, Dunedin, FL 34698</span>
                  {" "}</div>
                {" "}
                <div className="impaddr">
                  {" "}
                  <div>
                    <b>123 Happiness Street</b>
                    <span>Safety Harbor, FL 34695</span>
                  </div>
                  {" "}
                  <span className="homepill">Primary Home</span>
                  {" "}</div>
                {" "}
                <div className="idfacts">
                  {" "}
                  <div className="fact">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-home" />
                    </svg>
                    <div>
                      <div className="k">Property Type</div>
                      <div className="v">Single Family Home</div>
                    </div>
                  </div>
                  {" "}
                  <div className="fact">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-bed" />
                    </svg>
                    <div>
                      <div className="k">Bedrooms</div>
                      <div className="v num">4</div>
                    </div>
                  </div>
                  {" "}
                  <div className="fact">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-calendar" />
                    </svg>
                    <div>
                      <div className="k">Year Built</div>
                      <div className="v num">2015</div>
                    </div>
                  </div>
                  {" "}
                  <div className="fact">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-bath" />
                    </svg>
                    <div>
                      <div className="k">Bathrooms</div>
                      <div className="v num">3.5</div>
                    </div>
                  </div>
                  {" "}
                  <div className="fact">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-area" />
                    </svg>
                    <div>
                      <div className="k">Living Area</div>
                      <div className="v num">2,842 sq ft</div>
                    </div>
                  </div>
                  {" "}
                  <div className="fact">
                    <svg className="ic" width="17" height="17">
                      <use href="#i-pin" />
                    </svg>
                    <div>
                      <div className="k">Lot Size</div>
                      <div className="v num">0.23 acres</div>
                    </div>
                  </div>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div className="idstats">
                {" "}
                <div className="idstat">
                  <svg width="28" height="28">
                    <use href="#i-tools" />
                  </svg>
                  <b className="num">18</b>
                  <span>Total Improvements</span>
                </div>
                {" "}
                <div className="idstat">
                  <svg width="28" height="28">
                    <use href="#i-dollar" />
                  </svg>
                  <b className="num">$191,673</b>
                  <span>Total Amount Spent</span>
                </div>
                {" "}
                <div className="idstat">
                  <svg width="28" height="28">
                    <use href="#i-calendar" />
                  </svg>
                  <b className="num">2020 – 2026</b>
                  <span>Years of Improvements</span>
                </div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="tabbar">
              {" "}
              <button className="tab is-on">All Improvements</button>
              {" "}
              <button className="tab" data-stub="By category">By Category</button>
              {" "}
              <button className="tab" data-stub="Upcoming projects">Upcoming Projects</button>
              {" "}
              <button className="tab" data-stub={"Photos & documents"}>Photos & Documents</button>
              {" "}
              <button className="tab" data-stub="Cost trends">Cost Trends</button>
              {" "}
              <span className="right">
                <Link className="btn btn-ghost" href="/ho/add" style={{ padding: "8px 14px" }}>
                  <svg width="13" height="13">
                    <use href="#i-plus" />
                  </svg>{" "}Add Improvement</Link>
              </span>
              {" "}</div>
            {" "}
            <div className="idgrp">
              {" "}
              <div className="idgrp-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-roof" />
                </svg>
                <b>Roofing (1)</b>
                <svg className="chv" width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="idtabwrap">
                <table className="idtab">
                  {" "}
                  <thead>
                    <tr>
                      <th>Improvement / Item</th>
                      <th>Make / Manufacturer</th>
                      <th>Model</th>
                      <th>Serial #</th>
                      <th>Year</th>
                      <th>Install Date</th>
                      <th>Contractor</th>
                      <th>Cost</th>
                      <th>Docs</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td className="nm">Roof Replacement (Shingle)</td>
                      <td>GAF</td>
                      <td>Timberline HDZ</td>
                      <td>N/A</td>
                      <td className="num">2023</td>
                      <td className="num">06/15/2023</td>
                      <td>Suncoast Roofing</td>
                      <td className="co num">$28,500</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>10-year workmanship warranty</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
              </div>
              {" "}</div>
            {" "}
            <div className="idgrp">
              {" "}
              <div className="idgrp-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-snow" />
                </svg>
                <b>HVAC (2)</b>
                <svg className="chv" width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="idtabwrap">
                <table className="idtab">
                  {" "}
                  <thead>
                    <tr>
                      <th>Improvement / Item</th>
                      <th>Make / Manufacturer</th>
                      <th>Model</th>
                      <th>Serial #</th>
                      <th>Year</th>
                      <th>Install Date</th>
                      <th>Contractor</th>
                      <th>Cost</th>
                      <th>Docs</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td className="nm">HVAC System Replacement (4 Ton)</td>
                      <td>Goodman</td>
                      <td>GSXC18</td>
                      <td>SN123456789</td>
                      <td className="num">2026</td>
                      <td className="num">03/20/2026</td>
                      <td>Cool Air Solutions</td>
                      <td className="co num">$12,800</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>10-year parts warranty</td>
                    </tr>
                    {" "}
                    <tr>
                      <td className="nm">AC Duct Cleaning & Maintenance</td>
                      <td>—</td>
                      <td>—</td>
                      <td>N/A</td>
                      <td className="num">2020</td>
                      <td className="num">04/02/2020</td>
                      <td>Cool Air Solutions</td>
                      <td className="co num">$1,300</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>Annual service plan</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
              </div>
              {" "}</div>
            {" "}
            <div className="idgrp">
              {" "}
              <div className="idgrp-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-drop" />
                </svg>
                <b>Plumbing (1)</b>
                <svg className="chv" width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="idtabwrap">
                <table className="idtab">
                  {" "}
                  <thead>
                    <tr>
                      <th>Improvement / Item</th>
                      <th>Make / Manufacturer</th>
                      <th>Model</th>
                      <th>Serial #</th>
                      <th>Year</th>
                      <th>Install Date</th>
                      <th>Contractor</th>
                      <th>Cost</th>
                      <th>Docs</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td className="nm">Water Heater Replacement (Hybrid)</td>
                      <td>Rheem</td>
                      <td>ProTerra 50</td>
                      <td>SN987654321</td>
                      <td className="num">2020</td>
                      <td className="num">07/10/2020</td>
                      <td>Harbor Plumbing</td>
                      <td className="co num">$2,950</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>10-year warranty</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
              </div>
              {" "}</div>
            {" "}
            <div className="idgrp">
              {" "}
              <div className="idgrp-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-bolt" />
                </svg>
                <b>Electrical (1)</b>
                <svg className="chv" width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="idtabwrap">
                <table className="idtab">
                  {" "}
                  <thead>
                    <tr>
                      <th>Improvement / Item</th>
                      <th>Make / Manufacturer</th>
                      <th>Model</th>
                      <th>Serial #</th>
                      <th>Year</th>
                      <th>Install Date</th>
                      <th>Contractor</th>
                      <th>Cost</th>
                      <th>Docs</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td className="nm">Electrical Panel Upgrade</td>
                      <td>Siemens</td>
                      <td>200 Amp</td>
                      <td>SN456789123</td>
                      <td className="num">2023</td>
                      <td className="num">11/05/2023</td>
                      <td>Tampa Electric Pros</td>
                      <td className="co num">$3,800</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>Upgraded to 200A with surge protection</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
              </div>
              {" "}</div>
            {" "}
            <div className="idgrp">
              {" "}
              <div className="idgrp-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-appliance" />
                </svg>
                <b>Appliances (3)</b>
                <svg className="chv" width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="idtabwrap">
                <table className="idtab">
                  {" "}
                  <thead>
                    <tr>
                      <th>Improvement / Item</th>
                      <th>Make / Manufacturer</th>
                      <th>Model</th>
                      <th>Serial #</th>
                      <th>Year</th>
                      <th>Install Date</th>
                      <th>Contractor</th>
                      <th>Cost</th>
                      <th>Docs</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td className="nm">New Refrigerator</td>
                      <td>KitchenAid</td>
                      <td>KRFC300ESS</td>
                      <td>SN111222333</td>
                      <td className="num">2024</td>
                      <td className="num">06/10/2024</td>
                      <td>Best Buy</td>
                      <td className="co num">$2,999</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>5-year warranty</td>
                    </tr>
                    {" "}
                    <tr>
                      <td className="nm">New Dishwasher</td>
                      <td>Bosch</td>
                      <td>800 Series</td>
                      <td>SN444555666</td>
                      <td className="num">2024</td>
                      <td className="num">06/10/2024</td>
                      <td>Best Buy</td>
                      <td className="co num">$1,199</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>5-year warranty</td>
                    </tr>
                    {" "}
                    <tr>
                      <td className="nm">New Range</td>
                      <td>KitchenAid</td>
                      <td>KSGG700ESS</td>
                      <td>SN777888999</td>
                      <td className="num">2024</td>
                      <td className="num">06/10/2024</td>
                      <td>Best Buy</td>
                      <td className="co num">$1,799</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>5-year warranty</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
              </div>
              {" "}</div>
            {" "}
            <div className="idgrp">
              {" "}
              <div className="idgrp-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-store" />
                </svg>
                <b>Kitchen (1)</b>
                <svg className="chv" width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="idtabwrap">
                <table className="idtab">
                  {" "}
                  <thead>
                    <tr>
                      <th>Improvement / Item</th>
                      <th>Make / Manufacturer</th>
                      <th>Model</th>
                      <th>Serial #</th>
                      <th>Year</th>
                      <th>Install Date</th>
                      <th>Contractor</th>
                      <th>Cost</th>
                      <th>Docs</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td className="nm">Kitchen Remodel</td>
                      <td>Custom</td>
                      <td>—</td>
                      <td>N/A</td>
                      <td className="num">2024</td>
                      <td className="num">02/14/2024</td>
                      <td>Harbor Kitchens</td>
                      <td className="co num">$42,000</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>Quartz counters, soft-close cabinetry</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
              </div>
              {" "}</div>
            {" "}
            <div className="idgrp">
              {" "}
              <div className="idgrp-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-bath" />
                </svg>
                <b>Bathroom (1)</b>
                <svg className="chv" width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="idtabwrap">
                <table className="idtab">
                  {" "}
                  <thead>
                    <tr>
                      <th>Improvement / Item</th>
                      <th>Make / Manufacturer</th>
                      <th>Model</th>
                      <th>Serial #</th>
                      <th>Year</th>
                      <th>Install Date</th>
                      <th>Contractor</th>
                      <th>Cost</th>
                      <th>Docs</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td className="nm">Primary Bathroom Remodel</td>
                      <td>Custom</td>
                      <td>—</td>
                      <td>N/A</td>
                      <td className="num">2023</td>
                      <td className="num">09/18/2023</td>
                      <td>Harbor Kitchens</td>
                      <td className="co num">$24,000</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>Walk-in shower, heated floor</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
              </div>
              {" "}</div>
            {" "}
            <div className="idgrp">
              {" "}
              <div className="idgrp-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-exterior" />
                </svg>
                <b>Exterior (3)</b>
                <svg className="chv" width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="idtabwrap">
                <table className="idtab">
                  {" "}
                  <thead>
                    <tr>
                      <th>Improvement / Item</th>
                      <th>Make / Manufacturer</th>
                      <th>Model</th>
                      <th>Serial #</th>
                      <th>Year</th>
                      <th>Install Date</th>
                      <th>Contractor</th>
                      <th>Cost</th>
                      <th>Docs</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td className="nm">Exterior Paint (Whole House)</td>
                      <td>Sherwin-Williams</td>
                      <td>Duration</td>
                      <td>N/A</td>
                      <td className="num">2025</td>
                      <td className="num">10/02/2025</td>
                      <td>Gulf Coast Painting</td>
                      <td className="co num">$6,200</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>8-year coating warranty</td>
                    </tr>
                    {" "}
                    <tr>
                      <td className="nm">Impact Windows (Whole Home)</td>
                      <td>PGT</td>
                      <td>WinGuard</td>
                      <td>N/A</td>
                      <td className="num">2024</td>
                      <td className="num">08/22/2024</td>
                      <td>Suncoast Windows</td>
                      <td className="co num">$26,000</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>Wind-rated; insurance credit</td>
                    </tr>
                    {" "}
                    <tr>
                      <td className="nm">Fence & Landscaping</td>
                      <td>—</td>
                      <td>—</td>
                      <td>N/A</td>
                      <td className="num">2022</td>
                      <td className="num">09/30/2022</td>
                      <td>Green Coast Landscape</td>
                      <td className="co num">$7,200</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>Vinyl fence, native plantings</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
              </div>
              {" "}</div>
            {" "}
            <div className="idgrp">
              {" "}
              <div className="idgrp-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-pool" />
                </svg>
                <b>Pool & Outdoor (3)</b>
                <svg className="chv" width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="idtabwrap">
                <table className="idtab">
                  {" "}
                  <thead>
                    <tr>
                      <th>Improvement / Item</th>
                      <th>Make / Manufacturer</th>
                      <th>Model</th>
                      <th>Serial #</th>
                      <th>Year</th>
                      <th>Install Date</th>
                      <th>Contractor</th>
                      <th>Cost</th>
                      <th>Docs</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td className="nm">Pool Resurfacing</td>
                      <td>Pebble Tec</td>
                      <td>Classic</td>
                      <td>N/A</td>
                      <td className="num">2025</td>
                      <td className="num">04/12/2025</td>
                      <td>Bay Pools</td>
                      <td className="co num">$9,800</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>7-year surface warranty</td>
                    </tr>
                    {" "}
                    <tr>
                      <td className="nm">Pool Heater Replacement</td>
                      <td>Pentair</td>
                      <td>MasterTemp 400</td>
                      <td>SN220455001</td>
                      <td className="num">2022</td>
                      <td className="num">05/04/2022</td>
                      <td>Bay Pools</td>
                      <td className="co num">$4,276</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>2-year parts warranty</td>
                    </tr>
                    {" "}
                    <tr>
                      <td className="nm">Lanai Cage Rescreen</td>
                      <td>—</td>
                      <td>—</td>
                      <td>N/A</td>
                      <td className="num">2020</td>
                      <td className="num">08/15/2020</td>
                      <td>Bay Screen Co.</td>
                      <td className="co num">$3,450</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>Pet-resistant screen</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
              </div>
              {" "}</div>
            {" "}
            <div className="idgrp">
              {" "}
              <div className="idgrp-h">
                <svg className="ic" width="20" height="20">
                  <use href="#i-interior" />
                </svg>
                <b>Interior (2)</b>
                <svg className="chv" width="14" height="14">
                  <use href="#i-chevd" />
                </svg>
              </div>
              {" "}
              <div className="idtabwrap">
                <table className="idtab">
                  {" "}
                  <thead>
                    <tr>
                      <th>Improvement / Item</th>
                      <th>Make / Manufacturer</th>
                      <th>Model</th>
                      <th>Serial #</th>
                      <th>Year</th>
                      <th>Install Date</th>
                      <th>Contractor</th>
                      <th>Cost</th>
                      <th>Docs</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      <td className="nm">Interior Paint & Flooring</td>
                      <td>Shaw</td>
                      <td>Luxury Vinyl Plank</td>
                      <td>N/A</td>
                      <td className="num">2021</td>
                      <td className="num">03/08/2021</td>
                      <td>Bayshore Interiors</td>
                      <td className="co num">$11,400</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>LVP throughout main level</td>
                    </tr>
                    {" "}
                    <tr>
                      <td className="nm">Garage Organization System</td>
                      <td>Gladiator</td>
                      <td>GearTrack</td>
                      <td>N/A</td>
                      <td className="num">2020</td>
                      <td className="num">11/20/2020</td>
                      <td>Self-installed</td>
                      <td className="co num">$2,000</td>
                      <td>
                        <span className="iddocs">
                          <svg width="14" height="14">
                            <use href="#i-doc" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-shield-check" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-camera" />
                          </svg>
                          <svg width="14" height="14">
                            <use href="#i-arrow" />
                          </svg>
                        </span>
                      </td>
                      <td>Overhead racks and cabinets</td>
                    </tr>
                    {" "}</tbody>
                  {" "}</table>
              </div>
              {" "}</div>
            {" "}
            <div className="idbtm">
              {" "}
              <div className="impnote">
                {" "}
                <svg width="32" height="32">
                  <use href="#i-bulb" />
                </svg>
                {" "}
                <div>
                  <h3>Keep Improving</h3>
                  {" "}
                  <p>A well-maintained home is a more comfortable, efficient and enjoyable place to live.</p>
                </div>
                {" "}</div>
              {" "}
              <div className="impnote">
                {" "}
                <svg width="32" height="32">
                  <use href="#i-share" />
                </svg>
                {" "}
                <div>
                  <h3>Quick Links</h3>
                  {" "}
                  <div className="idlinks">
                    {" "}
                    <Link href="/ho/vault">View All Receipts{" "}
                      <svg width="13" height="13">
                        <use href="#i-arrow" />
                      </svg>
                    </Link>
                    {" "}
                    <Link href="/ho/vault">View All Permits{" "}
                      <svg width="13" height="13">
                        <use href="#i-arrow" />
                      </svg>
                    </Link>
                    {" "}
                    <Link href="/ho/vault">View All Photos{" "}
                      <svg width="13" height="13">
                        <use href="#i-arrow" />
                      </svg>
                    </Link>
                    {" "}
                    <Link href="/ho/improvements">Summary Report{" "}
                      <svg width="13" height="13">
                        <use href="#i-arrow" />
                      </svg>
                    </Link>
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
