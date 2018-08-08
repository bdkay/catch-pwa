importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
  apiKey: "AIzaSyCwNjYf3g-FzyUpoht-iGEiSeazA6TGHeE",
  authDomain: "cotd83.firebaseapp.com",
  databaseURL: "https://cotd83.firebaseio.com",
  projectId: "cotd83",
  storageBucket: "cotd83.appspot.com",
  messagingSenderId: "1014586694191"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const title = 'Hello World';
  const options = {
    body: payload.data.body
  };
  return self.registration.showNotification(title, options);
});