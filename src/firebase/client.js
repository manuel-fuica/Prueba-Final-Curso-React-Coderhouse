//configuracion de firebase para nuestro proyecto, estos datos se traen de la pagina de firebase


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxYf1cmR3NAvUjFhXKXjivJ0mv5Pjgohk",
    authDomain: "ecommerce-react-bff4f.firebaseapp.com",
    projectId: "ecommerce-react-bff4f",
    storageBucket: "ecommerce-react-bff4f.appspot.com",
    messagingSenderId: "496980864252",
    appId: "1:496980864252:web:9cb9da4a67e765cd7a7b79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)