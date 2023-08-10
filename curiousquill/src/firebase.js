import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxDXf0XLbV_ix9ximkHbrTL4--rzT_1EU",
  authDomain: "codiyan-test.firebaseapp.com",
  projectId: "codiyan-test",
  storageBucket: "codiyan-test.appspot.com",
  messagingSenderId: "845717658367",
  appId: "1:845717658367:web:d97e4d81e6d968f70e4aca",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
