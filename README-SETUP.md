# Dropping this into your `ibra-app` project

Once `create-next-app` finished, you have a folder called `ibra-app` with
its own `app/`, `components/` (if any), and `tailwind.config.ts`.

1. Copy everything from this bundle **into** that `ibra-app` folder,
   overwriting the default `app/page.tsx`, `app/layout.tsx`,
   `app/globals.css`, and `tailwind.config.ts` that `create-next-app`
   generated.
2. Make sure a `lib/` and `components/` folder exist at the project root
   (same level as `app/`) — copy the files there too.
3. From inside `ibra-app`, run:
   ```
   npm run dev
   ```
4. Open http://localhost:3000 — you should see the same site as the MVP
   demo, now running as a real Next.js app.

## What's real vs. still a placeholder

- **Cart** (Products page) works end-to-end in the browser (add, adjust
  qty, checkout form) but the "Place order" button doesn't charge
  anyone — that's where a real payment gateway (Tap/PayTabs/Stripe)
  plugs in.
- **Opportunities** form saves to the visitor's own browser
  (`localStorage`), not a shared database — so right now only the
  person who submitted it sees it added to the list. A real shared list
  needs a database (Postgres via Supabase/Neon is the pick from the
  tracker) and an API route to read/write it.
- **Contact form** doesn't send anywhere yet — needs a service like
  Resend or Formspree, or an API route that emails you.

None of these block using the site today — they're the next layer once
the structure feels right.
