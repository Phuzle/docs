// Fails when an internal /relay/... link in the content points at a page that doesn't exist (run: bun scripts/check-links.mjs).
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = 'content/docs';
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const pages = new Set(
  walk(root).filter((f) => f.endsWith('.mdx')).map((f) => '/' + f.slice(root.length + 1).replace(/\.mdx$/, '').replace(/\/index$/, '').replace(/^index$/, '')),
);
let bad = 0;
for (const f of walk(root).filter((f) => f.endsWith('.mdx'))) {
  for (const m of readFileSync(f, 'utf8').matchAll(/\]\((\/[a-z][^)#\s]*)(#[^)]*)?\)/g)) {
    const p = m[1].replace(/\/$/, '');
    if (/\.\w+$/.test(p) && existsSync(join('public', p))) continue;
    if (!pages.has(p)) { console.error(`${f}: broken link ${m[1]}`); bad++; }
  }
}
if (bad) process.exit(1);
console.log('links ok');
