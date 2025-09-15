import React from "react";
import ServicesHero from "../components/ServicesPageComponents/ServicesHero";
import ServicesDetails from "../components/ServicesPageComponents/ServicesDetails";
import HowItWorks from "../components/ServicesPageComponents/HowItWorks";
import CallToAction from "../components/HomepageComponents/CallToAction";

const Services = () => {
  return (
    <section>
      <ServicesHero />
      <ServicesDetails />
      <HowItWorks />
      <CallToAction />
    </section>
  );
};

export default Services;
