import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCardGallery = ({ 
  cards = [],
  backgroundColor = "bg-transparent",
  accentColor = "var(--theme-color)", // Theme color glow
  maxCards = 6
}: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse movement for perspective effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to container center
      // Reduced parallax effect by dividing by a larger number
      const x = (e.clientX - rect.left - rect.width / 2) / 100;
      const y = (e.clientY - rect.top - rect.height / 2) / 100;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // For accessibility and mobile
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  // Ensure we only display up to maxCards
  const displayCards = cards.slice(0, maxCards);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden ${backgroundColor} flex items-center justify-center py-8`}
      style={{
        perspective: '1500px',
      }}
    >
      <motion.div 
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 w-full max-w-7xl"
        style={{
          transform: `rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {displayCards.map((card: any, index: number) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
            aria-expanded={activeIndex === index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ 
              z: 30,
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100"
              animate={{
                opacity: activeIndex === index ? 0.6 : 0,
                boxShadow: `0 0 40px 2px ${accentColor}`,
              }}
              transition={{ duration: 0.4 }}
              style={{
                background: `linear-gradient(135deg, ${accentColor}, transparent 80%)`,
              }}
            />
            
            {/* Card content */}
            <motion.div 
              className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 h-full flex flex-col overflow-hidden"
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Floating elements */}
              <div 
                className="absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-50 blur-xl"
                style={{ 
                  background: `linear-gradient(to right, ${accentColor}, transparent)`,
                  transform: `translateZ(${Math.random() * 10 + 10}px)`,
                }}
              />
              
              {/* Card content */}
              <motion.div
                style={{ transform: 'translateZ(30px)' }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--theme-color)] transition-colors">{card.title}</h3>
                <p className="text-neutral-300 text-sm mb-4 line-clamp-3 flex-1">{card.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {card.tech.map((tech: string, i: number) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 text-neutral-200 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Expanded content */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-xl p-6 z-50 border border-white/20 flex flex-col"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{ transform: 'translateZ(60px)' }}
                >
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(null);
                    }}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-white"
                    aria-label="Close"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <h2 className="text-2xl font-bold text-white mb-4 pr-8">{card.title}</h2>
                  <p className="text-neutral-300 mb-6 flex-1 overflow-y-auto">{card.fullDescription || card.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <a 
                      href={card.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 rounded-lg bg-[var(--theme-color)] text-black font-semibold hover:opacity-90 transform transition hover:-translate-y-1"
                    >
                      View on GitHub
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingCardGallery;
