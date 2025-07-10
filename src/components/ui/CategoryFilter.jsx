import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from '../../data/categories';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  // Main categories for desktop view
  const mainCategories = CATEGORIES.slice(0, 5);

  return (
    <div className="w-full">
      {/* Mobile dropdown */}
      <div className="block lg:hidden">
        <motion.div
          className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden"
          whileHover={{ 
            boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5" />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="relative w-full px-4 py-4 bg-transparent text-white focus:outline-none appearance-none cursor-pointer font-medium drop-shadow-sm"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            {CATEGORIES.map((category) => (
              <option key={category.id} value={category.name} className="bg-gray-900 text-white">
                {category.icon} {category.name}
              </option>
            ))}
          </select>
          
          {/* Custom dropdown arrow */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <motion.svg 
              className="w-5 h-5 text-cyan-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: 0 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </div>
        </motion.div>
      </div>

      {/* Desktop button group */}
      <div className="hidden lg:flex flex-wrap gap-3">
        {mainCategories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.name)}
            className={`group relative px-5 py-3 rounded-2xl transition-all duration-300 flex items-center gap-3 font-semibold text-sm backdrop-blur-lg border overflow-hidden ${
              selectedCategory === category.name
                ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-cyan-400/40 text-white shadow-lg'
                : 'bg-white/5 border-white/20 text-white/80 hover:text-white hover:border-cyan-400/30 hover:bg-white/10'
            }`}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: selectedCategory === category.name 
                ? "0 10px 30px rgba(6, 182, 212, 0.3)" 
                : "0 5px 20px rgba(6, 182, 212, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Active background glow */}
            <AnimatePresence>
              {selectedCategory === category.name && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-emerald-400/20 to-teal-400/20 rounded-2xl"
                  layoutId="activeCategory"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>

            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
              <motion.span
                className="text-lg"
                animate={{ 
                  rotate: selectedCategory === category.name ? [0, 10, -10, 0] : 0,
                  scale: selectedCategory === category.name ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: selectedCategory === category.name ? Infinity : 0,
                }}
              >
                {category.icon}
              </motion.span>
              <span 
                className="whitespace-nowrap drop-shadow-sm"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                }}
              >
                {category.name}
              </span>
            </span>

            {/* Selection indicator */}
            {selectedCategory === category.name && (
              <motion.div
                className="absolute -right-1 -top-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 5px rgba(6, 182, 212, 0.5)',
                      '0 0 15px rgba(16, 185, 129, 0.8)',
                      '0 0 5px rgba(6, 182, 212, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )}

            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-cyan-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              whileHover={{ scale: 1.2 }}
            />
          </motion.button>
        ))}
        
        {/* More categories button (if needed) */}
        {CATEGORIES.length > 5 && (
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              className="px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/20 hover:border-cyan-400/30 text-white/80 hover:text-white transition-all duration-300 flex items-center gap-3 font-semibold text-sm hover:bg-white/10"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 5px 20px rgba(6, 182, 212, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <span className="relative z-10 flex items-center gap-3">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  ⋯
                </motion.span>
                <span 
                  className="drop-shadow-sm"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                  }}
                >
                  More
                </span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;