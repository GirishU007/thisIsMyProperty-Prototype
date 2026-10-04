# ThisIsMyProperty.com prototype v2 — claude.md

## What this is

A clickable product prototype for **ThisIsMyProperty.com** ("Your home's health at your fingertips").
It shows the redesigned flow (v2) so it can be compared with the first prototype at
https://thisisourmoney-app.vercel.app/. The repository was created from `main` of that first prototype.

It is a prototype: all data is sample data written into the pages, nothing is persisted on a server, and
there is no real authentication. Supabase and the real dashboard/vault pages of the first prototype were
removed on purpose. Some of their packages are still listed in `package.json`; they are unused.

## Stack

Next.js 15 (App Router), React 18, TypeScript. Tailwind is installed and its preflight is on, but the
screens are styled by one plain stylesheet, `src/app/prototype.css`, scoped under `.timp`.

## Structure

- `src/app/layout.tsx`: fonts (Figtree, Source Serif 4), global CSS, wraps everything in `<Shell>`.
- `src/app/**/page.tsx`: one server component per screen, markup only. 34 screens:
  - Public: `/`, `/how`, `/pricing`, `/pricing/agents`, `/agents`, `/mission`, `/about`, `/pros`, `/pros/join`, `/brokers`
  - Sign-up: `/start`, `/signup`, `/signup/agent`, `/setup/home`, `/setup/document`, `/setup/score`
  - Homeowner app: `/app`, `/app/todo`, `/app/health`, `/app/health/report`, `/app/health/improvements`,
    `/app/vault`, `/app/costs`, `/app/costs/estimate`, `/app/pros`, `/app/property`, `/app/help`
  - Agent app: `/agent`, `/agent/clients`, `/agent/vaults`, `/agent/alerts`, `/agent/marketing`,
    `/agent/resources`, `/agent/pros`
- `src/components/proto/`:
  - `Shell.tsx`: `.timp` wrapper, icon sprite, dialogs, toast, guide, behaviours.
  - `PublicNav.tsx`, `PublicFooter.tsx`, `FlowBar.tsx`: chrome of public and sign-up screens.
  - `AppShell.tsx`, `AgentShell.tsx`: sidebar, page header and phone tab bar of the two apps.
  - `Modals.tsx`: the Schedule, Add and Quotes dialogs.
  - `Behaviors.tsx`: every click behaviour, as one delegated listener.
  - `Guide.tsx`, `screens.ts`: the "Prototype guide" button and its list of screens.
  - `Icon.tsx`, `IconSprite.tsx`, `sprite.ts`, `Brand.tsx`: icons and logo.
- `src/lib/session.ts`, `src/middleware.ts`, `src/app/signout/route.ts`: the implied session.
- `public/images/timp/`: all images.

## Conventions

- **Pages are markup only.** Interactivity is opted into with attributes handled in `Behaviors.tsx`:
  - `data-go="/path"` on a button navigates. For anchors use `<Link href>`.
  - `data-act="name"` runs an action (schedule, add-doc, quotes, usermenu, drawer, print, ...).
  - `data-toast="text"` explains a control that is not built yet. Every control must do something:
    navigate, act, or toast. No dead buttons.
  - Pickers: `data-f` (filter chips in `#x-filter` filter `[data-type]` rows in `#x-list`), `data-tab`,
    `data-job`, `data-sys`, `data-cycle` (swaps text to `data-m` / `data-y`).
- **State** (HVAC scheduled, roof scheduled, document added) lives in `sessionStorage` and is re-applied
  to each screen by `sync()` in `Behaviors.tsx`. Signing out clears it.
- **Deep links** read by `Behaviors.tsx`: `/app/health?tab=reports` opens the Reports tab;
  `/app/costs/estimate?job=hvac|wh|roof` picks the job (data in `ESTIMATES`).
- **Session**: visiting `/app...` sets the cookie `timp_session=ho`, `/agent...` sets `agent`.
  `PublicNav` reads it and shows "My dashboard" and the account menu instead of "Sign in / Get started".
  `/signout` clears it. Use a plain `<a href="/signout">`, not `<Link>` (a prefetch must not sign out).
- **CSS**: add rules to `src/app/prototype.css`, prefixed `.timp` and using the `ux-` class prefix.
  Do not use generic class names (`.price`, `.badge`): the first part of the file still carries the
  first prototype's shared styles. Breakpoints: 900px (tablet: sidebar becomes a drawer, tab bar
  appears) and 600px (phone).
- **Icons**: `<Icon n="name" s={18} />` or `<svg width height><use href="#i-name" /></svg>`. Names are
  the `i-*` symbols in `sprite.ts`.
- **Copy**: plain, short, sentence case. Names used throughout: homeowner Jane, agent Sarah,
  123 Happiness Street, Cool Air Solutions (HVAC), Suncoast Roofing, Harbor Plumbing.
- New screen: add `src/app/<route>/page.tsx` using `PublicNav`/`AppShell`/`AgentShell`, then add it to
  `screens.ts` and to the sidebar in the shell if it belongs there.

## Checks

`npx tsc --noEmit` and `npm run lint` must pass. `npm run build` is what Vercel runs.
