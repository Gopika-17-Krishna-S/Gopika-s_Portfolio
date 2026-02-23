import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = e => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <main style={{ paddingTop: '5rem' }}>
            <section className="section">
                <div className="section-inner">
                    <p className="section-label">Get In Touch</p>
                    <h1 className="section-title">Contact</h1>
                </div>

                <div className="contact-grid">
                    {/* Form */}
                    <div>
                        {sent ? (
                            <div
                                style={{
                                    padding: '2.5rem',
                                    border: '1px solid #e4e4e7',
                                    textAlign: 'center',
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                                <h3 style={{ fontWeight: 400, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                                    Message sent!
                                </h3>
                                <p style={{ color: '#71717a', fontSize: '0.9rem' }}>
                                    Thanks for reaching out. I'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                                    style={{
                                        marginTop: '1.5rem',
                                        fontSize: '0.8rem',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#71717a',
                                        textDecoration: 'underline',
                                    }}
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

                                <div className="form-group">
                                    <label htmlFor="name">Your name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your full name"
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

                                <button type="submit" className="btn-submit">
                                    Send message ↗
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact info */}
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <h4>Email</h4>
                            <a href="mailto:gopikakrishnas173@gmail.com">gopikakrishnas173@gmail.com</a>
                        </div>



                        <div className="contact-info-item">
                            <h4>Location</h4>
                            <p>Ernakulam, Kerala, India</p>
                        </div>

                        <div className="contact-info-item">
                            <h4>Availability</h4>
                            <p style={{ color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <span
                                    style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: '#16a34a',
                                        display: 'inline-block',
                                        animation: 'pulse 2s infinite',
                                    }}
                                />
                                Open to full-stack &amp; backend roles
                            </p>
                            <style>{`
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.4; }
                }
              `}</style>
                        </div>

                        <div className="contact-info-item">
                            <h4>Find me online</h4>
                            <div className="socials">
                                <a
                                    href="https://github.com/Gopika-17-Krishna-S"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/gopikakrishnas17"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
