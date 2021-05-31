import 'firebase/auth'
import 'firebase/firestore'
import './App.css';
import './components/Projects/Projects'
import './components/Navbar/Navbar'
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";

const App = props => {
    return (
        <BrowserRouter>
            <Navbar/>
            <ProjectsContainer store={props.store}/>
            <About/>
            <Contacts/>
            <Resume />
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
