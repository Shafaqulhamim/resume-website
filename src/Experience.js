import React from "react";

function Experience() {
  const experiences = [
    { company: "Tritech Building Services Ltd., Dhaka", role: "Frontend Developer", years: "Aug 2022-Jul 2023" },
    { company: "EXL Communications Ltd", role: "Flutter Developer Intern", years: "Jan 2022-Mar 2022" },
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
