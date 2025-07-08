
// src/hooks/useSearch.js
import { useState, useMemo } from 'react';
import { searchProjects } from '../utils/searchUtils';

export const useSearch = (projects) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return projects;
    return searchProjects(projects, searchTerm);
  }, [projects, searchTerm]);

  const addToSearchHistory = (term) => {
    if (term.trim() && !searchHistory.includes(term)) {
      setSearchHistory(prev => [term, ...prev.slice(0, 9)]); // Keep last 10 searches
    }
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim()) {
      addToSearchHistory(term);
    }
  };

  return {
    searchTerm,
    searchResults,
    searchHistory,
    setSearchTerm: handleSearch,
    clearSearchHistory
  };
};