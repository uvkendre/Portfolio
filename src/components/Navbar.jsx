import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineExperiment, AiOutlineMail } from 'react-icons/ai';
import { ReactTyped } from 'react-typed'; // Changed to named import
import { Link } from 'react-scroll'; // Import Link from react-scroll
import ThreeDBackground from './ThreeDBackground'; // Import the 3D background

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="max-w-screen-2xl mx-auto container px-4 shadow-2xl fixed bg-gray-900 z-10">
      <ThreeDBackground /> {/* Add the 3D Background component */}
      <div className="flex justify-between py-4 h-16 items-center">
        <div className="flex items-center space-x-2 px-10">
          <div className="flex flex-col mt-2">
            <p className="text-xl font-bold text-[#6366f1]">
              <ReactTyped
                strings={["Full Stack Developer", "Programmer", "Self-Taught"]}
                typeSpeed={40}
                backSpeed={50}
                loop
                style={{ display: 'inline-block' }} 
              />
            </p>
          </div>
        </div>

        <div className="hidden md:flex">
          <ul className="flex space-x-6 items-center gap-8 pr-8">
            <li>
              <Link to="home" smooth={true} duration={500} className="flex items-center space-x-1 text-white hover:text-[#6366f1] transition-colors duration-300">
                <AiOutlineHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="flex items-center space-x-1 text-white hover:text-[#6366f1] transition-colors duration-300">
                <AiOutlineUser />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="flex items-center space-x-1 text-white hover:text-[#6366f1] transition-colors duration-300">
                <AiOutlineFundProjectionScreen />
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="flex items-center space-x-1 text-white hover:text-[#6366f1] transition-colors duration-300">
                <AiOutlineExperiment />
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="flex items-center space-x-1 text-white hover:text-[#6366f1] transition-colors duration-300">
                <AiOutlineMail />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu" className="text-[#6366f1]">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <ul className="flex flex-col space-y-4 items-center p-4">
            <li>
              <Link to="home" smooth={true} duration={500} className="flex items-center space-x-1 text-white hover:text-[#6366f1] transition-colors duration-300">
                <AiOutlineHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="flex items-center space-x-1 text-white hover:text-[#6366f1] transition-colors duration-300">
                <AiOutlineUser />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="flex items-center space-x-1 text-white hover:text-[#6366f1] transition-colors duration-300">
                <AiOutlineFundProjectionScreen />
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="flex items-center space-x-1 text-white hover:text-[#6366f1] transition-colors duration-300">
                <AiOutlineExperiment />
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="flex items-center space-x-1 text-white hover:text-[#6366f1] transition-colors duration-300">
                <AiOutlineMail />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
