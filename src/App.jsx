import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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

  // Scroll progress for the progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  // Background particles state
  const [backgroundParticles, setBackgroundParticles] = useState([]);

  useEffect(() => {
    // Generate background particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
    }));
    setBackgroundParticles(particles);
  }, []);

  console.log({ projects, isLoading, filteredProjects, hasActiveFilters });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500 relative overflow-x-hidden">
      {/* Scroll Progress Bar - Themed */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-emerald-500 to-teal-400 z-50 origin-left shadow-lg"
        style={{ 
          scaleX,
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)'
        }}
      />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 60% 30%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 40% 70%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating background particles */}
        {backgroundParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.main>
        
        <Footer />
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-40"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              className="text-gray-600 dark:text-gray-400 font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Loading amazing AI projects...
            </motion.p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;