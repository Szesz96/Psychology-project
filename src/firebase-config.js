import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDDF_BBzwYQfcQ2odqvhdBP9KjFmVyGdCE",
  authDomain: "psychologyblog-752c4.firebaseapp.com",
  projectId: "psychologyblog-752c4",
  storageBucket: "psychologyblog-752c4.appspot.com",
  messagingSenderId: "428871997513",
  appId: "1:428871997513:web:66dae7f8bffabfce914798"
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()