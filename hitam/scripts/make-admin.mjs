// Promote a signed-up account to admin.
// Usage: npm run db:make-admin -- you@email.com
import pg from "pg";

const email = process.argv[2];
if (!email) {
  console.error("Usage: npm run db:make-admin -- you@email.com");
  process.exit(1);
}

const client = new pg.Client({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: { rejectUnauthorized: false },
});
await client.connect();

const { rows } = await client.query(
  `update public.hitam_profiles set role='admin'
   where id = (select id from auth.users where email = $1)
   returning id`,
  [email],
);

if (rows.length) {
  console.log(`✓ ${email} is now an admin.`);
} else {
  console.log(
    `✗ No profile found for ${email}. Make sure you signed up on the site first.`,
  );
  process.exitCode = 1;
}
await client.end();
