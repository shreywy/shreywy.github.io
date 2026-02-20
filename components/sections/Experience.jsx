'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('/api/content');
        const data = await response.json();
        setExperiences(data.experiences || []);
      } catch (error) {
        console.error('Error fetching experiences:', error);
        setExperiences([]);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-16 sm:py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="section-title">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Spent time building tools, automating workflows, and collaborating with teams to solve real problems.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-gray-400">Loading experiences...</div>
        ) : (
          <div className="relative">
            {/* Timeline */}
            {/* Triangle at top pointing upward */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -top-6 z-20 justify-center">
              <div className="w-0 h-0 border-l-3 border-r-3 border-b-4 border-l-transparent border-r-transparent border-b-blue-400"></div>
            </div>

            {/* Center Line - Dynamically sized based on content */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 opacity-20" style={{ height: 'calc(100% + 24px)', top: '-12px' }}></div>

          {/* Experience Items */}
          <motion.div
            className="space-y-8 lg:space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative">
                  {/* Desktop Layout: Alternating left-right */}
                  <div className="hidden lg:grid grid-cols-12 gap-4 items-center relative">
                    {/* Left Column - Card or Date */}
                    <div className="col-span-5">
                      {isEven ? (
                        <motion.div variants={cardVariants} className="glass-panel p-6 sm:p-8">
                          <h3 className="text-xl font-bold text-blue-400 mb-1">
                            {exp.company}
                          </h3>
                          <h4 className="text-base text-gray-300 mb-2 font-semibold">
                            {exp.role}
                          </h4>
                          <p className="text-sm text-gray-500 mb-4">
                            {exp.location}
                          </p>
                          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-lg text-xs font-semibold text-blue-300"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <div className="text-right pr-8">
                          <motion.div variants={cardVariants} className="inline-block">
                            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                              {exp.period}
                            </p>
                          </motion.div>
                        </div>
                      )}
                    </div>

                    {/* Center - Timeline Dot */}
                    <div className="col-span-2 flex justify-center">
                      <motion.div
                        className="w-5 h-5 rounded-full border-3 border-blue-400 bg-gray-900 shadow-lg shadow-blue-400/50 z-10"
                        whileInView={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {/* Right Column - Date or Card */}
                    <div className="col-span-5">
                      {!isEven ? (
                        <motion.div variants={cardVariants} className="glass-panel p-6 sm:p-8">
                          <h3 className="text-xl font-bold text-blue-400 mb-1">
                            {exp.company}
                          </h3>
                          <h4 className="text-base text-gray-300 mb-2 font-semibold">
                            {exp.role}
                          </h4>
                          <p className="text-sm text-gray-500 mb-4">
                            {exp.location}
                          </p>
                          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-lg text-xs font-semibold text-blue-300"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <div className="text-left pl-8">
                          <motion.div variants={cardVariants} className="inline-block">
                            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                              {exp.period}
                            </p>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <motion.div
                    variants={cardVariants}
                    className="lg:hidden glass-panel p-6"
                  >
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        {exp.period}
                      </p>
                    </div>

                    <h3 className="text-lg font-bold text-blue-400 mb-1">
                      {exp.company}
                    </h3>

                    <h4 className="text-base text-gray-300 mb-2 font-semibold">
                      {exp.role}
                    </h4>

                    <p className="text-sm text-gray-500 mb-3">
                      {exp.location}
                    </p>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-lg text-xs font-semibold text-blue-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
        )}
      </div>
    </section>
  );
}
