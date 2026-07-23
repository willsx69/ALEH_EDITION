"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FAQS } from "@/constants";

export function FAQSection() {
  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre o Edition Aleh."
        />

        <FAQAccordion faqs={FAQS} />
      </div>
    </section>
  );
}
