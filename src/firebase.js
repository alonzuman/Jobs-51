import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Prod
const firebaseConfig = {
	apiKey: "AIzaSyBlwYofd1KpSUEAaNBW50ZrBMSi-FBcCuM",
	authDomain: "jobs-51.firebaseapp.com",
	databaseURL: "https://jobs-51.firebaseio.com",
	projectId: "jobs-51",
	storageBucket: "jobs-51.appspot.com",
	messagingSenderId: "275815227889",
	appId: "1:275815227889:web:5acc97bb80f2b82e17e450",
	measurementId: "G-5ZFDZB092K",
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
