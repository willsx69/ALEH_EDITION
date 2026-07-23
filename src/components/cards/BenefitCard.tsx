"use client";

import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/Icon";
import { StaggerItem } from "@/components/animations/MotionBox";
import type { Benefit } from "@/types";

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  return (
    <StaggerItem>
      <Card className="relative overflow-hidden group h-full">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-light/20 to-transparent rounded-bl-full" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-light to-rose-medium/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <DynamicIcon
              name={benefit.icon}
              className="text-rose-strong"
              size={24}
            />
          </div>

<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              {benefit.title}
            </h3>

          <p className="text-gray-500 leading-relaxed">
            {benefit.description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-light via-rose-medium to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Card>
    </StaggerItem>
  );
}
