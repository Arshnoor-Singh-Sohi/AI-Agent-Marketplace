export const AI_PROJECTS = [
  {
    id: 1,
    name: "GeminiCraft Studio",
    description: "Professional AI-Powered Creative & Analytical Workspace with 6+ specialized AI tools, all powered by Google's advanced Gemini 1.5 Pro model",
    detailedDescription: "Transform your workflow with Smart Chat, Vision Analysis, Document Intelligence, Code Assistant, Creative Writer, and Data Analyst tools. Features real-time collaboration, dark/light mode, and comprehensive analytics.",
    image: "/images/geminicraft-studio.gif",
    liveUrl: "https://geminicraft-studio.streamlit.app/",
    githubUrl: "https://github.com/Arshnoor-Singh-Sohi/geminicraft-studio",
    skills: ["Python", "Streamlit", "Google Gemini", "AI", "NLP", "Computer Vision", "RAG", "LangChain", "Data Analytics"],
    category: "AI Workspace",
    status: "live",
    isStreamlit: true,
    featured: true,
    createdAt: "2024-03-15",
    tags: ["Production Ready", "Multi-tool", "Enterprise"],
    documentation: "https://github.com/Arshnoor-Singh-Sohi/geminicraft-studio#readme"
  },
  {
    id: 2,
    name: "Advanced RAG System",
    description: "Comprehensive retrieval-augmented generation system with multiple chunking strategies and embedding backends",
    detailedDescription: "Features 6 chunking strategies, 5 embedding backends, 4 retrieval methods, and 3 reranking modules with interactive UI and dark mode support. Achieved 0.91 Precision@4.",
    image: "/images/advanced-rag.gif",
    liveUrl: "https://advanced-rag-system.streamlit.app/",
    githubUrl: "https://github.com/Arshnoor-Singh-Sohi/advanced-rag-system",
    skills: ["Python", "OpenAI", "Streamlit", "FAISS", "LangChain", "HuggingFace", "RAG", "Vector DB", "Reranking"],
    category: "RAG System",
    status: "live",
    isStreamlit: true,
    featured: true,
    createdAt: "2024-02-10",
    tags: ["Research", "High Performance", "Modular"],
    documentation: "https://github.com/Arshnoor-Singh-Sohi/advanced-rag-system#readme"
  }
  // Add more projects here following the same structure
];

// Helper function to add new projects easily
export const addProject = (projectData) => {
  const newProject = {
    id: Date.now(),
    createdAt: new Date().toISOString().split('T')[0],
    status: "development",
    isStreamlit: false,
    featured: false,
    tags: [],
    ...projectData
  };
  
  AI_PROJECTS.push(newProject);
  return newProject;
};

// Get projects by status
export const getProjectsByStatus = (status) => {
  return AI_PROJECTS.filter(project => project.status === status);
};

// Get featured projects
export const getFeaturedProjects = () => {
  return AI_PROJECTS.filter(project => project.featured);
};

// Get projects by category
export const getProjectsByCategory = (category) => {
  if (category === 'All') return AI_PROJECTS;
  return AI_PROJECTS.filter(project => project.category === category);
};