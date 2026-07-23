"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { BenefitCard } from "@/components/cards/BenefitCard";
import { StaggerContainer } from "@/components/animations/MotionBox";
import { BENEFITS } from "@/constants";

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="Tudo que você vai conquistar"
          subtitle="Benefícios que vão além do dinheiro. Uma transformação completa na sua relação com as finanças."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
