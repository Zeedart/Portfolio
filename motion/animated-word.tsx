"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedWordProps {
  children: ReactNode;
  duration?: number;
  y?: number;
}

export function AnimatedWord({
  children,
  duration = 0.45,
  y = 12,
}: AnimatedWordProps) {
  return (
    <motion.span
      className="inline-block font-[inherit] tracking-[inherit]"
      variants={{
        hidden: {
          opacity: 0,
          y,
          filter: "blur(4px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        },
      }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.span>
  );
}