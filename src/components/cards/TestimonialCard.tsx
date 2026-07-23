"use client";

import { Card } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card variant="elegant" hover={false} className="h-full">
      <Quote size={20} className="text-rose-light mb-3 sm:mb-4 sm:w-8 sm:h-8" />

      <p className="text-gray-600 leading-relaxed mb-6 italic">
        "{testimonial.content}"
      </p>

      <div className="mb-4">
        <Rating value={testimonial.rating} />
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-light to-rose-medium flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </Card>
  );
}
