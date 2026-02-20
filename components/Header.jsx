'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/providers/ThemeProvider';
import Link from 'next/link';

export default function Header() {
  const { theme, cycleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300`}
      style={{
        paddingTop: isScrolled ? '1rem' : '1.5rem',
        paddingBottom: isScrolled ? '1rem' : '1.5rem',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#top">SM.</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors relative"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-blue-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
            </motion.a>
          ))}
        </nav>

        {/* Theme Controls */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={cycleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            whileHover={{ rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            title="Change theme"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              {/* Paint Brush Icon */}
              <path d="M20.71 4.63L19.37 3.29c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.5 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.71l-1.83-1.83-10.59 10.59 1.83 1.83 10.59-10.59z" />
            </svg>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          className="md:hidden glass-panel m-4 p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="block py-3 text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
