import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const saved = localStorage.getItem('dark-theme');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('dark-theme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className="logo-text">PRABHU TEJA</h1>
      </div>

      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex theme-toggle-li">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkTheme ? <HiSun /> : <HiMoon />}
          </button>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="mobile-theme-toggle">
                <button
                  type="button"
                  className="theme-toggle-btn"
                  onClick={() => {
                    toggleTheme();
                  }}
                >
                  {isDarkTheme ? (
                    <><HiSun /> Light Mode</>
                  ) : (
                    <><HiMoon /> Dark Mode</>
                  )}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
