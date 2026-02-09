/**
 * Projects Section Component
 * Displays portfolio projects in a grid layout
 */

import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const Projects = ({ projects, title }) => {
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

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              image={project.image}
            />
          ))}
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
