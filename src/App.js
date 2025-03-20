import React from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
//import Game from "./Game";
import "./App.css";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="container">
    <Header /> {/* Fixed on the left */}
    <div className="mainContent">
      <About />
      <Experience />
      <Education/>
      <Projects/>
      <Skills />
      <Footer />
    </div>
  </div>
  );
};

export default App;
