"use client";

import { MotionBox } from "@/components/animations/MotionBox";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <MotionBox className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="w-8 h-px bg-gradient-to-r from-transparent to-rose-medium" />
        <span className={`text-sm font-semibold uppercase tracking-[0.2em] ${light ? "text-rose-light" : "text-rose-medium"}`}>
          Edition Aleh
        </span>
        <span className="w-8 h-px bg-gradient-to-l from-transparent to-rose-medium" />
      </div>
      <h2
        className={`
          text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance
          ${light ? "text-white" : "text-gray-900"}
        `}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`
            mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed
            ${light ? "text-rose-light/80" : "text-gray-500"}
          `}
        >
          {subtitle}
        </p>
      )}
    </MotionBox>
  );
}
