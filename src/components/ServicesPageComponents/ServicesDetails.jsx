import React from "react";
import {
  FileText, // Tax
  Building, // Company
  User, // Sole Proprietorship
  Users, // AOP / Firm
  Landmark, // Chamber
  Globe, // Import Export
  Scale, // Certifications
  ClipboardCheck, // Compliance / 7E
  ShieldCheck, // Trademark
  PenTool, // Legal Drafting
  Briefcase, // Corporate Compliance
} from "lucide-react";
import { motion } from "framer-motion";
import "./ServicesDetails.css";

const services = [
  {
    icon: <FileText size={40} />,
    title: "FBR NTN / GST Registration",
    description:
      "We assist in obtaining National Tax Number (NTN) and GST registration with FBR, ensuring proper category selection, accurate documentation, and hassle-free compliance.",
  },
  {
    icon: <FileText size={40} />,
    title: "Tax Return Filing",
    description:
      "Complete assistance in preparing and filing annual tax returns for individuals, firms, and companies. We maximize lawful deductions, handle audits, and represent you before tax authorities.",
  },
  {
    icon: <User size={40} />,
    title: "Sole Proprietorship Registration",
    description:
      "Guidance on setting up a sole proprietorship, including registration, tax implications, and legal compliance. We make the process smooth and legally sound.",
  },
  {
    icon: <Building size={40} />,
    title: "Company Incorporation (Pvt Ltd / SMC)",
    description:
      "End-to-end company registration with SECP. From name reservation, drafting legal documents, to incorporation of Private Limited, Single Member Companies, and corporate compliance.",
  },
  {
    icon: <Users size={40} />,
    title: "AOP / Partnership Firm Registration",
    description:
      "Expert services for forming an Association of Persons or Partnership firm, including drafting agreements, registration with tax authorities, and chamber memberships.",
  },
  {
    icon: <Landmark size={40} />,
    title: "Chamber Registration",
    description:
      "We handle applications, documentation, and approvals for registering your business with the Chamber of Commerce, giving your firm credibility and networking opportunities.",
  },
  {
    icon: <Scale size={40} />,
    title: "PSEB & PEC Certification",
    description:
      "Support for Pakistan Software Export Board (PSEB) certification for IT firms and Pakistan Engineering Council (PEC) registration for engineering firms to ensure compliance.",
  },
  {
    icon: <Globe size={40} />,
    title: "Import / Export Licensing",
    description:
      "Comprehensive support for obtaining import/export licenses, PSW registration, customs compliance, tariff classification, and trade regulatory approvals.",
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: "7E Certificate",
    description:
      "We guide exporters in securing the 7E Certificate by preparing necessary documentation, meeting eligibility criteria, and ensuring smooth approval from authorities.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Trademark Registration",
    description:
      "Protect your brand with our trademark registration services. We handle searches, applications, objections, and renewals to safeguard your intellectual property.",
  },
  {
    icon: <PenTool size={40} />,
    title: "Legal Drafting & Contracts",
    description:
      "We draft agreements, contracts, and MoUs tailored to your needs — ensuring legal clarity, enforceability, and protection of your interests in every transaction.",
  },
  {
    icon: <Briefcase size={40} />,
    title: "Corporate Compliance & Advisory",
    description:
      "From annual filings to SECP compliance and regulatory advisory, we provide ongoing support to ensure your business remains fully compliant with corporate laws and requirements.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesDetails = () => {
  return (
    <section id="services" className="services-details">
      <div className="services-details-container">
        <div className="services-details-header">
          <h2>Our Legal & Corporate Services</h2>
          <p>
            At <strong>Global Law Associates</strong>, we provide a complete
            range of legal, corporate, and tax services designed to help
            individuals and businesses operate with confidence and compliance.
          </p>
        </div>
        <motion.div
          className="services-details-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              className="services-details-card"
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="services-details-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetails;
