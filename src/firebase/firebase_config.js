import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBwQCjW2lNwIZzwqxPKsMnEiHalYNgk7ao",
    authDomain: "toys-5f40d.firebaseapp.com",
    projectId: "toys-5f40d",
    storageBucket: "toys-5f40d.appspot.com",
    messagingSenderId: "728603330715",
    appId: "1:728603330715:web:d89199769b70fde94ede3e",
    measurementId: "G-L7Q7ZP5731"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);