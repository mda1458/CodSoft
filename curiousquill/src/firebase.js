import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBimN1FT9y7GeZSkr0LryvSS9Qsv4DUPik",
  authDomain: "curious-quill.firebaseapp.com",
  projectId: "curious-quill",
  storageBucket: "curious-quill.appspot.com",
  messagingSenderId: "539262783998",
  appId: "1:539262783998:web:09e09347cc29a17774f0af",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const firebaseTimestamp = firebase.firestore.FieldValue.serverTimestamp;
