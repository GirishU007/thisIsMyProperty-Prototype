"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

/* Every click behaviour in the prototype lives here, as one delegated listener.
   The pages themselves are plain server-rendered markup that opts in with attributes:

     data-go="/path"     go to a screen (on <a> the generator emits a real <Link> instead)
     data-act="name"     run one of the actions below
     data-toast="text"   say what a not-yet-built control would do
     data-f / data-tab / data-job / data-sys / data-cycle   small pickers

   What the visitor has done (scheduled a job, added a document) is remembered for the
   browser tab in sessionStorage and re-applied to each screen by sync(). */

type State = { hvac: boolean; roof: boolean; doc: boolean };
const KEY = "timp_proto_state";
const EMPTY: State = { hvac: false, roof: false, doc: false };

function load(): State {
  try {
    return { ...EMPTY, ...JSON.parse(window.sessionStorage.getItem(KEY) || "{}") };
  } catch {
    return { ...EMPTY };
  }
}
function save(s: State) {
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* private mode: the state simply lasts until the next full page load */
  }
}

const $ = (id: string) => document.getElementById(id);
const all = (sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<HTMLElement>(sel));
const one = (sel: string, root: ParentNode = document) => root.querySelector<HTMLElement>(sel);
function setText(el: Element | null | undefined, text: string) {
  if (el) el.textContent = text;
}
function show(el: HTMLElement | null, on: boolean) {
  if (el) el.hidden = !on;
}
function pick(sel: string, on: Element, root: ParentNode = document) {
  all(sel, root).forEach((p) => p.classList.toggle("is-on", p === on));
}
const money = (n: number) => "$" + n.toLocaleString("en-US");

/* ---------- sample content behind the pickers ---------- */
const SYS: Record<string, [string, string, string, string, string]> = {
  roof: ["85", "Good", "good", "Roof · GAF Timberline HDZ, replaced 2023", "Warranty to 2033. Next inspection due in 19 days."],
  hvac: ["88", "Good", "good", "HVAC · Goodman GSXC18, installed 2021", "Last serviced May 2026. Warranty to 2036."],
  plumbing: ["80", "Good", "good", "Plumbing · copper and PEX", "Serviced May 2026. No open issues."],
  electrical: ["85", "Good", "good", "Electrical · 200-amp panel", "Inspected at purchase. No open issues."],
  water: ["62", "Fair", "fair", "Water heater · Rheem ProTerra 50, 10.6 years old", "Typical life is 8 to 12 years. Worth pricing a replacement."],
  appliances: ["65", "Fair", "fair", "Appliances · 6 tracked", "2 are nearing the end of their typical life."],
};
/* range, description, typical label, marker position, equipment, labor, permit */
const JOBS: Record<string, [string, string, string, string, string, string, string]> = {
  wh: ["$1,450 – $2,300", "50-gallon electric tank, installed, with haul-away.", "Typical $1,850", "44%", "$900", "$700", "$250"],
  hvac: ["$10,500 – $13,800", "4-ton, 16 to 18 SEER2 system, installed, with removal of the old unit.", "Typical $11,975", "45%", "$6,900", "$4,300", "$775"],
  roof: ["$14,500 – $22,000", "Architectural shingles, about 28 squares, tear-off included.", "Typical $17,800", "43%", "$8,900", "$7,700", "$1,200"],
};
const QUOTES_TITLE = "Quotes requested";
const QUOTES_SUB =
  "Three pros have the job details. Quotes usually arrive within two days and will appear in To do, next to the fair price range.";

export function Behaviors() {
  const router = useRouter();
  const pathname = usePathname();
  const state = useRef<State>({ ...EMPTY });
  const job = useRef("HVAC service");
  const toastTimer = useRef<number | undefined>(undefined);

  /* ---------- apply what has been done so far to the screen that is showing ---------- */
  const sync = () => {
    const s = state.current;
    const count = 3 - (s.hvac ? 1 : 0) - (s.roof ? 1 : 0);
    all("[data-todo-count]").forEach((e) => {
      e.textContent = String(count);
    });

    (
      [
        ["hvac", "Booked with Cool Air Solutions."],
        ["roof", "Visit requested with Suncoast Roofing."],
      ] as const
    ).forEach(([k, msg]) => {
      if (!s[k]) return;
      const row = one(`.ux-task[data-task="${k}"]`);
      if (!row || row.classList.contains("done")) return;
      row.className = "ux-task done";
      setText(one(".tx span", row), msg + " We’ll remind you the day before.");
      const tag = one(".ux-tag", row);
      if (tag) {
        tag.className = "ux-tag green";
        tag.textContent = "Scheduled";
      }
      show(one(".ux-btn", row), false);
    });

    /* To do: a scheduled overdue job moves down to Done */
    const over = $("grp-over");
    const done = $("grp-done");
    const hv = over ? one('.ux-task[data-task="hvac"]', over) : null;
    if (s.hvac && over && done && hv) {
      done.insertBefore(hv, done.firstChild);
      const empty = document.createElement("div");
      empty.className = "ux-task done";
      empty.innerHTML =
        '<span class="ic"><svg width="20" height="20"><use href="#i-check"/></svg></span>' +
        '<div class="tx"><b>Nothing overdue</b><span>You are up to date.</span></div>';
      over.appendChild(empty);
      setText($("ct-done"), "2");
      const ct = $("ct-over");
      if (ct) {
        ct.textContent = "0";
        ct.className = "ct";
      }
    }

    /* Dashboard: "needs attention" rows */
    all(".dx-act").forEach((row) => {
      const name = one("b", row)?.textContent || "";
      if ((name === "HVAC Service" && s.hvac) || (name === "Roof Inspection" && s.roof)) {
        row.classList.remove("is-over");
        setText(one(".s", row), "Visit requested");
        const tag = one(".dx-tag", row);
        if (tag) {
          tag.className = "dx-tag";
          tag.style.cssText = "background:#E2F1E9;color:#22684A";
          tag.textContent = "Scheduled";
        }
        show(one(".dx-go", row), false);
      }
    });

    /* Vault: the document added through "Add" */
    const list = $("vault-list");
    if (list && s.doc && !one(".new", list)) {
      const d = document.createElement("div");
      d.className = "ux-doc new";
      d.setAttribute("data-type", "Receipt");
      d.innerHTML =
        '<span class="fi"><svg width="19" height="19"><use href="#i-doc"/></svg></span>' +
        '<div><b>Gutter cleaning receipt</b><span class="s">Receipt · ClearFlow Gutters · just added</span></div>' +
        '<span class="s c-sys">Exterior</span><span class="s c-date num">Sep 28, 2026</span><span class="amt">$140</span>';
      list.insertBefore(d, list.children[1] || null);
    }
  };

  /* ---------- on every screen change ---------- */
  useEffect(() => {
    state.current = load();
    document.body.classList.remove("nav-open");
    all("[data-modal]").forEach((m) => (m.hidden = true));
    one(".ux-nav-links.is-open")?.classList.remove("is-open");
    sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* ---------- clicks ---------- */
  useEffect(() => {
    const say = (msg: string | null) => {
      const toast = $("toast");
      if (!toast || !msg) return;
      toast.textContent = msg;
      toast.hidden = false;
      window.clearTimeout(toastTimer.current);
      toastTimer.current = window.setTimeout(() => {
        toast.hidden = true;
      }, 3400);
    };
    const modal = (name: string) => one(`[data-modal="${name}"]`);
    const closeModals = () => all("[data-modal]").forEach((m) => (m.hidden = true));
    const closeMenus = (except?: HTMLElement | null) => {
      ["usermenu", "proplist"].forEach((id) => {
        const m = $(id);
        if (m && m !== except) m.hidden = true;
      });
    };
    const openModal = (name: string) => {
      closeModals();
      const m = modal(name);
      if (!m) return null;
      if (name === "schedule") {
        show($("sch-1"), true);
        show($("sch-2"), false);
        const pros = all("#sch-pros .ux-pro", m);
        const times = all("#sch-times .ux-chip", m);
        if (pros[0]) pick("#sch-pros .ux-pro", pros[0], m);
        if (times[0]) pick("#sch-times .ux-chip", times[0], m);
      }
      if (name === "add") {
        show($("add-1"), true);
        show($("add-2"), false);
      }
      m.hidden = false;
      return m;
    };
    const markRow = (el: HTMLElement, label: string) => {
      const row = el.closest<HTMLElement>(".ux-task");
      if (!row) return;
      row.className = "ux-task done";
      const tag = one(".ux-tag", row);
      if (tag) {
        tag.className = "ux-tag green";
        tag.textContent = label;
      }
      el.hidden = true;
    };
    const scrollToAnchor = (name: string) => {
      const a = $("anchor-" + name);
      if (a) {
        window.scrollTo({ top: a.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
      }
    };

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t || !t.closest) return;
      const s = state.current;
      let el: HTMLElement | null;

      /* menus close on any click outside their own button */
      const actEl = t.closest<HTMLElement>("[data-act]");
      const act = actEl?.getAttribute("data-act") || "";
      if (act !== "usermenu" && act !== "propsw") closeMenus();

      if (t.closest('a[href="/signout"]')) {
        save({ ...EMPTY });
        return;
      }

      if (actEl) {
        el = actEl;
        if (act === "ob1-find") {
          show($("ob1-find"), false);
          show($("ob1-found"), true);
        } else if (act === "ob2-upload") {
          show($("ob2-drop"), false);
          show($("ob2-read"), true);
        } else if (act === "propsw" || act === "usermenu") {
          const m = $(act === "propsw" ? "proplist" : "usermenu");
          closeMenus(m);
          if (m) {
            m.hidden = !m.hidden;
            el.setAttribute("aria-expanded", m.hidden ? "false" : "true");
          }
        } else if (act === "drawer") {
          document.body.classList.add("nav-open");
        } else if (act === "schedule") {
          job.current = el.getAttribute("data-job") || "HVAC service";
          const m = openModal("schedule");
          if (m) setText(one("[data-jobname]", m), job.current);
        } else if (act === "sch-send") {
          const m = modal("schedule");
          if (m) {
            setText(one("[data-proname]", m), one("#sch-pros .ux-pro.is-on b", m)?.textContent || "");
            setText(
              one("[data-timename]", m),
              (one("#sch-times .is-on", m)?.textContent || "").replace(" · ", ", ")
            );
          }
          show($("sch-1"), false);
          show($("sch-2"), true);
          if (/roof/i.test(job.current)) s.roof = true;
          else s.hvac = true;
          save(s);
          sync();
        } else if (act === "add-doc") {
          openModal("add");
        } else if (act === "add-upload") {
          show($("add-1"), false);
          show($("add-2"), true);
        } else if (act === "add-save") {
          s.doc = true;
          save(s);
          closeModals();
          if ($("vault-list")) {
            sync();
            window.scrollTo(0, 0);
            say("Saved to your Vault under Exterior. Your score will update tonight.");
          } else say("Saved to your Vault under Exterior. Open Vault to see it.");
        } else if (act === "quotes" || act === "pro-quote") {
          const pro = el.getAttribute("data-pro");
          setText($("q-title"), pro ? "Quote requested" : QUOTES_TITLE);
          setText(
            $("q-sub"),
            pro
              ? pro + " has the job details. Their quote usually arrives within two days and will appear in To do, next to the fair price range."
              : QUOTES_SUB
          );
          openModal("quotes");
        } else if (act === "quotes-todo") {
          closeModals();
          router.push("/app/todo");
        } else if (act === "close-modal") {
          closeModals();
        } else if (act === "toggle-appl") {
          const d = $("appl-detail");
          if (d) {
            d.hidden = !d.hidden;
            el.setAttribute("aria-expanded", d.hidden ? "false" : "true");
          }
        } else if (act === "done-task") {
          markRow(el, "Done");
        } else if (act === "ag-send") {
          markRow(el, "Sent");
          say(el.getAttribute("data-msg"));
          const c = $("ag-ct");
          if (c) {
            const n = Math.max(0, parseInt(c.textContent || "0", 10) - 1);
            c.textContent = String(n);
            if (!n) c.className = "ct";
          }
        } else if (act === "ag-send-keep") {
          say(el.getAttribute("data-msg"));
        } else if (act === "ag-share") {
          say(el.getAttribute("data-msg"));
          el.textContent = "Link copied";
        } else if (act === "ag-update") {
          say("Update sent to " + ($("cl-name")?.textContent || "your client") + ".");
        } else if (act === "pick-client") {
          const name = el.getAttribute("data-name") || "";
          pick(".ux-person", el);
          setText($("cl-name"), name);
          setText(
            $("cl-av"),
            name
              .split(" ")
              .map((w) => w.charAt(0))
              .join("")
              .slice(0, 2)
          );
        } else if (act === "print") {
          window.print();
        } else if (act === "notify") {
          el.textContent = "You’re on the list";
          el.setAttribute("disabled", "");
          say("Thanks. We’ll send one email when this opens.");
        }
        return;
      }

      if (t.classList.contains("ux-modal")) return closeModals();
      if (t.closest(".navscrim")) return document.body.classList.remove("nav-open");
      if ((el = t.closest<HTMLElement>("#sch-pros .ux-pro"))) return pick("#sch-pros .ux-pro", el);
      if ((el = t.closest<HTMLElement>("#sch-times .ux-chip"))) return pick("#sch-times .ux-chip", el);

      if ((el = t.closest<HTMLElement>("[data-sys]"))) {
        const v = SYS[el.getAttribute("data-sys") || ""];
        if (!v) return;
        pick("[data-sys]", el);
        setText($("hs-n"), v[0]);
        setText($("hs-g"), v[1]);
        const g = $("hs-g");
        if (g) g.className = v[2];
        setText($("hs-t"), v[3]);
        setText($("hs-d"), v[4]);
        return;
      }
      if ((el = t.closest<HTMLElement>("[data-cycle]"))) {
        const attr = el.getAttribute("data-cycle") === "y" ? "data-y" : "data-m";
        pick("[data-cycle]", el);
        all("[data-m][data-y]").forEach((p) => setText(p, p.getAttribute(attr) || ""));
        return;
      }
      if ((el = t.closest<HTMLElement>("#jobs [data-job]"))) {
        const k = el.getAttribute("data-job") || "";
        const j = JOBS[k];
        if (!j) return;
        pick("#jobs [data-job]", el);
        setText($("c-range"), j[0]);
        setText($("c-desc"), j[1]);
        const dot = $("c-dot");
        if (dot) {
          dot.style.left = j[3];
          dot.setAttribute("data-typ", j[2]);
        }
        setText($("c-a"), j[4]);
        setText($("c-b"), j[5]);
        setText($("c-c"), j[6]);
        show($("c-full"), k === "hvac");
        return;
      }
      /* filters: chips in #x-filter show the rows of #x-list whose data-type matches */
      if ((el = t.closest<HTMLElement>("[data-f]"))) {
        const box = el.closest<HTMLElement>('[id$="-filter"]');
        const list = box ? $(box.id.replace(/-filter$/, "-list")) : null;
        if (!box || !list) return;
        const want = (el.getAttribute("data-f") || "all").split(",");
        pick("[data-f]", el, box);
        let total = 0;
        all("[data-type]", list).forEach((r) => {
          const on = want[0] === "all" || want.includes(r.getAttribute("data-type") || "");
          r.hidden = !on;
          if (on) total += parseInt((r.lastElementChild?.textContent || "").replace(/[^0-9]/g, ""), 10) || 0;
        });
        if (box.id === "imp-filter") setText($("imp-total"), money(total));
        return;
      }
      if ((el = t.closest<HTMLElement>("#health-tabs [data-tab]"))) {
        const tab = el.getAttribute("data-tab");
        pick("#health-tabs [data-tab]", el);
        show($("health-systems"), tab === "systems");
        show($("health-reports"), tab === "reports");
        return;
      }
      if ((el = t.closest<HTMLElement>("[data-scroll]"))) return scrollToAnchor(el.getAttribute("data-scroll") || "");
      if (t.closest(".ux-navbtn")) {
        one(".ux-nav-links")?.classList.toggle("is-open");
        return;
      }
      if ((el = t.closest<HTMLElement>("[data-go]"))) return router.push(el.getAttribute("data-go") || "/");
      if ((el = t.closest<HTMLElement>("[data-toast]"))) return say(el.getAttribute("data-toast"));
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      document.body.classList.remove("nav-open");
      closeModals();
      closeMenus();
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return null;
}
