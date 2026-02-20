'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const cardRefs = useRef({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/content');
        const data = await response.json();
        setProjects(data.projects || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleMouseMove = (e, projectId) => {
    const card = cardRefs.current[projectId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalize to -1 to 1 range for smoother calculations
    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;

    // Enhanced 3D rotation with stronger effect
    const rotateX = -normalizedY * 12; // Negative for intuitive up/down
    const rotateY = normalizedX * 12;
    const rotateZ = normalizedX * 4; // Subtle Z rotation for folding effect
    
    // Calculate lift based on distance from center (stronger lift at edges)
    const distFromCenter = Math.sqrt(normalizedX ** 2 + normalizedY ** 2);
    const lift = Math.min(distFromCenter * 35, 50); // Max 50px lift

    setMousePos({ x, y, rotateX, rotateY, rotateZ, lift });
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const getProjectColor = (index) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-orange-500 to-red-500',
      'from-green-500 to-blue-500',
      'from-pink-500 to-purple-500',
      'from-yellow-500 to-orange-500',
    ];
    return colors[index % colors.length];
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-16 sm:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Built these with full-stack development, problem-solving, and attention to detail.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-gray-400">Loading projects...</div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                ref={(el) => el && (cardRefs.current[index] = el)}
                className="group relative glass-panel overflow-hidden flex flex-col h-full cursor-pointer"
                variants={cardVariants}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={handleMouseLeave}
                style={
                  hoveredProject === index
                    ? {
                        transform: `perspective(1200px) rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) rotateZ(${mousePos.rotateZ}deg) scale(1.12) translateZ(80px)`,
                        transformStyle: 'preserve-3d',
                      }
                    : { 
                        transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1) translateZ(0px)',
                        transformStyle: 'preserve-3d',
                      }
                }
                animate={
                  hoveredProject === index
                    ? { 
                        y: -mousePos.lift,
                        boxShadow: `0 ${20 + mousePos.lift * 0.3}px ${40 + mousePos.lift * 0.5}px rgba(123, 148, 212, 0.25), 0 0 30px rgba(157, 127, 196, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.05)` 
                      }
                    : { 
                        y: 0, 
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' 
                      }
                }
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                {/* Glowing Border Effect - Subtle and Theme-based */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 blur-lg"></div>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-black/50">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-0 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex-grow p-6 sm:p-8 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech?.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-gradient-to-r ${getProjectColor(index)} bg-clip-text text-transparent font-semibold text-xs border border-white/10 rounded-lg`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-purple-400 transition-colors self-start"
                    whileHover={{ x: 5 }}
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
