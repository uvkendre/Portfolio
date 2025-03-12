import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarBackground from './StarBackground';

const LoadingState = ({ onLoadingComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const codeSnippets = [
    `const dev = {
  name: "YK"
};`,
    `while(true) {
  code();
}`,
    `if(coffee) {
  code();
}`
  ];

  const phases = [
    {
      command: '> initializing dev mode',
      result: 'loading skills...',
      color: 'text-white'
    },
    {
      command: '> deploying portfolio',
      result: 'preparing experience...',
      color: 'text-white'
    },
    {
      command: '> launch sequence',
      result: 'ready for takeoff...',
      color: 'text-white'
    }
  ];

  useEffect(() => {
    let timeout;
    
    const typeText = async () => {
      const phase = phases[currentPhase];
      if (!phase) {
        setTimeout(() => onLoadingComplete(), 300);
        return;
      }

      for (let i = 0; i <= phase.command.length; i++) {
        await new Promise(resolve => {
          timeout = setTimeout(() => {
            setCurrentText(phase.command.slice(0, i));
            resolve();
          }, 30);
        });
      }

      await new Promise(resolve => {
        timeout = setTimeout(resolve, 300);
      });

      timeout = setTimeout(() => {
        setCurrentPhase(prev => prev + 1);
        setCurrentText('');
      }, 400);
    };

    typeText();

    return () => clearTimeout(timeout);
  }, [currentPhase]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <StarBackground />

      {/* Falling Code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -200,
              opacity: 0,
              scale: 0.5,
              rotate: Math.random() * 20 - 10
            }}
            animate={{ 
              y: window.innerHeight + 200,
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: Math.random() * 20 - 10
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 2
            }}
          >
            <pre className="font-mono text-lg md:text-xl whitespace-pre bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <code className="text-white/80">
                {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
              </code>
            </pre>
          </motion.div>
        ))}
      </div>

      {/* Terminal Window */}
      <motion.div
        className="relative w-11/12 max-w-2xl bg-black/40 backdrop-blur-sm rounded-lg border border-white/10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-sm text-white/70 font-medium">portfolio.exe</span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm md:text-base">
          <div className="space-y-2">
            {currentPhase > 0 && phases.slice(0, currentPhase).map((phase, index) => (
              <div key={index} className="space-y-1">
                <div className="text-white">{phase.command}</div>
                <div className="text-white/60">{phase.result}</div>
              </div>
            ))}
            
            {/* Current typing line */}
            <div className="space-y-1">
              <div className="text-white">
                {currentText}
                {showCursor && <span className="inline-block w-2 h-5 ml-1 bg-white/80" />}
              </div>
              {currentText === phases[currentPhase]?.command && (
                <div className="text-white/60">{phases[currentPhase]?.result}</div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingState;
