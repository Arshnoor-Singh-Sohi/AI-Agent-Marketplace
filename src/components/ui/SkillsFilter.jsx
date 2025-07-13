import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSkillNames, getSkillCategories, getSkillsByCategory } from '../../data/skills';

const SkillsFilter = ({ selectedSkills, onSkillsChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  
  const allSkills = getSkillNames();
  const skillCategories = getSkillCategories();
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDisplaySkills = () => {
    let skills = selectedCategory === 'all' ? allSkills : getSkillsByCategory(selectedCategory).map(skill => skill.name);
    
    if (searchTerm) {
      skills = skills.filter(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return skills;
  };

  const handleSkillToggle = (skill) => {
    if (selectedSkills.includes(skill)) {
      onSkillsChange(selectedSkills.filter(s => s !== skill));
    } else {
      onSkillsChange([...selectedSkills, skill]);
    }
  };

  const categoryColors = {
    'language': 'from-cyan-500 to-cyan-600',
    'ai-framework': 'from-emerald-500 to-emerald-600',
    'ai-service': 'from-teal-500 to-teal-600',
    'web-framework': 'from-cyan-400 to-emerald-500',
    'database': 'from-emerald-400 to-teal-500',
    'ai-technique': 'from-teal-400 to-cyan-500',
    'cloud': 'from-cyan-300 to-teal-400',
  };

  return (
    <div className="relative w-full sm:w-auto">
      {/* Enhanced trigger button - Responsive */}
      <motion.button
        ref={buttonRef}
        onClick={() => setShowDropdown(!showDropdown)}
        className={`
          relative px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-3 overflow-hidden backdrop-blur-lg border w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-base
          ${showDropdown 
            ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-cyan-400/40 text-white shadow-lg' 
            : 'bg-white/5 border-white/20 text-white/80 hover:text-white hover:border-cyan-400/30 hover:bg-white/10'
          }
        `}
        whileHover={{ 
          scale: 1.02, 
          y: -2,
          boxShadow: showDropdown 
            ? "0 10px 30px rgba(6, 182, 212, 0.3)" 
            : "0 5px 20px rgba(6, 182, 212, 0.15)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Active background glow */}
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-emerald-400/20 to-teal-400/20 rounded-xl sm:rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        
        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
          <motion.span 
            className="text-lg sm:text-xl"
            animate={{ 
              rotate: showDropdown ? [0, 10, -10, 0] : 0,
              scale: showDropdown ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: showDropdown ? Infinity : 0,
            }}
          >
            🛠️
          </motion.span>
          <span 
            className="font-semibold drop-shadow-sm"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            <span className="hidden sm:inline">Skills</span>
            <span className="sm:hidden">Skills</span>
            {selectedSkills.length > 0 && (
              <motion.span 
                className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                  showDropdown ? 'bg-white/20' : 'bg-cyan-500/20 text-cyan-300'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={selectedSkills.length}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
              >
                {selectedSkills.length}
              </motion.span>
            )}
          </span>
          <motion.svg 
            className="w-4 h-4 sm:w-5 sm:h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: showDropdown ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </span>

        {/* Selection indicator */}
        {selectedSkills.length > 0 && (
          <motion.div
            className="absolute -right-1 -top-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
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
      </motion.button>

      {/* Enhanced dropdown - Mobile-first design with PROPER SCROLLING */}
      <AnimatePresence>
        {showDropdown && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDropdown(false)}
            />
            
            {/* Dropdown container with FIXED HEIGHT for scrolling */}
            <motion.div
              ref={dropdownRef}
              className="fixed inset-x-4 top-20 bottom-20 md:absolute md:inset-x-auto md:top-full md:bottom-auto md:left-0 md:right-auto md:mt-2 w-auto md:w-96 max-w-none md:max-w-[90vw] bg-gray-900 border border-cyan-400/30 rounded-xl md:rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                // Fixed height for desktop to enable scrolling
                maxHeight: window.innerWidth >= 768 ? '480px' : 'auto'
              }}
            >
              {/* Subtle top border glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              
              {/* Header with search - FIXED HEIGHT */}
              <div className="p-4 border-b border-gray-700 flex-shrink-0">
                <div className="flex items-center justify-between mb-3 md:hidden">
                  <h3 className="text-white font-semibold">Select Skills</h3>
                  <button
                    onClick={() => setShowDropdown(false)}
                    className="text-gray-400 hover:text-white p-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="relative bg-gray-800 border border-gray-600 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 sm:py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none font-medium text-sm sm:text-base"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400/60">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category tabs - FIXED HEIGHT with scrolling */}
              <div className="p-4 border-b border-gray-700 flex-shrink-0">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  <motion.button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-2 text-sm rounded-xl font-medium transition-all border flex-shrink-0 whitespace-nowrap ${
                      selectedCategory === 'all' 
                        ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 border-cyan-400 text-white shadow-lg' 
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    All
                  </motion.button>
                  {skillCategories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 text-sm rounded-xl font-medium capitalize transition-all border flex-shrink-0 whitespace-nowrap ${
                        selectedCategory === category 
                          ? `bg-gradient-to-r ${categoryColors[category] || 'from-gray-500 to-gray-600'} border-cyan-400 text-white shadow-lg`
                          : 'bg-gray-800 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category.replace('-', ' ')}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Skills list - SCROLLABLE with FIXED HEIGHT */}
              <div 
                className="flex-1 overflow-hidden flex flex-col"
                style={{ 
                  minHeight: '200px',
                  maxHeight: window.innerWidth >= 768 ? '300px' : '60vh' 
                }}
              >
                <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={selectedCategory + searchTerm}
                    >
                      {getDisplaySkills().map((skill, index) => (
                        <motion.label 
                          key={skill} 
                          className="group flex items-center space-x-3 cursor-pointer p-3 rounded-xl hover:bg-gray-800 border border-transparent hover:border-gray-700 transition-all touch-friendly"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.02 }}
                          whileHover={{ x: 4, scale: 1.02 }}
                        >
                          <motion.div className="relative flex-shrink-0">
                            <input
                              type="checkbox"
                              checked={selectedSkills.includes(skill)}
                              onChange={() => handleSkillToggle(skill)}
                              className="sr-only"
                            />
                            <motion.div
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                selectedSkills.includes(skill)
                                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 border-cyan-400'
                                  : 'border-gray-500 hover:border-cyan-400'
                              }`}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <AnimatePresence>
                                {selectedSkills.includes(skill) && (
                                  <motion.svg
                                    className="w-3 h-3 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                  >
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </motion.svg>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          </motion.div>
                          <span className="text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors font-medium flex-1 min-w-0">
                            {skill}
                          </span>
                        </motion.label>
                      ))}
                      {getDisplaySkills().length === 0 && (
                        <motion.div 
                          className="text-center py-8 text-gray-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div 
                            className="text-3xl mb-2"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            🔍
                          </motion.div>
                          <div className="text-sm">No skills found</div>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Scrollbar indicator */}
                {getDisplaySkills().length > 8 && (
                  <div className="px-4 py-2 bg-gray-800/50 border-t border-gray-700">
                    <div className="text-xs text-gray-400 text-center flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ⬇️
                      </motion.div>
                      <span>Scroll to see more skills</span>
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      >
                        ⬇️
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer - FIXED HEIGHT */}
              {selectedSkills.length > 0 && (
                <motion.div 
                  className="p-4 border-t border-gray-700 bg-gray-800 flex-shrink-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                    <span className="text-sm text-gray-300 text-center sm:text-left">
                      {selectedSkills.length} skill{selectedSkills.length !== 1 ? 's' : ''} selected
                    </span>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <motion.button
                        onClick={() => onSkillsChange([])}
                        className="flex-1 sm:flex-none px-4 py-2 text-sm text-red-400 hover:text-red-300 font-medium transition-colors hover:bg-red-500/10 rounded-lg border border-red-500/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Clear all
                      </motion.button>
                      <motion.button
                        onClick={() => setShowDropdown(false)}
                        className="flex-1 sm:flex-none px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-medium rounded-lg transition-all md:hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Done
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(6, 182, 212, 0.5) rgba(31, 41, 55, 0.3);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.3);
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(6, 182, 212, 0.7), rgba(16, 185, 129, 0.7));
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(6, 182, 212, 0.9), rgba(16, 185, 129, 0.9));
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Ensure proper touch scrolling on mobile */
        @media (max-width: 768px) {
          .custom-scrollbar {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsFilter;