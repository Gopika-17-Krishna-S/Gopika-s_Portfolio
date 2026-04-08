import echoSpaceLogo from '../assets/echospace-logo.jpeg';
import resQLogo from '../assets/logo.jpeg';

const PROJECTS = [
    {
        id: 1,
        title: 'AutoDoc AI',
        subtitle: 'Automated Codebase Documentation and API Visualization Platform',
        period: '02/2026 – 04/2026',
        desc: 'An automated documentation platform to parse large codebases, extract project structure, and generate API visualizations using Python AST and custom parsing utilities.',
        tags: ['Django', 'Python', 'Bootstrap', 'HTML', 'CSS', 'SQLite', 'Git', 'GitHub'],
        link: 'https://github.com/Gopika-17-Krishna-S',
        aspectRatio: '16/7',
        bullets: [
            'Developed an automated documentation platform to parse large codebases, extract project structure, and generate API visualizations using Python AST and custom parsing utilities.',
            'Built a scalable Django backend with efficient routing, database models, and secure file handling to manage project uploads, parsed data, and user session workflows with JSON export support.',
            'Designed a responsive developer dashboard using Bootstrap and Django Templates for intuitive project exploration and seamless navigation of generated documentation.',
        ],
    },
    {
        id: 2,
        title: 'resQ PLATFORM',
        subtitle: 'Real-Time Disaster Management and Coordination System',
        period: '09/2025 – 02/2026',
        desc: 'A real-time emergency response platform enabling instant SOS alerts, live incident broadcasting, and 1:1 chat using Socket.IO for zero-latency communication.',
        tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand', 'FastAPI', 'PostgreSQL', 'Socket.IO', 'JWT', 'Mapbox GL JS'],
        img: resQLogo,
        link: 'https://github.com/Gopika-17-Krishna-S',
        aspectRatio: '16/7',
        bullets: [
            'Developed a real-time emergency response platform enabling instant SOS alerts, live incident broadcasting, and 1:1 chat using Socket.IO for zero-latency communication.',
            'Built a scalable FastAPI backend with SQLAlchemy and PostgreSQL to manage incidents, user roles (Admin, Volunteer, Citizen), and mission lifecycle workflows.',
            'Implemented secure JWT-based authentication with refresh token cycle and role-based access control (RBAC) for protected APIs and session persistence.',
            'Integrated Mapbox GL JS for real-time geolocation tracking, smart volunteer assignment, and dynamic dashboards, with robust frontend state management using Zustand and TypeScript for scalability and reliability.',
        ],
    },
    {
        id: 3,
        title: "'ECHOSPACE' - Privacy Centric Chat App",
        subtitle: 'Privacy-focused, anonymous real-time chat application',
        period: '12/2024 – 04/2025',
        desc: 'A privacy-first anonymous chat application with temporary topic-based spaces and auto-deleting messages using Firestore TTL and lifecycle management logic.',
        tags: ['Flutter', 'Dart', 'Firebase', 'AES-256 Encryption', 'Trie Data Structure', 'Text Embeddings'],
        img: echoSpaceLogo,
        objectFit: 'cover',
        objectPosition: 'center',
        link: 'https://github.com/Gopika-17-Krishna-S',
        aspectRatio: '16/7',
        bullets: [
            'Developed a privacy-first anonymous chat application with temporary topic-based spaces and auto-deleting messages using Firestore TTL and lifecycle management logic.',
            'Implemented secure Firebase Authentication (email verification), strict Firestore security rules, and AES-256 encryption to ensure data confidentiality and minimal retention.',
            'Built an NLP-based recommendation engine using TF-IDF embeddings and cosine similarity to suggest relevant discussion spaces based on user interaction history.',
            'Engineered real-time chat with Firebase and Cloud Functions, including scalable one-to-one anonymous “Corners,” group discussions, and intelligent moderation using Trie-based foul language detection with automated warnings.',
        ],
    },
];

export default function Portfolio() {
    return (
        <main className="portfolio-page">
            <section className="section">
                <div className="section-inner">
                    <p className="section-label">Selected Work</p>
                    <h1 className="section-title">Portfolio</h1>
                    <p className="section-desc">
                        A collection of full-stack and mobile projects built with modern technologies — focused on real-world impact, clean architecture, and production-ready quality.
                    </p>
                </div>

                {/* Project Cards */}
                <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1px' }}>
                    {PROJECTS.map(p => (
                        <div key={p.id} style={{ borderTop: '1px solid var(--color-border)' }}>
                            {/* Hero image */}
                            <div className="work-item" style={{ aspectRatio: p.aspectRatio || '16/7', borderRadius: 0, background: p.bg || 'var(--color-hover-bg)' }}>
                                {p.img && (
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        loading="lazy"
                                        style={{
                                            objectFit: p.objectFit || 'cover',
                                            objectPosition: p.objectPosition || 'center',
                                            filter: (p.id === 3) ? 'none' : 'grayscale(0.3)'
                                        }}
                                    />
                                )}
                                <div className="work-overlay" style={{ opacity: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                                        {p.tags.map(t => <span className="work-tag" key={t}>{t}</span>)}
                                    </div>
                                </div>
                            </div>

                            {/* Detail */}
                            <div className="project-detail">
                                <div>
                                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '0.5rem' }}>{p.period}</p>
                                    <h2 style={{ fontSize: '1.4rem', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{p.title}</h2>
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
                                            fontWeight: 500,
                                            borderBottom: '1px solid #000',
                                            paddingBottom: '2px',
                                            transition: 'opacity 0.2s',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
                                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                    >
                                        View on GitHub ↗
                                    </a>
                                </div>
                                <div>
                                    <p style={{ fontSize: '1rem', color: '#3f3f46', lineHeight: 1.8, marginBottom: '1.25rem' }}>{p.desc}</p>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '1.1rem' }}>
                                        {p.bullets.map((b, i) => (
                                            <li key={i} style={{ fontSize: '0.875rem', color: '#52525b', lineHeight: 1.7, listStyleType: 'disc' }}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '6rem', textAlign: 'center' }}>
                    <a
                        href="https://github.com/Gopika-17-Krishna-S"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            border: '1px solid #000',
                            padding: '1rem 2.5rem',
                            transition: 'all 0.25s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}
                    >
                        See all projects on GitHub ↗
                    </a>
                </div>
            </section>
        </main>
    );
}
