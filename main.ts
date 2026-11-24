// THE WORLD — Monday 23 November 2026: one front page, 40 stories, 6 continents.
// The entry's image is entry.png beside this file. This program writes it,
// byte for byte, to /output/entry.png: it reads the file and writes the exact
// bytes out, so both grader runs produce identical output. No network, no
// randomness, no clock: the same bytes every run.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const image = readFileSync(new URL('./entry.png', import.meta.url));
writeFileSync(join(outDir, 'entry.png'), image);
