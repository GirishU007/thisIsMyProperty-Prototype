/* eslint-disable @next/next/no-img-element */
// Ported 1:1 from design-reference/screens/05-ho-add.html — do not restyle; edit the markup only.
import type { Metadata } from "next";
import Link from "next/link";
import { AppFooter } from "@/components/timp/Footers";
import { Sidebar } from "@/components/timp/Sidebar";
import { MenuButton } from "@/components/timp/MenuButton";

export const metadata: Metadata = { title: "Add New" };

export default function Page() {
  return (
    <section className="screen is-active" id="s-add" data-route="/ho/add">
      {" "}
      <div className="app">
        {" "}
        <Sidebar kind="ho" active="add" />
        {" "}
        <div className="main">
          {" "}
          <div className="appbar">
            <MenuButton />
            {" "}
            <div>
              <h1>Add New</h1>
              <div className="sub">Add a new document, record or piece of information to your property.</div>
            </div>
            {" "}
            <div className="appbar-right">
              {" "}
              <span className="who-mini">
                <svg width="16" height="16" style={{ color: "var(--slate)" }}>
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
            <div className="propchip">
              {" "}
              <img src="/images/timp/ho-add-123-happiness-street.jpg" alt="123 Happiness Street" />
              {" "}
              <span className="m">
                <b>Property: 123 Happiness Street, Safety Harbor, FL 34695</b>
                <span>You can always change the property later.</span>
              </span>
              {" "}
              <button className="btn btn-ghost" data-stub="Change Property">Change Property{" "}
                <svg width="12" height="12">
                  <use href="#i-chevd" />
                </svg>
              </button>
              {" "}</div>
            {" "}
            <div className="addgrid">
              {" "}
              <div className="addcard">
                {" "}
                <div className="addcard-h">
                  {" "}
                  <span className="orb">
                    <svg width="44" height="44">
                      <use href="#i-cloud" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h2>Scan or Upload<br />Document, Receipt, Invoice</h2>
                    {" "}
                    <p>Quickly add your documents and we’ll help organize the details for you.</p>
                    {" "}</div>
                  {" "}</div>
                {" "}
                <button className="bigbtn" data-stub="Choose File">
                  <svg width="22" height="22">
                    <use href="#i-cloud" />
                  </svg>{" "}Choose File</button>
                {" "}
                <div className="dropnote">or drag and drop your file here</div>
                {" "}
                <div className="infopanel">
                  {" "}
                  <span className="tick">
                    <svg width="14" height="14">
                      <use href="#i-check" />
                    </svg>
                  </span>
                  {" "}
                  <div style={{ flex: "1" }}>
                    {" "}
                    <b>We accept the following file types:</b>
                    {" "}
                    <p>PDF, JPG, PNG, HEIC, MP4 or other video files.</p>
                    {" "}
                    <p className="sm">You can also upload multiple files at once.</p>
                    {" "}</div>
                  {" "}
                  <div className="scanbox">
                    {" "}
                    <div className="ic">
                      <svg width="24" height="24">
                        <use href="#i-camera" />
                      </svg>
                    </div>
                    {" "}
                    <b>Need to scan?</b>
                    {" "}
                    <span>Use your phone’s camera to take a photo and upload it here.</span>
                    {" "}</div>
                  {" "}</div>
                {" "}</div>
              {" "}
              <div className="addcard">
                {" "}
                <div className="addcard-h">
                  {" "}
                  <span className="orb">
                    <svg width="44" height="44">
                      <use href="#i-pencil" />
                    </svg>
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h2>Manual Entry</h2>
                    {" "}
                    <p>Enter the details yourself for a new item, improvement or service.</p>
                    {" "}</div>
                  {" "}</div>
                {" "}
                <button className="bigbtn bigbtn-line" data-stub="Enter Details Manually">
                  <svg width="22" height="22">
                    <use href="#i-plus-circle" />
                  </svg>{" "}Enter Details Manually</button>
                {" "}
                <div className="infopanel">
                  {" "}
                  <span className="tick">
                    <svg width="14" height="14">
                      <use href="#i-check" />
                    </svg>
                  </span>
                  {" "}
                  <div style={{ flex: "1" }}>
                    {" "}
                    <b>Examples of what you can add:</b>
                    {" "}
                    <div className="exlist">
                      {" "}
                      <ul>
                        {" "}
                        <li>Appliances (make, model, serial number)</li>
                        {" "}
                        <li>Renovations and improvements</li>
                        {" "}
                        <li>Maintenance and service records</li>
                        {" "}
                        <li>Contractor information</li>
                        {" "}
                        <li>Permits or inspections</li>
                        {" "}
                        <li>Warranties</li>
                        {" "}
                        <li>Insurance policies</li>
                        {" "}
                        <li>Insurance documentation videos</li>
                        {" "}
                        <li>Insurance claim forms</li>
                        {" "}</ul>
                      {" "}
                      <ul>
                        {" "}
                        <li>Trust documents</li>
                        {" "}
                        <li>Real estate transaction documents (from Realtor or attorney)</li>
                        {" "}
                        <li>Final closing paperwork</li>
                        {" "}
                        <li>Appraisals</li>
                        {" "}
                        <li>Title insurance policies</li>
                        {" "}
                        <li>Utilities and service accounts</li>
                        {" "}
                        <li>Photos and videos</li>
                        {" "}
                        <li>Other important property information</li>
                        {" "}</ul>
                      {" "}</div>
                    {" "}</div>
                  {" "}</div>
                {" "}</div>
              {" "}</div>
            {" "}
            <div className="addtip">
              {" "}
              <svg className="ic" width="34" height="34">
                <use href="#i-bulb" />
              </svg>
              {" "}
              <div className="m">
                {" "}
                <b>Tip: Keep Everything in One Place</b>
                {" "}
                <p>Adding your documents and records helps you track maintenance, protect your investment and get the most out of your home.</p>
                {" "}</div>
              {" "}
              <img src="/images/timp/scriptart.jpg" alt="A Healthier Home. A Brighter Future." />
              {" "}</div>
            {" "}
            <div className="sect-title">
              <h2>Recently Added</h2>
              {" "}
              <button className="link" style={{ marginLeft: "auto", fontSize: "11.5px", fontWeight: "700", color: "var(--teal-deep)" }} data-stub="All recently added">View All →</button>
            </div>
            {" "}
            <div className="recent">
              {" "}
              <button className="rec" data-stub="HVAC Invoice">
                <span className="ft" style={{ background: "#FBE4E4", color: "var(--red)" }}>
                  <svg width="17" height="17">
                    <use href="#i-doc" />
                  </svg>
                </span>
                <span className="m">
                  <b>HVAC Invoice</b>
                  <span>PDF · Added May 21, 2026</span>
                </span>
                <svg width="14" height="14" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                  <use href="#i-chev" />
                </svg>
              </button>
              {" "}
              <button className="rec" data-stub="Roof Warranty">
                <span className="ft" style={{ background: "#E2F1E9", color: "var(--green)" }}>
                  <svg width="17" height="17">
                    <use href="#i-camera" />
                  </svg>
                </span>
                <span className="m">
                  <b>Roof Warranty</b>
                  <span>JPG · Added May 12, 2026</span>
                </span>
                <svg width="14" height="14" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                  <use href="#i-chev" />
                </svg>
              </button>
              {" "}
              <button className="rec" data-stub="Plumbing Service">
                <span className="ft" style={{ background: "#E3EDF7", color: "#2A5A85" }}>
                  <svg width="17" height="17">
                    <use href="#i-doc" />
                  </svg>
                </span>
                <span className="m">
                  <b>Plumbing Service</b>
                  <span>PDF · Added May 10, 2026</span>
                </span>
                <svg width="14" height="14" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                  <use href="#i-chev" />
                </svg>
              </button>
              {" "}
              <button className="rec" data-stub="Kitchen Remodel Receipt">
                <span className="ft" style={{ background: "#EBE7F8", color: "var(--violet)" }}>
                  <svg width="17" height="17">
                    <use href="#i-camera" />
                  </svg>
                </span>
                <span className="m">
                  <b>Kitchen Remodel Receipt</b>
                  <span>JPG · Added May 8, 2026</span>
                </span>
                <svg width="14" height="14" style={{ color: "#B6C4CE", flexShrink: "0" }}>
                  <use href="#i-chev" />
                </svg>
              </button>
              {" "}</div>
            {" "}</div>
          {" "}
          <AppFooter />
          {" "}</div>
        {" "}</div>
      {" "}</section>
  );
}
