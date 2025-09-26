import React from "react";
import { motion } from "framer-motion";
import "./ComingSoon.css";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <section className="coming-soon">
      <div className="coming-content">
        <motion.h2
          className="cs-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Team Is Coming Soon
        </motion.h2>
        <motion.p
          className="cs-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We’re building a team of expert legal professionals to serve you
          better.
        </motion.p>
        <motion.div
          className="cs-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="/images/coming-soon.png"
            alt="Coming Soon"
            className="cs-image"
          />
        </motion.div>
        <motion.div
          className="cs-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
