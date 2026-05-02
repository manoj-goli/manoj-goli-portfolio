# TASKS.md ?" Manoj Goli Portfolio

## Milestone M1: Foundation  Layout
**Goal**: Project setup, design tokens, and core layout.
- [x] Initialize Astro 5 project with TypeScript (Strict)
- [x] Install dependencies: `tailwindcss`, `@tailwindcss/vite`, `astro-icon`, `@iconify-json/mdi`, `@astrojs/sitemap`
- [x] Configure Tailwind v4 in `src/styles/global.css`
- [x] Create `src/components/seo/SEO.astro` (Standard meta tags)
- [x] Create `src/layouts/BaseLayout.astro`
- [x] Create `src/components/layout/Header.astro` with mobile menu logic
- [x] Create `src/components/layout/Footer.astro`
- [x] Build Home page (`src/pages/index.astro`) with all sections (Hero, Pitch, Focus, Featured, CTA) using placeholder data

---

## Milestone M2: Core Pages (Static)
**Goal**: Build About, Experience, and Skills pages.
- [x] Create `src/data/experience.ts` (Typed experience data)
- [x] Create `src/data/skills.ts` (Typed skills data)
- [x] Create `src/components/ui/Card.astro` and `Badge.astro`
- [x] Build About page (`/about`)
- [x] Build Experience page (`/experience`) with Timeline component
- [x] Build Skills page (`/skills`) with SkillGrid component

---

## Milestone M3: Projects  Content Collections
**Goal**: Dynamic project engine with MDX.
- [ ] Define Content Collection schema in `src/content/config.ts`
- [ ] Create 3 sample project MDX files in `src/content/projects/`
- [ ] Build `src/components/sections/ProjectCard.astro`
- [ ] Build Projects listing page (`/projects`) with card grid
- [ ] Implement client-side tag filtering on `/projects` (Astro Island)
- [ ] Create dynamic project detail page (`src/pages/projects/[slug].astro`)
- [ ] Style MDX content using Tailwind Typography or custom CSS

---

## Milestone M4: Contact  Resume
**Goal**: Functional forms and resume view.
- [x] Create `src/pages/resume.astro` with PDF embed
- [x] Create `src/pages/contact.astro` with Netlify Form
- [ ] Add resume PDF placeholder to `public/files/resume.pdf`
- [ ] Test local form structure for Netlify compatibility

---

## Milestone M5: SEO, A11y  Final Polish
**Goal**: Audit and enhance for production.
- [ ] Add `src/components/seo/JsonLd.astro` (Structured Data)
- [ ] Implement skip-to-content link in `BaseLayout`
- [ ] Conduct accessibility audit (axe-core) and fix contrast/labels
- [ ] Add scroll-reveal animations using CSS `IntersectionObserver`
- [ ] Implement `prefers-reduced-motion` CSS checks
- [ ] Optimize images using Astro `\u003cImage /\u003e` component

---

## Milestone M6: Deployment
**Goal**: Launch to Netlify.
- [ ] Create `netlify.toml` with build settings and headers
- [ ] Configure `public/_redirects` for 404 handling
- [ ] Create custom `src/pages/404.astro`
- [ ] Connect GitHub repo to Netlify and trigger first build
- [ ] Verify domain SSL and production Lighthouse scores
