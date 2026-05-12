"use client";

import { motion } from "framer-motion";

interface CategoryPickerProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const categories = [
  { id: "fitur", label: "Fitur" },
  { id: "bug", label: "Bug" },
  { id: "uiux", label: "UI/UX" },
  { id: "umum", label: "Umum" },
];

const colorMap: Record<string, string> = {
  fitur: "bg-mint hover:bg-mint/80",
  bug: "bg-blush hover:bg-blush/80",
  uiux: "bg-sky hover:bg-sky/80",
  umum: "bg-lavender hover:bg-lavender/80",
};

export function CategoryPicker({ value, onChange, disabled }: CategoryPickerProps) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Kategori saran">
      {categories.map((cat) => {
        const isSelected = value === cat.id;
        return (
          <motion.button
            key={cat.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={disabled}
            onClick={() => onChange(cat.id)}
            whileTap={{ scale: 0.93 }}
            className={`
              text-[10px] md:text-xs px-3 py-1.5 pixel-border
              transition-colors duration-150 cursor-pointer
              disabled:opacity-50 disabled:cursor-not-allowed
              ${colorMap[cat.id]}
              ${isSelected ? "ring-2 ring-charcoal ring-offset-1 ring-offset-cream" : "opacity-70"}
            `}
          >
            {cat.label}
          </motion.button>
        );
      })}
    </div>
  );
}