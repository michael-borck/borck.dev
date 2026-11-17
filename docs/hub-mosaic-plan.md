# Hub Mosaic Plan — borck.dev trunk redesign

**Date:** 2026-11-17 · **Owner:** Michael Borck · **Status:** Proposed — argued against `brand-strategy.md` below.

**One paragraph:** Turn the borck.dev trunk from a six-link router into an artifact tile wall
(Amir Husain pattern): the volume of work is visible in one screenful. Architecture stays
trunk-and-spoke — no new brands, no merged brands. Tiles are made of *real artifacts first*
(book covers, tool screenshots, lab icons); `limn` only fills gaps. Visual language = the
deck-engine default palette.

---

## 0. Argued against brand-strategy.md

- §2 says trunk + destination brands, don't add properties. **Compliant:** this changes the
  trunk's surface only. Spokes keep their domains and registers.
- §2 endorsement rule: tiles carry "a Borck Education tool · by Michael Borck"-style wiring in
  their link metadata, not on the tile face.
- RetroVerse: one tile under Play, linking out to retroverse.studio — same treatment Husain
  gives ATX Computer Museum. It stays a separate brand; the tile is an endorsement, per §2.
- borck.id.au: **out of scope.** It's Michael's private index page. Stays as-is.

## 1. Goals

1. One screenful at borck.dev communicates volume: books, tools, research, teaching, lab, decks.
2. Every tile links to the real destination (spoke or external).
3. Reuse-first: ship with existing artwork; generate only gaps.
4. One visual language across the trunk (deck-engine palette), letting tile artwork carry
   per-register color.

**Non-goals:** merging sites, rebranding spokes, changing borck.consulting/borck.education,
touching borck.id.au, adding a seventh brand.

## 2. Design language (deck-engine default)

Source: `deck-engine/theme/tokens.css`. Adopt as `src/styles/tokens.css` on the hub.

| Token | Value | Note |
|---|---|---|
| `--bg` | `#0A0C10` | warm near-black (replaces cold `#0a0a0b` + indigo) |
| `--stage-bg` | `#050608` | page backdrop behind the wall |
| `--ink` | `#ECE7DB` | warm off-white type |
| `--acc` / `--amber` | `#E8B54D` | **identical to books.borck.education gold** — free brand continuity |
| `--green` | `#6CC59A` | secondary accent (research/lab) |
| `--red` | `#E5745A` | sparing, errors/play register |
| Fonts | Domine (serif), Funnel Sans (sans), Nanum Gothic Coding (mono) | serif headings give the editorial Husain gravitas; DM Sans/JetBrains Mono stay on spokes |
| `--radius: 12px`, `--gap: 18px` | | grid rhythm |

Type treatment: Domine for name + tile titles, Funnel Sans for descriptions, mono for the
small destination-domain line (current `.link-dest` pattern, kept).

## 3. The wall — tile groups and art sources

Grouped by the strategy doc's four registers. Sizes: mix of 1×1 (square) and 2×1 wide tiles,
540px art width, like the reference site.

### Books (register: books) — DECIDED: tiered shelf, all 27
- Structure mirrors `books-hq/docs/book-tiers.md` (27 entries, four tiers). Tier — not equal
  slabs — communicates weight; solves the "volume of them, some pretty light" problem honestly:
  - **Books · 4** (standalone, KDP): CND, The Human Edge, Speak Software, Model Data Verify AI —
    larger tiles; the two flagships link to their own landing pages.
  - **Companions · 15**: each carries an `extends <PARENT>` chip (CND / SDA / AB / Build-AI…),
    turning 15 covers into one visible system rather than noise.
  - **References · 6**: green `FREE` tag, web-first (Absolute Minimum, AI Toys, Security Toys,
    Paradigms, Simulate It, The Great Silence).
  - **Experimental · 2**: `IN DEV` tag, dashed tile border (Build AI Understand AI, Assume Breach).
- **Theme trays cut across tiers** as tags (not folders), multi-membership allowed:
  AI · 13, Security · 9, Programming · 9, Simulation · 2, Teaching · 2. AI Toys is AI
  (misconception-breaker pages). Production = `tier:` / `parent:` / `themes:` lists in tiles.yaml.
- **Art source (finished, no generation needed):** `books/_cover_mocks/complete-set-v1/<slug>/cover.png`,
  plus per-repo finals (heu, build). 27 covers total, all on disk.
- Default state: tray `All` + view `By tier`. Featured-eight survives as a view, not the default.

### Tools (register: education)
- **Art source:** `tools.borck.education/public/screenshots/*.png` — 30+ real UI shots,
  already carousel-proven there.
- One hero tile → tools.borck.education; optionally 2–3 individual tool tiles (Book Forge,
  Lesson Loom, Feed Forward) rotating screenshots as their art.

### Research (register: research)
- **No usable art exists.** `research.borck.dev` is typographic. → limn gap (see §4).
- Tiles: research.borck.dev, LocoLabo, Keep Asking, cst-site (ACIS 2026 poster).
- **LocoLabo art exists:** `loco-labo/loco-labo/src/assets/art/map.webp` + 13 project icons
  (`art/icons/*.png`) + ~40 candidate heroes in `art/candidates/`. Mine before generating.

### Teaching & decks (register: consulting/teaching)
- Art source: `borck.consulting/public/og.svg` statement-card pattern (hand-editable SVG) —
  clone it for teach.borck.education, 8020workshop, exec-ed, decks (borck.consultancy/decks).
- No photography of people; keep the calm paper-green register inside the tile art only.

### Lab (register: research/loco)
- locolabo.org tile using `map.webp` or a candidates hero. LocoEnsayo covered in same group
  (per `sameAs` it's family; verify its live URL still resolves).

### Play (register: retro — one tile) — DECIDED: Option D, animated
- retroverse.studio tile, one only. Face = **CSS crossfade loop** (the "Option D" mock):
  studio logo → SwipeVerse noir card → game art, 12s loop, ~4s per artwork, ~1s fades.
  CSS-only — no GIF (3–6 MB vs three files already shipping). `prefers-reduced-motion`
  falls back to the static logo frame (option A). **Motion-budget rule:** this is the wall's
  only moving element; if a second animation ever lands on the wall, this reverts to static.
- Art sources: `retroverse/retroverse.studio/assets/images/` (logo, game1.webp) and
  `retroverse/swipeverse-art/drops/noir/terminal.png`. SwipeVerse drops (25 realities × 9
  archetypes) remain the rotation pool if the face is ever refreshed.

### Resume + meta
- **Art source:** `resume.borck.dev/public-astro/thumbs/*.png` — 12 uniform format tiles,
  literally built for a grid. One tile → resume.borck.dev.
- bigpicture.borck.dev: one wide "map" tile using its `public/og.png`.

## 4. Artwork pipeline (reuse-first, limn for gaps)

1. **Reuse set (already on disk):** 26 book covers, 30+ tool screenshots, 12 resume thumbs,
   13 LocoLabo icons + map hero, RetroVerse logo/game art, 2 flagship covers, 2 OG cards,
   8 WorkReady primer scenes (`simulations/workready/workready-primer/assets/scenes/*.jpg`).
2. **Gap set — generate with limn** (only what reuse can't cover):
   research papers visual, Keep Asking, cst-site, teach catalogue, 8020workshop, decks,
   maybe the wall's ambient hero texture. ~8–12 images total.
3. **Style decision — DECIDED: line-art sketch.** limn has no presets; style lives in the prompt.
   Tiles use **line-art sketch, warm ink `#ECE7DB` on `#0A0C10`, gold `#E8B54D` accents** —
   matches the deck-engine editorial tone, ages well, coherent with serif headings.
   Photorealistic (limn's default) is not used for tiles. 8/16-bit reserved for the RetroVerse
   tile's world only. Oil painting: skip.
4. **Batch:** `limn --from hub-tiles.prompts.txt -M` (metadata sidecars keep provenance per
   image, consistent with limn's design).
5. **Tile spec:** generate square + 1080×540 (2×1); downscale to 540px WebP/AVIF; overlay
   title + destination domain in Funnel Sans/mono via a small build script — same approach as
   `bigpicture/og-template.html` and `borck.consulting/og.svg` (template → PNG/SVG per tile).

## 5. Page architecture (borck.dev v2)

- Framework: plain Astro single page (current setup, no Starlight needed). One `tiles.yaml`
  data file: `{tile, group, image, title, blurb, href, endorsement, size}`.
- Keep: Person `@id` JSON-LD block and `sameAs` list (extend with retroverse.studio),
  `/random` page, corner wordmark, footer.
- Layout: name + one-line thesis ("one thesis in four registers" made visible) →
  the wall grouped by register with mono group labels → footer identical to today.
- Animation budget: **one** ambient motion max (current sweep found CSS-only animation
  everywhere; no Lottie/video anywhere). Candidates: subtle `tier-rise` stagger from
  `resume.borck.dev/src-astro/styles/global.css`, or trust-tool-style auto-demo on the
  featured tool tile. Retroverse matrix rain stays on retroverse.studio.

## 6. Phase plan

| Phase | Work | Output |
|---|---|---|
| 0 · Hygiene (half day) | Close brand-strategy §5 punch list: resume API domain off michaelborck.dev; settle NUMERON ownership. Verify: does `book.borck.dev` resolve/point anywhere (not in repo inventory — likely meant books.borck.education; retire or redirect). Verify locoensayo.org live. | Punch list green |
| 1 · Design system (1 day) | `tokens.css` from deck-engine; tile + wall components in a scratch Astro page; tiles.yaml schema. **DONE 2026-11-18:** `src/styles/tokens.css`, `src/data/tiles.yaml` + `wall.ts` (js-yaml), `BookTile`/`ArtTile`/`RetroTile` components, live wall at `/prototype`. Assets in `public/tiles/` (27 covers @420px, 3 limn line-art gap tiles: research/teaching/lab, tool shots, resume thumbs, Retro frames). Cover thumbs are prototype-grade — re-export ≥560px before shipping. Featured set = 4 Books + Build AI. | `/prototype` |
| 2 · Asset pipeline (1–2 days) | Copy/link reuse set into `src/assets/tiles/`; write `hub-tiles.prompts.txt`; limn batch for gaps; tile overlay script. **DONE 2026-11-18:** assets in `public/tiles/` — all 27 covers re-exported at 640px-tall webp (uniform), 6 line-art gap tiles via limn (research, teaching, keep-asking, cst, decks + lab spare), tool shots/resume thumbs/OG cards webp. `scripts/optimize-tiles.mjs` (sharp) is the pipeline: 10MB → 0.7MB; rerun after adding covers. Tile text is HTML captions (ArtTile/BookTile), not baked overlays — no overlay script needed. Prompts recorded in `docs/hub-tiles.prompts.txt` (`limn --from` compatible). `.gitignore` guards `._*`/`.DS_Store` (exFAT volume artifacts). | Complete tile set |
| 3 · Build (2–3 days) | borck.dev v2 single page; keep schema//random/footer; deploy to GitHub Pages as usual. **DONE 2026-11-18:** wall is now `src/pages/index.astro` (Person JSON-LD kept, sameAs + retroverse.studio); `/prototype` removed; throwaway mock folder deleted. Books = three standard cards: CND, The Human Edge, and a 2×2 collage card (Speak, Model Data, Build AI, The Great Silence) → books.borck.education. Flagship covers render contained over their own cover color, not cropped or oversized. | Live hub (local — deploy on push) |
| 4 · Consistency pass (1 day) | Endorsement footers on spokes missing them (strategy §2); bigpicture ↔ hub cross-links. | Wired endorsements |
| 5 · Launch (half day) | 2–3 LinkedIn build-log posts excerpting the redesign (strategy §4: document, don't create). | Announced |

## 7. Success criteria

- One screenful shows ≥20 real artifacts without scrolling past the fold on desktop.
- Every tile's href resolves and lands in the right register.
- No new domains or brands created; punch list from §6 Phase 0 closed.
- Tile art ≥80% reused from existing repos; limn used only for the gap set.

## 8. Decisions log

| Date | Decision |
|---|---|
| 2026-11-17 | Gap-set art style: **line-art sketch** (ink on deck-engine dark, gold accents). |
| 2026-11-17 | Book shelf depth: **all 27, tiered** per `book-tiers.md` (Books 4 / Companions 15 / References 6 / Experimental 2), theme trays as tags across tiers, default view = By tier. |
| 2026-11-17 | RetroVerse tile face: **Option D animated** — CSS crossfade through logo / SwipeVerse card / game art; wall's only animation; reduced-motion → static logo. |
| 2026-11-18 | **Revised — featured-only shelf:** the wall shows 5 books (CND, The Human Edge wide and leading, then Speak Software, Model Data, Build AI). Trays/tier views dropped from the wall; the full 27-book catalogue is discovered at books.borck.education. tiles.yaml keeps the whole catalogue as data. |

Decisions verified against working mocks in `sites/borck.dev/prototype/` (throwaway — delete
after Phase 1 absorbs the tokens and tile components into the real build).
