import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, speed = 50, delay = 0, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) {
      return undefined;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [currentIndex, text, speed, started]);

  return (
    <span className={className}>
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypeWriter;
