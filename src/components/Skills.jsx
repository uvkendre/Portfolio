import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
  { name: 'SQL', icon: FaDatabase, color: 'text-blue-400' },
];

function Skills() {
  return (
    <div id="skills" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">Skills</h2>
          <div className="w-24 h-1 bg-purple-500/80 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-purple-900/10 p-6 rounded-xl border border-purple-500/20 flex flex-col items-center hover:border-purple-500/40 transition-all group"
            >
              <skill.icon className={`text-5xl ${skill.color} mb-4 group-hover:scale-110 transition-transform`} />
              <span className="text-gray-300 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;