import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // import Link
import "./CallToAction.css";

// wrap Link with motion
const MotionLink = motion(Link);

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        {/* Animated Title */}
        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Ready to Register Your Business?
        </motion.h2>

        {/* Animated Subtitle */}
        <motion.p
          className="cta-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get expert tax, legal, and corporate services today.
        </motion.p>
        {/* Buttons with stagger animation */}
        <motion.div
          className="cta-buttons"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Request Consultation */}
          <MotionLink
            to="/contact"
            className="btn-primary-cta"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -4,
              scale: 1.05,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.97 }}
          >
            Request Consultation
          </MotionLink>

          {/* Contact Us */}
          <MotionLink
            to="/contact"
            className="btn-outline-cta"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -4,
              scale: 1.05,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
