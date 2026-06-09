-- ════════════════════════════════════════════════════════════════
--  Para Suhu Digital — HITAM  ·  Database schema (idempotent)
--  This Supabase project is SHARED with a legacy app. To avoid any
--  collision, ALL tables here are namespaced with the `hitam_` prefix.
--  Legacy public.profiles / public.projects are left untouched.
--  Apply via:  npm run db:apply   (or paste into Supabase SQL editor)
-- ════════════════════════════════════════════════════════════════

create extension if not exists "pgcrypto";

-- ── Restore a SAFE legacy signup trigger ──────────────────────────
-- An earlier migration here overwrote public.handle_new_user. Restore a
-- defensive version for the legacy app (insert never blocks auth signup).
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  begin
    insert into public.profiles (id, email)
    values (new.id, new.email)
    on conflict (id) do nothing;
  exception when others then
    null; -- never block auth.users insert
  end;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── Clean up tables created (unprefixed) during the first apply ──
drop table if exists public.order_items cascade;
drop table if exists public.project_milestones cascade;
drop table if exists public.orders cascade;
drop table if exists public.aged_domains cascade;

-- ─────────────────────────── Tables ───────────────────────────

create table if not exists public.hitam_profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text,
  company     text,
  phone       text,
  whatsapp    text,
  role        text not null default 'client' check (role in ('client','admin')),
  created_at  timestamptz not null default now()
);

create table if not exists public.hitam_aged_domains (
  id                uuid primary key default gen_random_uuid(),
  domain            text not null unique,
  tld               text not null default 'com',
  da                int  not null default 0,
  pa                int  not null default 0,
  dr                int  not null default 0,
  ur                int  not null default 0,
  tf                int  not null default 0,
  cf                int  not null default 0,
  age_years         int  not null default 0,
  referring_domains int  not null default 0,
  backlinks         int  not null default 0,
  spam_score        int  not null default 0,
  niche             text not null default 'general',
  language          text not null default 'id',
  price_idr         bigint not null default 0,
  status            text not null default 'available' check (status in ('available','reserved','sold')),
  highlight         text,
  created_at        timestamptz not null default now()
);
create index if not exists hitam_domains_status_idx on public.hitam_aged_domains(status);
create index if not exists hitam_domains_niche_idx  on public.hitam_aged_domains(niche);

create sequence if not exists public.hitam_order_seq;

create table if not exists public.hitam_orders (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  order_number text not null unique
                 default ('PSH-' || to_char(now(),'YYMM') || '-' ||
                          lpad(nextval('public.hitam_order_seq')::text, 4, '0')),
  status       text not null default 'pending'
                 check (status in ('pending','confirmed','in_progress','review','completed','cancelled')),
  total_idr    bigint not null default 0,
  notes        text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
create index if not exists hitam_orders_user_idx on public.hitam_orders(user_id);

create table if not exists public.hitam_order_items (
  id             uuid primary key default gen_random_uuid(),
  order_id       uuid not null references public.hitam_orders(id) on delete cascade,
  service_slug   text not null,
  service_name   text not null,
  package_tier   text,
  qty            int  not null default 1,
  unit_price_idr bigint not null default 0,
  meta           jsonb,
  aged_domain_id uuid references public.hitam_aged_domains(id) on delete set null
);
create index if not exists hitam_order_items_order_idx on public.hitam_order_items(order_id);

create table if not exists public.hitam_projects (
  id           uuid primary key default gen_random_uuid(),
  order_id     uuid references public.hitam_orders(id) on delete set null,
  user_id      uuid not null references auth.users(id) on delete cascade,
  title        text not null,
  service_slug text not null,
  status       text not null default 'in_progress'
                 check (status in ('pending','confirmed','in_progress','review','completed','cancelled')),
  progress_pct int  not null default 0 check (progress_pct between 0 and 100),
  eta          date,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
create index if not exists hitam_projects_user_idx on public.hitam_projects(user_id);

create table if not exists public.hitam_project_milestones (
  id          uuid primary key default gen_random_uuid(),
  project_id  uuid not null references public.hitam_projects(id) on delete cascade,
  title       text not null,
  body        text,
  done        boolean not null default false,
  position    int not null default 0,
  created_at  timestamptz not null default now()
);
create index if not exists hitam_milestones_project_idx on public.hitam_project_milestones(project_id);

-- ─────────────────────────── Functions & triggers ───────────────────────────

create or replace function public.hitam_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists hitam_orders_touch on public.hitam_orders;
create trigger hitam_orders_touch before update on public.hitam_orders
  for each row execute function public.hitam_touch_updated_at();

drop trigger if exists hitam_projects_touch on public.hitam_projects;
create trigger hitam_projects_touch before update on public.hitam_projects
  for each row execute function public.hitam_touch_updated_at();

-- Auto-create a hitam_profiles row on signup (defensive — never blocks auth).
create or replace function public.hitam_handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  begin
    insert into public.hitam_profiles (id, full_name, whatsapp, company, phone)
    values (
      new.id,
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'whatsapp',
      new.raw_user_meta_data->>'company',
      new.raw_user_meta_data->>'phone'
    )
    on conflict (id) do nothing;
  exception when others then
    null;
  end;
  return new;
end;
$$;

drop trigger if exists hitam_on_auth_user_created on auth.users;
create trigger hitam_on_auth_user_created after insert on auth.users
  for each row execute function public.hitam_handle_new_user();

-- SECURITY DEFINER admin check — avoids RLS recursion on hitam_profiles.
create or replace function public.hitam_is_admin()
returns boolean language sql security definer stable set search_path = public as $$
  select exists(
    select 1 from public.hitam_profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- ─────────────────────────── Row Level Security ───────────────────────────

alter table public.hitam_profiles            enable row level security;
alter table public.hitam_aged_domains        enable row level security;
alter table public.hitam_orders              enable row level security;
alter table public.hitam_order_items         enable row level security;
alter table public.hitam_projects            enable row level security;
alter table public.hitam_project_milestones  enable row level security;

-- profiles
drop policy if exists hp_select on public.hitam_profiles;
create policy hp_select on public.hitam_profiles
  for select using (id = auth.uid() or public.hitam_is_admin());
drop policy if exists hp_insert on public.hitam_profiles;
create policy hp_insert on public.hitam_profiles
  for insert with check (id = auth.uid());
drop policy if exists hp_update on public.hitam_profiles;
create policy hp_update on public.hitam_profiles
  for update using (id = auth.uid() or public.hitam_is_admin())
  with check (id = auth.uid() or public.hitam_is_admin());

-- aged_domains : public catalog read, admin write
drop policy if exists hd_select on public.hitam_aged_domains;
create policy hd_select on public.hitam_aged_domains
  for select using (true);
drop policy if exists hd_write on public.hitam_aged_domains;
create policy hd_write on public.hitam_aged_domains
  for all using (public.hitam_is_admin()) with check (public.hitam_is_admin());

-- orders
drop policy if exists ho_select on public.hitam_orders;
create policy ho_select on public.hitam_orders
  for select using (user_id = auth.uid() or public.hitam_is_admin());
drop policy if exists ho_insert on public.hitam_orders;
create policy ho_insert on public.hitam_orders
  for insert with check (user_id = auth.uid());
drop policy if exists ho_update on public.hitam_orders;
create policy ho_update on public.hitam_orders
  for update using (public.hitam_is_admin()) with check (public.hitam_is_admin());

-- order_items
drop policy if exists hoi_select on public.hitam_order_items;
create policy hoi_select on public.hitam_order_items
  for select using (
    exists(select 1 from public.hitam_orders o
           where o.id = order_id and (o.user_id = auth.uid() or public.hitam_is_admin()))
  );
drop policy if exists hoi_insert on public.hitam_order_items;
create policy hoi_insert on public.hitam_order_items
  for insert with check (
    exists(select 1 from public.hitam_orders o
           where o.id = order_id and o.user_id = auth.uid())
  );
drop policy if exists hoi_admin on public.hitam_order_items;
create policy hoi_admin on public.hitam_order_items
  for all using (public.hitam_is_admin()) with check (public.hitam_is_admin());

-- projects
drop policy if exists hpr_select on public.hitam_projects;
create policy hpr_select on public.hitam_projects
  for select using (user_id = auth.uid() or public.hitam_is_admin());
drop policy if exists hpr_write on public.hitam_projects;
create policy hpr_write on public.hitam_projects
  for all using (public.hitam_is_admin()) with check (public.hitam_is_admin());

-- project_milestones
drop policy if exists hpm_select on public.hitam_project_milestones;
create policy hpm_select on public.hitam_project_milestones
  for select using (
    exists(select 1 from public.hitam_projects p
           where p.id = project_id and (p.user_id = auth.uid() or public.hitam_is_admin()))
  );
drop policy if exists hpm_write on public.hitam_project_milestones;
create policy hpm_write on public.hitam_project_milestones
  for all using (public.hitam_is_admin()) with check (public.hitam_is_admin());

-- ─────────────────────────── Grants ───────────────────────────

grant usage on schema public to anon, authenticated;
grant select on public.hitam_aged_domains to anon, authenticated;
grant select, insert, update on public.hitam_profiles to authenticated;
grant select, insert, update on public.hitam_orders to authenticated;
grant select, insert, update, delete on public.hitam_order_items to authenticated;
grant select, insert, update, delete on public.hitam_projects to authenticated;
grant select, insert, update, delete on public.hitam_project_milestones to authenticated;
grant usage on sequence public.hitam_order_seq to authenticated;

-- ─────────────────────────── Admin bootstrap (run manually) ───────────────────────────
-- After you sign up on the site, promote your account to admin:
--   update public.hitam_profiles set role = 'admin'
--   where id = (select id from auth.users where email = 'you@example.com');
