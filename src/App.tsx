import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import { projects } from "./data/projects.json";
import { ProjectModel } from "./models/project.model";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {projects.map((project: ProjectModel) => (
        <Project key={project.id} project={project} />
      ))}
      <About />
      <Contacts />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
