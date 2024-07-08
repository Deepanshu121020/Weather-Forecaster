// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnMCQdKaUjmYUri8ury3S3kehffX_ZxzA",
  authDomain: "elated-chariot-402408.firebaseapp.com",
  projectId: "elated-chariot-402408",
  storageBucket: "elated-chariot-402408.appspot.com",
  messagingSenderId: "1063641292972",
  appId: "1:1063641292972:web:cf4036965857437338ff09",
  measurementId: "G-V9MCQ667JM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;