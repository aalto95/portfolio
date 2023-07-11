import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import { projects } from "./data/projects.json";
import { ProjectModel } from "./models/project.model";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.add("light");
  }, []);

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
