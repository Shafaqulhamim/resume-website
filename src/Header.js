import React from "react";
import "./Header.css"; // Import external CSS
import profileImage from "./images/image.png";

function Header() {
  return (
    <div className="header">
      <img src={profileImage} alt="Profile" className="image" />
      <h1 className="name">Md Shafaqul Islam Hamim</h1>
      <p className="title">Web Developer</p>
      <p className="contact">Email: shafaquli@gmail.com | Phone: (409) 223-6114</p>
    </div>
  );
}

export default Header;
