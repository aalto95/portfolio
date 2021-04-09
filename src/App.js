import logo from './logo.svg';
import './App.css';
import './components/Projects/Projects'
import './components/Navbar/Navbar'
import {BrowserRouter, Route} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/Contacts/Contacts"
import Information from "./components/Information/Information";

const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
          <Route path="/about"/>
          <Route path="/github"/>
          <Route path="/resume"/>
          <Route path="/projects"
               render={ () => <Projects/>}/>
          <Route path="/contacts"
                 render={ () => <Contacts/>}/>
          <Route path="/" render={ () => <Information/>}/>

      </div>
        {/*<Information />*/}
    </BrowserRouter>
  );
}

export default App;
