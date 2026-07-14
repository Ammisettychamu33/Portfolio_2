import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTypescript, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiGithub,
  SiPostman
} from 'react-icons/si';
import { FiShield, FiMonitor, FiCode } from 'react-icons/fi';

const CATEGORIES = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 color="#e34f26" />, color: '#e34f26' },
      { name: 'CSS3', icon: <SiCss color="#1572b6" />, color: '#1572b6' },
      { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" />, color: '#f7df1e' },
      { name: 'React.js', icon: <SiReact color="#61dafb" />, color: '#61dafb' },
      { name: 'TypeScript', icon: <SiTypescript color="#3178c6" />, color: '#3178c6' },
      { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" />, color: '#7952b3' },
    ]
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#68a063" />, color: '#68a063' },
      { name: 'Express.js', icon: <SiExpress color="#f1f5f9" />, color: '#f1f5f9' },
      { name: 'REST APIs', icon: <span style={{ color: '#f59e0b', fontSize: '1.5rem', fontWeight: '800' }}>API</span>, color: '#f59e0b' },
    ]
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb color="#4db33d" />, color: '#4db33d' },
      { name: 'SQL', icon: <SiMysql color="#4479a1" />, color: '#4479a1' },
    ]
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <SiGit color="#f05032" />, color: '#f05032' },
      { name: 'GitHub', icon: <SiGithub color="#f1f5f9" />, color: '#f1f5f9' },
      { name: 'VS Code', icon: <FiCode color="#007acc" />, color: '#007acc' },
      { name: 'Postman', icon: <SiPostman color="#ff6c37" />, color: '#ff6c37' },
    ]
  },
  {
    label: 'Other Skills',
    skills: [
      { name: 'JWT Auth', icon: <FiShield color="#a78bfa" />, color: '#a78bfa' },
      { name: 'Responsive Design', icon: <FiMonitor color="#34d399" />, color: '#34d399' },
    ]
  },
];

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="section" id="skills" ref={ref} style={{ background: 'rgba(15,15,26,0.5)' }}>
      <div className="bg-dots" />
      <div className="glow-orb glow-orb-purple" style={{ bottom: '0%', left: '-10%', opacity: 0.12 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">⚡ Tech Stack</span>
          <h2 className="section-title">Skills &amp; <span>Technologies</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            A curated set of technologies I work with to build scalable, modern web applications.
          </p>
        </motion.div>

        <div className="skills-categories">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
            >
              <div className="skills-category-label">
                <span className="skills-category-title">{cat.label}</span>
                <div className="skills-category-line" />
              </div>

              <div className="skills-grid">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.1 + si * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
