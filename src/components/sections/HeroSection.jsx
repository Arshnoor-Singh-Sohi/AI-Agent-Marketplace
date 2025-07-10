// src/components/sections/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_LINKS } from '../../data/constants';
import { AI_PROJECTS } from '../../data/projects';
import ThreeBackground from '../3d/ThreeBackground';

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
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
            className="absolute text-cyan-400/15 font-mono text-sm"
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
      <div className="relative text-center px-4 max-w-6xl mx-auto" style={{ zIndex: 10 }}>
        {/* Main Title */}
        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">AI Agents</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Marketplace
          </span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore my collection of <span className="text-cyan-400 font-semibold">powerful AI agents</span> and applications.
          <br />
          From RAG systems to creative workspaces - discover tools that push the boundaries of AI.
        </motion.p>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="text-lg font-bold text-white mb-2">Smart AI Tools</h3>
            <p className="text-gray-400 text-sm">Advanced RAG systems, chatbots, and intelligent assistants</p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-2xl mb-2">🎨</div>
            <h3 className="text-lg font-bold text-white mb-2">Creative Workspaces</h3>
            <p className="text-gray-400 text-sm">AI-powered tools for content creation and analysis</p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-lg font-bold text-white mb-2">Live Demos</h3>
            <p className="text-gray-400 text-sm">Interactive applications you can try right now</p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
          >
            <span>🚀</span>
            <span>Explore AI Projects</span>
          </motion.button>

          <motion.a
            href={CONTACT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-emerald-400/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400/10 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, borderColor: "rgba(52, 211, 153, 1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>⭐</span>
            <span>View Source Code</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div>
            <div className="text-2xl font-bold text-cyan-400">{AI_PROJECTS.length}</div>
            <div className="text-sm text-gray-400">AI Project{AI_PROJECTS.length !== 1 ? 's' : ''}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">{AI_PROJECTS.filter(p => p.status === 'live').length}</div>
            <div className="text-sm text-gray-400">Live Demo{AI_PROJECTS.filter(p => p.status === 'live').length !== 1 ? 's' : ''}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-teal-400">100%</div>
            <div className="text-sm text-gray-400">Open Source</div>
          </div>
        </motion.div>
      </div>

      {/* Streamlit Notice - Clean and Minimal */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/20 rounded-lg text-xs text-amber-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>⚡</span>
        <span>Live demos may take a moment to load</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;