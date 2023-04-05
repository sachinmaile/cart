import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuYPSsTdB5FEPP7EMmXTKLmoJz4CODzwU",
    authDomain: "cart-44475.firebaseapp.com",
    projectId: "cart-44475",
    storageBucket: "cart-44475.appspot.com",
    messagingSenderId: "525444688596",
    appId: "1:525444688596:web:362a0a948561f03240a941"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };