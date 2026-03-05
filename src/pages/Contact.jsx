import { useState, useEffect, useRef } from 'react';

function useReveal(delay = 0) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transitionDelay = `${delay}ms`;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);
    return ref;
}

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const headerRef = useReveal(0);
    const formRef = useReveal(100);
    const infoRef = useReveal(200);

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        // Simulate a short "sending" delay for UX
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1200);
    };

    return (
        <main className="portfolio-page">
            <section className="section">
                <div className="section-inner reveal" ref={headerRef}>
                    <p className="section-label">Get In Touch</p>
                    <h1 className="section-title">Let's Talk</h1>
                    <p className="section-desc">
                        Whether you have a project idea, a job opportunity, or simply want to connect — I'd love to hear from you.
                    </p>
                </div>

                <div className="contact-grid" style={{ marginTop: '4rem' }}>
                    {/* Form */}
                    <div className="reveal" ref={formRef}>
                        {sent ? (
                            <div className="sent-confirmation" style={{ animation: 'scaleIn 0.4s ease both' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#10b981' }}>✓</div>
                                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                                    Message sent!
                                </h3>
                                <p style={{ color: '#71717a', fontSize: '0.9rem' }}>
                                    Thanks for reaching out. I'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                                    className="btn-text"
                                >
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                                name="contact"
                                method="POST"
                                data-netlify="true"
                            >
                                <input type="hidden" name="form-name" value="contact" />

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div className="form-group">
                                        <label htmlFor="name">Your name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Gopika Krishna S"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Job opportunity / Project idea / Collaboration"
                                        value={form.subject}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        placeholder="Tell me about your project or opportunity..."
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-submit"
                                    disabled={loading}
                                    style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}
                                >
                                    {loading ? (
                                        <>
                                            <span style={{ display: 'inline-block', width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                                            Sending…
                                        </>
                                    ) : (
                                        'Send Message ↗'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact info */}
                    <div className="contact-info reveal" ref={infoRef}>
                        <div className="contact-info-item">
                            <h4>Email</h4>
                            <a href="mailto:gopikakrishnas173@gmail.com">gopikakrishnas173@gmail.com</a>
                        </div>

                        <div className="contact-info-item">
                            <h4>Location</h4>
                            <p>Ernakulam, Kerala, India 🇮🇳</p>
                        </div>

                        <div className="contact-info-item">
                            <h4>Availability</h4>
                            <div className="availability-status">
                                <span className="pulse-dot" />
                                Open to full-stack &amp; backend roles
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <h4>Response time</h4>
                            <p style={{ fontSize: '1rem' }}>Within 24 hours ⚡</p>
                        </div>

                        <div className="contact-info-item">
                            <h4>Find me online</h4>
                            <div className="socials">
                                <a
                                    href="https://github.com/Gopika-17-Krishna-S"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Gopika's GitHub"
                                >
                                    GitHub ↗
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/gopikakrishnas17"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Gopika's LinkedIn"
                                >
                                    LinkedIn ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
