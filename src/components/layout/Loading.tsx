"use client";

import { motion } from "framer-motion";

export function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-rose-bg">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-medium to-rose-strong flex items-center justify-center mx-auto mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-white font-bold text-2xl">A</span>
        </motion.div>
        <motion.p
          className="text-rose-medium font-semibold"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Carregando...
        </motion.p>
      </div>
    </div>
  );
}
