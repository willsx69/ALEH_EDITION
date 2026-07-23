"use client";

import { motion } from "framer-motion";
import { ArrowRight, X, Check } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionBox, StaggerContainer, StaggerItem } from "@/components/animations/MotionBox";
import { BEFORE_AFTER } from "@/constants";

export function BeforeAfterSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-rose-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Antes e Depois"
          subtitle="A transformação que o Edition Aleh proporciona na vida das mulheres."
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <MotionBox direction="left">
            <div className="p-6 sm:p-8 bg-white/50 rounded-3xl border border-red-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <X size={20} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Antes</h3>
              </div>
              <ul className="space-y-4">
                {BEFORE_AFTER.before.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <X size={14} className="text-red-400" />
                    </div>
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionBox>

          <MotionBox direction="right">
            <div className="p-6 sm:p-8 bg-white rounded-3xl shadow-card border border-green-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Check size={20} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Depois</h3>
              </div>
              <ul className="space-y-4">
                {BEFORE_AFTER.after.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionBox>
        </div>
      </div>
    </section>
  );
}
