# DEPLOYMENT_PLAN.md ?" Manoj Goli Portfolio

## 1. Hosting Provider
- **Platform**: Netlify
- **Reason**: Excellent Astro support, built-in forms, automated CI/CD from GitHub, and free tier for personal sites.

---

## 2. CI/CD Workflow

### 2.1 Repository Setup
- **Source Control**: GitHub
- **Branch Strategy**:
  - `main`: Production-ready code.
  - `develop`: Ongoing feature integration.
  - `feature/*`: Short-lived branches for specific tasks (mapped to AI Agents).

### 2.2 Build Configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`
- **Node Version**: 20.x or higher

### 2.3 Deployment Triggers
- Automatic deploy on every push to `main`.
- Deploy Previews on every Pull Request.

---

## 3. Environment Variables
- `PUBLIC_URL`: `https://manojgoli.dev`
- `NODE_VERSION`: `20`

---

## 4. Domain \u0026 SSL
- **Primary Domain**: `manojgoli.dev`
- **SSL**: Automatic Let\u0027s Encrypt SSL provided by Netlify.
- **Redirects**: `www.manojgoli.dev` \u003e `manojgoli.dev`

---

## 5. Netlify Features Integration

### 5.1 Netlify Forms
- Used on `/contact` page.
- Configuration:
  - Add `data-netlify="true"` to the `\u003cform\u003e` tag.
  - Add `name="contact"` to identify the form.
  - Add a hidden `bot-field` for spam protection.

### 5.2 Netlify Redirects (`public/_redirects`)
```
# Standard Astro 404 handling
/*  /404.html  404
```

### 5.3 Headers Configuration (`netlify.toml`)
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src \u0027self\u0027; img-src \u0027self\u0027 data: https:; script-src \u0027self\u0027 \u0027unsafe-inline\u0027; style-src \u0027self\u0027 \u0027unsafe-inline\u0027;"
```

---

## 6. Pre-Launch Checklist
1. [ ] Run `npm run build` locally to verify production bundle.
2. [ ] Check Lighthouse scores (target % 95 across all categories).
3. [ ] Verify favicon renders correctly.
4. [ ] Test mobile menu and form submission on staging/deploy preview.
5. [ ] Ensure sitemap.xml and robots.txt are generated.
6. [ ] Final content proofread.
