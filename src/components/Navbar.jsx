import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaCog, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-xl font-semibold text-purple-400 cursor-pointer"
          >
            YK
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {[
              { to: 'home', icon: FaHome, text: 'Home' },
              { to: 'about', icon: FaUser, text: 'About' },
              { to: 'projects', icon: FaCode, text: 'Projects' },
              { to: 'skills', icon: FaCog, text: 'Skills' },
              { to: 'contact', icon: FaEnvelope, text: 'Contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
              >
                <item.icon className="text-sm" />
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;