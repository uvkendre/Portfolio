import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDBackground = () => {
  const sceneRef = useRef();
  const mixerRef = useRef();
  const moonRef = useRef(); 
  const astronautRef = useRef(); 

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create particle system
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

    // Load the astronaut model
    const loader = new GLTFLoader();
    loader.load(
      'Astronaut.glb', 
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        astronautRef.current = model; 
        model.position.set(-5, -1.3, -2);
        model.rotation.set(0, 46 * (Math.PI / 180), 0);

        model.traverse((child) => {
          if (child.isMesh) {
            const glowMaterial = new THREE.MeshStandardMaterial({
              color: 0xf1f1f1,
              emissive: 0x00ccff,
              emissiveIntensity: 0.1,
            });
            child.material = glowMaterial;
          }
        });

        scene.add(model);

        const mixer = new THREE.AnimationMixer(model);
        mixerRef.current = mixer;
        if (gltf.animations.length > 0) {
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        }
      },
      undefined,
      (error) => {
        console.error('Error loading astronaut model:', error);
      }
    );

    // Load the moon model
    loader.load(
      'moon.glb', 
      (gltf) => {
        const moonModel = gltf.scene;
        moonModel.scale.set(3, 3, 3); // Default size for desktop
        moonRef.current = moonModel; // Store reference to the moon model
        moonModel.position.set(3.8, 1, -1.2);
        scene.add(moonModel);
      },
      undefined,
      (error) => {
        console.error('Error loading moon model:', error);
      }
    );

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
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Set camera position
    camera.position.z = 3;

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      // Update animation mixer
      if (mixerRef.current) {
        mixerRef.current.update(clock.getDelta());
      }

      // Rotate particle system and stars
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.001;
      stars.rotation.z += 0.001;

      // Rotate the moon for a dynamic effect
      if (moonRef.current) {
        moonRef.current.rotation.y += 0.001;
      }

      // Adjust sizes based on screen width
      const scaleFactor = window.innerWidth < 768 ? 0.5 : 1;
      if (astronautRef.current) {
        astronautRef.current.scale.set(1 * scaleFactor, 1 * scaleFactor, 1 * scaleFactor);
      }
      if (moonRef.current) {
        moonRef.current.scale.set(3 * scaleFactor, 3 * scaleFactor, 3 * scaleFactor);
      }

      renderer.render(scene, camera);
    };

    animate();

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
        zIndex: -1,
        pointerEvents: 'none', 
      }}
    />
  );
};

export default ThreeDBackground;
