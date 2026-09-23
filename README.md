# PYNEX Website

PYNEX is a Next.js 14 website for AI solutions, business automation, custom software, and intelligent digital products. It uses TypeScript, Tailwind CSS, MDX content, Framer Motion, Embla Carousel, and Resend.

The design follows the requested PYNEX documentation and uses easterntechno.com only as a reference for layout patterns and interaction ideas. PYNEX uses its own brand, content, logo, and project information.

## Requirements

- Node.js 20 LTS or newer: https://nodejs.org
- npm
- Git
- A Resend account for live contact and newsletter email delivery
- A GitHub repository for version control
- Vercel or another Next.js-compatible host for deployment

Check your installed versions:

```powershell
node --version
npm --version
git --version
```

## First-Time Setup

From the project directory:

```powershell
npm install
Copy-Item .env.local.example .env.local
```

Open `.env.local` and replace the placeholder values. Never commit this file.

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=pynexcompany@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=923141754779
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`NEXT_PUBLIC_GA_ID` is optional during development. Use your real production URL for `NEXT_PUBLIC_SITE_URL` after deployment.

## Run Locally

Development mode:

```powershell
npm run dev
```

Open http://localhost:3000.

Stop the server with `Ctrl+C`. Do not run `npm run build` at the same time as `npm run dev` because both commands use the `.next` directory.

If a stale Next.js error appears, reset generated files and restart:

```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Remove-Item .next -Recurse -Force -ErrorAction SilentlyContinue
npm run dev
```

## Production Check

Stop development mode first, then run:

```powershell
npm run build
npm start
```

Open http://localhost:3000 to test the production server.

Available npm scripts:

```text
npm run dev    Start the development server
npm run build  Create a production build
npm start      Start the production server
npm run lint   Run Next.js lint checks
```

## Project Structure

```text
app/                    Pages, layouts, API routes, and sitemap
app/api/contact/        Contact form server route
app/api/subscribe/      Newsletter server route
components/             Header, menu, cards, carousel, forms, and shared UI
content/blog/           Blog articles in MDX
content/projects/       Project case studies in MDX
content/services/       Service pages in MDX
content/team.json       Team member data
content/testimonials.json Approved testimonials
lib/content.ts          Content file loader
public/images/          Logo, project, blog, and team images
styles/globals.css      Global styles, colors, animations, and responsive rules
```

## Routes

```text
/                         Home
/about                    About PYNEX
/services                 Services overview
/services/[slug]          Service detail pages
/projects                 Projects overview
/projects/[slug]          Project case studies
/blog                     Blog overview
/blog/[slug]              Blog articles
/contact                  Contact form
/privacy-policy           Privacy policy
/terms                    Terms
/cookies                  Cookie policy
/sitemap.xml              Generated XML sitemap
```

## Adding Content

### Blog article

Create a new file in `content/blog/`, for example `content/blog/new-article.mdx`:

```mdx
---
title: "Article title"
date: "2026-10-01"
author: "Author name"
category: "Automation"
summary: "A short article summary."
image: "/images/blog/new-article.jpg"
readingTime: "5 min read"
---

## Article heading

Article content goes here.
```

### Project case study

Create a new file in `content/projects/` with `title`, `location`, `category`, `summary`, `scope`, and `image` frontmatter. Set `featured: true` for the project shown in the homepage spotlight. Only one project should normally be featured.

### Service

Create a new file in `content/services/` with `title`, `icon`, and `shortDescription` frontmatter.

### Images

Place files in these folders:

```text
public/images/logo.png
public/images/blog/
public/images/projects/
public/images/team/
```

Use real approved assets, descriptive filenames, and alt text. Recommended sizes are 1600x900 for blog images, 1600x1000 for project screenshots, and 800x800 for team photos.

### Team and testimonials

Replace the placeholder entries in `content/team.json` with approved team information. Add testimonials to `content/testimonials.json` only after the client approves the exact wording. The homepage displays testimonials only when at least two entries exist.

## GitHub Workflow

Check the current status:

```powershell
git status
```

After making changes:

```powershell
git add .
git commit -m "Describe the change"
git push origin main
```

Never commit `.env.local`, API keys, passwords, or private client data. The repository already ignores `.env.local` and `.next`.

## Deployment

### Vercel

1. Push the project to GitHub.
2. Open https://vercel.com and create a new project.
3. Import `rabia-irshad2/pynex-website`.
4. Add the environment variables from `.env.local` in Vercel Project Settings.
5. Set `NEXT_PUBLIC_SITE_URL` to the final public URL.
6. Deploy and test the generated URL.

The contact and newsletter routes require `RESEND_API_KEY`. Use a verified Resend sender domain for `CONTACT_FROM_EMAIL` in production.

## Pre-Launch Checklist

- [ ] Add real approved team names, roles, bios, and photos
- [ ] Add real approved project screenshots
- [ ] Add at least three verified projects
- [ ] Add approved testimonials if available
- [ ] Add real LinkedIn, Facebook, and Instagram URLs
- [ ] Configure Resend and test the contact form
- [ ] Test newsletter delivery and unsubscribe handling
- [ ] Set the final production URL in `NEXT_PUBLIC_SITE_URL`
- [ ] Test the site on phone, tablet, and desktop
- [ ] Test every menu, footer, WhatsApp, and legal link
- [ ] Test cookie consent and analytics behavior
- [ ] Test `/sitemap.xml` and `/robots.txt`
- [ ] Run `npm run build`
- [ ] Confirm no secrets are committed
- [ ] Review Lighthouse performance and accessibility

## Current Limitations

The codebase and routes build successfully, but some documentation items depend on real PYNEX inputs and are not invented in code:

- Project and team imagery must be supplied by PYNEX.
- Testimonials remain hidden until approved entries are added.
- Contact and newsletter delivery require Resend credentials.
- Social profile URLs must be supplied before replacing the temporary links.
- Search, advanced scroll reveals, and some reference-site interactions are future enhancements.

## Security Notes

- Keep `.env.local` private.
- Store production secrets in Vercel environment variables.
- Use verified sender domains with Resend.
- Do not publish client names, logos, screenshots, or results without written permission.
- Update dependencies and review security alerts regularly.
