import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCglrLTTyXr-9R5pGO1NxmaV7XnWmxQbY4",
  authDomain: "clone-c9ca0.firebaseapp.com",
  databaseURL: "https://clone-c9ca0.firebaseio.com",
  projectId: "clone-c9ca0",
  storageBucket: "clone-c9ca0.appspot.com",
  messagingSenderId: "877131243898",
  appId: "1:877131243898:web:338cd4a7ecea86436af6c3",
  measurementId: "G-V1L0RYWXWZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
