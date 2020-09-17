import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJlB1azPGTTybYSLDhd355MpRsAA-x1Hk",
    authDomain: "tinder-clone-b9ec9.firebaseapp.com",
    databaseURL: "https://tinder-clone-b9ec9.firebaseio.com",
    projectId: "tinder-clone-b9ec9",
    storageBucket: "tinder-clone-b9ec9.appspot.com",
    messagingSenderId: "908910951524",
    appId: "1:908910951524:web:ad3fa60a6296ca4235b371",
    measurementId: "G-GSD1TLMZ6H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;