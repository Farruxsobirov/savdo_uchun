-- Nasiya Daftar — 2-yangilanish: har bir nasiya savdosi uchun hisoblash usuli.
-- Supabase → SQL Editor → New query → joylab "Run" bosing. Qayta ishga tushirish xavfsiz.
alter table public.sales
  add column if not exists schedule_mode text not null default 'fixed';

alter table public.sales drop constraint if exists sales_schedule_mode_check;
alter table public.sales
  add constraint sales_schedule_mode_check check (schedule_mode in ('fixed', 'recalc'));
