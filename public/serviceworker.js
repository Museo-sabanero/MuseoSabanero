var staticCacheName = 'pwa-v' + new Date().getTime()
var filesToCache = [
  '/offline',
  '/js/app.js',
  '/images/icons/icon-72x72.png',
  '/images/icons/icon-96x96.png',
  '/images/icons/icon-128x128.png',
  '/images/icons/icon-144x144.png',
  '/images/icons/icon-152x152.png',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-384x384.png',
  '/images/icons/icon-512x512.png',
  './css/dark.css',
  './css/app.css',
  './js/lib/date-picker/datepicker.js',
  './js/lib/date-picker/datepicker.en.js',
  './js/lib/date-picker/datepicker.custom.js',
  './js/lib/pricing-slider/pricing-slider-custom.js',
  './js/lib/bootstrap.bundle.min.js',
  './js/lib/feather.min.js',
  './js/lib/here-map-info.js',
  './js/lib/here-map-route.js',
  './js/lib/jquery-3.6.0.min.js',
  './js/lib/jquery-swipe-1.11.3.min.js',
  './js/lib/jquery.mobile-1.4.5.min.js',
  './js/lib/lord-icon-2.1.0.js',
  './js/lib/otp.js',
  './js/lib/pricing-slider.js',
  './js/lib/script.js',
  './js/lib/slick-custom.js',
  './js/lib/slick.js',
  './js/lib/slick.min.js',
  './js/lib/theme-setting.js',
]

// Cache on install
self.addEventListener('install', (event) => {
  this.skipWaiting()
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log(cache)
      return cache.addAll(filesToCache)
    })
  )
})

// Clear cache on activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith('pwa-'))
          .filter((cacheName) => cacheName !== staticCacheName)
          .map((cacheName) => caches.delete(cacheName))
      )
    })
  )
})

// Serve from Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response || fetch(event.request)
      })
      .catch(() => {
        return caches.match('offline')
      })
  )
})

