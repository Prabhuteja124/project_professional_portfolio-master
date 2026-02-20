import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './GitHubProfile.scss';

const GitHubProfile = () => {
  // Simulated contribution data for the heatmap
  const weeks = Array.from({ length: 20 }, () => Array.from({ length: 7 }, () => {
    const intensity = Math.random();
    if (intensity > 0.8) return 4;
    if (intensity > 0.6) return 3;
    if (intensity > 0.4) return 2;
    if (intensity > 0.2) return 1;
    return 0;
  }));

  const repos = [
    { name: 'Prabhuteja124', stars: 12, forks: 3, language: 'Python', color: '#3572A5' },
    { name: 'Employee-Performance-Analysis', stars: 8, forks: 2, language: 'Jupyter Notebook', color: '#DA5B0B' },
    { name: 'Sentiment-Analysis-NLP', stars: 6, forks: 1, language: 'Python', color: '#3572A5' },
    { name: 'Math-Routing-AgentRAG', stars: 5, forks: 1, language: 'Python', color: '#3572A5' },
    { name: 'House-Salary-prediction', stars: 4, forks: 0, language: 'Jupyter Notebook', color: '#DA5B0B' },
    { name: 'Flight-price-prediction', stars: 3, forks: 0, language: 'Python', color: '#3572A5' }
  ];

  const getContributionColor = (level) => {
    const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
    return colors[level] || colors[0];
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="github-header"
      >
        <h2 className="head-text">
          GitHub <span>Contributions</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="github-card"
      >
        <div className="github-profile-header">
          <div className="profile-avatar">
            <img
              src="https://avatars.githubusercontent.com/Prabhuteja124"
              alt="GitHub Avatar"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/60?text=PT';
              }}
            />
          </div>
          <div className="profile-info">
            <h3>Prabhu Teja</h3>
            <p className="p-text">@Prabhuteja124</p>
            <p className="profile-bio">AI Engineer | Data Scientist | Building intelligent systems with LLMs, ML, and Deep Learning</p>
            <div className="profile-stats">
              <span><strong>15+</strong> Repositories</span>
              <span><strong>50+</strong> Commits this year</span>
              <span><strong>100+</strong> Contributions</span>
            </div>
          </div>
        </div>

        <div className="contribution-section">
          <h4>Contributions in the last year</h4>
          <div className="contribution-graph">
            <div className="months">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <span key={month} className="month-label">{month}</span>
              ))}
            </div>
            <div className="contribution-grid">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="week-column">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={dayIndex}
                      className="contribution-cell"
                      style={{ backgroundColor: getContributionColor(day) }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: weekIndex * 0.02 + dayIndex * 0.005 }}
                      title={`${day} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="contribution-legend">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className="legend-cell"
                style={{ backgroundColor: getContributionColor(level) }}
              />
            ))}
            <span>More</span>
          </div>
        </div>

        <div className="recent-repos">
          <h4>Recent Repositories</h4>
          <div className="repos-list">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={`https://github.com/Prabhuteja124/${repo.name}`}
                target="_blank"
                rel="noreferrer"
                className="repo-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5, backgroundColor: 'rgba(99, 102, 241, 0.05)' }}
              >
                <div className="repo-header">
                  <span className="repo-name">{repo.name}</span>
                  <div className="repo-stats">
                    <span className="repo-stat">⭐ {repo.stars}</span>
                    <span className="repo-stat">🍴 {repo.forks}</span>
                  </div>
                </div>
                <div className="repo-meta">
                  <span
                    className="language-dot"
                    style={{ backgroundColor: repo.color }}
                  />
                  <span className="language-name">{repo.language}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="github-cta">
          <a
            href="https://github.com/Prabhuteja124"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            View Full Profile on GitHub →
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(GitHubProfile, 'app__github'),
  'github',
  'app__whitebg'
);
