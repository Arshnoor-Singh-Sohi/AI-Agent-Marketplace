
// src/hooks/useProjects.js
import { useState, useEffect, useMemo } from 'react';
import { AI_PROJECTS } from '../data/projects';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadProjects = async () => {
      setIsLoading(true);
      // Add a small delay to simulate loading
      await new Promise(resolve => setTimeout(resolve, 500));
      setProjects(AI_PROJECTS);
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured);
  }, [projects]);

  const projectsByStatus = useMemo(() => {
    return {
      live: projects.filter(p => p.status === 'live'),
      development: projects.filter(p => p.status === 'development'),
      maintenance: projects.filter(p => p.status === 'maintenance')
    };
  }, [projects]);

  const allSkills = useMemo(() => {
    const skillsSet = new Set();
    projects.forEach(project => {
      project.skills.forEach(skill => skillsSet.add(skill));
    });
    return Array.from(skillsSet).sort();
  }, [projects]);

  return {
    projects,
    isLoading,
    featuredProjects,
    projectsByStatus,
    allSkills
  };
};
