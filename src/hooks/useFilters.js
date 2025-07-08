
// src/hooks/useFilters.js
import { useState, useMemo } from 'react';
import { filterProjects } from '../utils/filterUtils';

export const useFilters = (projects) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const filteredProjects = useMemo(() => {
    return filterProjects(projects, {
      searchTerm,
      category: selectedCategory,
      skills: selectedSkills
    });
  }, [projects, searchTerm, selectedCategory, selectedSkills]);

  const hasActiveFilters = useMemo(() => {
    return searchTerm.length > 0 || 
           selectedCategory !== 'All' || 
           selectedSkills.length > 0;
  }, [searchTerm, selectedCategory, selectedSkills]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedSkills([]);
  };

  return {
    // Current filter values
    searchTerm,
    selectedCategory,
    selectedSkills,
    
    // Setter functions
    setSearchTerm,
    setSelectedCategory,
    setSelectedSkills,
    
    // Computed values
    filteredProjects,
    hasActiveFilters,
    
    // Helper functions
    clearFilters
  };
};
