"use client";

import { motion } from "framer-motion";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { WHATSAPP_LINK } from "@/constants";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <motion.span
        initial={{ opacity: 0, x: 10, pointerEvents: "none" }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : 10,
          pointerEvents: isHovered ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg text-sm font-medium whitespace-nowrap"
      >
        Fale conosco
      </motion.span>
      <motion.div
        className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-lg shadow-green-500/25"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <SocialIcon name="WhatsApp" size={28} />
      </motion.div>
    </motion.a>
  );
}
