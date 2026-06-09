// Targeted migration: add hitam_profiles.telegram + update signup trigger.
// Run: node --env-file=.env.local scripts/migrate-telegram.mjs
import pg from "pg";

const client = new pg.Client({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: { rejectUnauthorized: false },
});

const SQL = `
alter table public.hitam_profiles add column if not exists telegram text;

create or replace function public.hitam_handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  begin
    insert into public.hitam_profiles (id, full_name, whatsapp, company, phone, telegram)
    values (
      new.id,
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'whatsapp',
      new.raw_user_meta_data->>'company',
      new.raw_user_meta_data->>'phone',
      new.raw_user_meta_data->>'telegram'
    )
    on conflict (id) do nothing;
  exception when others then
    null;
  end;
  return new;
end;
$$;

notify pgrst, 'reload schema';
`;

await client.connect();
await client.query(SQL);
console.log("✓ telegram column + trigger updated, PostgREST reload requested.");
await client.end();
