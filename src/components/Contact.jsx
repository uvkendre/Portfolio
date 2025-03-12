import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      content: "yuvikendre2002@gmail.com",
      href: "mailto:yuvikendre2002@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      content: "+91 7498669375",
      href: "tel:7498669375"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      content: "Nanded, Maharashtra, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={28} />,
      href: "https://linkedin.com/in/uvkendre",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub size={28} />,
      href: "https://github.com/uvkendre",
      label: "GitHub"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 backdrop-blur-sm bg-slate-950 bg-black/30 rounded-xl border border-white/10">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-6 text-gray-300 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-white group-hover:text-white/80 transition-colors">
                    {info.icon}
                  </span>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-lg hover:text-white transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <span className="text-lg">{info.content}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;