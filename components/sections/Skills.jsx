'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const tileRefs = useRef({});

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/content');
        const data = await response.json();
        setSkills(data.skills || []);
      } catch (error) {
        console.error('Error fetching skills:', error);
        setSkills([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const handleMouseMove = (e, skillName) => {
    const tile = tileRefs.current[skillName];
    if (!tile) return;

    const rect = tile.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    setMousePos({ x, y, rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const tileVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-12"
        >
          <h2 className="section-title">Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Tools, languages, and technologies I work with daily to build scalable, performant applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        {loading ? (
          <div className="text-center text-gray-400">Loading skills...</div>
        ) : (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              ref={(el) => el && (tileRefs.current[skill] = el)}
              className="glass-panel p-4 sm:p-5 flex items-center justify-center text-center group cursor-default h-full relative"
              variants={tileVariants}
              onMouseMove={(e) => handleMouseMove(e, skill)}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={handleMouseLeave}
              style={
                hoveredSkill === skill
                  ? {
                      transform: `perspective(1000px) rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale(1.12)`,
                    }
                  : { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)' }
              }
              animate={
                hoveredSkill === skill
                  ? { y: -8, boxShadow: '0 0 15px rgba(123, 148, 212, 0.5), inset 0 0 12px rgba(123, 148, 212, 0.15)' }
                  : { y: 0, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }
              }
              transition={{ type: 'spring', stiffness: 600, damping: 20 }}
            >
              {/* Subtle Glow on Hover - Snappier and Theme-colored */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/25 to-purple-500/25 blur-md"></div>
              </div>
              <span className="font-semibold text-sm sm:text-base text-white group-hover:text-cyan-400 transition-colors relative z-10">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
        )}
      </div>
    </section>
  );
}
