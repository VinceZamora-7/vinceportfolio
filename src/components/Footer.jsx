/**
 * Footer Component
 * Site footer with copyright and links
 */

import PropTypes from 'prop-types';

const Footer = ({ year, name }) => {
  const currentYear = year || new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', href: 'https://github.com' },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: '𝕏', label: 'Twitter', href: 'https://twitter.com' },
    { icon: '💻', label: 'Portfolio', href: '#home' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Top border with gradient */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top section - Brand and tagline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                {name}<span className="text-cyan-400">.</span>
              </h3>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Crafting digital experiences with modern technologies and creative solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-blue-200 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Let's Connect</h4>
            <p className="text-blue-200 text-sm mb-4">
              Have a project in mind? Let's work together!
            </p>
            <a 
              href="#contact"
              className="inline-block px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 transition-all duration-300 text-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent my-12"></div>

        {/* Middle section - Social links */}
        <div className="text-center mb-12">
          <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-6">Follow Me</h4>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg flex items-center justify-center text-2xl hover:bg-cyan-400/20 hover:border-cyan-400/60 transform hover:scale-110 transition-all duration-300"
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent my-12"></div>

        {/* Bottom section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-sm">
            © {currentYear} {name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#home" className="text-blue-300 hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#home" className="text-blue-300 hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    </footer>
  );
};

Footer.propTypes = {
  year: PropTypes.number,
  name: PropTypes.string,
};

Footer.defaultProps = {
  year: new Date().getFullYear(),
  name: 'Vince',
};

export default Footer;
