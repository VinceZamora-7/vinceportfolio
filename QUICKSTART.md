# 🚀 Quick Start Guide

Get your portfolio up and running in minutes!

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## First Steps - Customize Your Portfolio

### Step 1: Update Your Information
Edit `src/constants/portfolio.js`:

```javascript
export const PORTFOLIO_OWNER = {
  name: 'Your Name',          // ← Change this
  title: 'Your Job Title',    // ← Change this
  bio: 'Your bio here',       // ← Change this
  email: 'your@email.com',    // ← Change this
  phone: '+1 (555) 000-0000', // ← Change this
};
```

### Step 2: Add Your Projects
In the same `src/constants/portfolio.js` file:

```javascript
export const PROJECTS = [
  {
    id: 1,
    title: 'My Awesome Project',      // ← Your project title
    description: 'What this project does',  // ← Description
    technologies: ['React', 'Node.js'], // ← Tech stack
    liveUrl: 'https://live-demo.com',   // ← Live demo link
    githubUrl: 'https://github.com/you/project', // ← GitHub
    image: '/images/project1.jpg',      // ← Project image
  },
  // Add more projects...
];
```

### Step 3: Update Skills
```javascript
export const SKILLS = {
  frontend: ['React', 'JavaScript', 'CSS', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'MongoDB'],
  tools: ['Git', 'VS Code', 'Docker'],
};
```

### Step 4: Add Experience
```javascript
export const EXPERIENCE = [
  {
    id: 1,
    company: 'Company Name',
    position: 'Your Job Title',
    period: '2023 - Present',
    description: 'What you did and accomplished',
  },
];
```

## Making Changes

### Automatic Reload
As you edit files, the browser automatically updates! No need to refresh.

### Component Structure
- **Navigation**: Edit `src/constants/portfolio.js` → `NAVIGATION`
- **Content**: Edit `src/constants/portfolio.js` → Portfolio data
- **Styling**: Edit CSS files in `src/styles/`
- **Layout**: Edit components in `src/components/`

## Project Images

### Add Project Images
1. Create folder `public/images/`
2. Add your images: `project1.jpg`, `project2.jpg`, etc.
3. Reference in `src/constants/portfolio.js`:
   ```javascript
   image: '/images/project1.jpg'
   ```

## Social Links

Update social media links in `SOCIAL_LINKS`:
```javascript
export const SOCIAL_LINKS = [
  { 
    platform: 'github', 
    url: 'https://github.com/your-username',  // ← Your GitHub
    icon: '🔗' 
  },
  { 
    platform: 'linkedin', 
    url: 'https://linkedin.com/in/your-profile',  // ← Your LinkedIn
    icon: '💼' 
  },
  { 
    platform: 'twitter', 
    url: 'https://twitter.com/your-handle',  // ← Your Twitter
    icon: '𝕏' 
  },
];
```

## Connect Contact Form

The contact form is ready to use! To actually send emails, follow step 2 of the next section.

### Option 1: Using SendGrid
```javascript
// In Contact.jsx, update the onSubmit for useFormHandler:
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

### Option 2: Using Netlify Forms
Just deploy to Netlify - it handles forms automatically!

### Option 3: Using Your Email Service
Update the fetch call to point to your backend endpoint.

## Customize Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-color: #0066cc;      /* Main color */
  --primary-dark: #0052a3;       /* Darker shade */
  --secondary-color: #667eea;    /* Secondary */
  --accent-color: #764ba2;       /* Accent */
  --text-dark: #333;             /* Text color */
  --text-light: #666;            /* Light text */
  --bg-light: #f9f9f9;          /* Light background */
}
```

## Build for Production

### Build
```bash
npm run build
```

Creates optimized production files in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

Test production build locally before deploying.

## Deployment

### Deploy to Vercel (Recommended - Free & Easy)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify (Free)
1. Push code to GitHub
2. Connect GitHub to Netlify
3. Netlify auto-deploys on push

### Deploy to GitHub Pages
1. Set `base` in `vite.config.js`:
   ```javascript
   export default {
     base: '/your-repo-name/',
   }
   ```
2. Run `npm run build`
3. Push `dist/` folder to GitHub Pages branch

## File Guide for Updates

| What to Change | File Location |
| --- | --- |
| Your name, title, bio | `src/constants/portfolio.js` |
| Projects | `src/constants/portfolio.js` |
| Skills | `src/constants/portfolio.js` |
| Experience | `src/constants/portfolio.js` |
| Navigation | `src/constants/portfolio.js` |
| Colors | `src/index.css` |
| Component Layout | `src/components/` |
| Component Styles | `src/styles/` |

## Troubleshooting

### Dev Server Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Styles Look Wrong
1. Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Check browser DevTools for CSS errors

### Project Images Not Showing
1. Ensure images are in `public/images/`
2. Check path in `src/constants/portfolio.js` starts with `/`
3. Correct format: `/images/project1.jpg` (not `./images/`)

### Form Not Submitting
1. Check console for errors
2. Verify email field has valid email format
3. Implement backend endpoint for form submission

## Next Steps

1. ✅ Update your information
2. ✅ Add your projects
3. ✅ Customize colors if desired
4. ✅ Build and preview locally
5. ✅ Deploy to Vercel/Netlify
6. ✅ Share your portfolio!

## Useful Resources

- [React Docs](https://react.dev) - Learn React
- [Vite Docs](https://vitejs.dev) - Learn Vite
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) - Dynamic styling
- [Vercel Docs](https://vercel.com/docs) - Deployment

## Commands Reference

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## Get Help

- 🔍 Check [FILE_STRUCTURE.md](./FILE_STRUCTURE.md) for detailed file organization
- 🐛 See [DEBUGGING_GUIDE.md](./DEBUGGING_GUIDE.md) for troubleshooting
- 📖 Read component JSDoc comments for usage examples
- 🚫 Check console for error messages

---

**Happy Building! 🎉**

Remember: All changes in `src/constants/portfolio.js` update your portfolio instantly!
