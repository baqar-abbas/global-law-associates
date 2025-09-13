import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react"; // icons
import "./MissionVision.css";

const MissionVision = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="mission-vision">
      <div className="mv-heading">
        <h2 className="mv-main-title">Our Mission & Vision</h2>
        <p className="mv-subtitle">
          Defining our purpose and long-term direction.
        </p>
      </div>

      <motion.div
        className="mission-vision-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Mission Card */}
        <motion.div className="mv-card" variants={itemVariants}>
          <div className="mv-icon">
            <Target size={40} />
          </div>
          <h3 className="mv-title">Our Mission</h3>
          <p className="mv-text">
            To provide reliable, efficient, and client-focused legal and tax
            services that empower businesses and individuals to thrive with
            confidence.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div className="mv-card" variants={itemVariants}>
          <div className="mv-icon">
            <Eye size={40} />
          </div>
          <h3 className="mv-title">Our Vision</h3>
          <p className="mv-text">
            To be the most trusted and innovative legal and corporate advisory
            firm in Pakistan, driving sustainable growth and ethical practices.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionVision;
