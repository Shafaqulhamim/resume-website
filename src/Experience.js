import React from "react";

function Experience() {
  const experiences = [
    { company: "Tritech Building Services Ltd, Dhaka", role: "Frontend Developer", years: "Aug 2022-Jul 2023" },
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
    borderRadius:"8px",
    marginBottom: "20px"
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "15px",
  },
  company: {
    fontWeight: "bold",
  },
  role: {
    margin: "5px 0",
  },
  years: {
    color: "#666",
  },
  line: {
    border: "none",
    borderTop: "2px solid #ddd",
    marginTop: "20px",
    width: "100%",
  },
};

export default Experience;
