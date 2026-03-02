import gopikaImg from '../assets/gopika.jpeg';

export default function About() {
    return (
        <main className="portfolio-page">
            <section className="section">
                <div className="section-inner">
                    <p className="section-label">About Me</p>
                    <h1 className="section-title">Hello,<br />I'm Gopika</h1>

                    <div className="about-grid">
                        {/* Bio */}
                        <div className="about-text">
                            <p>
                                I'm a <strong>Python Full Stack Developer</strong> with hands-on experience in
                                designing, developing, and deploying scalable web applications using{' '}
                                <strong>Python, Django, React.js, FastAPI</strong>, RESTful APIs, and MySQL.
                            </p>
                            <p>
                                I have strong expertise in <strong>CRUD operations, API integration,
                                    authentication systems</strong>, and responsive UI development. I enjoy working
                                across the entire stack — from architecting robust backends to building
                                polished, performant frontends.
                            </p>
                            <p>
                                Proven ability to collaborate in team environments, write clean and maintainable
                                code, and deliver <strong>secure, performance-optimised solutions</strong>.
                                Actively seeking full-stack or backend developer roles.
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#71717a', marginTop: '0.5rem' }}>
                                📍 Ernakulam, Kerala, India
                            </p>
                            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a
                                    href="https://github.com/Gopika-17-Krishna-S"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={btnStyle()}
                                    className="btn-outline"
                                >
                                    GitHub ↗
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/gopikakrishnas17"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={btnStyle()}
                                    className="btn-outline"
                                >
                                    LinkedIn ↗
                                </a>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-resume"
                                    style={{ marginTop: 0 }}
                                >
                                    <span>View Resume</span>
                                    <svg className="resume-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                        <polyline points="10 9 9 9 8 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Portrait */}
                        <div className="about-image">
                            <img
                                src={gopikaImg}
                                alt="Gopika Krishna S — Python Full Stack Developer"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="about-stats">
                        {STATS.map(s => (
                            <div key={s.label}>
                                <div className="metric-value">{s.value}</div>
                                <div className="metric-label">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Experience Timeline */}
                    <div style={{ marginTop: '5rem' }}>
                        <p className="section-label">Professional Experience</p>
                        <div style={{ marginTop: '1.5rem' }}>
                            {TIMELINE.map((item, i) => (
                                <div key={i} className="timeline-row">
                                    <div>
                                        <div style={{ fontSize: '0.78rem', color: '#a1a1aa', letterSpacing: '0.04em' }}>{item.period}</div>
                                        <div style={{ fontSize: '0.82rem', color: '#52525b', marginTop: '0.3rem', fontWeight: 500 }}>{item.company}</div>
                                        <div style={{ fontSize: '0.75rem', color: '#a1a1aa', marginTop: '0.15rem' }}>{item.location}</div>
                                    </div>
                                    <div>
                                        <h3 style={{ fontWeight: 500, fontSize: '1rem', letterSpacing: '-0.01em' }}>{item.role}</h3>
                                        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                            {item.bullets.map((b, j) => (
                                                <li key={j} style={{ fontSize: '0.875rem', color: '#52525b', lineHeight: 1.7, listStyleType: 'disc' }}>{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div style={{ marginTop: '5rem' }}>
                        <p className="section-label">Education</p>
                        <div style={{ marginTop: '1.5rem' }}>
                            {EDUCATION.map((item, i) => (
                                <div key={i} className="timeline-row">
                                    <div>
                                        <div style={{ fontSize: '0.78rem', color: '#a1a1aa', letterSpacing: '0.04em' }}>{item.year}</div>
                                        {item.score && <div style={{ fontSize: '0.78rem', color: '#71717a', marginTop: '0.25rem' }}>{item.score}</div>}
                                    </div>
                                    <div>
                                        <h3 style={{ fontWeight: 500, fontSize: '1rem', letterSpacing: '-0.01em' }}>{item.institution}</h3>
                                        <p style={{ fontSize: '0.875rem', color: '#71717a', marginTop: '0.3rem', lineHeight: 1.6 }}>{item.degree}</p>
                                        <p style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.2rem' }}>{item.location}</p>
                                        {item.extra && <p style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.1rem' }}>{item.extra}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div style={{ marginTop: '5rem' }}>
                        <p className="section-label">Languages</p>
                        <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                            {['English', 'Malayalam'].map(lang => (
                                <div key={lang} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{lang}</span>
                                    <span style={{ fontSize: '0.78rem', color: '#a1a1aa', letterSpacing: '0.06em' }}>Completely fluent</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

const btnStyle = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.85rem',
    fontWeight: 500,
    border: '1px solid #000',
    padding: '0.7rem 1.4rem',
    transition: 'all 0.25s',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#000',
    background: 'transparent',
});

const STATS = [
    { value: '2+', label: 'Projects built' },
    { value: '+10', label: 'Languages & Frameworks' },
    { value: '1+', label: 'Years of experience' },
    { value: '3', label: 'Internships completed' },
];

const TIMELINE = [
    {
        period: '06/2025 – Ongoing',
        company: 'SMEC Labs',
        location: 'Kochi, Kerala',
        role: 'Python Full Stack Intern',
        bullets: [
            'Developed and maintained full-stack application modules using Python, Django, and REST APIs, improving data handling efficiency.',
            'Designed and integrated MySQL databases using Django ORM, optimizing query performance and ensuring secure data storage.',
            'Developed a real-time emergency response platform (resQ) using FastAPI and PostgreSQL, enabling instant SOS alerts and live incident tracking.',
            'Built responsive dashboards and dynamic UI components using Next.js 14, TypeScript, and Tailwind CSS to support Admin, Volunteer, and Citizen roles.',
            'Implemented RESTful APIs and WebSocket communication (Socket.IO) for zero-latency notifications, real-time chat, and live mission updates.',
            'Designed secure JWT-based authentication (Access & Refresh Tokens).',
            'Integrated Mapbox GL JS for geolocation tracking and smart responder assignment based on proximity logic.',
            'Managed version control with Git & GitHub, performed API testing using Postman, debugging, and optimized system performance for scalability.',
        ],
    },
    {
        period: '06/2024 – 07/2024',
        company: 'FACEIN TECHNOLOGIES',
        location: 'Kochi, Kerala',
        role: 'Cyber Forensic Intern',
        bullets: [
            'Analyzed digital evidence using forensic tools to identify and investigate cybersecurity incidents.',
            'Prepared structured investigation reports while maintaining chain-of-custody integrity.',
            'Improved analytical, documentation, and problem-solving skills through real-world cyber case analysis.',
        ],
    },
    {
        period: '05/2023 – 06/2023',
        company: 'RIGHTSOFT OPTIONS',
        location: 'Kochi, Kerala',
        role: 'Web Development Intern',
        bullets: [
            'Developed and optimized web applications using Python and relational databases.',
            'Automated backend data processing tasks, reducing manual effort and improving workflow efficiency.',
            'Enhanced application performance through modular code structure and best coding practices.',
        ],
    },
];

const EDUCATION = [
    {
        year: '2021 – 2025',
        institution: 'Sree Narayana Gurukulam College of Engineering',
        degree: 'Bachelor of Technology — Computer Science and Engineering',
        location: 'Ernakulam, Kerala',
        extra: 'APJ Abdul Kalam Technological University',
    },
    {
        year: '2019 – 2021',
        institution: 'Rajarshi Memorial Higher Secondary School',
        degree: 'Higher Secondary Education (Class 12) — Bio Maths',
        location: 'Vadavucode, Ernakulam, Kerala',
        score: 'Percentage: 95%',
    },
    {
        year: '2019',
        institution: 'Mar Athanasius Memorial Higher Secondary School',
        degree: 'Secondary Education (Class 10)',
        location: 'Puthencruz, Ernakulam, Kerala',
        score: 'Percentage: 99%',
    },
];
