import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

function About() {
  return (
    <div id="about" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-purple-500/80 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto rounded-2xl overflow-hidden border-4 border-purple-500/80 shadow-xl shadow-purple-500/20 backdrop-blur-sm">
              <img
                src="/profile.JPG"
                alt="Yuvraj Kendre"
                className="w-full h-full object-cover object-center transform scale-[1.8] origin-top"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-purple-400/30 rounded-2xl animate-pulse" />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-sm bg-purple-900/10 p-8 rounded-xl border border-purple-500/20"
          >
            <h3 className="text-3xl font-bold mb-6 text-purple-400">Full Stack Developer</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                🚀 Welcome! I'm Yuvraj Kendre, a passionate Full Stack Developer with a 
                strong foundation in web development and a keen eye for creating 
                user-friendly applications.
              </p>
              <p>
                💻 I specialize in the MERN stack and have a deep interest in building 
                scalable web applications that solve real-world problems.
              </p>
              <p>
                🎓 My journey in tech is driven by continuous learning and staying 
                up-to-date with the latest technologies and best practices.
              </p>
            </div>

            {/* Education & Experience */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                <FaGraduationCap className="text-purple-400 text-xl" />
                <span>B.Sc. from SRTMU, Nanded</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <FaLaptopCode className="text-purple-400 text-xl" />
                <span>Full Stack Developer</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex space-x-6">
              <a
                href="https://github.com/uvkendre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yuvrajkendre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;