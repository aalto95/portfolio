import logo from './logo.svg';

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {useAuthState} from "react-firebase-hooks/auth";

import './App.css';
import './components/Projects/Projects'
import './components/Navbar/Navbar'
import {BrowserRouter, Route} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";

firebase.initializeApp({
    apiKey: "AIzaSyBjdMVFjxSsi0PuIguuE1bY27u2DIh1yBw",
    authDomain: "portfolio-f656b.firebaseapp.com",
    projectId: "portfolio-f656b",
    storageBucket: "portfolio-f656b.appspot.com",
    messagingSenderId: "481293606628",
    appId: "1:481293606628:web:45bf774f97d4ab1b41d6f1",
    measurementId: "G-69P3QRJDV8"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
          <Route path="/about"/>
          <Route path="/github"/>
          <Route path="/resume"/>
          <Route path="/projects"
               render={ () => <Projects state={props.state}/>}/>
          <Route path="/contacts"
                 render={ () => <Contacts/>}/>
      </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
