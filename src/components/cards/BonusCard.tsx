"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { StaggerItem } from "@/components/animations/MotionBox";
import { Gift } from "lucide-react";
import type { Bonus } from "@/types";

interface BonusCardProps {
  bonus: Bonus;
  index: number;
}

const gradients = [
  "from-violet-500/20 to-purple-500/10",
  "from-emerald-500/20 to-teal-500/10",
  "from-amber-500/20 to-orange-500/10",
  "from-rose-500/20 to-pink-500/10",
];

const iconColors = [
  "text-violet-600",
  "text-emerald-600",
  "text-amber-600",
  "text-rose-600",
];

const borderColors = [
  "border-violet-200/50 group-hover:border-violet-300",
  "border-emerald-200/50 group-hover:border-emerald-300",
  "border-amber-200/50 group-hover:border-amber-300",
  "border-rose-200/50 group-hover:border-rose-300",
];

export function BonusCard({ bonus, index }: BonusCardProps) {
  const i = index % gradients.length;

  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -8 }}
        className={`group relative bg-white rounded-3xl p-8 border-2 ${borderColors[i]} hover:shadow-xl transition-all duration-500 h-full flex flex-col`}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl opacity-30 rounded-bl-full pointer-events-none ${gradients[i]}" />

        <Badge variant="gold">Grátis</Badge>

        <div className={`mt-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
          <DynamicIcon name={bonus.icon} className={`${iconColors[i]}`} size={28} />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{bonus.title}</h3>

        <p className="text-gray-500 leading-relaxed flex-1">{bonus.description}</p>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-dark">
            <Gift size={14} />
            Incluso no eBook
          </span>
        </div>

        <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </motion.div>
    </StaggerItem>
  );
}
