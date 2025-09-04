// Reserved for future offline functionality
self.addEventListener("install", event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  if (event.request.url.endsWith(".m3u8")) {
    event.respondWith(new Response("Access Denied", { status: 403 }));
  }
});
