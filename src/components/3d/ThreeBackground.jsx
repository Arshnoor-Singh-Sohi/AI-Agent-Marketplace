// src/components/3d/ThreeBackground.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Camera position
    camera.position.z = 20;

    // Create subtle geometric elements
    const elements = [];

    // 1. Clean geometric wireframes - very subtle
    const wireframeGeometries = [
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.SphereGeometry(1.5, 16, 16),
      new THREE.ConeGeometry(1, 2, 8),
      new THREE.OctahedronGeometry(1.2),
    ];

    const wireframeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ffff, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.1 
    });

    // Create 8 clean wireframe objects
    for (let i = 0; i < 8; i++) {
      const geometry = wireframeGeometries[Math.floor(Math.random() * wireframeGeometries.length)];
      const mesh = new THREE.Mesh(geometry, wireframeMaterial.clone());

      // Strategic positioning - not random
      const angle = (i / 8) * Math.PI * 2;
      const radius = 12 + Math.random() * 8;
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.y = Math.sin(angle) * radius * 0.5;
      mesh.position.z = (Math.random() - 0.5) * 15;

      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005,
        },
        originalPosition: mesh.position.clone(),
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatAmplitude: Math.random() * 1 + 0.5,
      };

      elements.push(mesh);
      scene.add(mesh);
    }

    // 2. Subtle particle field
    const particleCount = 50; // Much less particles
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.5,
      transparent: true,
      opacity: 0.3,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 3. Very subtle grid lines
    const createGridLines = () => {
      const gridGroup = new THREE.Group();
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x00ffff, 
        transparent: true, 
        opacity: 0.05 
      });

      // Horizontal lines
      for (let i = -10; i <= 10; i += 5) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-30, i, 0),
          new THREE.Vector3(30, i, 0)
        ]);
        const line = new THREE.Line(geometry, lineMaterial);
        gridGroup.add(line);
      }

      // Vertical lines
      for (let i = -10; i <= 10; i += 5) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(i, -20, 0),
          new THREE.Vector3(i, 20, 0)
        ]);
        const line = new THREE.Line(geometry, lineMaterial);
        gridGroup.add(line);
      }

      gridGroup.position.z = -10;
      return gridGroup;
    };

    const grid = createGridLines();
    scene.add(grid);

    // 4. Minimal lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    // 5. Very subtle animation loop
    let time = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.005; // Much slower

      // Gentle rotation for wireframes
      elements.forEach((element, index) => {
        element.rotation.x += element.userData.rotationSpeed.x;
        element.rotation.y += element.userData.rotationSpeed.y;
        element.rotation.z += element.userData.rotationSpeed.z;

        // Very subtle floating
        element.position.y = element.userData.originalPosition.y + 
          Math.sin(time * element.userData.floatSpeed + index) * element.userData.floatAmplitude;
      });

      // Gentle particle movement
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + i) * 0.002; // Very subtle movement
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Slowly rotate the entire grid
      grid.rotation.z = time * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ThreeBackground;