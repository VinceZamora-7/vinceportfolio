/**
 * Hero Section Component
 * Main landing section with introduction and profile image
 */

import PropTypes from "prop-types"

const Hero = ({ title, subtitle, ctaText, ctaLink, profileImage }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950" />

      {/* Soft blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-400 blur-3xl animate-pulse" />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative bits (kept, but toned down on mobile) */}
      <div className="pointer-events-none absolute top-20 right-20 hidden md:block h-24 w-24 rotate-[-12deg] rounded-2xl bg-blue-600/10" />
      <div className="pointer-events-none absolute bottom-32 left-20 hidden md:block h-32 w-32 rounded-full border-4 border-blue-500/10" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 hidden lg:block h-16 w-16 rounded-full bg-cyan-500/10" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-2">
                <span className="text-sm font-semibold text-blue-100">🚀 Portfolio</span>
                <span className="text-xs text-blue-200/80">Building modern, reliable experiences</span>
              </div>

              {/* Heading */}
              <h1
                id="hero-title"
                className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
              >
                Hi, I’m <span className="text-cyan-300">{title}</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100/90 md:text-xl">
                {subtitle}
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={ctaLink}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-center text-base font-bold text-blue-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
                >
                  {ctaText}
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-blue-300/70 bg-white/0 px-8 py-4 text-center text-base font-bold text-white/95 transition hover:-translate-y-0.5 hover:bg-blue-700/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
                >
                  Learn More
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 flex flex-wrap gap-8">
                <div className="border-b-2 border-cyan-300/70 pb-2">
                  <p className="text-3xl font-extrabold text-white">5+</p>
                  <p className="text-sm text-blue-200/90">Projects</p>
                </div>
                <div className="border-b-2 border-cyan-300/70 pb-2">
                  <p className="text-3xl font-extrabold text-white">3+</p>
                  <p className="text-sm text-blue-200/90">Years</p>
                </div>
              </div>

              {/* Mobile scroll hint */}
              <div className="mt-10 flex items-center gap-2 text-blue-200 lg:hidden">
                <span className="text-sm">Scroll to explore</span>
                <svg
                  className="h-5 w-5 animate-bounce text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Right */}
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto w-72 lg:w-96">
                {/* Glow blobs */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-3xl bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-20 blur-3xl" />

                {/* Frame (make this the "group" so hover affects glow + image) */}
                <div className="group relative overflow-hidden rounded-3xl border-4 border-cyan-400/40 shadow-2xl transition hover:shadow-cyan-400/30">
                  <div className="relative h-96 w-full lg:h-[500px]">
                    {profileImage ? (
                      <img
                        src="assets/images/HeroImage.png"
                        alt="AnimatedProfile"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="eager"
                        decoding="async"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
                        <div className="text-center">
                          <svg
                            className="mx-auto mb-4 h-20 w-20 text-cyan-300/40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                          <p className="text-blue-200/90">Add your image</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover glow border */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-transparent transition group-hover:ring-cyan-300/50" />
                </div>

                {/* Floating accent cards */}
                <div className="pointer-events-none absolute -top-6 -right-6 grid h-20 w-20 place-items-center rounded-2xl border border-cyan-400/25 bg-white/10 backdrop-blur-sm shadow-lg">
                  <span className="text-2xl">💻</span>
                </div>
                <div className="pointer-events-none absolute -bottom-6 -left-6 grid h-20 w-20 place-items-center rounded-2xl border border-cyan-400/25 bg-white/10 backdrop-blur-sm shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop scroll hint */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
        <span className="text-sm text-blue-200">Scroll to explore</span>
        <svg className="h-5 w-5 animate-bounce text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  profileImage: PropTypes.string,
}

Hero.defaultProps = {
  title: "Vince",
  subtitle: "Building fast, accessible, and maintainable applications across modern stacks.",
  ctaText: "View My Work",
  ctaLink: "#projects",
  // ✅ Vite tip: place HeroImage.png in /public and reference it like this:
  profileImage: "assets/images/HeroImage.png",
}

export default Hero
