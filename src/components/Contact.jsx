/**
 * Contact Section Component
 * Contact form and information
 */

import PropTypes from 'prop-types';
import { useFormHandler } from '../hooks';

const Contact = ({ email, phone, socialLinks }) => {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useFormHandler(
    async (data) => {
      // Integration point for email service (SendGrid, Netlify Forms, etc.)
      console.log('Form submitted:', data);
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    }
  );

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            {email && (
              <div>
                <span className="font-bold text-gray-900 block mb-2">Email:</span>
                <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                  {email}
                </a>
              </div>
            )}
            {phone && (
              <div>
                <span className="font-bold text-gray-900 block mb-2">Phone:</span>
                <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                  {phone}
                </a>
              </div>
            )}
            {socialLinks && socialLinks.length > 0 && (
              <div>
                <span className="font-bold text-gray-900 block mb-4">Follow Me:</span>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl hover:scale-110 transition-transform"
                      aria-label={link.platform}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your name"
              />
              {errors.name && <span className="text-red-600 text-sm mt-1 block">{errors.name}</span>}
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="your.email@example.com"
              />
              {errors.email && <span className="text-red-600 text-sm mt-1 block">{errors.email}</span>}
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your message"
                rows="5"
              />
              {errors.message && <span className="text-red-600 text-sm mt-1 block">{errors.message}</span>}
            </div>

            {errors.submit && (
              <div className="p-4 bg-red-100 text-red-700 rounded">
                {errors.submit}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
};

Contact.defaultProps = {
  email: null,
  phone: null,
  socialLinks: [],
};

export default Contact;
