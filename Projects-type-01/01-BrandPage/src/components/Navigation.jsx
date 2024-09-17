import React from "react";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="images/brand_logo.png" alt="logo" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About us</li>
        <li href="#">contact Us</li>
        <li href="#">Complain</li>
      </ul>
      <button>login</button>
    </nav>
  );
};

export default Navigation;
