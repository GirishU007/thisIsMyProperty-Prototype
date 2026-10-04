import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="ux-foot">
      <div className="ux-foot-in">
        <span>© 2026 ThisIsMyProperty.com</span>
        <Link href="/mission">Our mission</Link>
        <Link href="/pros">Find a pro</Link>
        <Link href="/pros/join">For service pros</Link>
        <Link href="/brokers">Brokers &amp; teams</Link>
        <a data-toast="Help centre: not built in this prototype yet.">Help</a>
        <a data-toast="Privacy Policy: not built in this prototype yet.">Privacy</a>
        <a data-toast="Terms of Service: not built in this prototype yet.">Terms</a>
      </div>
    </footer>
  );
}
