import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-4 text-gray-300"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaEnvelope className="text-xl text-purple-400" />
                  <a href="mailto:yuvikendre2002@gmail.com" className="hover:text-purple-400 transition-colors">
                    yuvikendre2002@gmail.com
                  </a>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 text-gray-300"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaPhone className="text-xl text-purple-400" />
                  <a href="tel:7498669375" className="hover:text-purple-400 transition-colors">
                    +91 7498669375
                  </a>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 text-gray-300"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaMapMarkerAlt className="text-xl text-purple-400" />
                  <span>Nanded, Maharashtra, India</span>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-purple-400 mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://linkedin.com/in/uvkendre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/uvkendre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="glass-card p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Send Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20 text-gray-300 focus:outline-none focus:border-purple-500/40"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20 text-gray-300 focus:outline-none focus:border-purple-500/40"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20 text-gray-300 focus:outline-none focus:border-purple-500/40"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-purple-500 hover:to-purple-700 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;