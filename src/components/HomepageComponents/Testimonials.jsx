import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonials.css";

import avatar from "/images/avatar.jpg";
import saraAvatar from "/images/sara-avatar.jpg";

const testimonials = [
  {
    name: "Ali Khan",
    role: "Business Owner - Lahore",
    feedback:
      "Global Law Associates handled my company registration and tax filing seamlessly. Truly professional and reliable service.",
    avatar: avatar,
  },
  {
    name: "Sara Ahmed",
    role: "Entrepreneur - Karachi",
    feedback:
      "Their team guided me through complex legal compliance with ease. Highly recommended for startups.",
    avatar: saraAvatar,
  },
  {
    name: "Usman Sheikh",
    role: "Importer - Islamabad",
    feedback:
      "I got my import/export license quickly without hassle. They really understand business needs.",
    avatar: avatar,
  },
  {
    name: "Fatima Noor",
    role: "Consultant - Faisalabad",
    feedback:
      "Very satisfied with their legal drafting services. Everything was clear, precise, and tailored for my business.",
    avatar: saraAvatar,
  },
  {
    name: "Hamza Tariq",
    role: "Tech Founder - Peshawar",
    feedback:
      "From company incorporation to compliance, their team has been outstanding. Highly reliable partners!",
    avatar: avatar,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const visibleCount = 3; // show 3 at a time on desktop

  const prevTestimonial = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );

  const nextTestimonial = () =>
    setCurrent((prev) =>
      prev >= testimonials.length - visibleCount ? 0 : prev + 1
    );

  const visibleTestimonials = testimonials.slice(
    current,
    current + visibleCount
  );

  // Wrap around if near end
  if (visibleTestimonials.length < visibleCount) {
    visibleTestimonials.push(
      ...testimonials.slice(0, visibleCount - visibleTestimonials.length)
    );
  }

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonial-carousel">
        <button className="carousel-btn" onClick={prevTestimonial}>
          <ChevronLeft size={32} />
        </button>

        <div className="testimonial-cards">
          {visibleTestimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
              <p className="testimonial-feedback">“{t.feedback}”</p>
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
        </div>

        <button className="carousel-btn" onClick={nextTestimonial}>
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
