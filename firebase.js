import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBTn4vAVRx_Fcjvf5Pae5rza2YvXsy4ZDs',
  authDomain: 'at-what-cost.firebaseapp.com',
  projectId: 'at-what-cost',
  storageBucket: 'at-what-cost.appspot.com',
  messagingSenderId: '401782477166',
  appId: '1:401782477166:web:f98ae8ba7303120749f17f',
  measurementId: 'G-CKLN2CEGSX',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
