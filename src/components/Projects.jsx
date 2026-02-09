/**
 * Projects Section Component
 * Displays portfolio projects in a grid layout
 */


import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import { useState } from 'react';

const Projects = ({ projects, title }) => {
  const [activeTab, setActiveTab] = useState('webpage');
  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">{title}</h2>
          <p className="text-center text-gray-600 text-lg">No projects to display yet.</p>
        </div>
      </section>
    );
  }

  const tabs = [
    
    { key: 'webpage', label: 'Company Webpages' },
    { key: 'microsoft-tool', label: 'Microsoft Tools' },
  ];

  const filteredProjects = projects.filter((p) => p.type === activeTab);

  return (
    <section id="projects" className="py-10 px-2 sm:px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-10 text-gray-900">{title}</h2>
        {/* Tabs - mobile first: vertical, full width, smaller gap */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center mb-6 sm:mb-10 gap-2 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`w-full sm:w-auto px-4 py-2 rounded-full font-semibold transition-colors duration-200 border-2 focus:outline-none text-sm sm:text-base ${activeTab === tab.key ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
              onClick={() => setActiveTab(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Project Cards - mobile: horizontal slider, desktop: grid */}
        <div>
          {/* Mobile slider */}
          <div className="block sm:hidden -mx-2 pb-2">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide px-2 snap-x snap-mandatory">
              {filteredProjects.length === 0 ? (
                <div className="flex-1 min-w-[80vw] text-center text-gray-500 text-base">No projects in this category yet.</div>
              ) : (
                filteredProjects.map((project) => (
                  <div key={project.id} className="min-w-[65vw] max-w-[320px] snap-center flex-shrink-0">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      image={project.image}
                      type={project.type}
                      small
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          {/* Desktop grid */}
          <div className="hidden sm:grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-base sm:text-lg">No projects in this category yet.</div>
            ) : (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  image={project.image}
                  type={project.type}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string),
      liveUrl: PropTypes.string,
      githubUrl: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

Projects.defaultProps = {
  projects: [],
  title: 'Featured Projects',
};

export default Projects;
