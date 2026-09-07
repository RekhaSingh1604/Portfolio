# Rekha Singh — Portfolio

A premium, dark-themed developer portfolio built with **React + Vite** (plain CSS, no
Tailwind/UI framework — matches what you asked for). One page, ten sections, all content
centralized in a single data file for fast editing.

## Stack & why

- **Vite + React (JS, not TS)** — fastest dev loop, zero-config, tiny output. No Next.js since
  you don't need SSR/routing for a single-page portfolio; Vite avoids that overhead entirely.
- **Plain CSS** (`src/index.css`) with CSS custom properties as a design-token system — no
  Tailwind/Bootstrap, as requested.
- **lucide-react** — the only real dependency beyond React itself, for icons.
- No backend. The contact form opens the visitor's email client pre-filled (see the note in
  "What to extend first" for wiring up a real one).

## Project structure

```
rekha-portfolio/
├── index.html              # SEO meta tags, font loading
├── public/
│   └── PUT-YOUR-FILES-HERE.txt   # instructions for photo + resume
├── src/
│   ├── main.jsx             # React entry point
│   ├── App.jsx               # assembles all sections
│   ├── index.css             # design tokens + all styles
│   ├── data/content.js       # ← ALL editable content lives here
│   ├── hooks/useReveal.js    # scroll-reveal animation hook
│   └── components/           # one component per section
```

## How to run it

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd rekha-portfolio
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Vite hot-reloads on save.

To build for production and deploy (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build      # outputs to dist/
npm run preview    # sanity-check the production build locally
```

## Before you ship it

1. **Add your photo**: drop `profile-photo.jpg` into `public/`. The hero component already
   points at it and falls back to a clean placeholder if it's missing, so nothing breaks either
   way — see `src/components/Hero.jsx`.
2. **Add your resume**: drop `resume.pdf` into `public/`. Both "Download Resume" buttons already
   link to it.
3. **Skim `src/data/content.js`**: I pulled every section's copy directly from what you gave me,
   but double-check links (GitHub repo URLs currently all point to your profile, not per-project
   repos — update `github:` per project once you have those) and the RoomIt live URL, which
   wasn't provided.
4. **Favicon**: `public/favicon.svg` is a simple "RS" mark — swap it if you want something else.

## What I'd extend first

1. **Real contact form backend.** Right now "Send Message" opens a `mailto:` link — reliable
   with zero setup, but not something you can track. Fastest real upgrade: a serverless
   function (Vercel/Netlify function, or a tiny Express endpoint) that emails you via
   [Resend](https://resend.com) or similar, called from `handleSubmit` in `Contact.jsx`.
2. **Per-project repo links + real screenshots.** The project cards currently show styled
   gradient mockups with the project name (since I don't have real screenshots or per-project
   repo URLs). Swapping in actual screenshots (drop images in `public/projects/` and reference
   them in `content.js`) and per-project GitHub URLs will make this section noticeably stronger
   for recruiters.
3. **Analytics.** Add Plausible or a similar privacy-friendly analytics snippet in `index.html`
   so you know if recruiters are actually visiting.
4. **A blog or case-study page** for RoomIt or the petrol pump system — a short "problem →
   approach → outcome" writeup per project is one of the highest-leverage additions for
   interviews, and would justify adding React Router if you want it as a separate route.
5. **Testing the reduced-motion path and keyboard nav** end to end — I built with
   `prefers-reduced-motion` and focus-visible states in from the start, but it's worth a manual
   pass with a keyboard and VoiceOver/NVDA before this goes in front of recruiters.
