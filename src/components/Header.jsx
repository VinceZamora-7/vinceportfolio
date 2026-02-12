/**
 * Header/Navigation Component
 * Main navigation bar for the portfolio
 */

import PropTypes from "prop-types"
import { useEffect, useId, useMemo, useState } from "react"

const Header = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false)
  const mobileNavId = useId()

  const items = useMemo(() => (Array.isArray(navItems) ? navItems : []), [navItems])

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen((v) => !v)

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) closeMenu()
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Optional: prevent background scroll when mobile menu open
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  const NavLinks = ({ onClick, className = "" }) => (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            onClick={onClick}
            className="group relative inline-flex py-2 text-sm font-medium uppercase tracking-wider text-white/90 transition-colors hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 rounded"
          >
            {item.label}
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300 group-hover:w-full" />
          </a>
        </li>
      ))}
    </ul>
  )

  NavLinks.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blue-700/30 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
          aria-label="Go to top"
        >
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg">
            {/* Fixed JSX-safe SVG */}
            <svg
              viewBox="0 0 360 360"
              className="h-8 w-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {/* Prism visor gradient: cyan → violet → pink */}
                <linearGradient
                  id="prism"
                  x1="140"
                  y1="112"
                  x2="240"
                  y2="146"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#22D3EE" />
                  <stop offset="0.5" stopColor="#A78BFA" />
                  <stop offset="1" stopColor="#FB7185" />
                </linearGradient>

                {/* Soft accent gradient for tile highlight */}
                <linearGradient id="tileAccent" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#eaf0fa" />
                  <stop offset="1" stopColor="#c8daf2" />
                </linearGradient>
              </defs>

              {/* Floating UI tiles */}
              <g
                stroke="#102b5a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              >
                <rect x="62" y="82" width="34" height="24" rx="8" fill="url(#tileAccent)" />
                <rect x="270" y="76" width="40" height="28" rx="10" fill="url(#tileAccent)" />
                <rect x="40" y="188" width="46" height="30" rx="10" fill="url(#tileAccent)" />
                <rect x="272" y="206" width="34" height="24" rx="8" fill="url(#tileAccent)" />
              </g>

              {/* Character */}
              <g stroke="#071127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Hood */}
                <path
                  d="M120 130c8-34 32-58 60-58s52 24 60 58v44c0 38-28 72-60 72s-60-34-60-72v-44z"
                  fill="#3c6fc7"
                />
                {/* Head */}
                <rect x="132" y="82" width="96" height="92" rx="34" fill="#1e4fa3" />
                {/* Visor */}
                <path
                  d="M150 120c10-12 28-20 42-20s32 8 42 20c-10 14-28 22-42 22s-32-8-42-22z"
                  fill="url(#prism)"
                />
                {/* Torso */}
                <path
                  d="M120 172c20 8 40 14 60 14s40-6 60-14l18 74c-24 18-52 28-78 28s-54-10-78-28l18-74z"
                  fill="#153a7a"
                />
                {/* Badge */}
                <rect x="166" y="206" width="28" height="18" rx="7" fill="#eaf0fa" />
              </g>

              {/* Subtle orbit line */}
              <path
                d="M72 160c36-46 88-70 138-70s102 24 138 70"
                stroke="#153a7a"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.18"
              />
            </svg>
          </div>

          <h1 className="text-xl font-extrabold tracking-tight text-white">
            Vince
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12" aria-label="Primary">
          <NavLinks className="flex items-center gap-8" />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-400/20 transition hover:shadow-cyan-400/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls={mobileNavId}
        >
          <span className="sr-only">Open navigation</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay + panel */}
      {isOpen && (
        <>
          {/* Overlay */}
          <button
            type="button"
            onClick={closeMenu}
            className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            aria-label="Close menu"
          />

          {/* Panel */}
          <div
            id={mobileNavId}
            className="md:hidden relative z-50 border-t border-blue-700/30 bg-blue-950/95 backdrop-blur px-6 py-5"
          >
            <nav aria-label="Mobile">
              <NavLinks onClick={closeMenu} className="flex flex-col gap-2" />

              <div className="mt-5 border-t border-blue-700/30 pt-5">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block w-full rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-400/20 transition hover:shadow-cyan-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                >
                  Get In Touch
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
}

Header.defaultProps = {
  navItems: [],
}

export default Header
