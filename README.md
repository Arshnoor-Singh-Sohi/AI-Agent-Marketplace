# 🤖 AI Agents Marketplace

<div align="center">

![AI Agents Marketplace](https://img.shields.io/badge/AI-Agents%20Marketplace-blue?style=for-the-badge&logo=robot)
![React](https://img.shields.io/badge/React-18.2+-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16+-0055FF?style=for-the-badge&logo=framer)

**A stunning marketplace website to showcase AI projects and tools**

[🚀 Live Demo](https://ai-agents-marketplace.vercel.app/) • [📖 Documentation](#documentation) • [🛠️ Setup](#quick-start) • [➕ Add Projects](#adding-new-projects)

</div>

---

## ✨ Features

### 🎨 **Beautiful Design**
- Modern, responsive UI with smooth animations
- Dark/Light mode support with system preference detection
- Gradient backgrounds and hover effects
- Glass morphism and modern design elements

### 🔍 **Powerful Search & Filtering**
- Real-time search across project names, descriptions, and skills
- Category-based filtering with visual icons
- Multi-skill selection with organized dropdown
- Clear filters functionality with active filter indicators

### 📱 **Responsive Experience**
- Mobile-first design approach
- Touch-friendly interactions
- Optimized for all screen sizes
- Fast loading with lazy loading images

### 🚀 **Developer Friendly**
- Modular component architecture
- Easy project addition workflow
- TypeScript-ready structure
- Comprehensive utility functions

### ⚡ **Performance Optimized**
- Vite for lightning-fast development
- Code splitting and lazy loading
- Optimized bundle size
- SEO-friendly meta tags

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Arshnoor-Singh-Sohi/ai-agents-marketplace.git
cd ai-agents-marketplace
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Add Your Project Images
```bash
# Create images directory
mkdir -p public/images

# Add your project screenshots/GIFs
# - geminicraft-studio.gif
# - advanced-rag.gif
# - your-project-images.gif
```

### 4. Start Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your marketplace! 🎉

### 5. Build for Production
```bash
npm run build
# or
yarn build
```

---

## 📁 Project Structure

```
AI-AGENTS-MARKETPLACE/
├── 📂 public/
│   ├── 📂 images/           # Project images and GIFs
│   ├── favicon.ico          # Site favicon
│   └── og-image.png         # Social media preview
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 common/       # Reusable components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── 📂 ui/           # UI-specific components
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── CategoryFilter.jsx
│   │   │   └── SkillsFilter.jsx
│   │   └── 📂 sections/     # Page sections
│   │       ├── HeroSection.jsx
│   │       ├── FilterSection.jsx
│   │       └── ProjectsGrid.jsx
│   ├── 📂 data/            # Data management
│   │   ├── projects.js     # My PROJECTS HERE
│   │   ├── categories.js   # Project categories
│   │   ├── skills.js       # Technology skills
│   │   └── constants.js    # App constants
│   ├── 📂 hooks/           # Custom React hooks
│   │   ├── useProjects.js
│   │   ├── useFilters.js
│   │   └── useSearch.js
│   ├── 📂 utils/           # Utility functions
│   │   ├── filterUtils.js
│   │   ├── searchUtils.js
│   │   └── helpers.js
│   ├── 📂 styles/          # Global styles
│   │   └── globals.css
│   ├── App.jsx             # Main app component
│   └── main.jsx            # App entry point
├── 📋 Configuration Files
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── eslint.config.js
│   └── vercel.json         # Deployment config
└── 📖 Documentation
    └── README.md
```

---

## ➕ Adding New Projects

### Method 1: Direct Addition (Recommended)

Edit `src/data/projects.js` and add your project to the `AI_PROJECTS` array:

```javascript
{
  id: 3, // Unique ID
  name: "Your AI Project Name",
  description: "Brief description of what your project does",
  detailedDescription: "More detailed explanation of features and capabilities",
  image: "/images/your-project.gif", // Add your image to public/images/
  liveUrl: "https://your-project.streamlit.app/",
  githubUrl: "https://github.com/Arshnoor-Singh-Sohi/your-project",
  skills: ["Python", "Streamlit", "AI", "Machine Learning"],
  category: "AI Tool", // Choose from existing categories or add new ones
  status: "live", // live, development, maintenance
  isStreamlit: true, // Set to true if it's a Streamlit app
  featured: false, // Set to true to highlight the project
  createdAt: "2024-04-01",
  tags: ["New", "Experimental"] // Optional tags
}
```

### Method 2: Using Helper Function

```javascript
import { addProject } from './data/projects';

const newProject = addProject({
  name: "AI Code Reviewer",
  description: "Automated code review using GPT-4",
  liveUrl: "https://code-reviewer.streamlit.app/",
  githubUrl: "https://github.com/Arshnoor-Singh-Sohi/ai-code-reviewer",
  skills: ["Python", "GPT-4", "Code Analysis", "Streamlit"],
  category: "AI Tool",
  status: "live",
  isStreamlit: true,
  featured: true
});
```

### Adding New Categories

Edit `src/data/categories.js`:

```javascript
{ 
  id: 'your-category', 
  name: 'Your Category', 
  icon: '🔬', 
  description: 'Description of your category' 
}
```

### Adding New Skills

Edit `src/data/skills.js`:

```javascript
{ 
  name: 'Your Technology', 
  category: 'ai-framework', 
  color: 'blue' 
}
```

---

## 🚀 Deployment on Vercel

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch automatically deploys
   - Preview deployments for pull requests
   - Custom domain support

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables (Optional)

Add these in Vercel dashboard if needed:
- `VITE_GA_MEASUREMENT_ID` - Google Analytics
- `VITE_API_BASE_URL` - Future API integration

---

## 🎨 Customization

### Themes & Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'ai-blue': {
        // Your custom blue shades
      },
      'ai-purple': {
        // Your custom purple shades
      }
    }
  }
}
```

### Animations

All animations use Framer Motion. Customize in component files:

```javascript
const customVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### Styling

Global styles in `src/styles/globals.css`:

```css
/* Custom utilities */
.your-custom-class {
  @apply bg-gradient-to-r from-blue-500 to-purple-500;
}
```

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Structure Guidelines

- **Components**: Use functional components with hooks
- **Styling**: Tailwind CSS with custom utilities
- **State**: React hooks + context for global state
- **Data**: Centralized in `src/data/` directory
- **Utils**: Pure functions for reusable logic

### Performance Tips

- Images: Use WebP format for better compression
- Components: Lazy load heavy components
- Data: Use React.memo for expensive renders
- Bundle: Check bundle size with `npm run build`

---

## 📊 Features Breakdown

### Search & Filtering System
- **Real-time search** across all project fields
- **Category filtering** with visual icons
- **Multi-skill selection** with organized dropdown
- **URL state persistence** (can be added)
- **Search suggestions** based on project data

### Project Card Features
- **Status indicators** (Live, Development, Maintenance)
- **Featured badges** for highlighted projects
- **Skill tags** with color coding
- **Hover animations** with smooth transitions
- **Responsive layout** for all screen sizes
- **Streamlit warnings** for apps that may sleep

### Responsive Design
- **Mobile-first** approach
- **Touch-friendly** interactions
- **Flexible grid** layout
- **Adaptive typography** 
- **Optimized images** with lazy loading

---

## 🤝 Contributing

### Adding Features

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Bug Reports

Use GitHub Issues with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Feature Requests

Open an issue with:
- Feature description
- Use case explanation
- Mockups or examples

---

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vite** for lightning-fast development
- **Vercel** for seamless deployment

---

## 📞 Contact & Support

<div align="center">

**Built by Arshnoor Singh Sohi**

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.arshnoorsinghsohi.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arshnoorsinghsohi/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Arshnoor-Singh-Sohi)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sohi21@uwindsor.ca)

[![Hashnode](https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white)](https://arshnoor.hashnode.dev/)
[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://arshnoorsinghsohi.medium.com/)
[![All Links](https://img.shields.io/badge/All%20Links-39E09B?style=for-the-badge&logo=linktree&logoColor=white)](https://linktr.ee/arshnoorsinghsohi)

---

⭐ **Star this repo if it helped you!** ⭐

*Made with ❤️ and lots of ☕*

</div>
