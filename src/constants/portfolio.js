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
    // { id: 'contact', label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { platform: 'github', url: 'https://github.com/VinceZamora-7', icon: '🔗' },
  { platform: 'linkedin', url: 'https://linkedin.com', icon: '💼' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'ELECTRONIKHUB',
    description: 'An commercial webpage and e-commerce platform for electronic products',
    technologies: ['React', 'PHP', 'MySQl'],
    liveUrl: 'https://ehub.ph/',
    githubUrl: 'https://github.com/ElectronikHub/ehubv3',
    image: 'assets/images/ehubph_screenshot.jpeg',
    type: 'webpage', // Other company webpage
  },
  {
    id: 2,
    title: 'Requestors Guide BAP',
    description: 'Built and deployed a Requestor’s Guide web tool on Microsoft Azure that standardizes PO creation/extension requests (service type, P&C, country/category, compliance checks) and includes a local-to-USD PO currency converter.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveUrl: 'https://requestorsguide-gzh8a6fph7hjdqft.southeastasia-01.azurewebsites.net/',
    githubUrl: 'https://github.com/VinceZamora-7/requestorsguideBAP',
    image: 'assets/images/requestorsGuide.png',
    type: 'microsoft-tool', // Other company webpage
  },
  {
    id: 3,
    title: 'InstaFont: Multi-Language HTML Formatter',
    description: 'InstaFont is a client-side utility designed to format text for HTML environments, specifically focusing on multi-language content within a single block of text. It automatically applies Microsoft-recommended font families based on the language script to ensure consistent and correct rendering, particularly useful for email templates that often struggle with mixed-script typography.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveUrl: 'https://vincezamora-7.github.io/InstaFont/',
    githubUrl: 'https://github.com/VinceZamora-7/InstaFont',
    image: 'assets/images/instafont.jpeg',
    type: 'microsoft-tool', // Tool made for Microsoft
  },
    {
    id: 4,
    title: 'CCM-CPM-Validity-Calculator',
    description: 'A tool to calculate CCM (Customer Care Management) and CPM (Cost Per Mille) validity for marketing campaigns.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveUrl: 'https://vincezamora-7.github.io/CCM-CPM-Validity-Calculato/',
    githubUrl: 'https://github.com/VinceZamora-7/CCM-CPM-Validity-Calculato',
    image: 'assets/images/ccmcpmvalidator.jpeg',
    type: 'microsoft-tool', // Tool made for Microsoft
  },
      {
    id: 5,
    title: 'Text-HTML Tool',
    description: 'A tool to format and convert text to HTML for email templates and web content.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveUrl: 'https://codegenxcodingpreprocessor-c9hfc0d0gsf0ebd7.eastasia-01.azurewebsites.net/',
    githubUrl: 'https://github.com/VinceZamora-7/codingpreprocessor',
    image: 'assets/images/texthtmlgenerator.jpeg',
    type: 'microsoft-tool', // Tool made for Microsoft
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
