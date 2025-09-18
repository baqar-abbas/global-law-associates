import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // import Link
import "./Hero.css";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow custom-prev" onClick={onClick}>
    <ChevronLeft size={32} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow custom-next" onClick={onClick}>
    <ChevronRight size={32} />
  </div>
);

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [
    {
      img: "/images/image1.jpg",
      title: "Trusted Legal Solutions for Your Business",
      subtitle: "Expert advice in tax, corporate, and legal matters.",
    },
    {
      img: "/images/image2.jpg",
      title: "Expert Lawyers. Proven Results.",
      subtitle:
        "Guiding clients across Pakistan with integrity and excellence.",
    },
    {
      img: "/images/image3.jpg",
      title: "Your Partner in Corporate & Tax Law",
      subtitle: "Helping businesses grow while staying compliant.",
    },
  ];
  return (
    <section className="hero">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            {/* Background Image */}
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${slide.img})` }}
            ></div>

            {/* Overlay Content */}
            <div className="hero-content">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <button className="btn-primary">Book a Consultation</button>
                <Link to="/services" className="btn-outline">
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
