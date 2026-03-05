import { Link } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-brand">
                <strong>Gopika Krishna S</strong>
                <span>Python Full Stack Developer · Ernakulam, Kerala</span>
            </div>

            <nav aria-label="Footer navigation" style={{ display: 'flex', gap: '2rem' }}>
                <Link to="/about" style={{ color: 'inherit', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = ''}>
                    About
                </Link>
                <Link to="/portfolio" style={{ color: 'inherit', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = ''}>
                    Projects
                </Link>
                <Link to="/contact" style={{ color: 'inherit', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = ''}>
                    Contact
                </Link>
            </nav>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                <span style={{ display: 'flex', gap: '1.5rem' }}>
                    <a
                        href="https://github.com/Gopika-17-Krishna-S"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                        onMouseLeave={e => e.currentTarget.style.color = ''}
                    >
                        GitHub ↗
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gopikakrishnas17"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                        onMouseLeave={e => e.currentTarget.style.color = ''}
                    >
                        LinkedIn ↗
                    </a>
                </span>
                <span>© {year} · All rights reserved.</span>
            </div>
        </footer>
    );
}
