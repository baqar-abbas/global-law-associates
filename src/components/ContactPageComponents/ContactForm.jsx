import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Full Name must be at least 3 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 5) {
      newErrors.message = "Message must be at least 5 characters";
    }
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);
      // Simulate form submission
      console.log("Form submitted successfully:", formData);
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }
  };
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
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject of your inquiry"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? "error" : ""}
            />
            {errors.subject && (
              <span className="error-text">{errors.subject}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            ></textarea>
            {errors.message && (
              <span className="error-text">{errors.message}</span>
            )}
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
