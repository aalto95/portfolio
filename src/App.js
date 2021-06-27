import './App.css';
import './components/Projects/Projects'
import './components/Navbar/Navbar'
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";

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
