import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY
  ,
  authDomain: "la-casa-del-tequila.firebaseapp.com",
  projectId: "la-casa-del-tequila",
  storageBucket: "la-casa-del-tequila.appspot.com",
  messagingSenderId: "481066354877",
  appId: "1:481066354877:web:fda74f9355642631118fd4"
};

initializeApp(firebaseConfig);

createRoot(
  document.getElementById('root')
).render (
    <App />
);

