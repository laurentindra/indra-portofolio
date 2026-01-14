import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background Gradient Blob */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                backgroundColor: 'var(--accent)',
                borderRadius: '50%',
                filter: 'blur(150px)',
                opacity: 0.15,
                zIndex: 0
            }} />

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em'
                    }}
                >
                    Hello, I am
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        fontFamily: 'Space Grotesk, sans-serif'
                    }}
                >
                    LAURENT INDRA FEBRIAN<br />
                    <span style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px var(--text-primary)',
                        opacity: 0.8,
                        fontSize: 'clamp(2rem, 5vw, 4rem)'
                    }}>ENGINEER</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        color: 'var(--text-secondary)',
                        fontSize: '1.2rem',
                        lineHeight: 1.6
                    }}
                >
                    Specializing in AI-Driven Applications, Computer Vision, and Modern Full Stack Development.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <a href="#projects" style={{
                        display: 'inline-block',
                        padding: '16px 32px',
                        backgroundColor: 'var(--text-primary)',
                        color: 'var(--bg-color)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        borderRadius: '50px',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        View My Work
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite'
                }}
            >
                <ArrowDown size={32} color="var(--text-secondary)" />
            </motion.div>
        </section>
    );
};

export default Hero;
