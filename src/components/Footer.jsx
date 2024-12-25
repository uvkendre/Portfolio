import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/uvkendre', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/yuvrajkendre', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/uvkendre', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com/uvkendre', label: 'Instagram' },
  ];

  return (
    <footer className="py-8 backdrop-blur-sm bg-purple-900/10 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-300"
          >
            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> by Yuvraj
            </p>
            <p>© {currentYear} Yuvraj. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;