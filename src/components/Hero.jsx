import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiMail, FiArrowRight } from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiMongodb, SiJavascript
} from 'react-icons/si';
import '../styles/Hero.css';

const TITLES = [
  'MERN Stack Developer',
  'Full Stack Developer',
  'React.js Developer',
  'Node.js Developer',
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex(i => (i + 1) % TITLES.length);
    }

    setDisplayText(current.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      {/* Background Orbs */}
      <div className="glow-orb glow-orb-purple" style={{ top: '10%', left: '-10%' }} />
      <div className="glow-orb glow-orb-blue" style={{ bottom: '20%', right: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-content">
          {/* Left */}
          <div className="hero-left">
            <motion.div
              className="hero-badge"
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="hero-badge-dot" />
              Open to Work – Full Stack Developer Roles
            </motion.div>

            <motion.p
              className="hero-greeting"
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi there 👋, I'm
            </motion.p>

            <motion.h1
              className="hero-name"
              {...fadeUp}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Chamundeswari
              <span className="hero-name-gradient"> Ammisetty</span>
            </motion.h1>

            <motion.div
              className="hero-title"
              {...fadeUp}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span>{displayText}</span>
              <span className="hero-title-cursor" />
            </motion.div>

            <motion.p
              className="hero-tagline"
              {...fadeUp}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Building scalable and user-friendly web applications using{' '}
              <strong style={{ color: 'var(--primary-light)' }}>React.js</strong>,{' '}
              <strong style={{ color: 'var(--secondary-light)' }}>Node.js</strong>,{' '}
              <strong style={{ color: 'var(--primary-light)' }}>Express.js</strong>, and{' '}
              <strong style={{ color: '#4ade80' }}>MongoDB</strong>.
            </motion.p>

            <motion.div
              className="hero-buttons"
              {...fadeUp}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('contact')}
              >
                <FiMail size={16} />
                Contact Me
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn btn-outline"
              >
                <FiDownload size={16} />
                Download CV
              </a>
              <button
                className="btn btn-ghost"
                onClick={() => scrollTo('projects')}
              >
                View Projects
                <FiArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div
              className="hero-socials"
              {...fadeUp}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <span className="hero-social-label">Find me on</span>
              <a
                href="https://github.com/Ammisettychamu33"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/chamundeswari-ammisetty-371676287"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:ammisettychamundeswari0@gmail.com"
                className="hero-social-link"
                title="Email"
              >
                <FiMail />
              </a>
            </motion.div>
          </div>

          {/* Right – Profile Image */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          >
            <div className="hero-profile-wrapper">
              <div className="hero-profile-ring" />
              <div className="hero-profile-ring-2" />
              <div className="hero-profile-img-container">
                <img
                  src="/profile.jpg"
                  alt="Chamundeswari Ammisetty – MERN Stack Developer"
                  className="hero-profile-img"
                />
              </div>

              {/* Floating Tech Badges */}
              <div className="hero-tech-badge badge-react">
                <SiReact color="#61dafb" size={14} />
                React.js
              </div>
              <div className="hero-tech-badge badge-node">
                <SiNodedotjs color="#68a063" size={14} />
                Node.js
              </div>
              <div className="hero-tech-badge badge-mongo">
                <SiMongodb color="#4db33d" size={14} />
                MongoDB
              </div>
              <div className="hero-tech-badge badge-js">
                <SiJavascript color="#f7df1e" size={14} />
                JavaScript
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  );
}
