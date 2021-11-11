import './App.css';
import './components/Projects/Projects'
import './components/Navbar'
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer"
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import About from "./components/About/About";
import Resume from "./components/Resume";

const App = props => {
    return (
        <div className='App'>
            <Navbar/>
            <ProjectsContainer store={props.store}/>
            <About/>
            <Contacts/>
            <Resume/>
            <Footer/>
        </div>
    )
}

export default App;
