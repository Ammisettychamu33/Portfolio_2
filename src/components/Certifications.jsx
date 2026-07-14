import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const CERTS = [
  // NxtWave
  { name: 'Node.js Certification', issuer: 'NxtWave', emoji: '🟣', type: 'nxtwave' },
  { name: 'JavaScript Essentials', issuer: 'NxtWave', emoji: '🟣', type: 'nxtwave' },
  { name: 'Responsive Web Design', issuer: 'NxtWave', emoji: '🟣', type: 'nxtwave' },
  { name: 'Database Fundamentals', issuer: 'NxtWave', emoji: '🟣', type: 'nxtwave' },
  // Infosys
  { name: 'NodeJS Essentials', issuer: 'Infosys Springboard', emoji: '🔵', type: 'infosys' },
  { name: 'MongoDB Certification', issuer: 'Infosys Springboard', emoji: '🔵', type: 'infosys' },
  { name: 'TypeScript Certification', issuer: 'Infosys Springboard', emoji: '🔵', type: 'infosys' },
  { name: 'Angular Intermediate', issuer: 'Infosys Springboard', emoji: '🔵', type: 'infosys' },
  { name: 'Python Foundation', issuer: 'Infosys Springboard', emoji: '🔵', type: 'infosys' },
  // GeeksforGeeks
  { name: 'Full Stack Web Development', issuer: 'GeeksforGeeks SkillUp', emoji: '🟢', type: 'gfg' },
  // HackerRank
  { name: 'SQL Basic', issuer: 'HackerRank', emoji: '🟡', type: 'hackerrank' },
  // AWS
  { name: 'AWS Cloud Computing', issuer: 'APSSDC', emoji: '🟠', type: 'aws' },
];

const CERT_ICONS = {
  nxtwave: '⚡',
  infosys: '🏢',
  gfg: '💻',
  hackerrank: '🏆',
  aws: '☁️',
};

export default function Certifications() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="section" id="certifications" ref={ref} style={{ background: 'rgba(15,15,26,0.5)' }}>
      <div className="bg-dots" />
      <div className="glow-orb glow-orb-purple" style={{ bottom: '20%', right: '-10%', opacity: 0.12 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">🏅 Certifications</span>
          <h2 className="section-title">Licenses &amp; <span>Certifications</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Industry-recognized certifications validating my technical skills.
          </p>
        </motion.div>

        <div className="cert-grid">
          {CERTS.map((cert, i) => (
            <motion.div
              key={`${cert.name}-${i}`}
              className="cert-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <div className={`cert-icon ${cert.type}`}>
                {CERT_ICONS[cert.type]}
              </div>
              <div className="cert-content">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Count summary */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { label: 'Total Certifications', count: CERTS.length },
            { label: 'Platforms', count: 5 },
            { label: 'Technologies Covered', count: '10+' },
          ].map(item => (
            <div
              key={item.label}
              style={{
                textAlign: 'center',
                padding: '1.5rem 2rem',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                borderRadius: 'var(--radius-lg)',
                minWidth: '160px',
              }}
            >
              <div style={{
                fontSize: '2rem',
                fontWeight: 800,
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {item.count}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
