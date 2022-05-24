import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: "1:481066354877:web:fda74f9355642631118fd4"
};

initializeApp(firebaseConfig);

createRoot(
  document.getElementById('root')
).render (
    <App />
);

