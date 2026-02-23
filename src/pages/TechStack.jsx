const CATEGORIES = [
    {
        name: 'Frontend',
        items: [
            { name: 'HTML5', icon: '🌐', level: 95 },
            { name: 'CSS3', icon: '🎨', level: 90 },
            { name: 'JavaScript', icon: '🟨', level: 88 },
            { name: 'Bootstrap 5', icon: '💜', level: 85 },
            { name: 'Tailwind CSS', icon: '🌊', level: 88 },
            { name: 'React.js', icon: '⚛️', level: 85 },
            { name: 'Next.js 14', icon: '▲', level: 82 },
            { name: 'TypeScript', icon: '🔷', level: 80 },
            { name: 'Zustand', icon: '🐻', level: 78 },
            { name: 'Mapbox GL JS', icon: '🗺️', level: 75 },
        ],
    },
    {
        name: 'Backend',
        items: [
            { name: 'Python', icon: '🐍', level: 92 },
            { name: 'Django', icon: '🎯', level: 88 },
            { name: 'Django REST', icon: '🔗', level: 85 },
            { name: 'FastAPI', icon: '⚡', level: 82 },
            { name: 'RESTful API', icon: '🌐', level: 90 },
            { name: 'JWT Auth', icon: '🔐', level: 85 },
        ],
    },
    {
        name: 'Databases',
        items: [
            { name: 'MySQL', icon: '🐬', level: 88 },
            { name: 'MongoDB', icon: '🍃', level: 80 },
            { name: 'PostgreSQL', icon: '🐘', level: 82 },
        ],
    },
    {
        name: 'Real-Time & Communication',
        items: [
            { name: 'Socket.IO', icon: '🔌', level: 80 },
            { name: 'WebSocket', icon: '📡', level: 78 },
        ],
    },
    {
        name: 'DevOps & Tools',
        items: [
            { name: 'Git', icon: '🌿', level: 92 },
            { name: 'GitHub', icon: '🐙', level: 92 },
            { name: 'Postman', icon: '📮', level: 88 },
            { name: 'Figma', icon: '🖼️', level: 72 },
        ],
    },
    {
        name: 'Others',
        items: [
            { name: 'Geolocation', icon: '📍', level: 80 },
            { name: 'Live Mapping', icon: '🗺️', level: 78 },
            { name: 'AES-256', icon: '🔒', level: 75 },
            { name: 'Firebase', icon: '🔥', level: 80 },
            { name: 'Flutter', icon: '💙', level: 75 },
        ],
    },
];

export default function TechStack() {
    return (
        <main style={{ paddingTop: '5rem' }}>
            <section className="section">
                <div className="section-inner">
                    <p className="section-label">Technologies</p>
                    <h1 className="section-title">Tech Stack</h1>
                    <p style={{ fontSize: '1rem', color: '#71717a', maxWidth: '520px', marginTop: '1rem', lineHeight: 1.7 }}>
                        A curated set of tools and technologies I use to build modern, production-ready
                        applications — from scalable APIs to real-time, responsive frontends.
                    </p>
                </div>

                {CATEGORIES.map(cat => (
                    <div key={cat.name} style={{ marginTop: '4rem' }}>
                        <p
                            style={{
                                fontSize: '0.7rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: '#a1a1aa',
                                marginBottom: '0.75rem',
                            }}
                        >
                            {cat.name}
                        </p>
                        <div className="tech-grid">
                            {cat.items.map(tech => (
                                <div className="tech-item" key={tech.name} title={`${tech.level}% proficiency`}>
                                    <span className="tech-icon" role="img" aria-label={tech.name}>{tech.icon}</span>
                                    <span className="tech-name">{tech.name}</span>
                                    <div className="tech-level" aria-label={`${tech.level}% proficiency`}>
                                        <div className="tech-level-fill" style={{ width: `${tech.level}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
