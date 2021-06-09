import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
/* import { firebase } from "firebase";
import { firebaseConfig } from './Database';

firebase.initializeApp(firebaseConfig); */

ReactDOM.render(<BrowserRouter><App color="light"/></BrowserRouter>,document.getElementById('root'));

