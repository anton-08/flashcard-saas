// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdqtIz3dLVhXLlo4WV4oILIX7xSOKPu0o",
  authDomain: "flashcardsaas-3367a.firebaseapp.com",
  projectId: "flashcardsaas-3367a",
  storageBucket: "flashcardsaas-3367a.appspot.com",
  messagingSenderId: "791321359995",
  appId: "1:791321359995:web:d1583a5c240773fb73d4de",
  measurementId: "G-SE1JL0S1E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}