import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HeroSection from './components/sections/HeroSection';
import FilterSection from './components/sections/FilterSection';
import ProjectsGrid from './components/sections/ProjectsGrid';
import { useProjects } from './hooks/useProjects';
import { useFilters } from './hooks/useFilters';

function App() {
  const { projects, isLoading } = useProjects();
  const {
    searchTerm,
    selectedCategory,
    selectedSkills,
    setSearchTerm,
    setSelectedCategory,
    setSelectedSkills,
    filteredProjects,
    hasActiveFilters,
    clearFilters
  } = useFilters(projects);

  console.log({ projects, isLoading, filteredProjects, hasActiveFilters });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <HeroSection />
      <FilterSection 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedSkills={selectedSkills}
        onSkillsChange={setSelectedSkills}
        onClearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />
      <ProjectsGrid 
        projects={filteredProjects}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
