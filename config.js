// Supabase ulanish sozlamalari.
// Supabase → Project Settings → API boʻlimidan oling.
// "anon public" kalit ochiq kalit hisoblanadi: maʼlumotlarni RLS qoidalari himoya qiladi
// (schema.sql ichida), shuning uchun uni shu yerga yozish xavfsiz.
// "service_role" kalitni HECH QACHON bu yerga yozmang.
//
// Boʻsh qoldirilsa, ilova birinchi ochilganda URL va kalitni soʻraydi
// va ularni faqat shu qurilmada eslab qoladi.
window.NASIYA_CONFIG = {
  supabaseUrl: "",
  supabaseAnonKey: ""
};
