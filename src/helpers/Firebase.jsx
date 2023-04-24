// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRZjqjGXMuFHjXyjaUj8E9Nz_dPGzrMpw',
  authDomain: 'to-do-list-abf21.firebaseapp.com',
  projectId: 'to-do-list-abf21',
  storageBucket: 'to-do-list-abf21.appspot.com',
  messagingSenderId: '241174268029',
  appId: '1:241174268029:web:a01bb5dac1079b89b98914',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
