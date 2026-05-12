"use client";

import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

interface SuccessStateProps {
  onReset: () => void;
}

export function SuccessState({ onReset }: SuccessStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center gap-4 py-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.15 }}
        className="w-12 h-12 bg-mint pixel-border flex items-center justify-center"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </motion.div>

      <div className="text-center space-y-2">
        <p className="text-xs md:text-sm text-charcoal">
          Saran berhasil dikirim!
        </p>
        <p className="text-[10px] md:text-xs text-slate font-sans">
          Terima kasih, masukanmu sangat berarti.
        </p>
      </div>

      <motion.button
        type="button"
        onClick={onReset}
        whileTap={{ scale: 0.93 }}
        className="flex items-center gap-2 text-[10px] md:text-xs text-charcoal bg-lavender pixel-border px-4 py-2 hover:bg-lavender/80 transition-colors duration-150 cursor-pointer"
      >
        <RefreshCw className="w-3 h-3" />
        Kirim lagi
      </motion.button>
    </motion.div>
  );
}