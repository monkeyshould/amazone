import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtoWFCUxeKPCz6CvaOMPNjhELgeGAlm5Y",
    authDomain: "clone-8d4e3.firebaseapp.com",
    databaseURL: "https://clone-8d4e3.firebaseio.com",
    projectId: "clone-8d4e3",
    storageBucket: "clone-8d4e3.appspot.com",
    messagingSenderId: "278667477393",
    appId: "1:278667477393:web:a4030c963a96936cabda30",
    measurementId: "G-2T0H7X8JH8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };