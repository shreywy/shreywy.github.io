'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ResumeModal } from '@/components/ResumeModal';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroContent, setHeroContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const containerRef = useRef(null);

  const typingSpeed = 50;

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const response = await fetch('/api/content');
        const data = await response.json();
        setHeroContent(data.hero || {});
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hero content:', error);
        setLoading(false);
      }
    };

    fetchHeroContent();
  }, []);

  useEffect(() => {
    if (!heroContent?.typing) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(heroContent.typing.slice(0, index + 1));
      index++;
      if (index === heroContent.typing.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [heroContent]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  if (loading) {
    return (
      <section
        id="top"
        className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="text-gray-400">Loading...</div>
      </section>
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 400;
      const opacity = Math.max(0, 1 - scrollTop / maxScroll);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="top"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="block mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                Shrey Mistry
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              {heroContent?.subtitle || ''}
            </p>
          </motion.div>

          {/* Typing Text */}
          <motion.div variants={itemVariants} className="mb-8 h-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 mb-8 leading-relaxed"
          >
            {heroContent?.description || ''}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.button>
            <motion.a
              href="#projects"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-bold rounded-xl hover:bg-blue-400 hover:text-black transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Bottom Right, Fades as User Scrolls */}
      <motion.div
        className="fixed bottom-8 right-8 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity: scrollOpacity }}
      >
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
