import logo from './logo.svg';
import './App.css';
import './components/Projects/Projects'
import './components/Navbar/Navbar'
import {BrowserRouter, Route} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";

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
