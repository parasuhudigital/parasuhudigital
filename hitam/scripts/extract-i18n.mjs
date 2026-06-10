// Extract translatable ID content (catalog + proof) to JSON for translation.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "scripts/data/i18n");
mkdirSync(outDir, { recursive: true });

// ── catalog CONTENT object ──
const catTxt = readFileSync(resolve(root, "src/lib/catalog.ts"), "utf8");
const braceStart = catTxt.indexOf(
  "{",
  catTxt.indexOf("const CONTENT: Record<string, ServiceBody> ="),
);
const svcIdx = catTxt.indexOf("export const SERVICES");
const closeIdx = catTxt.lastIndexOf("};", svcIdx); // closes CONTENT
const CONTENT = JSON.parse(catTxt.slice(braceStart, closeIdx + 1));
for (const [slug, body] of Object.entries(CONTENT)) {
  writeFileSync(
    resolve(outDir, `catalog.${slug}.id.json`),
    JSON.stringify(body, null, 2),
  );
}

// ── proof arrays ──
const proofTxt = readFileSync(resolve(root, "src/lib/proof.ts"), "utf8");
function arr(name) {
  const eq = proofTxt.indexOf("=", proofTxt.indexOf(`export const ${name}`));
  const a = proofTxt.indexOf("[", eq);
  const b = proofTxt.indexOf("];", a);
  return JSON.parse(proofTxt.slice(a, b + 1));
}
const proof = { testimonials: arr("TESTIMONIALS"), social_proof: arr("SOCIAL_PROOF") };
writeFileSync(resolve(outDir, "proof.id.json"), JSON.stringify(proof, null, 2));

console.log(
  `OK — services: ${Object.keys(CONTENT).join(", ")} | testimonials: ${proof.testimonials.length} | social_proof: ${proof.social_proof.length}`,
);
console.log("source dir:", outDir);
