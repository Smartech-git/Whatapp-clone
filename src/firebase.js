import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDRBLAYoxPPY6-QOERk-HEmFCb4pwbH0Ks",
    authDomain: "whats-app-clone-3deae.firebaseapp.com",
    databaseURL: "https://whats-app-clone-3deae.firebaseio.com",
    projectId: "whats-app-clone-3deae",
    storageBucket: "whats-app-clone-3deae.appspot.com",
    messagingSenderId: "385128705482",
    appId: "1:385128705482:web:bd10ee726c34f86b037333",
    measurementId: "G-6CXZPNHZX5"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;