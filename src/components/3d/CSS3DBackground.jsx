// src/components/3d/CSS3DBackground.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CSS3DBackground = () => {
  // AI-themed 3D elements
  const aiElements = [
    { id: 1, type: 'cube', x: 15, y: 20, size: 40, delay: 0 },
    { id: 2, type: 'sphere', x: 80, y: 30, size: 50, delay: 1 },
    { id: 3, type: 'pyramid', x: 10, y: 70, size: 35, delay: 2 },
    { id: 4, type: 'octagon', x: 85, y: 75, size: 45, delay: 3 },
    { id: 5, type: 'cube', x: 25, y: 15, size: 30, delay: 4 },
    { id: 6, type: 'sphere', x: 75, y: 60, size: 38, delay: 5 },
    { id: 7, type: 'pyramid', x: 45, y: 85, size: 42, delay: 6 },
    { id: 8, type: 'octagon', x: 60, y: 25, size: 36, delay: 7 },
  ];

  // Neural network nodes
  const networkNodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    y: Math.random() * 80 + 10,
    delay: i * 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* 3D Geometric Shapes */}
      {aiElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
            perspective: '1000px',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: element.delay * 0.3 }}
        >
          <motion.div
            className="w-full h-full transform-gpu"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 180],
            }}
            transition={{
              duration: 15 + element.id * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Cube */}
            {element.type === 'cube' && (
              <div className="relative w-full h-full">
                {/* Cube faces */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 transform translate-z-4" style={{ transform: 'translateZ(20px)' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-700 transform rotate-y-90 translate-z-4" style={{ transform: 'rotateY(90deg) translateZ(20px)' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-cyan-500 transform rotate-y-180 translate-z-4" style={{ transform: 'rotateY(180deg) translateZ(20px)' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-cyan-800 transform rotate-y-270 translate-z-4" style={{ transform: 'rotateY(270deg) translateZ(20px)' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 transform rotate-x-90 translate-z-4" style={{ transform: 'rotateX(90deg) translateZ(20px)' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-700 transform rotate-x-270 translate-z-4" style={{ transform: 'rotateX(-90deg) translateZ(20px)' }} />
              </div>
            )}

            {/* Sphere */}
            {element.type === 'sphere' && (
              <div 
                className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-xl"
                style={{
                  boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.3), 0 0 20px rgba(16, 185, 129, 0.3)',
                }}
              />
            )}

            {/* Pyramid */}
            {element.type === 'pyramid' && (
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600"
                  style={{
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    transformOrigin: 'center bottom',
                  }}
                />
              </div>
            )}

            {/* Octagon */}
            {element.type === 'octagon' && (
              <div 
                className="w-full h-full bg-gradient-to-br from-cyan-300 to-teal-500"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                }}
              />
            )}
          </motion.div>
        </motion.div>
      ))}

      {/* Neural Network Nodes */}
      {networkNodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: node.delay,
          }}
        />
      ))}

      {/* Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {networkNodes.map((node, i) =>
          networkNodes.slice(i + 1).map((otherNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 30) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: (i + j) * 0.5,
                  }}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Floating Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-300 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-cyan-400/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 15}%`,
              width: '100px',
              height: '2px',
              transformOrigin: 'left center',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Code Matrix Effect */}
      <div className="absolute inset-0 opacity-10">
        {['01001010', '11010010', '10101100', '01110001'].map((binary, i) => (
          <motion.div
            key={binary}
            className="absolute text-cyan-400 font-mono text-xs"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            {binary}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CSS3DBackground;