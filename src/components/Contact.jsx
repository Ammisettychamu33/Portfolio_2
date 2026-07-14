import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="section" id="contact" ref={ref} style={{ background: 'rgba(15,15,26,0.5)' }}>
      <div className="bg-dots" />
      <div className="glow-orb glow-orb-purple" style={{ top: '20%', left: '-10%', opacity: 0.15 }} />
      <div className="glow-orb glow-orb-blue" style={{ bottom: '10%', right: '-10%', opacity: 0.1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">📬 Get In Touch</span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            I'm actively looking for Full Stack Developer opportunities. Let's build something great together!
          </p>
        </motion.div>

        <div className="contact-wrapper">
          {/* Left – Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="contact-info-title">Ready to collaborate?</h3>
            <p className="contact-info-desc">
              Whether you have a job opportunity, a project idea, or just want to say hello —
              my inbox is always open. I'll get back to you as soon as possible!
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon"><FiMail /></div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <a
                    href="mailto:ammisettychamundeswari0@gmail.com"
                    className="contact-info-value"
                  >
                    ammisettychamundeswari0@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon"><FiGithub /></div>
                <div>
                  <div className="contact-info-label">GitHub</div>
                  <a
                    href="https://github.com/Ammisettychamu33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-value"
                  >
                    github.com/Ammisettychamu33
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon"><FiLinkedin /></div>
                <div>
                  <div className="contact-info-label">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/chamundeswari-ammisetty-371676287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-value"
                  >
                    chamundeswari-ammisetty
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/Ammisettychamu33"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chamundeswari-ammisetty-371676287"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>

            {/* Availability Banner */}
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem 1.5rem',
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 10px #22c55e',
                flexShrink: 0,
                animation: 'pulse-glow 2s infinite',
              }} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#4ade80' }}>
                  Available for opportunities
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Actively looking for Full Stack Developer roles
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">🎉</div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Message Sent!
                </h3>
                <p>Thanks for reaching out, {formData.name}! I'll get back to you soon.</p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem' }}>
                    Send a Message
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Fill out the form and I'll respond within 24 hours.
                  </p>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    <FiUser size={12} style={{ marginRight: '0.3rem' }} />
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    <FiMail size={12} style={{ marginRight: '0.3rem' }} />
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    <FiMessageSquare size={12} style={{ marginRight: '0.3rem' }} />
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        width: 16, height: 16,
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: 'white',
                        borderRadius: '50%',
                        animation: 'spin-slow 0.8s linear infinite',
                      }} />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
