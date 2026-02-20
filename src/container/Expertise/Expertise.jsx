import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Expertise.scss';

const expertiseAreas = [
  {
    id: 1,
    title: 'Machine Learning Expert',
    description: 'Specialized in building end-to-end ML pipelines from data engineering to model deployment. Expert in supervised, unsupervised, and reinforcement learning algorithms.',
    icon: '🤖',
    color: '#6366f1',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'],
    details: 'Built 15+ ML models with 90%+ accuracy for real-world applications including predictive maintenance, customer churn prediction, and demand forecasting.'
  },
  {
    id: 2,
    title: 'Generative AI & LLMs',
    description: 'Pioneering work in large language models, RAG systems, prompt engineering, and AI agents. Building intelligent conversational systems.',
    icon: '🧠',
    color: '#a855f7',
    skills: ['LangChain', 'OpenAI', 'HuggingFace', 'Vector DBs'],
    details: 'Developed 5+ RAG-based applications and AI agents that process complex queries with 95% relevance accuracy and sub-second response times.'
  },
  {
    id: 3,
    title: 'Computer Vision Specialist',
    description: 'Expert in real-time object detection, OCR systems, and image processing using state-of-the-art deep learning techniques.',
    icon: '👁️',
    color: '#dc2626',
    skills: ['YOLOv8', 'OpenCV', 'PIL', 'Tesseract'],
    details: 'Created real-time detection systems processing 30+ FPS with 98% precision. Implemented OCR pipelines extracting data with 99% accuracy.'
  },
  {
    id: 4,
    title: 'Data Science & Analytics',
    description: 'Comprehensive data science expertise covering statistical analysis, hypothesis testing, A/B testing, and business intelligence.',
    icon: '📊',
    color: '#059669',
    skills: ['Pandas', 'NumPy', 'Power BI', 'Tableau'],
    details: 'Analyzed 1M+ records across 20+ datasets. Built 30+ dashboards and reports that drove 25% improvement in business decision-making.'
  },
  {
    id: 5,
    title: 'MLOps & Deployment',
    description: 'End-to-end model serving and operational expertise for ML applications with automated CI/CD pipelines.',
    icon: '🚀',
    color: '#ea580c',
    skills: ['Docker', 'FastAPI', 'AWS', 'Kubernetes'],
    details: 'Deployed 10+ models to production with 99.9% uptime. Reduced deployment time by 70% through automated pipelines and containerization.'
  },
  {
    id: 6,
    title: 'Innovation & Research',
    description: 'Active in AI research exploring cutting-edge techniques in deep learning, neural architecture search, and multimodal AI.',
    icon: '💡',
    color: '#0891b2',
    skills: ['Research', 'Publications', 'Patents', 'Speaking'],
    details: 'Published 3 research papers and 8 technical articles. Regular speaker at AI conferences and meetups with 1000+ combined attendees.'
  }
];

const Expertise = () => {
  const [selectedExpertise, setSelectedExpertise] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="expertise-header"
      >
        <h2 className="head-text">
          Expertise <span>Areas</span>
        </h2>
        <p className="p-text expertise-subtitle">
          Comprehensive AI and Data Science capabilities across the entire ML lifecycle
        </p>
      </motion.div>

      <div className="expertise-grid">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: `0 20px 40px ${area.color}20` }}
            className="expertise-card"
            style={{ borderTop: `4px solid ${area.color}` }}
          >
            <div className="expertise-icon" style={{ backgroundColor: `${area.color}15` }}>
              <span>{area.icon}</span>
            </div>

            <h3 className="bold-text">{area.title}</h3>
            <p className="p-text">{area.description}</p>

            <div className="expertise-skills">
              {area.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag" style={{ backgroundColor: `${area.color}15`, color: area.color }}>
                  {skill}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="learn-more-btn"
              style={{ backgroundColor: area.color }}
              onClick={() => setSelectedExpertise(area)}
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      {selectedExpertise && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="expertise-modal-overlay"
          onClick={() => setSelectedExpertise(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="expertise-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header" style={{ backgroundColor: selectedExpertise.color }}>
              <span className="modal-icon">{selectedExpertise.icon}</span>
              <h3>{selectedExpertise.title}</h3>
              <button type="button" className="close-btn" onClick={() => setSelectedExpertise(null)}>×</button>
            </div>
            <div className="modal-content">
              <p className="p-text">{selectedExpertise.details}</p>
              <div className="modal-skills">
                <h4>Key Technologies:</h4>
                <div className="skills-list">
                  {selectedExpertise.skills.map((skill, idx) => (
                    <span key={idx} className="modal-skill-tag" style={{ backgroundColor: `${selectedExpertise.color}15`, color: selectedExpertise.color }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Expertise, 'app__expertise'),
  'expertise',
  'app__whitebg'
);
