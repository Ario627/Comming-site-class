"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isLoading: boolean;
  disabled: boolean;
}

export function SubmitButton({ isLoading, disabled }: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={disabled || isLoading}
      whileTap={!disabled && !isLoading ? { scale: 0.95 } : {}}
      className={`
        w-full py-3 text-[10px] md:text-xs tracking-wider
        pixel-border pixel-hover
        transition-colors duration-150 cursor-pointer
        disabled:cursor-not-allowed disabled:opacity-50
        disabled:transform-none
        ${isLoading ? "bg-slate text-cream" : "bg-mint text-charcoal hover:bg-mint/80"}
      `}
    >
      <span className="flex items-center justify-center gap-2">
        {isLoading ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Mengirim...
          </>
        ) : (
          "KIRIM SARAN"
        )}
      </span>
    </motion.button>
  );
}