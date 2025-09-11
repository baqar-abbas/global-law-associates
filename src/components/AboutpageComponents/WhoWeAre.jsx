import React from "react";
import { motion, stagger } from "framer-motion";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const parentVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const imageMotion = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const textMotion = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  return (
    <section className="who-we-are">
      <motion.div
        className="who-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={parentVariants}
      >
        <motion.div className="who-image" variants={imageMotion}>
          <img src="/images/who-we-are.jpg" alt="Our Team" />
        </motion.div>
        <motion.div className="who-text" variants={textMotion}>
          <h2 className="who-title">Who We Are</h2>
          <p className="who-description">
            Global Law Associates is a dedicated legal advisory firm based in
            Pakistan, committed to delivering tailored, results-driven solutions
            across corporate, tax, property, and regulatory matters. Founded on
            principles of integrity, trust, and client-focused excellence, we
            blend local expertise with a forward-looking vision. Our team of
            experienced advocates ensures personalized support that empowers
            your success, whether you're establishing a new venture, ensuring
            compliance, or managing disputes.
          </p>
          <button className="btn-primary">Learn More</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
