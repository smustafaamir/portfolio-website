# Mustafa Amir — Personal Portfolio

## Project structure

```
app/
├── layout.tsx              # Root layout, fonts, metadata, theme provider
├── page.tsx                # Homepage composition
├── globals.css             # Design tokens, section spacing, utilities
└── components/
    ├── header/             # Sticky nav, theme toggle
    ├── hero/               # Viewport hero + visual artifact
    ├── education/
    ├── experience/
    ├── projects/
    └── publications/

components/
├── theme-provider.tsx
└── ui/                     # shadcn/ui (Button, Typography, Avatar, …)

lib/
├── section-spacing.ts      # Shared section padding/block classes
└── utils.ts                # cn() helper

design-docs/                # Per-component implementation specs
public/                     # Static assets (headshot, project images, …)
```

## Getting started

**Prerequisites:** Node.js 20+ and npm.

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Run production server locally
npm start

# Lint
npm run lint
```

## License

Private repository — all rights reserved unless otherwise noted.
