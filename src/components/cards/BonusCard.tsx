"use client";

import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { StaggerItem } from "@/components/animations/MotionBox";
import type { Bonus } from "@/types";

interface BonusCardProps {
  bonus: Bonus;
}

export function BonusCard({ bonus }: BonusCardProps) {
  return (
    <StaggerItem>
      <Card className="relative overflow-hidden h-full">
        <Badge variant="gold">Grátis</Badge>

        <div className="mt-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mb-5">
          <DynamicIcon name={bonus.icon} className="text-gold" size={24} />
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{bonus.title}</h3>

        <p className="text-gray-500 leading-relaxed">{bonus.description}</p>
      </Card>
    </StaggerItem>
  );
}
