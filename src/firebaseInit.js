// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqbXn5UgKvLUc7uJJMo40B-vXLACWoI1c",
  authDomain: "blogging-app-322a1.firebaseapp.com",
  projectId: "blogging-app-322a1",
  storageBucket: "blogging-app-322a1.appspot.com",
  messagingSenderId: "181229176844",
  appId: "1:181229176844:web:93030907ae42b20e2b4629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);