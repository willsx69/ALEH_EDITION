"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { BonusCard } from "@/components/cards/BonusCard";
import { StaggerContainer } from "@/components/animations/MotionBox";
import { BONUSES } from "@/constants";

export function Bonuses() {
  return (
    <section id="bonus" className="relative py-20 sm:py-28 bg-gradient-to-b from-rose-bg to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="Bônus Inclusos"
          subtitle="Um pacote completo de ferramentas para colocar sua organização financeira em prática."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {BONUSES.map((bonus, index) => (
            <BonusCard key={bonus.title} bonus={bonus} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
