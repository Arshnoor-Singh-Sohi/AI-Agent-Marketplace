// src/components/sections/ProjectsGrid.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { ANIMATION_VARIANTS } from '../../data/constants';

const ProjectsGrid = ({ projects, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <motion.div
          className="w-16 h-16 border-4 border-cyan-200 border-t-cyan-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <section className="py-12" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            className="text-2xl font-bold text-gray-900 dark:text-white"
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.slideInLeft}
          >
            AI Projects ({projects.length})
          </motion.h2>
          
          {projects.length === 0 && (
            <motion.p 
              className="text-gray-500 dark:text-gray-400"
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.staggerContainer}
            >
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.slideUp}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search criteria or clearing some filters
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Project Guide */}
        <motion.div 
          className="mt-16 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.slideUp}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Want to add a new project?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Simply add your project data to the AI_PROJECTS array in <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/data/projects.js</code>
          </p>
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <div>• <strong>Basic info:</strong> name, description, category</div>
            <div>• <strong>Links:</strong> liveUrl, githubUrl</div>
            <div>• <strong>Tech stack:</strong> skills array</div>
            <div>• <strong>Visual:</strong> image/gif path</div>
            <div>• <strong>Status:</strong> live/development/maintenance</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;