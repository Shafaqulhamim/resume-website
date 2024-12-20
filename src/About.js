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
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#f4f4f9",
    textAlign: "center",
  },
};

export default About;
