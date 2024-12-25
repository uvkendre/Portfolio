import React from 'react';
import { FaCode } from "react-icons/fa";
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div id="home" className="max-w-screen h-screen mx-auto px-4 py-28 text-white flex flex-col justify-center relative">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
          <ReactTyped
            strings={[
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
            ]}
            typeSpeed={40}
            loop
          />
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            , I'm Yuvraj Kendre{' '}
          </span>
          <FaCode className="inline-block ml-2 text-purple-400" />
        </h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mt-20 px-4"
        >
          A passionate Web Developer who loves creating user-friendly web experiences. <br />
          Currently, I'm diving deep into the MERN stack and working on exciting projects.
        </motion.p>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full p-1">
          <div className="w-2 h-2 bg-purple-400/50 rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;