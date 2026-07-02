---
name: Mustafa Amir Portfolio
description: Editorial minimalist portfolio — typographic precision, generous whitespace, structured credibility.
colors:
  paper: "#FAFAFA"
  surface: "#FFFFFF"
  ink: "#111111"
  ink-navy: "#0A2540"
  muted: "#666666"
  hairline: "#EAEAEA"
  accent-indigo: "#4F46E5"
typography:
  display:
    fontFamily: "Crimson Pro, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Crimson Pro, Georgia, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.1em"
  mono:
    fontFamily: "Geist Mono, JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "8px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "64px"
  section: "120px"
components:
  link-text:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "0"
  link-text-hover:
    textColor: "{colors.ink-navy}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "8px 0"
  metadata-label:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0"
---

# Design System: Mustafa Amir Portfolio

## 1. Overview

**Creative North Star: "The Editorial Desk"**

This system treats the portfolio like a well-edited engineering publication: serif display type sets the tone, sans-serif body carries the argument, and whitespace does the pacing. Surfaces stay flat and quiet; hierarchy comes from type scale, column structure, and hairline dividers — never from decoration, gradients, or shadow stacks. The page should feel authoritative without shouting: confident for recruiters, legible for engineers, approachable for collaborators.

The system explicitly rejects flashy developer portfolios (3D, parallax, neon dark mode), generic SaaS landing clichés, and template-y dev tropes. Motion is restrained; content is always visible by default.

**Key Characteristics:**
- Serif + sans typographic pairing with monospace for technical metadata
- Monochromatic foundation with a single optional accent used sparingly
- Flat elevation — depth via contrast and dividers, not shadows
- Two-column editorial grids for experience and projects
- 8px base grid with generous section rhythm (120–160px between major sections)
- Max content width 1024–1100px; body copy capped at 65–75ch

## 2. Colors

A restrained monochromatic palette optimized for high legibility on near-white surfaces. Color carries hierarchy through contrast, not saturation.

### Primary
- **Ink Black** (`#111111`): Primary headings, hero display text, navigation name. The default voice of the page.
- **Deep Navy** (`#0A2540`): Alternate primary for headings and hover states when a cooler editorial tone is needed.

### Neutral
- **Editorial Paper** (`#FAFAFA`): Default page background — subtle off-white, not warm cream.
- **Surface White** (`#FFFFFF`): Content panels or hero contrast blocks when a pure white lift is needed.
- **Slate Muted** (`#666666`): Dates, company names, secondary descriptions, metadata labels. Must still meet AAA contrast on paper/white backgrounds — bump toward ink if borderline.
- **Hairline Gray** (`#EAEAEA`): 1px horizontal dividers between experience rows and structural separators.

### Tertiary
- **Muted Indigo** (`#4F46E5`): Optional accent for active link states or subtle highlights only. Rare by design.

### Named Rules
**The One Accent Rule.** The indigo accent appears on ≤10% of any screen. Its rarity signals interactivity, not brand saturation.

**The No Cream Rule.** Backgrounds stay neutral paper or pure white — never warm sand, parchment, or beige tints that read as generic AI portfolio defaults.

## 3. Typography

**Display Font:** [Crimson Pro](https://fonts.google.com/specimen/Crimson+Pro) (with Georgia, serif fallback)
**Body Font:** Geist (with Inter, system-ui, sans-serif fallback)
**Label/Mono Font:** Geist Mono (with JetBrains Mono, monospace fallback)

**Character:** High-contrast serif display paired with a clean neo-grotesque body — editorial authority meets engineering clarity. Italic emphasis in display lines is permitted for key phrases; body stays upright and readable.

### Hierarchy
- **Display** (500, clamp 40–72px, 1.1): Hero name and primary headline. `text-wrap: balance` on h1. Letter-spacing floor −0.04em; prefer −0.02em to −0.03em.
- **Headline** (500, clamp 28–40px, 1.2): Section titles (About, Experience, Projects).
- **Title** (600, 20–24px, 1.4): Job titles, project names, item headings.
- **Body** (400, 16–18px, 1.65–1.75): Paragraphs and descriptions. Max line length 65–75ch. `text-wrap: pretty` on long prose.
- **Label** (500, 11–12px, 0.08–0.12em tracking, uppercase): Years, company names, footer links, section metadata.

### Named Rules
**The Pairing Rule.** One serif family for display, one sans for body — never two similar sans-serifs competing. Monospace is reserved for tech stack tags and dates, not body copy.

## 4. Elevation

This system is flat by default. Depth is conveyed through tonal contrast (paper vs. white), hairline dividers, and typographic weight — not box shadows. Project cards may use a subtle background tint block (per Rachel Chen reference) but never paired 1px borders with wide soft shadows.

### Named Rules
**The Flat Surface Rule.** No drop shadows on cards, buttons, or sections at rest. If hover feedback is needed, use opacity shift, underline animation, or a 2px translateY lift — never a ghost-card shadow stack.

## 5. Components

Implementation uses [shadcn/ui](https://ui.shadcn.com) (`radix-nova` style). Typography primitives live in `components/ui/typography.tsx` and follow the [shadcn Typography](https://ui.shadcn.com/docs/components/radix/typography) patterns.

### Buttons
- **Component:** `@/components/ui/button`
- **Hero primary:** `default` variant — Contact me (`mailto:`)
- **Hero secondary:** `outline` variant — external links (e.g. GitHub ↗)
- **Size:** `lg` with `h-11 px-6` for adequate touch targets
- Use `asChild` with `<a>` for link-styled buttons

### Typography
- **Display (H1):** `TypographyH1` — Crimson Pro via `font-serif`, portfolio clamp scale
- **Lead / hero subhead:** `TypographyLead` — Geist sans; override size for hero (`clamp(1.75rem,3vw,2.5rem)`)
- **Body / sections:** `TypographyP`, `TypographyH2`, `TypographyH3`, `TypographyMuted`, `TypographySmall` per shadcn defaults unless SPEC overrides

### Navigation
- **Style:** Sticky top bar, minimal height. Left: site name (small tracked uppercase sans or bold lowercase). Right: anchor links (About, Experience, Projects) + Resume PDF.
- **Typography:** Name uses label or title scale; links use label uppercase with generous letter-spacing.
- **States:** Hover shifts link color to Deep Navy or reveals underline. Active section may use ink-navy without accent fill.

### Links (Editorial)
- **In prose:** Text links with animated underline on hover (not used for hero CTAs).
- **Hero CTAs:** shadcn `Button` components (see Buttons above).

### Education Row
- **Layout:** Two-column grid — 25% metadata (study period, location), 75% degree + achievements + coursework. Mirrors Experience Row.
- **Mobile:** Metadata stacks above content.

### Experience Row
- **Layout:** Two-column grid — 25% metadata (year, company), 75% role + description.
- **Divider:** 1px solid hairline gray between rows.
- **Padding:** 32px vertical per row; stacks to single column on mobile with metadata above content.

### Project Card
- **Corner Style:** 0–8px radius maximum; prefer square or subtle 4px.
- **Background:** Optional subtle tint block — no border + shadow pairing.
- **Content:** Title (sans semibold), one-line description, monospace tech tags, text-only "View Source" / "Live Demo" links.
- **Hover:** Subtle translateY(−2px) and opacity shift only.

### Metadata Labels
- **Style:** Uppercase, 11–12px, medium weight, 0.1em tracking, muted color.
- **Use:** Years, companies, footer social links, section identifiers when needed (sparingly — not on every section).

### Footer
- **Layout:** Centered or split. Copyright, attribution line, GitHub / LinkedIn / Email as uppercase metadata links.
- **Spacing:** 120px top margin from last section; 64px bottom padding.

## 6. Do's and Don'ts

### Do:
- **Do** establish hierarchy through type scale and whitespace before reaching for color or decoration.
- **Do** keep body text at ≥4.5:1 contrast on paper/white; aim for AAA (7:1) on primary body copy where practical.
- **Do** use hairline dividers (`#EAEAEA`, 1px) to separate experience rows and structural blocks.
- **Do** respect `prefers-reduced-motion`: crossfade or instant state changes, no entrance choreography gating content visibility.
- **Do** cap hero display at clamp max ~4.5rem (72px) with letter-spacing ≥ −0.04em.

### Don't:
- **Don't** use flashy portfolio patterns: heavy animation, 3D scenes, parallax scroll, dark-mode neon, or particle effects.
- **Don't** ship generic SaaS landing scaffolding: hero metrics, identical icon+heading card grids, gradient text, or eyebrow kickers on every section.
- **Don't** use template-y dev portfolio tropes: emoji headers, skill percentage bars, or decorative timeline clichés.
- **Don't** pair `border: 1px solid` with wide soft box-shadows on the same element.
- **Don't** use border-radius above 16px on cards or sections; pills are for tags only.
- **Don't** animate layout properties or gate content visibility on scroll-triggered reveals.
