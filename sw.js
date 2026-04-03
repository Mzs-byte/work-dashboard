const CACHE = "cmddeck-v1";
const ASSETS = [
  "/work-dashboard/",
  "/work-dashboard/index.html",
  "/work-dashboard/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  // Always fetch fresh for API calls
  if (e.request.url.includes("graph.microsoft.com") ||
      e.request.url.includes("login.microsoftonline.com")) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
