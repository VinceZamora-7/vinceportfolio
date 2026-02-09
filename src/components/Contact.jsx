/**
 * Contact Section Component
 * Contact form and information
 */

import PropTypes from "prop-types"
import { useMemo } from "react"
import { useFormHandler } from "../hooks"

const Contact = ({ email, phone, socialLinks }) => {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useFormHandler(async (data) => {
      // Integration point for email service (SendGrid, Netlify Forms, etc.)
      console.log("Form submitted:", data)
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    })

  const hasSocial = useMemo(() => Array.isArray(socialLinks) && socialLinks.length > 0, [socialLinks])

  const fieldClass =
    "w-full px-4 py-3 border rounded-lg bg-white/70 text-slate-900 placeholder:text-slate-400 shadow-sm " +
    "border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100"
      aria-labelledby="contact-title"
    >
      {/* Decorative blobs/icons */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute top-12 left-10 grid h-14 w-14 place-items-center rounded-full bg-blue-500/10 text-2xl text-blue-700">
        ✉️
      </div>
      <div className="pointer-events-none absolute bottom-12 right-10 grid h-16 w-16 place-items-center rounded-full bg-cyan-400/10 text-3xl text-cyan-600">
        📞
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <h2 id="contact-title" className="text-3xl font-extrabold tracking-tight text-slate-900">
            Let’s build something together
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Send a message or reach out directly — I usually reply within 24–48 hours.
          </p>
        </header>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-xl backdrop-blur">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
            {/* Left: Contact Info */}
            <div className="p-8 sm:p-10">
              <h3 className="text-xl font-bold text-slate-900">Contact info</h3>
              <p className="mt-2 text-slate-600">
                Prefer email or phone? Choose what’s easiest for you.
              </p>

              <div className="mt-8 space-y-6">
                {email && (
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="mt-1 inline-flex text-lg font-semibold text-blue-700 hover:text-blue-800"
                    >
                      {email}
                    </a>
                  </div>
                )}

                {phone && (
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Phone</p>
                    <a
                      href={`tel:${phone}`}
                      className="mt-1 inline-flex text-lg font-semibold text-blue-700 hover:text-blue-800"
                    >
                      {phone}
                    </a>
                  </div>
                )}

                {hasSocial && (
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Follow</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {socialLinks.map((link) => (
                        <a
                          key={`${link.platform}-${link.url}`}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                          aria-label={link.platform}
                          title={link.platform}
                        >
                          <span className="text-xl leading-none">{link.icon}</span>
                          <span className="text-sm font-semibold">{link.platform}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-10 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Tip:</span> Include your goal + timeline and I’ll reply
                faster.
              </div>
            </div>

              {/* Divider */}
  <div className="relative">
    {/* Mobile: horizontal divider */}
    <div className="flex items-center gap-3 px-8 py-6 lg:hidden">
      <span className="h-px flex-1 bg-slate-200" />
      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">
        or
      </span>
      <span className="h-px flex-1 bg-slate-200" />
    </div>

    {/* Desktop: vertical divider */}
    <div className="relative hidden h-full w-16 lg:flex items-center justify-center">
      <span className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-slate-200" />
      <span className="relative z-10 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">
        or
      </span>
    </div>
  </div>

            {/* Right: Form */}
            <div className="border-t border-white/60 p-8 sm:p-10 lg:border-t-0 lg:border-l">
              <h3 className="text-xl font-bold text-slate-900">Send a message</h3>
              <p className="mt-2 text-slate-600">Fill this out and I’ll get back to you.</p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit} aria-busy={isSubmitting}>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message || ""}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="Tell me what you’re building…"
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit error */}
                {errors.submit && (
                  <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {errors.submit}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-base font-bold text-white shadow-md transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <p className="text-center text-xs text-slate-500">
                  By sending this, you agree to be contacted back about your message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Contact.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired, // ✅ ReactNode instead of string
    })
  ),
}

Contact.defaultProps = {
  email: null,
  phone: null,
  socialLinks: [],
}

export default Contact
