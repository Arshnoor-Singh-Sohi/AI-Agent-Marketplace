import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search AI projects..." }) => {
  const [isFocused, setIsFocused] = useState(false);

  const searchSuggestions = [
    'RAG System', 
    'Streamlit', 
    'AI Workspace', 
    'Python', 
    'Computer Vision',
    'NLP',
    'Machine Learning',
    'OpenAI'
  ];

  return (
    <div className="relative w-full">
      {/* Glass container with enhanced glow */}
      <motion.div
        className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden"
        animate={{
          boxShadow: isFocused 
            ? '0 0 30px rgba(6, 182, 212, 0.3), 0 0 60px rgba(16, 185, 129, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1)' 
            : '0 0 0px rgba(6, 182, 212, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glass overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5" />
        
        {/* Input container */}
        <div className="relative">
          {/* Enhanced search icon */}
          <motion.div
            className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 z-10"
            animate={{
              scale: isFocused ? 1.1 : 1,
              color: isFocused ? '#06b6d4' : '#94a3b8',
              filter: isFocused 
                ? 'drop-shadow(0 0 5px rgba(6, 182, 212, 0.5))' 
                : 'none'
            }}
            transition={{ duration: 0.2 }}
          >
            <svg 
              className="h-4 w-4 sm:h-5 sm:w-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </motion.div>

          {/* Enhanced input field */}
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none transition-all duration-200 text-base sm:text-lg font-medium drop-shadow-sm"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            }}
          />

          {/* Enhanced clear button */}
          <AnimatePresence>
            {searchTerm && (
              <motion.button
                onClick={() => onSearchChange('')}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors z-10 p-1 rounded-full hover:bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 90,
                  boxShadow: "0 0 10px rgba(6, 182, 212, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Active border gradient */}
        <motion.div
          className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
          animate={{
            background: isFocused 
              ? 'linear-gradient(90deg, rgba(6, 182, 212, 0.3), rgba(16, 185, 129, 0.3), rgba(20, 184, 166, 0.3))' 
              : 'transparent',
          }}
          style={{
            padding: '1px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
          }}
        />
      </motion.div>

      {/* Enhanced suggestions dropdown - SOLID background for readability */}
      <AnimatePresence>
        {isFocused && !searchTerm && (
          <motion.div
            className="absolute top-full mt-2 w-full bg-gray-900 border border-cyan-400/30 rounded-xl sm:rounded-2xl shadow-2xl z-50 overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Subtle top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            
            {/* Header */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-700">
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💡
                </motion.span>
                <span>Try searching for:</span>
              </div>
            </div>

            {/* Suggestions grid */}
            <div className="p-3 sm:p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {searchSuggestions.map((suggestion, index) => (
                  <motion.button
                    key={suggestion}
                    onClick={() => {
                      onSearchChange(suggestion);
                      setIsFocused(false);
                    }}
                    className="group text-left px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-400/40 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 4,
                      boxShadow: "0 5px 20px rgba(6, 182, 212, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span 
                      className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors text-sm sm:text-base"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      🔍
                    </motion.span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm sm:text-base font-medium text-white truncate">{suggestion}</div>
                      <div className="text-xs text-gray-400 hidden sm:block">Search projects</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer tip */}
            <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 border-t border-gray-700">
              <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💡
                </motion.span>
                <span className="truncate">Search by name, description, or tech stack</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;