import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../../data/categories';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.name)}
          className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
            selectedCategory === category.name
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={category.description}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;