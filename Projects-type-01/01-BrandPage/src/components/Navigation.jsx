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
        <li href="#">About</li>
        <li href="#">contact</li>
        <li href="#">Samaj m aay akya</li>
      </ul>
      <button>login</button>
    </nav>
  );
};

export default Navigation;
