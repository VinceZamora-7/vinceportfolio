import { useEffect } from 'react'
import { 
  Header, 
  Hero, 
  Projects, 
  Skills, 
  About, 
  Contact, 
  Footer 
} from './components'
import { 
  NAVIGATION, 
  PORTFOLIO_OWNER, 
  PROJECTS, 
  SKILLS, 
  EXPERIENCE,
  SOCIAL_LINKS 
} from './constants/portfolio'
import { useScrollToSection } from './hooks'
import { logger } from './utils'

/**
 * Main App Component
 * Orchestrates all portfolio sections
 */
function App() {
  // Initialize scroll-to-section functionality
  useScrollToSection()

  // Log app initialization
  useEffect(() => {
    logger.info('Portfolio app loaded', {
      owner: PORTFOLIO_OWNER.name,
      timestamp: new Date().toISOString()
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header navItems={NAVIGATION} />
      
      <main className="flex-1">
        <Hero 
          title={`Hi, I'm ${PORTFOLIO_OWNER.name}`}
          subtitle={PORTFOLIO_OWNER.bio}
          ctaText="View My Work"
          ctaLink="#projects"
          profileImage="/profile.jpg"
        />
        
        <About 
          name={PORTFOLIO_OWNER.name}
          bio="I’m a developer who turns ideas into fast, polished web experiences. I build modern, accessible interfaces with clean, maintainable code and I love shipping products that people actually enjoy using."
          experience={EXPERIENCE}
        />
        
        <Projects 
          projects={PROJECTS}
          title="Featured Projects"
        />
        
        <Skills 
          skillsData={SKILLS}
          title="Technical Skills"
        />
        
        <Contact 
          email={PORTFOLIO_OWNER.email}
          phone={PORTFOLIO_OWNER.phone}
          socialLinks={SOCIAL_LINKS}
        />
      </main>
      
      <Footer 
        year={new Date().getFullYear()}
        name={PORTFOLIO_OWNER.name}
      />
    </div>
  )
}

export default App
