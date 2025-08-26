import React from "react";
import {
  Scale,
  Briefcase,
  FileText,
  Building,
  Globe,
  ShieldCheck,
} from "lucide-react";
import "./ServicesOverview.css";

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
    icon: <ShieldCheck size={36} />,
    title: "Trademark & IP Protection",
    description: "Safeguard your brand identity and intellectual property.",
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

const ServicesOverview = () => {
  return (
    <div>
      <h2>Services Overview Section</h2>
    </div>
  );
};

export default ServicesOverview;
