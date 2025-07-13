// src/components/sections/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_LINKS } from '../../data/constants';
import { AI_PROJECTS } from '../../data/projects';
import ThreeBackground from '../3d/ThreeBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-20 md:pt-24 lg:pt-16">
      {/* Professional Three.js Background */}
      <ThreeBackground />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ zIndex: 2 }}>
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Clean Code Elements - No Flickering */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        {['<AI/>', 'ML()', 'RAG{}', 'GPT'].map((code, i) => (
          <motion.div
            key={code}
            className="absolute text-cyan-400/15 font-mono text-xs sm:text-sm hidden sm:block"
            style={{
              left: `${15 + i * 20}%`,
              top: `${25 + (i % 2) * 50}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full" style={{ zIndex: 10 }}>
        {/* Main Title */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white block sm:inline">AI Agents</span>
          <br className="hidden sm:block" />
          <span className="text-white sm:hidden"> </span>
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Marketplace
          </span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore my collection of{' '}
          <span className="text-cyan-400 font-semibold">powerful AI agents</span> and applications.
          <br className="hidden sm:block" />
          <span className="block sm:inline mt-2 sm:mt-0">
            From RAG systems to creative workspaces - discover tools that push the boundaries of AI.
          </span>
        </motion.p>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="text-xl sm:text-2xl mb-2">🧠</div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Smart AI Tools</h3>
            <p className="text-gray-400 text-sm sm:text-base">Advanced RAG systems, chatbots, and intelligent assistants</p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="text-xl sm:text-2xl mb-2">🎨</div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Creative Workspaces</h3>
            <p className="text-gray-400 text-sm sm:text-base">AI-powered tools for content creation and analysis</p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all sm:col-span-2 lg:col-span-1"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="text-xl sm:text-2xl mb-2">⚡</div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Live Demos</h3>
            <p className="text-gray-400 text-sm sm:text-base">Interactive applications you can try right now</p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.querySelector('#projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>🚀</span>
            <span>Explore AI Projects</span>
          </motion.button>

          <motion.a
            href={CONTACT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-400/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05, borderColor: "rgba(52, 211, 153, 1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>⭐</span>
            <span>View Source Code</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div>
            <div className="text-xl sm:text-2xl font-bold text-cyan-400">{AI_PROJECTS.length}</div>
            <div className="text-xs sm:text-sm text-gray-400">AI Project{AI_PROJECTS.length !== 1 ? 's' : ''}</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400">{AI_PROJECTS.filter(p => p.status === 'live').length}</div>
            <div className="text-xs sm:text-sm text-gray-400">Live Demo{AI_PROJECTS.filter(p => p.status === 'live').length !== 1 ? 's' : ''}</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-teal-400">100%</div>
            <div className="text-xs sm:text-sm text-gray-400">Open Source</div>
          </div>
        </motion.div>
      </div>

      {/* Streamlit Notice - Clean and Minimal */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/20 rounded-lg text-xs sm:text-sm text-amber-300 mx-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>⚡</span>
        <span className="hidden sm:inline">Live demos may take a moment to load</span>
        <span className="sm:hidden">Demos may take time to load</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;