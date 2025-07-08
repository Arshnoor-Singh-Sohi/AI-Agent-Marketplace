export const AI_SKILLS = [
  // Programming Languages
  { name: 'Python', category: 'language', color: 'blue' },
  { name: 'JavaScript', category: 'language', color: 'yellow' },
  { name: 'TypeScript', category: 'language', color: 'blue' },
  { name: 'R', category: 'language', color: 'blue' },
  
  // AI/ML Frameworks
  { name: 'TensorFlow', category: 'ai-framework', color: 'orange' },
  { name: 'PyTorch', category: 'ai-framework', color: 'red' },
  { name: 'Scikit-learn', category: 'ai-framework', color: 'orange' },
  { name: 'Keras', category: 'ai-framework', color: 'red' },
  { name: 'Hugging Face', category: 'ai-framework', color: 'yellow' },
  { name: 'LangChain', category: 'ai-framework', color: 'green' },
  
  // AI Services
  { name: 'OpenAI', category: 'ai-service', color: 'green' },
  { name: 'Google Gemini', category: 'ai-service', color: 'blue' },
  { name: 'Anthropic Claude', category: 'ai-service', color: 'purple' },
  { name: 'Azure OpenAI', category: 'ai-service', color: 'blue' },
  
  // Web Frameworks
  { name: 'Streamlit', category: 'web-framework', color: 'red' },
  { name: 'Flask', category: 'web-framework', color: 'gray' },
  { name: 'FastAPI', category: 'web-framework', color: 'green' },
  { name: 'React', category: 'web-framework', color: 'cyan' },
  { name: 'Next.js', category: 'web-framework', color: 'gray' },
  
  // Databases & Vector Stores
  { name: 'FAISS', category: 'database', color: 'purple' },
  { name: 'Pinecone', category: 'database', color: 'green' },
  { name: 'Chroma', category: 'database', color: 'yellow' },
  { name: 'Weaviate', category: 'database', color: 'blue' },
  { name: 'MongoDB', category: 'database', color: 'green' },
  { name: 'PostgreSQL', category: 'database', color: 'blue' },
  
  // AI Techniques
  { name: 'RAG', category: 'ai-technique', color: 'purple' },
  { name: 'Fine-tuning', category: 'ai-technique', color: 'orange' },
  { name: 'Prompt Engineering', category: 'ai-technique', color: 'blue' },
  { name: 'Computer Vision', category: 'ai-technique', color: 'green' },
  { name: 'NLP', category: 'ai-technique', color: 'blue' },
  { name: 'Deep Learning', category: 'ai-technique', color: 'red' },
  { name: 'Machine Learning', category: 'ai-technique', color: 'orange' },
  { name: 'Reinforcement Learning', category: 'ai-technique', color: 'purple' },
  
  // Cloud & Deployment
  { name: 'AWS', category: 'cloud', color: 'orange' },
  { name: 'Google Cloud', category: 'cloud', color: 'blue' },
  { name: 'Azure', category: 'cloud', color: 'blue' },
  { name: 'Vercel', category: 'cloud', color: 'gray' },
  { name: 'Docker', category: 'cloud', color: 'blue' },
  { name: 'Kubernetes', category: 'cloud', color: 'blue' }
];

// Helper functions
export const getSkillsByCategory = (category) => {
  return AI_SKILLS.filter(skill => skill.category === category);
};

export const getSkillByName = (name) => {
  return AI_SKILLS.find(skill => skill.name === name);
};

export const getSkillNames = () => {
  return AI_SKILLS.map(skill => skill.name);
};

export const getSkillCategories = () => {
  return [...new Set(AI_SKILLS.map(skill => skill.category))];
};
