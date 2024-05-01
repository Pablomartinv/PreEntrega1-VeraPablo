import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDRayu--P8jNU3kPNlNith26B2HJHPNpys',
  authDomain: 'patagonia-trekking.firebaseapp.com',
  projectId: 'patagonia-trekking',
  storageBucket: 'patagonia-trekking.appspot.com',
  messagingSenderId: '588969920454',
  appId: '1:588969920454:web:f6863f60c261a7c65f94c7',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
