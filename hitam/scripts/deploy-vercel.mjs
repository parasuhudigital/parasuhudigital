// Deploy hitam/ to Vercel via CLI.
// Usage: VERCEL_TOKEN=xxxx node hitam/scripts/deploy-vercel.mjs
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const token = process.env.VERCEL_TOKEN;
if (!token) {
  console.error("Missing VERCEL_TOKEN env var.");
  process.exit(1);
}

const hitamDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SCOPE = process.env.VERCEL_SCOPE || "parasuhudigital-s-projects";
const V = `npx --yes vercel@latest`;
const T = `--token=${token} --scope ${SCOPE}`;
const PROJECT = "parasuhu-hitam";

// Parse .env.local (only the vars the app needs at build/runtime).
const env = {};
for (const line of readFileSync(resolve(hitamDir, ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const DEPLOY_VARS = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "NEXT_PUBLIC_WHATSAPP_NUMBER",
  "NEXT_PUBLIC_SITE_URL",
];

console.log("→ Linking Vercel project…");
execSync(`${V} link --yes --project ${PROJECT} --cwd "${hitamDir}" ${T}`, {
  stdio: "inherit",
});

console.log("\n→ Setting environment variables…");
for (const key of DEPLOY_VARS) {
  const val = env[key];
  if (!val) {
    console.log(`  ! skip ${key} (empty)`);
    continue;
  }
  for (const target of ["production", "preview", "development"]) {
    try {
      execSync(`${V} env add ${key} ${target} --cwd "${hitamDir}" ${T}`, {
        input: val + "\n",
        stdio: ["pipe", "ignore", "ignore"],
      });
    } catch {
      // already exists for this target — fine
    }
  }
  console.log(`  ✓ ${key}`);
}

console.log("\n→ Deploying to production (build runs on Vercel)…");
const out = execSync(`${V} deploy --prod --yes --cwd "${hitamDir}" ${T}`, {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "inherit"],
});
const url = out.trim().split("\n").pop();
console.log("\n✓ DEPLOYED:", url);

console.log("\n→ Attaching custom domain (may fail if domain lives in another scope)…");
try {
  execSync(
    `${V} domains add hitam.parasuhudigital.com ${PROJECT} --cwd "${hitamDir}" ${T}`,
    { stdio: "inherit" },
  );
  console.log("✓ Domain attached. Point Hostinger CNAME → cname.vercel-dns.com");
} catch {
  console.log(
    "! Could not auto-attach hitam.parasuhudigital.com — add it in the Vercel dashboard\n" +
      "  (Project → Settings → Domains), then set the Hostinger CNAME.",
  );
}

console.log(`\nLive preview URL: ${url}`);
