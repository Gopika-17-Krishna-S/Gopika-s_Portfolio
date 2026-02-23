export default function Footer() {
    return (
        <footer className="footer">
            <span>© {new Date().getFullYear()} Gopika Krishna S. All rights reserved.</span>
            <span style={{ display: 'flex', gap: '1.5rem' }}>
                <a
                    href="https://github.com/Gopika-17-Krishna-S"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/gopikakrishnas17"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                    LinkedIn
                </a>
            </span>
        </footer>
    );
}
