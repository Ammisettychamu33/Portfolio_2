import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Education', href: 'education' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Contact', href: 'contact' },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'achievements', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a
            className="navbar-logo"
            onClick={() => scrollToSection('hero')}
            style={{ cursor: 'pointer' }}
          >
            CA<span>.dev</span>
          </a>

          <ul className="navbar-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <span
                  className={`navbar-link ${activeSection === link.href ? 'active' : ''}`}
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary"
              style={{ fontSize: '0.82rem', padding: '0.55rem 1.2rem' }}
            >
              <FiDownload size={14} />
              Resume
            </a>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <button
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
              onClick={() => setMenuOpen(false)}
            >
              <FiX />
            </button>

            <ul className="mobile-menu-links">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <span
                    className="mobile-menu-link"
                    onClick={() => {
                      scrollToSection(link.href);
                      setMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="https://github.com/Ammisettychamu33" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <FiGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/chamundeswari-ammisetty-371676287" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <FiLinkedin /> LinkedIn
              </a>
              <a href="/resume.pdf" download className="btn btn-primary">
                <FiDownload /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
