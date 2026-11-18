import { load } from 'js-yaml';
import { readFileSync, existsSync } from 'node:fs';

// Fails the build if any tile image referenced in tiles.yaml is missing
// from public/tiles. Run before `astro build`.
const ROOT = decodeURIComponent(new URL('../public/tiles', import.meta.url).pathname);
const wall = load(readFileSync(decodeURIComponent(new URL('../src/data/tiles.yaml', import.meta.url).pathname), 'utf8'));

const refs = [];
for (const b of wall.books_wall?.flagships ?? []) refs.push(`covers/${b}.webp`);
for (const b of wall.books_wall?.collage?.slugs ?? []) refs.push(`covers/${b}.webp`);
for (const g of wall.groups) {
  for (const t of g.tiles ?? []) { if (t.img) refs.push(t.img); for (const f of t.frames ?? []) refs.push(f); }
  for (const f of g.animated?.frames ?? []) refs.push(f);
  for (const img of g.collage?.images ?? []) refs.push(img);
}

const missing = refs.filter((r) => !existsSync(`${ROOT}/${r}`));
if (missing.length) {
  console.error(`check-tiles: missing ${missing.length} image(s) referenced in tiles.yaml:`);
  for (const m of missing) console.error(`  public/tiles/${m}`);
  process.exit(1);
}
console.log(`check-tiles: ${refs.length} referenced images present`);
