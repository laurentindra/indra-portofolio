import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        // Add hover effect listeners
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid white',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'white' : 'transparent'
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`
                }}
            />
        </>
    );
};

export default CustomCursor;
