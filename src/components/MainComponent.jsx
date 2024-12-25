// src/components/MainComponent.jsx
import React from 'react';
import ThreeDBackground from './ThreeDBackground';
import Contact from './Contact';

const MainComponent = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <ThreeDBackground />
      <Contact />
    </div>
  );
};

export default MainComponent;