import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.name}>Md Shafaqul Islam Hamim</h1>
      <p style={styles.title}>Web Developer</p>
      <p style={styles.contact}>Email: shafaquli@gmail.com | Phone: (409) 223-6114</p>
    </header>
  );
}

const styles = {
  header: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#282c34",
    color: "#ffffff",
  },
  name: { fontSize: "2.5rem", margin: "0" },
  title: { fontSize: "1.5rem", margin: "10px 0" },
  contact: { fontSize: "1rem", margin: "0" },
};

export default Header;
