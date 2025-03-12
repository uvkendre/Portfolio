import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';
import StarBackground from './StarBackground';

const Home = () => {
  const greetings = [
    "नमस्ते",
    "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
    "নমস্কার",
    "आदाब",
    "प्रणाम",
    "নমস্কার",
    "வணக்கம்",
    "నమస్కరం",
    "ನಮಸ್ತೆ",
    "राधे राधे",
    "કેમ છો",
    "ٱلسَّلَامُ عَلَيْكُمْ"
  ];

  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => 
        prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change greeting every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <StarBackground />
      
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-8">
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <motion.h2 
              key={greetingIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-wider gradient-text"
              style={{ letterSpacing: '0.05em' }}
            >
              {greetings[greetingIndex]}
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white"
              variants={itemVariants}
            >
              I'm <span className="gradient-text">Yuvraj Kendre</span>
            </motion.h1>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.p
              className="text-xl md:text-2xl text-gray-300"
              animate={{
                opacity: [0, 1],
                y: [20, 0]
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Full Stack Developer
            </motion.p>

            <motion.div
              className="flex justify-center gap-4"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn btn-primary bg-[#6366f1] text-white rounded-full p-2"
                >
                  Contact Me
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="btn glass-button p-2"
                >
                  View Projects
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white/70 hover:text-white transition-colors"
          >
            <FaArrowDown size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;