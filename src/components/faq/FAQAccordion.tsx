"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MotionBox, StaggerContainer, StaggerItem } from "@/components/animations/MotionBox";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <StaggerContainer className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, index) => (
        <StaggerItem key={index}>
          <div
            className={`bg-white rounded-2xl shadow-card border border-rose-light/10 overflow-hidden transition-all duration-300 ${
              openIndex === index ? "shadow-card-hover" : ""
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown
                  size={20}
                  className={`transition-colors ${
                    openIndex === index ? "text-rose-medium" : "text-gray-400"
                  }`}
                />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-content-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="w-12 h-px bg-gradient-to-r from-rose-medium to-gold mb-4" />
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
