// src/components/common/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_LINKS } from '../../data/constants';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: CONTACT_LINKS.linkedin, icon: '💼', description: 'Professional Network' },
    { name: 'GitHub', href: CONTACT_LINKS.github, icon: '⚡', description: 'Source Code' },
    { name: 'Medium', href: CONTACT_LINKS.medium, icon: '✍️', description: 'Tech Articles' },
    { name: 'Hashnode', href: CONTACT_LINKS.hashnode, icon: '📝', description: 'Dev Blog' },
    { name: 'Portfolio', href: CONTACT_LINKS.portfolio, icon: '🌐', description: 'Personal Site' },
    { name: 'All Links', href: CONTACT_LINKS.linktree, icon: '🔗', description: 'Link Hub' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      className="relative bg-black/10 backdrop-blur-lg border-t border-white/10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Glass overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Section - Branding */}
          <motion.div 
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center justify-center lg:justify-start space-x-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              {/* Logo */}
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-cyan-400/80 to-emerald-500/80 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border border-white/20"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.span 
                  className="text-xl font-bold text-white drop-shadow-lg"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(6, 182, 212, 0.8)',
                      '0 0 20px rgba(16, 185, 129, 0.8)',
                      '0 0 10px rgba(6, 182, 212, 0.8)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  AI
                </motion.span>
              </motion.div>
              
              {/* Brand Text */}
              <div>
                <div className="text-xl font-black bg-gradient-to-r from-white via-cyan-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg">
                  AI Agents Store
                </div>
                <div className="text-sm text-gray-300/80 drop-shadow-sm">
                  by Arshnoor Singh Sohi
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300/80 text-sm max-w-xs mx-auto lg:mx-0 drop-shadow-sm"
              variants={itemVariants}
            >
              Explore cutting-edge AI agents and applications. Built with passion for innovation and artificial intelligence.
            </motion.p>
          </motion.div>

          {/* Center Section - Social Links */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-lg font-bold text-white mb-6 drop-shadow-lg"
              variants={itemVariants}
            >
              Connect & Follow
            </motion.h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-cyan-400/40 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                  custom={index}
                >
                  {/* Glass glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className="text-2xl mb-1"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {link.icon}
                    </motion.div>
                    <div className="text-xs font-medium text-white/90 drop-shadow-sm">{link.name}</div>
                    <div className="text-xs text-gray-400/80 drop-shadow-sm">{link.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Tech Stack */}
          <motion.div 
            className="text-center lg:text-right"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-lg font-bold text-white mb-6 drop-shadow-lg"
              variants={itemVariants}
            >
              Built With
            </motion.h3>
            
            <div className="space-y-3">
              {[
                { name: 'React + Vite', desc: 'Frontend Framework', icon: '⚛️' },
                { name: 'Three.js', desc: '3D Graphics', icon: '🎮' },
                { name: 'Framer Motion', desc: 'Smooth Animations', icon: '🎭' },
                { name: 'TailwindCSS', desc: 'Styling System', icon: '🎨' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group flex items-center justify-center lg:justify-end gap-3 p-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: -5 }}
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="text-right">
                    <div className="text-sm font-medium text-white/90 drop-shadow-sm">{tech.name}</div>
                    <div className="text-xs text-gray-400/80 drop-shadow-sm">{tech.desc}</div>
                  </div>
                  <motion.div 
                    className="text-xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-white/10"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div 
              className="text-gray-400/80 text-sm drop-shadow-sm"
              variants={itemVariants}
            >
              © {new Date().getFullYear()} Arshnoor Singh Sohi. All rights reserved.
            </motion.div>

            {/* Status */}
            <motion.div 
              className="flex items-center gap-4 text-sm"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center gap-2"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="w-2 h-2 bg-emerald-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 5px rgba(16, 185, 129, 0.5)',
                      '0 0 15px rgba(16, 185, 129, 0.8)',
                      '0 0 5px rgba(16, 185, 129, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-emerald-400 font-medium drop-shadow-sm">All Systems Operational</span>
              </motion.div>

              <motion.div 
                className="text-gray-400/80 drop-shadow-sm"
                whileHover={{ color: '#06b6d4' }}
              >
                Made with ❤️ for AI
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;