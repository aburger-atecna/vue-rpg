import * as firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCsqydSxzI2zw7UmX-Fl2XKlLUN4reSfk8",
  authDomain: "axial-sunup-179313.firebaseapp.com",
  projectId: "axial-sunup-179313",
  storageBucket: "axial-sunup-179313.appspot.com",
  messagingSenderId: "786018912873",
  appId: "1:786018912873:web:9ec9453e353273089f30f8"
};
const firestore = firebase.initializeApp(config);
const db = firebase.firestore();
export default db;