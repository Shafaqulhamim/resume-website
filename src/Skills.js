import React from "react";

function Skills() {
  const skills = ["React.js", "Node.js", "JavaScript", "CSS", "HTML"];

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
    backgroundColor: "#f4f4f9",
    textAlign: "center",
  },
  list: { listStyle: "none", padding: 0, display: "flex", justifyContent: "center" },
  listItem: { margin: "0 10px" },
};

export default Skills;
