import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Shop',
    description: 'Full-stack e-commerce application with user authentication, product management, and secure payment integration.',
    github: 'https://github.com/uvkendre/e-shop',
    live: 'https://e-shop-demo.netlify.app',
  },
  {
    title: 'PDF Viewer',
    description: 'Web-based PDF viewer application with features like zoom, page navigation, and document sharing.',
    github: 'https://github.com/uvkendre/pdf-viewer',
    live: 'https://pdf-viewer-demo.netlify.app',
  },
  {
    title: 'Ghumte Haii',
    description: 'Travel platform for solo travelers to connect, share experiences, and plan trips together.',
    github: 'https://github.com/uvkendre/ghumte-haii',
    live: 'https://ghumte-haii.netlify.app',
  },
  {
    title: 'Image Resizer',
    description: 'Browser-based tool to resize images with preview and multiple format support.',
    github: 'https://github.com/uvkendre/image-resizer',
    live: 'https://image-resizer-demo.netlify.app',
  },
  {
    title: 'Digital Clock',
    description: 'Sleek digital clock built with HTML, CSS, and JavaScript featuring multiple time formats.',
    github: 'https://github.com/uvkendre/digital-clock',
    live: 'https://digital-clock-demo.netlify.app',
  },
  {
    title: 'Password Generator',
    description: 'Web app to generate secure passwords with customizable options and strength indicator.',
    github: 'https://github.com/uvkendre/password-generator',
    live: 'https://password-generator-demo.netlify.app',
  },
];

function Projects() {
  return (
    <div id="projects" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">Projects</h2>
          <div className="w-24 h-1 bg-purple-500/80 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-purple-900/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all group"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex justify-end space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
