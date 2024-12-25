import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div id="contact" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">Contact Me</h2>
          <div className="w-24 h-1 bg-purple-500/80 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-sm bg-purple-900/10 p-8 rounded-xl border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-purple-400" />
                <div>
                  <h4 className="text-gray-300 font-medium">Email</h4>
                  <p className="text-gray-400">yuvrajkendre@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-purple-400" />
                <div>
                  <h4 className="text-gray-300 font-medium">Phone</h4>
                  <p className="text-gray-400">+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-purple-400" />
                <div>
                  <h4 className="text-gray-300 font-medium">Location</h4>
                  <p className="text-gray-400">Nanded, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-sm bg-purple-900/10 p-8 rounded-xl border border-purple-500/20"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-purple-900/20 border border-purple-500/20 text-gray-300 focus:outline-none focus:border-purple-500/40"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-purple-900/20 border border-purple-500/20 text-gray-300 focus:outline-none focus:border-purple-500/40"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-purple-900/20 border border-purple-500/20 text-gray-300 focus:outline-none focus:border-purple-500/40"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-purple-500/80 text-white font-medium hover:bg-purple-600/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;