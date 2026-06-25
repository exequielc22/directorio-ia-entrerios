// service-worker.js
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', (event) => {
  // Por ahora, esto permite que la web funcione normalmente
});