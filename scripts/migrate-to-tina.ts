import fs from "node:fs";
import path from "node:path";
import { NICHE_DATA } from "../src/lib/niches";
import { SERVICES } from "../src/lib/constants";

const root = process.cwd();

function ensureDir(p: string) {
  fs.mkdirSync(path.join(root, p), { recursive: true });
}

function writeJson(p: string, data: unknown) {
  fs.writeFileSync(
    path.join(root, p),
    JSON.stringify(data, null, 2) + "\n",
    "utf8"
  );
}

// ─── NICHES ──────────────────────────────────────
ensureDir("content/niches");
for (const [slug, data] of Object.entries(NICHE_DATA)) {
  const { slug: _slug, ...rest } = data;
  writeJson(`content/niches/${slug}.json`, rest);
  console.log(`✓ content/niches/${slug}.json`);
}

// ─── SERVICES ────────────────────────────────────
ensureDir("content/services");
for (const s of SERVICES) {
  const { id, slug, ...rest } = s;
  writeJson(`content/services/${id}.json`, rest);
  console.log(`✓ content/services/${id}.json`);
}

// ─── TESTIMONIALS (empty placeholder) ───────────
ensureDir("content/testimonials");
fs.writeFileSync(path.join(root, "content/testimonials/.gitkeep"), "");

console.log("\nMigration complete.");
