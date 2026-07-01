# Deploy to GitHub + Vercel

## 1) GitHub (auto-sync with Lovable)

In Lovable: **top-right (+) menu → GitHub → Connect project → Create Repository**.
After that every change in Lovable auto-pushes to GitHub, and every push to
GitHub auto-syncs back to Lovable.

## 2) Vercel

1. Go to https://vercel.com/new → **Import** your GitHub repo.
2. Framework Preset: **Other** (leave as-is — `vercel.json` already tells Vercel what to do).
3. **Environment Variables** — add these in Vercel → Project → Settings → Environment Variables:

   | Name | Value | Where to get it |
   |---|---|---|
   | `SUPABASE_URL` | `https://<your-project>.supabase.co` | Lovable Cloud → Backend |
   | `SUPABASE_PUBLISHABLE_KEY` | anon key | Lovable Cloud → Backend |
   | `SUPABASE_SERVICE_ROLE_KEY` | service_role key | your own Supabase (see below) |
   | `VITE_SUPABASE_URL` | same as `SUPABASE_URL` | — |
   | `VITE_SUPABASE_PUBLISHABLE_KEY` | same as `SUPABASE_PUBLISHABLE_KEY` | — |

4. **Deploy**. Vercel builds via `vite build --config vite.config.vercel.ts` and
   serves SSR through the Vercel Build Output API — no rewrites file needed.

## What works on Vercel

- ✅ Full SSR site, all routes, all pages
- ✅ Supabase database + auth + AI chat (via Lovable AI Gateway)
- ✅ Meeting/contact form submissions saved to the database

## What only works on Lovable hosting

- ❌ Gmail email notifications for bookings/contacts (uses Lovable's internal
  Gmail connector — not available outside Lovable). Data is still saved in the
  database, so you never lose a booking; you just won't get the email on Vercel.

If you need email on Vercel, add a provider like Resend and swap the send
function in `src/lib/contact.functions.ts`.

## `SUPABASE_SERVICE_ROLE_KEY` on Vercel

Lovable Cloud manages Supabase for you and does not expose the service_role
key. To deploy on Vercel with full server-side features you have two options:

- **A. Migrate to your own Supabase project** (free tier is fine): create a
  project at supabase.com, run the SQL migrations from `supabase/migrations/`,
  copy the URL/anon/service_role keys into Vercel env vars. Everything works.
- **B. Skip service_role**: server-side writes go through the anon key with
  RLS. Booking/contact inserts already have public INSERT policies so they
  still work, but any admin server code will be limited.

## Recommended

Publish on **Lovable** (one click, works instantly, email included) and use
**Vercel** as a secondary mirror if you specifically need Vercel's CDN.
