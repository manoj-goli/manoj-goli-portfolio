# TESTING_PLAN.md ?" Manoj Goli Portfolio

## 1. Quality Standards
The portfolio must meet high technical and visual standards:
- **Build Quality**: Zero TypeScript errors, zero Astro build errors.
- **Performance**: Lighthouse Performance score %% 95.
- **Accessibility**: WCAG 2.1 AA compliant (Lighthouse A11y = 100).
- **Responsiveness**: Perfect rendering from 320px to 3840px width.

---

## 2. Test Environments
- **Local**: `npm run dev` (Node 20.x, Windows)
- **Staging**: Netlify Deploy Previews (every PR)
- **Production**: `manojgoli.dev`

---

## 3. Testing Matrix

### 3.1 Browser Support
- **Chrome/Edge (Blink)**: Latest (Primary)
- **Firefox (Gecko)**: Latest
- **Safari (WebKit)**: Latest (Desktop + iOS)

### 3.2 Verification Checklist

| ID  | Category    | Test Case                                     | Expected Result                     |
| --- | ----------- | --------------------------------------------- | ----------------------------------- |
| B1  | Build       | `npm run build`                               | Succeeds without errors             |
| B2  | Build       | `npx astro check`                             | Zero diagnostics/TS errors          |
| B3  | Nav         | Internal link consistency                     | No broken links (404s)              |
| B4  | Nav         | External links (GitHub/LinkedIn)              | Open in new tab (`target="_blank"`) |
| V1  | Visual      | Layout shift (CLS)                            | CLS \u003c 0.1 on all pages         |
| V2  | Visual      | Image rendering                               | Images load, proper aspect ratios   |
| V3  | Visual      | Icon rendering                                | All icons display correctly         |
| V4  | Visual      | Typography                                    | Fonts load, weights are correct     |
| V5  | Visual      | Hover states                                  | Buttons/cards show clear feedback   |
| V6  | Visual      | Glassmorphism header                          | Blur effect visible on scroll       |
| V7  | Visual      | Mobile Menu                                   | Slides in cleanly, hides correctly  |
| V8  | Visual      | Timeline alignment                            | Vertical line aligns with dots      |
| V9  | Visual      | Skill grid                                    | Responsive columns (1/2/3/4)        |
| V10 | Visual      | Dark mode consistency                         | No unstyled light flashes           |
| V11 | Visual      | MDX styling                                   | Headings/lists styled in prose      |
| V12 | Visual      | PDF Embed                                     | Visible on desktop, link on mobile  |
| V13 | Visual      | Contact Form                                  | Inputs aligned, buttons accessible  |
| V14 | Layout      | Horizontal overflow                           | Zero horizontal scroll on mobile    |
| V15 | Layout      | Footer alignment                              | Centered/sticky to bottom of short pages |

### 3.3 Functional Testing

| ID  | Test                                  | Action                                      | Expected Result                    |
| --- | ------------------------------------- | ------------------------------------------- | ---------------------------------- |
| F1  | Main Navigation                       | Click every header link                     | Correct page loads immediately     |
| F2  | Mobile Menu Toggle                    | Tap hamburger button                        | Menu opens/closes                  |
| F3  | Skip Link                             | Press Tab after page load                   | Skip link appears and works        |
| F4  | Home Hero CTAs                        | Click "View My Work" / "Resume"             | Navigate to correct pages          |
| F5  | Project cards                         | Click a project card                        | Navigate to project detail         |
| F6  | Project detail ?" back link            | Click "Back to Projects" on detail page     | Returns to /projects               |
| F7  | Project filters ?" tag filtering       | Click tag filter buttons on /projects       | Only matching projects shown       |
| F8  | Contact form ?" valid submission       | Fill all fields, submit                     | Redirects to success page          |
| F9  | Contact form ?" missing required field | Leave name empty, submit                    | Browser validation prevents submit |
| F10 | Contact form ?" invalid email          | Enter "notanemail", submit                  | Browser validation prevents submit |
| F11 | Resume download ?" PDF link            | Click "Download PDF" on resume page         | PDF file downloads                 |
| F12 | 404 page ?" invalid URL                | Navigate to /nonexistent                    | Custom 404 page renders            |
| F13 | Page transitions ?" smooth navigation  | Click between pages                         | Fade transition, no flash           |
| F14 | Mobile menu ?" open/close              | Tap hamburger, then close button            | Menu opens and closes cleanly      |
| F15 | Mobile menu ?" focus trap              | Open menu, Tab through items                | Focus stays within menu            |

### 3.4 Performance Testing

| #   | Test                                  | Tool                          | Target                         |
| --- | ------------------------------------- | ----------------------------- | ------------------------------ |
| P1  | Lighthouse ?" Performance              | Chrome Lighthouse             | % 95                           |
| P2  | Lighthouse ?" Accessibility            | Chrome Lighthouse             | % 95                           |
| P3  | Lighthouse ?" Best Practices           | Chrome Lighthouse             | % 95                           |
| P4  | Lighthouse ?" SEO                      | Chrome Lighthouse             | 100                            |
| P5  | First Contentful Paint                | Lighthouse / WebPageTest      | \u003c 1.2s                         |
| P6  | Largest Contentful Paint              | Lighthouse / WebPageTest      | \u003c 2.0s                         |
| P7  | Cumulative Layout Shift               | Lighthouse                    | \u003c 0.1                          |
| P8  | Total page weight                     | DevTools Network tab          | \u003c 500 KB per page              |
| P9  | JavaScript bundle size                | DevTools Network tab          | \u003c 20 KB total                  |
| P10 | Image optimization                    | Check for WebP/AVIF in output | All images optimized            |
| P11 | Font loading                          | DevTools Performance          | No layout shift from font swap |

### 3.5 Accessibility Testing

| #   | Test                                  | Tool / Method                 | Target                         |
| --- | ------------------------------------- | ----------------------------- | ------------------------------ |
| A1  | Automated audit ?" all pages           | axe DevTools extension        | Zero critical/serious issues   |
| A2  | Keyboard navigation ?" full site       | Tab through every page        | All elements reachable         |
| A3  | Focus indicators visible              | Tab through (visual check)    | Clear focus ring on all items  |
| A4  | Skip-to-content link                  | Tab on page load              | First Tab reveals skip link    |
| A5  | Screen reader ?" home page             | NVDA or VoiceOver             | Content reads logically        |
| A6  | Screen reader ?" navigation            | NVDA or VoiceOver             | Nav announces correctly        |
| A7  | Color contrast ?" body text            | WebAIM Contrast Checker       | Ratio % 4.5:1                  |
| A8  | Color contrast ?" headings             | WebAIM Contrast Checker       | Ratio % 3:1 (large text)      |
| A9  | Image alt text                        | Inspect all `\u003cimg\u003e` tags      | All have descriptive alt       |
| A10 | Reduced motion ?" animations disabled  | Enable reduced-motion pref    | No animations play             |
| A11 | Form labels                           | axe / manual inspection       | All inputs have labels         |
| A12 | ARIA landmarks                        | Inspect DOM                   | header, main, footer present   |
| A13 | Heading hierarchy                     | HeadingsMap extension         | Single H1 per page, sequential|

### 3.6 SEO Testing

| #   | Test                                  | Tool / Method                 | Target                         |
| --- | ------------------------------------- | ----------------------------- | ------------------------------ |
| S1  | Unique titles per page                | View source on each page      | Each page has unique `\u003ctitle\u003e` |
| S2  | Meta descriptions                     | View source on each page      | Each has `\u003cmeta description\u003e`  |
| S3  | Open Graph tags                       | Facebook Sharing Debugger     | Preview shows correctly        |
| S4  | Twitter Card tags                     | Twitter Card Validator        | Card preview renders           |
| S5  | Structured data (JSON-LD)             | Google Rich Results Test      | No errors                      |
| S6  | Sitemap.xml exists and valid          | Visit /sitemap.xml            | All pages listed               |
| S7  | Robots.txt exists                     | Visit /robots.txt             | Allows crawling, refs sitemap  |
| S8  | Canonical URLs                        | View source                   | Each page has `\u003clink rel=canonical\u003e` |
| S9  | H1 per page                          | View source on each page      | Exactly one H1 per page        |
| S10 | Semantic HTML                         | Manual inspection             | Proper use of header/main/nav  |

---

## 4. Testing Schedule

| Phase        | When                    | Tests to Run              |
| ------------ | ----------------------- | ------------------------- |
| After M1     | Agent 1 complete        | B1?"B4, V1?"V8, V14?"V15, F1?"F4, F13?"F15 |
| After M2     | Agent 2 complete        | B1?"B4, V8?"V10, F1         |
| After M3     | Agent 3 complete        | B1?"B4, V11, F1, F5?"F7     |
| After M4     | Agent 4 complete        | B1?"B4, V12?"V13, F8?"F12    |
| After M5     | Pre-deploy              | Full P1?"P11, A1?"A13, S1?"S10 |
| After M6     | Post-deploy (production)| All tests on live URL      |

---

## 5. Testing Commands Reference

```bash
# Build verification
npx astro check          # TypeScript + Astro linting
npm run build            # Full production build

# Dev server
npm run dev              # Start local dev server (http://localhost:4321)

# Preview production build locally
npm run preview          # Serve dist/ locally

# Lighthouse CLI (optional)
npx lighthouse http://localhost:4321 --output=json --output-path=./lighthouse.json

# Check for accessibility issues
# (Use axe DevTools browser extension ?" no CLI needed)
```

---

## 6. Known Limitations

| Limitation                                     | Impact                          | Workaround                        |
| ---------------------------------------------- | ------------------------------- | --------------------------------- |
| No automated E2E tests (Playwright/Cypress)    | Manual regression on each build | Structured manual checklist above |
| No visual regression tests                     | Layout drift could go unnoticed | Screenshot comparison at each milestone |
| Netlify Forms testing requires deploy preview   | Can\u0027t test locally              | Use Netlify deploy preview for form QA |
| Safari testing requires macOS                  | May miss Safari-specific bugs   | Use BrowserStack or ask for review |
| Screen reader testing requires NVDA/VoiceOver  | Manual process                  | Test at least on home + nav       |
