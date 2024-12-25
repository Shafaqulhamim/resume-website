import React from "react";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
// import Game from "./Game";
import Header from "./Header";
import Skills from "./Skills";

function App() {
  return (
    <div style={styles.container}>
    <Header /> {/* Fixed on the left */}
    <div style={styles.mainContent}>
      <About />
      <Experience />
      <Skills />
      <Footer />
    </div>
  </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row", // Align components horizontally
  },
  mainContent: {
    flex: 1, // Main content takes the remaining width
    marginLeft: "calc(35vw + 40px)", // Leave space for the fixed header
    padding: "20px",
    overflowY: "auto", // Enables scrolling for the main content
  },
};

export default App;
