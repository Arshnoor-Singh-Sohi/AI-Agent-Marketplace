
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
      className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search */}
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            placeholder="Search AI projects by name, description, or skills..."
          />

          {/* Category Filter */}
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />

          {/* Skills Filter */}
          <SkillsFilter 
            selectedSkills={selectedSkills}
            onSkillsChange={onSkillsChange}
          />

          {/* Clear Filters */}
          {hasActiveFilters && (
            <motion.button
              onClick={onClearFilters}
              className="px-4 py-2 text-red-600 hover:text-red-700 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear Filters
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FilterSection;