// src/components/ui/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StatusBadge from './StatusBadge';
import { SKILL_COLORS, STREAMLIT_WARNING } from '../../data/constants';
import { getSkillByName } from '../../data/skills';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getSkillColor = (skillName) => {
    const skill = getSkillByName(skillName);
    // Override with theme colors - cyan/emerald/teal
    const themeColors = {
      blue: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
      green: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
      yellow: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
      red: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
      purple: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
      orange: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
      cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
      gray: "bg-slate-100 text-slate-800 dark:bg-slate-800/30 dark:text-slate-300"
    };
    return skill ? themeColors[skill.color] || themeColors.cyan : themeColors.gray;
  };

  return (
    <motion.div
      className="group relative h-auto bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -4,
        boxShadow: "0 25px 50px rgba(6, 182, 212, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-40 sm:h-48 md:h-44 lg:h-48 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
          {/* Subtle tech pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
            />
          </div>

          {/* Project Image */}
          <motion.img
            src={project.image}
            alt={project.name}
            className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              filter: isHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)',
            }}
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />

          {/* Glass overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{
                boxShadow: isHovered ? '0 8px 25px rgba(6, 182, 212, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.2)',
              }}
            >
              <StatusBadge status={project.status} />
            </motion.div>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              className="absolute top-3 sm:top-4 left-3 sm:left-4"
              initial={{ rotate: -5 }}
              animate={{ 
                rotate: isHovered ? 0 : -5,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-md">
                ⭐ Featured
              </span>
            </motion.div>
          )}

          {/* Professional hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 bg-cyan-500/80 hover:bg-cyan-600/80 backdrop-blur-md text-white rounded-lg sm:rounded-xl font-medium transition-all flex items-center gap-2 border border-white/20 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-md text-white rounded-lg sm:rounded-xl font-medium transition-all flex items-center gap-2 border border-white/20 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </motion.a>
          </motion.div>
        </div>

        {/* Project Info with glass background */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col bg-white/5 dark:bg-white/5 backdrop-blur-md">
          <div className="flex items-start justify-between mb-3">
            <motion.h3 
              className="text-lg sm:text-xl font-bold text-white line-clamp-2 flex-1 drop-shadow-lg"
              animate={{
                color: isHovered ? '#06b6d4' : '#ffffff',
              }}
              transition={{ duration: 0.3 }}
            >
              {project.name}
            </motion.h3>
            <span className="text-xs sm:text-sm text-cyan-300/80 ml-2 shrink-0 drop-shadow-sm">
              {project.category}
            </span>
          </div>

          <p className="text-gray-200/90 mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed flex-1 drop-shadow-sm">
            {project.description}
          </p>

          {/* Skills with theme colors */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {project.skills.slice(0, 4).map((skill) => (
              <motion.span
                key={skill}
                className={`px-2 sm:px-3 py-1 text-xs rounded-full font-medium backdrop-blur-md border border-white/20 ${getSkillColor(skill)}`}
                whileHover={{ scale: 1.05, y: -1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * project.skills.indexOf(skill) }}
              >
                {skill}
              </motion.span>
            ))}
            {project.skills.length > 4 && (
              <motion.span 
                className="px-2 sm:px-3 py-1 bg-slate-100/20 text-slate-200 text-xs rounded-full font-medium backdrop-blur-md border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                +{project.skills.length - 4} more
              </motion.span>
            )}
          </div>

          {/* Streamlit Warning - Themed */}
          {project.isStreamlit && (
            <motion.div 
              className="text-xs sm:text-sm text-amber-300 mb-4 flex items-center gap-2 p-2 sm:p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 backdrop-blur-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                className="text-sm sm:text-base"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.span>
              <span className="text-xs sm:text-sm drop-shadow-sm">{STREAMLIT_WARNING.message}</span>
            </motion.div>
          )}

          {/* Action Buttons - Themed */}
          <div className="flex gap-2 sm:gap-3 mt-auto">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white rounded-lg sm:rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md border border-white/20 shadow-lg text-sm sm:text-base"
              whileHover={{ scale: 1.02, y: -1, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm">🚀</span>
              <span className="font-semibold drop-shadow-sm">
                <span className="hidden sm:inline">Try Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </span>
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 sm:py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center backdrop-blur-md border border-white/20"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? '0 0 50px rgba(6, 182, 212, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)' 
            : '0 0 0px rgba(6, 182, 212, 0)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProjectCard;