-- =====================================================================
-- Nasiya Daftar — Supabase baza sxemasi
-- Supabase → SQL Editor → New query → shu faylni toʻliq joylab "Run" bosing.
-- Qayta ishga tushirish xavfsiz (mavjud jadvallar oʻchirilmaydi).
-- =====================================================================

-- ---------- Jadvallar ----------
create table if not exists public.products (
  id          text primary key,
  owner       uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name        text not null,
  price       bigint not null default 0,
  created_at  timestamptz not null default now()
);

create table if not exists public.customers (
  id          text primary key,
  owner       uuid not null default auth.uid() references auth.users(id) on delete cascade,
  first       text not null,
  last        text,
  phones      jsonb not null default '[]'::jsonb,   -- [{label, number}]
  home_addr   text,
  work_addr   text,
  note        text,
  contracts   jsonb not null default '[]'::jsonb,   -- [{path, type, date}] — Storage'dagi shartnoma rasmlari
  created_at  timestamptz not null default now()
);

create table if not exists public.sales (
  id          text primary key,
  owner       uuid not null default auth.uid() references auth.users(id) on delete cascade,
  customer_id text not null references public.customers(id) on delete cascade,
  items       jsonb not null default '[]'::jsonb,   -- [{productId, name, price, qty}]
  subtotal    bigint not null default 0,
  total       bigint not null default 0,
  type        text not null check (type in ('cash', 'credit')),
  date        date not null default current_date,
  down        bigint default 0,                     -- boshlangʻich toʻlov
  months      int,                                  -- nasiya muddati
  monthly     bigint,                               -- oylik toʻlov
  first_due   date,                                 -- birinchi oylik toʻlov sanasi
  markup      numeric default 0,
  schedule_mode text not null default 'fixed' check (schedule_mode in ('fixed', 'recalc')), -- fixed: belgilangan, recalc: qayta hisoblash
  created_at  timestamptz not null default now()
);

create table if not exists public.payments (
  id          text primary key,
  owner       uuid not null default auth.uid() references auth.users(id) on delete cascade,
  customer_id text not null references public.customers(id) on delete cascade,
  sale_id     text not null references public.sales(id) on delete cascade,
  amount      bigint not null check (amount > 0),
  date        date not null default current_date,
  method      text not null default 'cash' check (method in ('cash', 'card', 'transfer')),
  kind        text not null default 'regular' check (kind in ('full', 'down', 'regular')),
  note        text,
  created_at  timestamptz not null default now()
);

create index if not exists sales_customer_idx    on public.sales(customer_id);
create index if not exists payments_customer_idx on public.payments(customer_id);
create index if not exists payments_sale_idx     on public.payments(sale_id);
create index if not exists payments_date_idx     on public.payments(date);

-- ---------- Xavfsizlik (RLS): har kim faqat oʻz yozuvlarini koʻradi ----------
do $$
declare t text;
begin
  foreach t in array array['products', 'customers', 'sales', 'payments'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "owner_all" on public.%I', t);
    execute format(
      'create policy "owner_all" on public.%I for all to authenticated
         using (owner = auth.uid()) with check (owner = auth.uid())', t);
  end loop;
end $$;

-- ---------- Realtime: boshqa qurilmadagi oʻzgarishlar darhol koʻrinsin ----------
alter table public.products  replica identity full;
alter table public.customers replica identity full;
alter table public.sales     replica identity full;
alter table public.payments  replica identity full;

do $$
declare t text;
begin
  foreach t in array array['products', 'customers', 'sales', 'payments'] loop
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;

-- ---------- Shartnoma rasmlari uchun yopiq Storage ----------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('contracts', 'contracts', false, 20971520,
        array['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif', 'application/pdf'])
on conflict (id) do update
  set public = false,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- Fayl yoʻli: <foydalanuvchi id>/<mijoz id>/<fayl> — faqat egasi oʻqiy va yoza oladi.
drop policy if exists "contracts_owner_select" on storage.objects;
drop policy if exists "contracts_owner_insert" on storage.objects;
drop policy if exists "contracts_owner_update" on storage.objects;
drop policy if exists "contracts_owner_delete" on storage.objects;

create policy "contracts_owner_select" on storage.objects for select to authenticated
  using (bucket_id = 'contracts' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "contracts_owner_insert" on storage.objects for insert to authenticated
  with check (bucket_id = 'contracts' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "contracts_owner_update" on storage.objects for update to authenticated
  using (bucket_id = 'contracts' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "contracts_owner_delete" on storage.objects for delete to authenticated
  using (bucket_id = 'contracts' and (storage.foldername(name))[1] = auth.uid()::text);
