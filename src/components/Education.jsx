import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function Education() {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="section" id="education" ref={ref}>
      <div className="glow-orb glow-orb-blue" style={{ top: '30%', left: '-10%', opacity: 0.1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">🎓 Education</span>
          <h2 className="section-title">Academic <span>Background</span></h2>
          <div className="divider" />
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="education-card-bg" />

          <div className="education-icon">🎓</div>

          <div className="education-degree">Bachelor of Technology (B.Tech)</div>
          <div className="education-field">Computer Science Engineering</div>
          <div className="education-college">
            Narasaraopeta Engineering College (Autonomous)<br />
            Narasaraopeta, Andhra Pradesh, India
          </div>

          <div className="education-meta">
            <div className="education-meta-item">
              <span>📊 CGPA</span>
              <strong>8.19 / 10</strong>
            </div>
            <div className="education-meta-item">
              <span>📅 Expected Graduation</span>
              <strong>2026</strong>
            </div>
            <div className="education-meta-item">
              <span>📚 Specialization</span>
              <strong>Full Stack Development</strong>
            </div>
          </div>

          {/* Course highlights */}
          <div style={{ marginTop: '1.5rem' }}>
            <div className="skills-category-label" style={{ marginBottom: '0.75rem' }}>
              <span className="skills-category-title" style={{ fontSize: '0.75rem' }}>Key Areas of Study</span>
              <div className="skills-category-line" />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                'Data Structures & Algorithms',
                'Web Technologies',
                'Database Management Systems',
                'Operating Systems',
                'Computer Networks',
                'Software Engineering',
                'Object-Oriented Programming',
              ].map(course => (
                <span key={course} className="tag">{course}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
