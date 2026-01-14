import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/PhotoProfile/WhatsApp Image 2025-03-18 at 00.52.16_1c54f16c.jpg';

const About = () => {
    return (
        <section id="about" className="section container" style={{ padding: '8rem 0' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center' }}
                >
                    <div style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        margin: '0 auto',
                        border: '4px solid var(--accent)',
                        boxShadow: '0 0 30px rgba(0,0,0,0.5)'
                    }}>
                        <img
                            src={profilePhoto}
                            alt="Indra Profile"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                        I am a forward-thinking <strong>AI Engineer & Full Stack Developer</strong> based in Indonesia. I specialize in building intelligent applications that bridge the gap between complex AI models and user-friendly interfaces.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                        My expertise spans across <strong>Computer Vision</strong> (OpenCV, DeepFace), <strong>Mobile Development</strong> (Flutter), and <strong>Web Technologies</strong> (React, Laravel). From medical imaging analysis to smart canteen systems, I create solutions that solve real-world problems.
                    </p>

                    <div style={{
                        padding: '2rem',
                        border: '1px solid #333',
                        borderRadius: '16px',
                        background: 'linear-gradient(145deg, #121212, #0a0a0a)'
                    }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>Technical Expertise</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {['Python', 'OpenCV', 'Deep Learning', 'Flutter', 'Dart', 'React JS', 'Laravel', 'TensorFlow', 'Git'].map(tech => (
                                <span key={tech} style={{
                                    padding: '8px 16px',
                                    borderRadius: '50px',
                                    border: '1px solid #333',
                                    background: 'rgba(255,255,255,0.03)',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
