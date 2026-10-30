// Nasiya Daftar service worker: ilova qobigʻini keshlaydi, maʼlumotlar har doim Supabase'dan olinadi.
const VERSION = "nd-v2";
const SHELL = ["/", "/index.html", "/style.css", "/app.js", "/config.js", "/manifest.webmanifest", "/icons/icon-192.png", "/icons/favicon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Supabase API, auth va fayllar keshlanmaydi.
  if (url.hostname.endsWith(".supabase.co") || url.hostname.endsWith(".supabase.in")) return;

  if (url.origin === location.origin) {
    // Oʻz fayllarimiz: avval tarmoq (yangilanishlar darhol koʻrinsin), boʻlmasa kesh.
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req).then(r => r || (req.mode === "navigate" ? caches.match("/index.html") : undefined)))
    );
    return;
  }
  // Shriftlar va CDN kutubxonasi: avval kesh.
  if (/fonts\.(googleapis|gstatic)\.com$|cdn\.jsdelivr\.net$/.test(url.hostname)) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res;
      }))
    );
  }
});
