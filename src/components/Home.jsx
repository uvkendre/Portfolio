import React, { useState, useEffect } from 'react';
import { FaCode, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

function Home() {
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

  const roles = [
    "Full Stack Developer",
    "Web Developer"
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(roleInterval);
    };
  }, []);

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/uvkendre", label: "GitHub" },
    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/uvkendre", label: "LinkedIn" },
    { icon: <FaEnvelope size={24} />, url: "mailto:uvkendre@gmail.com", label: "Email" }
  ];

  return (
    <div id="home" className="max-w-screen h-screen mx-auto px-4 py-28 text-white flex flex-col justify-center relative">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative"
      >
        {/* Background Gradient Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"
        />

        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentGreeting}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block min-w-[200px]"
            >
              {greetings[currentGreeting]}
            </motion.span>
          </AnimatePresence>
          <motion.span 
            className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            , I'm Yuvraj Kendre{' '}
          </motion.span>
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <FaCode className="inline-block ml-2 text-purple-400" />
          </motion.span>
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6"
        >
          <AnimatePresence mode="wait">
            <motion.h3
              key={currentRole}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="text-2xl text-purple-300"
            >
              {roles[currentRole]}
            </motion.h3>
          </AnimatePresence>
        </motion.div>

        

        
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Welcome to My Portfolio</h3>
        <p className="text-lg md:text-xl text-gray-300 px-4">
          Explore my projects and feel free to reach out for collaboration!
        </p>
      </motion.section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full p-1">
          <div className="w-2 h-2 bg-purple-400/50 rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;