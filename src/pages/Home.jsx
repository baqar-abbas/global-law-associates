import React from "react";
import Hero from "../components/HomepageComponents/Hero";
import ServicesOverview from "../components/HomepageComponents/ServicesOverview";
import WhyChooseUs from "../components/HomepageComponents/WhyChooseUs";

const Home = () => {
  return (
    <section>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
    </section>
  );
};

export default Home;
