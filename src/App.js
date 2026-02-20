import React, { useState, useEffect } from 'react';
import {
  About,
  Header,
  Skills,
  Work,
  Experience,
  Expertise,
  InteractiveMLDemo,
  GitHubProfile,
  ResumeDownload,
  BlogArticles,
  Footer
} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar />

      {/* Dark Mode Toggle Button */}
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 999,
          padding: '8px 12px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {darkMode ? '☀ Light' : '🌙 Dark'}
      </button>

      <Header />
      <About />
      <Expertise />
      <Experience />
      <Work />
      <Skills />
      <InteractiveMLDemo />
      <GitHubProfile />
      <ResumeDownload />
      <BlogArticles />
      <Footer />
    </div>
  );
};

export default App;
