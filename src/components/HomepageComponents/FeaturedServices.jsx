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

const FeaturedServices = () => {
  return (
    <div>
      <h2>Featured Services Section</h2>
    </div>
  );
};

export default FeaturedServices;
