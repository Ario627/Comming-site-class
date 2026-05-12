"use client"

import { SuccessState } from "./success-state"
import { CategoryPicker } from "./category-picker"
import  {CharCounter} from "./char-counter"
import  {SubmitButton} from "./submit-button"
import { useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"

const MAX_CHARS = 5000;
const MIN_CHARS = 10;

export function SuggestionForm() {
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("umum");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isDisabled = message.trim().length < MIN_CHARS || status === "loading";

  const handleSubmit = useCallback(
    async (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isDisabled) return;

      setStatus("loading");
      setErrorMessage("");

      try {
        const res = await fetch("/api/suggestions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: message.trim(), category }),
        });

        const data = await res.json();

        if (!res.ok) {
          setStatus("error");
          setErrorMessage(data.error || "Terjadi kesalahan. Silakan coba lagi.");
          return;
        }

        setStatus("success");
      } catch {
        setStatus("error");
        setErrorMessage("Tidak dapat terhubung. Periksa koneksi internetmu.");
      }
    },
    [message, category, isDisabled, status]
  );

  const handleReset = useCallback(() => {
    setMessage("");
    setCategory("umum");
    setStatus("idle");
    setErrorMessage("");
  }, []);

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SuccessState onReset={handleReset} />
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-[10px] md:text-xs text-charcoal tracking-wider">
                Kategori
              </label>
              <CategoryPicker
                value={category}
                onChange={setCategory}
                disabled={status === "loading"}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] md:text-xs text-charcoal tracking-wider">
                Pesan
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis saran atau masukanmu di sini..."
                disabled={status === "loading"}
                maxLength={MAX_CHARS}
                rows={4}
                className="w-full bg-cream/80 text-charcoal text-xs md:text-sm font-sans p-3 pixel-border resize-none placeholder:text-slate/50 transition-colors duration-150 focus:outline-none focus:bg-cream disabled:opacity-50"
              />
              <div className="flex justify-end">
                <CharCounter current={message.length} max={MAX_CHARS} />
              </div>
            </div>

            <AnimatePresence>
              {status === "error" && errorMessage && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-[10px] md:text-xs text-blush font-sans leading-relaxed"
                >
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>

            <SubmitButton isLoading={status === "loading"} disabled={isDisabled} />
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}