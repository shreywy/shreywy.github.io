import React, { useState, useRef } from 'react';
import { Github } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, imageSrc, tags, githubUrl }: ProjectCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Reduced tilt angles for smoother effect
    const tiltX = ((y - centerY) / centerY) * -6;
    const tiltY = ((x - centerX) / centerX) * 6;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: '1000px' }} className="w-full h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl p-[2px] h-full"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)${isHovering ? ' scale(1.02)' : ''}`,
          transition: 'transform 0.15s ease-out',
          transformStyle: 'preserve-3d',
        }}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
          variant="blue"
        />
        <div
          className="relative w-full h-full flex flex-col rounded-3xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl hover:bg-black/70 overflow-hidden"
        >
          <div className="p-6 md:p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4 gap-4">
              <h3 className="text-2xl font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">{title}</h3>
              <div className="flex gap-3 shrink-0">
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="w-full aspect-[2/1] mb-6 rounded-xl overflow-hidden border border-white/10 bg-black/20 shrink-0">
              <img src={imageSrc} alt={title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>

            <p className="text-white/80 leading-relaxed mb-6 flex-grow [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/90 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
