import React from "react";
import "./navbar.css";

const Navbar = ({ toggleMenu }) => {
  return (
    <div className="navbar">
      <div className="burger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="logo">
        <img
          src="https://rec-data.kalibrr.com/www.kalibrr.com/logos/7Y932PABW353CGS4368XK65AJP2HPKDYGXMJV68A-5cf0b967.png"
          alt="Logo"
        />
      </div>

      <div className="dashboard">
        <p>|</p>
        <h1>Dashboard APS</h1>
      </div>
    </div>
  );
};

export default Navbar;