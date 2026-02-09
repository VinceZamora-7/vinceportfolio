# 🐛 Debugging Guide

Comprehensive debugging strategies for the Portfolio project.

## Quick Debug Checklist

- [ ] Check browser console for errors
- [ ] Verify imports are correct
- [ ] Check component props with React DevTools
- [ ] Inspect CSS with browser DevTools
- [ ] Check file paths are correct (case-sensitive on Linux/Mac)
- [ ] Verify all imports are relative paths
- [ ] Check constants are properly exported

## 1. Console & Logging

### Built-in Logger
```javascript
import { logger } from '../utils'

// Info logs
logger.info('Component mounted', { userId: 123 })

// Warnings
logger.warn('Deprecated prop used', { propName: 'color' })

// Errors
logger.error('Failed to load projects', new Error('API error'))

// Debug (only in development)
logger.debug('State updated', { newState: {...} })
```

### Logger Output Format
```
[2026-02-09T12:34:56.789Z] [INFO] Component mounted {userId: 123}
[2026-02-09T12:34:57.890Z] [ERROR] Failed to load projects Error: API error
```

## 2. React DevTools

### Install
- Chrome: [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- Firefox: [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### Debug Component Props
1. Open DevTools
2. Click React tab
3. Select component in tree
4. View props in panel on right
5. Edit props to test behavior

### Check Component Rendering
1. Select component
2. Check if it's rendering
3. View children components
4. Trace re-renders (click gear icon → Highlight updates)

## 3. Common Issues & Solutions

### Issue: Component Not Showing
```javascript
// ❌ Forgot to import
import App from './App'

// ✅ Import component
import { Header } from './components'
```

**Debug Steps:**
1. Check component import in App.jsx
2. Verify export in components/index.js
3. Check console for "Component not defined" error
4. Use React DevTools to see component tree

### Issue: Props Not Updating
```javascript
// ❌ Props mutated directly
contact.email = 'new@email.com'

// ✅ Create new object
setContact({ ...contact, email: 'new@email.com' })
```

**Debug Steps:**
1. Use React DevTools to inspect props
2. Check if parent component is re-rendering
3. Verify prop changes trigger parent update
4. Check for missing useState dependencies

### Issue: Form Not Submitting
```javascript
// Debug: Add console logs to useFormHandler
const handleSubmit = async (e) => {
  logger.debug('Form submitted', { formData })
  
  // Check validation
  const { isValid, errors } = validateFormData(formData, ['name', 'email'])
  logger.debug('Validation result', { isValid, errors })
}
```

**Debug Steps:**
1. Check form field names match formData keys
2. Verify validation rules in utils/validations.js
3. Check if onSubmit callback is defined
4. Look for validation error messages in UI

### Issue: Styles Not Applying
```css
/* ❌ Wrong: Styles don't apply */
.header__logo {
  font-size: 1.5rem;
}

/* ✅ Check class name in component */
<div className="header__logo">Logo</div>

/* ✅ CSS file is imported */
import '../styles/Header.css'
```

**Debug Steps:**
1. Inspect element in browser DevTools
2. Check computed styles tab
3. Verify CSS file is imported in component
4. Check class name matches CSS selector exactly
5. Look for CSS specificity issues

### Issue: Navigation Not Scrolling
```javascript
// ❌ Missing smooth scroll hook
function App() {
  return <Header ... /> // No useScrollToSection
}

// ✅ Add hook
function App() {
  useScrollToSection() // Enables smooth scrolling
  return <Header ... />
}
```

**Debug Steps:**
1. Check navigation href format: `#sectionId`
2. Verify section has matching id: `<section id="sectionId">`
3. Test with browser DevTools Network tab
4. Check for JavaScript errors preventing scroll

## 4. File Structure Issues

### Import Path Errors
```javascript
// ❌ Absolute paths don't work
import Header from '/components/Header'

// ✅ Use relative paths
import { Header } from '../components'

// ✅ Or from components barrel export
import { Header, Hero, Projects } from '../components'
```

### Missing Exports
```javascript
// ❌ Component not exported
function MyComponent() { ... }
// export default MyComponent

// ✅ Export in components/index.js
export { default as MyComponent } from './MyComponent'

// ✅ Then import where needed
import { MyComponent } from '../components'
```

## 5. Performance Debugging

### Check Unnecessary Re-renders
1. Open React DevTools
2. Settings → Gear icon → "Highlight updates when components render"
3. Interact with app
4. Watch for excessive re-renders

### Identify Performance Issues
```javascript
import { logger } from '../utils'

function MyComponent() {
  useEffect(() => {
    const startTime = performance.now()
    // Component logic
    const endTime = performance.now()
    logger.debug('Render time', { duration: endTime - startTime })
  }, [])
}
```

## 6. Network Debugging

### Check API Calls (when integrated)
1. Open DevTools → Network tab
2. Perform action
3. Look for API request
4. Check:
   - Status code (200 = success, 4xx = client error, 5xx = server error)
   - Response payload
   - Request headers
   - Response time

### Simulate Slow Network
1. DevTools → Network tab
2. Click throttling dropdown (top-left)
3. Select "Slow 3G" or custom speed
4. Test app with realistic conditions

## 7. Step-by-Step Debugging

### Debug Form Submission
```javascript
import { useFormHandler } from '../hooks'

const Contact = () => {
  const { formData, errors, handleChange, handleSubmit } = useFormHandler(
    async (data) => {
      console.log('Form data:', data) // 1. Check data
      
      try {
        // 2. Try to submit
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        
        console.log('Response:', response) // 3. Check response
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      } catch (error) {
        console.error('Submit error:', error) // 4. Check errors
      }
    }
  )
}
```

### Debug Component Lifecycle
```javascript
import { useEffect, useState } from 'react'

function MyComponent() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    console.log('Component mounted')
    return () => console.log('Component unmounted')
  }, [])
  
  useEffect(() => {
    console.log('Data changed:', data)
  }, [data])
  
  return <div>{data}</div>
}
```

## 8. Browser DevTools Tips

### Console Commands
```javascript
// Get element by React DevTools
$r // Currently selected React component

// Get all props of selected component
$r.props

// Get state of selected component
$r.state

// Force update
$r.forceUpdate()

// Set state
$r.setState({ propertyName: newValue })
```

### Find Elements
```javascript
// Find element in DevTools Inspector
// Right-click element → Inspect
// Or press Ctrl+Shift+C (Cmd+Shift+C on Mac)
```

## 9. TypeScript/ESLint Errors

### Fix Import Errors
```javascript
// ❌ Named import doesn't exist
import { useForm } from '../hooks' // Hook is named useFormHandler

// ✅ Correct import
import { useFormHandler } from '../hooks'
```

### Check ESLint Errors
```bash
npm run lint
```

Fix common issues:
- Unused imports: Remove or use
- Missing dependencies: Add to useEffect dependencies array
- PropTypes warnings: Define PropTypes for component

## 10. Version Compatibility

### Check Installed Versions
```bash
npm list
```

### Update Dependencies
```bash
npm update
npm install prop-types@latest
```

### Check for Breaking Changes
When updating libraries, check:
1. Library changelog
2. Migration guides
3. GitHub issues

## Debugging Workflow

### Step 1: Identify Problem
- Error message in console?
- Visual issue?
- Feature not working?

### Step 2: Reproduce
- Try in different browser
- Clear cache and reload
- Restart dev server

### Step 3: Locate Source
- Console errors → file/line number
- React DevTools → component
- Network tab → API issue

### Step 4: Examine Code
- Check file at error location
- Review recent changes
- Compare with working version

### Step 5: Test Fix
- Make minimal change
- Test in browser
- Check console for new errors
- Use DevTools to verify behavior

### Step 6: Verify Solution
- Test multiple scenarios
- Check performance impact
- Commit working code

## Debug Mode Commands

### Start Development Server with Logging
```bash
npm run dev
```

### Run Linter
```bash
npm run lint
```

### Build and Preview Production
```bash
npm run build
npm run preview
```

## Resources for Debugging

- [React DevTools Documentation](https://react.dev/learn/react-developer-tools)
- [Chrome DevTools Debugging Guide](https://developer.chrome.com/docs/devtools/debugging-js/)
- [MDN Web Debugging](https://developer.mozilla.org/en-US/docs/Tools)
- [VS Code Debugging](https://code.visualstudio.com/docs/editor/debugging)

---

**Pro Tips:**
- 💡 Use `logger` utility instead of `console.log` for consistent output
- 🔍 Use React DevTools to understand component hierarchy
- 📱 Test on mobile devices and different screen sizes
- 🐛 Commit working code before making changes
- 📝 Add comments explaining complex logic for future debugging

