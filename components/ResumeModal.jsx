'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function ResumeModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0.3, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    exit: { scale: 0.3, opacity: 0 },
  };

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/images/resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Shrey_Mistry_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            className="relative w-full max-w-4xl max-h-[80vh] glass-panel p-6 sm:p-8"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-400">My Resume</h2>

            {/* PDF Viewer */}
            <div className="w-full h-[50vh] sm:h-[60vh] border border-white/20 rounded-lg overflow-hidden bg-black/50 mb-6">
              <iframe
                src="/images/resume.pdf"
                className="w-full h-full"
                title="Resume"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <motion.button
                onClick={onClose}
                className="px-6 py-2 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
              <motion.button
                onClick={handleDownload}
                disabled={isLoading}
                className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold rounded-lg disabled:opacity-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? 'Downloading...' : 'Download PDF'}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
