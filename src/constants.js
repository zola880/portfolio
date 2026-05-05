// constants.js

/**
 * Site Configuration
 */
export const SITE_CONFIG = {
  name: 'Zelalem Ybabe',
  title: 'Full Stack Developer | Computer Science Student',
  description: 'Portfolio of Zelalem Ybabe — building simple, fast, and real-world web applications with modern tools and clean design.',
  url: 'https://zelalem.dev', // Update when deployed
  email: 'zelalemybabe77@gmail.com',
  location: 'Bahir Dar, Ethiopia',
  availableForWork: true,
};

/**
 * Navigation Links
 */
export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/**
 * Social Links (Reusable across Navbar, Hero, Footer, Contact)
 */
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/zola880',
    icon: 'github',
    label: 'View my code'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zelalem-ybabe-685371405/',
    icon: 'linkedin',
    label: 'Connect professionally'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/Z3lelaw',
    icon: 'telegram',
    label: 'Message me on Telegram'
  },
  {
    name: 'Email',
    href: 'mailto:zelalemybabe77@gmail.com',
    icon: 'mail',
    label: 'Send an email'
  }
];

/**
 * Projects Data
 * - Removed arbitrary Tailwind gradients, using your palette instead
 * - Added status, year, featured flags for filtering
 * - Structured for easy expansion
 */
export const PROJECTS = [
  {
    id: 'guzo-abay',
    title: 'Guzo Abay',
    description: 'A travel planner and community guide showcasing Ethiopian routes, accommodations, and local transport recommendations.',
    longDescription: 'Guzo Abay helps travelers discover Ethiopia with curated routes, local insights, and transport options. Built with accessibility and performance in mind.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      // Add more screenshots here
    ],
    tags: ['Travel', 'React', 'UI/UX', 'Mobile-First'],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    liveDemo: '#',
    github: 'https://github.com/AsinakeHailiePf/Guzo-Abay',
    year: 2024,
    status: 'live', // 'live' | 'in-progress' | 'concept'
    featured: true,
    accentColor: '#A4161A', // Using your primary red
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease Prediction',
    description: 'A medical prediction app that analyzes patient data to estimate heart disease risk using intelligent modeling.',
    longDescription: 'This project applies machine learning to healthcare, helping users understand risk factors through an intuitive interface.',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b0421?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Healthcare'],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    liveDemo: '#',
    github: 'https://github.com/zola880/HEART-DISEASE-PROJECT',
    year: 2024,
    status: 'demo',
    featured: true,
    accentColor: '#660708', // Dark red for medical/serious tone
  },
  {
    id: 'tena',
    title: 'Tena',
    description: 'A wellness and personal growth app focused on habit tracking, mood journaling, and daily motivation.',
    longDescription: 'Tena empowers users to build better habits through gentle reminders, reflective journaling, and progress visualization.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Wellness', 'Mental Health', 'PWA'],
    techStack: ['React', 'IndexedDB', 'Workbox', 'Tailwind CSS'],
    liveDemo: '#',
    github: 'https://github.com/zola880/Tena',
    year: 2025,
    status: 'in-progress',
    featured: true,
    accentColor: '#D97706', // Warm orange for wellness/energy
  },
  {
    id: 'intern-finder',
    title: 'Internship Finder',
    description: 'An intelligent platform for discovering internship opportunities, with search filters, application tracking, and student resources.',
    longDescription: 'Built to help students like me find meaningful internships with smart filtering, saved searches, and application management.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    liveDemo: '#',
    github: 'https://github.com/zola880/intern-finder',
    year: 2025,
    status: 'in-progress',
    featured: true,
    accentColor: '#A4161A',
  },
];

/**
 * Skills Data (No percentages — clean, descriptive only)
 */
export const SKILLS = {
  frontend: [
    { name: 'HTML5', description: 'Semantic, accessible markup' },
    { name: 'CSS3', description: 'Modern layouts, animations, responsive design' },
    { name: 'JavaScript', description: 'ES6+, async/await, DOM manipulation' },
    { name: 'React', description: 'Hooks, context, component architecture' },
    { name: 'Tailwind CSS', description: 'Utility-first, responsive styling' },
  ],
  backend: [
    { name: 'Node.js', description: 'Server-side JavaScript, Express' },
    { name: 'PHP', description: 'Server scripting, WordPress integration' },
    { name: 'Python', description: 'Scripting, data processing, ML basics' },
    { name: 'REST APIs', description: 'Design, documentation, integration' },
  ],
  database: [
    { name: 'MySQL', description: 'Relational design, queries, optimization' },
    { name: 'MongoDB', description: 'NoSQL, document modeling, aggregation' },
    { name: 'SQL', description: 'Query writing, joins, transactions' },
  ],
  tools: [
    { name: 'Git', description: 'Version control, branching, collaboration' },
    { name: 'GitHub', description: 'Repositories, PRs, Actions, Pages' },
    { name: 'VS Code', description: 'Extensions, debugging, productivity' },
    { name: 'Terminal', description: 'Bash, scripting, workflow automation' },
  ],
  emerging: [
    { name: 'Machine Learning', description: 'Supervised learning, model evaluation' },
    { name: 'AI Integration', description: 'APIs, prompt engineering, ethics' },
  ],
};

/**
 * Education
 */
export const EDUCATION = [
  {
    institution: 'Bahir Dar University',
    department: 'Computer Science Department',
    degree: 'Bachelor of Science in Computer Science',
    period: '2022 – 2026 (Expected)',
    location: 'Bahir Dar, Ethiopia',
    highlights: [
      'Web & Mobile Application Development',
      'Artificial Intelligence & Machine Learning',
      'Database Systems & Cloud Computing',
      'Software Engineering & Robotics',
    ],
    gpa: null, // Add if desired
  },
];

/**
 * Experience / Timeline (Professional progression)
 */
export const EXPERIENCE = [
  {
    period: '2024',
    title: 'Started Coding Journey',
    role: 'Self-Taught Developer',
    description: 'Learned programming fundamentals through online courses, documentation, and hands-on projects.',
    achievements: [
      'Built first responsive website with HTML/CSS',
      'Completed JavaScript algorithms challenges',
      'Created portfolio v1 to track progress',
    ],
  },
  {
    period: '2024',
    title: 'Frontend Mastery',
    role: 'React Developer',
    description: 'Focused on modern React patterns, component design, and performance optimization.',
    achievements: [
      'Built 3+ production-ready React applications',
      'Mastered Tailwind CSS for rapid UI development',
      'Implemented accessibility best practices',
    ],
  },
  {
    period: '2025',
    title: 'Full-Stack & AI Integration',
    role: 'Full Stack Developer',
    description: 'Expanded to backend development and explored practical AI/ML applications.',
    achievements: [
      'Developed REST APIs with Node.js & Express',
      'Integrated ML models into web applications',
      'Deployed projects with CI/CD pipelines',
    ],
  },
  {
    period: 'Present',
    title: 'Professional Growth',
    role: 'Aspiring Software Engineer',
    description: 'Preparing for internships and full-time roles while contributing to open source.',
    achievements: [
      'Polishing portfolio with professional design',
      'Seeking Full Stack Web Development internship',
      'Sharing knowledge through documentation & community',
    ],
  },
];

/**
 * Testimonials (Add real ones as you receive them)
 */
export const TESTIMONIALS = [
  // Example placeholder — replace with real feedback
  // {
  //   name: 'Professor Name',
  //   role: 'Computer Science Instructor, Bahir Dar University',
  //   text: 'Zelalem demonstrates strong problem-solving skills and a genuine passion for building useful software.',
  //   avatar: null, // Add photo path if available
  // },
];

/**
 * Color Palette (Centralized for consistency)
 */
export const COLORS = {
  // Backgrounds
  bg: '#c7b690',
  bgAlt: '#F5F5F7',
  surface: 'rgba(255,255,255,0.95)',
  
  // Brand Colors
  primary: '#A4161A',
  primaryDark: '#660708',
  accent: '#D97706',
  
  // Text
  text: '#1D1D1F',
  textSecondary: '#3a3a3c',
  textMuted: '#8e8e93',
  
  // UI
  border: '#D1D1D6',
  borderHover: '#A4161A',
  
  // Status
  success: '#10B981',
  error: '#DC2626',
  warning: '#F59E0B',
  
  // External brands (use sparingly)
  telegram: '#0088cc',
  github: '#1D1D1F',
  linkedin: '#0A66C2',
};

/**
 * Helper: Get project by ID
 */
export const getProjectById = (id) => PROJECTS.find(p => p.id === id);

/**
 * Helper: Filter featured projects
 */
export const getFeaturedProjects = () => PROJECTS.filter(p => p.featured);

/**
 * Helper: Get skills as flat array with category
 */
export const getAllSkills = () => 
  Object.entries(SKILLS).flatMap(([category, skills]) =>
    skills.map(skill => ({ ...skill, category }))
  );