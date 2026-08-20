"use client";

import { CheckCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StaggerContainer, StaggerItem } from "@/components/animations/MotionBox";
import { WHAT_YOU_LEARN } from "@/constants";

export function WhatYouLearn() {
  return (
    <section id="conteudo" className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-rose-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="O que você vai aprender"
          subtitle="Um conteúdo completo e estruturado para começar a organizar sua vida financeira."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {WHAT_YOU_LEARN.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group flex gap-4 p-6 bg-white rounded-2xl border border-rose-light/20 hover:shadow-card-hover hover:border-rose-medium/30 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-light to-rose-medium/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={20} className="text-rose-medium" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
