import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBvJwFjdR850kmTzHuFeu9dr6Yk1jgtgwc",
    authDomain: "clone-966a9.firebaseapp.com",
    projectId: "clone-966a9",
    storageBucket: "clone-966a9.appspot.com",
    messagingSenderId: "891889618136",
    appId: "1:891889618136:web:d884024fe7596afc441bad",
    measurementId: "G-DP53CJTEPC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}; 