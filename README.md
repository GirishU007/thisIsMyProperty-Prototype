# thisIsMyProperty-Prototype

Clickable prototype (v2) of **ThisIsMyProperty.com**, with the redesigned flow: a shorter public site, a guided
four-step sign-up, a task-first homeowner app and a "who to contact today" agent app. All data is sample data;
nothing is saved to a server and there is no real sign-in.

It was created from `main` of the first prototype (`thisisourmoney-app`), so the two can be compared side by side.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

No environment variables are needed.

## Deploy

Import the repository in Vercel and keep the Next.js defaults. Every push to `main` deploys.

## Where things are

| Path | What |
| --- | --- |
| `src/app/**/page.tsx` | One file per screen (33 screens). Markup only. |
| `src/app/prototype.css` | All styles, scoped under `.timp`. |
| `src/components/proto/` | Shells (public nav, app sidebar, agent sidebar), dialogs, guide, click behaviour. |
| `src/components/proto/Behaviors.tsx` | Every click behaviour, driven by `data-*` attributes in the markup. |
| `src/lib/session.ts`, `src/middleware.ts` | The implied "signed in" state (a cookie set on entering `/app` or `/agent`). |

The **Prototype guide** button (bottom right of every screen) lists all screens.
See `claude.md` for conventions when changing the prototype.
