import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorEffect from './components/CursorEffect';
import LoadingState from './components/LoadingState';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingState onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CursorEffect />
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
