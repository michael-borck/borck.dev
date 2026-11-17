# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Michael Borck's hub at borck.dev — an artifact tile wall (books, tools, research, teaching, resume, play) linking out to the spokes. Redesigned per docs/hub-mosaic-plan.md; cross-brand decisions live in docs/brand-strategy.md.

## Architecture

- **Framework**: Astro 5, plain pages (no Starlight) + `js-yaml`
- **Pages**: `src/pages/index.astro` (the wall), `src/pages/random.astro`
- **Wall data**: `src/data/tiles.yaml` — single source of truth. `books_wall` picks what shows on the wall (flagships + collage); the full 27-book catalogue stays in the file. Edit tiles.yaml to change the wall — never touch images.
- **Loader**: `src/data/wall.ts` (types + js-yaml parse)
- **Components**: `BookTile` (standard square card, cover contained over its own bg color), `BookCollageTile` (2×2 covers in one card), `ArtTile` (tool/research/teaching/resume tiles), `RetroTile` (CSS crossfade — the page's only animation; reduced-motion → static logo)
- **Styles**: `src/styles/tokens.css` — deck-engine palette (#0A0C10 / #ECE7DB / #E8B54D gold, same gold as books.borck.education); fonts Domine + Funnel Sans + Nanum Gothic Coding via Google Fonts
- **Assets**: `public/tiles/` — covers/, gap/ (limn line-art), tools/, resume/, misc/, retro/. Optimize with `node scripts/optimize-tiles.mjs` (sharp → webp); gap-tile prompts in `docs/hub-tiles.prompts.txt` (`limn --from`)
- **Schema.org**: Person entity `@id: borck.dev/#michael-borck` in index.astro — keep it through any redesign
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

## Cross-brand decisions

Brand architecture, signing identity, and the LinkedIn cadence are decided in
`docs/brand-strategy.md` (not published to the site). Any change that adds,
renames, or merges a property must be argued against that document first.
