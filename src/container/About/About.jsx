import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const highlights = [
  {
    number: '1+',
    label: 'Years Hands-on Experience',
    sublabel: 'in Data Science & ML',
    icon: '⚡'
  },
  {
    number: '5+',
    label: 'Successful ML Projects',
    sublabel: 'from conception to deployment',
    icon: '🚀'
  },
  {
    number: '15+',
    label: 'AI/ML Models Deployed',
    sublabel: 'into production environments',
    icon: '🤖'
  },
  {
    number: '10+',
    label: 'Technologies Mastered',
    sublabel: 'across ML stack',
    icon: '💻'
  },
  {
    number: '3+',
    label: 'Research Papers',
    sublabel: 'in AI & Machine Learning',
    icon: '📚'
  },
  {
    number: '98%',
    label: 'Client Satisfaction',
    sublabel: 'rating from project feedback',
    icon: '⭐'
  }
];

const About = () => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="about-intro"
    >
      <h2 className="head-text">
        Hello, I&apos;m <span>Prabhu Teja Rompalli</span>
      </h2>
      <p className="about-tagline">Data Scientist & AI Engineer</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="about-description-card"
    >
      <p className="p-text about-bio">
        Early-level Data Scientist with practical experience in machine learning, time-series
        forecasting, and Generative AI. Through consulting and engineering hands-on experience,
        I design intelligent data pipelines—from data engineering, feature selection, and EDA
        to model training, evaluation, and scalable ML deployments.
      </p>
      <p className="p-text about-bio">
        Demonstrated ability to deliver measurable results by building AI systems that solve
        complex business problems. Passionate about staying at the cutting edge of AI research
        and applying advanced analytics and machine learning frameworks to solve complex, real-world
        business challenges.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="highlights-section"
    >
      <h3 className="highlights-title">Key Highlights</h3>

      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)' }}
            className="highlight-card"
          >
            <div className="highlight-icon">{item.icon}</div>
            <div className="highlight-content">
              <span className="highlight-number">{item.number}</span>
              <span className="highlight-label">{item.label}</span>
              <span className="highlight-sublabel">{item.sublabel}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </>
);

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
