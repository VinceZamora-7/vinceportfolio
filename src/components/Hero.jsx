/**
 * Hero Section Component
 * Main landing section with introduction and profile image
 */

import PropTypes from 'prop-types';

const Hero = ({ title, subtitle, ctaText, ctaLink, profileImage }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950"></div>
      
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* 3D-like grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-blue-600 rounded-lg opacity-10 transform -rotate-45"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 border-4 border-blue-500 rounded-full opacity-5"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan-500 rounded-full opacity-15"></div>
      
      {/* Floating cards decoration */}
      <div className="absolute top-1/4 left-10 w-20 h-28 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"></div>
      <div className="absolute bottom-1/3 right-16 w-24 h-32 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500"></div>

      {/* Main content container */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Text Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-block mb-8 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
                <span className="text-blue-200 text-sm font-semibold">🚀 Welcome to My Portfolio</span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm <br/>
                {title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed">
                {subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href={ctaLink} 
                  className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg text-center"
                >
                  {ctaText}
                </a>
                <a 
                  href="#about" 
                  className="px-8 py-4 border-2 border-blue-300 text-white font-bold rounded-lg hover:bg-blue-700/30 transform hover:-translate-y-1 transition-all duration-300 text-lg text-center"
                >
                  Learn More
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div className="border-b-2 border-cyan-400 pb-2">
                  <p className="text-3xl font-bold text-white">5+</p>
                  <p className="text-blue-200 text-sm">Projects</p>
                </div>
                <div className="border-b-2 border-cyan-400 pb-2">
                  <p className="text-3xl font-bold text-white">3+</p>
                  <p className="text-blue-200 text-sm">Years Exp.</p>
                </div>
                {/* <div className="border-b-2 border-cyan-400 pb-2">
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-blue-200 text-sm">Dedicated</p>
                </div> */}
              </div>
            </div>

            {/* Right side - Image and Graphic Design */}
            <div className="order-1 lg:order-2 relative">
              {/* Main profile image container */}
              <div className="relative mx-auto w-72 h-96 lg:w-96 lg:h-[500px]">
                {/* Decorative background shapes */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-3xl opacity-20 blur-3xl"></div>

                {/* Image frame with border */}
                <div className="relative w-full h-full rounded-3xl border-4 border-cyan-400/50 overflow-hidden shadow-2xl hover:shadow-cyan-400/50 transition-shadow duration-300 group">
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-24 h-24 text-cyan-400/50 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        <p className="text-blue-200">Add your image</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">💻</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🚀</span>
                </div>

                {/* Animated border glow effect */}
                <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              {/* Scroll indicator */}
              <div className="flex justify-center items-center gap-2 mt-12 lg:hidden">
                <span className="text-blue-200 text-sm">Scroll to explore</span>
                <svg 
                  className="w-5 h-5 text-blue-400 animate-bounce" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator - Desktop */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex items-center gap-2">
        <span className="text-blue-200 text-sm">Scroll to explore</span>
        <svg 
          className="w-5 h-5 text-blue-400 animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  profileImage: PropTypes.string,
};

Hero.defaultProps = {
  title: 'Welcome to My Portfolio',
  subtitle: 'Full Stack Developer | Problem Solver | Creative Thinker',
  ctaText: 'View My Work',
  ctaLink: '#projects',
  profileImage: null,
};

export default Hero;
