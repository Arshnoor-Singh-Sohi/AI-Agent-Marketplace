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
    <div className="relative">
      {/* Enhanced trigger button */}
      <motion.button
        ref={buttonRef}
        onClick={() => setShowDropdown(!showDropdown)}
        className={`
          relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 overflow-hidden backdrop-blur-lg border
          ${showDropdown 
            ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-cyan-400/40 text-white shadow-lg' 
            : 'bg-white/5 border-white/20 text-white/80 hover:text-white hover:border-cyan-400/30 hover:bg-white/10'
          }
        `}
        whileHover={{ 
          scale: 1.05, 
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
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-emerald-400/20 to-teal-400/20 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        
        <span className="relative z-10 flex items-center gap-3">
          <motion.span 
            className="text-xl"
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
            Skills {selectedSkills.length > 0 && (
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
            className="w-5 h-5" 
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
            className="absolute -right-1 -top-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-lg"
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

      {/* Enhanced dropdown - SOLID background for readability */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            ref={dropdownRef}
            className="absolute top-full mt-2 w-96 max-w-[90vw] bg-gray-900 border border-cyan-400/30 rounded-2xl shadow-2xl z-50 overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Subtle top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            
            {/* Header with search */}
            <div className="p-4 border-b border-gray-700">
              <div className="relative bg-gray-800 border border-gray-600 rounded-xl overflow-hidden">
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none font-medium"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400/60">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category tabs */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex flex-wrap gap-2">
                <motion.button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-2 text-sm rounded-xl font-medium transition-all border ${
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
                    className={`px-3 py-2 text-sm rounded-xl font-medium capitalize transition-all border ${
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

            {/* Skills list */}
            <div className="p-4 max-h-64 overflow-y-auto custom-scrollbar">
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
                      className="group flex items-center space-x-3 cursor-pointer p-3 rounded-xl hover:bg-gray-800 border border-transparent hover:border-gray-700 transition-all"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      whileHover={{ x: 4, scale: 1.02 }}
                    >
                      <motion.div className="relative">
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
                      <span className="text-sm text-white group-hover:text-cyan-300 transition-colors font-medium">
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

            {/* Footer */}
            {selectedSkills.length > 0 && (
              <motion.div 
                className="p-4 border-t border-gray-700 bg-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">
                    {selectedSkills.length} skill{selectedSkills.length !== 1 ? 's' : ''} selected
                  </span>
                  <motion.button
                    onClick={() => onSkillsChange([])}
                    className="px-4 py-2 text-sm text-red-400 hover:text-red-300 font-medium transition-colors hover:bg-red-500/10 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clear all
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.7);
        }
      `}</style>
    </div>
  );
};

export default SkillsFilter;