import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./InsightsHero.css";

const InsightsHero = () => {
  return (
    <section className="insights-hero">
      <div
        className="insights-hero-bg"
        style={{ backgroundImage: "url(/images/insights-new.jpg)" }}
      ></div>
      <div className="insights-hero-overlay"></div>

      <div className="insights-hero-content">
        <motion.h1
          className="insights-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Insights & Articles
        </motion.h1>

        <motion.p
          className="insights-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Stay updated with expert perspectives on tax, law, and corporate
          matters.
        </motion.p>

        <motion.div
          className="insights-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <Link to="/insights" className="btn-primary">
            View All Articles
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsHero;
