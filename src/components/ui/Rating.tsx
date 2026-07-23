"use client";

import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  size?: number;
}

export function Rating({ value, size = 16 }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={`${
            i < value
              ? "fill-gold text-gold"
              : "fill-gray-200 text-gray-200"
          } transition-colors`}
        />
      ))}
    </div>
  );
}
