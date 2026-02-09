/**
 * Header/Navigation Component
 * Main navigation bar for the portfolio
 */

import PropTypes from 'prop-types';
import { useState } from 'react';

const Header = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 shadow-2xl border-b border-blue-700/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Vince
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <ul className="flex gap-8">
            {navItems?.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className="relative text-white font-medium text-sm uppercase tracking-wider hover:text-cyan-400 transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 transition-all duration-300 text-sm uppercase tracking-wider"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-800/95 backdrop-blur border-t border-blue-700/30 py-4 px-6">
          <nav>
            <ul className="flex flex-col gap-4">
              {navItems?.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href}
                    className="text-white font-medium text-sm uppercase tracking-wider hover:text-cyan-400 transition-colors duration-300 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-blue-700/30">
                <a 
                  href="#contact"
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg text-center text-sm uppercase tracking-wider hover:shadow-lg transition-all duration-300 block"
                  onClick={() => setIsOpen(false)}
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

Header.defaultProps = {
  navItems: [],
};

export default Header;
