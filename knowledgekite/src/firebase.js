import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWT_aAsERlJ6Zl4d3xAylRSavL5l4NniI",
  authDomain: "knowledgekite-fb32b.firebaseapp.com",
  projectId: "knowledgekite-fb32b",
  storageBucket: "knowledgekite-fb32b.appspot.com",
  messagingSenderId: "66127340540",
  appId: "1:66127340540:web:3eef982927366be5158879",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const firebaseTimestamp = firebase.firestore.FieldValue.serverTimestamp;
