// src/components/sections/ProjectsGrid.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { ANIMATION_VARIANTS } from '../../data/constants';

const ProjectsGrid = ({ projects, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12 sm:py-16 md:py-20">
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-cyan-200 border-t-cyan-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <section className="py-8 sm:py-12 md:py-16" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.slideInLeft}
          >
            AI Projects ({projects.length})
          </motion.h2>
          
          {projects.length === 0 && (
            <motion.p 
              className="text-sm sm:text-base text-gray-500 dark:text-gray-400"
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              No projects match your criteria
            </motion.p>
          )}
        </div>

        <AnimatePresence mode="wait">
          {projects.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.staggerContainer}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12 sm:py-16 md:py-20 px-4"
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.slideUp}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                Try adjusting your search criteria or clearing some filters to discover more AI projects
              </p>
              
              {/* Suggested actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <motion.button
                  onClick={() => {
                    // This would typically trigger a filter clear
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear All Filters
                </motion.button>
                <motion.button
                  onClick={() => {
                    const searchBar = document.querySelector('input[type="text"]');
                    if (searchBar) {
                      searchBar.focus();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try New Search
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Project Guide - Responsive */}
 
      </div>
    </section>
  );
};

export default ProjectsGrid;