export const STATUS_CONFIG = {
  live: {
    label: "Live",
    emoji: "🟢",
    color: "green",
    bgColor: "bg-green-500",
    textColor: "text-green-800",
    lightBg: "bg-green-100"
  },
  development: {
    label: "In Development",
    emoji: "🟡",
    color: "yellow",
    bgColor: "bg-yellow-500",
    textColor: "text-yellow-800",
    lightBg: "bg-yellow-100"
  },
  maintenance: {
    label: "Maintenance",
    emoji: "🔧",
    color: "gray",
    bgColor: "bg-gray-500",
    textColor: "text-gray-800",
    lightBg: "bg-gray-100"
  }
};

export const SKILL_COLORS = {
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  orange: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
  gray: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
};

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

export const CONTACT_LINKS = {
  portfolio: "https://www.arshnoorsinghsohi.com/",
  linkedin: "https://www.linkedin.com/in/arshnoorsinghsohi/",
  github: "https://github.com/Arshnoor-Singh-Sohi",
  medium: "https://arshnoorsinghsohi.medium.com/",
  hashnode: "https://arshnoor.hashnode.dev/",
  linktree: "https://linktr.ee/arshnoorsinghsohi",
  email: "mailto:sohi21@uwindsor.ca"
};

export const STREAMLIT_WARNING = {
  message: "Streamlit app may take a moment to wake up if unused for 24+ hours",
  icon: "⚡",
  type: "warning"
};