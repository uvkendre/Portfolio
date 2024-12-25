import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaGraduationCap, FaAward } from 'react-icons/fa';

function Achievements() {
  const achievements = [
    {
      icon: <FaGraduationCap />,
      title: 'Academic Excellence',
      description: 'Achieved 90% in Higher Secondary Education (12th PCB)',
      date: '2021'
    },
    {
      icon: <FaTrophy />,
      title: 'Full Stack Development',
      description: 'Successfully completed multiple full-stack projects using MERN stack',
      date: '2023'
    },
    {
      icon: <FaAward />,
      title: 'Professional Growth',
      description: 'Secured position as Full Stack Developer at PlatypusBox',
      date: '2024'
    }
  ];

  return (
    <div id="achievements" className="min-h-screen bg-black py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">Achievements</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-2xl mb-6 mx-auto">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-3 text-center">
                {achievement.title}
              </h3>
              <p className="text-gray-300 text-center mb-4">
                {achievement.description}
              </p>
              <p className="text-purple-300 text-sm text-center">
                {achievement.date}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Profile Views', value: '149+' },
            { label: 'Post Impressions', value: '141+' },
            { label: 'Search Appearances', value: '22+' },
            { label: 'Connections', value: '500+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Achievements;
