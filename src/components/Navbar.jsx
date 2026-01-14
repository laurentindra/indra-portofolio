import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 40,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-0.05em'
          }}
        >
          INDRA<span style={{ color: 'var(--accent)' }}>.</span>
        </motion.div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Home', 'About', 'Work', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                position: 'relative',
                cursor: 'pointer'
              }}
              className="nav-link"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
      <style>{`
        .nav-link {
          color: white;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: var(--accent);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
