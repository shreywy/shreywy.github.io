"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { type BackgroundShader, SHADER_NAMES } from "@/lib/cookies";

interface ShaderToggleProps {
  currentShader: BackgroundShader;
  onCycle: () => void;
  isExpanded: boolean;
}

export function ShaderToggle({ currentShader, onCycle, isExpanded }: ShaderToggleProps) {
  const [spinKey, setSpinKey] = useState(0);
  const currentName = SHADER_NAMES[currentShader];

  const handleClick = () => {
    setSpinKey(prev => prev + 1);
    onCycle();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex items-center gap-2 py-2 w-full text-left group/shader",
        "hover:bg-white/10 rounded-lg transition-colors px-1"
      )}
      title={`Current: ${currentName}. Click to cycle.`}
    >
      <motion.div
        key={spinKey}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <Sparkles className="text-blue-400 h-5 w-5 flex-shrink-0" />
      </motion.div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          className="flex items-center gap-2 overflow-hidden"
        >
          <span className="text-white text-sm whitespace-nowrap">
            {currentName}
          </span>
          <span className="text-white/40 text-xs whitespace-nowrap">
            (click)
          </span>
        </motion.div>
      )}
    </motion.button>
  );
}
