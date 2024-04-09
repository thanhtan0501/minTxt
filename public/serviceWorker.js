//Basic asset-caching
var CACHE='mintxt-cache';

this.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll([
        '',
        '/index.html',
        '/manifest.json',
        '/icon-192x192.png',
        '/icon-512x512.png',
        '/favicon.ico',
      ]);
    })
  );
 });
 
 this.addEventListener('fetch', function(e) {
    e.respondWith(fromCache(e.request));
  });
  
  function fromCache(request) {
    return caches.open(CACHE).then(function (cache) {
      return cache.match(request, { ignoreSearch: true }).then(function (matching) {
        return matching || Promise.reject('no-match');
      });
    });
  }