import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // import Link
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with a confidential consultation to understand your needs and legal challenges.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Our team develops a tailored legal strategy to achieve the best possible outcome for your case.",
  },
  {
    number: "03",
    title: "Take Action",
    description:
      "With your approval, we move forward and represent you effectively in all legal processes.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-container">
        {/* Section Heading */}
        <div className="how-header">
          <h2>How It Works</h2>
          <p>Our simple 3-step process to resolve your legal matters.</p>
        </div>

        {/* Steps */}
        <motion.div
          className="how-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="how-card"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="how-btn">
          <Link to="/contact" className="btn-golden">
            Let’s Discuss
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
