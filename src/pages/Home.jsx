import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gopikaImg from '../assets/gopika.jpeg';
import echoSpaceLogo from '../assets/echospace-logo.jpeg';
import resQLogo from '../assets/logo.jpeg';

/* Simple intersection-observer scroll reveal */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
            { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

const ArrowDown = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
    </svg>
);

export default function Home() {
    const metricsRef = useReveal();
    const introRef = useReveal();
    const workRef = useReveal();

    const scrollToNext = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <>
            {/* Left Sidebar */}
            <aside className="sidebar" aria-hidden="true">
                <span className="vertical-text">Python Full Stack Developer</span>
                <span className="vertical-text">2025</span>
            </aside>

            {/* Hero Section */}
            <section className="hero-section" id="home" aria-label="Hero">
                {/* Left content */}
                <div className="hero-content">
                    {/* Metrics */}
                    <div className="metrics-row reveal" ref={metricsRef} aria-label="Key statistics">
                        {[
                            { value: '2+', label: 'Projects\nBuilt' },
                            { value: '+10', label: 'Languages &\nFrameworks' },
                            { value: '1+', label: 'Years\nExperience' },
                        ].map(m => (
                            <div key={m.label}>
                                <div className="metric-value">{m.value}</div>
                                <div className="metric-label" style={{ whiteSpace: 'pre-line' }}>{m.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Greeting */}
                    <h1 className="hero-title">Hello</h1>

                    {/* Tagline */}
                    <p
                        style={{
                            fontSize: '1.1rem',
                            color: '#52525b',
                            lineHeight: 1.75,
                            maxWidth: '30rem',
                            marginTop: '1.5rem',
                        }}
                    >
                        — I'm <strong style={{ color: '#000' }}>Gopika Krishna S</strong>, a Python Full Stack
                        Developer building scalable, real-world web applications from Ernakulam, Kerala.
                    </p>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-resume"
                        aria-label="View Gopika's Resume"
                    >
                        <span>View Resume</span>
                        <svg className="resume-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    </a>

                    {/* Scroll indicator */}
                    <button
                        className="scroll-indicator"
                        onClick={scrollToNext}
                        aria-label="Scroll down to read more"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                    >
                        <span>Scroll down</span>
                        <ArrowDown />
                    </button>
                </div>

                {/* Right image */}
                <div className="hero-image-col" aria-hidden="true">
                    <div className="hero-image-wrap">
                        <img
                            src={gopikaImg}
                            alt="Gopika Krishna S — Python Full Stack Developer"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>

            {/* Brief intro */}
            <section className="intro-lower reveal" ref={introRef}>
                <div>
                    <p className="section-label">Who am I</p>
                    <h2 className="section-title" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                        Full Stack<br />Developer
                    </h2>
                </div>
                <div>
                    <p style={{ fontSize: '1.05rem', color: '#52525b', lineHeight: 1.85, marginBottom: '2rem' }}>
                        Hi, I'm <strong style={{ color: '#000' }}>Gopika Krishna S</strong> — a motivated Python Full Stack
                        Developer with hands-on experience designing, developing, and deploying scalable web
                        applications using <strong style={{ color: '#000' }}>Python, Django, React.js, FastAPI</strong>,
                        and RESTful APIs. Based in Ernakulam, Kerala, India.
                    </p>
                    <Link
                        to="/about"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: '#10b981',
                            borderBottom: '1.5px solid #10b981',
                            paddingBottom: '2px',
                            transition: 'opacity 0.2s',
                            letterSpacing: '0.01em',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        Read more about me ↗
                    </Link>
                </div>
            </section>

            {/* Featured work */}
            <section className="section reveal" ref={workRef} style={{ borderTop: '1px solid var(--color-border)' }}>
                <div style={{ paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <p className="section-label">Selected work</p>
                    <Link to="/portfolio" style={{ fontSize: '0.8rem', color: '#10b981', borderBottom: '1px solid #10b981', paddingBottom: '2px', fontWeight: 500 }}>
                        View all ↗
                    </Link>
                </div>
                <div className="work-grid">
                    {FEATURED.map(p => (
                        <a
                            className="work-item"
                            key={p.id}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${p.title} on GitHub`}
                            style={{
                                background: p.bg || 'var(--color-hover-bg)',
                                aspectRatio: p.aspectRatio || '4/3'
                            }}
                        >
                            <img
                                src={p.img}
                                alt={p.title}
                                loading="lazy"
                                style={{
                                    objectFit: p.objectFit || 'cover',
                                    objectPosition: p.objectPosition || 'center',
                                }}
                            />
                            <div className="work-overlay">
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="work-tags">
                                    {p.tags.map(t => <span className="work-tag" key={t}>{t}</span>)}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}

const FEATURED = [
    {
        id: 1,
        title: 'resQ Platform',
        desc: 'Real-time disaster management & coordination system with live incident mapping.',
        tags: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Socket.IO', 'Mapbox GL JS'],
        img: resQLogo,
        link: 'https://github.com/Gopika-17-Krishna-S',
        aspectRatio: '1/1',
    },
    {
        id: 2,
        title: 'EchoSpace Chat App',
        desc: 'Privacy-centric anonymous real-time chat with AES-256 encryption.',
        tags: ['Flutter', 'Firebase', 'AES-256', 'NLP'],
        img: echoSpaceLogo,
        link: 'https://github.com/Gopika-17-Krishna-S',
        aspectRatio: '1/1',
        objectFit: 'cover',
        objectPosition: 'center',
    },
];
