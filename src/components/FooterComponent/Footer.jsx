import React from "react";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Quick Links */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/insights">Insights</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 2 - Services */}
        <div className="footer-col">
          <h3 className="footer-title">Our Services</h3>
          <ul>
            <li>
              <Link to="/services">Tax & Corporate</Link>
            </li>
            <li>
              <Link to="/services">Litigation & Civil</Link>
            </li>
            <li>
              <Link to="/services">Business Setup</Link>
            </li>
            <li>
              <Link to="/services">Import Export License</Link>
            </li>
            <li>
              <Link to="/services">Tax Return Filing</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Office Info */}
        <div className="footer-col">
          <h3 className="footer-title">Office</h3>
          <p>
            📍 Office #123, Shadman Town,
            <br /> Karachi, Pakistan
          </p>
          <p>
            ☎️ <a href="tel:+923001234567">+92 300 1234567</a>
          </p>
          <p>
            ✉️{" "}
            <a href="mailto:info@globallaw.com">info@globallawassociates.com</a>
          </p>
        </div>

        {/* Column 4 - Social */}
        <div className="footer-col">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noreferrer">
              <Facebook size={20} />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <Twitter size={20} />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Global Law Associates. All rights
          reserved.
        </p>
        <p>
          Developed by{" "}
          <span className="dev-tooltip">
            Baqar Abbas
            <span className="tooltip-text">
              Frontend Developer | React & UI Specialist
            </span>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
