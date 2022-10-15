import "./App.css";
import "./components/Projects/Projects";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects";
import About from "./components/About";
import Resume from "./components/Resume";

const App = (props) => {
  return (
    <div className="App">
      <Navbar />
      <Projects />
      <About />
      <Contacts />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
