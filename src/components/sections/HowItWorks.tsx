"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionBox, StaggerContainer, StaggerItem } from "@/components/animations/MotionBox";
import { Download, BookOpen, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Faça o Download",
    description: "Após a compra, receba imediatamente o ebook completo em PDF.",
  },
  {
    icon: BookOpen,
    title: "Leia no Seu Ritmo",
    description: "Estude cada módulo no seu tempo, do seu jeito, sem pressão.",
  },
  {
    icon: CheckCircle,
    title: "Aplique o Método",
    description: "Coloque em prática cada ensinamento com os exercícios e ferramentas.",
  },
  {
    icon: Sparkles,
    title: "Transforme sua Vida",
    description: "Veja a mudança acontecer e conquiste a liberdade financeira.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28 bg-rose-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Como funciona"
          subtitle="Simples, prático e transformador. Veja como é fácil começar."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <div className="text-center">
                <div className="relative mb-6 inline-flex">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-card flex items-center justify-center mx-auto">
                    <step.icon size={32} className="text-rose-medium" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-rose-light to-transparent -translate-y-1/2" />
                  )}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-medium mb-2 block">
                  Passo {index + 1}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
