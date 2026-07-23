"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "elegant" | "highlighted" | "glass";
  hover?: boolean;
}

const cardStyles = {
  default:
    "bg-white rounded-2xl shadow-card border border-rose-light/20",
  elegant:
    "bg-white rounded-3xl shadow-card border border-gold/10",
  highlighted:
    "bg-gradient-to-br from-rose-bg via-white to-rose-bg rounded-3xl shadow-card border border-rose-light/30",
  glass:
    "bg-white/70 backdrop-blur-xl rounded-3xl shadow-card border border-white/50",
};

export function Card({
  variant = "default",
  hover = true,
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`
        p-6 sm:p-8 transition-shadow duration-300
        ${cardStyles[variant]}
        ${hover ? "hover:shadow-card-hover" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
