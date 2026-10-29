# Nasiya Daftar

Doʻkon uchun mijozlar, naqd va nasiya (oylik) savdolar, toʻlovlar tarixi va statistika yuritiladigan ilova. Telefon uchun moslashtirilgan, tungi/kunduzgi rejimi bor va telefonga ilova sifatida oʻrnatiladi (PWA).

- **Maʼlumotlar:** [Supabase](https://supabase.com) (PostgreSQL + login + fayl xotirasi)
- **Hosting:** [Vercel](https://vercel.com) (GitHub'dan avtomatik)
- **Kod:** oddiy HTML/CSS/JS, build kerak emas

```
index.html            sahifa
style.css             dizayn
app.js                ilova mantigʻi
config.js             Supabase ulanish sozlamalari  ← siz toʻldirasiz
manifest.webmanifest  telefonga oʻrnatish uchun
sw.js                 oflayn qobiq (service worker)
icons/                ilova belgilari
supabase/schema.sql   baza jadvallari va xavfsizlik qoidalari
```

---

## 1-qadam. Supabase'da baza yaratish

1. [supabase.com](https://supabase.com) → **Start your project** → GitHub orqali kiring.
2. **New project** bosing:
   - Name: `nasiya-daftar`
   - Database Password: kuchli parol oʻylab toping va saqlab qoʻying
   - Region: **Central EU (Frankfurt)** (Oʻzbekistonga eng yaqini)
3. Loyiha tayyor boʻlgach, chap menyuda **SQL Editor** → **New query**.
4. Shu repodagi [`supabase/schema.sql`](supabase/schema.sql) faylini toʻliq nusxalab joylang va **Run** bosing. “Success” chiqishi kerak.

## 2-qadam. Doʻkon egasi uchun login yaratish

1. **Authentication** → **Users** → **Add user** → **Create new user**.
2. Email va parolni kiriting, **Auto Confirm User** belgisini yoqing → **Create user**.
3. Begona odamlar roʻyxatdan oʻta olmasligi uchun: **Authentication** → **Sign In / Providers** → **Allow new users to sign up** ni **oʻchiring** → Save.

Ilovaga shu email va parol bilan kirasiz.

## 3-qadam. Kalitlarni `config.js` ga yozish

1. Supabase → **Project Settings** → **API** (yoki **Data API**).
2. **Project URL** va **anon public** kalitni nusxalang.
3. GitHub'da `config.js` faylini oching → ✏️ (Edit) → qiymatlarni yozing:

```js
window.NASIYA_CONFIG = {
  supabaseUrl: "https://abcdefgh.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
};
```

4. **Commit changes** bosing.

> `anon public` kalitni bu yerga yozish xavfsiz: maʼlumotlarni RLS qoidalari himoya qiladi, login qilmagan odam hech narsani koʻrmaydi.
> **`service_role` kalitni hech qachon yozmang.**

## 4-qadam. Vercel'da ishga tushirish

1. [vercel.com](https://vercel.com) → GitHub bilan kiring.
2. **Add New… → Project** → `savdo_uchun` reposini tanlang → **Import**.
3. Framework Preset: **Other**. Boshqa hech narsani oʻzgartirmang → **Deploy**.
4. Bir daqiqada `https://savdo-uchun-xxxx.vercel.app` kabi manzil beriladi.

Shundan keyin GitHub'dagi har bir oʻzgarish Vercel'da avtomatik yangilanadi.

## 5-qadam. Telefonga ilova qilib oʻrnatish

- **Android (Chrome):** saytni oching → ⋮ menyu → **Ilovani oʻrnatish** / **Bosh ekranga qoʻshish**.
- **iPhone (Safari):** saytni oching → **Ulashish** tugmasi → **Bosh ekranga qoʻshish** (Add to Home Screen).

Bosh ekranda “Nasiya Daftar” belgisi paydo boʻladi va ilova toʻliq ekranda, alohida ilova kabi ochiladi.

## 6-qadam. Eski maʼlumotlarni koʻchirish

Claude ichidagi versiyadan olingan `nasiya-daftar-export.json` faylini ilovaga yuklang:
**Sozlamalar (⚙) → Zaxira nusxa → Import qilish** → faylni tanlang.

> Claude versiyasidagi shartnoma rasmlari koʻchmaydi, ularni mijoz sahifasidan qayta yuklang.

---

## Maʼlumotlar qayerda turadi

| Nima | Qayerda |
|---|---|
| Mijozlar, mahsulotlar, savdolar, toʻlovlar | Supabase PostgreSQL bazasi (`customers`, `products`, `sales`, `payments` jadvallari) |
| Shartnoma rasmlari | Supabase Storage, yopiq `contracts` papkasi |
| Login va parol | Supabase Auth |
| Mavzu (tungi/kunduzgi) | Faqat shu telefonda |

Har bir yozuv egasining ID'si bilan saqlanadi va RLS qoidalari tufayli faqat oʻsha foydalanuvchiga koʻrinadi. Bir nechta qurilmadan kirsangiz, oʻzgarishlar darhol hamma joyda koʻrinadi.

**Zaxira nusxa:** Sozlamalar → **Yuklab olish** barcha maʼlumotlarni JSON faylga saqlaydi. Vaqti-vaqti bilan shunday qilib turing.

**Bepul tarif chegaralari (Supabase Free):** 500 MB baza, 1 GB fayl xotirasi. Bir doʻkon uchun bu yillar davomida yetadi. Eslatma: bepul loyiha 7 kun umuman ishlatilmasa “pauza”ga tushadi, Supabase panelidan bir bosishda qayta yoqiladi.

## Parolni unutsangiz

Supabase → **Authentication → Users** → foydalanuvchi qatoridagi **⋯** → **Send password recovery** yoki foydalanuvchini oʻchirib, xuddi shu email bilan qayta yarating (maʼlumotlar oʻchib ketmasligi uchun avval zaxira nusxa oling).

## Lokal sinash

```bash
npx serve .
```
