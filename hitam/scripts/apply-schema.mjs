// Applies supabase/schema.sql (and seed.sql if present) to the Supabase
// Postgres instance using the direct connection string.
// Run with:  npm run db:apply   (loads .env.local automatically)
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const url = process.env.SUPABASE_DB_URL;
if (!url) {
  console.error("✗ Missing SUPABASE_DB_URL in .env.local");
  process.exit(1);
}

const schema = readFileSync(resolve(root, "supabase/schema.sql"), "utf8");
let seed = "";
try {
  seed = readFileSync(resolve(root, "supabase/seed.sql"), "utf8");
} catch {
  /* no seed file — fine */
}

const client = new pg.Client({
  connectionString: url,
  ssl: { rejectUnauthorized: false },
});

async function main() {
  console.log("→ Connecting to Supabase Postgres…");
  await client.connect();
  console.log("✓ Connected. Applying schema…");
  await client.query(schema);
  console.log("✓ Schema applied.");

  if (seed.trim()) {
    console.log("→ Applying seed data…");
    await client.query(seed);
    console.log("✓ Seed applied.");
  }

  // Tell PostgREST (Supabase REST API) to refresh its schema cache so the
  // newly-created tables are immediately queryable via supabase-js.
  await client.query("notify pgrst, 'reload schema'");
  console.log("✓ PostgREST schema cache reload requested.");

  const { rows } = await client.query(
    "select count(*)::int as n from public.hitam_aged_domains",
  );
  console.log(`✓ hitam_aged_domains now has ${rows[0].n} rows.`);
}

main()
  .then(() => client.end())
  .catch(async (e) => {
    console.error("\n✗ Failed:", e.message);
    if (e.code) console.error("  code:", e.code);
    await client.end().catch(() => {});
    process.exit(1);
  });
