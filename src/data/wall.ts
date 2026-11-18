import { load } from 'js-yaml';
import raw from './tiles.yaml?raw';

export interface Book {
  slug: string;
  title: string;
  tier: 'books' | 'companions' | 'references' | 'experimental';
  parent?: string;
  themes: string[];
  featured?: boolean;
  bg?: string;
  blurb?: string;
  href?: string;
}

export interface Tile {
  img: string;
  title: string;
  blurb?: string;
  href?: string;
  art?: boolean;
  frames?: string[];
}

export interface Group {
  id: string;
  label: string;
  blurb: string;
  href: string;
  tiles: Tile[];
  animated?: { frames: string[]; title: string; blurb: string };
  collage?: { title: string; blurb: string; images: string[] };
}

export interface Wall {
  books_wall?: {
    flagships: string[];
    collage: { slugs: string[]; title: string; blurb: string; href: string };
  };
  defaults: { book_href: string };
  books: Book[];
  groups: Group[];
}

export const wall = load(raw) as Wall;
for (const g of wall.groups) g.tiles ??= [];

export const TIERS = [
  { key: 'books', label: 'Books', desc: 'standalone, on KDP' },
  { key: 'companions', label: 'Companions', desc: 'extend a book' },
  { key: 'references', label: 'References', desc: 'free · web-first' },
  { key: 'experimental', label: 'Experimental', desc: 'in development' },
] as const;

export const TRAYS = [
  { key: 'ai', label: 'AI' },
  { key: 'security', label: 'Security' },
  { key: 'programming', label: 'Programming' },
  { key: 'simulation', label: 'Simulation' },
  { key: 'teaching', label: 'Teaching' },
] as const;

export const bookHref = (b: Book): string => b.href ?? wall.defaults.book_href;
