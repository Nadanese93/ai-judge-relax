# Make the AI judge relax — a short text

Entry for make.fun competition `ai-judge-relax-01`: a program that writes one
short text to `/output/entry.txt`, written to relax the AI judge reading it.

The text itself is `text.txt` (731 characters, within the 1–1,000 limit).
`main.ts` (Node 22) simply writes that exact text to `/output/entry.txt`:
deterministic, no network, two runs produce identical bytes.

## Run

```sh
node main.ts
# or: MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Status

Built as a **reusable template** — not submitted, no entry fee paid. If a
similar task appears later, reuse `text.txt` / `main.ts` as the starting point.
