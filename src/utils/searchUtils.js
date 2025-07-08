
// src/utils/searchUtils.js
export const searchProjects = (projects, searchTerm) => {
  const term = searchTerm.toLowerCase().trim();
  
  if (!term) return projects;

  return projects.filter(project => {
    // Search in project name (highest priority)
    const nameMatch = project.name.toLowerCase().includes(term);
    
    // Search in description
    const descriptionMatch = project.description.toLowerCase().includes(term);
    
    // Search in detailed description
    const detailedDescriptionMatch = project.detailedDescription?.toLowerCase().includes(term);
    
    // Search in skills
    const skillsMatch = project.skills.some(skill => 
      skill.toLowerCase().includes(term)
    );
    
    // Search in category
    const categoryMatch = project.category.toLowerCase().includes(term);
    
    // Search in tags
    const tagsMatch = project.tags?.some(tag => 
      tag.toLowerCase().includes(term)
    );

    return nameMatch || descriptionMatch || detailedDescriptionMatch || 
           skillsMatch || categoryMatch || tagsMatch;
  });
};

export const getSearchSuggestions = (projects, searchTerm) => {
  const term = searchTerm.toLowerCase().trim();
  
  if (!term || term.length < 2) return [];

  const suggestions = new Set();

  projects.forEach(project => {
    // Add matching skills
    project.skills.forEach(skill => {
      if (skill.toLowerCase().includes(term)) {
        suggestions.add(skill);
      }
    });

    // Add matching categories
    if (project.category.toLowerCase().includes(term)) {
      suggestions.add(project.category);
    }

    // Add matching project names
    if (project.name.toLowerCase().includes(term)) {
      suggestions.add(project.name);
    }
  });

  return Array.from(suggestions).slice(0, 8); // Limit to 8 suggestions
};

export const highlightSearchTerm = (text, searchTerm) => {
  if (!searchTerm.trim()) return text;

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};