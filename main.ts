// Alien Field Notes: The Two Day Earth Review — entry for make.fun
// Writes one alien tourist's review of planet Earth (<=200 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// One line, one joke: an alien tourist's verdict on Earth after two days.
// The review format does the work — stars up front, verdict at the end —
// and the middle is just three small human habits seen from very far away.
const LINE =
  "★★★★☆ — Lovely planet. The locals apologise to furniture, queue politely for bitter bean water, and stare at glowing rectangles for hours. Two days was plenty. Would abduct again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to entry.txt`);
