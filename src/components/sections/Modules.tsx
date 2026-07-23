"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ModuleCard } from "@/components/cards/ModuleCard";
import { StaggerContainer } from "@/components/animations/MotionBox";
import { MODULES } from "@/constants";

export function Modules() {
  return (
    <section id="modulos" className="relative py-20 sm:py-28 bg-rose-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Módulos do Ebook"
          subtitle="5 módulos essenciais para transformar sua relação com o dinheiro."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODULES.map((module) => (
            <ModuleCard key={module.number} module={module} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
