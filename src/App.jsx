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

  // Mobile viewport handling
  useEffect(() => {
    // Set viewport height for mobile browsers
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  useEffect(() => {
    // Generate background particles - fewer on mobile
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 10 : 20;
    
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
    }));
    setBackgroundParticles(particles);
  }, []);

  // Prevent horizontal scroll on mobile
  useEffect(() => {
    const preventHorizontalScroll = () => {
      const body = document.body;
      const html = document.documentElement;
      
      if (window.innerWidth < 768) {
        body.style.overflowX = 'hidden';
        html.style.overflowX = 'hidden';
      } else {
        body.style.overflowX = 'auto';
        html.style.overflowX = 'auto';
      }
    };

    preventHorizontalScroll();
    window.addEventListener('resize', preventHorizontalScroll);
    
    return () => {
      window.removeEventListener('resize', preventHorizontalScroll);
    };
  }, []);

  console.log({ projects, isLoading, filteredProjects, hasActiveFilters });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500 relative overflow-x-hidden">
      {/* Scroll Progress Bar - Responsive */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-emerald-500 to-teal-400 z-50 origin-left shadow-lg"
        style={{ 
          scaleX,
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)'
        }}
      />

      {/* Background Effects - Responsive */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient background - Less intensive on mobile */}
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
            duration: 15, // Slower on mobile for battery
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating background particles - Responsive count */}
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
          className="w-full"
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

      {/* Loading Overlay - Responsive */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-40 p-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base px-4 text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Loading amazing AI projects...
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Mobile-specific improvements */}
      <style jsx>{`
        /* Prevent zoom on mobile inputs */
        @media (max-width: 768px) {
          input[type="text"],
          input[type="search"],
          select,
          textarea {
            font-size: 16px !important;
            transform: scale(1) !important;
          }
        }

        /* Ensure proper mobile viewport */
        html {
          height: 100vh;
          height: calc(var(--vh, 1vh) * 100);
        }

        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden;
        }

        /* Improve touch targets */
        @media (max-width: 768px) {
          button,
          a,
          input,
          select {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Better mobile focus styles */
        @media (max-width: 768px) {
          *:focus {
            outline: 2px solid rgba(6, 182, 212, 0.6);
            outline-offset: 2px;
          }
        }

        /* Reduce animations on slower devices */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Improve performance on mobile */
        @media (max-width: 768px) {
          * {
            -webkit-transform: translateZ(0);
            -moz-transform: translateZ(0);
            -ms-transform: translateZ(0);
            -o-transform: translateZ(0);
            transform: translateZ(0);
          }
        }

        /* Fix iOS Safari bounce */
        @media (max-width: 768px) {
          body {
            position: fixed;
            overflow: hidden;
            width: 100%;
            height: 100%;
          }
          
          #root {
            overflow: auto;
            height: 100vh;
            height: calc(var(--vh, 1vh) * 100);
            -webkit-overflow-scrolling: touch;
          }
        }

        /* Prevent text selection on UI elements */
        .no-select {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Better tap highlights */
        * {
          -webkit-tap-highlight-color: rgba(6, 182, 212, 0.2);
        }
      `}</style>
    </div>
  );
}

export default App;