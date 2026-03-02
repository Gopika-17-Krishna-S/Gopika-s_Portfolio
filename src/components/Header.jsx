import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Logo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="logo" aria-label="Gopika Krishna S Portfolio">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
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
        { to: '/about', label: 'About Me' },
        { to: '/portfolio', label: 'Portfolio' },
        { to: '/tech-stack', label: 'Tech Stack' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <header className={`header${scrolled ? ' scrolled' : ''}`}>
                <div className="header-left">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
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
                <a className="cta-link" href="mailto:gopikakrishnas173@gmail.com">
                    Book A Call <span>↗</span>
                </a>
                <button
                    className="hamburger"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(m => !m)}
                >
                    <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
                    <span style={{ opacity: menuOpen ? 0 : 1 }} />
                    <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
                </button>
            </header>

            {/* Mobile full-screen nav */}
            <div className={`mobile-nav${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
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
                    Book A Call ↗
                </a>
            </div>
        </>
    );
}
