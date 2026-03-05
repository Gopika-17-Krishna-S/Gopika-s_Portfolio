import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Logo = () => (
    <svg viewBox="0 0 32 32" fill="none" className="logo" aria-label="Gopika Krishna S Portfolio">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 22 L16 10 L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    const navLinks = [
        { to: '/about', label: 'About' },
        { to: '/portfolio', label: 'Projects' },
        { to: '/tech-stack', label: 'Tech Stack' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <header className={`header${scrolled ? ' scrolled' : ''}`}>
                <div className="header-left">
                    <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Home">
                        <Logo />
                    </Link>
                    <nav className="nav" aria-label="Main navigation">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
                    {/* Open-to-work badge — hidden on small screens */}
                    <span
                        className="availability-status"
                        style={{ fontSize:'0.7rem', padding:'0.3rem 0.7rem', display: 'flex' }}
                        title="Open to full-stack & backend roles"
                    >
                        <span className="pulse-dot" />
                        Open to work
                    </span>

                    <a className="cta-link" href="mailto:gopikakrishnas173@gmail.com" aria-label="Hire Gopika Krishna S">
                        Hire me ↗
                    </a>
                </div>

                <button
                    className="hamburger"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(m => !m)}
                >
                    <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
                    <span style={{ opacity: menuOpen ? 0 : 1 }} />
                    <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
                </button>
            </header>

            {/* Mobile full-screen nav */}
            <div className={`mobile-nav${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile menu">
                {navLinks.map(link => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </NavLink>
                ))}
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                    Resume ↗
                </a>
                <a href="mailto:gopikakrishnas173@gmail.com" onClick={() => setMenuOpen(false)}>
                    Hire Me ↗
                </a>
            </div>
        </>
    );
}
