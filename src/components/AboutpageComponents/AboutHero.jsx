import React from "react";
import { motion } from "framer-motion";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay">
        <motion.h1
          className="about-hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Global Law Associates
        </motion.h1>
        <motion.p
          className="about-hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Trusted Legal & Tax Experts in Pakistan
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
