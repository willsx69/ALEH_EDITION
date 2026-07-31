"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ModuleCard } from "@/components/cards/ModuleCard";
import { StaggerContainer } from "@/components/animations/MotionBox";
import { MODULES } from "@/constants";
import { BrainCircuit, Wrench, TrendingUp } from "lucide-react";

const categories = [
  {
    label: "Fundamentos",
    icon: BrainCircuit,
    modules: MODULES.slice(0, 2),
  },
  {
    label: "Prática",
    icon: Wrench,
    modules: MODULES.slice(2, 4),
  },
  {
    label: "Extras",
    icon: TrendingUp,
    modules: MODULES.slice(4),
  },
];

export function Modules() {
  return (
    <section id="modulos" className="relative py-20 sm:py-28 bg-rose-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Conteúdo Completo do eBook"
          subtitle="5 módulos essenciais organizados em categorias para transformar sua relação com o dinheiro."
        />

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.label}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-light to-rose-medium/20 flex items-center justify-center">
                  <category.icon size={20} className="text-rose-medium" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{category.label}</h3>
                  <p className="text-sm text-gray-400">{category.modules.length} módulo{category.modules.length > 1 ? "s" : ""}</p>
                </div>
              </div>

              <StaggerContainer className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                {category.modules.map((mod) => (
                  <ModuleCard key={mod.number} module={mod} />
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
