# LinkedIn launch posts — hub wall rebuild

**Date:** 2026-11-18 · **Pillars:** build log ×2, craft ×1 · **Sell:** none (per §4: soft pitch only every fourth post; these three are authority posts)

Post one per weekly slot, in this order. Screenshot assets live in `docs/linkedin-assets/`.
Link goes in the first comment, never the post body.

---

## Post 1 · Build log · the rebuild

**Screenshot:** `wall-full.png` (the whole wall, one screen)

> My website was six links. Now it's the work.
>
> For two years borck.dev has been a business card. Name, tagline, six links to other sites I maintain. Fine for finding things. Useless for showing them.
>
> So I rebuilt it as a wall. Books, tools, research, teaching, my resume in twelve formats, one game studio tile. Every card is a real thing I shipped, linking to where it lives.
>
> The whole page is one YAML file. Adding the 28th book is one line.
>
> Live at borck.dev. Comments open, tell me what reads as noise.

**First comment:** https://borck.dev

---

## Post 2 · Craft · measure the DOM before rewriting CSS

**Screenshot:** `grid-before.png` and `grid-after.png` (post both, before first)

> One shelf of my new site rendered three different card sizes. The covers were innocent.
>
> I nearly rewrote the CSS by vibes. Instead I drove headless Chrome over the page and dumped every card's bounding box.
>
> Three separate bugs, none where I expected:
>
> Grid items default to min-width:auto, so each cover's intrinsic image width fattened its track. A 2x2 collage used height:100% inside an aspect-ratio box, which never resolves, so it grew to fit its largest image. And the page's border-box reset is scoped, so it silently never reached the card components.
>
> Fixes were boring. min-width:0. Absolute positioning. One border-box line per component.
>
> Every card on the page now measures 235 by 294. Measured, not eyeballed.

**First comment:** https://borck.dev

---

## Post 3 · Build log · the portfolio already exists

**Screenshot:** `covers-sheet.png` (the finished covers, one sheet)

> I generated almost nothing new for my redesigned homepage.
>
> The 26 book covers were finished months ago, sitting in a mockup folder. Tool screenshots came straight off the tools site. Resume thumbnails, lab diagrams, game art, all already existed.
>
> My image tool filled six gaps, same line-art style, so the wall holds together. A script squashed ten megabytes of PNGs to 0.7 megabytes of webp.
>
> Three years of shipping things means the portfolio was already on disk. The job was arranging it, not making more.
>
> If your work is real, your about page is a curating problem, not a content problem.

**First comment:** https://borck.dev · https://books.borck.education

---

## Scheduling notes

- Weekly slot per brand-strategy §4. Post 1 first (the announcement), 2 and 3 the following weeks.
- Post 2 doubles as a Craft pillar entry; if a research note or CND practice post lands that week, slide 2 back one slot.
- After each post: log which pillar drove follows/profile clicks in the monthly review (§4.5).
