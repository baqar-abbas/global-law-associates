import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Global Law Associates" />
        </div>

        {/* Hamburger / Close Icon */}
        <div
          className="nav-toggle"
          onClick={() => {
            setIsOpen(!isOpen);
            console.log("Navbar toggled:", isOpen);
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#team">Our Team</a>
          <a href="#insights">Insights</a>
          <a href="#contact" className="cta-btn">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
