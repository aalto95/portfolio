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
import { useAppDispatch } from "./app/hooks";
import { setDark, setLight } from "./features/themeSlice";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      dispatch(setLight());
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      dispatch(setDark());
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
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
