import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const PROJECTS = [
  {
    id: 1,
    title: 'Muzik – MERN Music Streaming Platform',
    desc: 'A full-stack music streaming application that allows users to browse albums, artists, and songs with an interactive user interface. Features include user authentication, dynamic playlists, and seamless music playback.',
    image: '/project-muzik.jpg',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/Ammisettychamu33',
    demo: '#',
    featured: true,
    category: ['All', 'MERN', 'React'],
  },
  {
    id: 2,
    title: 'Clean Street – Civic Issue Reporting App',
    desc: 'A web application that helps citizens report and track civic issues through an easy-to-use interface. Built as part of Infosys Springboard group internship. Focused on UI design and frontend implementation.',
    image: '/project-cleanstreet.jpg',
    tags: ['React.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/Ammisettychamu33',
    demo: '#',
    featured: true,
    note: 'Developed UI design and frontend implementation as part of Infosys Springboard Virtual Internship 6.0',
    category: ['All', 'React', 'Internship'],
  },
  {
    id: 3,
    title: 'Smart Complaint Management System',
    desc: 'A complaint management system designed to submit and manage complaints efficiently. Built with a structured SQL database and clean UI to streamline the complaint lifecycle.',
    image: '/project-complaint.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    github: 'https://github.com/Ammisettychamu33',
    demo: '#',
    featured: false,
    category: ['All', 'JavaScript', 'SQL'],
  },
];

const MINI_PROJECTS = [
  { name: 'Match Game', icon: '🎮', desc: 'Interactive memory game' },
  { name: 'Portfolio Website', icon: '🌐', desc: 'Personal developer portfolio' },
  { name: 'Quiz Application', icon: '🧠', desc: 'Dynamic quiz with scoring' },
  { name: 'Password Generator', icon: '🔐', desc: 'Secure password creation tool' },
  { name: 'Unit Converter', icon: '📐', desc: 'Multi-unit conversion utility' },
];

const FILTER_BUTTONS = ['All', 'MERN', 'React', 'JavaScript'];

// Generate project image backgrounds (since no real images)
const PROJECT_COLORS = [
  'linear-gradient(135deg, #1a0533 0%, #0d1a4d 50%, #001a33 100%)',
  'linear-gradient(135deg, #0a1a0d 0%, #001a33 50%, #0d1a1a 100%)',
  'linear-gradient(135deg, #1a1a0a 0%, #1a0a0a 50%, #0a0a1a 100%)',
];

function ProjectImagePlaceholder({ index, title }) {
  const icons = ['🎵', '🏙️', '📋'];
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: PROJECT_COLORS[index % 3],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
    }}>
      <span style={{ fontSize: '3.5rem' }}>{icons[index % 3]}</span>
      <span style={{
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.4)',
        textAlign: 'center',
        padding: '0 1rem',
        fontWeight: 500,
      }}>{title}</span>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.1);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = PROJECTS.filter(p => p.category.includes(activeFilter));

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="glow-orb glow-orb-purple" style={{ top: '20%', right: '-10%', opacity: 0.12 }} />
      <div className="glow-orb glow-orb-blue" style={{ bottom: '10%', left: '-10%', opacity: 0.1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">🚀 Portfolio</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            A selection of projects I've built — showcasing my skills in full-stack development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {FILTER_BUTTONS.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="project-image-wrapper">
                  <ProjectImagePlaceholder index={i} title={project.title} />
                  <div className="project-overlay" />
                  {project.featured && (
                    <div className="project-featured-badge">⭐ Featured</div>
                  )}
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  {project.note && (
                    <p className="project-note">💡 {project.note}</p>
                  )}
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    <FiGithub size={14} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-primary"
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mini Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="skills-category-label" style={{ marginTop: '3rem' }}>
            <span className="skills-category-title">Additional Projects</span>
            <div className="skills-category-line" />
          </div>

          <div className="mini-projects-grid">
            {MINI_PROJECTS.map((p, i) => (
              <motion.div
                key={p.name}
                className="mini-project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="mini-project-icon">{p.icon}</div>
                <div className="mini-project-name">{p.name}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                  {p.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
