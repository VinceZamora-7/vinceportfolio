# ✅ Portfolio Customization Checklist

Track your progress setting up your portfolio!

## 🚀 Phase 1: Initial Setup (5 minutes)

- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run dev` to start development server
- [ ] Open browser to http://localhost:5173
- [ ] Verify portfolio loads without errors

## 📝 Phase 2: Content Customization (10-15 minutes)

Edit `src/constants/portfolio.js`:

### Personal Information
- [ ] Update `PORTFOLIO_OWNER.name` with your name
- [ ] Update `PORTFOLIO_OWNER.title` with your job title
- [ ] Update `PORTFOLIO_OWNER.bio` with your bio
- [ ] Update `PORTFOLIO_OWNER.email` with your email
- [ ] Update `PORTFOLIO_OWNER.phone` with your phone number

### Social Links
- [ ] Update GitHub URL in `SOCIAL_LINKS`
- [ ] Update LinkedIn URL in `SOCIAL_LINKS`
- [ ] Update Twitter URL in `SOCIAL_LINKS`
- [ ] Remove any social links you don't use

### Projects
- [ ] Replace default projects with your 3-5 best projects
- [ ] For each project:
  - [ ] Add project title
  - [ ] Add description
  - [ ] Add technologies used
  - [ ] Add live demo URL
  - [ ] Add GitHub repository URL
  - [ ] Add project image path

### Skills
- [ ] Update frontend skills list
- [ ] Update backend skills list
- [ ] Update tools/other skills list

### Experience
- [ ] Add your work experience entries
- [ ] For each entry:
  - [ ] Add company name
  - [ ] Add job title
  - [ ] Add employment period
  - [ ] Add job description

## 🎨 Phase 3: Visual Customization (5-10 minutes)

### Colors
- [ ] Edit `src/index.css` to customize colors (optional)
  - [ ] Update `--primary-color` for main brand color
  - [ ] Update `--secondary-color` if desired
  - [ ] Update other colors as needed
  - [ ] Test that text is still readable

### Typography
- [ ] Review font sizes and line heights
- [ ] Adjust if needed for your preference

### Images
- [ ] Create `public/images/` folder if it doesn't exist
- [ ] Add project images:
  - [ ] project1.jpg
  - [ ] project2.jpg
  - [ ] project3.jpg
  - (Add more as needed)
- [ ] Image recommendations:
  - [ ] Size: ~600x400px or similar
  - [ ] Format: JPG or PNG
  - [ ] File size: < 200KB each

## 🧪 Phase 4: Testing (5 minutes)

### Manual Testing
- [ ] View on desktop browser
- [ ] View on tablet size (with DevTools)
- [ ] View on mobile size (with DevTools)
- [ ] Test navigation:
  - [ ] Click each nav link
  - [ ] Verify smooth scroll
  - [ ] Check that all sections are visible
- [ ] Test contact form:
  - [ ] Try submitting empty form (should show errors)
  - [ ] Enter invalid email (should show error)
  - [ ] Enter all valid data
  - [ ] Submit (should work, though backend not set up yet)

### Browser Testing
- [ ] Test in Chrome/Edge
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Check console for errors (F12 → Console tab)

## 📧 Phase 5: Contact Form Setup (Optional - 10 minutes)

If you want the contact form to actually send emails:

- [ ] Choose email service:
  - [ ] SendGrid (API-based)
  - [ ] Netlify Forms (auto-works if deploying to Netlify)
  - [ ] EmailJS (client-side)
  - [ ] Your own backend
- [ ] Implement form submission:
  - [ ] Update `src/components/Contact.jsx`
  - [ ] Configure API endpoint
  - [ ] Test form submission
  - [ ] Verify emails are received

## 🚀 Phase 6: Production Build (3 minutes)

### Build for Deployment
- [ ] Run `npm run build`
- [ ] Verify build completes without errors
- [ ] Run `npm run preview`
- [ ] Test production build locally
- [ ] Verify all features work in production mode

## 🌐 Phase 7: Deployment (5-15 minutes)

### Deploy to Vercel (Recommended)
- [ ] Create Vercel account (if needed)
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Run `vercel` in project directory
- [ ] Follow prompts to deploy
- [ ] Test live deployment
- [ ] Share URL with people

### OR Deploy to Netlify
- [ ] Push project to GitHub
- [ ] Create Netlify account
- [ ] Connect GitHub repository
- [ ] Configure build settings:
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `dist`
- [ ] Deploy
- [ ] Test live deployment
- [ ] Configure custom domain (if desired)

### OR Deploy to GitHub Pages
- [ ] Update `vite.config.js`: `base: '/your-repo-name/'`
- [ ] Run `npm run build`
- [ ] Push `dist` folder to GitHub Pages branch
- [ ] Enable GitHub Pages in repository settings
- [ ] Test live deployment

## 📋 Phase 8: Post-Deployment (5 minutes)

After Deployment:
- [ ] Test live portfolio in browser
- [ ] Test on mobile device
- [ ] Test all navigation links
- [ ] Test contact form (if implemented)
- [ ] Check Google PageSpeed Insights
- [ ] Run Lighthouse audit
- [ ] Fix any issues found
- [ ] Share with friends/colleagues
- [ ] Update LinkedIn with portfolio URL
- [ ] Update GitHub bio with portfolio URL

## 🔧 Phase 9: Optional Enhancements (As desired)

### Analytics
- [ ] Set up Google Analytics
- [ ] Add analytics tracking code to `index.html`
- [ ] Monitor user behavior

### SEO
- [ ] Update `index.html` title tag
- [ ] Update meta description
- [ ] Add Open Graph tags
- [ ] Verify meta tags with tools
- [ ] Submit sitemap to Google Search Console

### Performance
- [ ] Optimize images:
  - [ ] Compress images
  - [ ] Use appropriate sizes
  - [ ] Test load times
- [ ] Monitor Core Web Vitals
- [ ] Check Lighthouse scores

### Features
- [ ] Add dark mode toggle (optional)
- [ ] Add scroll animations (optional)
- [ ] Add blog section (optional)
- [ ] Add case studies (optional)

## 🎯 Success Criteria

Your portfolio is ready when:

- ✅ All sections display correctly
- ✅ Navigation works smoothly
- ✅ Contact form validates input
- ✅ Responsive on mobile/tablet/desktop
- ✅ No console errors
- ✅ Images load properly
- ✅ All links work
- ✅ Deployed and live
- ✅ Fast loading (Lighthouse 90+)

## 📞 Troubleshooting Guide

**Issue**: Dev server won't start
```bash
rm -rf node_modules
npm install
npm run dev
```

**Issue**: Styles not updating
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache

**Issue**: Images not showing
- Verify images are in `public/images/`
- Check paths start with `/images/`
- Not `./images/` or `images/`

**Issue**: Contact form not working
- Check console (F12) for errors
- Verify form is submitting
- See DEBUGGING_GUIDE.md for solutions

## 📚 Documentation References

| Need | Document |
| --- | --- |
| Quick start | [QUICKSTART.md](./QUICKSTART.md) |
| File structure | [FILE_STRUCTURE.md](./FILE_STRUCTURE.md) |
| Debugging help | [DEBUGGING_GUIDE.md](./DEBUGGING_GUIDE.md) |
| Full overview | [README.md](./README.md) |

## 💡 Pro Tips

- **Save frequently**: VS Code auto-saves, but be conscious of changes
- **Test locally first**: Run `npm run dev` before building
- **Check browser console**: F12 → Console tab shows errors
- **Mobile test**: Always test on mobile size
- **Use DevTools**: F12 to inspect and debug
- **Keep backups**: Git commit working versions
- **Get feedback**: Share draft with friends
- **Update often**: Keep portfolio current with latest projects

## 🎉 Celebration Checklist

After completing all phases:

- [ ] 🎊 Take a screenshot of your portfolio
- [ ] 📱 Test on your phone
- [ ] 📧 Send link to friends
- [ ] 💼 Add to LinkedIn
- [ ] 🐙 Add link to GitHub profile
- [ ] 📝 Open first issue on GitHub Projects
- [ ] 🎯 Set goal to update portfolio monthly
- [ ] 🚀 Share on social media

---

**Status**: Incomplete ⬜  
**Progress**: 0/107 items completed

---

## Quick Actions

Ready to start? Pick your starting point:

1. **First time?** → Read [QUICKSTART.md](./QUICKSTART.md)
2. **Need help?** → Check [DEBUGGING_GUIDE.md](./DEBUGGING_GUIDE.md)
3. **Understand structure?** → See [FILE_STRUCTURE.md](./FILE_STRUCTURE.md)
4. **Jump in?** → Start with this checklist!

---

Last updated: February 9, 2026
