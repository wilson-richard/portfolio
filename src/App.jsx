
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import "./App.css";
import Snowfall from "react-snowfall";

function App() {
  return (
    <>
    
      <Snowfall
        color="#ffffff"
        snowflakeCount={120}
        speed={[0.5, 2]}
        wind={[-0.5, 1.5]}
        radius={[1, 3]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      <Navbar />
      <Hero />
      <Achievements />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
