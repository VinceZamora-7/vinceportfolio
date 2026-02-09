/**
 * Portfolio Configuration & Data
 * Centralized data management for easy updates
 */

export const PORTFOLIO_OWNER = {
  name: 'Vince Zamora',
  title: 'Full Stack Developer',
  bio: 'Creating beautiful and functional web experiences',
  email: 'vincezamora27@gmail.com',
  phone: '+63 994 483 7461',
};

export const NAVIGATION = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { platform: 'github', url: 'https://github.com/VinceZamora-7', icon: '🔗' },
  { platform: 'linkedin', url: 'https://linkedin.com', icon: '💼' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'ElectronikHub',
    description: 'An commercial webpage and e-commerce platform for electronic products',
    technologies: ['React', 'PHP', 'MySQl'],
    liveUrl: 'https://ehub.ph/',
    githubUrl: 'https://github.com/ElectronikHub/ehubv3',
    image: 'src/assets/images/ehubph_screenshot.jpeg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Another amazing project description',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    image: '/images/project2.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Showcase your best work here',
    technologies: ['Vue', 'Express', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    image: '/images/project3.jpg',
  },
];

export const SKILLS = {
  frontend: ['React', 'JavaScript', 'CSS', 'Tailwind CSS', 'Vue.js', 'HTML5'],
  backend: ['Laravel', 'PHP', 'MySQL'],
  tools: ['Git', 'VS Code', 'Docker', 'azure',],
};

export const EXPERIENCE = [
  {
    id: 1,
    company: 'Tech Mahindra - Microsoft account',
    position: 'Email Marketing Specialist',
    period: 'November 2024 - Present',
    description: 'Managing email campaigns and improving engagement rates. And Creating tools to automate email marketing processes, resulting in a 20% increase in efficiency processing and analyzing campaign data to optimize performance and drive better results. We used javascript, react, php and mysql to create the tools and automate the processes. As well azure to host the tools and automate the processes',
  },
  {
    id: 2,
    company: 'Salas Staffing',
    position: 'Wordpress Developer',
    period: 'May 2024 - January 2025',
    description: 'Developed and maintained custom WordPress themes and plugins for clients. Optimized websites for performance and SEO.',
  },
    {
    id: 3,
    company: 'Electronik Hub - Freelancer',
    position: 'Full stack developer',
    period: 'November 2023 - Present',
    description: 'Developed and maintained the e-commerce platform for Electronik Hub, an online electronics store. Implemented new features and optimized performance using React, PHP, and MySQL. Also createed custom API endpoints and integrated third-party services to enhance functionality of Arduino, Raspberry Pi, and other electronic products. Collaborated with the design team to ensure a seamless user experience across the website.',
  },
];
