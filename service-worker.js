// Código inicial para el service worker
self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
    // Agregar recursos al cache
});

self.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
    // Manejar las peticiones de red
});