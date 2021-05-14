import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';

import App  from './App';
import { FirebaseContext } from './context/firebase';


//import { seedDatabase } from './seed';


const config = {
    apiKey: "AIzaSyCTnP5XMLF-dONzx4Bakt7GvjKnRb8jd70",
    authDomain: "netflix-clone-scrimba-d5585.firebaseapp.com",
    databaseURL: "netflix-clone-scrimba-d5585.firebaseio.com",
    projectId: "netflix-clone-scrimba-d5585",
    storageBucket: "netflix-clone-scrimba-d5585.appspot.com",
    messagingSenderId: "469350232874",
    appId: "1:469350232874:web:bf85e2421e9963b35d2453"
};

const firebase = window.firebase.initializeApp(config);
//seedDatabase(firebase);

ReactDOM.render(
  <>
  <FirebaseContext.Provider value={{ firebase: window.firebase}}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

