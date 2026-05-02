# DESIGN_BRIEF.md ?" Manoj Goli Portfolio

## 1. Visual Identity
The design should reflect **precision, reliability, and modern engineering**. It should feel "Platform-y"?clean, structured, but with subtle high-tech flourishes.

### 1.1 Color Palette
- **Primary (Deep Navy)**: `#0F172A` (Backgrounds, Headers)
- **Secondary (Obsidian Blue)**: `#1E293B` (Cards, Sections)
- **Accent (Teal/Cyan)**: `#22D3EE` (Links, Buttons, Highlights)
- **Success (Emerald)**: `#10B981` (Status indicators, "Up" states)
- **Text (High Contrast)**: `#F8FAFC` (Headings)
- **Text (Muted)**: `#94A3B8` (Body, labels)

### 1.2 Typography
- **Headings**: `Inter` (Variable) ?" Semi-bold to Bold.
- **Body**: `Inter` ?" Regular.
- **Monospace**: `JetBrains Mono` or `Roboto Mono` (For code snippets, small technical labels).

---

## 2. Design System Tokens (Tailwind CSS v4)
```css
:root {
  --color-bg: #0F172A;
  --color-surface: #1E293B;
  --color-accent: #22D3EE;
  --color-text: #F8FAFC;
  --color-muted: #94A3B8;
  
  --spacing-unit: 4px;
  --radius-card: 12px;
  --radius-button: 8px;
}
```

---

## 3. Key Components

### 3.1 Header (Navigation)
- Sticky with glassmorphism backdrop (`backdrop-blur-md`).
- Logo: "Manoj Goli" (Bold).
- Links: Home, About, Experience, Projects, Skills, Contact.
- CTA: "Resume" (Outlined button).
- Mobile: Hamburger menu that slides in from the right.

### 3.2 Hero Section
- Left: Headline and punchy subtext.
- Right: Abstract visual representing observability (e.g., stylized nodes/metrics) or a professional portrait in a geometric frame.
- Entry animation: Fade-up.

### 3.3 Cards (Projects/Skills)
- Slight hover lift (`hover:-translate-y-1`).
- Subtle border glow on hover (`hover:border-accent/50`).
- Tags for technologies.

### 3.4 Timeline (Experience)
- Vertical line with dots.
- Cards on the right (mobile) or alternating (desktop).
- "Current" role highlighted with a pulse effect.

---

## 4. UI Patterns
- **Glassmorphism**: Use for overlays and headers.
- **Micro-interactions**: Subtle scale-up on buttons; underline reveal on links.
- **Dark Mode**: Native and default. No light mode needed unless requested.
- **Spacing**: Generous whitespace to ensure clarity.

---

## 5. Mobile Considerations
- Bottom-safe areas for buttons.
- Touch targets %% 44px.
- Stacked layouts for cards and timelines.

---

## 6. Icons
- Source: `astro-icon` using `@iconify-json/mdi`.
- Style: Consistent stroke weight, minimalist.

---

## 7. Animations (Framer Motion / CSS)
- **Page Transitions**: Simple fade in/out.
- **Scroll Reveal**: Elements should fade up as they enter the viewport.
- **Hover States**: Color transitions should be smooth (300ms duration).
