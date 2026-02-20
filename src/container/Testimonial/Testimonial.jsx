import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';

const testimonialsData = [
  {
    name: 'Project Reviewer',
    company: 'AI Solutions',
    feedback:
      'Prabhu Teja has strong skills in Machine Learning, Generative AI, and building production-ready systems.',
    imgurl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Team Lead',
    company: 'Tech Team',
    feedback:
      'Excellent problem-solving ability and deep understanding of AI pipelines and real-time systems.',
    imgurl: 'https://via.placeholder.com/150',
  },
];

const brandsData = [
  {
    name: 'TensorFlow',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
  },
  {
    name: 'PyTorch',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="app__testimonial-item app__flex">
        <img
          src={testimonialsData[currentIndex].imgurl}
          alt={testimonialsData[currentIndex].name}
        />

        <div className="app__testimonial-content">
          <p className="p-text">
            {testimonialsData[currentIndex].feedback}
          </p>

          <div>
            <h4 className="bold-text">
              {testimonialsData[currentIndex].name}
            </h4>
            <h5 className="p-text">
              {testimonialsData[currentIndex].company}
            </h5>
          </div>
        </div>
      </div>

      <div className="app__testimonial-btns app__flex">
        <div
          className="app__flex"
          onClick={() =>
            handleClick(
              currentIndex === 0
                ? testimonialsData.length - 1
                : currentIndex - 1
            )
          }
        >
          <HiChevronLeft />
        </div>

        <div
          className="app__flex"
          onClick={() =>
            handleClick(
              currentIndex === testimonialsData.length - 1
                ? 0
                : currentIndex + 1
            )
          }
        >
          <HiChevronRight />
        </div>
      </div>

      <div className="app__testimonial-brands app__flex">
        {brandsData.map((brand, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={index}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
