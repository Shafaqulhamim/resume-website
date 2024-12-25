import React from "react";

function About() {
  return (
    <section style={styles.section}>
      <h2>About Me</h2>
      <p>
        I am a passionate developer with experience in building web applications
        using modern frameworks. I enjoy solving complex problems and creating
        impactful solutions.
      </p>
      <hr style={styles.line} />
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    textAlign: "left", 
    backgroundColor: "#f4f4f9",
    //maxWidth: "800px", 
    margin: "0 auto",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  line: {
    border: "none",
    borderTop: "2px solid #ddd", 
    marginTop: "20px",
    width: "100%", 
  },
};

export default About;
