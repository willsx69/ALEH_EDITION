"use client";

import { Card } from "@/components/ui/Card";
import { DynamicIcon } from "@/components/ui/Icon";
import { StaggerItem } from "@/components/animations/MotionBox";
import type { Problem } from "@/types";

interface ProblemCardProps {
  problem: Problem;
  index: number;
}

export function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <StaggerItem>
      <Card className="relative overflow-hidden h-full text-center">
        <div className="w-16 h-16 rounded-full bg-rose-bg flex items-center justify-center mx-auto mb-5">
          <DynamicIcon
            name={problem.icon}
            className="text-rose-medium"
            size={28}
          />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">
          "{problem.title}"
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed">
          {problem.description}
        </p>
      </Card>
    </StaggerItem>
  );
}
