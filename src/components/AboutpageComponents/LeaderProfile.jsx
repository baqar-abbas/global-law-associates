import React from "react";
import { motion } from "framer-motion";
import "./LeaderProfile.css";

const leaderDetails = [
  {
    name: "Khuwaja Jamil Ahmed",
    role: "Founder & Lead Advocate",
    experience:
      "30+ Years of Experience in Civil, Corporate, and Regulatory Law",
    description: `With three decades of experience in civil, corporate, and regulatory law, 
    Khuwaja Jamil Ahmed is more than just the founding partner of Global Law Associates — 
    he is the embodiment of integrity, wisdom, and tireless advocacy. 
    Having handled landmark cases across Islamabad, Lahore, and beyond, 
    he brings a depth of legal insight combined with a client-first approach. 
    Whether navigating complex litigation, contract disputes, or advisory roles, 
    his mission has always been the same: fairness, clarity, and results for clients.`,
    imgSrc: "/images/khuwaja-sb.PNG",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.3 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const LeaderProfile = () => {
  return (
    <section className="leader-profile">
      <div className="leader-heading">
        <h2 className="leader-title">Leadership & Legacy</h2>
        <p className="leader-subtitle">
          Guided by experience, driven by integrity.
        </p>
      </div>

      {leaderDetails.map((leader, index) => (
        <motion.div
          className="leader-container"
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="leader-image" variants={imageVariants}>
            <img src={leader.imgSrc} alt={leader.name} />
          </motion.div>
          <motion.div className="leader-text" variants={textVariants}>
            <h2 className="leader-name">{leader.name}</h2>
            <h3 className="leader-role">{leader.role}</h3>
            <p className="leader-experience">{leader.experience}</p>
            <p className="leader-description">{leader.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default LeaderProfile;
