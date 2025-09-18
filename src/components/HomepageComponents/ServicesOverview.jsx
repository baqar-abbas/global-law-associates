import React from "react";
import PropTypes from "prop-types";
import {
  Scale,
  Briefcase,
  FileText,
  Building,
  Globe,
  PenTool,
} from "lucide-react";
import "./ServicesOverview.css";
import { Link } from "react-router-dom"; // import Link
import { motion } from "framer-motion";

const services = [
  {
    icon: <FileText size={36} />,
    title: "Tax Registration & Filing",
    description: "NTN, GST, and tax return filing with complete compliance.",
  },
  {
    icon: <Building size={36} />,
    title: "Company Incorporation",
    description: "Private Ltd, SMC, AOP, and Sole Proprietorship setups.",
  },
  {
    icon: <PenTool size={36} />,
    title: "Legal Drafting & Contracts",
    description: "Drafting agreements, MoUs, and corporate contracts.",
  },
  {
    icon: <Briefcase size={36} />,
    title: "Corporate Compliance & Advisory",
    description: "Expert guidance for all corporate legal requirements.",
  },
  {
    icon: <Globe size={36} />,
    title: "Import/Export & Licensing",
    description: "Get your licenses approved for trade and commerce.",
  },
  {
    icon: <Scale size={36} />,
    title: "Certifications & Regulatory Approvals",
    description: "PSEB, PEC, Chamber registrations, and more.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesOverview = ({ title, subtitle, buttonText }) => {
  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">{title}</h2>
        <p className="services-subtitle">{subtitle}</p>

        {/* Animated Service Grid */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Button */}
        <div className="services-btn">
          <Link to="/services" className="btn-primary">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

// Define PropTypes
ServicesOverview.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ServicesOverview;
