# ThisIsOurMoney - AI Development Guide

## Product Vision

ThisIsOurMoney is a property intelligence platform for:

- homeowners
- realtors
- property professionals

Core concept:

Property Vault + Property Health Intelligence

This is NOT just document storage.

This IS:

Property intelligence and lifecycle management.

MVP focus:

- property management
- document vault
- renovation tracking
- dashboard intelligence
- realtor workflows

Do NOT overengineer early versions.

---

# Tech Stack

## Frontend

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend

- Supabase
- Postgres
- Supabase Auth
- Supabase Storage

## Forms

- React Hook Form
- Zod

## Icons

- Lucide React

---

# UI / UX Rules

Design aesthetic:

- premium
- dark-mode first
- modern SaaS
- clean spacing
- rounded cards
- subtle gradients
- minimalistic

Avoid:

- overly bright colors
- cluttered layouts
- bootstrap look
- excessive animations

Primary colors:

- dark navy/black backgrounds
- green primary actions
- amber warning indicators
- red risk indicators

---

# Existing Design Language

Preserve existing prototype styling:

- dark navy background
- green primary actions
- health score cards
- dashboard card layout
- risk indicators
- investor-grade visual polish

Never redesign existing screens unless requested.

Extend existing design patterns consistently.

---

# Architecture Rules

Use:

- reusable components
- modular folder structure
- strong typing
- clean separation of concerns

Avoid:

- giant files
- duplicated logic
- inline styles
- unnecessary abstractions
- premature optimization
- premature microservices

Prefer:

- server actions
- simple APIs
- composable components

---

# Folder Structure

Use structure similar to:

src/

  app/

  components/

  lib/

  hooks/

  services/

  types/

  utils/

---

# Coding Standards

Always:

- use TypeScript properly
- avoid any
- use async/await
- create reusable UI primitives
- keep layouts responsive
- ensure npm run build succeeds

---

# Package Rules

Use stable packages only.

Avoid:

- experimental releases
- beta packages
- release candidates
- Turbopack unless explicitly requested

Prefer:

- npm

Do not switch package managers.

---

# Deployment

Hosting:

- Vercel

Source control:

- GitHub private repo

---

# Initial Database Model

Use Supabase/Postgres.

Tables:

users

- id
- email
- role (homeowner | realtor | admin)
- created_at

properties

- id
- user_id
- address
- property_type
- year_built
- square_feet
- bedrooms
- bathrooms
- purchase_price
- created_at

documents

- id
- property_id
- category
- file_url
- upload_date

renovations

- id
- property_id
- title
- status
- contractor
- estimated_cost
- actual_cost
- start_date
- end_date

forecasts

- id
- property_id
- category
- risk_score
- predicted_cost
- timeline

Create migrations cleanly.

Avoid schema duplication.

---

# MVP V1 Scope

Build ONLY:

1. Authentication

2. Property CRUD

3. Property dashboard

4. Vault uploads

5. Renovation tracker

6. Realtor dashboard

7. Simple forecasting

8. Settings

---

# Future V2 Scope

Future features:

- OCR extraction
- AI forecasting
- government incentives
- permits
- commercial properties
- predictive maintenance
- insurance intelligence

---

# AI Feature Policy

For MVP V1:

AI features must use mocked or placeholder data.

Do NOT build:

- vector databases
- embeddings
- RAG
- AI agents
- LangChain
- LLM orchestration
- complex AI pipelines

Use simple mocked forecasting until validation.

---

# Current Non-Goals

Do NOT implement:

- Kubernetes
- microservices
- Redis
- NATS
- event sourcing
- complex caching
- advanced AI systems

---

# UI Component Rules

Use:

- shadcn/ui
- Tailwind
- Lucide

Create:

- loading states
- empty states
- skeleton loaders
- mobile responsiveness

---

# Feature Development Pattern

Implement features as vertical slices:

1. UI
2. form
3. validation
4. API
5. database
6. loading state
7. error handling

Avoid building large systems at once.

---

# AI Agent Operating Rules

Read this file before every task.

Do not explore alternatives unless explicitly asked.

Do not spawn subagents unless absolutely required.

Prefer implementation over discussion.

Prefer the simplest production-ready solution.

For MVP development:

- ship working functionality first
- optimize later
- avoid analysis paralysis

Never redesign UI unless requested.

Preserve visual consistency.

---

# Cost Control Rules

Avoid unnecessary token usage.

Do NOT:

- run npm audit
- investigate vulnerabilities
- benchmark libraries
- compare frameworks
- perform large exploratory research
- generate excessive explanations

Only run commands when necessary.

Prefer:

1. create files
2. wait for approval
3. run install/build

Avoid repeated builds unless code changed.

---

# Command Execution Policy

Do not execute without approval:

- git push
- git force push
- delete commands
- mass file removals
- large dependency upgrades

Always explain commands before execution.

Never remove files without confirmation.

# TIMP Prototype Screens (ported 1:1)

The public site plus the homeowner and agent app screens are a **1:1 port** of the approved clickable
prototype "TIMP Prototype — CURRENT" (ThisIsMyProperty.com). The source of truth is `design-reference/`:
`prototype.html` (runnable in a browser), `styles.css`, `sprite.svg`, `shell.js`, `screens/NN-*.html`,
`screenshots/`, and `SPEC.md` (route map, menus, click flows).

- Routes live in the route group `src/app/(timp)/` (34 pages: `/`, `/agents`, `/mission`, `/pricing`,
  `/pricing/agents`, `/how`, `/try`, `/brokers`, `/providers`, `/providers/homeowners`, `/register`,
  `/register/agent`, `/ho/*`, `/agent/*`). The existing auth and data routes (`/login`, `/signup`,
  `/dashboard`, `/properties`, `/vault`, `/forecast`, `/settings`) are unchanged.
- Styling: `src/app/(timp)/timp.css` is the prototype CSS with every selector scoped under `.timp`
  (the wrapper set by `(timp)/layout.tsx`). Inside `.timp`, Tailwind preflight and the app's base styles are
  reverted, so the screens render exactly like the prototype. **Don't use Tailwind or shadcn inside TIMP screens,**
  and don't restyle them. Change the markup or `timp.css` to match approved design changes.
- Page markup was converted mechanically from `design-reference/screens/`: same elements, classes, copy
  and mock numbers. Keep the `<section className="screen is-active">` wrapper.
- Shared pieces are in `src/components/timp/`: `PublicNav`, `Sidebar` (ho/agent), `PublicFooter`/`AppFooter`,
  `Brand`, `MenuButton`, `IconSprite` (icons: `<svg><use href="#i-NAME" /></svg>`), `ScreenIndex` (hide with
  `NEXT_PUBLIC_SHOW_SCREEN_INDEX=false`), and `PrototypeBehaviors`. That last one is the single client component
  that handles the dropdowns, sidebar collapse, mobile drawer, screen index, `data-stub` (intentionally inert
  controls), `data-print` and `data-plan`.
- Images: `public/images/timp/`.
