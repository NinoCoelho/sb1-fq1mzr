import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
  
  apiKey: "AIzaSyDYBQKq4-dCi2KRbOiT3QFHCNHNfJFYdZ4",
  authDomain: "pacientspoc.firebaseapp.com",
  projectId: "pacientspoc",
  storageBucket: "pacientspoc.appspot.com",
  messagingSenderId: "868402602574",
  appId: "1:868402602574:web:ac92c55e4e2b7b16ebd91f",
  measurementId: "G-B6EB1G7LFW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);