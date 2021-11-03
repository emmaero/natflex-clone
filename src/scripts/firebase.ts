import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0e_-Z0KoWIlYkGHC9ofUEZdU7vYNWuwE",
  authDomain: "natflex-clone.firebaseapp.com",
  projectId: "natflex-clone",
  storageBucket: "natflex-clone.appspot.com",
  messagingSenderId: "683992331380",
  appId: "1:683992331380:web:8c3672dd9d30eaee480d21",
};

// Initialize Firebase
const firebaseInstance = initializeApp(firebaseConfig);

export const fireStoreDatabase = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
export const cloudStorageReference = getStorage(firebaseInstance);
