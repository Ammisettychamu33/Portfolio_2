import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const EXPERIENCES = [
  {
    id: 1,
    company: 'Infosys Springboard Virtual Internship 6.0',
    role: 'Frontend Developer & UI Designer',
    project: 'Project: Clean Street – Civic Issue Reporting Application',
    duration: '2024',
    responsibilities: [
      'Designed user interfaces using modern UI/UX principles',
      'Developed responsive frontend components using React.js',
      'Integrated frontend with REST APIs for data handling',
      'Collaborated with a team to deliver a fully functional web application',
      'Participated in group discussions and code reviews',
    ],
    badge: 'Internship',
    color: '#3b82f6',
  },
  {
    id: 2,
    company: 'Elewayte Web Development Internship',
    role: 'Web Development Intern',
    project: 'Web application development',
    duration: 'June 2024 – July 2024',
    responsibilities: [
      'Built and maintained web pages using HTML, CSS, and JavaScript',
      'Developed responsive layouts for various screen sizes',
      'Collaborated with the development team on project tasks',
    ],
    badge: 'Internship',
    color: '#7c3aed',
  },
  {
    id: 3,
    company: 'OctaNet Python Internship',
    role: 'Python Intern',
    project: 'Python development & scripting',
    duration: 'April 2024 – May 2024',
    responsibilities: [
      'Developed Python scripts for automation and data handling',
      'Worked on practical Python projects to strengthen core skills',
      'Learned and applied object-oriented programming concepts',
    ],
    badge: 'Internship',
    color: '#f59e0b',
  },
];

export default function Experience() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="section" id="experience" ref={ref} style={{ background: 'rgba(15,15,26,0.5)' }}>
      <div className="bg-dots" />
      <div className="glow-orb glow-orb-purple" style={{ top: '30%', right: '-5%', opacity: 0.12 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">💼 Experience</span>
          <h2 className="section-title">Internship <span>Experience</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Hands-on professional experience gained through industry internships.
          </p>
        </motion.div>

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="timeline-dot" style={{ boxShadow: `0 0 15px ${exp.color}80` }} />

              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-project">{exp.project}</div>

                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri}>{r}</li>
                  ))}
                </ul>

                <div style={{ marginTop: '1rem' }}>
                  <span className="tag">{exp.badge}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
