// Footers — ported from FOOTCOLS / pubfoot() / appfoot() in design-reference/shell.js.
import Link from "next/link";
import { Brand } from "./Brand";

function FootCols() {
  return (
    <>
      <div>
        <h5>Product</h5>
        <ul>
          <li><Link href="/how">How It Works</Link></li>
          <li><Link href="/">Features</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/">Security</Link></li>
        </ul>
      </div>
      <div>
        <h5>Resources</h5>
        <ul>
          <li><span className="soon-link">Resource Library</span></li>
          <li><span className="soon-link">Help Center</span></li>
          <li><span className="soon-link">Blog</span></li>
          <li><span className="soon-link">System Guides</span></li>
        </ul>
      </div>
      <div>
        <h5>Company</h5>
        <ul>
          <li><Link href="/mission">About Us</Link></li>
          <li><Link href="/mission">Careers</Link></li>
          <li><Link href="/mission">Press</Link></li>
          <li><Link href="/mission">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h5>For Professionals</h5>
        <ul>
          <li><Link href="/agents">Agents</Link></li>
          <li><Link href="/brokers">Brokers &amp; Teams</Link></li>
          <li><span className="soon">Coming Soon!</span></li>
          <li><Link href="/providers">Service Providers</Link></li>
          <li><Link href="/pricing">Business Partners</Link></li>
        </ul>
        <h5 style={{ marginTop: "14px" }}>Follow Us</h5>
        <div className="social">
          <Link href="/" aria-label="Facebook"><svg width="14" height="14"><use href="#i-fb" /></svg></Link>
          <Link href="/" aria-label="LinkedIn"><svg width="14" height="14"><use href="#i-in" /></svg></Link>
          <Link href="/" aria-label="Instagram"><svg width="14" height="14"><use href="#i-ig" /></svg></Link>
          <Link href="/" aria-label="YouTube"><svg width="14" height="14"><use href="#i-yt" /></svg></Link>
        </div>
      </div>
    </>
  );
}

function FootBrand() {
  return (
    <div>
      <Link className="brand" href="/">
        <Brand />
      </Link>
      <p className="tiny muted" style={{ marginTop: "12px" }}>
        © 2026 ThisIsMyProperty.com.
        <br />
        All rights reserved.
      </p>
    </div>
  );
}

export function PublicFooter() {
  return (
    <footer className="footer">
      <div className="footer-in">
        <FootBrand />
        <FootCols />
      </div>
      <div className="footer-legal">
        <span>Your home’s health at your fingertips.™</span>
        <span>
          <Link href="/">Privacy Policy</Link> &nbsp;|&nbsp; <Link href="/">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}

export function AppFooter() {
  return (
    <footer className="footer" style={{ padding: "26px 24px 20px" }}>
      <div className="footer-in">
        <FootBrand />
        <FootCols />
      </div>
    </footer>
  );
}
