import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  FiCode, FiDatabase, FiServer, FiLayout, FiShield, FiBook
} from 'react-icons/fi';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const HIGHLIGHTS = [
  { icon: <FiCode />, label: 'Frontend Dev', desc: 'React.js, HTML5, CSS3, TypeScript' },
  { icon: <FiServer />, label: 'Backend Dev', desc: 'Node.js, Express.js, REST APIs' },
  { icon: <FiDatabase />, label: 'Databases', desc: 'MongoDB, SQL' },
  { icon: <FiShield />, label: 'Auth & Security', desc: 'JWT Authentication' },
  { icon: <FiLayout />, label: 'UI/UX Design', desc: 'Responsive, Mobile-first' },
  { icon: <FiBook />, label: 'Continuous Learning', desc: 'Always upskilling' },
];

const MINI_SKILLS = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs',
];

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section className="section" id="about" ref={ref}>
      {/* Background */}
      <div className="glow-orb glow-orb-blue" style={{ top: '50%', right: '-15%', opacity: 0.15 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">👩‍💻 About Me</span>
          <h2 className="section-title">Who <span>I Am</span></h2>
          <div className="divider" />
        </motion.div>

        <div className="about-grid">
          {/* Left - Image */}
          <motion.div
            className="about-image-side"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="about-image-box">
              <div className="about-image-overlay" />
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Profile"
                className="hero-profile-img"
              />
            </div>

            {/* Floating cards */}
            <div className="about-exp-card">
              <div className="about-exp-number">8.19</div>
              <div className="about-exp-label">CGPA · B.Tech CSE</div>
            </div>

            <div className="about-skills-mini">
              {MINI_SKILLS.map(s => (
                <div key={s} className="about-mini-skill">
                  <div className="about-mini-skill-dot" />
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="about-text-side"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <p className="about-intro">
              I am a <strong>Computer Science Engineering</strong> student passionate about{' '}
              <strong>Full Stack Development</strong> and building real-world applications using
              modern web technologies. I specialize in the <strong>MERN Stack</strong> and enjoy
              crafting seamless digital experiences — from intuitive UIs to robust server-side logic.
            </p>
            <p className="about-intro">
              I thrive on <strong>problem-solving</strong>, continuously exploring new technologies,
              and transforming complex requirements into clean, maintainable code. Whether it's
              designing REST APIs, managing databases, or building pixel-perfect frontend components,
              I bring dedication and attention to detail to every project.
            </p>

            <div className="about-highlights">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="about-highlight-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <div className="about-highlight-icon">{item.icon}</div>
                  <div className="about-highlight-text">
                    <strong>{item.label}</strong>
                    <span>{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" download className="btn btn-primary">
                <FiDownload size={16} />
                Download Resume
              </a>
              <button
                className="btn btn-outline"
                onClick={() => scrollTo('contact')}
              >
                Let's Connect
                <FiArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
