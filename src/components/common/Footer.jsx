
// src/components/common/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_LINKS } from '../../data/constants';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2024 Arshnoor Singh Sohi. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <motion.a 
              href={CONTACT_LINKS.linktree} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              All Links
            </motion.a>
            <motion.a 
              href={CONTACT_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href={CONTACT_LINKS.medium} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Medium
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;