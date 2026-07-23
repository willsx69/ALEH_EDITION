"use client";

import { motion } from "framer-motion";

export function PeonyDecoration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.circle
        cx="60"
        cy="60"
        r="28"
        fill="#F7C9D7"
        opacity="0.4"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M60 38C60 38 68 48 68 56C68 64 64 70 60 70C56 70 52 64 52 56C52 48 60 38 60 38Z"
        fill="#F06A94"
        opacity="0.6"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.path
        d="M60 42C60 42 66 50 66 56C66 62 63 66 60 66C57 66 54 62 54 56C54 50 60 42 60 42Z"
        fill="#EB4B7A"
        opacity="0.4"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.circle
        cx="60"
        cy="58"
        r="4"
        fill="#D4AF37"
        opacity="0.5"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.path
        d="M60 82C70 82 78 76 78 68"
        stroke="#D4AF37"
        strokeWidth="1.5"
        opacity="0.3"
        fill="none"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M60 82C50 82 42 76 42 68"
        stroke="#D4AF37"
        strokeWidth="1.5"
        opacity="0.3"
        fill="none"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </motion.svg>
  );
}

export function PeonyDecorationLeft({ className = "" }: { className?: string }) {
  return <PeonyDecoration className={`absolute left-0 top-1/3 -translate-x-1/3 w-32 h-32 opacity-50 ${className}`} />;
}

export function PeonyDecorationRight({ className = "" }: { className?: string }) {
  return <PeonyDecoration className={`absolute right-0 top-2/3 translate-x-1/3 w-28 h-28 opacity-40 ${className}`} />;
}
