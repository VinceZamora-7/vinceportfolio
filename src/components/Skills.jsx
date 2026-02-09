/**
 * Skills Section Component
 * Displays technical skills by category
 */

import PropTypes from 'prop-types';

const Skills = ({ skillsData, title }) => {
  if (!skillsData || Object.keys(skillsData).length === 0) {
    return (
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">{title}</h2>
          <p className="text-center text-gray-600 text-lg">No skills to display yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  skillsData: PropTypes.object,
  title: PropTypes.string,
};

Skills.defaultProps = {
  skillsData: {},
  title: 'Skills',
};

export default Skills;
