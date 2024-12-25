import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeDBackground from './components/ThreeDBackground';

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Three.js Background */}
      <div className="fixed inset-0 z-0">
        <ThreeDBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
