import React from "react";

function Experience() {
  const experiences = [
    { company: "Tech Corp", role: "Frontend Developer", years: "2020-2023" },
    { company: "Web Solutions", role: "Junior Developer", years: "2018-2020" },
  ];

  return (
    <section style={styles.section}>
      <h2>Experience</h2>
      <ul style={styles.list}>
        {experiences.map((exp, index) => (
          <li key={index} style={styles.listItem}>
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <p>{exp.years}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  section: { padding: "20px", backgroundColor: "#ffffff", textAlign: "center" },
  list: { listStyle: "none", padding: 0 },
  listItem: { margin: "10px 0" },
};

export default Experience;
