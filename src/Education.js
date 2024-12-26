import React from "react";

function Education() {
  const educations = [
    { company: "Lamar University, Beaumont, TX", role: "Master's in Computer Science", years: "2023-Ongoing" },
    { company: "North South University, Dhaka, Bangladesh", role: "Bachelor's in Computer Science Engineering", years: "2018-2022" },
  ];

  return (
    <section style={styles.section}>
      <h2>Education</h2>
      <ul style={styles.list}>
        {educations.map((exp, index) => (
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
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#fff",
    //maxWidth: "800px",
    margin: "20px auto",
    borderRadius:"15px",
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
    borderTop: "2px solid rgba(255, 255, 255, 0.2)",
    marginTop: "20px",
    width: "100%",
  },
};

export default Education;
