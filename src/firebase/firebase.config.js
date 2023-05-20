// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIeWwUWbVLYSDDJYtOb_fu9OeLRc59u90",
  authDomain: "toys-marketplace-bcbc0.firebaseapp.com",
  projectId: "toys-marketplace-bcbc0",
  storageBucket: "toys-marketplace-bcbc0.appspot.com",
  messagingSenderId: "979770875172",
  appId: "1:979770875172:web:3dc5808190af223e3fe7b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app