import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBs4iSiYXuUpnjjDIUafdRHQOFroz4SwXQ",
	authDomain: "crwn-clothing-db-f7a5f.firebaseapp.com",
	projectId: "crwn-clothing-db-f7a5f",
	storageBucket: "crwn-clothing-db-f7a5f.appspot.com",
	messagingSenderId: "321442322235",
	appId: "1:321442322235:web:dd77e253cb710ba7cac91e",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
