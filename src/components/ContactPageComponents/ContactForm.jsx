import React from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section id="contact-form" className="contact-form-section">
      <div className="contact-form-container">
        {/* Left Side Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>We’d Love to Hear from You</h2>
          <p>
            Whether you’re seeking legal advice, need help with documentation,
            or want to learn more about our services, our team is ready to
            assist you.
          </p>
          <ul>
            <li>
              <strong>📍 Office:</strong> 123 Shadman Street, Karachi, Pakistan
            </li>
            <li>
              <strong>📞 Phone:</strong> +92 300 1234567
            </li>
            <li>
              <strong>✉️ Email:</strong> info@globallaw.com
            </li>
          </ul>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject of your inquiry"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows="5"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="btn-submit"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
