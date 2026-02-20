import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './InteractiveMLDemo.scss';

const knowledgeBase = {
  name: {
    keywords: ['name', 'who are you', 'who is prabhu', 'your name', 'prabhu teja', 'full name'],
    response: 'Hi! I\'m Prabhu Teja Rompalli. I completed my B.Tech in Electrical & Electronics Engineering from Jawaharlal Nehru Technological University, Kakinada. I\'m an Entry-level Data Scientist with experience in ML, time-series forecasting, and Generative AI.'
  },
  education: {
    keywords: ['college', 'education', 'degree', 'university', 'study', 'studied', 'passed out', 'graduation', 'btech', 'b.tech', 'diploma', 'polytechnic', 'jntu', 'kakinada'],
    response: 'I completed my B.Tech in Electrical & Electronics Engineering from Jawaharlal Nehru Technological University, Kakinada (CGPA: 7.29/10, 2021-2024). I also have a Diploma in Electrical and Electronics Engineering from A.A.N.M. & V.V.R.S.R. Polytechnic, Gudlavalleru with 66% (2018-2021). Plus multiple certifications in Data Science, AI, and ML!'
  },
  color: {
    keywords: ['color', 'colour', 'favorite color', 'favourite colour', 'like color'],
    response: 'My favorite color is purple! 💜 It represents creativity, wisdom, and ambition - qualities I strive for in my work as an AI Engineer.'
  },
  skills: {
    keywords: ['skills', 'technologies', 'tech stack', 'programming', 'languages', 'tools', 'expertise', 'python', 'tensorflow'],
    response: 'My technical skills include: Python, SQL, Git, Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, OpenCV, YOLO, LangChain, LangGraph, Hugging Face, RAG, LLMs, Generative AI, Time-Series (ARIMA, Prophet, LSTM), Power BI, Tableau, FastAPI, Docker, Oracle Cloud, Qdrant, FAISS, NLP (NLTK, SpaCy), and more!'
  },
  experience: {
    keywords: ['experience', 'work', 'job', 'company', 'internship', 'career', 'worked', 'nufintech', 'rubixe'],
    response: 'I have 4 key experiences: 1) Data Science Intern at Nufintech (Dec 2024-Jan 2025) - Achieved 67% win rate in trade analysis. 2) Data Science AI Consultant at Rubixe AI Solutions (Oct 2024-Jun 2025) - Reduced stockouts by 15% with forecasting models. 3) ML Intern at VXL IT Solutions (May-Jun 2023) - 18% accuracy improvement. 4) Python Intern at Trylogic Soft Solutions (Aug-Sep 2022) - Reduced execution time by 30%.'
  },
  projects: {
    keywords: ['projects', 'portfolio', 'github', 'work', 'built', 'created', 'developed', 'lpr', 'math routing'],
    response: 'Key projects: 1) Math Routing Agent (Agentic RAG + MCP) - 95% math query accuracy with multi-agent system. 2) License Plate Recognition (LPR) - YOLOv8 + PaddleOCR with 90%+ accuracy. 3) Employee Performance Analysis. 4) Sentiment Analysis NLP. 5) Real-time Object Detection. 6) Chatbot with RAG. 7) Stock Price Prediction. Check my Projects section for details!'
  },
  certifications: {
    keywords: ['certifications', 'certified', 'courses', 'iabac', 'oracle', 'nasscom', 'datamites'],
    response: 'I hold 7+ certifications: AI Expert & Data Scientist (IABAC 2025), Oracle Fusion AI Agent Studio Certified, OCI 2025 AI Foundations Associate, Data Visualisation (Tata 2025), Data Science (NASSCOM FutureSkills Prime 2025), Data Science Program (DataMites/Skillogic 2025), and ML & Deep Learning Bootcamp (Udemy 2023).'
  },
  contact: {
    keywords: ['contact', 'email', 'phone', 'reach', 'message', 'linkedin', 'connect', 'gmail'],
    response: 'You can reach me at: 📧 prabhuteja124@gmail.com | 📱 +91 8143388437 | 🔗 linkedin.com/in/prabhu-teja-29a484338 | 💻 github.com/Prabhuteja124. I\'m based in Hyderabad, India and open to remote opportunities!'
  },
  location: {
    keywords: ['location', 'city', 'where', 'from', 'place', 'live', 'hyderabad', 'india', 'address'],
    response: 'I\'m based in Hyderabad, India 🇮🇳, but I\'m remote-work friendly and open to opportunities worldwide!'
  },
  summary: {
    keywords: ['summary', 'about you', 'professional summary', 'background', 'overview', 'describe yourself'],
    response: 'I\'m an Entry-level Data Scientist with experience in ML, time-series forecasting, and Generative AI. I\'ve delivered measurable results including 15-20% reduction in inventory inefficiencies and 67% win rate in trading signal analysis. Proficient in Python, Scikit-learn, TensorFlow, PyTorch, with focus on end-to-end ML pipelines and RAG architectures.'
  },
  greeting: {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'hola'],
    response: 'Hello there! 👋 I\'m Prabhu Teja\'s AI assistant. Feel free to ask me anything about Prabhu - his education (JNTU Kakinada, B.Tech EEE), skills (Python, ML, GenAI), work experience (4 internships), projects (RAG, LPR, NLP), certifications (Oracle, IABAC), or contact info!'
  },
  help: {
    keywords: ['help', 'what can you do', 'capabilities', 'questions', 'ask', 'what to ask'],
    response: 'I can answer questions about Prabhu Teja including: his name, education (B.Tech EEE from JNTU Kakinada), favorite color, technical skills (Python, ML, Deep Learning, GenAI), work experience (Nufintech, Rubixe AI), projects (Math Routing Agent, LPR System), certifications (Oracle, IABAC), contact information, and location (Hyderabad). What would you like to know?'
  },
  age: {
    keywords: ['age', 'old', 'birthday', 'born', 'year', 'when were you born'],
    response: 'I\'d prefer to keep my age private, but I completed my B.Tech in 2021-2024 and have 3+ years of hands-on experience in Data Science and AI through internships and projects!'
  },
  hobby: {
    keywords: ['hobby', 'hobbies', 'interest', 'free time', 'passion', 'spare time'],
    response: 'I\'m passionate about staying at the cutting edge of AI research, reading technical papers, contributing to open-source projects, and exploring new ML frameworks and tools. I also enjoy building side projects with LLMs and computer vision!'
  },
  strength: {
    keywords: ['strength', 'strengths', 'good at', 'best at', 'expert', 'specialized', 'excel at'],
    response: 'My key strengths are: building end-to-end ML pipelines, working with Generative AI and LLMs (RAG, LangChain, LangGraph), real-time computer vision systems (YOLO, OCR), time-series forecasting (Prophet, ARIMA, LSTM), and deploying models to production with MLOps (Docker, FastAPI).'
  }
};

const findBestResponse = (input) => {
  const lowerInput = input.toLowerCase();
  const categories = Object.values(knowledgeBase);
  for (let i = 0; i < categories.length; i += 1) {
    const category = categories[i];
    const { keywords } = category;
    for (let j = 0; j < keywords.length; j += 1) {
      const keyword = keywords[j];
      if (lowerInput.includes(keyword)) {
        return category.response;
      }
    }
  }
  return 'That\'s an interesting question! While I\'m trained to answer specific questions about Prabhu Teja (like his education, skills, experience, projects, contact info), I don\'t have an answer for that. Try asking about his name, college, favorite color, skills, work experience, or projects!';
};

const InteractiveMLDemo = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! 👋 I\'m Prabhu Teja\'s AI assistant. Ask me anything about him - his name, education, favorite color, skills, experience, projects, or contact info!' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMessage = { type: 'user', text: inputText };
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setTimeout(() => {
      const response = findBestResponse(userMessage.text);
      setMessages((prev) => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    'What\'s your name?',
    'What college did you attend?',
    'What\'s your favorite color?',
    'What are your skills?',
    'What projects have you done?',
    'How can I contact you?'
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="demo-header"
      >
        <h2 className="head-text">
          Meet <span>Prabhu Teja AI</span>
        </h2>
        <p className="p-text demo-subtitle">
          Ask me anything about Prabhu Teja - his background, skills, experience, or projects!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="demo-card chatbot-card"
      >
        <div className="chat-messages">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`chat-message ${message.type}`}
            >
              <div className="message-avatar">
                {message.type === 'bot' ? '🤖' : '👤'}
              </div>
              <div className="message-content">
                <p>{message.text}</p>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="chat-message bot typing"
            >
              <div className="message-avatar">🤖</div>
              <div className="message-content typing-indicator">
                <span />
                <span />
                <span />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="quick-questions">
          <p className="quick-label">Quick questions:</p>
          <div className="quick-chips">
            {quickQuestions.map((question, index) => (
              <motion.button
                key={index}
                type="button"
                className="quick-chip"
                onClick={() => setInputText(question)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {question}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your question here... (e.g., 'What's your name?' or 'What college did you attend?')"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <motion.button
            type="button"
            className="send-btn"
            onClick={handleSend}
            disabled={!inputText.trim() || isTyping}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isTyping ? '⏳' : '➤'}
          </motion.button>
        </div>

        <div className="demo-info">
          <p className="p-text info-text">
            💡 <strong>Tip:</strong> I can answer questions about Prabhu&apos;s name, education, favorite color,
            skills, work experience, projects, and contact information. Powered by rule-based NLP matching!
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(InteractiveMLDemo, 'app__demo'),
  'demo',
  'app__whitebg'
);
