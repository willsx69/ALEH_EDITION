"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

export function Countdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  const { hours, minutes, seconds } = useCountdown(targetDate.toISOString());

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      {[
        { label: "Horas", value: hours },
        { label: "Minutos", value: minutes },
        { label: "Segundos", value: seconds },
      ].map(({ label, value }) => (
        <motion.div
          key={label}
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-white/20">
            <motion.span
              key={value}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl sm:text-4xl font-bold text-white block"
            >
              {String(value).padStart(2, "0")}
            </motion.span>
          </div>
          <span className="text-xs text-white/60 mt-2 block">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}
