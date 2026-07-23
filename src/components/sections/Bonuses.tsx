"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { BonusCard } from "@/components/cards/BonusCard";
import { StaggerContainer } from "@/components/animations/MotionBox";
import { BONUSES } from "@/constants";

export function Bonuses() {
  return (
    <section id="bonus" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Bônus Exclusivos"
          subtitle="Um pacote completo de ferramentas para acelerar sua transformação financeira."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {BONUSES.map((bonus) => (
            <BonusCard key={bonus.title} bonus={bonus} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
