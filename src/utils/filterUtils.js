
// src/utils/filterUtils.js
export const filterProjects = (projects, filters) => {
  const { searchTerm, category, skills } = filters;

  return projects.filter(project => {
    // Search filter
    const matchesSearch = !searchTerm || 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());

    // Category filter
    const matchesCategory = category === 'All' || project.category === category;

    // Skills filter
    const matchesSkills = skills.length === 0 || 
      skills.every(skill => project.skills.includes(skill));

    return matchesSearch && matchesCategory && matchesSkills;
  });
};

export const filterByStatus = (projects, status) => {
  return projects.filter(project => project.status === status);
};

export const filterByCategory = (projects, category) => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

export const filterBySkills = (projects, skills) => {
  if (skills.length === 0) return projects;
  return projects.filter(project => 
    skills.every(skill => project.skills.includes(skill))
  );
};

export const filterByFeatured = (projects) => {
  return projects.filter(project => project.featured);
};

export const sortProjects = (projects, sortBy = 'createdAt', order = 'desc') => {
  return [...projects].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];

    // Handle date sorting
    if (sortBy === 'createdAt') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }

    // Handle string sorting
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (order === 'desc') {
      return bValue > aValue ? 1 : -1;
    } else {
      return aValue > bValue ? 1 : -1;
    }
  });
};