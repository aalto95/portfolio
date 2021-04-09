import logo from './logo.svg';
import './App.css';
import './components/Projects'
import './components/Navbar'
import {BrowserRouter, Route} from "react-router-dom";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Route path="/projects"
               render={ () => <Projects/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
