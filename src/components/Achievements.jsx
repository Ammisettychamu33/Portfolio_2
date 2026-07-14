import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const ACHIEVEMENTS = [
  {
    icon: '🔥',
    title: '30 Days of Code Challenge',
    desc: 'Successfully completed the 30 Days of Code challenge, demonstrating consistent problem-solving skills and commitment to daily coding practice.',
    gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
  },
  {
    icon: '🚀',
    title: 'Multiple Full-Stack Applications Built',
    desc: 'Designed and developed multiple full-stack and frontend web applications, including a MERN music streaming platform and a civic issue reporting system.',
    gradient: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
  },
  {
    icon: '📚',
    title: 'Technical Conference Presentation',
    desc: 'Presented research work in technical conferences, demonstrating strong communication skills and the ability to convey complex technical concepts.',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  },
  {
    icon: '🏅',
    title: '12 Industry Certifications',
    desc: 'Earned 12 certifications across platforms including NxtWave, Infosys Springboard, GeeksforGeeks, HackerRank, and APSSDC, validating diverse technical skills.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  {
    icon: '💡',
    title: 'Infosys Springboard Internship',
    desc: 'Selected for the prestigious Infosys Springboard Virtual Internship 6.0, contributing to a real-world civic tech project as a Frontend Developer & UI Designer.',
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
  },
  {
    icon: '⭐',
    title: '8.19 CGPA Academic Excellence',
    desc: 'Maintaining a strong CGPA of 8.19 in Computer Science Engineering at Narasaraopeta Engineering College, balancing academics with hands-on project development.',
    gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
  },
];

export default function Achievements() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="section" id="achievements" ref={ref}>
      <div className="glow-orb glow-orb-blue" style={{ top: '20%', left: '-10%', opacity: 0.1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">🌟 Achievements</span>
          <h2 className="section-title">Milestones &amp; <span>Achievements</span></h2>
          <div className="divider" />
        </motion.div>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.title}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="achievement-icon-wrap"
                style={{ background: item.gradient }}
              >
                {item.icon}
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
