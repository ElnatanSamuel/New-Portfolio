import "./App.css";
import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App max-w-7xl m-auto">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
