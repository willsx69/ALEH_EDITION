"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { StaggerContainer, StaggerItem } from "@/components/animations/MotionBox";
import { WHAT_YOU_GET } from "@/constants";
import { DynamicIcon } from "@/components/ui/Icon";
import { Check } from "lucide-react";

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

export function WhatYouGet() {
  return (
    <section id="conteudo-incluido" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="O que você vai encontrar no Edition Aleh"
          subtitle="Tudo o que está incluído na sua compra, pronto para você começar sua organização financeira."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {WHAT_YOU_GET.map((item, index) => {
            const i = index % gradients.length;
            return (
              <StaggerItem key={item.title}>
                <div
                  className={`group relative bg-white rounded-3xl p-8 border-2 ${borderColors[i]} hover:shadow-xl transition-all duration-500 h-full flex flex-col`}
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl opacity-30 rounded-bl-full pointer-events-none ${gradients[i]}`} />

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <DynamicIcon name={item.icon} className={`${iconColors[i]}`} size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>

                  <p className="text-gray-500 leading-relaxed flex-1">{item.description}</p>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                      <Check size={14} />
                      Incluso na oferta
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}