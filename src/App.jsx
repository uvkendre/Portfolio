import React, { Suspense, lazy } from 'react';
import CursorEffect from './components/CursorEffect';
import LoadingSpinner from './components/LoadingSpinner';
import PageTransition from './components/PageTransition';
import StarBackground from './components/StarBackground';

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen">
      <StarBackground />
      <CursorEffect />
      
      <Suspense fallback={<LoadingSpinner />}>
        <PageTransition>
          <div className="relative z-10">
            <Navbar />
            <main className="overflow-hidden">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </div>
        </PageTransition>
      </Suspense>
    </div>
  );
}

export default App;
