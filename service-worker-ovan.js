// O V A N - D E V E L O P » Service Worker

const CACHE_NAME_OVAN = 'ovan-pwa-cache-v1';
const FILES_TO_CACHE_OVAN = [
  '/',
  '/index.html', // در اینجا فایل صفحه اصلی رو انتخاب کنید و مسیر درستش رو بزنید
  '/pwa.js',
  '/styles.css', // در اینجا نام فایل سی اس اس و مسیرش رو انتخاب کنید
  '/icon-192.png', // مسیر آیکون ها 
  '/icon-512.png' // مسیر آیکون ها 
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME_OVAN).then(cache => {
      console.log('ovan-pwa: ');
      return cache.addAll(FILES_TO_CACHE_OVAN);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME_OVAN)
          .map(name => caches.delete(name))
      );
    })
  );
});
