// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBnW0LZcrqITSxxXmqrSvus6NMDslP5MD4',
  authDomain: 'image-gallery-dfb67.firebaseapp.com',
  projectId: 'image-gallery-dfb67',
  storageBucket: 'image-gallery-dfb67.appspot.com',
  messagingSenderId: '755686847290',
  appId: 'G-THF7K6X80T',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
