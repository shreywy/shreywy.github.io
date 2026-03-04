"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

interface TimelineEntry {
  title: React.ReactNode | string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 relative"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start md:w-48 lg:w-64">
              <div className="h-10 absolute left-3 md:left-full md:-translate-x-1/2 md:-ml-[1px] w-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <div className="hidden md:flex w-full justify-end md:pr-12">
                {item.title}
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-12 w-full md:w-[calc(100%-12rem)] lg:w-[calc(100%-16rem)]">
              <div className="md:hidden block mb-4 text-left">
                {item.title}
              </div>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div className="absolute md:left-48 lg:left-64 left-8 -top-8 -translate-x-1/2 text-[var(--theme-color)] z-50 bg-black/60 rounded-full p-1 backdrop-blur-md border border-white/10 ml-[1px]">
          <ArrowUp className="w-4 h-4" />
        </div>
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-48 lg:left-64 left-8 top-0 overflow-hidden w-[2px] bg-white/20"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          />
        </div>
      </div>
    </div>
  );
};
