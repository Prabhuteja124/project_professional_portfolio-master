import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './BlogArticles.scss';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Machine Learning in Python',
    excerpt: 'A comprehensive guide for beginners to get started with machine learning using scikit-learn, pandas, and numpy.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
    category: 'ML',
    tag: 'Beginner',
    date: '15 January 2025',
    readTime: '10 min read',
    author: 'Prabhu Teja'
  },
  {
    id: 2,
    title: 'Building Responsive React Applications',
    excerpt: 'Learn how to build modern, responsive web applications using React hooks, context API, and best practices.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    category: 'Web Dev',
    tag: 'Intermediate',
    date: '10 January 2025',
    readTime: '8 min read',
    author: 'Prabhu Teja'
  },
  {
    id: 3,
    title: 'Data Visualization Best Practices',
    excerpt: 'Explore the art of creating compelling data visualizations using matplotlib, seaborn, and plotly.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    category: 'Data Science',
    tag: 'Advanced',
    date: '5 January 2025',
    readTime: '12 min read',
    author: 'Prabhu Teja'
  },
  {
    id: 4,
    title: 'Introduction to Generative AI',
    excerpt: 'Understanding the fundamentals of generative AI, LLMs, and how to build applications with them.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    category: 'AI',
    tag: 'Beginner',
    date: '20 December 2024',
    readTime: '15 min read',
    author: 'Prabhu Teja'
  }
];

const categories = ['All', 'ML', 'AI', 'Web Dev', 'Data Science'];
const tags = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const BlogArticles = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const tagMatch = selectedTag === 'All' || post.tag === selectedTag;
    return categoryMatch && tagMatch;
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-header"
      >
        <h2 className="head-text">
          Blog <span>& Articles</span>
        </h2>
        <p className="p-text blog-subtitle">
          Thoughts, tutorials, and insights on web development, machine learning, and technology
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="filter-section"
      >
        <div className="filter-row">
          <div className="filter-group">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="category-select">Category</label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="tag-select">Tag</label>
            <select
              id="tag-select"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="filter-select"
            >
              {tags.map((tag) => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
        <p className="results-count">{filteredPosts.length} posts found</p>
      </motion.div>

      <div className="blog-grid">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="blog-card"
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-tag">{post.tag}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="p-text blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="read-time">⏱️ {post.readTime}</span>
                  <motion.button
                    type="button"
                    className="read-more-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(BlogArticles, 'app__blog'),
  'blog',
  'app__whitebg'
);
