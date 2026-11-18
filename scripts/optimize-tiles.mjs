import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { join, extname } from 'node:path';

// Phase 2 tile pipeline: normalize public/tiles to production webp.
// Covers render at ~150-220px on the wall (x2 retina -> 640px tall is generous).
// Run: node scripts/optimize-tiles.mjs

const ROOT = decodeURIComponent(new URL('../public/tiles', import.meta.url).pathname);
const JOBS = [
  { dir: 'covers', height: 640, q: 82 },
  { dir: 'gap', width: 800, q: 80 },
  { dir: 'tools', width: 800, q: 80 },
  { dir: 'tools-roster', width: 800, q: 80 },
  { dir: 'resume', width: 800, q: 80 },
  { dir: 'misc', width: 900, q: 82 },
  { dir: 'sims', width: 800, q: 80 },
  { dir: 'retro', width: 600, q: 88 },
];

let before = 0, after = 0, count = 0;
for (const job of JOBS) {
  const dir = join(ROOT, job.dir);
  let files;
  try { files = readdirSync(dir); } catch { continue; }
  for (const f of files) {
    const ext = extname(f).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
    if (f.startsWith('._')) continue;
    const src = join(dir, f);
    const out = join(dir, f.slice(0, -ext.length) + '.webp');
    const img = sharp(src);
    const meta = await img.metadata();
    let pipe = job.height && meta.height > job.height
      ? img.resize({ height: job.height })
      : job.width && meta.width > job.width
        ? img.resize({ width: job.width })
        : img;
    const info = await pipe.webp({ quality: job.q }).toFile(out);
    before += statSync(src).size;
    after += info.size;
    count++;
    unlinkSync(src);
    console.log(`${job.dir}/${f.slice(0, -ext.length)}.webp  ${meta.width}x${meta.height} -> ${info.width}x${info.height}  ${(statSync(out).size / 1024).toFixed(0)}KB`);
  }
}
console.log(`\n${count} tiles -> webp. ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`);
