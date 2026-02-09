# Portfolio Structure Guide

A well-organized React portfolio built with Vite, featuring excellent file management for easy debugging and future maintenance.

## 📁 File Structure

```
src/
├── components/          # Reusable React components
│   ├── About.jsx       # About section with experience timeline
│   ├── Contact.jsx     # Contact form & information
│   ├── Footer.jsx      # Footer component
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Main hero/landing section
│   ├── ProjectCard.jsx # Individual project card (used in Projects)
│   ├── Projects.jsx    # Projects grid section
│   ├── Skills.jsx      # Skills/technologies section
│   └── index.js        # Component exports barrel
│
├── constants/          # Configuration & static data
│   └── portfolio.js    # Portfolio content, navigation, projects data
│
├── hooks/              # Custom React hooks
│   ├── useFormHandler.js      # Form state & validation logic
│   ├── useScrollToSection.js  # Smooth scroll navigation
│   └── index.js                # Hook exports barrel
│
├── styles/             # Component-specific CSS files
│   ├── About.css
│   ├── Contact.css
│   ├── Footer.css
│   ├── Header.css
│   ├── Hero.css
│   ├── ProjectCard.css
│   ├── Projects.css
│   └── Skills.css
│
├── utils/              # Utility functions & helpers
│   ├── logger.js       # Console logging with timestamps
│   ├── validations.js  # Form & data validation functions
│   └── index.js        # Utility exports barrel
│
├── assets/             # Static assets
│   ├── images/         # Image files for projects
│   └── icons/          # SVG/icon files
│
├── App.jsx            # Main app component & orchestrator
├── App.css            # Root app styles
├── main.jsx           # React root entry point
└── index.css          # Global styles & CSS variables
```

## 🎯 Component Hierarchy

```
App
├── Header (Navigation)
├── Hero (Main Landing Section)
├── About (Background & Experience)
├── Projects (Grid of ProjectCards)
│   └── ProjectCard (Individual Project)
├── Skills (Technical Skills by Category)
├── Contact (Contact Form)
└── Footer
```

## 📋 Key Files Explained

### Constants (`src/constants/portfolio.js`)
Centralized data management for:
- Portfolio owner info
- Navigation items
- Project data
- Skills by category
- Experience history
- Social media links

**Update this file to customize your portfolio content without touching components.**

### Hooks (`src/hooks/`)
- **useScrollToSection**: Enables smooth scrolling between sections
- **useFormHandler**: Manages form state, validation, and submission

### Utils (`src/utils/`)
- **logger.js**: Timestamped console logging for debugging
- **validations.js**: Email, phone, URL, and form validation functions

### Components (`src/components/`)
All components:
- Accept props for flexibility
- Include PropTypes validation
- Have detailed JSDoc comments
- Are easily testable and reusable

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Building
```bash
npm run build
```

## 🔧 Customization Guide

### 1. Update Portfolio Content
Edit `src/constants/portfolio.js`:
```javascript
export const PORTFOLIO_OWNER = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio',
  email: 'your@email.com',
  phone: '+1 (555) 000-0000',
};

export const PROJECTS = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/you/project',
    image: '/images/project1.jpg',
  },
  // Add more projects...
];
```

### 2. Add New Components
1. Create component in `src/components/NewComponent.jsx`
2. Export in `src/components/index.js`
3. Add corresponding CSS in `src/styles/NewComponent.css`
4. Import and use in `App.jsx`

### 3. Add New Utilities
1. Create in `src/utils/newUtility.js`
2. Export in `src/utils/index.js`
3. Import in components using: `import { newUtility } from '../utils'`

### 4. Create Custom Hooks
1. Create in `src/hooks/useNewHook.js`
2. Export in `src/hooks/index.js`
3. Use in components: `import { useNewHook } from '../hooks'`

## 🐛 Debugging Tips

### Logger Usage
```javascript
import { logger } from '../utils'

logger.info('User submitted form', { email: 'user@example.com' })
logger.error('Failed to fetch projects', error)
logger.debug('Component mounted', { componentName: 'Projects' })
```

### Component Props Debugging
All components have PropTypes validation. Check console for prop warnings:
```
Warning: Failed prop type: Invalid prop `projects` of type `string` supplied to `Projects`, expected `array`.
```

### State Debugging
Use React DevTools browser extension to:
- Inspect component tree
- Track state changes
- Monitor hook usage

### CSS Issues
Each component has isolated CSS in `src/styles/`. Check:
1. CSS file name matches component file name
2. Import statement in component
3. Class names match CSS selectors

## 📝 Best Practices

### Adding New Features
1. **Create in right location**: Components → `components/`, Utils → `utils/`, Data → `constants/`
2. **Follow naming conventions**: Components are PascalCase JSX, utilities are camelCase JS
3. **Add documentation**: JSDoc comments for functions, component prop documentation
4. **Use existing hooks**: Leverage `useFormHandler`, `useScrollToSection` before creating new ones

### Naming Conventions
- **Components**: `PascalCase` (e.g., `ProjectCard.jsx`)
- **Functions/Utils**: `camelCase` (e.g., `validateEmail.js`)
- **Hooks**: `useHookName` (e.g., `useFormHandler.js`)
- **CSS Classes**: `component__element--modifier` (BEM convention)

### Component Props
- Always include PropTypes
- Provide default props
- Document complex prop shapes
- Keep components focused on single responsibility

## 🔍 Troubleshooting

### Components Not Rendering
1. Check component import in `App.jsx`
2. Verify component export in `src/components/index.js`
3. Check console for errors

### Styles Not Applying
1. Verify CSS file is imported in component
2. Check class name matches CSS selector
3. Use browser DevTools to inspect applied styles

### Form Not Working
1. Check `useFormHandler` hook usage
2. Verify field names match form object keys
3. Review validation rules in `src/utils/validations.js`

### Navigation Not Smooth Scrolling
1. Verify `useScrollToSection` is called in `App.jsx`
2. Check section IDs match navigation href values
3. Test with different browsers

## 📈 Performance Tips

- Images in `ProjectCard` use lazy loading (`loading="lazy"`)
- CSS is component-scoped to prevent conflicts
- Hooks are memoized where appropriate
- Use logger in development only (check NODE_ENV in logger.js)

## 🎨 Styling System

### CSS Variables (in `src/index.css`)
```css
--primary-color: #0066cc
--primary-dark: #0052a3
--secondary-color: #667eea
--accent-color: #764ba2
--text-dark: #333
--text-light: #666
--bg-light: #f9f9f9
--bg-white: #ffffff
--border-color: #ddd
--shadow: 0 4px 12px rgba(0, 0, 0, 0.1)
```

Use these variables in component CSS for consistent theming.

## 📞 Contact Form Integration

The `Contact` component uses `useFormHandler` hook. To actually send emails, integrate with:
- **SendGrid**: RESTful API
- **Netlify Forms**: Built-in form handling
- **EmailJS**: Client-side email service
- **Your own backend**: API endpoint

Update the `onSubmit` function in `Contact.jsx` to connect to your service.

## 🚀 Deployment

### Vercel
```bash
vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default {
  base: '/your-repo-name/',
}
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [PropTypes Documentation](https://github.com/facebook/prop-types)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Last Updated**: February 2026
**Version**: 1.0.0
