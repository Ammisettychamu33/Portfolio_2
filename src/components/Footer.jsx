import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const NAV = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">CA.dev</div>

          {/* Center Nav */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem 1.5rem',
            justifyContent: 'center',
          }}>
            {NAV.map(item => (
              <span
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--primary-light)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/Ammisettychamu33"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chamundeswari-ammisetty-371676287"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:ammisettychamundeswari0@gmail.com"
              className="footer-link"
              title="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-glass)',
          marginTop: '1.5rem',
          paddingTop: '1.5rem',
          textAlign: 'center',
        }}>
          <p className="footer-copy">
            © 2026 <strong style={{ color: 'var(--primary-light)' }}>Chamundeswari Ammisetty</strong> · MERN Stack Developer
          </p>
          <p className="footer-copy" style={{ marginTop: '0.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
            Built with <FiHeart size={12} style={{ color: '#ec4899' }} /> using React.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
