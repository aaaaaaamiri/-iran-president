const CACHE_NAME = "iran-president-53";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  // منابع بازی از شبکه دریافت می‌شوند.
});
