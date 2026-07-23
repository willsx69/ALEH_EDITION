"use client";

import { Check } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionBox, StaggerContainer, StaggerItem } from "@/components/animations/MotionBox";
import { WHAT_YOU_LEARN } from "@/constants";

export function WhatYouLearn() {
  return (
    <section id="conteudo" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="O que você vai aprender"
          subtitle="Um conteúdo completo e estruturado para sua transformação financeira."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {WHAT_YOU_LEARN.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex gap-4 p-6 bg-rose-bg rounded-2xl border border-rose-light/20 h-full">
                <div className="w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center shrink-0">
                  <Check size={20} className="text-rose-medium" />
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
