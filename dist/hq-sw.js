
const cacheName = 'hq-1627748877087';
const appShellFiles = ['/index.html','/style.css','/./index.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(appShellFiles)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keyList => Promise.all(keyList.map(key => caches.delete(key)))));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request)
    .then(r => r || fetch(e.request)));
});
