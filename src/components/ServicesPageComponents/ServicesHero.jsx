import React from "react";
import { motion } from "framer-motion";
import "./ServicesHero.css";

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Our Legal & Corporate Services</h1>
        <p className="hero-subtitle">
          Providing comprehensive solutions to empower businesses and
          individuals with clarity and confidence.
        </p>
        <a href="#services" className="btn-primary">
          Explore Our Services
        </a>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
