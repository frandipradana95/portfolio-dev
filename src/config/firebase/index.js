// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAcol1M_HweK6r1I_SybUHtZzVe7rvw_us",
	authDomain: "my-portfolio-1137e.firebaseapp.com",
	projectId: "my-portfolio-1137e",
	storageBucket: "my-portfolio-1137e.firebasestorage.app",
	messagingSenderId: "132397340907",
	appId: "1:132397340907:web:cfd7d37b2d454921c046ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
