(() => {
"use strict";
/* ================= icons ================= */
const sv = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const I = {
  logo: sv('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H19v-5"/><path d="M8 8h7M8 12h5"/>'),
  chart: sv('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  users: sv('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"/>'),
  plus: sv('<path d="M12 5v14M5 12h14"/>'),
  wallet: sv('<path d="M3 7a2 2 0 0 1 2-2h13v4"/><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 13.5h2"/>'),
  box: sv('<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>'),
  gear: sv('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
  back: sv('<path d="M15 18l-6-6 6-6"/>'),
  next: sv('<path d="M9 18l6-6-6-6"/>'),
  x: sv('<path d="M18 6 6 18M6 6l12 12"/>'),
  phone: sv('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
  copy: sv('<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>'),
  camera: sv('<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'),
  trash: sv('<path d="M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>'),
  edit: sv('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>'),
  search: sv('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  eye: sv('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>'),
  clock: sv('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  alert: sv('<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>'),
  cart: sv('<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>'),
  userplus: sv('<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"/>'),
  coins: sv('<circle cx="8" cy="8" r="6"/><path d="M18.1 10.4A6 6 0 1 1 10.3 18"/><path d="M7 6h1v4"/>'),
  logout: sv('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>'),
  swap: sv('<path d="M7 7h11l-3-3M17 17H6l3 3"/>'),
  calendar: sv('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
  check: sv('<path d="M20 6 9 17l-5-5"/>'),
  file: sv('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>')
};

/* ================= helpers ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const pad = n => String(n).padStart(2, "0");
const toISO = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
const todayISO = () => toISO(new Date());
const MONTHS = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr","oktabr","noyabr","dekabr"];
const MSHORT = ["yan","fev","mar","apr","may","iyn","iyl","avg","sen","okt","noy","dek"];
const fmt = n => { const v = Math.round(+n || 0); const s = String(Math.abs(v)).replace(/\B(?=(\d{3})+(?!\d))/g, " "); return (v < 0 ? "−" : "") + s; };
const som = n => fmt(n) + " soʻm";
const digits = v => +(String(v || "").replace(/\D/g, "")) || 0;
const trim1 = n => (Math.round(n * 10) / 10).toString().replace(".", ",");
const compact = n => n >= 1e9 ? trim1(n / 1e9) + " mlrd" : n >= 1e6 ? trim1(n / 1e6) + " mln" : n >= 1e3 ? trim1(n / 1e3) + " ming" : String(Math.round(n));
function addMonths(iso, n) {
  const [y, m, d] = iso.split("-").map(Number);
  const t = new Date(y, m - 1 + n, 1);
  const last = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
  t.setDate(Math.min(d, last));
  return toISO(t);
}
function daysBetween(a, b) { const [y1,m1,d1] = a.split("-").map(Number), [y2,m2,d2] = b.split("-").map(Number); return Math.round((Date.UTC(y2,m2-1,d2) - Date.UTC(y1,m1-1,d1)) / 864e5); }
function fmtDate(iso, withYear) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-").map(Number);
  const yr = withYear || y !== new Date().getFullYear() ? " " + y : "";
  return d + "-" + MONTHS[m - 1] + yr;
}
function relDay(iso) {
  const T = todayISO(); const d = daysBetween(T, iso);
  if (d === 0) return "Bugun"; if (d === -1) return "Kecha"; if (d === 1) return "Ertaga";
  return fmtDate(iso);
}
const initials = c => ((c.first || "?")[0] + ((c.last || "")[0] || "")).toUpperCase();
const fullName = c => c ? [c.first, c.last].filter(Boolean).join(" ") : "Oʻchirilgan mijoz";
const ls = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
/* ================= sound ================= */
const SFX = { ctx: null, last: {} };
const soundOn = () => ls.get("nd.sound") !== "off";
function sfx(kind) {
  if (!soundOn()) return;
  const now = Date.now(); if (now - (SFX.last[kind] || 0) < 120) return; SFX.last[kind] = now;
  try {
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const ctx = SFX.ctx || (SFX.ctx = new AC());
    if (ctx.state === "suspended") ctx.resume();
    const t0 = ctx.currentTime + 0.005;
    const tone = (f, at, dur, vol, type, f2) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type || "sine"; o.frequency.setValueAtTime(f, t0 + at);
      if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + at + dur);
      g.gain.setValueAtTime(0.0001, t0 + at);
      g.gain.exponentialRampToValueAtTime(vol, t0 + at + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
      o.connect(g); g.connect(ctx.destination); o.start(t0 + at); o.stop(t0 + at + dur + 0.03);
    };
    if (kind === "tap") tone(1250, 0, 0.05, 0.045, "sine", 820);
    else if (kind === "ok") { tone(784, 0, 0.13, 0.08); tone(1175, 0.09, 0.22, 0.07); }
    else if (kind === "err") { tone(240, 0, 0.15, 0.08, "triangle", 170); tone(200, 0.13, 0.2, 0.07, "triangle", 150); }
    else if (kind === "del") tone(560, 0, 0.16, 0.07, "sine", 240);
  } catch (e) {}
}
document.addEventListener("pointerdown", e => {
  if (e.target.closest("button:not(:disabled), a[href], .chip, .dd-opt, label.thumb, .seg label, .minichips button, summary")) sfx("tap");
}, true);
function toast(msg) {
  if (/oʻchirildi/i.test(msg)) sfx("del");
  else if (/qoʻshildi|yangilandi|saqlandi|saqlandi|kiritildi|oʻzgartirildi|tugadi/i.test(msg)) sfx("ok");
  const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("on"), 2200); }
async function copyText(txt) {
  try { await navigator.clipboard.writeText(txt); toast("Nusxa olindi"); }
  catch (e) { toast(txt); }
}

/* ================= theme ================= */
const hostTheme = document.documentElement.getAttribute("data-theme");
function applyTheme() {
  const t = ls.get("nd.theme") || "auto";
  if (t === "auto") { if (hostTheme) document.documentElement.setAttribute("data-theme", hostTheme); else document.documentElement.removeAttribute("data-theme"); }
  else document.documentElement.setAttribute("data-theme", t);
}
applyTheme();

/* ================= state ================= */
const S = {
  sb: null, user: null,
  customers: new Map(), products: new Map(), sales: new Map(), payments: new Map(),
  loaded: { customers: false, products: false, sales: false, payments: false },
  view: "stats", cid: null,
  period: "month", cFilter: "all", cQuery: "", pQuery: "", payFilter: "month",
  payTab: "in", dueFilter: "today", dueFrom: "", dueTo: "", anim: true,
  calc: null
};
const BUCKET = "contracts";
const TABLES = ["customers", "products", "sales", "payments"];

/* ================= Supabase data layer ================= */
const snake = k => k.replace(/[A-Z]/g, m => "_" + m.toLowerCase());
const camel = k => k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
function toRow(obj) { const r = {}; for (const [k, v] of Object.entries(obj)) if (k !== "id" && v !== undefined) r[snake(k)] = v; return r; }
function fromRow(row) { const o = {}; for (const [k, v] of Object.entries(row)) if (k !== "owner") o[camel(k)] = v; return o; }
async function q(p) { const { data, error } = await p; if (error) throw error; return data; }
function cascadeLocal(table, id) {
  if (table === "customers") {
    for (const s of [...S.sales.values()]) if (s.customerId === id) S.sales.delete(s.id);
    for (const p of [...S.payments.values()]) if (p.customerId === id) S.payments.delete(p.id);
  }
  if (table === "sales") for (const p of [...S.payments.values()]) if (p.saleId === id) S.payments.delete(p.id);
}
const missingMode = e => /schedule_mode/i.test(String(e && e.message));
async function put(table, id, obj) {
  let row;
  try { row = await q(S.sb.from(table).upsert({ id, ...toRow(obj) }).select().single()); }
  catch (e) {
    if (!(table === "sales" && missingMode(e))) throw e;
    const { scheduleMode, ...rest } = obj;   // baza hali yangilanmagan: usulsiz saqlaymiz
    row = await q(S.sb.from(table).upsert({ id, ...toRow(rest) }).select().single());
    setTimeout(() => toast("Hisoblash usuli saqlanmadi: Supabase'da 002 SQL'ni ishga tushiring"), 2400);
  }
  S[table].set(id, fromRow(row)); schedule();
}
async function patch(table, id, part) {
  const row = await q(S.sb.from(table).update(toRow(part)).eq("id", id).select().single());
  S[table].set(id, fromRow(row)); schedule();
}
async function del(table, id) {
  await q(S.sb.from(table).delete().eq("id", id));
  S[table].delete(id); cascadeLocal(table, id); schedule();
}
async function fetchAll(table) {
  const out = [];
  for (let from = 0; ; from += 1000) {
    const rows = await q(S.sb.from(table).select("*").order("id").range(from, from + 999));
    out.push(...rows); if (rows.length < 1000) break;
  }
  return out;
}
async function loadAll() {
  const res = await Promise.all(TABLES.map(fetchAll));
  TABLES.forEach((t, i) => { S[t] = new Map(res[i].map(r => { const o = fromRow(r); return [o.id, o]; })); S.loaded[t] = true; });
  if (!S.firstLoaded) { S.firstLoaded = true; S.anim = true; }
  S.lastLoad = Date.now(); schedule();
}
const app = $("#app");

/* ================= computations ================= */
/* Nasiya grafigi.
   fixed  — belgilangan: har oy bir xil summa; ortiqcha toʻlov keyingi oylarni yopadi.
   recalc — qayta hisoblash: oy boshida mijoz grafikdan oldinda boʻlsa, qoldiq qolgan oylarga teng boʻlinadi;
            kam toʻlansa summa oʻzgarmaydi va yetmagani "kechikkan" boʻlib qoladi. */
function buildSchedule(s, pays) {
  const total = +s.total || 0, n = Math.max(1, +s.months || 1), down = Math.min(+s.down || 0, total);
  const base = +s.monthly || calcMonthly(total - down, n);
  const recalc = s.scheduleMode === "recalc";
  const sorted = pays.slice().sort((a, b) => (a.date || "").localeCompare(b.date || ""));
  const paidBefore = d => { let x = 0; for (const p of sorted) { if ((p.date || "") >= d) break; x += +p.amount || 0; } return x; };
  const sched = []; let prev = down, cur = base;
  for (let i = 0; i < n; i++) {
    const due = addMonths(s.firstDue || s.date, i);
    if (recalc && i > 0) {
      const P = Math.min(total, paidBefore(due));
      if (P > prev + 0.5) { prev = P; cur = calcMonthly(total - P, n - i); }
    }
    const cum = i === n - 1 ? total : Math.min(total, prev + cur);
    sched.push({ i, due, amt: Math.max(0, cum - prev), prev, cum });
    prev = cum;
  }
  return sched;
}
function compute() {
  const T = todayISO();
  const paysBySale = new Map();
  for (const p of S.payments.values()) { const a = paysBySale.get(p.saleId); if (a) a.push(p); else paysBySale.set(p.saleId, [p]); }
  const sale = new Map();
  for (const s of S.sales.values()) {
    const pays = paysBySale.get(s.id) || [];
    const total = +s.total || 0, paid = pays.reduce((a, p) => a + (+p.amount || 0), 0);
    const info = { s, total, paid, remaining: Math.max(0, total - paid), overdue: 0, next: null, lateDays: 0, sched: [], monthlyNow: +s.monthly || 0 };
    if (s.type === "credit") {
      const sched = buildSchedule(s, pays);
      let expectedPast = Math.min(+s.down || 0, total), firstLate = null;
      for (const x of sched) {
        if (paid >= x.cum - 0.5) x.st = "paid";
        else if (x.due < T) x.st = "late";
        else if (paid > x.prev + 0.5) x.st = "part";
        else x.st = "wait";
        x.left = x.st === "paid" ? 0 : Math.max(0, x.cum - Math.max(paid, x.prev));
        if (x.due < T) expectedPast = x.cum;
        if (x.st === "late" && !firstLate) firstLate = x.due;
        if (x.st !== "paid" && x.due >= T && !info.next) info.next = { due: x.due, amount: x.left, i: x.i };
      }
      info.sched = sched;
      info.overdue = Math.max(0, expectedPast - paid);
      if (firstLate) info.lateDays = daysBetween(firstLate, T);
      const nx = sched.find(x => x.due >= T && x.st !== "paid" && x.amt > 0.5) || sched.find(x => x.due >= T && x.amt > 0.5);
      if (nx) info.monthlyNow = nx.amt;
    }
    sale.set(s.id, info);
  }
  const cust = new Map();
  for (const c of S.customers.values()) cust.set(c.id, { c, sales: [], total: 0, paid: 0, debt: 0, overdue: 0, lateDays: 0, next: null, status: "new" });
  for (const info of sale.values()) {
    const a = cust.get(info.s.customerId); if (!a) continue;
    a.sales.push(info); a.total += info.total; a.paid += info.paid; a.debt += info.remaining; a.overdue += info.overdue;
    a.lateDays = Math.max(a.lateDays, info.lateDays);
    if (info.next && info.remaining > 0 && (!a.next || info.next.due < a.next.due)) a.next = { ...info.next, saleId: info.s.id };
  }
  for (const a of cust.values()) {
    a.status = a.debt > 0.5 ? (a.overdue > 0.5 ? "late" : "debt") : (a.sales.length ? "closed" : "new");
    a.sales.sort((x, y) => (y.s.date || "").localeCompare(x.s.date || ""));
  }
  S.calc = { sale, cust, T };
}
const STATUS = { late: "Muddati oʻtgan", debt: "Qarzdor", closed: "Yopilgan", new: "Yangi" };
const SCHED = { paid: "Toʻlangan", late: "Kechikkan", part: "Qisman", wait: "Kutilmoqda" };
const METHOD = { cash: "Naqd", card: "Karta", transfer: "Oʻtkazma" };
const KIND = { full: "Naqd savdo", down: "Boshlangʻich toʻlov", regular: "Oylik toʻlov" };
const MODE = { fixed: "Belgilangan", recalc: "Qayta hisoblash" };
const MODE_HINT = {
  fixed: "Har oy bir xil summa. Ortiqcha toʻlov keyingi oylarni yopadi.",
  recalc: "Ortiqcha toʻlansa, qoldiq qolgan oylarga teng boʻlinadi. Kam toʻlansa, yetmagani kechikkan boʻladi."
};
const defaultMode = () => ls.get("nd.mode") === "recalc" ? "recalc" : "fixed";

/* ================= render scheduling ================= */
let rq = 0;
function schedule() { if (rq) return; rq = requestAnimationFrame(() => { rq = 0; if (S.authed) render(); }); }
function allLoaded() { return Object.values(S.loaded).every(Boolean); }

function route() {
  const h = decodeURIComponent(location.hash.slice(1));
  if (h.startsWith("c-")) { S.view = "client"; S.cid = h.slice(2); }
  else S.view = ["stats", "clients", "payments", "products"].includes(h) ? h : "stats";
  S.anim = true;
  if (S.authed) { render(); window.scrollTo(0, 0); }
}
window.addEventListener("hashchange", route);

/* ================= shell ================= */
function shell() {
  if ($("#main")) return;
  app.innerHTML = `
  <header class="topbar"><div class="topbar-in">
    <div class="brand"><div class="brand-mark">${I.logo}</div><div style="min-width:0"><b>Nasiya Daftar</b><small id="today-lbl"></small></div></div>
    <button class="icon-btn" data-act="settings" aria-label="Sozlamalar">${I.gear}</button>
  </div></header>
  <main id="main"></main>
  <nav class="nav" aria-label="Boʻlimlar"><div class="nav-in">
    <a href="#stats" data-tab="stats">${I.chart}<span>Statistika</span></a>
    <a href="#clients" data-tab="clients">${I.users}<span>Mijozlar</span></a>
    <button class="fab" data-act="quick" aria-label="Qoʻshish">${I.plus}</button>
    <a href="#payments" data-tab="payments">${I.wallet}<span>Toʻlovlar</span></a>
    <a href="#products" data-tab="products">${I.box}<span>Mahsulotlar</span></a>
  </div></nav>`;
  const d = new Date();
  $("#today-lbl").textContent = d.getDate() + "-" + MONTHS[d.getMonth()] + ", " + ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"][d.getDay()];
}

function render() {
  shell();
  const main = $("#main");
  const tab = S.view === "client" ? "clients" : S.view;
  $$(".nav a").forEach(a => { if (a.dataset.tab === tab) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  if (!allLoaded()) { main.innerHTML = `<div class="skel"></div><div class="skel"></div><div class="skel"></div>`; return; }
  compute();
  const active = document.activeElement, aid = active && active.id, sel = active && active.selectionStart;
  if (S.view === "stats") main.innerHTML = viewStats();
  else if (S.view === "clients") { main.innerHTML = viewClients(); renderClientList(); }
  else if (S.view === "client") { main.innerHTML = viewClient(); hydrateImgs(main); }
  else if (S.view === "payments") main.innerHTML = viewPayments();
  else if (S.view === "products") { main.innerHTML = viewProducts(); renderProductList(); }
  if (S.anim) { S.anim = false; playEnter(main); } else main.classList.remove("enter");
  if (aid && $("#" + aid) && aid.startsWith("q-")) { const el = $("#" + aid); el.focus(); try { el.setSelectionRange(sel, sel); } catch (e) {} }
}

/* ================= animation ================= */
const reduceMotion = () => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } };
function countUp(el) {
  const to = +el.dataset.count || 0, f = el.dataset.f === "compact" ? compact : fmt;
  if (to <= 0 || reduceMotion()) return;
  const t0 = performance.now(), D = 800;
  el.textContent = f(0);
  const step = now => {
    if (!el.isConnected) return;
    const k = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - k, 3);
    el.textContent = f(k < 1 ? to * e : to);
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function playEnter(main) {
  clearTimeout(playEnter._t);
  main.classList.remove("enter"); void main.offsetWidth;
  [...main.children].forEach((el, i) => el.style.setProperty("--i", Math.min(i, 10)));
  $$(".cards, .rows", main).forEach(list => [...list.children].forEach((el, j) => el.style.setProperty("--j", Math.min(j, 14))));
  $$(".chart-wrap svg", main).forEach(svg => $$("rect", svg).forEach((r, k) => r.style.setProperty("--k", Math.floor(k / 2))));
  main.classList.add("enter");
  $$("[data-count]", main).forEach(countUp);
  playEnter._t = setTimeout(() => main.classList.remove("enter"), 1600);
}

/* ================= STATS ================= */
function periodRange(p) {
  const d = new Date(), y = d.getFullYear(), m = d.getMonth();
  if (p === "month") return [toISO(new Date(y, m, 1)), toISO(new Date(y, m + 1, 0))];
  if (p === "prev") return [toISO(new Date(y, m - 1, 1)), toISO(new Date(y, m, 0))];
  if (p === "year") return [y + "-01-01", y + "-12-31"];
  return ["0000-01-01", "9999-12-31"];
}
function viewStats() {
  const { cust, sale, T } = S.calc;
  const [from, to] = periodRange(S.period);
  const inP = d => d >= from && d <= to;
  let salesSum = 0, cashSum = 0, creditSum = 0, nSales = 0, collected = 0;
  for (const s of S.sales.values()) if (inP(s.date || "")) { nSales++; salesSum += +s.total || 0; if (s.type === "credit") creditSum += +s.total || 0; else cashSum += +s.total || 0; }
  for (const p of S.payments.values()) if (inP(p.date || "")) collected += +p.amount || 0;
  let debt = 0, overdue = 0, nDebt = 0, nLate = 0;
  for (const a of cust.values()) { debt += a.debt; overdue += a.overdue; if (a.status === "debt" || a.status === "late") nDebt++; if (a.status === "late") nLate++; }
  const cashPct = salesSum ? cashSum / salesSum * 100 : 0;

  // 6 months chart
  const months = []; const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const dt = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = dt.getFullYear() + "-" + pad(dt.getMonth() + 1);
    months.push({ key, label: MSHORT[dt.getMonth()], sales: 0, paid: 0 });
  }
  const mIdx = new Map(months.map((m, i) => [m.key, i]));
  for (const s of S.sales.values()) { const i = mIdx.get((s.date || "").slice(0, 7)); if (i != null) months[i].sales += +s.total || 0; }
  for (const p of S.payments.values()) { const i = mIdx.get((p.date || "").slice(0, 7)); if (i != null) months[i].paid += +p.amount || 0; }

  const late = [...cust.values()].filter(a => a.status === "late").sort((a, b) => b.lateDays - a.lateDays || b.overdue - a.overdue);
  const week = addMonths(T, 0); const lim = toISO(new Date(Date.now() + 7 * 864e5));
  const upcoming = [...cust.values()].filter(a => a.next && a.status === "debt" && a.next.due <= lim).sort((a, b) => a.next.due.localeCompare(b.next.due));
  const top = [...cust.values()].filter(a => a.debt > 0.5).sort((a, b) => b.debt - a.debt).slice(0, 5);
  const todayPays = [...S.payments.values()].filter(p => p.date === T);
  const todaySum = todayPays.reduce((s, p) => s + (+p.amount || 0), 0);
  const P = { month: "Bu oy", prev: "Oʻtgan oy", year: "Bu yil", all: "Hammasi" };

  if (!S.customers.size && !S.products.size) {
    return `<div class="view-h"><div><h1>Xush kelibsiz</h1><p>Daftar hozircha boʻsh</p></div></div>
    <div class="panel"><div class="empty">${I.logo}<b>Ishni mahsulot va mijozdan boshlang</b><span>Avval sotiladigan mahsulotlarni kiriting, keyin mijoz qoʻshib, unga savdo rasmiylashtiring.</span>
    <div class="btn-row" style="width:100%;max-width:360px"><button class="btn sec" data-act="new-product">${I.box} Mahsulot</button><button class="btn" data-act="new-client">${I.userplus} Mijoz</button></div></div></div>`;
  }

  return `
  <div class="view-h"><div><h1>Statistika</h1><p>${esc(P[S.period])} boʻyicha koʻrsatkichlar</p></div></div>
  <div class="chips" role="group" aria-label="Davr">${Object.entries(P).map(([k, v]) => `<button class="chip" data-act="period" data-v="${k}" aria-pressed="${S.period === k}">${v}</button>`).join("")}</div>
  <div class="kpis">
    <div class="kpi hero"><span class="label">Tushgan pul</span><div class="v num"><span data-count="${collected}">${fmt(collected)}</span><small>soʻm</small></div><span class="sub">Bugun: ${som(todaySum)} · ${todayPays.length} ta toʻlov</span></div>
    <div class="kpi"><span class="label">Savdo hajmi</span><div class="v num"><span data-count="${salesSum}" data-f="compact">${compact(salesSum)}</span></div><span class="sub">${nSales} ta savdo</span></div>
    <div class="kpi warn"><span class="label">Umumiy qarz</span><div class="v num"><span data-count="${debt}" data-f="compact">${compact(debt)}</span></div><span class="sub">${nDebt} ta mijozda</span></div>
    <div class="kpi bad"><span class="label">Muddati oʻtgan</span><div class="v num"><span data-count="${overdue}" data-f="compact">${compact(overdue)}</span></div><span class="sub">${nLate} ta mijoz</span></div>
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Naqd va nasiya</h2><span class="meta num">${som(salesSum)}</span></div>
    <div class="split" aria-hidden="true"><i style="width:${cashPct}%;background:var(--teal)"></i><i style="width:${salesSum ? 100 - cashPct : 0}%;background:var(--accent)"></i></div>
    <div class="legend" style="margin-top:10px"><span><i style="background:var(--teal)"></i>Naqd: <b class="num">${som(cashSum)}</b></span><span><i style="background:var(--accent)"></i>Nasiya: <b class="num">${som(creditSum)}</b></span></div>
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Soʻnggi 6 oy</h2><div class="legend"><span><i style="background:var(--accent)"></i>Savdo</span><span><i style="background:var(--teal)"></i>Tushum</span></div></div>
    <div class="chart-wrap">${chartSVG(months)}</div>
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Muddati oʻtganlar</h2><span class="meta">${late.length} ta</span></div>
    ${late.length ? `<div class="rows">${late.slice(0, 8).map(a => `<a class="row" href="#c-${a.c.id}"><div class="ava late">${esc(initials(a.c))}</div><div class="grow"><div class="t">${esc(fullName(a.c))}</div><div class="s">${a.lateDays} kun kechikkan</div></div><div class="amt" style="color:var(--bad)">${fmt(a.overdue)}<small>soʻm</small></div></a>`).join("")}</div>` : `<div class="hint">Kechikkan toʻlovlar yoʻq.</div>`}
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Yaqin 7 kunda toʻlov</h2><button class="link-btn" data-act="goto-due">Hammasi →</button></div>
    ${upcoming.length ? `<div class="rows">${upcoming.slice(0, 8).map(a => `<a class="row" href="#c-${a.c.id}"><div class="ava debt">${esc(initials(a.c))}</div><div class="grow"><div class="t">${esc(fullName(a.c))}</div><div class="s">${relDay(a.next.due)}</div></div><div class="amt">${fmt(a.next.amount)}<small>soʻm</small></div></a>`).join("")}</div>` : `<div class="hint">Bu hafta kutilayotgan toʻlov yoʻq.</div>`}
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Eng katta qarzdorlar</h2></div>
    ${top.length ? `<div class="rows">${top.map(a => `<a class="row" href="#c-${a.c.id}"><div class="ava ${a.status}">${esc(initials(a.c))}</div><div class="grow"><div class="t">${esc(fullName(a.c))}</div><div class="s">Toʻlagan: ${som(a.paid)}</div></div><div class="amt">${fmt(a.debt)}<small>soʻm</small></div></a>`).join("")}</div>` : `<div class="hint">Qarzdor mijozlar yoʻq.</div>`}
  </div>`;
}
function niceMax(v) { if (v <= 0) return 1; const p = 10 ** Math.floor(Math.log10(v)); const n = v / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p; }
function chartSVG(months) {
  const W = 340, H = 196, L = 46, R = 6, T = 12, B = 28, iw = W - L - R, ih = H - T - B;
  const max = niceMax(Math.max(0, ...months.flatMap(m => [m.sales, m.paid])));
  const gw = iw / months.length, bw = Math.min(16, (gw - 12) / 2);
  let g = "";
  [0, 0.5, 1].forEach(f => { const y = T + ih - ih * f; g += `<line class="grid" x1="${L}" x2="${W - R}" y1="${y}" y2="${y}"/><text class="ax" x="${L - 6}" y="${y + 3}" text-anchor="end">${f ? compact(max * f) : "0"}</text>`; });
  months.forEach((m, i) => {
    const cx = L + i * gw + gw / 2, last = i === months.length - 1;
    const hs = ih * m.sales / max, hp = ih * m.paid / max;
    if (hs > 0) g += `<rect x="${cx - bw - 1}" y="${T + ih - hs}" width="${bw}" height="${hs}" rx="3" fill="var(--accent)" opacity="${last ? 1 : .8}"><title>Savdo: ${som(m.sales)}</title></rect>`;
    if (hp > 0) g += `<rect x="${cx + 1}" y="${T + ih - hp}" width="${bw}" height="${hp}" rx="3" fill="var(--teal)" opacity="${last ? 1 : .8}"><title>Tushum: ${som(m.paid)}</title></rect>`;
    g += `<text class="ax${last ? " now" : ""}" x="${cx}" y="${H - 8}" text-anchor="middle">${m.label}</text>`;
  });
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Oxirgi 6 oy savdo va tushum">${g}</svg>`;
}

/* ================= CLIENTS ================= */
function viewClients() {
  const { cust } = S.calc; const cnt = { all: cust.size, late: 0, debt: 0, closed: 0 };
  for (const a of cust.values()) { if (a.status === "late") cnt.late++; if (a.status === "debt" || a.status === "late") cnt.debt++; if (a.status === "closed") cnt.closed++; }
  const F = { all: "Hammasi", debt: "Qarzdor", late: "Muddati oʻtgan", closed: "Yopilgan" };
  return `<div class="view-h"><div><h1>Mijozlar</h1><p>${cust.size} ta mijoz</p></div><button class="btn sm" data-act="new-client">${I.plus} Mijoz</button></div>
  <label class="search">${I.search}<input id="q-clients" type="search" placeholder="Ism, familiya yoki telefon" value="${esc(S.cQuery)}" autocomplete="off" aria-label="Mijoz qidirish"></label>
  <div class="chips" role="group" aria-label="Holat">${Object.entries(F).map(([k, v]) => `<button class="chip" data-act="cfilter" data-v="${k}" aria-pressed="${S.cFilter === k}">${v} <span class="cnt">${cnt[k]}</span></button>`).join("")}</div>
  <div id="clist" class="cards"></div>`;
}
function renderClientList() {
  const box = $("#clist"); if (!box) return;
  const q = S.cQuery.trim().toLowerCase(), qd = q.replace(/\D/g, "");
  let list = [...S.calc.cust.values()].filter(a => {
    if (S.cFilter === "late" && a.status !== "late") return false;
    if (S.cFilter === "debt" && !(a.status === "debt" || a.status === "late")) return false;
    if (S.cFilter === "closed" && a.status !== "closed") return false;
    if (!q) return true;
    if (fullName(a.c).toLowerCase().includes(q)) return true;
    return qd.length >= 2 && (a.c.phones || []).some(p => String(p.number || "").replace(/\D/g, "").includes(qd));
  });
  const rank = { late: 0, debt: 1, new: 2, closed: 3 };
  list.sort((a, b) => rank[a.status] - rank[b.status] || b.debt - a.debt || fullName(a.c).localeCompare(fullName(b.c)));
  if (!list.length) {
    box.innerHTML = S.customers.size ? `<div class="panel"><div class="empty">${I.search}<b>Topilmadi</b><span>Qidiruv yoki filtrni oʻzgartiring.</span></div></div>`
      : `<div class="panel"><div class="empty">${I.users}<b>Hali mijoz yoʻq</b><span>Birinchi mijozni qoʻshing: ism, telefon, manzil va shartnoma rasmi.</span><button class="btn" data-act="new-client">${I.userplus} Mijoz qoʻshish</button></div></div>`;
    return;
  }
  box.innerHTML = list.map(a => {
    const ph = (a.c.phones || [])[0]; const pct = a.total ? Math.min(100, a.paid / a.total * 100) : 0;
    return `<a class="ccard" href="#c-${a.c.id}">
      <div class="top"><div class="ava ${a.status}">${esc(initials(a.c))}</div>
        <div style="flex:1;min-width:0"><div class="t" style="font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(fullName(a.c))}</div><div style="font-size:13px;color:var(--muted)" class="num">${ph ? esc(ph.number) : "Telefon yoʻq"}</div></div>
        <span class="pill ${a.status}">${STATUS[a.status]}</span></div>
      ${a.total ? `<div class="bar"><i style="width:${pct}%"></i></div>
      <div class="foot"><span>Qarz: <b class="num" style="color:var(--fg)">${som(a.debt)}</b></span><span>${a.status === "late" ? `<b style="color:var(--bad)">${a.lateDays} kun kechikkan</b>` : a.next ? "Keyingi: " + relDay(a.next.due) : "Toʻlangan " + Math.round(pct) + "%"}</span></div>` : ""}
    </a>`;
  }).join("");
}

/* ================= CLIENT DETAIL ================= */
function viewClient() {
  const a = S.calc.cust.get(S.cid);
  if (!a) return `<a class="back" href="#clients">${I.back} Mijozlar</a><div class="panel"><div class="empty"><b>Mijoz topilmadi</b><span>U oʻchirilgan boʻlishi mumkin.</span></div></div>`;
  const c = a.c, pct = a.total ? Math.min(100, a.paid / a.total * 100) : 0;
  const pays = [...S.payments.values()].filter(p => p.customerId === c.id).sort((x, y) => (y.date + y.createdAt).localeCompare(x.date + x.createdAt));
  const contracts = c.contracts || [];
  let nextHtml = "";
  if (a.overdue > 0.5) nextHtml = `<div class="next late">${I.alert}<span><b class="num">${som(a.overdue)}</b> toʻlov ${a.lateDays} kun kechikkan</span></div>`;
  else if (a.next) nextHtml = `<div class="next">${I.clock}<span>Keyingi toʻlov: <b>${relDay(a.next.due)}</b>, <b class="num">${som(a.next.amount)}</b></span></div>`;
  return `<a class="back" href="#clients">${I.back} Mijozlar</a>
  <div class="c-head"><div class="ava ${a.status}">${esc(initials(c))}</div><div style="min-width:0"><h1>${esc(fullName(c))}</h1><span class="pill ${a.status}" style="margin-top:6px">${STATUS[a.status]}</span></div></div>
  <div class="c-actions">
    <button class="btn" data-act="new-payment" data-cid="${c.id}" ${a.debt > 0.5 ? "" : "disabled"}>${I.coins} Toʻlov</button>
    <button class="btn sec" data-act="new-sale" data-cid="${c.id}">${I.cart} Savdo</button>
    <button class="icon-btn" data-act="edit-client" data-cid="${c.id}" aria-label="Tahrirlash">${I.edit}</button>
  </div>
  <div class="panel">
    <div class="stat3">
      <div><span class="label">Jami</span><b data-count="${a.total}">${fmt(a.total)}</b></div>
      <div><span class="label">Toʻlagan</span><b style="color:var(--good)" data-count="${a.paid}">${fmt(a.paid)}</b></div>
      <div><span class="label">Qarz</span><b style="color:${a.debt > 0.5 ? "var(--warn)" : "var(--fg)"}" data-count="${a.debt}">${fmt(a.debt)}</b></div>
    </div>
    <div class="progress" aria-label="Toʻlangan ${Math.round(pct)}%"><i style="width:${pct}%"></i></div>
    ${nextHtml}
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Telefonlar</h2></div>
    ${(c.phones || []).length ? (c.phones).map(p => `<div class="phone"><div class="grow"><div class="n">${esc(p.number)}</div><div class="k">${esc(p.label || "Telefon")}</div></div>
      <button class="icon-btn" data-act="copy" data-v="${esc(p.number)}" aria-label="Nusxa olish">${I.copy}</button>
      <a class="icon-btn" href="tel:${esc(String(p.number).replace(/[^\d+]/g, ""))}" aria-label="Qoʻngʻiroq">${I.phone}</a></div>`).join("") : `<div class="hint">Telefon kiritilmagan.</div>`}
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Manzillar</h2></div>
    <div class="addr"><span class="label">Doimiy yashash manzili</span><p>${esc(c.homeAddr) || "—"}</p></div>
    <div class="addr"><span class="label">Ish joyi manzili</span><p>${esc(c.workAddr) || "—"}</p></div>
    ${c.note ? `<div class="addr"><span class="label">Izoh</span><p>${esc(c.note)}</p></div>` : ""}
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Shartnoma rasmlari</h2><span class="meta">${contracts.length} ta</span></div>
    <div class="gallery" id="gallery">
      ${contracts.map((k, i) => `<button class="thumb" data-act="view-img" data-cid="${c.id}" data-i="${i}" aria-label="Shartnoma ${i + 1}">${k.type === "application/pdf" ? `<span class="pdf">PDF</span>` : `<img data-path="${esc(k.path || "")}" alt="" loading="lazy">`}</button>`).join("")}
      ${S.sb ? `<label class="thumb add">${I.camera}<span>Qoʻshish</span><input type="file" accept="image/*,application/pdf" multiple hidden data-upload="${c.id}"></label>` : ""}
    </div>
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Savdolar</h2><span class="meta">${a.sales.length} ta</span></div>
    ${a.sales.length ? a.sales.map(saleCard).join("") : `<div class="empty" style="padding:12px">${I.cart}<span>Bu mijozga hali savdo qilinmagan.</span><button class="btn sm" data-act="new-sale" data-cid="${c.id}">Savdo qoʻshish</button></div>`}
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Toʻlovlar tarixi</h2><span class="meta num">${pays.length} ta</span></div>
    ${pays.length ? `<div class="rows">${pays.map(p => `<button class="row" data-act="edit-payment" data-id="${p.id}"><div class="grow"><div class="t num">${som(p.amount)}</div><div class="s">${fmtDate(p.date, true)} · ${METHOD[p.method] || "Naqd"} · ${KIND[p.kind] || "Toʻlov"}${p.note ? " · " + esc(p.note) : ""}</div></div><span style="color:var(--muted);width:18px;display:grid">${I.next}</span></button>`).join("")}</div>` : `<div class="hint">Toʻlovlar yoʻq.</div>`}
  </div>`;
}
function saleCard(info) {
  const s = info.s; const items = (s.items || []).map(i => `${esc(i.name)}${i.qty > 1 ? " × " + i.qty : ""}`).join(", ");
  const st = info.remaining <= 0.5 ? ["paid", "Toʻlangan"] : info.overdue > 0.5 ? ["late", "Kechikkan"] : ["debt", "Davom etmoqda"];
  return `<div class="sale">
    <div class="sh"><div style="min-width:0"><b class="num">${som(info.total)}</b><span class="hint">${fmtDate(s.date, true)} · ${s.type === "credit" ? `Nasiya, ${s.months} oy` : "Naqd"}</span></div><span class="pill ${st[0]}">${st[1]}</span></div>
    <div class="items">${items || "—"}</div>
    ${s.type === "credit" ? `<div class="summary">
      <div class="r"><span>Boshlangʻich</span><b>${som(s.down)}</b></div>
      <div class="r"><span>Oylik toʻlov</span><b>${som(info.monthlyNow)}${s.scheduleMode === "recalc" && Math.abs(info.monthlyNow - s.monthly) > 0.5 ? ` <small style="font-weight:400;color:var(--muted)">(dastlab ${fmt(s.monthly)})</small>` : ""}</b></div>
      <div class="r"><span>Hisoblash</span><button type="button" class="mode-btn" data-act="toggle-mode" data-id="${s.id}" aria-label="Hisoblash usulini almashtirish">${MODE[s.scheduleMode === "recalc" ? "recalc" : "fixed"]} ${I.swap}</button></div>
      <div class="r"><span>Toʻlangan</span><b style="color:var(--good)">${som(info.paid)}</b></div>
      <div class="r big"><span>Qoldiq</span><b>${som(info.remaining)}</b></div></div>
    <details><summary>Toʻlov grafigi (${info.sched.filter(x => x.st === "paid").length}/${info.sched.length})</summary>
      <div class="tbl-wrap"><table class="sched"><tbody>${info.sched.map(x => `<tr><td>${x.i + 1}.</td><td>${fmtDate(x.due, true)}</td><td>${fmt(x.amt)}</td><td><span class="pill ${x.st}">${SCHED[x.st]}</span></td></tr>`).join("")}</tbody></table></div></details>` : ""}
    <div style="display:flex;justify-content:flex-end"><button class="link-btn" data-act="del-sale" data-id="${s.id}" style="color:var(--bad)">Savdoni oʻchirish</button></div>
  </div>`;
}

/* ================= PAYMENTS ================= */
function payTabs() {
  return `<div class="tabseg" role="tablist" aria-label="Toʻlovlar">
    <button role="tab" data-act="paytab" data-v="in" aria-selected="${S.payTab !== "due"}">Tushganlar</button>
    <button role="tab" data-act="paytab" data-v="due" aria-selected="${S.payTab === "due"}">Kutilayotgan</button></div>`;
}
function viewPayments() {
  if (S.payTab === "due") return viewDue();
  const T = todayISO(); const d = new Date();
  const ranges = {
    today: [T, T],
    week: [toISO(new Date(d.getFullYear(), d.getMonth(), d.getDate() - ((d.getDay() + 6) % 7))), T],
    month: [toISO(new Date(d.getFullYear(), d.getMonth(), 1)), toISO(new Date(d.getFullYear(), d.getMonth() + 1, 0))],
    all: ["0000-01-01", "9999-12-31"]
  };
  const F = { today: "Bugun", week: "Bu hafta", month: "Bu oy", all: "Hammasi" };
  const [from, to] = ranges[S.payFilter];
  const list = [...S.payments.values()].filter(p => p.date >= from && p.date <= to).sort((x, y) => (y.date + (y.createdAt || "")).localeCompare(x.date + (x.createdAt || "")));
  const sum = list.reduce((s, p) => s + (+p.amount || 0), 0);
  const byM = { cash: 0, card: 0, transfer: 0 }; list.forEach(p => byM[p.method || "cash"] = (byM[p.method || "cash"] || 0) + (+p.amount || 0));
  const groups = []; let cur = null;
  for (const p of list) { if (!cur || cur.date !== p.date) { cur = { date: p.date, items: [], sum: 0 }; groups.push(cur); } cur.items.push(p); cur.sum += +p.amount || 0; }
  return `<div class="view-h"><div><h1>Toʻlovlar</h1><p>Kiritilgan barcha toʻlovlar</p></div><button class="btn sm" data-act="new-payment">${I.plus} Toʻlov</button></div>
  ${payTabs()}
  <div class="chips" role="group" aria-label="Davr">${Object.entries(F).map(([k, v]) => `<button class="chip" data-act="payfilter" data-v="${k}" aria-pressed="${S.payFilter === k}">${v}</button>`).join("")}</div>
  <div class="kpis"><div class="kpi hero"><span class="label">${F[S.payFilter]} tushgan</span><div class="v num"><span data-count="${sum}">${fmt(sum)}</span><small>soʻm</small></div><span class="sub">${list.length} ta toʻlov · Naqd ${compact(byM.cash)} · Karta ${compact(byM.card)} · Oʻtkazma ${compact(byM.transfer)}</span></div></div>
  <div class="panel">${groups.length ? groups.map(g => `<div class="day-h"><span>${relDay(g.date)}${g.date.slice(0, 4) != new Date().getFullYear() ? " " + g.date.slice(0, 4) : ""}</span><span class="num">${fmt(g.sum)}</span></div>
    <div class="rows">${g.items.map(p => { const c = S.customers.get(p.customerId); return `<button class="row" data-act="edit-payment" data-id="${p.id}"><div class="ava">${c ? esc(initials(c)) : "?"}</div><div class="grow"><div class="t">${esc(fullName(c))}</div><div class="s">${METHOD[p.method] || "Naqd"} · ${KIND[p.kind] || "Toʻlov"}</div></div><div class="amt num">${fmt(p.amount)}<small>soʻm</small></div></button>`; }).join("")}</div>`).join("")
    : `<div class="empty">${I.wallet}<b>Bu davrda toʻlov yoʻq</b><span>Mijoz pul olib kelganda “Toʻlov” tugmasini bosing.</span></div>`}</div>`;
}

/* ================= DUE (kutilayotgan) ================= */
function dueRange() {
  const T = todayISO(), d = new Date(), y = d.getFullYear(), m = d.getMonth(), dd = d.getDate();
  switch (S.dueFilter) {
    case "tomorrow": { const t = toISO(new Date(y, m, dd + 1)); return [t, t]; }
    case "week": { const mon = dd - ((d.getDay() + 6) % 7); return [toISO(new Date(y, m, mon)), toISO(new Date(y, m, mon + 6))]; }
    case "month": return [toISO(new Date(y, m, 1)), toISO(new Date(y, m + 1, 0))];
    case "custom": { let a = S.dueFrom || T, b = S.dueTo || a; if (b < a) [a, b] = [b, a]; return [a, b]; }
    default: return [T, T];
  }
}
function rangeLabel(a, b) { return a === b ? relDay(a) : fmtDate(a) + " — " + fmtDate(b); }
function viewDue() {
  const { sale, T } = S.calc; const [from, to] = dueRange();
  const F = { today: "Bugun", tomorrow: "Ertaga", week: "Bu hafta", month: "Bu oy", custom: "Sana tanlash" };
  const items = []; let lateBefore = 0; const lateBeforeC = new Set();
  for (const info of sale.values()) {
    if (info.s.type !== "credit") continue;
    const c = S.customers.get(info.s.customerId); if (!c) continue;
    for (const x of info.sched) {
      if (x.amt <= 0.5) continue;
      if (x.due >= from && x.due <= to) items.push({ info, x, c });
      else if (x.due < from && x.st === "late") { lateBefore += x.left; lateBeforeC.add(c.id); }
    }
  }
  const rank = { late: 0, part: 1, wait: 2, paid: 3 };
  items.sort((a, b) => a.x.due.localeCompare(b.x.due) || rank[a.x.st] - rank[b.x.st] || fullName(a.c).localeCompare(fullName(b.c)));
  const expected = items.reduce((t, it) => t + it.x.amt, 0), left = items.reduce((t, it) => t + it.x.left, 0), got = expected - left;
  const nCust = new Set(items.map(it => it.c.id)).size, nOpen = new Set(items.filter(it => it.x.left > 0.5).map(it => it.c.id)).size;
  const pct = expected ? Math.round(got / expected * 100) : 0;
  const groups = []; let cur = null;
  for (const it of items) { if (!cur || cur.date !== it.x.due) { cur = { date: it.x.due, items: [], left: 0 }; groups.push(cur); } cur.items.push(it); cur.left += it.x.left; }
  const cls = { late: "late", part: "debt", wait: "debt", paid: "closed" };
  return `<div class="view-h"><div><h1>Toʻlovlar</h1><p>Kim qachon toʻlashi kerak</p></div><button class="btn sm" data-act="new-payment">${I.plus} Toʻlov</button></div>
  ${payTabs()}
  <div class="chips" role="group" aria-label="Davr">${Object.entries(F).map(([k, v]) => `<button class="chip" data-act="duefilter" data-v="${k}" aria-pressed="${S.dueFilter === k}">${k === "custom" ? I.calendar : ""}${v}</button>`).join("")}</div>
  ${S.dueFilter === "custom" ? `<div class="panel daterange">
    <label class="field"><span>Dan</span><input type="date" id="dq-from" value="${from}"></label>
    <label class="field"><span>Gacha</span><input type="date" id="dq-to" value="${to}"></label>
    <div class="hint" style="grid-column:1/-1">Bitta kun uchun ikkalasiga bir xil sanani qoʻying.</div></div>` : ""}
  <div class="kpis">
    <div class="kpi hero"><span class="label">${esc(rangeLabel(from, to))} kutilmoqda</span><div class="v num"><span data-count="${left}">${fmt(left)}</span><small>soʻm</small></div>
      <span class="sub">${nOpen} ta mijoz toʻlashi kerak · jami ${nCust} ta mijoz</span></div>
    <div class="kpi"><span class="label">Rejadagi summa</span><div class="v num"><span data-count="${expected}" data-f="compact">${compact(expected)}</span></div><span class="sub">${items.length} ta oylik toʻlov</span></div>
    <div class="kpi good"><span class="label">Toʻlangan</span><div class="v num"><span data-count="${got}" data-f="compact">${compact(got)}</span></div><span class="sub">Rejaning ${pct}%</span></div>
  </div>
  ${lateBeforeC.size ? `<button class="late-note" data-act="goto-late">${I.alert}<span><b>${lateBeforeC.size} ta mijoz</b> bundan oldingi toʻlovlarni kechiktirgan: <b class="num">${som(lateBefore)}</b></span>${I.next}</button>` : ""}
  <div class="panel">${groups.length ? groups.map(g => `<div class="day-h"><span>${relDay(g.date)}${g.date.slice(0, 4) != new Date().getFullYear() ? " " + g.date.slice(0, 4) : ""}${g.date < T ? " · oʻtgan" : ""}</span><span class="num">${g.left > 0.5 ? fmt(g.left) : "toʻlangan"}</span></div>
    <div class="rows">${g.items.map(({ info, x, c }) => {
      return `<div class="row due-row"><a class="due-main" href="#c-${c.id}"><div class="ava ${cls[x.st]}">${esc(initials(c))}</div>
        <div class="grow"><div class="t">${esc(fullName(c))}</div><div class="s">${x.i + 1}/${info.sched.length}-oy · <span class="st-${x.st}">${SCHED[x.st]}</span></div></div>
        <div class="amt num">${fmt(x.left > 0.5 ? x.left : x.amt)}<small>${x.left > 0.5 ? (x.left < x.amt - 0.5 ? fmt(x.amt) + " dan" : "soʻm") : "toʻlangan"}</small></div></a>
        ${x.left > 0.5 ? `<button class="icon-btn due-pay" data-act="due-pay" data-cid="${c.id}" data-sid="${info.s.id}" aria-label="${esc(fullName(c))}dan toʻlov olish">${I.coins}</button>` : `<span class="due-done" aria-hidden="true">${I.check}</span>`}</div>`;
    }).join("")}</div>`).join("")
    : `<div class="empty">${I.calendar}<b>Bu davrda toʻlov kutilmaydi</b><span>Boshqa sana yoki oraliqni tanlab koʻring.</span></div>`}</div>`;
}

/* ================= PRODUCTS ================= */
function viewProducts() {
  return `<div class="view-h"><div><h1>Mahsulotlar</h1><p>${S.products.size} ta mahsulot</p></div><button class="btn sm" data-act="new-product">${I.plus} Mahsulot</button></div>
  <label class="search">${I.search}<input id="q-products" type="search" placeholder="Mahsulot nomi" value="${esc(S.pQuery)}" autocomplete="off" aria-label="Mahsulot qidirish"></label>
  <div class="panel" id="plist"></div>`;
}
function renderProductList() {
  const box = $("#plist"); if (!box) return;
  const sold = new Map(); for (const s of S.sales.values()) for (const it of s.items || []) if (it.productId) sold.set(it.productId, (sold.get(it.productId) || 0) + (+it.qty || 1));
  const q = S.pQuery.trim().toLowerCase();
  const list = [...S.products.values()].filter(p => !q || (p.name || "").toLowerCase().includes(q)).sort((a, b) => (a.name || "").localeCompare(b.name || ""));
  box.innerHTML = list.length ? `<div class="rows">${list.map(p => `<button class="row" data-act="product-info" data-id="${p.id}"><div class="ava" style="background:var(--teal-soft);color:var(--teal)">${I.box.replace('<svg', '<svg width="20" height="20"')}</div><div class="grow"><div class="t">${esc(p.name)}</div><div class="s">${sold.get(p.id) ? sold.get(p.id) + " dona sotilgan" : "Hali sotilmagan"}</div></div><div class="amt num">${fmt(p.price)}<small>soʻm</small></div><span class="chev" aria-hidden="true">${I.next}</span></button>`).join("")}</div>`
    : S.products.size ? `<div class="empty">${I.search}<b>Topilmadi</b></div>` : `<div class="empty">${I.box}<b>Mahsulot yoʻq</b><span>Nomi va narxini kiriting — savdoda tanlash oson boʻladi.</span><button class="btn" data-act="new-product">${I.plus} Mahsulot qoʻshish</button></div>`;
}

function productSheet(id) {
  const p = S.products.get(id); if (!p) return;
  compute();
  const rows = [];
  for (const info of S.calc.sale.values()) for (const it of info.s.items || []) if (it.productId === id) rows.push({ info, it, c: S.customers.get(info.s.customerId) });
  rows.sort((a, b) => (b.info.s.date || "").localeCompare(a.info.s.date || ""));
  const qty = rows.reduce((t, r) => t + (+r.it.qty || 1), 0);
  const revenue = rows.reduce((t, r) => t + (+r.it.price || 0) * (+r.it.qty || 1), 0);
  const buyers = new Set(rows.map(r => r.info.s.customerId)).size;
  const nCash = rows.filter(r => r.info.s.type !== "credit").length, nCredit = rows.length - nCash;
  const st = info => info.remaining <= 0.5 ? ["paid", "Toʻlangan"] : info.overdue > 0.5 ? ["late", "Kechikkan"] : ["debt", "Qarzi bor"];
  openSheet(p.name, `<div class="form">
    <div class="ps-head"><div><span class="label">Narxi</span><b class="num">${som(p.price)}</b></div><button class="btn sm sec" data-act="edit-product" data-id="${p.id}">${I.edit} Tahrirlash</button></div>
    <div class="stat3 ps-stats">
      <div><span class="label">Sotilgan</span><b>${qty} dona</b></div>
      <div><span class="label">Xaridorlar</span><b>${buyers} ta</b></div>
      <div><span class="label">Savdo summasi</span><b>${compact(revenue)}</b></div>
    </div>
    ${rows.length ? `<div class="legend"><span><i style="background:var(--teal)"></i>Naqd: ${nCash}</span><span><i style="background:var(--accent)"></i>Nasiya: ${nCredit}</span></div>
    <div class="rows">${rows.map(({ info, it, c }) => { const [k, l] = st(info); return `<a class="row" href="#c-${info.s.customerId}" data-act="go">
      <div class="ava ${k === "paid" ? "closed" : k}">${c ? esc(initials(c)) : "?"}</div>
      <div class="grow"><div class="t">${esc(fullName(c))}</div><div class="s">${fmtDate(info.s.date, true)} · ${+it.qty || 1} dona · ${info.s.type === "credit" ? "Nasiya, " + info.s.months + " oy" : "Naqd"}</div></div>
      <div class="amt"><span class="pill ${k}">${l}</span><small class="num">${info.remaining > 0.5 ? "qarz " + fmt(info.remaining) : fmt((+it.price || 0) * (+it.qty || 1))}</small></div></a>`; }).join("")}</div>`
    : `<div class="empty">${I.box}<b>Hali sotilmagan</b><span>Bu mahsulot savdoga qoʻshilganda xaridorlari shu yerda chiqadi.</span></div>`}
  </div>`);
}

/* ================= layers ================= */
function openLayer(id, html, mount) {
  const L = $("#" + id); L.innerHTML = html; L.hidden = false; document.body.classList.add("locked");
  requestAnimationFrame(() => requestAnimationFrame(() => L.classList.add("open")));
  if (mount) mount(L);
  return L;
}
function closeLayer(id) {
  const L = $("#" + id); if (L.hidden) return;
  closeDD();
  L.classList.remove("open");
  setTimeout(() => { L.hidden = true; L.innerHTML = ""; if ($("#layer-sheet").hidden && $("#layer-top").hidden) document.body.classList.remove("locked"); }, 220);
}
function openSheet(title, body, mount) {
  return openLayer("layer-sheet", `<div class="scrim" data-act="close-sheet"></div><section class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="grab"></div><header class="sheet-h"><h2>${esc(title)}</h2><button class="icon-btn ghost" data-act="close-sheet" aria-label="Yopish">${I.x}</button></header><div class="sheet-b">${body}</div></section>`, mount);
}
const closeSheet = () => closeLayer("layer-sheet");
function confirmBox(title, text, okLabel, onOk) {
  openLayer("layer-top", `<div class="scrim" data-act="close-top"></div><div class="confirm" role="alertdialog" aria-modal="true"><h3>${esc(title)}</h3><p>${esc(text)}</p><div class="btn-row"><button class="btn sec" data-act="close-top">Bekor qilish</button><button class="btn danger" id="cf-ok">${esc(okLabel)}</button></div></div>`,
    L => { const b = $("#cf-ok", L); b.onclick = async () => { b.disabled = true; try { await onOk(); closeLayer("layer-top"); } catch (e) { b.disabled = false; toast(errText(e)); } }; b.focus(); });
}
function errText(e) {
  const c = e && e.code, m = String((e && (e.message || e.error_description)) || "");
  if (c === "too_large" || /payload too large|exceeded the maximum/i.test(m)) return "Fayl juda katta (20 MB gacha)";
  if (/failed to fetch|networkerror|load failed/i.test(m) || !navigator.onLine) return "Internet yoʻq. Ulanishni tekshirib qayta urinib koʻring";
  if (/row-level security|permission denied|jwt/i.test(m)) return "Ruxsat yoʻq: qaytadan tizimga kiring";
  if (/duplicate key/i.test(m)) return "Bu yozuv allaqachon mavjud";
  if (/schedule_mode/i.test(m)) return "Avval Supabase'da 002_hisoblash_usuli.sql ni ishga tushiring";
  return "Saqlanmadi" + (m ? ": " + m : "");
}
async function write(fn) { try { return await fn(); } catch (e) { if (/failed to fetch|load failed/i.test(String(e && e.message))) { await new Promise(r => setTimeout(r, 600 + Math.random() * 600)); return fn(); } throw e; } }

/* ================= forms: product ================= */
function productForm(id) {
  const p = id ? S.products.get(id) : null;
  openSheet(p ? "Mahsulotni tahrirlash" : "Yangi mahsulot", `<form class="form" id="f-prod" novalidate>
    <label class="field"><span>Nomi</span><input id="pf-name" name="name" required value="${esc(p?.name)}" placeholder="Masalan: Samsung muzlatgich RB30" autocomplete="off"></label>
    <label class="field"><span>Narxi (soʻm)</span><input id="pf-price" name="price" class="money num" inputmode="numeric" value="${p ? fmt(p.price) : ""}" placeholder="0"></label>
    <div class="err" id="pf-err" hidden></div>
    <button class="btn" type="submit">Saqlash</button>
    ${p ? `<button class="btn danger" type="button" data-act="del-product" data-id="${p.id}">${I.trash} Oʻchirish</button>` : ""}
  </form>`, L => {
    const f = $("#f-prod", L); setTimeout(() => !p && $("#pf-name", L).focus(), 260);
    f.onsubmit = async e => {
      e.preventDefault(); const name = f.name.value.trim(), price = digits(f.price.value); const er = $("#pf-err", L);
      if (!name) { er.textContent = "Mahsulot nomini kiriting"; er.hidden = false; sfx("err"); return; }
      if (!price) { er.textContent = "Narxni kiriting"; er.hidden = false; sfx("err"); return; }
      const btn = f.querySelector("[type=submit]"); btn.disabled = true;
      const pid = p ? p.id : uid();
      try { await write(() => put("products", pid, { name, price, createdAt: p?.createdAt || new Date().toISOString() })); closeSheet(); toast(p ? "Mahsulot yangilandi" : "Mahsulot qoʻshildi"); }
      catch (err) { btn.disabled = false; er.textContent = errText(err); er.hidden = false; sfx("err"); }
    };
  });
}

/* ================= forms: client ================= */
const PHONE_LABELS = ["Asosiy", "Qoʻshimcha", "Ish", "Uy", "Turmush oʻrtogʻi", "Qarindosh"];
function phoneRow(p = {}) {
  const lab = p.label || "Asosiy";
  return `<div class="phone-row"><select aria-label="Turi" data-ph="label">${PHONE_LABELS.map(l => `<option ${l === lab ? "selected" : ""}>${l}</option>`).join("")}</select>
    <input type="tel" inputmode="tel" data-ph="number" value="${esc(p.number)}" placeholder="+998 90 123 45 67" aria-label="Telefon raqam" autocomplete="off">
    <button type="button" class="icon-btn" data-act="rm-phone" aria-label="Raqamni olib tashlash">${I.x}</button></div>`;
}
function fmtPhoneInput(v) {
  let d = v.replace(/\D/g, "");
  if (!d) return v.startsWith("+") ? "+" : "";
  if (d.length <= 9 && !v.trim().startsWith("+")) { // local 9-digit
    return [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean).join(" ");
  }
  if (d.startsWith("998")) { const r = d.slice(3); return "+998 " + [r.slice(0, 2), r.slice(2, 5), r.slice(5, 7), r.slice(7, 9)].filter(Boolean).join(" ") + (r.length > 9 ? r.slice(9) : ""); }
  return "+" + d;
}
function clientForm(id) {
  const c = id ? S.customers.get(id) : null;
  const phones = c?.phones?.length ? c.phones : [{ label: "Asosiy", number: "" }];
  openSheet(c ? "Mijozni tahrirlash" : "Yangi mijoz", `<form class="form" id="f-client" novalidate>
    <div class="two"><label class="field"><span>Ism</span><input id="cf-first" name="first" value="${esc(c?.first)}" autocomplete="off" autocapitalize="words"></label>
    <label class="field"><span>Familiya</span><input id="cf-last" name="last" value="${esc(c?.last)}" autocomplete="off" autocapitalize="words"></label></div>
    <div class="field"><span>Telefon raqamlar</span><div id="phones" style="display:flex;flex-direction:column;gap:8px">${phones.map(phoneRow).join("")}</div>
      <button type="button" class="link-btn" data-act="add-phone" style="align-self:flex-start">+ Yana raqam qoʻshish</button></div>
    <label class="field"><span>Doimiy yashash manzili</span><textarea id="cf-home" name="homeAddr" placeholder="Viloyat, tuman, mahalla, koʻcha, uy">${esc(c?.homeAddr)}</textarea></label>
    <label class="field"><span>Ish joyi manzili</span><textarea id="cf-work" name="workAddr" placeholder="Tashkilot nomi va manzili">${esc(c?.workAddr)}</textarea></label>
    <label class="field"><span>Izoh (ixtiyoriy)</span><input id="cf-note" name="note" value="${esc(c?.note)}" placeholder="Pasport seriyasi, kafil va h.k." autocomplete="off"></label>
    ${!c ? `<label class="field"><span>Shartnoma rasmi</span><input id="cf-files" type="file" accept="image/*,application/pdf" multiple><span class="hint">Kamera bilan suratga olishingiz yoki galereyadan tanlashingiz mumkin. Keyinroq ham qoʻshsa boʻladi.</span></label>` : ""}
    <div class="err" id="cf-err" hidden></div>
    <button class="btn" type="submit">Saqlash</button>
    ${c ? `<button class="btn danger" type="button" data-act="del-client" data-id="${c.id}">${I.trash} Mijozni oʻchirish</button>` : ""}
  </form>`, L => {
    const f = $("#f-client", L);
    f.onsubmit = async e => {
      e.preventDefault(); const er = $("#cf-err", L);
      const first = f.first.value.trim(), last = f.last.value.trim();
      const ph = $$(".phone-row", L).map(r => ({ label: $("[data-ph=label]", r).value, number: $("[data-ph=number]", r).value.trim() })).filter(p => p.number.replace(/\D/g, "").length >= 5);
      if (!first) { er.textContent = "Ismni kiriting"; er.hidden = false; sfx("err"); return; }
      if (!ph.length) { er.textContent = "Kamida bitta telefon raqam kiriting"; er.hidden = false; sfx("err"); return; }
      const btn = f.querySelector("[type=submit]"); btn.disabled = true; btn.textContent = "Saqlanmoqda…";
      const cid = c ? c.id : uid();
      const data = { first, last, phones: ph, homeAddr: f.homeAddr.value.trim(), workAddr: f.workAddr.value.trim(), note: f.note.value.trim(), contracts: c?.contracts || [], createdAt: c?.createdAt || new Date().toISOString() };
      try {
        await write(() => put("customers", cid, data));
        const files = $("#cf-files", L)?.files;
        closeSheet(); toast(c ? "Mijoz yangilandi" : "Mijoz qoʻshildi");
        if (!c) location.hash = "c-" + cid;
        if (files && files.length) uploadContracts(cid, [...files]);
      } catch (err) { btn.disabled = false; btn.textContent = "Saqlash"; er.textContent = errText(err); er.hidden = false; sfx("err"); }
    };
  });
}

/* ================= contracts ================= */
async function shrink(file) {
  if (!file.type.startsWith("image/") || file.type === "image/gif") return file;
  try {
    const url = URL.createObjectURL(file);
    const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
    const M = 2000, k = Math.min(1, M / Math.max(img.naturalWidth, img.naturalHeight));
    const cv = document.createElement("canvas"); cv.width = Math.round(img.naturalWidth * k); cv.height = Math.round(img.naturalHeight * k);
    cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height); URL.revokeObjectURL(url);
    const b = await new Promise(r => cv.toBlob(r, "image/jpeg", 0.85));
    return b && b.size < file.size ? b : file;
  } catch (e) { return file; }
}
async function uploadContracts(cid, files) {
  if (!S.sb || !S.user) { toast("Avval tizimga kiring"); return; }
  const gal = $("#gallery"); let ph = null;
  if (gal && S.cid === cid) { ph = document.createElement("div"); ph.className = "thumb busy"; gal.insertBefore(ph, gal.lastElementChild); }
  let ok = 0;
  for (const f of files) {
    try {
      const blob = await shrink(f);
      const type = blob.type || f.type || "image/jpeg";
      if (blob.size > 20 * 1024 * 1024) throw { code: "too_large" };
      const ext = type === "application/pdf" ? "pdf" : type === "image/png" ? "png" : type === "image/webp" ? "webp" : "jpg";
      const path = `${S.user.id}/${cid}/${uid()}.${ext}`;
      const { error } = await S.sb.storage.from(BUCKET).upload(path, blob, { contentType: type, upsert: false });
      if (error) throw error;
      const cur = S.customers.get(cid); if (!cur) break;
      const list = [...(cur.contracts || []), { path, type, date: todayISO() }];
      await write(() => patch("customers", cid, { contracts: list }));
      ok++;
    } catch (e) { toast(errText(e)); }
  }
  if (ph) ph.remove();
  if (ok) { toast(ok + " ta fayl saqlandi"); schedule(); }
}
const URLS = new Map();
async function signUrls(paths) {
  const need = [...new Set(paths.filter(p => p && !URLS.has(p)))];
  if (!need.length) return;
  try {
    const { data, error } = await S.sb.storage.from(BUCKET).createSignedUrls(need, 60 * 60 * 12);
    if (!error && data) data.forEach(d => { if (d.signedUrl && d.path) URLS.set(d.path, d.signedUrl); });
  } catch (e) {}
}
async function hydrateImgs(root) {
  const els = $$("img[data-path]", root || document).filter(i => i.dataset.path && i.dataset.loaded !== "1");
  if (!els.length) return;
  await signUrls(els.map(i => i.dataset.path));
  els.forEach(i => {
    const u = URLS.get(i.dataset.path);
    i.dataset.loaded = "1";
    if (u) { i.src = u; i.onerror = () => i.replaceWith(document.createTextNode("Rasm yoʻq")); }
    else i.replaceWith(document.createTextNode("Rasm yoʻq"));
  });
}
function openViewer(cid, i) {
  const c = S.customers.get(cid); if (!c) return; const list = c.contracts || []; let idx = +i;
  const draw = async L => {
    const k = list[idx]; const box = $(".vimg", L);
    $(".vcount", L).textContent = (idx + 1) + " / " + list.length + (k.date ? " · " + fmtDate(k.date, true) : "");
    box.innerHTML = `<span style="color:#fff;opacity:.7">Yuklanmoqda…</span>`;
    await signUrls([k.path]); const u = URLS.get(k.path);
    if (list[idx] !== k) return;
    if (!u) { box.innerHTML = `<span style="color:#fff">Fayl topilmadi</span>`; return; }
    box.innerHTML = k.type === "application/pdf" ? `<a class="btn sm" href="${esc(u)}" target="_blank" rel="noopener">${I.file} PDF faylni ochish</a>` : `<img src="${esc(u)}" alt="Shartnoma ${idx + 1}">`;
  };
  openLayer("layer-top", `<div class="viewer" role="dialog" aria-modal="true" aria-label="Shartnoma">
    <div class="vb"><span class="vcount"></span><div style="display:flex;gap:8px"><button class="icon-btn" id="v-del" aria-label="Oʻchirish">${I.trash}</button><button class="icon-btn" data-act="close-top" aria-label="Yopish">${I.x}</button></div></div>
    <div class="vimg"></div>
    <div class="vnav"><button class="icon-btn" id="v-prev" aria-label="Oldingi">${I.back}</button><button class="icon-btn" id="v-next" aria-label="Keyingi">${I.next}</button></div></div>`, L => {
    draw(L);
    $("#v-prev", L).onclick = () => { idx = (idx - 1 + list.length) % list.length; draw(L); };
    $("#v-next", L).onclick = () => { idx = (idx + 1) % list.length; draw(L); };
    $("#v-del", L).onclick = () => {
      closeLayer("layer-top");
      setTimeout(() => confirmBox("Rasmni oʻchirish", "Bu shartnoma rasmi butunlay oʻchiriladi.", "Oʻchirish", async () => {
        const cur = S.customers.get(cid); const k = list[idx];
        const next = (cur.contracts || []).filter(x => x.path !== k.path);
        await write(() => patch("customers", cid, { contracts: next }));
        try { await S.sb.storage.from(BUCKET).remove([k.path]); } catch (e) {}
        toast("Rasm oʻchirildi");
      }), 240);
    };
  });
}

/* ================= forms: sale ================= */
function saleForm(cid) {
  const cs = [...S.customers.values()].sort((a, b) => fullName(a).localeCompare(fullName(b)));
  if (!cs.length) { toast("Avval mijoz qoʻshing"); clientForm(); return; }
  const prods = [...S.products.values()].sort((a, b) => (a.name || "").localeCompare(b.name || ""));
  const firstDue = addMonths(todayISO(), 1);
  openSheet("Yangi savdo", `<form class="form" id="f-sale" novalidate>
    <label class="field"><span>Mijoz</span><select id="sf-cid" name="cid"><option value="">— Mijozni tanlang —</option>${cs.map(c => `<option value="${c.id}" data-sub="${esc((c.phones || [])[0]?.number || "")}" ${c.id === cid ? "selected" : ""}>${esc(fullName(c))}</option>`).join("")}</select></label>
    <div class="field"><span>Mahsulotlar</span><div id="lines" style="display:flex;flex-direction:column;gap:8px"></div>
      <button type="button" class="link-btn" data-act="add-line" style="align-self:flex-start">+ Yana mahsulot</button></div>
    <div class="seg" role="radiogroup" aria-label="Toʻlov turi"><label><input type="radio" name="type" value="cash"><span>Naqd</span></label><label><input type="radio" name="type" value="credit" checked><span>Nasiya (oylik)</span></label></div>
    <div id="credit" class="form">
      <label class="field"><span>Boshlangʻich toʻlov</span><input id="sf-down" name="down" class="money num" inputmode="numeric" placeholder="0"></label>
      <div class="field"><span>Muddat (oy)</span><div class="minichips" id="mchips">${[3, 4, 6, 8, 10, 12, 18, 24].map(m => `<button type="button" data-m="${m}" aria-pressed="${m === 6}">${m}</button>`).join("")}</div>
        <input id="sf-months" name="months" type="number" min="1" max="60" value="6" inputmode="numeric" class="num" aria-label="Oylar soni"></div>
      <label class="field"><span>Birinchi oylik toʻlov sanasi</span><input id="sf-first" name="firstDue" type="date" value="${firstDue}"></label>
      <div class="field"><span>Hisoblash usuli</span>
        <div class="seg" role="radiogroup" aria-label="Hisoblash usuli">${Object.entries(MODE).map(([k, v]) => `<label><input type="radio" name="mode" value="${k}" ${defaultMode() === k ? "checked" : ""}><span>${v}</span></label>`).join("")}</div>
        <span class="hint" id="sf-mode-hint"></span></div>
    </div>
    <label class="field"><span>Savdo sanasi</span><input id="sf-date" name="date" type="date" value="${todayISO()}"></label>
    <div class="summary" id="sf-sum"></div>
    <div class="err" id="sf-err" hidden></div>
    <button class="btn" type="submit">Savdoni saqlash</button>
  </form>`, L => {
    const f = $("#f-sale", L), lines = $("#lines", L);
    const addLine = () => {
      const d = document.createElement("div"); d.className = "line-item";
      const n = lines.children.length + 1;
      d.innerHTML = `<div class="li-h"><label class="field"><span>Mahsulot</span><select data-l="pid" id="sf-p${uid()}"><option value="">— Tanlang —</option>${prods.map(p => `<option value="${p.id}" data-badge="${fmt(p.price)}">${esc(p.name)}</option>`).join("")}<option value="__custom" data-alt="1" data-sub="Roʻyxatda yoʻq mahsulot">+ Boshqa (qoʻlda yozish)</option></select></label>
        ${n > 1 ? `<button type="button" class="icon-btn" data-act="rm-line" aria-label="Olib tashlash" style="align-self:flex-end">${I.x}</button>` : ""}</div>
        <label class="field" data-custom hidden><span>Nomi</span><input data-l="name" autocomplete="off"></label>
        <div class="two"><label class="field"><span>Narxi</span><input data-l="price" class="money num" inputmode="numeric" placeholder="0"></label>
        <label class="field"><span>Soni</span><input data-l="qty" type="number" min="1" value="1" inputmode="numeric" class="num"></label></div>`;
      lines.appendChild(d);
    };
    addLine();
    L._addLine = addLine;
    const recalc = () => {
      const type = f.type.value; $("#credit", L).hidden = type !== "credit";
      const items = readLines(L);
      const sub = items.reduce((s, i) => s + i.price * i.qty, 0);
      const mk = 0;
      const total = type === "credit" ? Math.round(sub * (1 + mk / 100)) : sub;
      const down = type === "credit" ? Math.min(digits(f.down.value), total) : total;
      const months = Math.max(1, Math.min(60, parseInt(f.months.value) || 1));
      const monthly = calcMonthly(total - down, months);
      $$("#mchips button", L).forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.m === months)));
      $("#sf-mode-hint", L).textContent = MODE_HINT[f.mode.value];
      let html = `<div class="r"><span>Mahsulotlar</span><b>${som(sub)}</b></div>`;
      if (type === "credit") {
        html += `<div class="r"><span>Boshlangʻich</span><b>${som(down)}</b></div><div class="r"><span>Qoldiq</span><b>${som(total - down)}</b></div>
          <div class="r"><span>Oylik toʻlov × ${months}</span><b>${som(monthly)}</b></div>
          <div class="r big"><span>Jami</span><b>${som(total)}</b></div>
          <div class="hint">Toʻlovlar: ${[0, 1, 2].filter(i => i < months).map(i => fmtDate(addMonths(f.firstDue.value || todayISO(), i))).join(", ")}${months > 3 ? " …" : ""}</div>`;
      } else html += `<div class="r big"><span>Jami (naqd)</span><b>${som(total)}</b></div>`;
      $("#sf-sum", L).innerHTML = html;
      return { items, sub, mk, total, down, months, monthly, type };
    };
    L._recalc = recalc;
    f.addEventListener("input", recalc); f.addEventListener("change", e => {
      const sel = e.target.closest("[data-l=pid]");
      if (sel) { const li = sel.closest(".line-item"); const p = S.products.get(sel.value); $("[data-custom]", li).hidden = sel.value !== "__custom"; if (p) $("[data-l=price]", li).value = fmt(p.price); }
      recalc();
    });
    $("#mchips", L).onclick = e => { const b = e.target.closest("[data-m]"); if (b) { f.months.value = b.dataset.m; recalc(); } };
    recalc();
    f.onsubmit = async e => {
      e.preventDefault(); const er = $("#sf-err", L); const r = recalc(); const show = m => { er.textContent = m; er.hidden = false; sfx("err"); };
      const customerId = f.cid.value;
      if (!customerId) return show("Mijozni tanlang");
      if (!r.items.length) return show("Kamida bitta mahsulot kiriting");
      if (r.items.some(i => !i.name || !i.price)) return show("Har bir mahsulotning nomi va narxini kiriting");
      if (r.type === "credit" && r.total - r.down <= 0) return show("Nasiya uchun qoldiq summa boʻlishi kerak. Naqd savdoni tanlang.");
      const btn = f.querySelector("[type=submit]"); btn.disabled = true; btn.textContent = "Saqlanmoqda…";
      const sid = uid(), date = f.date.value || todayISO(), now = new Date().toISOString();
      const sale = { customerId, items: r.items, subtotal: r.sub, total: r.total, type: r.type, date, createdAt: now };
      if (r.type === "credit") Object.assign(sale, { markup: r.mk, down: r.down, months: r.months, monthly: r.monthly, firstDue: f.firstDue.value || addMonths(date, 1), scheduleMode: f.mode.value });
      try {
        await write(() => put("sales", sid, sale));
        const first = r.type === "credit" ? r.down : r.total;
        if (first > 0) { const pid = uid(); await write(() => put("payments", pid, { customerId, saleId: sid, amount: first, date, method: "cash", kind: r.type === "credit" ? "down" : "full", note: "", createdAt: now })); }
        closeSheet(); toast("Savdo saqlandi"); location.hash = "c-" + customerId;
      } catch (err) { btn.disabled = false; btn.textContent = "Savdoni saqlash"; show(errText(err)); }
    };
  });
}
function readLines(L) {
  return $$(".line-item", L).map(li => {
    const pid = $("[data-l=pid]", li).value; const p = S.products.get(pid);
    const name = pid === "__custom" ? $("[data-l=name]", li).value.trim() : p ? p.name : "";
    return { productId: p ? p.id : null, name, price: digits($("[data-l=price]", li).value), qty: Math.max(1, parseInt($("[data-l=qty]", li).value) || 1) };
  }).filter(i => i.name || i.price);
}
function calcMonthly(rest, months) {
  if (rest <= 0) return 0;
  const raw = rest / months;
  return rest >= months * 10000 ? Math.ceil(raw / 1000) * 1000 : Math.ceil(raw);
}

/* ================= forms: payment ================= */
function paymentForm(cid, payId, preSid) {
  const pay = payId ? S.payments.get(payId) : null;
  if (pay) cid = pay.customerId;
  compute();
  const debtors = [...S.calc.cust.values()].filter(a => a.debt > 0.5 || (pay && a.c.id === cid)).sort((a, b) => fullName(a.c).localeCompare(fullName(b.c)));
  if (!pay && !debtors.length) { toast("Qarzdor mijoz yoʻq"); return; }
  openSheet(pay ? "Toʻlovni tahrirlash" : "Toʻlov qabul qilish", `<form class="form" id="f-pay" novalidate>
    <label class="field"><span>Mijoz</span><select id="yf-cid" name="cid" ${pay ? "disabled" : ""}><option value="">— Mijozni tanlang —</option>${debtors.map(a => `<option value="${a.c.id}" data-sub="${esc((a.c.phones || [])[0]?.number || "")}" data-badge="${fmt(a.debt)}" ${a.c.id === cid ? "selected" : ""}>${esc(fullName(a.c))}</option>`).join("")}</select></label>
    <label class="field"><span>Qaysi savdo uchun <span style="font-weight:400">(oʻngda — qoldiq)</span></span><select id="yf-sid" name="sid" ${pay ? "disabled" : ""}></select></label>
    <label class="field"><span>Summa (soʻm)</span><input id="yf-amt" name="amount" class="money num" inputmode="numeric" placeholder="0" style="font-size:22px;font-weight:700"></label>
    <div class="minichips" id="yf-quick"></div>
    <div class="seg three" role="radiogroup" aria-label="Toʻlov usuli">${Object.entries(METHOD).map(([k, v]) => `<label><input type="radio" name="method" value="${k}" ${(pay?.method || "cash") === k ? "checked" : ""}><span>${v}</span></label>`).join("")}</div>
    <div class="two"><label class="field"><span>Sana</span><input id="yf-date" name="date" type="date" value="${pay?.date || todayISO()}"></label>
    <label class="field"><span>Izoh</span><input id="yf-note" name="note" value="${esc(pay?.note)}" autocomplete="off" placeholder="Ixtiyoriy"></label></div>
    <div class="summary" id="yf-sum"></div>
    <div class="err" id="yf-err" hidden></div>
    <button class="btn" type="submit">${pay ? "Saqlash" : "Toʻlovni kiritish"}</button>
    ${pay ? `<button class="btn danger" type="button" data-act="del-payment" data-id="${pay.id}">${I.trash} Toʻlovni oʻchirish</button>` : ""}
  </form>`, L => {
    const f = $("#f-pay", L);
    const fillSales = () => {
      const a = S.calc.cust.get(f.cid.value); const sel = f.sid;
      if (!a) { sel.innerHTML = `<option value="">—</option>`; return update(); }
      const open = a.sales.filter(i => i.remaining > 0.5 || (pay && i.s.id === pay.saleId));
      open.sort((x, y) => y.overdue - x.overdue || (x.next?.due || "").localeCompare(y.next?.due || ""));
      sel.innerHTML = open.map(i => `<option value="${i.s.id}" data-sub="${esc((i.s.items || []).map(x => x.name).join(", "))}" data-badge="${fmt(i.remaining)}" ${(pay && pay.saleId === i.s.id) || (!pay && preSid === i.s.id) ? "selected" : ""}>${fmtDate(i.s.date, true)} · ${i.s.type === "credit" ? i.s.months + " oy nasiya" : "Naqd"}</option>`).join("") || `<option value="">Ochiq savdo yoʻq</option>`;
      if (!pay) { const i = S.calc.sale.get(sel.value); if (i) f.amount.value = fmt(i.overdue > 0.5 ? i.overdue : i.next ? i.next.amount : i.remaining); }
      update();
    };
    const update = () => {
      const i = S.calc.sale.get(f.sid.value); const q = $("#yf-quick", L);
      if (!i) { q.innerHTML = ""; $("#yf-sum", L).innerHTML = ""; return; }
      const opts = [];
      if (i.overdue > 0.5) opts.push(["Kechikkan", i.overdue]);
      if (i.s.type === "credit" && i.monthlyNow) opts.push(["Oylik", Math.min(i.monthlyNow, i.remaining + (pay ? +pay.amount : 0))]);
      opts.push(["Toʻliq yopish", i.remaining + (pay ? +pay.amount : 0)]);
      q.innerHTML = opts.map(([l, v]) => `<button type="button" data-v="${v}">${l}: ${fmt(v)}</button>`).join("");
      const amt = digits(f.amount.value); const rem = i.remaining + (pay ? +pay.amount : 0);
      $("#yf-sum", L).innerHTML = `<div class="r"><span>Hozirgi qoldiq</span><b>${som(rem)}</b></div><div class="r big"><span>Toʻlovdan keyin</span><b>${som(Math.max(0, rem - amt))}</b></div>`;
    };
    $("#yf-quick", L).onclick = e => { const b = e.target.closest("[data-v]"); if (b) { f.amount.value = fmt(+b.dataset.v); update(); } };
    f.cid.onchange = fillSales; f.sid.onchange = () => { const i = S.calc.sale.get(f.sid.value); if (i && !pay) f.amount.value = fmt(i.overdue > 0.5 ? i.overdue : i.next ? i.next.amount : i.remaining); update(); };
    f.amount.addEventListener("input", update);
    fillSales(); if (pay) f.amount.value = fmt(pay.amount); update();
    f.onsubmit = async e => {
      e.preventDefault(); const er = $("#yf-err", L); const show = m => { er.textContent = m; er.hidden = false; sfx("err"); };
      const customerId = f.cid.value, saleId = f.sid.value, amount = digits(f.amount.value);
      if (!customerId) return show("Mijozni tanlang"); if (!saleId) return show("Savdoni tanlang"); if (!amount) return show("Summani kiriting");
      const i = S.calc.sale.get(saleId); const rem = i.remaining + (pay ? +pay.amount : 0);
      if (amount > rem + 0.5) return show("Summa qoldiqdan (" + som(rem) + ") koʻp boʻlmasin");
      const btn = f.querySelector("[type=submit]"); btn.disabled = true;
      const pid = pay ? pay.id : uid();
      const data = { customerId, saleId, amount, date: f.date.value || todayISO(), method: f.method.value, note: f.note.value.trim(), kind: pay?.kind || "regular", createdAt: pay?.createdAt || new Date().toISOString() };
      try { await write(() => put("payments", pid, data)); closeSheet(); toast(pay ? "Toʻlov yangilandi" : "Toʻlov kiritildi: " + som(amount)); }
      catch (err) { btn.disabled = false; show(errText(err)); }
    };
  });
}

/* ================= quick + settings ================= */
function quickSheet() {
  openSheet("Nima qoʻshamiz?", `<div class="action-grid">
    <button class="action-tile" data-act="q-pay">${I.coins}<span>Toʻlov qabul qilish<small>Mijoz pul olib keldi</small></span></button>
    <button class="action-tile" data-act="q-sale">${I.cart}<span>Yangi savdo<small>Naqd yoki nasiya</small></span></button>
    <button class="action-tile" data-act="q-client">${I.userplus}<span>Yangi mijoz<small>Ism, telefon, manzil</small></span></button>
    <button class="action-tile" data-act="q-prod">${I.box}<span>Yangi mahsulot<small>Nomi va narxi</small></span></button>
  </div>`);
}
function settingsSheet() {
  const t = ls.get("nd.theme") || "auto";
  openSheet("Sozlamalar", `<div class="form">
    <div class="field"><span>Ovoz</span><div class="seg" role="radiogroup" aria-label="Tugma ovozlari">${[["on", "Yoqiq"], ["off", "Oʻchiq"]].map(([k, v]) => `<label><input type="radio" name="sound" value="${k}" ${(soundOn() ? "on" : "off") === k ? "checked" : ""}><span>${v}</span></label>`).join("")}</div>
      <span class="hint">Tugma bosilganda va toʻlov saqlanganda qisqa ovoz chiqadi. iPhone ovozsiz rejimda boʻlsa, ovoz eshitilmaydi.</span></div>
    <div class="field"><span>Yangi nasiyalar uchun hisoblash usuli</span><div class="seg" role="radiogroup" aria-label="Hisoblash usuli">${Object.entries(MODE).map(([k, v]) => `<label><input type="radio" name="dmode" value="${k}" ${defaultMode() === k ? "checked" : ""}><span>${v}</span></label>`).join("")}</div>
      <span class="hint" id="st-mode-hint">${MODE_HINT[defaultMode()]}</span><span class="hint">Mavjud savdoning usulini mijoz sahifasidagi savdo kartochkasidan almashtirasiz.</span></div>
    <div class="field"><span>Koʻrinish</span><div class="seg three" role="radiogroup" aria-label="Mavzu">${[["auto", "Avto"], ["light", "Kunduzgi"], ["dark", "Tungi"]].map(([k, v]) => `<label><input type="radio" name="theme" value="${k}" ${t === k ? "checked" : ""}><span>${v}</span></label>`).join("")}</div></div>
    <form class="form" id="f-pw" novalidate style="border-top:1px solid var(--line);padding-top:14px">
      <div><b>Parolni oʻzgartirish</b><div class="hint">Hisob: ${esc(S.user?.email || "")}</div></div>
      <input type="email" name="email" value="${esc(S.user?.email || "")}" autocomplete="username" hidden>
      <label class="field"><span>Yangi parol</span><input id="sw-new" name="nw" type="password" autocomplete="new-password" placeholder="Kamida 6 belgi"></label>
      <label class="field"><span>Yangi parolni takrorlang</span><input id="sw-new2" name="nw2" type="password" autocomplete="new-password"></label>
      <div class="err" id="sw-err" hidden></div>
      <button class="btn sec" type="submit">Oʻzgartirish</button>
    </form>
    <div class="form" style="border-top:1px solid var(--line);padding-top:14px">
      <div><b>Zaxira nusxa</b><div class="hint">Barcha maʼlumotlarni JSON faylga saqlang yoki fayldan qayta yuklang.</div></div>
      <div class="btn-row"><button class="btn sec" type="button" data-act="export">Yuklab olish</button>
      <label class="btn sec" style="cursor:pointer">Import qilish<input type="file" accept="application/json,.json" hidden id="imp-file"></label></div>
    </div>
    <button class="btn out" data-act="logout">${I.logout} Chiqish</button>
  </div>`, L => {
    $$("[name=theme]", L).forEach(r => r.onchange = () => { ls.set("nd.theme", r.value); applyTheme(); });
    $$("[name=sound]", L).forEach(r => r.onchange = () => { ls.set("nd.sound", r.value); if (r.value === "on") sfx("ok"); });
    $$("[name=dmode]", L).forEach(r => r.onchange = () => { ls.set("nd.mode", r.value); $("#st-mode-hint", L).textContent = MODE_HINT[r.value]; });
    const f = $("#f-pw", L);
    f.onsubmit = async e => {
      e.preventDefault(); const er = $("#sw-err", L); const show = m => { er.textContent = m; er.hidden = false; sfx("err"); };
      if (f.nw.value.length < 6) return show("Parol kamida 6 belgi boʻlsin");
      if (f.nw.value !== f.nw2.value) return show("Parollar bir xil emas");
      const { error } = await S.sb.auth.updateUser({ password: f.nw.value });
      if (error) return show(errText(error));
      closeSheet(); toast("Parol oʻzgartirildi");
    };
    $("#imp-file", L).onchange = e => { const file = e.target.files[0]; e.target.value = ""; if (file) importData(file); };
  });
}
function exportData() {
  const out = { app: "nasiya-daftar", version: 1, exportedAt: new Date().toISOString() };
  for (const t of TABLES) out[t] = [...S[t].values()];
  const blob = new Blob([JSON.stringify(out, null, 1)], { type: "application/json" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "nasiya-daftar-" + todayISO() + ".json";
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast("Fayl yuklab olindi");
}
async function importData(file) {
  let data;
  try { data = JSON.parse(await file.text()); } catch (e) { toast("Fayl oʻqilmadi: JSON emas"); return; }
  if (!data || !TABLES.some(t => Array.isArray(data[t]))) { toast("Bu Nasiya Daftar fayli emas"); return; }
  const n = TABLES.reduce((s, t) => s + (data[t] || []).length, 0);
  confirmBox("Maʼlumotlarni import qilish", `${n} ta yozuv qoʻshiladi. Bir xil ID'li yozuvlar yangilanadi.`, "Import", async () => {
    const order = ["products", "customers", "sales", "payments"];
    for (const t of order) {
      const rows = (data[t] || []).filter(r => r && r.id).map(r => {
        const o = { ...r };
        if (t === "customers") o.contracts = (o.contracts || []).filter(k => k && k.path);
        delete o.owner;
        return { id: o.id, ...toRow(o) };
      });
      for (let i = 0; i < rows.length; i += 200) await q(S.sb.from(t).upsert(rows.slice(i, i + 200)));
    }
    await loadAll(); closeSheet(); toast("Import tugadi: " + n + " ta yozuv");
  });
}

/* ================= custom dropdown ================= */
const CHEV = sv('<path d="m6 9 6 6 6-6"/>');
const CHECK = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--accent)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none"><path d="M20 6 9 17l-5-5"/></svg>`;
let DD = null;
function enhanceSelect(sel) {
  if (sel.dataset.enh) return; sel.dataset.enh = "1";
  const wrap = document.createElement("div"); wrap.className = "dd";
  sel.parentNode.insertBefore(wrap, sel);
  const btn = document.createElement("button"); btn.type = "button"; btn.className = "dd-btn";
  btn.setAttribute("aria-haspopup", "listbox"); btn.setAttribute("aria-expanded", "false");
  if (sel.getAttribute("aria-label")) btn.setAttribute("aria-label", sel.getAttribute("aria-label"));
  wrap.appendChild(btn); wrap.appendChild(sel);
  sel.classList.add("dd-native"); sel.tabIndex = -1;
  const sync = () => {
    const o = sel.options[sel.selectedIndex]; const ph = !o || !o.value;
    btn.innerHTML = `<span class="dd-v${ph ? " ph" : ""}">${esc(o ? o.textContent : "—")}</span>${CHEV}`;
    btn.disabled = sel.disabled;
  };
  sync();
  new MutationObserver(sync).observe(sel, { childList: true, subtree: true, attributes: true, attributeFilter: ["disabled", "selected"] });
  sel.addEventListener("change", sync);
  sel._ddSync = sync;
  btn.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); if (DD && DD.sel === sel) closeDD(); else openDD(sel, btn); });
}
function openDD(sel, btn) {
  closeDD();
  const opts = [...sel.options].filter(o => o.value !== "");
  const searchable = opts.length > 5;
  const pop = document.createElement("div"); pop.className = "dd-pop";
  pop.innerHTML = (searchable ? `<div class="dd-search">${I.search}<input type="search" placeholder="Qidirish…" aria-label="Qidirish" autocomplete="off"></div>` : "") + `<div class="dd-list" role="listbox"></div>`;
  document.body.appendChild(pop);
  btn.setAttribute("aria-expanded", "true");
  const list = $(".dd-list", pop), input = $("input", pop);
  let shown = [], act = Math.max(0, opts.findIndex(o => o.selected));
  const draw = () => {
    const q = (input ? input.value : "").trim().toLowerCase(), qd = q.replace(/\D/g, "");
    shown = opts.filter(o => !q || (o.textContent + " " + (o.dataset.sub || "")).toLowerCase().includes(q) || (qd.length >= 2 && (o.dataset.sub || "").replace(/\D/g, "").includes(qd)));
    if (act >= shown.length) act = shown.length - 1;
    list.innerHTML = shown.length ? shown.map((o, i) => `<div class="dd-opt${o.selected ? " sel" : ""}${i === act ? " act" : ""}${o.dataset.alt ? " alt" : ""}" role="option" aria-selected="${o.selected}" data-i="${i}">
      <span class="dd-tx"><span>${esc(o.textContent)}</span>${o.dataset.sub ? `<small>${esc(o.dataset.sub)}</small>` : ""}</span>
      ${o.dataset.badge ? `<span class="dd-badge">${esc(o.dataset.badge)}</span>` : ""}${o.selected ? CHECK : ""}</div>`).join("")
      : `<div class="dd-empty">Hech narsa topilmadi</div>`;
  };
  const place = () => {
    const r = btn.getBoundingClientRect(), vv = window.visualViewport;
    const vh = vv ? vv.height + vv.offsetTop : innerHeight, vw = innerWidth;
    const below = vh - r.bottom - 12, above = r.top - 12;
    const up = below < 260 && above > below;
    const w = Math.min(Math.max(r.width, 240), vw - 16);
    pop.style.width = w + "px";
    pop.style.left = Math.max(8, Math.min(r.left, vw - w - 8)) + "px";
    pop.style.maxHeight = Math.max(160, Math.min(380, up ? above : below)) + "px";
    pop.classList.toggle("up", up);
    if (up) { pop.style.top = ""; pop.style.bottom = (innerHeight - r.top + 6) + "px"; }
    else { pop.style.bottom = ""; pop.style.top = (r.bottom + 6) + "px"; }
  };
  const pick = i => {
    const o = shown[i]; if (!o) return;
    sel.value = o.value;
    sel.dispatchEvent(new Event("change", { bubbles: true }));
    closeDD(); btn.focus({ preventScroll: true });
  };
  list.addEventListener("click", e => { const el = e.target.closest(".dd-opt"); if (el) pick(+el.dataset.i); });
  const onKey = e => {
    if (e.key === "ArrowDown") { e.preventDefault(); act = Math.min(shown.length - 1, act + 1); draw(); list.querySelector(".act")?.scrollIntoView({ block: "nearest" }); }
    else if (e.key === "ArrowUp") { e.preventDefault(); act = Math.max(0, act - 1); draw(); list.querySelector(".act")?.scrollIntoView({ block: "nearest" }); }
    else if (e.key === "Enter") { e.preventDefault(); pick(act); }
    else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); closeDD(); btn.focus(); }
  };
  pop.addEventListener("keydown", onKey);
  if (input) input.addEventListener("input", () => { act = 0; draw(); });
  draw(); place();
  list.querySelector(".sel")?.scrollIntoView({ block: "nearest" });
  if (input && matchMedia("(pointer:fine)").matches) input.focus({ preventScroll: true });
  else { pop.tabIndex = -1; pop.focus({ preventScroll: true }); }
  const onScroll = e => { if (!pop.contains(e.target)) place(); };
  const onDown = e => { if (!pop.contains(e.target) && !btn.contains(e.target)) closeDD(); };
  document.addEventListener("scroll", onScroll, true);
  document.addEventListener("pointerdown", onDown, true);
  window.addEventListener("resize", place);
  window.visualViewport?.addEventListener("resize", place);
  DD = { sel, btn, pop, cleanup: () => {
    document.removeEventListener("scroll", onScroll, true);
    document.removeEventListener("pointerdown", onDown, true);
    window.removeEventListener("resize", place);
    window.visualViewport?.removeEventListener("resize", place);
  } };
}
function closeDD() {
  if (!DD) return; const d = DD; DD = null;
  d.cleanup(); d.pop.remove(); d.btn.setAttribute("aria-expanded", "false");
}
new MutationObserver(() => $$("#layer-sheet select:not([data-enh])").forEach(enhanceSelect)).observe($("#layer-sheet"), { childList: true, subtree: true });

/* ================= events ================= */
const ACT = {
  "close-sheet": () => closeSheet(),
  "close-top": () => closeLayer("layer-top"),
  quick: () => quickSheet(),
  settings: () => settingsSheet(),
  "q-pay": () => { closeSheet(); setTimeout(() => paymentForm(S.view === "client" ? S.cid : null), 240); },
  "q-sale": () => { closeSheet(); setTimeout(() => saleForm(S.view === "client" ? S.cid : null), 240); },
  "q-client": () => { closeSheet(); setTimeout(() => clientForm(), 240); },
  "q-prod": () => { closeSheet(); setTimeout(() => productForm(), 240); },
  period: t => { S.period = t.dataset.v; S.anim = true; render(); },
  cfilter: t => { S.cFilter = t.dataset.v; $$("[data-act=cfilter]").forEach(b => b.setAttribute("aria-pressed", String(b === t))); renderClientList(); },
  payfilter: t => { S.payFilter = t.dataset.v; S.anim = true; render(); },
  paytab: t => { S.payTab = t.dataset.v; S.anim = true; render(); },
  duefilter: t => { S.dueFilter = t.dataset.v; if (t.dataset.v === "custom" && !S.dueFrom) { S.dueFrom = todayISO(); S.dueTo = toISO(new Date(Date.now() + 6 * 864e5)); } S.anim = true; render(); },
  "due-pay": t => paymentForm(t.dataset.cid, null, t.dataset.sid),
  "goto-late": () => { S.cFilter = "late"; location.hash = "clients"; },
  "goto-due": () => { S.payTab = "due"; S.dueFilter = "custom"; S.dueFrom = todayISO(); S.dueTo = toISO(new Date(Date.now() + 6 * 864e5)); if (location.hash === "#payments") { S.anim = true; render(); } else location.hash = "payments"; },
  "new-client": () => clientForm(),
  "edit-client": t => clientForm(t.dataset.cid),
  "new-product": () => productForm(),
  "edit-product": t => productForm(t.dataset.id),
  "product-info": t => productSheet(t.dataset.id),
  go: t => { const h = t.getAttribute("href").slice(1); closeSheet(); setTimeout(() => { location.hash = h; }, 60); },
  "new-sale": t => saleForm(t.dataset.cid || null),
  "new-payment": t => paymentForm(t.dataset.cid || null),
  "edit-payment": t => paymentForm(null, t.dataset.id),
  copy: t => copyText(t.dataset.v),
  "view-img": t => openViewer(t.dataset.cid, t.dataset.i),
  "add-phone": () => { const box = $("#phones"); box.insertAdjacentHTML("beforeend", phoneRow({ label: "Qoʻshimcha" })); box.lastElementChild.querySelector("input").focus(); },
  "rm-phone": t => { const box = $("#phones"); if (box.children.length > 1) t.closest(".phone-row").remove(); else box.querySelector("input").value = ""; },
  "add-line": () => { const L = $("#layer-sheet"); L._addLine && L._addLine(); L._recalc && L._recalc(); },
  "rm-line": t => { t.closest(".line-item").remove(); const L = $("#layer-sheet"); L._recalc && L._recalc(); },
  "del-product": t => { const id = t.dataset.id; confirmBox("Mahsulotni oʻchirish", "Oldingi savdolardagi yozuvlar saqlanib qoladi.", "Oʻchirish", async () => { await write(() => del("products", id)); closeSheet(); toast("Mahsulot oʻchirildi"); }); },
  "del-payment": t => { const id = t.dataset.id; confirmBox("Toʻlovni oʻchirish", "Bu toʻlov tarixdan oʻchiriladi va mijoz qarzi shunga koʻpayadi.", "Oʻchirish", async () => { await write(() => del("payments", id)); closeSheet(); toast("Toʻlov oʻchirildi"); }); },
  "toggle-mode": async t => {
    const sl = S.sales.get(t.dataset.id); if (!sl) return;
    const next = sl.scheduleMode === "recalc" ? "fixed" : "recalc";
    t.disabled = true;
    try { await write(() => patch("sales", sl.id, { scheduleMode: next })); sfx("ok"); toast("Hisoblash usuli: " + MODE[next]); }
    catch (e) { t.disabled = false; sfx("err"); toast(errText(e)); }
  },
  "del-sale": t => { const id = t.dataset.id; confirmBox("Savdoni oʻchirish", "Savdo va unga tegishli barcha toʻlovlar oʻchiriladi.", "Oʻchirish", async () => {
      await write(() => del("sales", id)); toast("Savdo oʻchirildi"); }); },
  "del-client": t => { const id = t.dataset.id; const c = S.customers.get(id); confirmBox("Mijozni oʻchirish", fullName(c) + ": barcha savdolari, toʻlovlari va shartnoma rasmlari ham oʻchiriladi.", "Butunlay oʻchirish", async () => {
      const paths = (c.contracts || []).map(k => k.path).filter(Boolean);
      if (paths.length) { try { await S.sb.storage.from(BUCKET).remove(paths); } catch (e) {} }
      await write(() => del("customers", id)); closeSheet(); toast("Mijoz oʻchirildi"); location.hash = "clients"; }); },
  logout: async () => { closeSheet(); S.authed = false; await S.sb.auth.signOut(); },
  export: () => exportData(),
  "reset-config": () => { ls.del("nd.sbUrl"); ls.del("nd.sbKey"); location.reload(); },
  "toggle-pw": t => { const i = t.parentElement.querySelector("input"); i.type = i.type === "password" ? "text" : "password"; }
};
document.addEventListener("click", e => { const t = e.target.closest("[data-act]"); if (!t) return; const fn = ACT[t.dataset.act]; if (fn) { e.preventDefault(); fn(t, e); } });
document.addEventListener("input", e => {
  const t = e.target;
  if (t.classList.contains("money")) { const v = digits(t.value); t.value = v ? fmt(v) : ""; }
  if (t.dataset && t.dataset.ph === "number") { const end = t.selectionStart === t.value.length; const nv = fmtPhoneInput(t.value); if (end && nv !== t.value) t.value = nv; }
  if (t.id === "q-clients") { S.cQuery = t.value; renderClientList(); }
  if (t.id === "q-products") { S.pQuery = t.value; renderProductList(); }
});
document.addEventListener("change", e => { const t = e.target;
  if (t.id === "dq-from" || t.id === "dq-to") { if (t.value) { S[t.id === "dq-from" ? "dueFrom" : "dueTo"] = t.value; render(); } return; }
  if (t.dataset && t.dataset.upload) { const files = [...t.files]; t.value = ""; if (files.length) uploadContracts(t.dataset.upload, files); } });
document.addEventListener("keydown", e => { if (e.key === "Escape") { if (DD) { closeDD(); return; } if (!$("#layer-top").hidden) closeLayer("layer-top"); else if (!$("#layer-sheet").hidden) closeSheet(); } });

/* ================= auth ================= */
function gateHTML(inner) { return `<div class="gate"><div class="gate-card"><div class="gate-logo">${I.logo}</div>${inner}</div></div>`; }
function getConfig() {
  const c = window.NASIYA_CONFIG || {};
  return { url: (c.supabaseUrl || ls.get("nd.sbUrl") || "").trim(), key: (c.supabaseAnonKey || ls.get("nd.sbKey") || "").trim(), fromFile: !!c.supabaseUrl };
}
function showSetup(msg) {
  closeSheet();
  app.innerHTML = gateHTML(`<div><h1>Bazaga ulash</h1><p>${esc(msg || "Supabase loyihangizning manzili va “anon public” kalitini kiriting. Ular Supabase → Project Settings → API boʻlimida turadi.")}</p></div>
    <form class="form" id="f-setup" novalidate>
      <label class="field"><span>Project URL</span><input id="st-url" name="url" placeholder="https://xxxx.supabase.co" autocapitalize="none" autocomplete="off" inputmode="url"></label>
      <label class="field"><span>Anon public key</span><textarea id="st-key" name="key" placeholder="eyJhbGciOi…" autocapitalize="none" spellcheck="false"></textarea></label>
      <div class="err" id="st-err" hidden></div>
      <button class="btn" type="submit">Ulash</button>
    </form>`);
  const f = $("#f-setup");
  f.onsubmit = e => {
    e.preventDefault(); const er = $("#st-err");
    const url = f.url.value.trim().replace(/\/+$/, ""), key = f.key.value.trim();
    if (!/^https:\/\/.+/.test(url) || key.length < 20) { er.textContent = "URL va kalitni toʻliq kiriting"; er.hidden = false; sfx("err"); return; }
    ls.set("nd.sbUrl", url); ls.set("nd.sbKey", key); location.reload();
  };
}
function showLogin(msg) {
  closeSheet(); S.authed = false;
  app.innerHTML = gateHTML(`<div><h1>Kirish</h1><p>Doʻkon egasining email va parolini kiriting</p></div>
    <form class="form" id="f-gate" novalidate>
      <label class="field"><span>Email</span><input id="g-email" name="email" type="email" autocomplete="username" autocapitalize="none" inputmode="email"></label>
      <label class="field pw"><span>Parol</span><input id="g-pw" name="pw" type="password" autocomplete="current-password"><button type="button" data-act="toggle-pw" aria-label="Parolni koʻrsatish">${I.eye}</button></label>
      <div class="err" id="g-err" ${msg ? "" : "hidden"}>${esc(msg || "")}</div>
      <button class="btn" type="submit">Kirish</button>
    </form>
    ${getConfig().fromFile ? "" : `<button class="link-btn" data-act="reset-config" style="align-self:center">Boshqa bazaga ulash</button>`}`);
  const f = $("#f-gate"); setTimeout(() => $("#g-email").focus(), 50);
  f.onsubmit = async e => {
    e.preventDefault(); const er = $("#g-err"); const show = m => { er.textContent = m; er.hidden = false; sfx("err"); };
    const email = f.email.value.trim(), password = f.pw.value;
    if (!email || !password) return show("Email va parolni kiriting");
    const btn = f.querySelector("[type=submit]"); btn.disabled = true; btn.textContent = "Kirilmoqda…";
    const { data, error } = await S.sb.auth.signInWithPassword({ email, password });
    if (error) {
      btn.disabled = false; btn.textContent = "Kirish"; f.pw.value = "";
      return show(/invalid login/i.test(error.message) ? "Email yoki parol notoʻgʻri" : /not confirmed/i.test(error.message) ? "Email tasdiqlanmagan. Supabase'da foydalanuvchini “Auto confirm” bilan yarating." : errText(error));
    }
    S.user = data.user; enter();
  };
}
let subscribed = false;
async function enter() {
  S.authed = true; app.innerHTML = ""; shell(); route(); render();
  try { await loadAll(); }
  catch (e) { toast(errText(e)); TABLES.forEach(t => S.loaded[t] = true); schedule(); }
  if (subscribed) return;
  subscribed = true;
  S.sb.channel("nasiya-db")
    .on("postgres_changes", { event: "*", schema: "public" }, pl => {
      const t = pl.table; if (!TABLES.includes(t)) return;
      if (pl.eventType === "DELETE") { const id = pl.old && pl.old.id; if (id) { S[t].delete(id); cascadeLocal(t, id); } }
      else if (pl.new && pl.new.id) S[t].set(pl.new.id, fromRow(pl.new));
      schedule();
    }).subscribe();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && S.authed && Date.now() - (S.lastLoad || 0) > 30000) loadAll().catch(() => {});
  });
}

/* ================= boot ================= */
(async () => {
  app.innerHTML = gateHTML(`<div><h1>Nasiya Daftar</h1><p>Yuklanmoqda…</p></div>`);
  if (!window.supabase || !window.supabase.createClient) { app.innerHTML = gateHTML(`<div><h1>Nasiya Daftar</h1><p>Kutubxona yuklanmadi. Internetni tekshirib, sahifani yangilang.</p></div>`); return; }
  const cfg = getConfig();
  if (!cfg.url || !cfg.key) return showSetup();
  try { S.sb = window.supabase.createClient(cfg.url, cfg.key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } }); }
  catch (e) { return showSetup("Supabase manzili notoʻgʻri. Qayta kiriting."); }
  S.sb.auth.onAuthStateChange((ev, session) => {
    if (ev === "SIGNED_OUT") { S.user = null; TABLES.forEach(t => { S[t] = new Map(); S.loaded[t] = false; }); URLS.clear(); showLogin(); }
    else if (session) S.user = session.user;
  });
  const { data } = await S.sb.auth.getSession();
  if (data && data.session) { S.user = data.session.user; enter(); } else showLogin();
})();

if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
}
})();
