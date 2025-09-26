import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./TeamHero.css";

const TeamHero = () => {
  return (
    <section className="team-hero">
      {/* Background Image */}
      <div
        className="team-hero-bg"
        style={{ backgroundImage: "url(/images/legal-team-image.jpg)" }}
      ></div>

      {/* Overlay Content */}
      <div className="team-hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Meet Our Legal Experts
        </motion.h1>
        <motion.p
          className="team-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          A dedicated team of advocates, advisors, and corporate specialists
          working for your success.
        </motion.p>

        <motion.p
          className="team-hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          At <strong>Global Law Associates</strong>, our strength lies in our
          people. With decades of combined experience in law, taxation, and
          corporate services, our team is committed to guiding clients with
          integrity and excellence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="team-hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Link to="/services" className="btn-primary">
            Explore Services
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHero;
