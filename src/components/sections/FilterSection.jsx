// src/components/sections/FilterSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../ui/SearchBar';
import CategoryFilter from '../ui/CategoryFilter';
import SkillsFilter from '../ui/SkillsFilter';

const FilterSection = ({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange, 
  selectedSkills, 
  onSkillsChange,
  onClearFilters,
  hasActiveFilters 
}) => {
  return (
    <motion.div 
      className="sticky top-16 z-30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Top Row - Search Bar (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            placeholder="Search AI projects by name, description, or skills..."
          />
        </motion.div>

        {/* Bottom Row - Category Filters (Left) + Skills & Clear (Right) */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Left Side - Category Filters */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={onCategoryChange}
            />
          </motion.div>

          {/* Right Side - Skills Filter + Clear Button */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Skills Filter */}
            <SkillsFilter 
              selectedSkills={selectedSkills}
              onSkillsChange={onSkillsChange}
            />

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <motion.button
                onClick={onClearFilters}
                className="px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Clear All</span>
              </motion.button>
            )}
          </motion.div>
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <motion.div
            className="flex flex-wrap gap-2 items-center pt-2 border-t border-gray-200 dark:border-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Active filters:
            </span>
            
            {searchTerm && (
              <motion.span
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                🔍 "{searchTerm.length > 20 ? searchTerm.substring(0, 20) + '...' : searchTerm}"
                <button
                  onClick={() => onSearchChange('')}
                  className="ml-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-0.5 transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.span>
            )}

            {selectedCategory && selectedCategory !== 'All' && (
              <motion.span
                className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                📂 {selectedCategory}
                <button
                  onClick={() => onCategoryChange('All')}
                  className="ml-1 hover:bg-purple-200 dark:hover:bg-purple-800 rounded-full p-0.5 transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.span>
            )}

            {selectedSkills.length > 0 && (
              <motion.span
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                🛠️ {selectedSkills.length} skill{selectedSkills.length !== 1 ? 's' : ''}
                <button
                  onClick={() => onSkillsChange([])}
                  className="ml-1 hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-0.5 transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.span>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FilterSection;