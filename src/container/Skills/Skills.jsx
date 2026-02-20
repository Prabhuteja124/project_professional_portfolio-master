import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import images from '../../constants/images';
import './Skills.scss';

const skills = [
  { name: 'Python', icon: images.python },
  { name: 'TensorFlow', icon: images.tensorflow },
  { name: 'PyTorch', icon: images.pytorch },
  { name: 'Scikit-Learn', icon: images.scikit },
  { name: 'YOLO', icon: images.yolo },
  { name: 'OpenCV', icon: images.opencv },
  { name: 'HuggingFace', icon: images.huggingface },
  { name: 'Excel', icon: images.excel },
  { name: 'LangChain', icon: images.langchain },
  { name: 'FastAPI', icon: images.fastapi },
  { name: 'Docker', icon: images.docker },
  { name: 'MongoDB', icon: images.mongodb },
  { name: 'SQL', icon: images.sql },
  { name: 'Power BI', icon: images.powerbi },
  { name: 'Tableau', icon: images.tableau },
  { name: 'Machine Learning', icon: images.ml },
  { name: 'Deep Learning', icon: images.dl },
  { name: 'NLP', icon: images.nlp },
  { name: 'RAG', icon: images.rag },
  { name: 'Generative AI', icon: images.genai },
  { name: 'Agentic AI', icon: images.agent },
  { name: 'LLMs', icon: images.llm },
];

const Skills = () => (
  <>
    <h2 className="head-text">Technical Skills</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={index}
          >
            <div className="app__flex">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
