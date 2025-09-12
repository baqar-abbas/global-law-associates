import React from "react";
import AboutHero from "../components/AboutpageComponents/AboutHero";
import MissionVision from "../components/AboutpageComponents/MissionVision";
import WhoWeAre from "../components/AboutpageComponents/WhoWeAre";
import WhyChooseUs from "../components/HomepageComponents/WhyChooseUs";
import ServicesOverview from "../components/HomepageComponents/ServicesOverview";

const About = () => {
  return (
    <section>
      <AboutHero />
      <MissionVision />
      <WhoWeAre />
      <WhyChooseUs
        title="Our Core Strengths"
        subtitle="What sets Global Law Associates apart in delivering excellence and trust."
      />
      <ServicesOverview />
    </section>
  );
};

export default About;
