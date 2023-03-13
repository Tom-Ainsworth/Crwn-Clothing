import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);

	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	// if user data exists
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		// set doc with user auth data
		try {
			await setDoc(userDocRef, {
				displayName: displayName,
				email: email,
				createdAt,
			});
		} catch (error) {
			console.log("Error creating user: ", error);
		}
	}
	return userDocRef;
};
