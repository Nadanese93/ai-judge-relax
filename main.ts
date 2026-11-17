// Writes the relaxation text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic: reads the fixed local text.txt and writes its exact bytes.
// No network, no randomness, no clock.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const text = readFileSync(join(HERE, 'text.txt'), 'utf-8');
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), text, 'utf-8');
