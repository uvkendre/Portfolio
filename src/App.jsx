import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeDBackground from './components/ThreeDBackground'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Initialize AOS for animations on scroll
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <ThreeDBackground />
      <motion.div 
        className="bg-black text-white"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        style={{ position: 'relative', zIndex: 1 }} 
      >
        <Navbar />
        
        {/* Home Section with AOS animation */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="100" style={{ paddingBottom: '20px' }}>
          <Home />
        </div>

        {/* About Section with AOS animation */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="100" style={{ paddingBottom: '20px' }}>
          <About />
        </div>

        {/* Projects Section with AOS animation */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="100" style={{ paddingBottom: '20px' }}>
          <Projects />
        </div>

        {/* Skills Section without AOS but with scroll effects */}
        <div style={{ paddingBottom: '20px' }}>
          <Skills />
        </div>

        {/* Contact Section with AOS animation */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="100" style={{ paddingBottom: '20px' }}>
          <Contact />
        </div>

        {/* Footer without AOS effects */}
        <div style={{ paddingBottom: '20px' }}>
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
