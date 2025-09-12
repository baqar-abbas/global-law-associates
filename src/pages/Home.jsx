import React from "react";
import Hero from "../components/HomepageComponents/Hero";
import ServicesOverview from "../components/HomepageComponents/ServicesOverview";
import WhyChooseUs from "../components/HomepageComponents/WhyChooseUs";
import FeaturedServices from "../components/HomepageComponents/FeaturedServices";
import Testimonials from "../components/HomepageComponents/Testimonials";
import CallToAction from "../components/HomepageComponents/CallToAction";

const Home = () => {
  return (
    <section>
      <Hero />
      <ServicesOverview
        title="Our Legal Services"
        subtitle="Comprehensive solutions tailored to your business needs."
        buttonText="View All Services"
      />
      <WhyChooseUs
        title="Why Choose Us"
        subtitle="Trusted by Clients across Pakistan for reliable legal solutions."
      />
      <FeaturedServices />
      <Testimonials />
      <CallToAction />
    </section>
  );
};

export default Home;
