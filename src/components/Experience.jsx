import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaLaptop, FaServer } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'PlatypusBox',
      period: 'Nov 2024 - Present',
      type: 'Internship',
      location: 'Delhi, India · Remote',
      description: [
        'Developing and maintaining web applications using MERN stack',
        'Collaborating with team members on various projects',
        'Implementing responsive designs and ensuring cross-browser compatibility',
        'Writing clean, efficient, and maintainable code'
      ],
      skills: ['Node.js', 'React.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML/CSS'],
      icon: <FaCode />
    }
  ];

  return (
    <div id="experience" className="min-h-screen bg-black py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">Experience</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/20"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-2xl">
                    {exp.icon}
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                    <span className="flex items-center gap-2">
                      <FaBriefcase className="text-purple-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaLaptop className="text-purple-400" />
                      {exp.type}
                    </span>
                    <span className="text-gray-400">{exp.period}</span>
                    <span className="text-gray-400">{exp.location}</span>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-purple-400 mt-1">•</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Used */}
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
