/**
 * About Section Component
 * Personal bio and background information
 */

import PropTypes from 'prop-types';

const About = ({ name, bio, experience }) => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="text-lg text-gray-700 mb-8 leading-relaxed">
            <p>{bio}</p>
          </div>
          
          {experience && experience.length > 0 && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-4 border-blue-600 pl-6 py-2">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{exp.position}</h4>
                      <span className="text-blue-600 font-semibold whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

About.defaultProps = {
  name: 'Your Name',
  bio: 'Welcome to my portfolio!',
  experience: [],
};

export default About;
