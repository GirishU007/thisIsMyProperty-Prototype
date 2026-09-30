# TIMP Prototype — Implementation Spec (source of truth)

Generated from the approved clickable prototype artifact "TIMP Prototype — CURRENT"
(ThisIsMyProperty.com). Everything in this folder was extracted mechanically from that
artifact; treat it as the design source of truth. Where this spec and the HTML disagree,
**the HTML wins**.

## What is in this folder

| Path | What it is |
|---|---|
| `prototype.html` | The full prototype, runnable. Open it in Chrome/Edge (double-click) and click through it — hash routes like `prototype.html#/ho`. Images load from `../public/images/timp/`. |
| `styles.css` | **All** CSS from the prototype, verbatim (~176 KB): tokens, public shell, app shell/sidebar, every screen, responsive breakpoints, print styles. Image URLs already rewritten to `/images/timp/...`. |
| `sprite.svg` | The SVG icon sprite (95 `<symbol>`s: `i-logo`, `i-home`, `i-bell`, `i-vault`, ...). Every icon in the UI is `<svg><use href="#i-NAME"/></svg>`. |
| `shell.js` | The prototype's original JS: nav/sidebar data + builders, router, and all interactive behaviors. Port its behavior, not its DOM-string approach. |
| `screens/NN-route.html` | One file per screen = the exact `<section>` markup for that route (34 screens). Placeholders `data-pubnav`, `data-side`, `data-pubfoot`, `data-appfoot` mark where the shared shells go. |
| `screenshots/*.jpg` | Full-page 1440px captures of every screen + 2 mobile (390px) captures. NOTE: captured without the web fonts loaded (fallback fonts), so use them for layout/content/colour, and use `prototype.html` in a real browser for exact typography. |
| `../public/images/timp/` | All 88 raster images, extracted and given semantic names. |

## Fonts

- Sans (UI/body): **Figtree** 400/500/600/700/800 → CSS var `--sans`
- Serif (display headings, hero, section titles, report doc): **Source Serif 4** (opsz 8..60) 400/600/700 → `--serif`
- Base: `body` 14px / 1.5, colour `--charcoal`, background `--tint`, antialiased; `.num` uses tabular numerals.
- Original loader: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap`
  → in Next.js use `next/font/google` (`Figtree`, `Source_Serif_4`) and assign them to `--sans` / `--serif`.

## Design tokens (from `:root` in styles.css)

navy `#183A59` · navy-deep `#0E2A44` · navy-ink `#12314E` · side-bg `#021736` · side-active `#103365` ·
side-active-agent `#027B80` · side-teal `#0A8C9E` · side-accent `#17B4C9` · side-badge `#DC1520` ·
slate `#5E748A` · teal `#19A7A5` · teal-deep `#0F8280` · green `#2E8B57` · tint `#F4F8FA` ·
charcoal `#1F2933` · amber `#E08A1E` · red `#D14343` · violet `#6D5BD0` · line `#DCE6ED` ·
line-soft `#EAF1F5` · paper `#FBFDFE` · radii 6/10/14/20px · sidebar 258px · max content width 1180px.
Light theme only (by design — it matches the approved mockups).

## Route map (hash route → Next.js App Router)

| # | Prototype | Next.js route | File | Source markup |
|---|---|---|---|---|
| 01 | `#/home` | `/` | `src/app/(timp)/page.tsx` | `screens/01-home.html` |
| 02 | `#/agents` | `/agents` | `src/app/(timp)/agents/page.tsx` | `screens/02-agents.html` |
| 03 | `#/agent/clients` | `/agent/clients` | `src/app/(timp)/agent/clients/page.tsx` | `screens/03-agent-clients.html` |
| 04 | `#/agent/marketing` | `/agent/marketing` | `src/app/(timp)/agent/marketing/page.tsx` | `screens/04-agent-marketing.html` |
| 05 | `#/ho/add` | `/ho/add` | `src/app/(timp)/ho/add/page.tsx` | `screens/05-ho-add.html` |
| 06 | `#/agent/resources` | `/agent/resources` | `src/app/(timp)/agent/resources/page.tsx` | `screens/06-agent-resources.html` |
| 07 | `#/agent/vaults` | `/agent/vaults` | `src/app/(timp)/agent/vaults/page.tsx` | `screens/07-agent-vaults.html` |
| 08 | `#/agent/alerts` | `/agent/alerts` | `src/app/(timp)/agent/alerts/page.tsx` | `screens/08-agent-alerts.html` |
| 09 | `#/agent/providers` | `/agent/providers` | `src/app/(timp)/agent/providers/page.tsx` | `screens/09-agent-providers.html` |
| 10 | `#/ho/report` | `/ho/report` | `src/app/(timp)/ho/report/page.tsx` | `screens/10-ho-report.html` |
| 11 | `#/mission` | `/mission` | `src/app/(timp)/mission/page.tsx` | `screens/11-mission.html` |
| 12 | `#/pricing` | `/pricing` | `src/app/(timp)/pricing/page.tsx` | `screens/12-pricing.html` |
| 13 | `#/pricing/agents` | `/pricing/agents` | `src/app/(timp)/pricing/agents/page.tsx` | `screens/13-pricing-agents.html` |
| 14 | `#/try` | `/try` | `src/app/(timp)/try/page.tsx` | `screens/14-try.html` |
| 15 | `#/providers/homeowners` | `/providers/homeowners` | `src/app/(timp)/providers/homeowners/page.tsx` | `screens/15-providers-homeowners.html` |
| 16 | `#/providers` | `/providers` | `src/app/(timp)/providers/page.tsx` | `screens/16-providers.html` |
| 17 | `#/brokers` | `/brokers` | `src/app/(timp)/brokers/page.tsx` | `screens/17-brokers.html` |
| 18 | `#/how` | `/how` | `src/app/(timp)/how/page.tsx` | `screens/18-how.html` |
| 19 | `#/register` | `/register` | `src/app/(timp)/register/page.tsx` | `screens/19-register.html` |
| 20 | `#/register/agent` | `/register/agent` | `src/app/(timp)/register/agent/page.tsx` | `screens/20-register-agent.html` |
| 21 | `#/ho` | `/ho` | `src/app/(timp)/ho/page.tsx` | `screens/21-ho.html` |
| 22 | `#/ho/vault` | `/ho/vault` | `src/app/(timp)/ho/vault/page.tsx` | `screens/22-ho-vault.html` |
| 23 | `#/ho/reports` | `/ho/reports` | `src/app/(timp)/ho/reports/page.tsx` | `screens/23-ho-reports.html` |
| 24 | `#/ho/health` | `/ho/health` | `src/app/(timp)/ho/health/page.tsx` | `screens/24-ho-health.html` |
| 25 | `#/ho/profile` | `/ho/profile` | `src/app/(timp)/ho/profile/page.tsx` | `screens/25-ho-profile.html` |
| 26 | `#/ho/alerts` | `/ho/alerts` | `src/app/(timp)/ho/alerts/page.tsx` | `screens/26-ho-alerts.html` |
| 27 | `#/ho/maintenance` | `/ho/maintenance` | `src/app/(timp)/ho/maintenance/page.tsx` | `screens/27-ho-maintenance.html` |
| 28 | `#/ho/improvements` | `/ho/improvements` | `src/app/(timp)/ho/improvements/page.tsx` | `screens/28-ho-improvements.html` |
| 29 | `#/ho/improvements/detailed` | `/ho/improvements/detailed` | `src/app/(timp)/ho/improvements/detailed/page.tsx` | `screens/29-ho-improvements-detailed.html` |
| 30 | `#/ho/resources` | `/ho/resources` | `src/app/(timp)/ho/resources/page.tsx` | `screens/30-ho-resources.html` |
| 31 | `#/ho/providers` | `/ho/providers` | `src/app/(timp)/ho/providers/page.tsx` | `screens/31-ho-providers.html` |
| 32 | `#/ho/estimate` | `/ho/estimate` | `src/app/(timp)/ho/estimate/page.tsx` | `screens/32-ho-estimate.html` |
| 33 | `#/ho/estimate/hvac` | `/ho/estimate/hvac` | `src/app/(timp)/ho/estimate/hvac/page.tsx` | `screens/33-ho-estimate-hvac.html` |
| 34 | `#/agent` | `/agent` | `src/app/(timp)/agent/page.tsx` | `screens/34-agent.html` |

In ThisIsOurMoneyApp these pages live in the route group `src/app/(timp)/`, next to the existing
auth and data routes (`/login`, `/signup`, `/dashboard`, `/properties`, `/vault`, `/forecast`, `/settings`), which are unchanged.

## Shared shells

### Brand lock-up (used in top nav, sidebars, footers)
`i-logo` icon + "ThisIs**My**Property" (My in teal) + ".com" in slate, tagline under it in 8px italic:
"Your home’s health at your fingertips.™"

### Public top nav (`data-pubnav="<activeKey>"`)
Sticky, 64px, white 96% + blur. Items (uppercase 10px/700):
1. Homeowners → `/ho`  (key `home`)
2. Agents → `/agents`  (key `agents`)
3. Brokers & Teams → `/brokers`, amber italic sub-label "Coming Soon!" under it (key `brokers`)
4. How It Works → `/how` (key `how`)
5. Service Providers ▾ → `/providers/homeowners`; dropdown: Homeowners → `/providers/homeowners`, Service Providers → `/providers` (key `providers`)
6. Pricing ▾ → `/pricing`; dropdown: Homeowners → `/pricing`, Agents → `/pricing/agents` (key `pricing`)
7. Our Mission → `/mission`, teal italic sub-label "For the Greater Good" (key `mission`)
Right side: **Try it free** button + **Sign In** (badge icon). Audience-aware: when active key is `agents` or `reg-agent`, Try it free → `/register/agent` and Sign In → `/agent`; otherwise Try it free → `/try`, Sign In → `/ho`.
Dropdowns open on hover (desktop) and on tap (touch: first tap on a parent with a menu opens it instead of navigating; tapping elsewhere closes; route change closes).

### Homeowner sidebar (`data-side="ho"`, dark navy `--side-bg`)
Brand → `/` · separator ·
My Dashboard (`i-home`) → `/ho` ·
My Properties (`i-home-health`, chevron) → `/ho/profile`, with collapsible sub-list: 123 Happiness St → `/ho` (active), 245 Peaceful Ln → `/ho/profile`, 1117 Humble Way → `/ho/profile`. Clicking the chevron toggles the sub-list (`.is-shut`) without navigating ·
My Vault (`i-folder`) → `/ho/vault` · **Add New** teal button (`i-plus-circle`) → `/ho/add` ·
My Alerts (`i-bell`, red badge "2") → `/ho/alerts` · My Reports (`i-chart`) → `/ho/reports` ·
Request Price Estimate (`i-dollar`) → `/ho/estimate` · separator ·
OUR MISSION: The Greater Good (`i-heart-hand`, accent) → `/mission` · separator ·
Resources (`i-book`) → `/ho/resources` · Service Providers (`i-users`) → `/ho/providers` ·
Refer a Friend<br>or Realtor (`i-gift`, stub) · separator · Settings (`i-cog`, stub) · Help (`i-help`, stub).
Active item keys: dash, profile, vault, alerts, reports, estimate, resources, providers, refer (plus screens may pass other keys such as `add`).

### Agent sidebar (`data-side="agent"`)
Brand → `/` · My Dashboard (`i-home`) → `/agent` · My Clients (`i-users`) → `/agent/clients` ·
My Property Vaults (`i-case`) → `/agent/vaults` · My Activity (`i-activity`, stub) ·
My Alerts (`i-bell`, badge "3") → `/agent/alerts` · My Marketing Center (`i-megaphone`) → `/agent/marketing` ·
My Reports (`i-doc`, stub) · separator · Resources (`i-book`) → `/agent/resources` ·
Service Providers (`i-tools`) → `/agent/providers` · separator ·
OUR MISSION: The Greater Good. (`i-heart-fill`) → `/mission` · Refer a Friend or Realtor (stub) · separator · Help (stub).
The agent sidebar has its own colours in styles.css: `.side-agent` background `#002B52`, active item `#017595`, items flush to the right edge (radius 9px 0 0 9px).

### Footers
- Public footer (`data-pubfoot`): brand + "© 2026 ThisIsMyProperty.com. All rights reserved."; columns
  **Product** (How It Works→/how, Features→/, Pricing→/pricing, Security→/),
  **Resources** (Resource Library, Help Center, Blog, System Guides — non-link text),
  **Company** (About Us, Careers, Press, Contact Us → all /mission),
  **For Professionals** (Agents→/agents, Brokers & Teams→/brokers, amber "Coming Soon!", Service Providers→/providers, Business Partners→/pricing),
  **Follow Us** (Facebook/LinkedIn/Instagram/YouTube round navy icons → /).
  Legal row: tagline left; Privacy Policy | Terms of Service → / right.
- App footer (`data-appfoot`): same brand + columns, compact padding, no legal row.

## Global behaviours to port (from shell.js)

1. **Routing**: every screen is its own Next.js route; all `href="#/x"` become `<Link href="/x">`; scroll to top on navigation (Next default).
2. **Stubs**: any element with `data-stub` is clickable-looking but does nothing (`preventDefault`). Keep them as `<button type="button">` with no action. Do NOT invent destinations.
3. **Print**: elements with `data-print` call `window.print()` (the report / estimate documents have print CSS in styles.css).
4. **Sidebar property list collapse** (chevron on My Properties).
5. **Pricing tabs** (`data-ptab`): clicking marks tab `.is-on` and smooth-scrolls to `#prow-<key>`.
6. **Plan picker** (`data-plan`) on registration screens: single-select within its parent, toggles `.is-on`.
7. **Mobile/iPad drawer**: on app screens, a hamburger `.menubtn` (`i-menu`) is inserted as first child of every `.appbar`; tap adds `body.nav-open` (sidebar slides in, `.navscrim` overlay); closes on scrim tap, any sidebar link/button tap, Escape, or route change. Styles already exist in styles.css.
8. **Top-nav dropdowns** (see above).
9. **Screen index FAB**: floating "Screens" button (`#fab`, `i-grid`) opens `#sheet` dialog listing every screen grouped Public site / Homeowner app / Agent app; closes on ✕, backdrop click, link click, Escape. Markup is at the end of `prototype.html` (after the last screen). Keep it (reviewer aid) but render it only when `NEXT_PUBLIC_SHOW_SCREEN_INDEX !== "false"`.
10. **No-JS safety** is not needed in Next.js (server-rendered).

## Images (all in `public/images/timp/`)

CSS-referenced images are wired through class names in `styles.css` (e.g. `.photo.ph1`, `.si-health`,
`.umthumb.u-hvac`, `.cav-cav0` avatars). Inline `<img>` / inline `background-image` images in the
screen files already point at `/images/timp/<name>.jpg`.

- `agent-marketing-camp-2.jpg`
- `agent-marketing-camp-3.jpg`
- `agent-marketing-camp-4.jpg`
- `agent-marketing-camp.jpg`
- `agent-marketing-marketing-template-2.jpg`
- `agent-marketing-marketing-template-3.jpg`
- `agent-marketing-marketing-template-4.jpg`
- `agent-marketing-marketing-template-5.jpg`
- `agent-marketing-marketing-template.jpg`
- `agents-agdevice-2.jpg`
- `agents-agdevice.jpg`
- `btquote.jpg`
- `btscript.jpg`
- `btshot.jpg`
- `cav-cav0.jpg`
- `cav-cav1.jpg`
- `cav-cav2.jpg`
- `cav-cav3.jpg`
- `cav-cav4.jpg`
- `cav-cav5.jpg`
- `cav-cav8.jpg`
- `cav-cav9.jpg`
- `est-card-acimg.jpg`
- `est-hero.jpg`
- `est-prop-ph.jpg`
- `herodev.jpg`
- `ho-add-123-happiness-street.jpg`
- `ho-report-doc-hero.jpg`
- `ho-report-sysimg-2.jpg`
- `ho-report-sysimg-3.jpg`
- `ho-report-sysimg-4.jpg`
- `ho-report-sysimg-5.jpg`
- `ho-report-sysimg-6.jpg`
- `ho-report-sysimg-7.jpg`
- `ho-report-sysimg.jpg`
- `home-sbs-house.jpg`
- `hpav0.jpg`
- `hpav1.jpg`
- `hpav2.jpg`
- `hpcouple.jpg`
- `hpcta.jpg`
- `hphshot.jpg`
- `hpscr.jpg`
- `hwshot.jpg`
- `hwsofa.jpg`
- `mrban-art.jpg`
- `mrwell-ph.jpg`
- `photo-ph2.jpg`
- `photo-ph3.jpg`
- `photo-placeholder-photo.jpg`
- `pv-vac.jpg`
- `pvcard-ph1.jpg`
- `quote-c.jpg`
- `rbanner.jpg`
- `rimg-rblog.jpg`
- `rimg-rfaq.jpg`
- `rimg-rpod.jpg`
- `rimg-rtips.jpg`
- `rimg-rvid.jpg`
- `rvband-ph.jpg`
- `rvcta-ph.jpg`
- `rvlogo.jpg`
- `rvshot.jpg`
- `scr-ag.jpg`
- `scr-ho.jpg`
- `scriptart.jpg`
- `si-ahead.jpg`
- `si-cost.jpg`
- `si-health.jpg`
- `si-legacy.jpg`
- `si-story.jpg`
- `si-vault.jpg`
- `spscr.jpg`
- `spshot.jpg`
- `spsoon.jpg`
- `spvan.jpg`
- `tfhouse.jpg`
- `tfshot.jpg`
- `umthumb-u-filter.jpg`
- `umthumb-u-hvac.jpg`
- `umthumb-u-land.jpg`
- `umthumb-u-paint.jpg`
- `umthumb-u-pest.jpg`
- `umthumb-u-pool.jpg`
- `umthumb-u-roof.jpg`
- `umthumb-u-wheat.jpg`
- `umtip.jpg`
- `whoblock-ph.jpg`

## Per-screen click-flow inventory

Every link below must navigate exactly as listed; every stub must be present and inert.
(Text is truncated to ~70 chars; icon-only links show their aria-label.)

### 01. `/home` — LANDING PAGE (#/home)

- Source: `design-reference/screens/01-home.html` · Screenshot: `design-reference/screenshots/01-home.jpg`
- Shell: public top nav (active tab: `home`), public footer
- Links (in-page destinations):
  - `/try` ← "Try it free" · "Try it free today"
  - `/how` ← "See features"
  - `/ho` ← "The ThisIsMyProperty dashboard shown on a laptop and a phone" · "Track & Report See your home’s history, improvements, expenses and val"
  - `/ho/health` ← "Know Your Home’s Health Get a clear view of your home’s systems and ov" · "Explore the interactive home" · "Roof" · "HVAC" · "Plumbing" · "Electrical" · "Water Heater" · "Windows & Doors" …
  - `/ho/alerts` ← "See What’s Coming Predict maintenance needs and potential costs so you" · "Get Smart Alerts Receive timely reminders and alerts for maintenance, "
  - `/ho/estimate` ← "Know What Things Should Cost Access local cost intelligence and price "
  - `/ho/vault` ← "Organize Everything Store receipts, warranties, manuals and permits in"
  - `/register/agent` ← "Try it free today"
  - `/agents` ← "See how it works for agents →"

### 02. `/agents` — AGENT LANDING PAGE (#/agents)

- Source: `design-reference/screens/02-agents.html` · Screenshot: `design-reference/screenshots/02-agents.jpg`
- Shell: public top nav (active tab: `agents`), public footer
- Links (in-page destinations):
  - `/register/agent` ← "Try it free" · "Try it free today"
  - `/pricing/agents` ← "See agent plans"

### 03. `/agent/clients` — AGENT: MY CLIENTS (#/agent/clients)

- Source: `design-reference/screens/03-agent-clients.html` · Screenshot: `design-reference/screenshots/03-agent-clients.jpg`
- Shell: agent sidebar (active: `clients`), app footer
- Links (in-page destinations):
  - `/agent/alerts` ← "3"
  - `/agent/vaults` ← "View"
- Stub controls (look clickable, do nothing — `data-stub`): "Help center", "Add New Client", "High engagement clients", "Clients needing follow up", "Past clients", "Filters", "Previous page", "Page 2", "Page 3", "Page 4", "Page 5", "Page 13", "Next page", "Schedule outreach"

### 04. `/agent/marketing` — AGENT: MY MARKETING CENTER (#/agent/marketing)

- Source: `design-reference/screens/04-agent-marketing.html` · Screenshot: `design-reference/screenshots/04-agent-marketing.jpg`
- Shell: agent sidebar (active: `mkt`), app footer
- Links (in-page destinations):
  - `/agent/alerts` ← "3"
  - `/agent` ← "Agent Dashboard"
- Stub controls (look clickable, do nothing — `data-stub`): "Help centre", "Email Campaigns", "Client Touch Campaigns", "Social Media Content", "Listing Marketing", "Buyer Resources", "Custom Materials", "All templates", "All campaigns", "Change date range", "Create Email Campaign", "Schedule Social Post", "Design a Flyer", "Access Brand Assets", "View Content Calendar", "Manage Automations", "Dismiss tip"

### 05. `/ho/add` — HOMEOWNER: ADD NEW (#/ho/add)

- Source: `design-reference/screens/05-ho-add.html` · Screenshot: `design-reference/screenshots/05-ho-add.jpg`
- Shell: ho sidebar (active: `add`), app footer
- Links (in-page destinations):
  - `/ho/alerts` ← "2"
- Stub controls (look clickable, do nothing — `data-stub`): "Change Property", "Choose File", "Enter Details Manually", "All recently added", "HVAC Invoice", "Roof Warranty", "Plumbing Service", "Kitchen Remodel Receipt"

### 06. `/agent/resources` — AGENT: RESOURCES (#/agent/resources)

- Source: `design-reference/screens/06-agent-resources.html` · Screenshot: `design-reference/screenshots/06-agent-resources.jpg`
- Shell: agent sidebar (active: `resources`), app footer
- Links (in-page destinations):
  - `/agent` ← "Agent Dashboard"
- Stub controls (look clickable, do nothing — `data-stub`): "Help centre", "Spring Home Maintenance Checklist", "How to Extend the Life of Your Roof", "Understanding Your Home's Systems", "View All Blogs", "Smart Homeowner Podcast: Ep. 23", "Preventative Maintenance Matters", "Ask the Expert: Home Systems 101", "View All Podcasts", "How Your HVAC System Works", "Cleaning Your Gutters the Right Way", "Detecting Water Leaks Early", "View All Videos", "How often should I service my HVAC system?", "What is a home warranty?", "How can I improve my home's energy efficiency?", "View All FAQs", "Seal air leaks and save on energy bills", "Insulate your water heater", "Fix small leaks before they get costly", "View All Tips", "Send Suggestion", "Check Back Soon"

### 07. `/agent/vaults` — AGENT: PROPERTY VAULTS (#/agent/vaults)

- Source: `design-reference/screens/07-agent-vaults.html` · Screenshot: `design-reference/screenshots/07-agent-vaults.jpg`
- Shell: agent sidebar (active: `vaults`), app footer
- Links (in-page destinations):
  - `/agent/alerts` ← "3"
  - `/ho/profile` ← "View Property"
  - `/agent/clients` ← "View All Activity →"
- Stub controls (look clickable, do nothing — `data-stub`): "Help center", "Add New Client", "Client properties", "Needs attention", "Upcoming maintenance", "Recently viewed", "Filters", "John Smith", "Maria Kennedy", "David Thompson", "Sheryl Larson", "Robert Brown", "Anna Collins", "Jennifer Wilson", "Michael Lee", "Page 2", "Page 3", "Page 4", "Next page", "Send email", "Add property", "More actions", "Documents", "Maintenance", "Notes", "Client details", "Upload Document", "Add Note", "Schedule Maintenance", "Send Client Update", "Generate Report"

### 08. `/agent/alerts` — AGENT: ALERTS (#/agent/alerts)

- Source: `design-reference/screens/08-agent-alerts.html` · Screenshot: `design-reference/screenshots/08-agent-alerts.jpg`
- Shell: agent sidebar (active: `alerts`), app footer
- Links (in-page destinations):
  - `/agent` ← "Agent Dashboard"
- Stub controls (look clickable, do nothing — `data-stub`): "Help centre", "Requires attention", "This week", "Completed", "Notify Client", "Review Recall", "Send Reminder", "Open Vault", "View Vault", "Recommend Pro", "Load more alerts", "Create a campaign from alerts"

### 09. `/agent/providers` — AGENT: SERVICE PROVIDERS (#/agent/providers)

- Source: `design-reference/screens/09-agent-providers.html` · Screenshot: `design-reference/screenshots/09-agent-providers.jpg`
- Shell: agent sidebar (active: `vendors`), app footer
- Links (in-page destinations):
  - `/agent/alerts` ← "3"
  - `/register` ← "Sign in"
  - `/pricing` ← "View Pricing & Sign Up" · "Click here to learn more about our programs, benefits and pricing"
- Stub controls (look clickable, do nothing — `data-stub`): "Help center", "HVAC vendors", "Plumbing vendors", "Electrical vendors", "Roofing vendors", "Appliances vendors", "Landscaping vendors", "Pest Control vendors", "Cleaning vendors", "More vendors", "View Cool Air Solutions profile", "Request a quote from Cool Air Solutions", "Learn more about the vendor program"

### 10. `/ho/report` — HOME HEALTH SCORE REPORT (#/ho/report)

- Source: `design-reference/screens/10-ho-report.html` · Screenshot: `design-reference/screenshots/10-ho-report.jpg`
- Shell: none (standalone document)
- Links (in-page destinations):
  - `/ho/health` ← "Back to Home Health"
  - `/ho/reports` ← "My Reports"
- Stub controls (look clickable, do nothing — `data-stub`): "Print report", "Download PDF"

### 11. `/mission` — OUR MISSION: THE GREATER GOOD (#/mission)

- Source: `design-reference/screens/11-mission.html` · Screenshot: `design-reference/screenshots/11-mission.jpg`
- Shell: public top nav (active tab: `mission`), public footer
- Links (in-page destinations):
  - `/ho` ← "Join the movement"

### 12. `/pricing` — PRICING (#/pricing)

- Source: `design-reference/screens/12-pricing.html` · Screenshot: `design-reference/screenshots/12-pricing.jpg`
- Shell: public top nav (active tab: `pricing`), public footer
- Links (in-page destinations):
  - `/register` ← "Get Started" · "Choose Plan"
  - `/pricing/agents` ← "See Agent Pricing"

### 13. `/pricing/agents` — AGENT PRICING (#/pricing/agents)

- Source: `design-reference/screens/13-pricing-agents.html` · Screenshot: `design-reference/screenshots/13-pricing-agents.jpg`
- Shell: public top nav (active tab: `pricing`), public footer
- Links (in-page destinations):
  - `/register/agent` ← "Get Started" · "Choose Plan"
  - `/pricing` ← "See Homeowner Pricing"

### 14. `/try` — TRY IT FOR FREE (#/try)

- Source: `design-reference/screens/14-try.html` · Screenshot: `design-reference/screenshots/14-try.jpg`
- Shell: public top nav (active tab: `try`), public footer
- Links (in-page destinations):
  - `/ho` ← "Create My Free Account" · "Sign In"
  - `/` ← "Terms of Service" · "Privacy Policy"
  - `/pricing` ← "View Pricing"

### 15. `/providers/homeowners` — SERVICE PROVIDERS FOR HOMEOWNERS (#/providers/homeowners)

- Source: `design-reference/screens/15-providers-homeowners.html` · Screenshot: `design-reference/screenshots/15-providers-homeowners.jpg`
- Shell: public top nav (active tab: `providers`), public footer
- Links (in-page destinations):
  - `/register` ← "Create Your Account" · "Get Started Today"
  - `/ho/providers` ← "Learn More"
- Stub controls (look clickable, do nothing — `data-stub`): "Contact us"

### 16. `/providers` — SERVICE PROVIDERS (#/providers)

- Source: `design-reference/screens/16-providers.html` · Screenshot: `design-reference/screenshots/16-providers.jpg`
- Shell: public top nav (active tab: `providers`), public footer
- Links (in-page destinations):
  - `/ho/providers` ← "Learn More"
- Stub controls (look clickable, do nothing — `data-stub`): "Contact us about the Service Provider Program"

### 17. `/brokers` — BROKERS & TEAMS (#/brokers)

- Source: `design-reference/screens/17-brokers.html` · Screenshot: `design-reference/screenshots/17-brokers.jpg`
- Shell: public top nav (active tab: `brokers`), public footer
- Links (in-page destinations):
  - `/` ← "Home"
- Stub controls (look clickable, do nothing — `data-stub`): "Notify me about Brokers &amp; Teams"

### 18. `/how` — HOW IT WORKS (#/how)

- Source: `design-reference/screens/18-how.html` · Screenshot: `design-reference/screenshots/18-how.jpg`
- Shell: public top nav (active tab: `how`), public footer
- Links (in-page destinations):
  - `/` ← "Home"
  - `/ho` ← "My Dashboard See your property’s health at a glance."
  - `/ho/vault` ← "My Vault Store receipts, warranties, insurance, tax documents and more"
  - `/ho/alerts` ← "My Alerts Stay ahead of maintenance, recalls and important dates."
  - `/ho/health` ← "My Reports Generate valuable reports to track your home’s health, impr"
  - `/ho/resources` ← "Resources Helpful guides, articles and tips for homeownership."
  - `/ho/providers` ← "Service Providers Access our vetted list of trusted local professional"
  - `/try` ← "Try it free"

### 19. `/register` — HOMEOWNER REGISTRATION (#/register)

- Source: `design-reference/screens/19-register.html` · Screenshot: `design-reference/screenshots/19-register.jpg`
- Shell: public top nav (active tab: `reg`), public footer
- Interactive attributes: `data-plan`
- Links (in-page destinations):
  - `/ho` ← "Create my account" · "Sign in"
  - `/pricing` ← "Compare all features →"

### 20. `/register/agent` — AGENT REGISTRATION (#/register/agent)

- Source: `design-reference/screens/20-register-agent.html` · Screenshot: `design-reference/screenshots/20-register-agent.jpg`
- Shell: public top nav (active tab: `reg-agent`), public footer
- Interactive attributes: `data-plan`
- Links (in-page destinations):
  - `/agent` ← "Create my agent account" · "Sign in"
  - `/pricing/agents` ← "Compare all features →"

### 21. `/ho` — HOMEOWNER: MY DASHBOARD (#/ho)

- Source: `design-reference/screens/21-ho.html` · Screenshot: `design-reference/screenshots/21-ho.jpg`
- Shell: ho sidebar (active: `dash`), app footer
- Links (in-page destinations):
  - `/ho/alerts` ← "2"
  - `/ho/resources` ← "(icon)"
  - `/ho/profile` ← "Photo of 123 Happiness Street" · "View Property Details →"
  - `/ho/health` ← "View All Systems →" · "See All Insights →"
  - `/ho/vault` ← "View Full Property Summary →" · "View All" · "View All Activity →" · "View All Warranties →"
  - `/ho/report` ← "View Score Details →"
  - `/ho/maintenance` ← "View All" · "View All Maintenance →"
  - `/ho/add` ← "Add Expense" · "Add Maintenance / Repair" · "Add Improvement" · "Add Warranty"
  - `/ho/estimate` ← "Request Price Estimate"
  - `/ho/providers` ← "Find a Vendor"
- Stub controls (look clickable, do nothing — `data-stub`): "Edit property profile"

### 22. `/ho/vault` — MY VAULT (#/ho/vault)

- Source: `design-reference/screens/22-ho-vault.html` · Screenshot: `design-reference/screenshots/22-ho-vault.jpg`
- Shell: ho sidebar (active: `vault`), app footer
- Links (in-page destinations):
  - `/ho/resources` ← "Learn more" · "Resources Home tips, blogs, checklists & more!"
  - `/ho/alerts` ← "3" · "JUN 15 HVAC System Service Every 6 months Due soon" · "JUL 10 Roof Inspection Annually Upcoming" · "AUG 05 Water Heater Flush Every 12 months Upcoming" · "See all" · "HVAC Filter Change Due It’s been 3 months since your last change. May " · "Warranty Expiring Soon Samsung Refrigerator warranty expires in 45 day" · "Registration Required Your Generac Generator warranty registration is " …
  - `/ho/health` ← "View full Home Health →" · "View all systems →"
  - `/ho/maintenance` ← "See all" · "View all upcoming maintenance →"
  - `/ho/vault` ← "See all"
  - `/ho/estimate` ← "Request Price Estimate Get cost estimates for repairs or replacements"
  - `/ho/providers` ← "Service Providers Find trusted local pros for your home"
- Stub controls (look clickable, do nothing — `data-stub`): "See what&rsquo;s missing (opens in a new window)", "Full market report", "Add a document or record"

### 23. `/ho/reports` — s-reports

- Source: `design-reference/screens/23-ho-reports.html` · Screenshot: `design-reference/screenshots/23-ho-reports.jpg`
- Shell: ho sidebar (active: `reports`), app footer
- Links (in-page destinations):
  - `/ho/alerts` ← "2"
  - `/ho/health` ← "Generate Report" · "View Sample" · "Property Health (Summary)"
  - `/ho/report` ← "Generate Report" · "View Sample" · "Property Health (Detailed)"
  - `/ho/improvements` ← "Generate Report" · "View Sample" · "Home Improvements/ Upgrades (Summary)"
  - `/ho/improvements/detailed` ← "Generate Report" · "View Sample" · "Home Improvements/ Upgrades (Detailed)"
- Stub controls (look clickable, do nothing — `data-stub`): "Download report", "Contact support"

### 24. `/ho/health` — HOME HEALTH SCORE (#/ho/health)

- Source: `design-reference/screens/24-ho-health.html` · Screenshot: `design-reference/screenshots/24-ho-health.jpg`
- Shell: ho sidebar (active: `reports`), app footer
- Links (in-page destinations):
  - `/ho/reports` ← "Back to My Reports" · "Other Reports"
  - `/ho/report` ← "Download PDF" · "View full Property Health →" · "See All Insights →"
  - `/ho/estimate` ← "View All →" · "Learn More →" · "View Full Cost Details →"
  - `/ho/maintenance` ← "View All"
  - `/ho/alerts` ← "View All Maintenance →" · "View All" · "Review Now →" · "View Details →"
  - `/ho/profile` ← "View Value Estimate →"
  - `/ho/vault` ← "Go to Property Vault →"
- Stub controls (look clickable, do nothing — `data-stub`): "Print report", "Contact Support"

### 25. `/ho/profile` — PROPERTY PROFILE (#/ho/profile)

- Source: `design-reference/screens/25-ho-profile.html` · Screenshot: `design-reference/screenshots/25-ho-profile.jpg`
- Shell: ho sidebar (active: `profile`), app footer
- Links (in-page destinations):
  - `/ho/alerts` ← "3" · "SEP 15 HVAC System Service Every 6 months Due soon" · "OCT 10 Roof Inspection Annually Upcoming" · "NOV 05 Water Heater Flush Every 12 months Upcoming" · "See all" · "HVAC Filter Change Due It’s been 3 months since your last change." · "Roof Inspection Annual inspection recommended." · "Warranty Expiring Soon Samsung Refrigerator, 45 days." …
  - `/ho/health` ← "View full Home Health →" · "View all systems →"
  - `/ho/maintenance` ← "See all" · "View all upcoming maintenance →"
  - `/ho/vault` ← "See all"
  - `/ho/estimate` ← "Request Price Estimate Get cost estimates for repairs or replacements"
  - `/ho/providers` ← "Service Providers Pre-qualified pros for your home"
  - `/ho/resources` ← "Resources Home tips, blogs, checklists & more"
- Stub controls (look clickable, do nothing — `data-stub`): "See what&rsquo;s missing (opens in a new window)", "Full market report", "Add a document or record"

### 26. `/ho/alerts` — MY ALERTS (#/ho/alerts)

- Source: `design-reference/screens/26-ho-alerts.html` · Screenshot: `design-reference/screenshots/26-ho-alerts.jpg`
- Shell: ho sidebar (active: `alerts`), app footer
- Links (in-page destinations):
  - `/ho/maintenance` ← "Upcoming Maintenance" · "View All →"
  - `/ho/alerts` ← "View All →"
  - `/pricing` ← "View All →"
  - `/ho/vault` ← "View All →"
  - `/ho/providers` ← "Find a Pro"
  - `/ho/resources` ← "Learn more about alerts →"
- Stub controls (look clickable, do nothing — `data-stub`): "Alert settings", "Schedule HVAC service", "Recall details", "Utility usage report", "Load more alerts", "Manage alert settings"

### 27. `/ho/maintenance` — UPCOMING MAINTENANCE (#/ho/maintenance)

- Source: `design-reference/screens/27-ho-maintenance.html` · Screenshot: `design-reference/screenshots/27-ho-maintenance.jpg`
- Shell: ho sidebar (active: `alerts`), app footer
- Interactive attributes: `data-print`
- Links (in-page destinations):
  - `/ho/alerts` ← "Back to My Alerts" · "2"
  - `/ho/maintenance` ← "View All →" · "View Overdue →" · "View Next 30 Days →" · "View Long-Term →"
  - `/ho/add` ← "Add Maintenance Item"
  - `/ho/resources` ← "View All" · "Read More →"
  - `/ho/providers` ← "Find a Service Provider"
- Stub controls (look clickable, do nothing — `data-stub`): "Filter by property"

### 28. `/ho/improvements` — HOME IMPROVEMENTS SUMMARY (#/ho/improvements)

- Source: `design-reference/screens/28-ho-improvements.html` · Screenshot: `design-reference/screenshots/28-ho-improvements.jpg`
- Shell: none (standalone document)
- Links (in-page destinations):
  - `/ho/reports` ← "Back to My Reports"
  - `/ho/improvements/detailed` ← "View Detailed"
- Stub controls (look clickable, do nothing — `data-stub`): "Print report", "Download PDF", "Filter by category"

### 29. `/ho/improvements/detailed` — DETAILED HOME IMPROVEMENTS (#/ho/improvements/detailed)

- Source: `design-reference/screens/29-ho-improvements-detailed.html` · Screenshot: `design-reference/screenshots/29-ho-improvements-detailed.jpg`
- Shell: ho sidebar (active: `reports`), app footer
- Links (in-page destinations):
  - `/ho/reports` ← "Back to My Reports"
  - `/ho/alerts` ← "2"
  - `/ho` ← "View More Photos"
  - `/ho/add` ← "Add Improvement"
  - `/ho/vault` ← "View All Receipts" · "View All Permits" · "View All Photos"
  - `/ho/improvements` ← "Summary Report"
- Stub controls (look clickable, do nothing — `data-stub`): "By category", "Upcoming projects", "Photos &amp; documents", "Cost trends"

### 30. `/ho/resources` — RESOURCES (#/ho/resources)

- Source: `design-reference/screens/30-ho-resources.html` · Screenshot: `design-reference/screenshots/30-ho-resources.jpg`
- Shell: ho sidebar (active: `resources`), app footer
- Links (in-page destinations):
  - `/ho/alerts` ← "2"
  - `/ho` ← "My Dashboard"
- Stub controls (look clickable, do nothing — `data-stub`): "Help centre", "Spring Home Maintenance Checklist", "How to Extend the Life of Your Roof", "Understanding Your Home's Systems", "View All Blogs", "Smart Homeowner Podcast: Ep. 23", "Preventative Maintenance Matters", "Ask the Expert: Home Systems 101", "View All Podcasts", "How Your HVAC System Works", "Cleaning Your Gutters the Right Way", "Detecting Water Leaks Early", "View All Videos", "How often should I service my HVAC system?", "What is a home warranty?", "How can I improve my home's energy efficiency?", "View All FAQs", "Seal air leaks and save on energy bills", "Insulate your water heater", "Fix small leaks before they get costly", "View All Tips", "Send Suggestion", "Check Back Soon"

### 31. `/ho/providers` — SERVICE PROVIDERS (#/ho/providers)

- Source: `design-reference/screens/31-ho-providers.html` · Screenshot: `design-reference/screenshots/31-ho-providers.jpg`
- Shell: ho sidebar (active: `providers`), app footer
- Links (in-page destinations):
  - `/ho/alerts` ← "2"
  - `/register` ← "Sign in"
  - `/pricing` ← "View Pricing & Sign Up" · "Click here to learn more about our programs, benefits and pricing"
- Stub controls (look clickable, do nothing — `data-stub`): "Help center", "HVAC vendors", "Plumbing vendors", "Electrical vendors", "Roofing vendors", "Appliances vendors", "Landscaping vendors", "Pest Control vendors", "Cleaning vendors", "More vendors", "View Cool Air Solutions profile", "Request a quote from Cool Air Solutions", "Learn more about the vendor program"

### 32. `/ho/estimate` — REQUEST PRICE ESTIMATE (#/ho/estimate)

- Source: `design-reference/screens/32-ho-estimate.html` · Screenshot: `design-reference/screenshots/32-ho-estimate.jpg`
- Shell: ho sidebar (active: `estimate`), app footer
- Links (in-page destinations):
  - `/ho/estimate/hvac` ← "Next: Provide Details"
  - `/ho/providers` ← "View All →"
- Stub controls (look clickable, do nothing — `data-stub`): "Water Heater estimate", "Roofing estimate", "Windows &amp; Doors estimate", "Electrical Panel estimate", "Kitchen Remodel estimate", "Bathroom Remodel estimate", "Flooring estimate", "Appliances estimate", "Solar Panels estimate", "Painting estimate", "Deck / Patio estimate", "Plumbing estimate", "Insulation estimate", "Other product or service", "Change product"

### 33. `/ho/estimate/hvac` — HVAC PRICE ESTIMATE (#/ho/estimate/hvac)

- Source: `design-reference/screens/33-ho-estimate-hvac.html` · Screenshot: `design-reference/screenshots/33-ho-estimate-hvac.jpg`
- Shell: none (standalone document)
- Links (in-page destinations):
  - `/ho/estimate` ← "Back to Request Price Estimate"
  - `/ho/providers` ← "BROWSE PREFERRED SERVICE PROVIDERS"
- Stub controls (look clickable, do nothing — `data-stub`): "Print estimate", "Download PDF", "Check my existing quote", "Request estimates from preferred providers"

### 34. `/agent` — AGENT: MY DASHBOARD (#/agent)

- Source: `design-reference/screens/34-agent.html` · Screenshot: `design-reference/screenshots/34-agent.jpg`
- Shell: agent sidebar (active: `dash`), app footer
- Links (in-page destinations):
  - `/agent/alerts` ← "3" · "View All"
  - `/agent/clients` ← "View All" · "Add Client"
  - `/agent/vaults` ← "View All" · "(icon)" · "View Property →" · "Add Property You have 3 property slots remaining." · "Add Property"
  - `/agent/marketing` ← "Create Marketing"
  - `/ho/estimate` ← "Request Price Estimate"
  - `/agent/providers` ← "Find a Vendor"
- Stub controls (look clickable, do nothing — `data-stub`): "Help center", "Generate report"
