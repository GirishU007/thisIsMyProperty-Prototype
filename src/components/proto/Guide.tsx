"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SCREENS } from "./screens";

// "Prototype guide": a floating button that lists every screen, for reviewers.
export function Guide() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const inApp = /^\/(app|agent)(\/|$)/.test(pathname);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={"ux-guidebtn" + (inApp ? " above-tabbar" : "")}
        onClick={() => setOpen(true)}
      >
        <span className="w">Prototype </span>guide
      </button>
      {open ? (
        <div
          className="ux-guide"
          role="dialog"
          aria-modal="true"
          aria-label="Prototype guide"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="ux-guide-in">
            <button type="button" className="x" onClick={() => setOpen(false)}>
              Close
            </button>
            <h2>Prototype guide</h2>
            <p>
              A clickable prototype with sample data. Jump to any screen, or start at the home page
              and follow the buttons.
            </p>
            {SCREENS.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <div className="ux-guide-cols">
                  {g.items.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      prefetch={false}
                      className={s.href === pathname ? "is-on" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
