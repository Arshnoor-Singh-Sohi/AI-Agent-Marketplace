export const CATEGORIES = [
  { id: 'all', name: 'All', icon: '🔍', description: 'All AI projects' },
  { id: 'ai-workspace', name: 'AI Workspace', icon: '🏢', description: 'Complete AI-powered work environments' },
  { id: 'rag-system', name: 'RAG System', icon: '📚', description: 'Retrieval-Augmented Generation systems' },
  { id: 'computer-vision', name: 'Computer Vision', icon: '👁️', description: 'Image and video AI processing' },
  { id: 'nlp', name: 'NLP', icon: '💬', description: 'Natural Language Processing tools' },
  { id: 'data-science', name: 'Data Science', icon: '📊', description: 'Data analysis and ML tools' },
  { id: 'ai-tool', name: 'AI Tool', icon: '🛠️', description: 'Specialized AI utilities' },
  { id: 'chatbot', name: 'Chatbot', icon: '🤖', description: 'Conversational AI systems' },
  { id: 'automation', name: 'Automation', icon: '⚡', description: 'AI-powered automation tools' }
];

// Helper functions
export const getCategoryById = (id) => {
  return CATEGORIES.find(cat => cat.id === id);
};

export const getCategoryNames = () => {
  return CATEGORIES.map(cat => cat.name);
};

export const getCategoryByName = (name) => {
  return CATEGORIES.find(cat => cat.name === name);
};