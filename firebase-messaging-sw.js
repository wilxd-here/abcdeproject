importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC_23hMeYXQOIBuWcg99AKTIjUEHlmvhio",
  authDomain: "wilproject.my.id",
  projectId: "wilproject-563df",
  appId: "1:868109716977:web:84f4d4084e89f8a95e0850",
  messagingSenderId: "868109716977"
});

const messaging = firebase.messaging();

// Notifikasi saat web tertutup / di background
messaging.onBackgroundMessage(function (payload) {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || 'Update Xaerisoft', {
    body: n.body || 'Ada pengumuman baru.',
    icon: n.icon || '/favicon.ico',
    data: { url: '/#announcement' }
  });
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(clients.openWindow((e.notification.data && e.notification.data.url) || '/#announcement'));
});
