import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section container" style={{ textAlign: 'center', paddingBottom: '5rem' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                    background: 'linear-gradient(145deg, #121212, #000)',
                    padding: '4rem 2rem',
                    borderRadius: '24px',
                    border: '1px solid #333'
                }}
            >
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Let's Work Together</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 3rem', fontSize: '1.2rem' }}>
                    Have a project in mind? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <a href="mailto:laurentindra21@gmail.com" style={{
                    display: 'inline-block',
                    padding: '16px 48px',
                    backgroundColor: 'var(--accent)',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    marginBottom: '4rem',
                    boxShadow: '0 10px 30px -10px var(--accent)'
                }}>
                    Say Hello
                </a>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    {[
                        { Icon: Github, link: 'https://github.com/laurentindra' },
                        { Icon: Linkedin, link: 'https://www.linkedin.com/in/laurent-indra-febrian-5706bb2a0/' },
                        { Icon: Instagram, link: 'https://instagram.com/laurentindra_' },
                        { Icon: Mail, link: 'mailto:laurentindra21@gmail.com' }
                    ].map(({ Icon, link }, i) => (
                        <a key={i} href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = 'white'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            <Icon size={24} />
                        </a>
                    ))}
                </div>

                <footer style={{ marginTop: '4rem', color: '#555', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Laurent Indra Febrian. All rights reserved.
                </footer>
            </motion.div>
        </section>
    );
};

export default Contact;
