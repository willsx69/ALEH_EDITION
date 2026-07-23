"use client";

import { motion } from "framer-motion";

export function FloatingMockup() {
  return (
    <motion.div
      className="relative"
      animate={{
        y: [-8, 8, -8],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] mx-auto">
        <div className="relative bg-white rounded-3xl shadow-card overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-strong via-rose-medium to-gold" />
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center">
                <span className="text-rose-strong text-lg font-bold">A</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Edition Aleh</p>
                <p className="text-xs text-gray-400">Organização Financeira</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="h-8 bg-rose-bg rounded-lg w-3/4" />
              <div className="h-8 bg-rose-bg rounded-lg w-1/2" />
              <div className="h-24 bg-rose-bg rounded-xl w-full" />
              <div className="flex gap-3">
                <div className="h-10 w-16 bg-rose-light/50 rounded-lg flex-1" />
                <div className="h-10 w-16 bg-rose-light/50 rounded-lg flex-1" />
                <div className="h-10 w-16 bg-rose-light/50 rounded-lg flex-1" />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-rose-bg rounded-2xl">
              <div>
                <p className="text-xs text-gray-400">Progresso</p>
                <p className="text-sm font-semibold text-rose-strong">68% concluído</p>
              </div>
              <div className="w-16 h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full w-[68%] bg-gradient-to-r from-rose-medium to-gold rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gold/10 blur-2xl" />
        <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-rose-medium/10 blur-2xl" />
      </div>
    </motion.div>
  );
}
