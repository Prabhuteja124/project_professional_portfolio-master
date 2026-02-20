import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const contactInfo = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'prabhuteja124@gmail.com',
    link: 'mailto:prabhuteja124@gmail.com',
    description: 'Best way to reach me'
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/prabhu-teja',
    link: 'https://linkedin.com/in/prabhu-teja-29a484338/',
    description: 'My professional profile'
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Prabhuteja124',
    link: 'https://github.com/Prabhuteja124',
    description: 'Check out my code'
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 8143388437',
    link: 'tel:+918143388437',
    description: 'Available for urgent queries'
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Vijayawada, India',
    link: null,
    description: 'Remote work friendly'
  }
];

const workingHours = {
  weekdays: '9:00 AM - 6:00 PM',
  weekend: 'Closed',
  timezone: 'IST (UTC+5:30)'
};

const responseTimes = [
  { channel: 'Email', time: 'Within 24 hours' },
  { channel: 'LinkedIn', time: 'Within 48 hours' },
  { channel: 'WhatsApp', time: 'Within 24 hours' }
];

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, subject, message } = formData;

  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = () => {
    if (!name || !email || !message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-header"
      >
        <h2 className="head-text">
          Get in <span>Touch</span>
        </h2>
        <p className="p-text contact-subtitle">
          I&apos;m always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="contact-form-section"
        >
          <h3 className="section-title">Send Me a Message</h3>
          <p className="p-text form-description">
            Have a project in mind? Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>

          {!isFormSubmitted ? (
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="contact-name">Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={name}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="form-group">
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={handleChangeInput}
                  />
                </div>
              </div>
              <div className="form-group">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={subject}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project, questions, or just say hello..."
                  value={message}
                  onChange={handleChangeInput}
                />
              </div>
              <motion.button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={!name || !email || !message || loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  '📤 Send Message'
                )}
              </motion.button>
              <p className="privacy-note">
                🔒 Your information is secure and won&apos;t be shared with third parties.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="success-message"
            >
              <div className="success-icon">✅</div>
              <h4>Message Sent Successfully!</h4>
              <p>Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-info-section"
        >
          <h3 className="section-title">Contact Information</h3>

          <div className="contact-methods">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                className="contact-method"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="method-icon">{item.icon}</div>
                <div className="method-details">
                  <span className="method-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} className="method-value">{item.value}</a>
                  ) : (
                    <span className="method-value">{item.value}</span>
                  )}
                  <span className="method-desc">{item.description}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="working-hours">
            <h4>🕒 Working Hours</h4>
            <div className="hours-grid">
              <div className="hour-item">
                <span className="day">Monday – Friday</span>
                <span className="time">{workingHours.weekdays}</span>
              </div>
              <div className="hour-item">
                <span className="day">Saturday – Sunday</span>
                <span className="time closed">{workingHours.weekend}</span>
              </div>
            </div>
            <span className="timezone">{workingHours.timezone}</span>
          </div>

          <div className="response-times">
            <h4>⚡ Response Times</h4>
            {responseTimes.map((item, index) => (
              <div key={index} className="response-item">
                <span className="channel">{item.channel}</span>
                <span className="time">{item.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="cta-section"
      >
        <h3>Let&apos;s Create Something Amazing Together</h3>
        <p className="p-text">
          Whether you&apos;re looking to build a new web application, need help with
          your existing ML infrastructure, or want to explore how AI can transform
          your business, let&apos;s connect and discuss your ideas.
        </p>
        <div className="cta-buttons">
          <motion.a
            href="mailto:prabhuteja124@gmail.com"
            className="cta-btn primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📧 Email Me Directly
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/prabhu-teja-29a484338/"
            target="_blank"
            rel="noreferrer"
            className="cta-btn secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            💼 Connect on LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
