/**
 * Footer Component
 * Clean footer with brand, quick links, socials, and copyright
 */

import PropTypes from "prop-types"

const Footer = ({ year, name, tagline, quickLinks, socialLinks }) => {
  const currentYear = year ?? new Date().getFullYear()

  const links = quickLinks?.length
    ? quickLinks
    : [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ]

  const socials = socialLinks?.length
    ? socialLinks
    : [
        { label: "GitHub", href: "https://github.com", icon: "🐙" },
        { label: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
        { label: "X", href: "https://twitter.com", icon: "𝕏" },
      ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Subtle top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Subtle background glow (light, not noisy) */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
              aria-label="Back to home"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg">
                <span className="text-lg font-extrabold text-white">
                  {String(name || "V").slice(0, 1).toUpperCase()}
                </span>
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                {name}
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-200/90">
              {tagline}
            </p>
          </div>

                    {/* Connect */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-200/90">
              Let’s connect
            </h4>
            <p className="mt-5 text-sm text-blue-200/90">
              Open to opportunities and collaborations.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                  aria-label={link.label}
                  title={link.label}
                >
                  <span className="text-lg leading-none">{link.icon}</span>
                  <span className="font-semibold">{link.label}</span>
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-cyan-400/20 transition hover:shadow-cyan-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            >
              Get in touch
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-200/90">
              Quick links
            </h4>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-blue-200/90 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-blue-200/80">
            © {currentYear} {name}. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-xs font-semibold text-blue-200/80 transition-colors hover:text-cyan-300 md:text-right"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  year: PropTypes.number,
  name: PropTypes.string,
  tagline: PropTypes.string,
  quickLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ),
}

Footer.defaultProps = {
  year: undefined,
  name: "Vince",
  tagline: "Building modern, reliable digital experiences with clean, maintainable code.",
  quickLinks: [],
  socialLinks: [],
}

export default Footer
