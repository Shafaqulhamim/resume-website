import React from "react";
import profileImage from "./images/image.png";

function Header() {
  return (
    <header style={styles.header}>
    <img
    src={profileImage}
    alt="Profile"
    style={styles.image}
  />
      <h1 style={styles.name}>Md Shafaqul Islam Hamim</h1>
      <p style={styles.title}>Web Developer</p>
      <p style={styles.contact}>Email: shafaquli@gmail.com | Phone: (409) 223-6114</p>
    </header>
  );
}

const styles = {
  image: {
    borderRadius: "50%",
    width: "100%",
    maxWidth: "200px", // Ensures the image doesn't exceed 200px
    height: "auto",    // Maintains the aspect ratio
    margin: "0 auto 20px",
  },
  header: {
    position: "fixed", // Keeps the header fixed on the left
    left: 0,
    top: 0,
    width: "35vw", // Adjust the width of the header
    height: "110vh", 
    backgroundColor: "rgb(38, 38, 38)",
    color: "#ffffff",
    padding: "20px",
    textAlign: "center",
    //boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Vertically centers content
    alignItems: "center", // Horizontally centers content
    transform: "translateY(-70px)"
  },
  name: { fontSize: "1.8rem", margin: "10px 0" },
  title: { fontSize: "1rem", margin: "10px 0" },
  contact: { fontSize: "0.9rem", margin: "10px 0" },
};

export default Header;
