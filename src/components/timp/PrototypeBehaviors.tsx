"use client";

// All interactive behaviour of the prototype, ported from design-reference/shell.js.
// Delegated document listeners keep every screen a plain server component whose
// markup matches the prototype 1:1. Listeners that must win over <Link> navigation
// run in the capture phase (React handles clicks at the root, after capture).
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function closest(e: Event, sel: string): HTMLElement | null {
  const t = e.target as Element | null;
  return t && t.closest ? (t.closest(sel) as HTMLElement | null) : null;
}

export function PrototypeBehaviors() {
  const pathname = usePathname();

  // Route change: close drawer, dropdowns and the screen index; scroll to top.
  useEffect(() => {
    document.body.classList.remove("nav-open");
    document.querySelectorAll("[data-navitem]").forEach((o) => o.classList.remove("is-open"));
    document.getElementById("sheet")?.classList.remove("is-open");
  }, [pathname]);

  useEffect(() => {
    const capture = (e: MouseEvent) => {
      /* controls with no destination in this demo do nothing */
      if (closest(e, "[data-stub]")) e.preventDefault();

      /* homeowner sidebar: collapse / expand the property list */
      const chev = closest(e, ".chevx");
      if (chev) {
        e.preventDefault();
        e.stopPropagation();
        const link = chev.closest(".snav");
        const list = link && link.nextElementSibling;
        if (link && list && list.hasAttribute("data-props")) {
          link.classList.toggle("is-shut");
          list.classList.toggle("is-shut");
        }
        return;
      }

      /* top-nav dropdown (tap to open) */
      const item = closest(e, "[data-navitem]");
      document.querySelectorAll("[data-navitem]").forEach((o) => {
        if (o !== item) o.classList.remove("is-open");
      });
      if (item && closest(e, ".navitem > .navlink")) {
        e.preventDefault();
        e.stopPropagation();
        item.classList.toggle("is-open");
        return;
      }

      /* pricing tabs: scroll to the matching row */
      const tab = closest(e, "[data-ptab]");
      if (tab) {
        e.preventDefault();
        document.querySelectorAll("[data-ptab]").forEach((t) => t.classList.toggle("is-on", t === tab));
        const row = document.getElementById("prow-" + tab.getAttribute("data-ptab"));
        row?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const bubble = (e: MouseEvent) => {
      /* print buttons */
      if (closest(e, "[data-print]")) {
        e.preventDefault();
        try {
          window.print();
        } catch {}
        return;
      }

      /* plan picker on the registration screens */
      const plan = closest(e, "[data-plan]");
      if (plan && plan.parentNode) {
        plan.parentNode.querySelectorAll("[data-plan]").forEach((o) => o.classList.toggle("is-on", o === plan));
      }

      /* screen index sheet */
      const sheet = document.getElementById("sheet");
      if (sheet) {
        if (closest(e, "#fab")) sheet.classList.add("is-open");
        else if (closest(e, "#sheet-x") || e.target === sheet || closest(e, ".idx")) sheet.classList.remove("is-open");
      }

      /* app drawer for narrow screens / iPad portrait */
      if (closest(e, ".menubtn")) {
        document.body.classList.add("nav-open");
        return;
      }
      if (closest(e, ".navscrim") || closest(e, ".side a, .side button")) {
        document.body.classList.remove("nav-open");
      }
    };

    const keydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        document.getElementById("sheet")?.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      }
    };

    document.addEventListener("click", capture, true);
    document.addEventListener("click", bubble);
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("click", capture, true);
      document.removeEventListener("click", bubble);
      document.removeEventListener("keydown", keydown);
    };
  }, []);

  return <div className="navscrim" />;
}
