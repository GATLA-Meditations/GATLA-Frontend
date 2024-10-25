importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: 'AIzaSyBj_wUGgl7MUF71GVm6yVb1vKhgHAyxrrg',
    authDomain: 'renacentia.firebaseapp.com',
    projectId: 'renacentia',
    storageBucket: 'renacentia.appspot.com',
    messagingSenderId: '110093984274',
    appId: '1:110093984274:web:d5883dae8a68cb00a0eecb',
    measurementId: 'G-6T5PHYKB8W',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
        icon: './icon-192x192.png',
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
