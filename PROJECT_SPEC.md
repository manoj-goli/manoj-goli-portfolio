# PROJECT_SPEC.md ?" Manoj Goli Portfolio

## 1. Project Overview
A professional personal portfolio for Manoj Goli, a Platform  Observability Engineer. The site serves as a technical showcase, resume, and contact hub.

---

## 2. Technology Stack
- **Framework**: Astro 5.x (Static Site Generation)
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite`)
- **Language**: TypeScript (Strict mode)
- **Icons**: `astro-icon` with `@iconify-json/mdi`
- **Content**: MDX (via Astro Content Collections) for projects
- **SEO**: `@astrojs/sitemap`, custom SEO component
- **Deployment**: Netlify

---

## 3. Directory Structure
```
/
├── public/              # Static assets (images, PDFs)
├── src/
│   ├── assets/          # Processed assets (images, global CSS)
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Header, Footer, BaseLayout
│   │   ├── sections/    # Hero, Highlights, Projects
│   │   ├── ui/          # Button, Card, Badge
│   │   └── seo/         # SEO, JsonLd
│   ├── content/         # MDX project files
│   │   ├── config.ts    # Content Collection schema
│   │   └── projects/    # .mdx files
│   ├── data/            # Static TS data (experience, skills)
│   ├── layouts/         # Page templates
│   ├── pages/           # Route components (index, about, etc.)
│   └── styles/          # Global styles and tailwind config
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── tailwind.config.js (or integrated in global.css)
```

---

## 4. Key Features
- **Responsive Navigation**: Sticky header with mobile menu.
- **Dynamic Projects**: Filterable project gallery powered by Content Collections.
- **Interactive Timeline**: Visual resume showing professional growth.
- **Skills Matrix**: Categorized technical skills grid.
- **SEO Optimized**: Semantic HTML, meta tags, sitemap, and JSON-LD structured data.
- **Performance**: Near-zero client-side JS (islands only where needed for filters).
- **Contact Integration**: Functional form via Netlify Forms.

---

## 5. Performance Goals (Lighthouse)
- **Performance**: %% 95
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

---

## 6. Development Workflow
- Follow the **AGENTS.md** delegation plan.
- Commit milestones sequentially.
- Verify every build with `npm run build`.
