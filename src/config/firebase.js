// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyEScIkCSt29zoqsQ5LX-GZA4_cMuYkg0",
    authDomain: "pokedex-app-42af9.firebaseapp.com",
    projectId: "pokedex-app-42af9",
    storageBucket: "pokedex-app-42af9.appspot.com",
    messagingSenderId: "669016683196",
    appId: "1:669016683196:web:33a2c58a46f8f6461816b9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();