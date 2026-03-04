"use client";

import { motion } from "framer-motion";
import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface TimelineEntry {
  date: string;
  company: string;
  companyLogo?: string;
  position: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="w-full font-sans py-4">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-8 bottom-8 w-[2px] bg-white/20" />

        {data.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative mb-8 pl-12 md:pl-16 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-2 md:left-4 top-6 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-black/60 z-10" />

            {/* Date badge - outside the card */}
            <div className="mb-3">
              <span className="text-sm text-blue-400 font-medium bg-blue-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/20">
                {entry.date}
              </span>
            </div>

            {/* Card with glow effect */}
            <div className="relative rounded-xl p-[2px]">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
                variant="blue"
              />
              <div className="relative bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-6 shadow-xl shadow-black/20">
                {/* Company header with logo */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/70 font-medium text-sm md:text-base">
                    {entry.company}
                  </span>
                  {entry.companyLogo && (
                    <img
                      src={entry.companyLogo}
                      alt={`${entry.company} logo`}
                      className="h-8 md:h-10 w-auto object-contain rounded-lg border border-white/20"
                    />
                  )}
                </div>

                {/* Position title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {entry.position}
                </h3>

                {/* Content */}
                <div className="text-white/80">
                  {entry.content}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
