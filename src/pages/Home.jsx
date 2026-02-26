import { Link } from 'react-router-dom';
import gopikaImg from '../assets/gopika.jpeg';
import echoSpaceLogo from '../assets/echospace-logo.jpeg';
import resQLogo from '../assets/logo.jpeg';

const ArrowDown = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
    </svg>
);

export default function Home() {
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
                    <div className="metrics-row" aria-label="Key statistics">
                        <div>
                            <div className="metric-value" aria-label="2 major projects">2+</div>
                            <div className="metric-label">Projects<br />Built</div>
                        </div>
                        <div>
                            <div className="metric-value" aria-label="10+ technologies">+10</div>
                            <div className="metric-label">Languages &amp;<br />Frameworks</div>
                        </div>
                        <div>
                            <div className="metric-value">1+</div>
                            <div className="metric-label">Years<br />Experience</div>
                        </div>
                    </div>

                    {/* Greeting */}
                    <h1 className="hero-title">Hello</h1>

                    {/* Tagline */}
                    <p
                        style={{
                            fontSize: '1.125rem',
                            color: '#3f3f46',
                            lineHeight: 1.7,
                            maxWidth: '30rem',
                            marginTop: '1.5rem',
                        }}
                    >
                        — I'm <strong style={{ color: '#000' }}>Gopika Krishna S</strong>, a Python Full Stack
                        Developer building scalable, real-world web applications.
                    </p>

                    {/* Scroll indicator */}
                    <button
                        className="scroll-indicator"
                        onClick={scrollToNext}
                        aria-label="Scroll down"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
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
            <section className="intro-lower">
                <div>
                    <p className="section-label">Who am I</p>
                    <h2 className="section-title" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                        Full Stack Developer
                    </h2>
                </div>
                <div>
                    <p style={{ fontSize: '1.05rem', color: '#52525b', lineHeight: 1.8, marginBottom: '2rem' }}>
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
                            fontWeight: 500,
                            borderBottom: '1px solid #000',
                            paddingBottom: '2px',
                        }}
                    >
                        Read more about me ↗
                    </Link>
                </div>
            </section>

            {/* Featured work */}
            <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div style={{ paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <p className="section-label">Selected work</p>
                    <Link to="/portfolio" style={{ fontSize: '0.8rem', borderBottom: '1px solid #a1a1aa', paddingBottom: '2px' }}>
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
                            aria-label={p.title}
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
                                    filter: (p.id === 2) ? 'none' : 'grayscale(0.3)'
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
