import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';
import * as THREE from 'three';

const About = () => {
  const sceneRef = useRef();
  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React.js and modern web technologies.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, and MongoDB.'
    },
    {
      icon: <FaMobile />,
      title: 'Responsive Design',
      description: 'Developing mobile-first websites that work seamlessly across all devices.'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Designing and managing databases to store and retrieve data efficiently.'
    }
  ];

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    sceneRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create star field
    const starsCount = 5000;
    const starsGeometry = new THREE.BufferGeometry();
    const starsPositions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      starsPositions[i * 3] = (Math.random() - 0.5) * 200;
      starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 200;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    
    const starsMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Set camera position
    camera.position.z = 3;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      stars.rotation.z += 0.0002;
      stars.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return (
    <div id="about" className="min-h-screen relative">
      {/* Three.js Background */}
      <div ref={sceneRef} className="absolute inset-0 -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm a passionate Full Stack Developer with a focus on creating beautiful and functional web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">My Journey</h3>
            <p className="text-gray-300">
              With a strong foundation in web development, I've been crafting digital experiences that combine creativity with technical expertise. My journey in tech started with a curiosity about how websites work, which led me to dive deep into full-stack development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">My Approach</h3>
            <p className="text-gray-300">
              I believe in writing clean, maintainable code and creating user-friendly interfaces. My approach combines modern design principles with robust functionality, ensuring that each project not only looks great but performs excellently.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-purple-400 mb-8">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="glass-card p-6 text-center group hover:bg-purple-900/20 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="text-3xl text-purple-400 mb-4 inline-block"
                >
                  {service.icon}
                </motion.div>
                <h4 className="text-xl font-semibold text-purple-300 mb-2">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;