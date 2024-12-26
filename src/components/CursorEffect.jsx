import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.closest('button') || 
          e.target.closest('a') ||
          e.target.classList.contains('hoverable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.2,
        stiffness: 800,
        damping: 30
      }
    },
    hover: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "rgba(138, 43, 226, 0.2)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.2,
        stiffness: 800,
        damping: 30
      }
    }
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        style={{
          position: 'fixed',
          zIndex: 9999,
          pointerEvents: 'none',
          height: 32,
          width: 32,
          borderRadius: '50%',
          backgroundColor: 'rgba(138, 43, 226, 0.5)',
          mixBlendMode: 'difference'
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          zIndex: 9998,
          pointerEvents: 'none',
          height: 8,
          width: 8,
          borderRadius: '50%',
          backgroundColor: 'white',
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          mixBlendMode: 'difference'
        }}
      />
    </>
  );
};

export default CursorEffect;
