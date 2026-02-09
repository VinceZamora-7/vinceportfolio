/**
 * Project Card Component
 * Reusable card for displaying project information
 */

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ProjectCard = ({ title, description, technologies, liveUrl, githubUrl, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <>
      <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        {image ? (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-full h-full focus:outline-none"
            aria-label={`Open image for ${title}`}
          >
            <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
          </button>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies?.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition-colors font-medium"
            >
              Live
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition-colors font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full mx-auto transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 text-2xl leading-none z-20"
              aria-label="Close image"
            >
              ×
            </button>

            <div className="rounded-lg overflow-hidden bg-gradient-to-br from-transparent via-black/20 to-black/10 p-4">
              <div className="bg-gradient-to-br from-blue-900/40 via-cyan-400/10 to-transparent p-2 rounded">
                <div className="bg-black/80 rounded-md p-2 flex items-center justify-center">
                  <img
                    src={image}
                    alt={title}
                    className="max-w-full max-h-[80vh] object-contain block mx-auto"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  {description && <p className="text-white/80 text-sm mt-1">{description}</p>}
                </div>

                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded shadow hover:scale-105 transition"
                    title={`Open ${title} live site`}
                  >
                    Open Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  liveUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  image: PropTypes.string,
};

ProjectCard.defaultProps = {
  technologies: [],
  liveUrl: null,
  githubUrl: null,
  image: null,
};

export default ProjectCard;
