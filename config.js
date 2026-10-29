// Supabase ulanish sozlamalari.
// Supabase → Project Settings → API boʻlimidan oling.
// "anon public" kalit ochiq kalit hisoblanadi: maʼlumotlarni RLS qoidalari himoya qiladi
// (schema.sql ichida), shuning uchun uni shu yerga yozish xavfsiz.
// "service_role" kalitni HECH QACHON bu yerga yozmang.
//
// Boʻsh qoldirilsa, ilova birinchi ochilganda URL va kalitni soʻraydi
// va ularni faqat shu qurilmada eslab qoladi.
window.NASIYA_CONFIG = {
  supabaseUrl: "https://htmmugijfimwvwhscshy.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0bW11Z2lqZmltd3Z3aHNjc2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyOTUyMDcsImV4cCI6MjEwODg3MTIwN30.T4nS7wcNkm-8VG3evqjw04h1BLRzuM6OaMeck6iyFi0"
};
