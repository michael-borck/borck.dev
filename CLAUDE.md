# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Michael Borck's professional landing page at borck.dev — built with Astro Starlight. Links to all major properties: LocoLabo (research), borck.education (ed tools), RetroVerse Studios (games), resume portal, and research page.

## Architecture

- **Framework**: Astro + Starlight (same stack as borck.education)
- **Pages**: `src/content/docs/index.mdx` (splash landing), `src/content/docs/research.mdx`
- **Styles**: `src/styles/custom.css` — dark theme, amber accent (#f59e0b)
- **Fonts**: DM Sans + JetBrains Mono (shared with borck.education)
- **Logo**: "Bd" monogram (B white, d amber) in `src/assets/logo.svg` and `public/favicon.svg`
- **Deployment**: GitHub Pages via `.github/workflows/deploy-pages.yml`, CNAME: borck.dev

## Development

```bash
npm run dev      # Local dev server
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## Domain

borck.dev (rebranded from michaelborck.dev). Part of the borck.* family:
- borck.dev — this site (professional hub)
- borck.education — educational tools
- resume.borck.dev — resume portal
