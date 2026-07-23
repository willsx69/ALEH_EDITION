"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProblemCard } from "@/components/cards/ProblemCard";
import { StaggerContainer } from "@/components/animations/MotionBox";
import { PROBLEMS } from "@/constants";
import { PeonyDecorationLeft, PeonyDecorationRight } from "@/components/animations/PeonyDecoration";

export function Problems() {
  return (
    <section id="problemas" className="relative py-20 sm:py-28 bg-rose-bg overflow-hidden">
      <PeonyDecorationLeft className="opacity-30" />
      <PeonyDecorationRight className="opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="Você se identifica?"
          subtitle="Se você respondeu sim a algum desses cenários, o Edition Aleh foi feito para você."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PROBLEMS.map((problem, index) => (
            <ProblemCard key={problem.title} problem={problem} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
