import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const projects = [
  {
    id: 1,
    title: 'Employee Performance Analysis',
    description: 'A data analytics project to analyze employee performance using machine learning and visualization techniques. Processes 10K+ employee records with 92% prediction accuracy.',
    tags: ['Python', 'Pandas', 'scikit-learn', 'Power BI'],
    category: 'analytics',
    featured: true,
    github: 'https://github.com/Prabhuteja124/Employee-Performance-Analysis',
    color: '#6366f1'
  },
  {
    id: 2,
    title: 'Sentiment Analysis NLP',
    description: 'Text classification and sentiment analysis system built using NLP and machine learning models. Achieved 89% accuracy on social media sentiment classification.',
    tags: ['NLP', 'BERT', 'TensorFlow', 'FastAPI'],
    category: 'nlp',
    featured: true,
    github: 'https://github.com/Prabhuteja124/Sentiment-Analysis-NLP',
    color: '#a855f7'
  },
  {
    id: 3,
    title: 'Math Routing Agent (Agentic RAG)',
    description: 'Intelligent routing system using LangChain and RAG for mathematical query handling and reasoning. Dynamic agent selection with 95% task completion rate.',
    tags: ['LangChain', 'RAG', 'OpenAI', 'Vector DB'],
    category: 'llm',
    featured: true,
    github: 'https://github.com/Prabhuteja124/Math-Routing-AgentRAG',
    color: '#dc2626'
  },
  {
    id: 4,
    title: 'Real-time Object Detection',
    description: 'Computer vision system for real-time object detection using YOLOv8. Processes video streams at 30 FPS with 96% mAP on custom dataset.',
    tags: ['YOLOv8', 'OpenCV', 'PyTorch', 'Docker'],
    category: 'cv',
    featured: false,
    github: 'https://github.com/Prabhuteja124',
    color: '#059669'
  },
  {
    id: 5,
    title: 'Stock Price Prediction',
    description: 'Time series forecasting system for stock price prediction using LSTM, Prophet, and ensemble methods. 15% improvement in prediction accuracy.',
    tags: ['LSTM', 'Prophet', 'Time Series', 'Pandas'],
    category: 'ml',
    featured: true,
    github: 'https://github.com/Prabhuteja124',
    color: '#ea580c'
  },
  {
    id: 6,
    title: 'Chatbot with RAG',
    description: 'Context-aware chatbot using Retrieval Augmented Generation. Integrates vector databases with LLMs for accurate, sourced responses.',
    tags: ['RAG', 'ChromaDB', 'LangChain', 'React'],
    category: 'llm',
    featured: false,
    github: 'https://github.com/Prabhuteja124',
    color: '#0891b2'
  },
  {
    id: 7,
    title: 'Image Classification System',
    description: 'Deep learning system for multi-class image classification using CNN and transfer learning. 94% accuracy on 50-class dataset.',
    tags: ['CNN', 'Transfer Learning', 'Keras', 'ResNet'],
    category: 'cv',
    featured: false,
    github: 'https://github.com/Prabhuteja124',
    color: '#7c3aed'
  },
  {
    id: 8,
    title: 'Recommendation Engine',
    description: 'Collaborative filtering and content-based recommendation system for e-commerce. Improved click-through rate by 22%.',
    tags: ['Collaborative Filtering', 'Matrix Factorization', 'Spark'],
    category: 'ml',
    featured: false,
    github: 'https://github.com/Prabhuteja124',
    color: '#be123c'
  },
  {
    id: 9,
    title: 'Automated ML Pipeline',
    description: 'End-to-end machine learning pipeline with automated data preprocessing, model selection, and deployment orchestration.',
    tags: ['MLOps', 'AutoML', 'Airflow', 'Kubernetes'],
    category: 'mlops',
    featured: true,
    github: 'https://github.com/Prabhuteja124',
    color: '#0d9488'
  }
];

const Work = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const getFilteredProjects = () => {
    if (filter === 'all') {
      return projects;
    }
    if (filter === 'featured') {
      return projects.filter((p) => p.featured);
    }
    return projects.filter((p) => p.category === filter);
  };

  const filteredProjects = getFilteredProjects();

  const filterButtons = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' }
  ];

  return (
    <>
      <div className="work-header">
        <h2 className="head-text">
          Projects <span>Portfolio</span>
        </h2>

        <div className="filter-tabs">
          {filterButtons.map((btn) => (
            <button
              type="button"
              key={btn.key}
              className={`filter-btn ${filter === btn.key ? 'active' : ''}`}
              onClick={() => setFilter(btn.key)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className="project-card-header"
                style={{ background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}10 100%)` }}
              >
                {project.featured && (
                  <span className="featured-badge" style={{ backgroundColor: project.color }}>
                    Featured
                  </span>
                )}
                <h4 className="bold-text">{project.title}</h4>
              </div>

              <div className="project-card-body">
                <p className="p-text">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="project-tag"
                      style={{
                        backgroundColor: `${project.color}15`,
                        color: project.color,
                        borderColor: `${project.color}30`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                className="project-card-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="view-project-btn"
                  style={{ backgroundColor: project.color }}
                >
                  View Project →
                </a>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="projects-count">
        <p className="p-text">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
