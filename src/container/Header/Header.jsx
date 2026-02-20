import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import TypeWriter from '../../components/TypeWriter/TypeWriter';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">

    {/* Left Info Section */}
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.6 }}
      className="app__header-info"
    >
      <div className="app__header-badge">

        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text typing-intro">Hello, I am</p>
            <h1 className="head-text typing-name">
              <TypeWriter text="Prabhu Teja Rompalli" speed={80} delay={500} />
            </h1>

            {/* Tagline */}
            <p className="p-text typing-tagline" style={{ marginTop: 10 }}>
              <TypeWriter
                text="Entry-level Data Scientist skilled in machine learning, time-series forecasting, and Generative AI, building ML pipelines and delivering data-driven solutions."
                speed={30}
                delay={2500}
              />
            </p>

            {/* Buttons */}
            <div className="header-buttons">
              <a
                href="https://github.com/Prabhuteja124/Prabhuteja124"
                target="_blank"
                rel="noreferrer"
                className="portfolio-btn"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/prabhu-teja-29a484338/"
                target="_blank"
                rel="noreferrer"
                className="portfolio-btn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Roles */}
        <div className="tag-cmp app__flex">
          <p className="p-text">Data Scientist</p>
          <p className="p-text">Machine Learning Engineer</p>
          <p className="p-text">Generative AI Developer</p>
        </div>

      </div>
    </motion.div>

    {/* Profile Image Section */}
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.6, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile" />

      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="circle"
        className="overlay_circle"
      />
    </motion.div>

    {/* Technology Icons Section */}
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.python, images.react, images.api].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="tech" />
        </div>
      ))}
    </motion.div>

  </div>
);

export default AppWrap(Header, 'home');
