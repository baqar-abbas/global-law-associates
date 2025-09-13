import React from "react";
import AboutHero from "../components/AboutpageComponents/AboutHero";
import MissionVision from "../components/AboutpageComponents/MissionVision";
import WhoWeAre from "../components/AboutpageComponents/WhoWeAre";
import WhyChooseUs from "../components/HomepageComponents/WhyChooseUs";
import Testimonials from "../components/HomepageComponents/Testimonials";
import ServicesOverview from "../components/HomepageComponents/ServicesOverview";
import LeaderProfile from "../components/AboutpageComponents/LeaderProfile";
import CoreValues from "../components/AboutpageComponents/CoreValues";
import CallToAction from "../components/HomepageComponents/CallToAction";

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
      <ServicesOverview
        title="Explore What We Offer"
        subtitle="A wide range of legal solutions designed for businesses and individuals."
        buttonText="Explore Services"
      />
      <LeaderProfile />
      <CoreValues />
      <Testimonials />
      <CallToAction />
    </section>
  );
};

export default About;
