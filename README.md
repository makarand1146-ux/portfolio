# Makarand Dhepe — Portfolio

A production-ready personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Targets recruiters in analytics, business analysis, product, and core mechanical roles.

## Design notes

- **Type system**: Fraunces (display, headlines only) + Inter (body) + IBM Plex Mono (data labels, tags, the stats strip). The mono face is deliberate — it reads like a terminal, which fits an analytics-and-engineering profile.
- **Signature element**: the "Ledger Strip" directly under the hero — a continuous mono-type band of key facts (CGPA, founding year, projects shipped). It's built around how recruiters actually scan a page in the first few seconds.
- **Color**: cool ink/paper neutrals with a single electric-indigo accent (`signal`) and a sparing amber accent for highlights — no gradients-as-decoration, no glassmorphism for its own sake.
- **Motion**: one orchestrated hero entrance, scroll reveals, hover states. `prefers-reduced-motion` is respected throughout (see `globals.css` and the `Reveal` / `LedgerStrip` components).

## Project structure

```
src/
  app/
    layout.tsx        # Fonts, metadata, theme provider, global shell
    page.tsx           # Composes all sections in order
    globals.css         # Tailwind layers, base styles, reduced-motion rules
    sitemap.ts          # SEO sitemap
    robots.ts           # SEO robots.txt
  components/
    layout/             # Navbar, Footer, ThemeProvider, ThemeToggle
    sections/            # Hero, LedgerStrip, About, Projects, Experience, Skills, Achievements, Contact
    ui/                  # Reusable primitives: Button, Badge, Container, SectionHeading, Reveal, ProjectCard
  lib/
    data.ts              # ALL site copy and content lives here — edit this file to update anything
    utils.ts              # `cn()` class-merging helper
  types/
    index.ts               # Shared TypeScript interfaces
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — replace these

1. **Resume**: swap `/public/resume-makarand-dhepe.pdf` with your real PDF (same filename, or update `resumeUrl` in `src/lib/data.ts`).
2. **Links**: update `githubUrl`, `linkedinUrl`, `email` in `src/lib/data.ts`.
3. **Domain**: update `siteUrl` in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` to your real deployed URL.
4. **Project links**: each project in `src/lib/data.ts` has a `githubUrl` — point these at your actual repos. Add `liveUrl` where you have a deployed demo.
5. **Contact form**: the form currently opens the visitor's email client via a `mailto:` link (no backend required, works anywhere). To capture submissions server-side instead, wire it to a form backend such as Resend, Formspree, or a custom API route in `src/app/api/contact/route.ts`, and replace the `handleSubmit` logic in `src/components/sections/Contact.tsx`.

## Editing content

Everything text-based — project descriptions, experience bullets, skills, achievements, the hero headline — lives in **`src/lib/data.ts`**. You should not need to touch component files to update content.

## Adding project thumbnails

Project cards currently work without images (category tag + accent dot, in keeping with the minimal direction). To add thumbnails:
1. Drop images into `/public/projects/`.
2. Add a `thumbnail` field to the `Project` type in `src/types/index.ts`.
3. Render with `next/image` inside `ProjectCard.tsx`.

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: **Next.js** (auto-detected). No special build settings needed.
4. Deploy. Vercel will give you a `*.vercel.app` URL; attach a custom domain under Project Settings → Domains if you have one.

### Render (Static Site)

This project is already configured for static export — `next.config.mjs` has `output: "export"` set, so `npm run build` produces a deployable `out/` directory.

1. Push this repo to GitHub.
2. On Render: **New** → **Static Site**, connect your repo.
3. Build command: `npm install && npm run build`
4. Publish directory: `out`
5. Deploy. Render serves the static `out/` output directly, with free SSL on a `*.onrender.com` URL.

If you'd rather run this as a live Node server instead of a static export (not necessary for this project, since it has no API routes or server-side data fetching), remove `output: "export"` from `next.config.mjs`, then on Render create a **Web Service** with build command `npm install && npm run build` and start command `npm start`. Note the free Web Service tier spins down after 15 minutes of inactivity, causing a 30–60 second cold start on the next visit — the Static Site path above avoids that entirely.

### GitHub Pages

This project already builds as a static export (`output: "export"` in `next.config.mjs`), so `npm run build` produces a deployable `out/` directory — no extra config needed for this part.

1. Build:
   ```bash
   npm run build
   ```
   This produces a static site in the `out/` directory.
2. Push the contents of `out/` to a `gh-pages` branch (or use the `peaceiris/actions-gh-pages` GitHub Action), and enable GitHub Pages on that branch in your repo settings.
3. If deploying to a project page (`username.github.io/repo-name`), set `basePath: "/repo-name"` in `next.config.mjs` as well.

## Performance & accessibility checklist

- Semantic landmarks (`header`, `main`, `nav`, `footer`) throughout.
- All interactive elements have visible focus states (`focus-visible:outline`).
- Color contrast checked against both light and dark themes.
- `prefers-reduced-motion` disables non-essential animation.
- Fonts loaded via `next/font` (self-hosted, no layout shift, no external request at runtime).
- Images, when added, should use `next/image` for automatic optimization.

## Tech stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes) — dark/light mode
- [lucide-react](https://lucide.dev/) — icons
