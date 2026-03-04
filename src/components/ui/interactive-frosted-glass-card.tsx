import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const FrostedGlassCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        };

        card.addEventListener('mousemove', handleMouseMove);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            ref={cardRef} 
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl shadow-2xl transition-colors hover:bg-black/60",
                className
            )}
        >
            <div 
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,.1), transparent 40%)`
                }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
