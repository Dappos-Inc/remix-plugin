import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQRKRfVMQEcW4LrEIcJnDixaqXsutmroc",
  authDomain: "appdapposprod.firebaseapp.com",
  projectId: "appdapposprod",
  storageBucket: "appdapposprod.appspot.com",
  messagingSenderId: "446253381595",
  appId: "1:446253381595:web:1c9a30607456f3dd2f19fe",
  measurementId: "G-2ZPRPNNMC0",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
