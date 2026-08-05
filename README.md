# M/W Global Services Limited — Website

Corporate website for an import/export and logistics company. Next.js 16 (App
Router) · React 19 · TypeScript · Tailwind CSS v4.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> **Note on the folder name.** This project lives in a directory whose name
> contains a colon (`M:W` — macOS stores the `/` in "M/W" as `:` on disk). A
> colon is the PATH separator on macOS/Linux, so npm cannot resolve
> `node_modules/.bin` and a bare `next dev` fails with `next: command not
> found`. The npm scripts work around this by calling
> `node node_modules/next/dist/bin/next` directly. If you rename the folder to
> something without a colon (e.g. `mw-global`), you can simplify the scripts
> back to plain `next dev` / `next build` / `next start`.

## Filling in the real company details

Everything written as `[SQUARE BRACKETS]` is a placeholder. Search the project
for `[` to find them all. The important ones live in one file:

**[`lib/site.ts`](lib/site.ts)** — company name, phone, email addresses,
WhatsApp number, office address, business hours and navigation. Change them
here and they update across every page, the navbar and the footer.

Still placeholders:

| Where | What to replace |
| --- | --- |
| `email` in [`lib/site.ts`](lib/site.ts) | Remove the square brackets once confirmed |
| `salesEmail` in [`lib/site.ts`](lib/site.ts) | The trade-desk address |
| `url` and `social` in [`lib/site.ts`](lib/site.ts) | Live domain and social profiles |
| [`app/layout.tsx`](app/layout.tsx) | `metadataBase` — set to your live domain |

The office address drives the Google Maps embed on the contact page
automatically — change it in one place and the map follows.

## Editing content

- **[`lib/content.ts`](lib/content.ts)** — the four service lines, the commodity
  catalogue, the four-step process, markets served, and the "why us" points.
  Pages render straight from these arrays, so adding a commodity or a country
  is a one-line change.
- **[`lib/site.ts`](lib/site.ts)** — company facts and navigation.

## The quote form

[`app/api/quote/route.ts`](app/api/quote/route.ts) emails each enquiry to the
trade desk via [Resend](https://resend.com), with `reply-to` set to the
enquirer so a reply from the inbox reaches them directly.

**Two things are needed before it works on the live site:**

1. **Set `RESEND_API_KEY`** — create one at <https://resend.com/api-keys>, then
   add it to `.env.local` locally and to Netlify under *Site settings →
   Environment variables*. See [`.env.example`](.env.example).
2. **Verify the sending domain in Resend.** The `from` address defaults to
   `enquiries@mwglobal.org.ng`, and Resend rejects it until `mwglobal.org.ng`
   is verified by adding the DNS records it gives you. To send before the
   domain is ready, set `QUOTE_FROM_EMAIL` to a Resend-provided test address —
   replies still work, because `reply-to` is the enquirer's own address.

Destination and sender can be overridden with `QUOTE_TO_EMAIL` and
`QUOTE_FROM_EMAIL`; both otherwise come from [`lib/site.ts`](lib/site.ts).

**If delivery fails, the route never reports success.** It returns an error and
the form tells the visitor to phone or email instead — a false "Enquiry
received" loses a real customer. The enquiry is also written to the function
logs on failure, so it can be recovered. Watch for this after launch: an
unverified domain is the most likely cause, and it surfaces as a `502`.

The form also includes a honeypot field that silently absorbs bot submissions,
plus server-side validation of name, email format and message length, and the
enquiry is HTML-escaped before it goes into the email body.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero, intro, four service lines, commodity preview, process, differentiators, markets, CTA |
| `/about` | Story, company details, mission, values, approach, markets |
| `/services` | Detailed section per service line, engagement process |
| `/commodities` | Full catalogue by category |
| `/contact` | Contact details, WhatsApp link, live Google Maps embed, quote form |

## Design system

Brand colours are taken from the logo and defined in
[`app/globals.css`](app/globals.css) as Tailwind v4 theme tokens:

| Token | Use |
| --- | --- |
| `brand-*` (green, #15653e) | Primary — buttons, dark bands, hero washes |
| `crimson-*` (#a81b3f) | Accent — section rules, numerals, active nav |
| `ink-*` (warm near-black) | Text and hairline borders |
| `paper` (#f7f5f0) | Page background — warm, not screen-white |

Type is **Source Serif 4** for headlines (the `.display` class) and **IBM Plex
Sans** for everything else, both loaded via `next/font`. Shared primitives —
`Container`, `SectionHeading`, `Button`, `Label`, `PageHeader`, `CtaBand` —
live in [`components/ui.tsx`](components/ui.tsx).

The logo mark in [`components/Logo.tsx`](components/Logo.tsx) is an SVG
recreation of your artwork. **If you have the original as SVG or PNG, drop it
into `public/` and swap the `<svg>` for an `<Image>`** — it will be sharper
than a rebuild, and the surrounding lockup will still fit.

Accessibility: skip-to-content link, visible focus rings, `aria-current` on the
active nav item, labelled form fields, and a `prefers-reduced-motion` block.

## Photography

Photographs live in [`public/images/`](public/images/), all from Unsplash under
the [Unsplash License](https://unsplash.com/license) — free for commercial use,
no attribution required.

**Replace these with photographs of your own operations as soon as you can.**
Real images of your warehouse, your cargo and your team will do more for
credibility than any stock library. Drop replacements into `public/images/`
using the same filenames and nothing else needs to change.

## A note on claims

The copy in [`lib/content.ts`](lib/content.ts) deliberately avoids naming
specific licences, accreditations, certifications or guaranteed figures. Service
points are written as capabilities ("independent assay arranged on request")
rather than credentials the company may not hold.

**Keep it that way.** Only add a specific claim once it is actually true — these
statements are what buyers will hold you to contractually.

## Deploying

`/api/quote` is a server route, so this cannot be deployed as a static export —
the host must run Next.js.

### Netlify (CLI — no Git setup needed)

[`netlify.toml`](netlify.toml) is already configured. From this folder:

```bash
npm i -D netlify-cli          # once
npx netlify login             # opens a browser, one time
npx netlify deploy --build    # draft URL, safe to check first
npx netlify deploy --build --prod   # goes live
```

`--build` runs the production build on Netlify's side using `netlify.toml`.
Do the draft deploy first and click through the site before adding `--prod`.

### Netlify (connected to Git)

Harder here than usual, for two reasons worth knowing:

1. This folder is **not its own Git repository**. The enclosing repo's root is
   your home directory (`/Users/Apple`), pushing to
   `github.com/mustapha7777ib/Projects`, which is **public**. Connecting Netlify
   to that repo means pointing it at a subdirectory of a repo full of unrelated
   projects.
2. The folder name contains a colon (`M:W`), which is awkward as a Netlify base
   directory.

If you want Git-based deploys with automatic rebuilds on push, the clean fix is
to make this its own repo with a colon-free name:

```bash
git init
git add .
git commit -m "M/W Global Services website"
# create a new repo on GitHub, then:
git remote add origin git@github.com:<you>/mw-global-website.git
git push -u origin main
```

Then import that repo in Netlify. `.gitignore` already excludes `node_modules`,
`.next` and `.env*.local`.

### A note on Vercel

Vercel is made by the Next.js team and is the lowest-risk host for a Next.js 16
app — push to GitHub, import, done. Netlify's Next.js runtime generally tracks
new Next releases but can lag on a major version. If the Netlify build fails on
a runtime incompatibility, that is the likely cause, and Vercel is the fallback.

### Environment variables

Set these in the host's dashboard, never in the repo. `RESEND_API_KEY` is the
only required one; see [`.env.example`](.env.example) for the full list.

## Before launch

- [ ] Replace every remaining `[PLACEHOLDER]` (the social links in `lib/site.ts`)
- [ ] Set `RESEND_API_KEY` and verify the sending domain in Resend
- [ ] Submit a test enquiry on the live site and confirm it arrives
- [ ] Submit the sitemap in Google Search Console
- [ ] Create a Google Business Profile for the Abuja office
- [ ] Swap the stock photography for images of your own operations
- [ ] Drop in the original logo artwork in place of the SVG recreation
- [ ] Trim the commodity lists to what you can actually supply — they are broad by default
# mw-global
