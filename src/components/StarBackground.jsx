import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const StarBackground = () => {
  const sceneRef = useRef();

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
    <div 
      ref={sceneRef} 
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(to bottom, #000000, #0a0a1a)',
        pointerEvents: 'none',
      }}
    />
  );
};

export default StarBackground;
