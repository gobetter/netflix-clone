// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBcizRKFoEQwH_mHbJuuRFwM41GEYqe7Ec',
  authDomain: 'netflixclone-nextjs.firebaseapp.com',
  projectId: 'netflixclone-nextjs',
  storageBucket: 'netflixclone-nextjs.appspot.com',
  messagingSenderId: '708376112252',
  appId: '1:708376112252:web:910af3a85b90697ee56df9',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
