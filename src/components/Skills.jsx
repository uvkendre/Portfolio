import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
    { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
    { name: 'Node.js', icon: <FaNode />, color: 'text-green-500' },
    { name: 'MongoDB', icon: <FaDatabase />, color: 'text-green-400' },
  ];

  return (
    <div id="skills" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life.
          </p>
        </motion.section>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="glass-card p-6 flex flex-col items-center justify-center gap-4 group hover:bg-white/5"
            >
              <motion.div
                className={`text-4xl ${skill.color} transition-all duration-300 group-hover:scale-110`}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-300">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React.js / Next.js</li>
                <li>• Tailwind CSS</li>
                <li>• Redux / Context API</li>
                <li>• Responsive Design</li>
                <li>• Framer Motion</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js / Express</li>
                <li>• MongoDB / Mongoose</li>
                <li>• RESTful APIs</li>
                <li>• Authentication</li>
                <li>• Database Design</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;