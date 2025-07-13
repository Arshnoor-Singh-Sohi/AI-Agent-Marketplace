// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_LINKS } from '../../data/constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Force dark mode always
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Portfolio', href: CONTACT_LINKS.portfolio, icon: '🌐' },
    { name: 'GitHub', href: CONTACT_LINKS.github, icon: '⚡' },
    { name: 'Blog', href: CONTACT_LINKS.hashnode, icon: '📝' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 sm:py-3' 
          : 'py-3 sm:py-4'
      }`}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${isScrolled ? 0.15 : 0.1})`,
        backdropFilter: `blur(${isScrolled ? 20 : 16}px)`,
        WebkitBackdropFilter: `blur(${isScrolled ? 20 : 16}px)`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Ultra-subtle glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-cyan-500/[0.03] to-white/[0.02]" />
      
      {/* Glass border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Logo Icon */}
            <motion.div
              className="relative"
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400/80 to-emerald-500/80 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border border-white/20">
                <motion.span 
                  className="text-lg sm:text-xl font-bold text-white drop-shadow-lg"
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
              </div>
            </motion.div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <motion.div 
                className="text-lg sm:text-xl font-black bg-gradient-to-r from-white via-cyan-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
                whileHover={{ 
                  backgroundSize: '150% 150%',
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="hidden sm:inline">AI Agents Store</span>
                <span className="sm:hidden">AI Store</span>
              </motion.div>
              <motion.span 
                className="text-xs text-gray-300/80 -mt-1 drop-shadow-sm hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.5 }}
              >
                by Arshnoor Singh Sohi
              </motion.span>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Nav Items */}
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-3 lg:px-4 py-2 rounded-xl text-white/80 hover:text-white transition-all duration-300 flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {/* Glass hover background */}
                <motion.div
                  className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Content */}
                <span className="relative z-10 flex items-center gap-2 text-sm font-medium drop-shadow-lg">
                  <motion.span
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="hidden lg:inline">{item.name}</span>
                </span>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                />
              </motion.a>
            ))}

            {/* Professional status indicator */}
            <motion.div
              className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/20 ml-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
              <span className="text-sm text-emerald-400 font-medium drop-shadow-sm">Live</span>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 backdrop-blur-md border border-white/20 transition-colors"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden mt-4 p-4 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="space-y-3">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            
            {/* Mobile status indicator */}
            <motion.div
              className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
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
              <span className="text-sm text-emerald-400 font-medium">All Systems Live</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;