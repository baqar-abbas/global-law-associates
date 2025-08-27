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

const WhyChooseUs = () => {
  return (
    <div>
      <h2>Why Choose Us Section</h2>
    </div>
  );
};

export default WhyChooseUs;
