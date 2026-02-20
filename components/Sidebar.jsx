'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import Link from 'next/link';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('top');
  const { theme, cycleTheme } = useTheme();

  const sections = [
    { id: 'top', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section
      let currentSection = 'top';
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sidebar for Desktop */}
      <motion.div 
        className="fixed left-0 top-0 h-screen w-64 hidden lg:flex flex-col items-start justify-start py-8 px-8 z-50 border-r border-white/10"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)'
        }}
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          className="mb-16"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="#top" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            SM
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="space-y-8 w-full mb-auto">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className="text-left w-full group"
              whileHover={{ x: 5 }}
              whileTap={{ x: 3 }}
            >
              <div className="relative">
                <h3 className={`text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                  activeSection === section.id 
                    ? 'text-white' 
                    : 'text-gray-500 group-hover:text-gray-300'
                }`}>
                  {section.label}
                </h3>
                {activeSection === section.id && (
                  <motion.div
                    className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"
                    layoutId="sidebar-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                  />
                )}
              </div>
              <div className={`h-px mt-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-blue-400 to-purple-600 opacity-100'
                  : 'bg-gradient-to-r from-white/10 to-transparent opacity-30 group-hover:opacity-60'
              }`} />
            </motion.button>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Connect Buttons */}
        <div className="w-full space-y-3 mb-6">
          <motion.a
            href="https://github.com/shreywy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full p-3 rounded-lg border border-white/20 text-white hover:border-blue-400 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/shreymistry/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full p-3 rounded-lg border border-white/20 text-white hover:border-blue-400 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </motion.a>

          <motion.a
            href="mailto:shrey.d.mistry@gmail.com"
            className="flex items-center justify-center w-full p-3 rounded-lg border border-white/20 text-white hover:border-purple-400 hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title="Email"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </motion.a>
        </div>

        {/* Theme Toggle: Paint Brush Icon */}
        <motion.button
          onClick={cycleTheme}
          className="flex items-center justify-center w-full p-3 rounded-lg border border-white/20 text-white hover:border-blue-400 hover:text-blue-400 transition-colors mt-2"
          whileHover={{ scale: 1.05, rotate: 360 }}
          whileTap={{ scale: 0.95 }}
          title="Change theme"
        >
          {/* Paint brush SVG icon, spins on hover */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* Paint Brush */}
            <path d="M20.71 4.63L19.37 3.29c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.5 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.71l-1.83-1.83-10.59 10.59 1.83 1.83 10.59-10.59z" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Style adjustment for sidebar layout */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          main {
            margin-left: 256px;
          }
          header {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
