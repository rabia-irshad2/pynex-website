# PYNEX Website

Next.js + TypeScript + Tailwind CSS website for PYNEX. Built following the internal
"PYNEX Website Documentation" spec — same page structure, color system, and component
list as that doc, referencing easterntechno.com for layout/UX patterns only.

## 1. Requirements

- Node.js 20 LTS — https://nodejs.org
- A free Resend account (https://resend.com) for the contact form + newsletter emails
- A GitHub account and a Vercel account for deployment

## 2. First-time setup

```bash
npm install
cp .env.local.example .env.local
```

Open `.env.local` and fill in:
- `RESEND_API_KEY` — from your Resend dashboard
- `CONTACT_TO_EMAIL` — where contact form submissions should go
- `NEXT_PUBLIC_GA_ID` — your Google Analytics 4 measurement ID (optional at first)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — PYNEX's WhatsApp number, digits only

## 3. Run it locally

```bash
npm run dev
```

Open http://localhost:3000

## 4. Where things live

- `app/` — every page (Next.js App Router). Each folder = one route.
- `components/` — shared UI: Header, Footer, cards, buttons, carousel, etc.
- `content/` — all editable content. Add a new blog post, project, or service by
  adding a new `.mdx` file in the matching folder — no code changes needed.
- `lib/content.ts` — reads the content files. Don't need to touch this to add content.
- `styles/globals.css` — color variables and shared component styles.
- `public/images/` — put real photos/screenshots here, then reference them in the
  matching `.mdx` file's `image:` field.

## 5. Adding content (no code required)

**New blog post:** add a file to `content/blog/your-slug.mdx` with the same
frontmatter fields as the existing posts.

**New project case study:** add a file to `content/projects/your-slug.mdx`.

**New team member:** add an entry to `content/team.json`.

**New testimonial:** add an entry to `content/testimonials.json` — the testimonials
section on the home page only appears once there are 2 or more entries.

## 6. Before launch — testing checklist

- [ ] Site tested on real phone, tablet, and desktop
- [ ] Every nav link and footer link works
- [ ] Contact form sends an email and shows a confirmation
- [ ] Newsletter form sends a welcome email
- [ ] WhatsApp button opens a chat with the correct number
- [ ] Cookie banner appears once, and Analytics only loads after Accept
- [ ] At least 3 projects, 3 blog posts, and real team members are added
- [ ] All images have alt text
- [ ] Site loads fast (check with Lighthouse in Chrome DevTools)
- [ ] `<title>` and description are correct on every page (browser tab)

## 7. Deploying

1. Push this project to a GitHub repository.
2. Go to vercel.com → New Project → import the repo.
3. Add the same environment variables from `.env.local` in Vercel's project settings.
4. Deploy. Vercel gives you a live URL immediately; connect your real domain after.

## 8. Team split (for this project)

- **Design & content:** pages, copywriting, images, matching the reference site's layout
- **Technical build:** setup, forms, deployment, SEO, analytics, testing

See the original PYNEX Website Documentation for full section-by-section detail.
