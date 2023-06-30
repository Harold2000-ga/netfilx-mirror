// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_NETFLIX_MIRROR_API_KEY,
  authDomain: import.meta.env.VITE_NETFLIX_MIRROR_DOMAIN,
  projectId: 'netflix-mirror',
  storageBucket: 'netflix-mirror.appspot.com',
  messagingSenderId: import.meta.env.VITE_NETFLIX_MIRROR_MESSANGER_SENDING,
  appId: import.meta.env.VITE_NETFLIX_MIRROR_APP_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
