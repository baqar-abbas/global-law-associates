import React from "react";
import {
  ShieldCheck, // Integrity
  Users, // Client Commitment
  Lock, // Confidentiality
  Award, // Excellence
  CheckCircle, // Accountability
  Lightbulb, // Innovation
} from "lucide-react";
import { motion } from "framer-motion";
import "./CoreValues.css";

const values = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Integrity & Ethics",
    description:
      "We act with honesty, transparency, and fairness in every case.",
  },
  {
    icon: <Users size={40} />,
    title: "Client Commitment",
    description:
      "Our clients’ needs are our priority — we listen, advise, and stand by them.",
  },
  {
    icon: <Lock size={40} />,
    title: "Confidentiality & Trust",
    description:
      "We safeguard your information and build relationships based on trust.",
  },
  {
    icon: <Award size={40} />,
    title: "Excellence & Professionalism",
    description:
      "Rigorous preparation, attention to detail, and ongoing learning drive our work.",
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Accountability & Responsibility",
    description: "We own our actions and always strive to do what is right.",
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Innovation & Adaptability",
    description:
      "We embrace new ideas and adapt to changing laws to better serve our clients.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CoreValues = () => {
  return (
    <section className="core-values">
      {/* Section Heading */}
      <motion.div
        className="core-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Our Core Values</h2>
        <p>Guiding Principles that Define Global Law Associates</p>
      </motion.div>

      {/* Values Grid */}
      <motion.div
        className="values-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {values.map((value, index) => (
          <motion.div
            className="value-card"
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
          >
            <div className="value-icon">{value.icon}</div>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-desc">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CoreValues;
