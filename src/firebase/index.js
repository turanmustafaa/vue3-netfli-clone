import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyASu19RrAcarUQ7maaR4m5Tc0FY87skbUE',
  authDomain: 'vue3-netflix.firebaseapp.com',
  projectId: 'vue3-netflix',
  storageBucket: 'vue3-netflix.appspot.com',
  messagingSenderId: '336937931651',
  appId: '1:336937931651:web:ec813004b4c8c143781cb6'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}