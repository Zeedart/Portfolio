"use client";

import { motion } from "motion/react";

type StatCardProps = {
  value: string;
  label: string;
  icon: React.JSX.Element;
  className?: string;
};

export default function StatCard({
  value,
  label,
  icon,
  className = "",
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--bg-card)] p-7 transition-all duration-300 hover:border-[var(--border-hover)] ${className}`}
    >
      {/* Background glow */}
      <motion.div
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7167ff]/10 blur-3xl transition-all duration-500 group-hover:bg-[#7167ff]/20"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      />

      {/* Icon */}
      <motion.div
        className="relative mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#7167ff]/15 text-xl text-[#7167ff] ring-1 ring-[#7167ff]/20"
        whileHover={{ rotate: 8, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div className="relative">
        <motion.div
          className="text-4xl font-bold tracking-tight text-(--text)"
        >
          {value}
        </motion.div>

        <p className="mt-3 text-lg leading-6 text-(--text-muted)">
          {label}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7167ff] to-transparent transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}