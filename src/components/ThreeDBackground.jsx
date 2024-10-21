// src/components/ThreeDBackground.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDBackground = () => {
  const sceneRef = useRef();
  const mixerRef = useRef();
  const moonRef = useRef(); // Ref for the moon model
  const astronautRef = useRef(); // Ref for the astronaut model

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Add lights to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Particle System (Reduced)
    const particleCount = 2000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlesPositions[i * 3] = (Math.random() - 0.5) * 100;
      particlesPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      particlesPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0x00aaff, size: 0.1 });
    const particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particleSystem);

    // Load the GLB model (Astronaut.glb)
    const loader = new GLTFLoader();
    loader.load(
      'Astronaut.glb', // Adjust the path based on your setup
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1); // Default size for desktop
        astronautRef.current = model; // Store reference to the astronaut model
        model.position.set(-5, -1.3, -2);
        model.rotation.set(0, 46 * (Math.PI / 180), 0);

        // Traverse the model to change the material to a glowing effect
        model.traverse((child) => {
          if (child.isMesh) {
            const glowMaterial = new THREE.MeshStandardMaterial({
              color: 0xf1f1f1,
              emissive: 0x00ccff,
              emissiveIntensity: 0.1, // Adjust intensity for glow
            });
            child.material = glowMaterial; // Apply new material
          }
        });

        scene.add(model);

        // Set up animation mixer
        const mixer = new THREE.AnimationMixer(model);
        mixerRef.current = mixer;

        // Play the animation clips if they are available in the GLB file
        if (gltf.animations.length > 0) {
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        }
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );

    // Load the GLB model (Moon.glb)
    loader.load(
      'moon.glb', // Adjust the path based on your setup
      (gltf) => {
        const moonModel = gltf.scene;
        moonModel.scale.set(3, 3, 3); // Default size for desktop
        moonRef.current = moonModel; // Store reference to the moon model
        moonModel.position.set(3.8, 1, -1.2); // Position the moon behind the astronaut
        scene.add(moonModel);
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the moon model:', error);
      }
    );

    // Star Field
    const starsCount = 5000;
    const starsGeometry = new THREE.BufferGeometry();
    const starsPositions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      starsPositions[i * 3] = (Math.random() - 0.5) * 200;
      starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 200;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Camera Position
    camera.position.z = 3;

    // Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      // Update the animation mixer if available
      if (mixerRef.current) {
        mixerRef.current.update(clock.getDelta());
      }

      // Rotate the particle system
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.001;

      // Slowly rotate the star field
      stars.rotation.z += 0.001;

      // Rotate the moon for a dynamic effect
      if (moonRef.current) {
        moonRef.current.rotation.y += 0.001; // Rotate the moon around its Y-axis
      }

      // Adjust sizes based on screen width
      const scaleFactor = window.innerWidth < 768 ? 0.5 : 1; // Scale down for mobile
      if (astronautRef.current) {
        astronautRef.current.scale.set(1 * scaleFactor, 1 * scaleFactor, 1 * scaleFactor); // Adjust size for mobile
      }
      if (moonRef.current) {
        moonRef.current.scale.set(3 * scaleFactor, 3 * scaleFactor, 3 * scaleFactor); // Adjust size for mobile
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensures the 3D background is behind everything
        pointerEvents: 'none',
      }}
    />
  );
};

export default ThreeDBackground;
