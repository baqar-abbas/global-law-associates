import React from "react";
import {
  FileText,
  Building,
  User,
  Users,
  Landmark,
  Globe,
  Scale,
  ClipboardCheck,
  ShieldCheck,
  PenTool,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import "./ServicesDetails.css";

const services = [
  {
    icon: <FileText size={36} />,
    title: "FBR NTN / GST Registration",
    description:
      "We assist in obtaining National Tax Number (NTN) and GST registration with FBR, ensuring proper category selection, accurate documentation, and hassle-free compliance.",
  },
  {
    icon: <FileText size={36} />,
    title: "Tax Return Filing",
    description:
      "Complete assistance in preparing and filing annual tax returns for individuals, firms, and companies. We maximize lawful deductions, handle audits, and represent you before tax authorities.",
  },
  {
    icon: <User size={36} />,
    title: "Sole Proprietorship Registration",
    description:
      "Guidance on setting up a sole proprietorship, including registration, tax implications, and legal compliance. We make the process smooth and legally sound.",
  },
  {
    icon: <Building size={36} />,
    title: "Company Incorporation (Pvt Ltd / SMC)",
    description:
      "End-to-end company registration with SECP. From name reservation, drafting legal documents, to incorporation of Private Limited, Single Member Companies, and corporate compliance.",
  },
  {
    icon: <Users size={36} />,
    title: "AOP / Partnership Firm Registration",
    description:
      "Expert services for forming an Association of Persons or Partnership firm, including drafting agreements, registration with tax authorities, and chamber memberships.",
  },
  {
    icon: <Landmark size={36} />,
    title: "Chamber Registration",
    description:
      "We handle applications, documentation, and approvals for registering your business with the Chamber of Commerce, giving your firm credibility and networking opportunities.",
  },
  {
    icon: <Scale size={36} />,
    title: "PSEB & PEC Certification",
    description:
      "Support for Pakistan Software Export Board (PSEB) certification for IT firms and Pakistan Engineering Council (PEC) registration for engineering firms to ensure compliance.",
  },
  {
    icon: <Globe size={36} />,
    title: "Import / Export Licensing",
    description:
      "Comprehensive support for obtaining import/export licenses, PSW registration, customs compliance, tariff classification, and trade regulatory approvals.",
  },
  {
    icon: <ClipboardCheck size={36} />,
    title: "7E Certificate",
    description:
      "We guide exporters in securing the 7E Certificate by preparing necessary documentation, meeting eligibility criteria, and ensuring smooth approval from authorities.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Trademark Registration",
    description:
      "Protect your brand with our trademark registration services. We handle searches, applications, objections, and renewals to safeguard your intellectual property.",
  },
  {
    icon: <PenTool size={36} />,
    title: "Legal Drafting & Contracts",
    description:
      "We draft agreements, contracts, and MoUs tailored to your needs — ensuring legal clarity, enforceability, and protection of your interests in every transaction.",
  },
  {
    icon: <Briefcase size={36} />,
    title: "Corporate Compliance",
    description:
      "From annual filings to SECP compliance and regulatory advisory, we provide ongoing support to ensure your business remains fully compliant with corporate laws and requirements.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ServicesDetails = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Legal & Corporate Services</h2>
          <p>
            At <strong>Global Law Associates</strong>, we provide a wide range
            of legal, tax, and corporate services tailored to help individuals
            and businesses succeed.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="services-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="services-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetails;
