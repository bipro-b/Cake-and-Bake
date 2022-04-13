
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const intializeFirebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default intializeFirebaseAuthentication;