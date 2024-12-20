import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 John Doe. All rights reserved.</p>
      <div>
        <a href="https://github.com/johndoe" style={styles.link}>
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://linkedin.com/in/johndoe" style={styles.link}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#282c34",
    color: "#ffffff",
  },
  link: { color: "#61dafb", textDecoration: "none" },
};

export default Footer;
