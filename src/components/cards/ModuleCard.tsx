"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/ui/Icon";
import { StaggerItem } from "@/components/animations/MotionBox";
import type { Module } from "@/types";

interface ModuleCardProps {
  module: Module;
}

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -6 }}
        className="group relative bg-white rounded-[20px] p-8 sm:p-10 shadow-card border border-rose-light/20 hover:shadow-card-hover hover:border-rose-medium/30 transition-all duration-500 h-full flex flex-col"
      >
        <div className="flex items-start justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-rose-medium">
              Módulo {module.number}
            </span>
            <div className="text-6xl sm:text-7xl font-bold text-rose-light/30 leading-none mt-1 select-none">
              {String(module.number).padStart(2, "0")}
            </div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-rose-bg flex items-center justify-center group-hover:bg-rose-light/30 group-hover:scale-110 transition-all duration-300 shrink-0">
            <DynamicIcon name={module.icon} className="text-rose-medium" size={20} />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-6">
          {module.title}
        </h3>

        <div className="w-8 h-0.5 bg-gradient-to-r from-rose-medium to-gold rounded-full mb-6" />

        <ul className="space-y-3 flex-1">
          {module.topics.map((topic) => (
            <li key={topic} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/70 mt-2 shrink-0" />
              <span className="text-gray-500 text-sm leading-relaxed">{topic}</span>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-rose-light via-rose-medium to-gold rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </motion.div>
    </StaggerItem>
  );
}
