import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Experience.scss';

const experiences = [
  {
    id: 1,
    role: 'Data Science Intern',
    company: 'Nufintech (Remote / US Client)',
    duration: 'Dec 2024 – Jan 2025',
    color: '#6366f1',
    icon: '📊',
    summary: 'Conducted causal pattern analysis for Renko trade outcomes, designing an end-to-end framework that evaluated recurring time-series patterns and delivered automated Excel reports.',
    tools: ['Python', 'tsfresh', 'stumpy', 'Pandas', 'Excel', 'Time-Series Analysis'],
    achievements: [
      'Achieved 67% win rate (vs. 41% baseline) through signal identification',
      'Engineered sliding-window features with temporal causality mapping',
      'Delivered 26% win-rate lift for high-confidence GO/NO-GO signals',
      'Performed event-study and time-binned analyses'
    ]
  },
  {
    id: 2,
    role: 'Data Science AI Consultant',
    company: 'Rubixe AI Solutions, Bangalore',
    duration: 'Oct 2024 – Jun 2025',
    color: '#a855f7',
    icon: '🤖',
    summary: 'Developed time-series forecasting models for spare parts demand, built automated retraining pipelines, and created Power BI dashboards for inventory management optimization.',
    tools: ['Python', 'Prophet', 'ARIMA', 'LSTM', 'Scikit-learn', 'Power BI', 'Power Automate'],
    achievements: [
      '15% reduction in stockouts through accurate demand forecasting',
      '20% decrease in excess inventory with optimized models',
      '20% improvement in inventory efficiency via automated alerts',
      'Built Power BI dashboards tracking predicted vs actual demand'
    ]
  },
  {
    id: 3,
    role: 'Machine Learning Intern',
    company: 'VXL IT Solutions, Vijayawada',
    duration: 'May 2023 – Jun 2023',
    color: '#dc2626',
    icon: '⚡',
    summary: 'Built predictive ML models with Scikit-learn for classification and regression tasks, performed comprehensive EDA on large datasets, and applied MLOps best practices.',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook'],
    achievements: [
      '18% accuracy improvement through hyperparameter tuning',
      '25% faster model iteration cycles via cross-validation',
      'Conducted EDA and preprocessing on 100K+ record datasets',
      'Applied deployment best practices and feature engineering'
    ]
  },
  {
    id: 4,
    role: 'Python Programming Intern',
    company: 'Trylogic Soft Solutions, Hyderabad',
    duration: 'Aug 2022 – Sep 2022',
    color: '#059669',
    icon: '🐍',
    summary: 'Automated data processing tasks with Python scripts, developed data cleaning and workflow automation tools, and applied OOP principles for efficient script development.',
    tools: ['Python', 'Data Structures', 'OOP', 'Automation', 'Pandas'],
    achievements: [
      '30% reduction in execution time through automation',
      'Handled 50+ datasets with enhanced efficiency tools',
      '40% quicker script development via OOP principles',
      'Developed data cleaning and workflow automation solutions'
    ]
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const openModal = (exp) => {
    setSelectedExp(exp);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExp(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="experience-header"
      >
        <h2 className="head-text">
          Work <span>Experience</span>
        </h2>
      </motion.div>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: `0 15px 40px ${exp.color}20` }}
            className="experience-card"
          >
            <div className="experience-card-border" style={{ backgroundColor: exp.color }} />

            <div className="experience-card-content">
              <div className="experience-icon" style={{ backgroundColor: `${exp.color}15` }}>
                <span>{exp.icon}</span>
              </div>

              <div className="experience-details">
                <h3 className="bold-text">{exp.role}</h3>
                <p className="company-name">{exp.company}</p>
                <span className="duration" style={{ color: exp.color }}>{exp.duration}</span>
              </div>
            </div>

            <motion.button
              type="button"
              className="view-details-btn"
              style={{ backgroundColor: exp.color }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(exp)}
            >
              View Details →
            </motion.button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedExp && (
          <motion.div
            className="experience-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="experience-modal"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header" style={{ borderBottom: `2px solid ${selectedExp.color}20` }}>
                <div className="modal-icon" style={{ backgroundColor: `${selectedExp.color}15` }}>
                  <span>{selectedExp.icon}</span>
                </div>
                <div className="modal-title">
                  <h3>{selectedExp.role}</h3>
                  <p className="modal-company">{selectedExp.company}</p>
                  <span className="modal-duration" style={{ color: selectedExp.color }}>{selectedExp.duration}</span>
                </div>
                <button type="button" className="modal-close" onClick={closeModal}>×</button>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4 className="section-title">📋 Summary</h4>
                  <p className="section-content">{selectedExp.summary}</p>
                </div>

                <div className="modal-section">
                  <h4 className="section-title">🛠️ Tools & Technologies</h4>
                  <div className="tools-container">
                    {selectedExp.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="tool-tag"
                        style={{ backgroundColor: `${selectedExp.color}15`, color: selectedExp.color }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4 className="section-title">✅ Key Achievements</h4>
                  <ul className="achievements-list">
                    {selectedExp.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement-item">
                        <span className="achievement-check" style={{ color: selectedExp.color }}>✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, 'app__experience'),
  'experience',
  'app__primarybg'
);
