import React from "react";
import { Scale, Briefcase, FileText, Building, Globe } from "lucide-react";
import { motion } from "framer-motion";
import "./FeaturedServices.css";

const featured = [
  {
    icon: <FileText size={36} />,
    title: "Tax Registration & Filing",
    desc: "Hassle-free NTN & GST registration with timely tax return filing.",
  },
  {
    icon: <Building size={36} />,
    title: "Company Incorporation",
    desc: "Private Ltd, SMC, AOP, or Sole Proprietorship — we’ve got you covered.",
  },
  {
    icon: <Briefcase size={36} />,
    title: "Corporate Compliance",
    desc: "Ensure your business meets all legal & corporate obligations.",
  },
  {
    icon: <Globe size={36} />,
    title: "Import / Export Licensing",
    desc: "Quick approvals for trade and commerce across borders.",
  },
  {
    icon: <Scale size={36} />,
    title: "Legal Drafting",
    desc: "Professional agreements, contracts, and MoUs tailored for you.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const FeaturedServices = () => {
  return (
    <section className="featured-services">
      <div className="featured-container">
        {/* Left Content */}
        <div className="featured-left">
          <h2 className="featured-title">Featured Legal Services</h2>
          <p className="featured-subtitle">
            Trusted by businesses across Pakistan for reliable, timely, and
            compliant legal solutions.
          </p>
          <button className="btn-primary">Explore Services</button>
        </div>

        {/* Right Services List */}
        <motion.div
          className="featured-right"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featured.map((item, index) => (
            <motion.div
              className="featured-item"
              key={index}
              variants={itemVariants}
            >
              <div className="featured-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;
