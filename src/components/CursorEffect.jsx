import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    // Add hover detection
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          position: 'fixed',
          zIndex: 9999,
          pointerEvents: 'none',
          width: '8px',
          height: '8px',
          backgroundColor: 'rgb(139, 92, 246)',
          borderRadius: '50%',
          mixBlendMode: 'difference',
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
        style={{
          position: 'fixed',
          zIndex: 9998,
          pointerEvents: 'none',
          width: '32px',
          height: '32px',
          border: '2px solid rgb(139, 92, 246)',
          borderRadius: '50%',
          opacity: 0.5,
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};

export default CursorEffect;
