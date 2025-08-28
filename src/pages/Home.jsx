import React from "react";
import Hero from "../components/HomepageComponents/Hero";
import ServicesOverview from "../components/HomepageComponents/ServicesOverview";
import WhyChooseUs from "../components/HomepageComponents/WhyChooseUs";
import FeaturedServices from "../components/HomepageComponents/FeaturedServices";
import Testimonials from "../components/HomepageComponents/Testimonials";

const Home = () => {
  return (
    <section>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedServices />
      <Testimonials />
    </section>
  );
};

export default Home;
