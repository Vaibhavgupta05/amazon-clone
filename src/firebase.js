import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBT-yjt4T5UI-sreZB3HmQUmY2P-7T9K_U",
    authDomain: "clone-47f19.firebaseapp.com",
    databaseURL: "https://clone-47f19.firebaseio.com",
    projectId: "clone-47f19",
    storageBucket: "clone-47f19.appspot.com",
    messagingSenderId: "920319562286",
    appId: "1:920319562286:web:60929ad071c11384af45bf",
    measurementId: "G-1EX3ZX1L92"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};