"use client";

import { AnimatePresence, motion } from "framer-motion";

interface CharCounterProps {
  current: number;
  max: number;
}

export function CharCounter({ current, max }: CharCounterProps) {
  const percentage = current / max;

  const colorClass =
    percentage >= 0.95
      ? "text-blush"
      : percentage >= 0.8
        ? "text-peach"
        : "text-slate";

  const isNearLimit = percentage >= 0.8;

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={colorClass}
        initial={isNearLimit ? { scale: 1.15 } : {}}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={`text-[8px] md:text-[10px] font-sans ${colorClass} transition-colors duration-200`}
      >
        {current}/{max}
      </motion.span>
    </AnimatePresence>
  );
}