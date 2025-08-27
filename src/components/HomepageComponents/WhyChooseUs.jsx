import React from "react";
import { ShieldCheck, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import "./WhyChooseUs.css";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Trusted Expertise",
    description:
      "Over a decade of experience handling complex corporate and tax matters.",
  },
  {
    icon: <Users size={40} />,
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients' needs and work collaboratively to achieve their goals.",
  },
  {
    icon: <Award size={40} />,
    title: "Proven Track Record",
    description:
      "Successful representation and advisory for clients across diffent legal affairs.",
  },
  {
    icon: <Clock size={40} />,
    title: "Timely Solutions",
    description:
      "Quick turnaround with reliable, efficient, and practical advice.",
  },
];

const containerVariants = {
  hidden: { opcaity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="why-container">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">
          Trusted by Clients across Pakistan for reliable legal solutions.
        </p>

        <motion.div
          className="why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              className="why-card"
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="why-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
