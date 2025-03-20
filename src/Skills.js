import React from "react";

function Skills() {
  const skills = ["React.js", "Node.js","Flutter" ,"Django" ,"Python", "JavaScript", "CSS", "HTML"];

  return (
    <section style={styles.section}>
      <h2>Skills</h2>
      <ul style={styles.list}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.listItem}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#fff",
    // maxWidth: "800px",
    margin: "20px auto",
    borderRadius:"15px",
    textAlign: "center",
    marginBottom: "20px",
    maxWidth:"100%",
    transition: "0.3s ease-in-out",
  },
  list: { listStyle: "none", padding: 0, display: "flex", justifyContent: "center", flexWrap: "wrap" },
  listItem: { margin: "0 10px", forntSize: "1.2em", },
  "@media (max-width: 768px)": {
    section: {
      width: "90%", // Reduce width for smaller screens
      padding: "15px",
    },
  },
};

export default Skills;
