import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSkillNames, getSkillCategories, getSkillsByCategory } from '../../data/skills';

const SkillsFilter = ({ selectedSkills, onSkillsChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const allSkills = getSkillNames();
  const skillCategories = getSkillCategories();
  
  const getDisplaySkills = () => {
    if (selectedCategory === 'all') return allSkills;
    return getSkillsByCategory(selectedCategory).map(skill => skill.name);
  };

  const handleSkillToggle = (skill) => {
    if (selectedSkills.includes(skill)) {
      onSkillsChange(selectedSkills.filter(s => s !== skill));
    } else {
      onSkillsChange([...selectedSkills, skill]);
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowDropdown(!showDropdown)}
        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🛠️ Skills {selectedSkills.length > 0 && `(${selectedSkills.length})`}
        <motion.svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ rotate: showDropdown ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            className="absolute top-full mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Category Tabs */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-2 py-1 text-xs rounded ${
                    selectedCategory === 'all' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  All
                </button>
                {skillCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-2 py-1 text-xs rounded capitalize ${
                      selectedCategory === category 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills List */}
            <div className="p-4 max-h-60 overflow-y-auto">
              <div className="space-y-2">
                {getDisplaySkills().map((skill) => (
                  <label key={skill} className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes(skill)}
                      onChange={() => handleSkillToggle(skill)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Button */}
            {selectedSkills.length > 0 && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => onSkillsChange([])}
                  className="w-full px-3 py-2 text-sm text-red-600 hover:text-red-700 transition-colors"
                >
                  Clear all skills
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsFilter;