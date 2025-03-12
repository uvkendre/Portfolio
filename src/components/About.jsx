import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

const About = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React.js and modern web technologies.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, and MongoDB.'
    },
    {
      icon: <FaMobile />,
      title: 'Responsive Design',
      description: 'Developing mobile-first websites that work seamlessly across all devices.'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Designing and managing databases to store and retrieve data efficiently.'
    }
  ];

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

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Passionate Full Stack Developer with expertise in building modern web applications.
            I transform ideas into scalable and efficient solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="backdrop-blur-sm p-6 rounded-xl border bg-slate-950 border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-purple-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            With a strong foundation in both frontend and backend technologies,
            I'm ready to take on new challenges and create innovative solutions
            that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;