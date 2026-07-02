<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

Always refer to @SPEC.md and @design-docs for documentation on specific components. These two sources are your North Star. 

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Design Context

Strategic and visual north stars for UI work:

- **@PRODUCT.md** — register (`brand`), users, purpose, personality, anti-references, accessibility (WCAG 2.1 AAA)
- **@DESIGN.md** — tokens, typography, components, elevation; Creative North Star: *The Editorial Desk*
- **@SPEC.md** / **@design-docs/** — component-level implementation specs (hero, sections, layout)

Default posture: editorial minimalist portfolio for Mustafa Amir — typographic hierarchy (Crimson Pro display + Geist sans), flat surfaces, no flashy animation. Reject SaaS landing clichés and template-y dev portfolio patterns.

**UI components:** use shadcn/ui (`@/components/ui`). Buttons via `Button`; typography via `components/ui/typography.tsx` following [shadcn Typography](https://ui.shadcn.com/docs/components/radix/typography).
