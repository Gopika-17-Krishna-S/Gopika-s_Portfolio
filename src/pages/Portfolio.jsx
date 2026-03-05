import { useEffect, useRef } from 'react';
import echoSpaceLogo from '../assets/echospace-logo.jpeg';
import resQLogo from '../assets/logo.jpeg';

function useReveal(delay = 0) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transitionDelay = `${delay}ms`;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
            { threshold: 0.08 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);
    return ref;
}

const PROJECTS = [
    {
        id: 1,
        title: 'resQ Platform',
        subtitle: 'Real-Time Disaster Management and Coordination System',
        period: '09/2025 – 02/2026',
        desc: 'A real-time emergency response platform enabling instant SOS alerts, live incident broadcasting, and 1:1 chat using Socket.IO for zero-latency communication.',
        tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand', 'FastAPI', 'PostgreSQL', 'Socket.IO', 'JWT', 'Mapbox GL JS'],
        img: resQLogo,
        link: 'https://github.com/Gopika-17-Krishna-S',
        aspectRatio: '1/1',
        bullets: [
            'Developed a real-time emergency response platform enabling instant SOS alerts, live incident broadcasting, and 1:1 chat using Socket.IO for zero-latency communication.',
            'Built a scalable FastAPI backend with SQLAlchemy and PostgreSQL to manage incidents, user roles (Admin, Volunteer, Citizen), and mission lifecycle workflows.',
            'Implemented secure JWT-based authentication with refresh token cycle and role-based access control for protected API endpoints and session persistence.',
            'Integrated Mapbox GL JS for real-time geolocation tracking, smart volunteer assignment, and dynamic incident mapping dashboards.',
            'Engineered robust frontend state management using Zustand and strict TypeScript typing to ensure refresh protection, reliability, and production-ready scalability.',
        ],
    },
    {
        id: 2,
        title: "'EchoSpace' — Privacy Centric Chat App",
        subtitle: 'Privacy-focused, anonymous real-time chat application',
        period: '12/2024 – 04/2025',
        desc: 'A privacy-first anonymous chat application enabling temporary topic-based spaces where messages auto-delete upon exit using Firestore TTL and lifecycle management.',
        tags: ['Flutter', 'Dart', 'Firebase', 'AES-256 Encryption', 'Trie Data Structure', 'Text Embeddings'],
        img: echoSpaceLogo,
        link: 'https://github.com/Gopika-17-Krishna-S',
        objectFit: 'cover',
        objectPosition: 'center',
        aspectRatio: '1/1',
        bullets: [
            'Developed a privacy-first anonymous chat application enabling temporary topic-based spaces where messages auto-delete upon exit using Firestore TTL and lifecycle management logic.',
            'Implemented secure Firebase Authentication with email verification and strict Firestore security rules, integrating AES-256 encryption to ensure data confidentiality and minimal retention.',
            'Built an NLP-based recommendation engine using TF-IDF embeddings and cosine similarity to suggest relevant discussion spaces based on user interaction history.',
            'Designed intelligent moderation mechanisms including Trie-based foul language detection with automated warnings to maintain a respectful community environment.',
            'Engineered real-time chat functionality with scalable cloud infrastructure using Firebase and Cloud Functions, supporting secure one-to-one anonymous "Corners" and group discussions.',
        ],
    },
];

function ProjectCard({ p, index }) {
    const cardRef = useReveal(index * 150);
    return (
        <div ref={cardRef} className="reveal" style={{ borderTop: '1px solid var(--color-border)' }}>
            {/* Hero image */}
            <div
                className="work-item"
                style={{ aspectRatio: '16/7', borderRadius: 0, background: p.bg || 'var(--color-hover-bg)', cursor: 'default' }}
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
                <div className="work-overlay" style={{ opacity: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 55%)' }}>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                        {p.tags.map(t => <span className="work-tag" key={t}>{t}</span>)}
                    </div>
                </div>
            </div>

            {/* Detail */}
            <div className="project-detail">
                <div>
                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '0.5rem' }}>{p.period}</p>
                    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{p.title}</h2>
                    <p style={{ fontSize: '0.85rem', color: '#71717a', marginTop: '0.35rem', fontStyle: 'italic' }}>{p.subtitle}</p>
                    <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            marginTop: '1.5rem',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: '#10b981',
                            borderBottom: '1.5px solid #10b981',
                            paddingBottom: '2px',
                            transition: 'opacity 0.2s',
                            letterSpacing: '0.01em',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        View on GitHub ↗
                    </a>
                </div>
                <div>
                    <p style={{ fontSize: '1rem', color: '#3f3f46', lineHeight: 1.85, marginBottom: '1.25rem' }}>{p.desc}</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '1.1rem' }}>
                        {p.bullets.map((b, i) => (
                            <li key={i} style={{ fontSize: '0.875rem', color: '#52525b', lineHeight: 1.75, listStyleType: 'disc' }}>{b}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const headerRef = useReveal(0);
    const ctaRef = useReveal(0);

    return (
        <main className="portfolio-page">
            <section className="section">
                <div className="section-inner reveal" ref={headerRef}>
                    <p className="section-label">Selected Work</p>
                    <h1 className="section-title">Portfolio</h1>
                    <p className="section-desc">
                        A collection of full-stack and mobile projects built with modern technologies — focused on real-world impact, clean architecture, and production-ready quality.
                    </p>
                </div>

                {/* Project Cards */}
                <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1px' }}>
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.id} p={p} index={i} />
                    ))}
                </div>

                <div className="reveal" ref={ctaRef} style={{ marginTop: '6rem', textAlign: 'center' }}>
                    <a
                        href="https://github.com/Gopika-17-Krishna-S"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            border: '1.5px solid #000',
                            padding: '1rem 2.5rem',
                            transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                            borderRadius: '6px',
                            letterSpacing: '0.02em',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = '#000';
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#000';
                            e.currentTarget.style.transform = '';
                            e.currentTarget.style.boxShadow = '';
                        }}
                    >
                        See all projects on GitHub ↗
                    </a>
                </div>
            </section>
        </main>
    );
}
