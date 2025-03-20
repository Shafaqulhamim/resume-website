import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Md Shafaqul Islam Hamim. All rights reserved.</p>
      <div>
        <a href="https://github.com/Shafaqulhamim" style={styles.link}>
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://www.linkedin.com/in/md-shafaqul-islam-hamim/" style={styles.link}>
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
    backgroundColor:"rgb(90, 103, 130)",
    borderRadius: "15px",
    color: "#ffffff",
  },
  link: { color: "#61dafb", textDecoration: "none" },
  "@media (max-width: 768px)": {
    section: {
      width: "90%", // Reduce width for smaller screens
      padding: "15px",
    },
  },
};

export default Footer;
