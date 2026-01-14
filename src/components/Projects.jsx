import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import goKantin1 from '../assets/GO KANTIN-IMAGE/Screenshot_2025-03-04_193410.png';
import goKantin2 from '../assets/GO KANTIN-IMAGE/WhatsApp_Imaf.jpeg';
import goKantin3 from '../assets/GO KANTIN-IMAGE/WhatsApp_Image_2026-01-13_at_10.04.08_AM.jpeg';
import goKantin4 from '../assets/GO KANTIN-IMAGE/WhatsApp_Image_2026-01-13_at_10.04.09_AM.jpeg';
import goKantin5 from '../assets/GO KANTIN-IMAGE/WhatsApp_Image_2026-01-13_at_10.04.10_AM.jpeg';
import goKantin6 from '../assets/GO KANTIN-IMAGE/sd.jpeg';
import goKantin7 from '../assets/GO KANTIN-IMAGE/sdds.jpeg';
import recreo1 from '../assets/RECREO-IMAGE/Screenshot_2026-01-13_101748.png';
import recreo2 from '../assets/RECREO-IMAGE/Screenshot_2026-01-13_101924.png';
import recreo3 from '../assets/RECREO-IMAGE/Screenshot_2026-01-13_102300.png';
import recreo4 from '../assets/RECREO-IMAGE/Screenshot_2026-01-13_102319.png';
import recreo5 from '../assets/RECREO-IMAGE/Screenshot_2026-01-13_102455.png';
import aslivestore1 from '../assets/ASLIVESTORE-IMAGE/Screenshot_2026-01-13_103637.png';
import aslivestore2 from '../assets/ASLIVESTORE-IMAGE/Screenshot_2026-01-13_103653.png';
import aslivestore3 from '../assets/ASLIVESTORE-IMAGE/Screenshot_2026-01-13_103705.png';
import aslivestore4 from '../assets/ASLIVESTORE-IMAGE/Screenshot_2026-01-13_103716.png';
import healtyca1 from '../assets/HEALTYCA-IMAGE/Frame 1.png';
import healtyca2 from '../assets/HEALTYCA-IMAGE/Frame 2.png';
import healtyca3 from '../assets/HEALTYCA-IMAGE/Frame 5.png';
import healtyca4 from '../assets/HEALTYCA-IMAGE/Frame 5 (1).png';
import healtyca5 from '../assets/HEALTYCA-IMAGE/Frame 6.png';
import healtyca6 from '../assets/HEALTYCA-IMAGE/Frame 7.png';
import healtyca7 from '../assets/HEALTYCA-IMAGE/Frame 10.png';
import healtyca8 from '../assets/HEALTYCA-IMAGE/Frame 10 (1).png';
import healtyca9 from '../assets/HEALTYCA-IMAGE/Frame 11.png';
import healtyca10 from '../assets/HEALTYCA-IMAGE/Frame 14.png';
import healtyca11 from '../assets/HEALTYCA-IMAGE/Frame 15.png';
import healtyca12 from '../assets/HEALTYCA-IMAGE/Frame 18.png';
import serenity1 from '../assets/SERENITYAI-IMAGE/Screenshot 2026-01-14 100157.png';
import serenity2 from '../assets/SERENITYAI-IMAGE/Screenshot 2026-01-14 100258.png';
import serenity3 from '../assets/SERENITYAI-IMAGE/Screenshot 2026-01-14 100316.png';
import serenity4 from '../assets/SERENITYAI-IMAGE/Screenshot 2026-01-14 100833.png';
import serenity5 from '../assets/SERENITYAI-IMAGE/Screenshot 2026-01-14 100846.png';
import mriBrain1 from '../assets/MRIBRAIN-IMAGE/Screenshot 2026-01-14 101402.png';

const projects = [
    {
        title: "Go Kantin",
        category: "Web Application",
        description: "A comprehensive canteen management system designed to streamline food ordering and inventory tracking. Built with modern web technologies, it ensures a smooth user experience for both students and canteen staff.",
        techStack: ["Bootstrap", "HTML", "CSS", "JS"],
        images: [goKantin1, goKantin2, goKantin3, goKantin4, goKantin5, goKantin6, goKantin7],
        isGallery: true
    },
    {
        title: "Recreo",
        category: "Web Application",
        description: (
            <>
                A web-based platform built with Laravel and Bootstrap. You can find it on{' '}
                <a href="https://recreo.threeds.uno" target="_blank" rel="noopener noreferrer" style={{ color: '#4dabf7', textDecoration: 'underline' }}>
                    recreo.threeds.uno
                </a>
            </>
        ),
        techStack: ["Bootstrap", "Laravel", "PHP", "HTML", "CSS", "JS"],
        images: [recreo1, recreo2, recreo3, recreo4, recreo5],
        isGallery: true
    },
    {
        title: "Aslivestore",
        category: "Web Application",
        description: "A web store application built for efficiency and user-friendliness.",
        techStack: ["Bootstrap", "HTML", "CSS", "JS"],
        images: [aslivestore1, aslivestore2, aslivestore3, aslivestore4],
        isGallery: true
    },
    {
        title: "Healtyca",
        category: "Android Application",
        description: "An Android Application built using Flutter, Dart, and Python. It features a chatbot and image analysis capabilities to give descriptions.",
        techStack: ["Flutter", "Dart", "Python"],
        images: [healtyca1, healtyca2, healtyca3, healtyca4, healtyca5, healtyca6, healtyca7, healtyca8, healtyca9, healtyca10, healtyca11, healtyca12],
        isGallery: true
    },
    {
        title: "Serenity AI",
        category: "Web Application",
        description: "A face recognition application using DeepFace. The frontend is powered by ReactJS and includes features like MealTracker, CalendarView, and HealthScanner, with seamless transitions via React Router.",
        techStack: ["ReactJS", "DeepFace", "Python"],
        images: [serenity1, serenity2, serenity3, serenity4, serenity5],
        isGallery: true
    },
    {
        title: "MRI Brain Analysis",
        category: "AI & Computer Vision",
        description: "A medical imaging project featuring DICOM processing, thresholding, and region growing segmentation. It performs contour detection for tumor edges, GLCM texture analysis, and uses a Roboflow serverless inference model for tumor detection.",
        techStack: ["Python", "OpenCV", "Roboflow", "DICOM"],
        images: [mriBrain1],
        isGallery: true
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
            >
                Selected Work
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        layoutId={`project-${index}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        onClick={() => setSelectedProject(project)}
                        className="group"
                        style={{ cursor: 'pointer' }}
                    >
                        <div style={{
                            height: '300px',
                            background: project.images ? `url(${project.images[0]}) center/cover no-repeat` : project.image,
                            borderRadius: '16px',
                            marginBottom: '1.5rem',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <div
                                className="overlay"
                                style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    background: 'rgba(0,0,0,0.5)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <div style={{
                                    padding: '1rem',
                                    background: 'white',
                                    borderRadius: '50%',
                                    transform: 'scale(0.8)',
                                    transition: 'transform 0.3s'
                                }}>
                                    <ArrowUpRight color="black" />
                                </div>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>{project.category}</p>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.9)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            overflowY: 'auto'
                        }}
                    >
                        <motion.div
                            layoutId={`project-${projects.indexOf(selectedProject)}`} // Not strictly necessary if layoutId logic is simple, but adds nice morph
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: '#111',
                                padding: '2rem',
                                borderRadius: '24px',
                                width: '100%',
                                maxWidth: '900px',
                                maxHeight: '90vh',
                                overflowY: 'auto',
                                position: 'relative',
                                border: '1px solid #333'
                            }}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    padding: '0.5rem',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <X />
                            </button>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{selectedProject.title}</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                {selectedProject.category}
                            </p>

                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                {selectedProject.techStack?.map((tech, i) => (
                                    <span key={i} style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '100px',
                                        fontSize: '0.9rem',
                                        color: '#ccc',
                                        border: '1px solid #333'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p style={{ marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.1rem', color: '#ddd' }}>
                                {selectedProject.description}
                            </p>

                            {selectedProject.images && (
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {selectedProject.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`Project shot ${i + 1}`}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '12px',
                                                objectFit: 'cover',
                                                border: '1px solid #333'
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                            {!selectedProject.images && (
                                <div style={{
                                    width: '100%',
                                    height: '300px',
                                    background: selectedProject.image,
                                    borderRadius: '16px'
                                }}></div>
                            )}

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .group:hover .overlay {
                    opacity: 1 !important;
                }
                .group:hover .overlay div {
                    transform: scale(1) !important;
                }
            `}</style>
        </section>
    );
};

export default Projects;
