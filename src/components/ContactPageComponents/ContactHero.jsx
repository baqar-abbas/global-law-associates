import React from "react";
import { motion } from "framer-motion";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div
        className="contact-hero-bg"
        style={{ backgroundImage: "url(/images/contact.webp)" }}
      ></div>
      <div className="contact-hero-overlay"></div>

      <div className="contact-hero-content">
        <motion.h1
          className="contact-hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get in Touch with Global Law Associates
        </motion.h1>
        <motion.p
          className="contact-hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Have a question? Need advice? We’re here to help you with your legal
          matters.
        </motion.p>
        <motion.div
          className="contact-hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <a href="#contact-form" className="btn-primary">
            Contact Form
          </a>
          <a href="#location" className="btn-outline">
            Find Our Office
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
