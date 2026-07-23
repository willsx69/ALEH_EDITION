"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variants = {
  primary:
    "bg-gradient-to-r from-rose-medium to-rose-strong text-white hover:from-rose-strong hover:to-rose-medium shadow-soft hover:shadow-card-hover",
  secondary:
    "bg-rose-light text-rose-strong hover:bg-rose-medium hover:text-white",
  outline:
    "border-2 border-rose-medium text-rose-medium hover:bg-rose-medium hover:text-white",
  ghost:
    "text-rose-medium hover:bg-rose-light/50",
  gold:
    "bg-gradient-to-r from-gold to-gold-light text-white hover:from-gold-dark hover:to-gold shadow-gold hover:shadow-lg",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-2xl",
  xl: "px-10 py-5 text-xl rounded-2xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading,
      icon,
      iconPosition = "right",
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative inline-flex items-center justify-center gap-2 font-semibold
          transition-all duration-300 overflow-hidden group
          ${variants[variant]}
          ${sizes[size]}
          ${disabled || isLoading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
          ${className}
        `}
        disabled={disabled || isLoading}
        {...(props as any)}
      >
        {isLoading && (
          <Loader2 className="w-5 h-5 animate-spin" />
        )}
        {!isLoading && icon && iconPosition === "left" && (
          <span className="relative z-10">{icon}</span>
        )}
        <span className="relative z-10">{children}</span>
        {!isLoading && icon && iconPosition === "right" && (
          <span className="relative z-10">{icon}</span>
        )}

        <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </motion.button>
    );
  }
);

Button.displayName = "Button";
