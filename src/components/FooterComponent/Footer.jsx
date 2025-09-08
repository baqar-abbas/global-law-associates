import React from "react";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import "./Footer.css";

const Footer = () => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="footer-container" variants={containerVariants}>
        {/* Column 1 - Quick Links */}
        <motion.div className="footer-col" variants={itemVariants}>
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            {quickLinks.map((link, i) => (
              <motion.li key={i} variants={itemVariants}>
                <Link to={link.path}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Column 2 - Services */}
        <motion.div className="footer-col" variants={itemVariants}>
          <h3 className="footer-title">Our Services</h3>
          <ul>
            {[
              "Tax & Corporate",
              "Litigation & Civil",
              "Business Setup",
              "Import Export License",
              "Tax Return Filing",
            ].map((service, i) => (
              <motion.li key={i} variants={itemVariants}>
                <Link to="/services">{service}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3 - Office Info */}
        <motion.div className="footer-col" variants={itemVariants}>
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
        </motion.div>

        {/* Column 4 - Social */}
        <motion.div className="footer-col" variants={itemVariants}>
          <h3 className="footer-title">Follow Us</h3>
          <motion.div
            className="footer-social"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { icon: <Facebook size={20} />, link: "#" },
              { icon: <Linkedin size={20} />, link: "#" },
              { icon: <Twitter size={20} />, link: "#" },
              { icon: <Instagram size={20} />, link: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div className="footer-bottom" variants={itemVariants}>
        <p>
          © {new Date().getFullYear()} Global Law Associates. All rights
          reserved.
        </p>
        <p>
          Developed by{" "}
          <span
            data-tooltip-id="dev-tooltip"
            data-tooltip-content="Baqar Abbas – Frontend Developer | React Specialist"
            style={{ color: "#ffd700", fontWeight: "600", cursor: "pointer" }}
          >
            Baqar Abbas
          </span>
        </p>
      </motion.div>

      {/* Tooltip Component */}
      <Tooltip
        id="dev-tooltip"
        place="top"
        effect="solid"
        style={{
          backgroundColor: "#002147",
          color: "#fff",
          fontSize: "0.85rem",
        }}
      />
    </motion.footer>
  );
};

export default Footer;
