import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

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
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Services
          </NavLink>
          <NavLink
            to="/team"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Our Team
          </NavLink>
          <NavLink
            to="/insights"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Insights
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "cta-btn active" : "cta-btn"
            }
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
