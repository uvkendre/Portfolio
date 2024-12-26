import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaCode, FaSearch, FaArrowRight, FaStar, FaCodeBranch, FaTools, FaClock, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

const projects = [
  {
    title: 'E-Shop',
    description: 'A modern e-commerce platform with a sleek UI, product catalog, shopping cart, and secure checkout process.',
    longDescription: 'E-Shop is a comprehensive e-commerce solution featuring product categorization, user authentication, shopping cart functionality, and a streamlined checkout process. Built with React for optimal performance and user experience.',
    github: 'https://github.com/uvkendre/E-Shop',
    live: 'https://uvkendre.github.io/E-Shop/',
    tech: ['react', 'javascript', 'html', 'css'],
    category: 'frontend',
    features: ['Responsive Design', 'Shopping Cart', 'Product Search', 'User Authentication'],
    highlights: ['Modern UI/UX', 'Performance Optimized', 'Mobile First Design'],
    challenges: ['Complex State Management', 'Real-time Updates', 'Performance Optimization'],
    learnings: ['Advanced React Patterns', 'State Management', 'Performance Tuning'],
    timeline: '3 months',
    role: 'Full Stack Developer',
    impact: ['Improved user engagement', 'Faster load times', 'Better conversion rates']
  },
  {
    title: 'Ghumte Haii',
    description: 'An innovative travel platform designed for solo travelers to discover destinations, share experiences, and connect.',
    longDescription: 'Ghumte Haii is a travel community platform that helps solo travelers connect, share experiences, and plan their adventures. Features include destination discovery, experience sharing, and travel planning tools.',
    github: 'https://github.com/uvkendre/GhumteHaii',
    live: 'https://uvkendre.github.io/GhumteHaii/',
    tech: ['html', 'css', 'javascript'],
    category: 'frontend',
    features: ['Interactive Maps', 'Travel Guides', 'User Reviews', 'Photo Gallery'],
    highlights: ['Community Driven', 'Real-time Updates', 'Interactive UI'],
    challenges: ['Data Organization', 'User Experience', 'Content Management'],
    learnings: ['UX Design Principles', 'Content Strategy', 'Community Building'],
    timeline: '2 months',
    role: 'Frontend Developer',
    impact: ['Enhanced user engagement', 'Improved content discovery', 'Better user retention']
  },
  {
    title: 'Image Resizer',
    description: 'A user-friendly web tool for quick and efficient image resizing with real-time preview functionality.',
    longDescription: 'Image Resizer is a browser-based tool that allows users to quickly resize images while maintaining aspect ratios. Features include multiple output formats, real-time preview, and batch processing capabilities.',
    github: 'https://github.com/uvkendre/Image-Resizer',
    live: 'https://uvkendre.github.io/Image-Resizer/',
    tech: ['html', 'css', 'javascript'],
    category: 'frontend',
    features: ['Drag & Drop', 'Multiple Formats', 'Aspect Ratio Lock', 'Batch Processing'],
    highlights: ['Fast Processing', 'No Server Required', 'Privacy Focused'],
    challenges: ['Browser Limitations', 'Performance Issues', 'File Handling'],
    learnings: ['File API', 'Image Processing', 'Browser Storage'],
    timeline: '1 month',
    role: 'Frontend Developer',
    impact: ['Simplified workflow', 'Reduced processing time', 'Enhanced productivity']
  },
  {
    title: 'Password Generator',
    description: 'A secure password generator with customizable options for length and character types.',
    longDescription: 'Password Generator creates strong, secure passwords with customizable parameters. Features include variable length, character type selection, and password strength indicators to ensure maximum security.',
    github: 'https://github.com/uvkendre/Password-Generator',
    live: 'https://uvkendre.github.io/Password-Generator/',
    tech: ['html', 'css', 'javascript'],
    category: 'frontend',
    features: ['Customizable Length', 'Character Options', 'Strength Indicator', 'Copy to Clipboard'],
    highlights: ['Security Focused', 'Instant Generation', 'User Friendly'],
    challenges: ['Security Implementation', 'Algorithm Optimization', 'UX Design'],
    learnings: ['Cryptography Basics', 'Security Best Practices', 'UI/UX Design'],
    timeline: '2 weeks',
    role: 'Frontend Developer',
    impact: ['Enhanced security', 'Improved usability', 'Positive user feedback']
  }
];

const techIcons = {
  react: { icon: FaReact, color: 'text-cyan-400', name: 'React' },
  node: { icon: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
  mongodb: { icon: SiMongodb, color: 'text-green-500', name: 'MongoDB' },
  express: { icon: SiExpress, color: 'text-gray-400', name: 'Express' },
  tailwind: { icon: SiTailwindcss, color: 'text-cyan-400', name: 'Tailwind' },
  typescript: { icon: SiTypescript, color: 'text-blue-500', name: 'TypeScript' },
  javascript: { icon: SiJavascript, color: 'text-yellow-400', name: 'JavaScript' },
  html: { icon: SiHtml5, color: 'text-orange-500', name: 'HTML5' },
  css: { icon: SiCss3, color: 'text-blue-400', name: 'CSS3' },
};

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const controls = useAnimation();

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const tabContent = (project) => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4">
            <p className="text-gray-300">{project.longDescription}</p>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <FaClock className="text-purple-400" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTools className="text-purple-400" />
                <span>{project.role}</span>
              </div>
            </div>
          </div>
        );
      case 'features':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                <FaCodeBranch />
                Key Features
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                <FaStar />
                Highlights
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {project.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'challenges':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                <FaLightbulb />
                Challenges Overcome
              </h4>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                <FaChartLine />
                Impact & Results
              </h4>
              <ul className="space-y-2">
                {project.impact.map((impact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    {impact}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="projects" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Explore my portfolio of web development projects, showcasing modern design patterns,
            technical expertise, and problem-solving capabilities.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-purple-900/20 border border-purple-500/20 text-gray-300 focus:outline-none focus:border-purple-500/40 backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="backdrop-blur-sm bg-gradient-to-br from-purple-900/10 to-purple-900/20 rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                  {/* Project Header */}
                  <div className="p-6 border-b border-purple-500/20">
                    <div className="flex justify-between items-start mb-4">
                      <motion.h3 
                        className="text-2xl font-bold text-purple-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.title}
                      </motion.h3>
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-400 transition-colors relative group"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub size={20} />
                          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-purple-900/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            View Source
                          </span>
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-400 transition-colors relative group"
                          whileHover={{ scale: 1.1, rotate: -10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt size={20} />
                          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-purple-900/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Live Demo
                          </span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => {
                        const TechIcon = techIcons[tech].icon;
                        return (
                          <motion.div
                            key={tech}
                            className={`${techIcons[tech].color} flex items-center gap-1 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <TechIcon size={14} />
                            <span className="text-sm">{techIcons[tech].name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <AnimatePresence mode="wait">
                      {selectedProject === project ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                        >
                          {/* Tabs */}
                          <div className="flex gap-4 mb-6">
                            {['overview', 'features', 'challenges'].map((tab) => (
                              <motion.button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-full text-sm transition-all ${
                                  activeTab === tab
                                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40'
                                    : 'text-gray-400 hover:text-purple-400'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                              </motion.button>
                            ))}
                          </div>

                          {/* Tab Content */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeTab}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.2 }}
                            >
                              {tabContent(project)}
                            </motion.div>
                          </AnimatePresence>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <p className="text-gray-300 mb-4">{project.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand/Collapse Button */}
                    <motion.button
                      onClick={() => {
                        setSelectedProject(selectedProject === project ? null : project);
                        setActiveTab('overview');
                      }}
                      className="mt-4 flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{selectedProject === project ? 'Show Less' : 'Learn More'}</span>
                      <FaArrowRight className={`transform transition-transform duration-300 ${
                        selectedProject === project ? 'rotate-90' : ''
                      }`} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
