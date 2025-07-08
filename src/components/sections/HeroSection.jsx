// src/components/sections/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_LINKS, STREAMLIT_WARNING } from '../../data/constants';

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            𝙰𝙸 𝙰𝚐𝚎𝚗𝚝𝚜 𝙼𝚊𝚛𝚔𝚎𝚝𝚙𝚕𝚊𝚌𝚎
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover powerful AI-driven tools and applications. From RAG systems to creative workspaces, 
          explore cutting-edge AI solutions built with modern technologies.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href={CONTACT_LINKS.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with Me
          </motion.a>
          <motion.a
            href={CONTACT_LINKS.hashnode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read My Blog
          </motion.a>
        </motion.div>

        <motion.div 
          className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>{STREAMLIT_WARNING.icon}</span>
          <span>{STREAMLIT_WARNING.message}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;