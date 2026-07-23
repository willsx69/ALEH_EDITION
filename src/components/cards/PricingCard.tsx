"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { PricingPlan } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative max-w-lg mx-auto"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-rose-medium via-rose-strong to-gold rounded-3xl blur opacity-20" />

      <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-card overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-light via-rose-medium to-gold" />

        <div className="text-center mb-8">
          <Badge variant="gold">Oferta Especial</Badge>
          <h3 className="text-2xl font-bold text-gray-900 mt-4">{plan.name}</h3>
          <p className="text-gray-500 mt-2">{plan.description}</p>
        </div>

        <div className="text-center mb-8">
          {plan.originalPrice && (
            <p className="text-gray-400 line-through text-lg mb-1">{plan.originalPrice}</p>
          )}
          <p className="text-3xl sm:text-5xl font-bold text-gray-900">{plan.price}</p>
          <p className="text-gray-400 text-sm mt-2">Pagamento único - acesso vitalício</p>
        </div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-rose-light/30 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={14} className="text-rose-strong" />
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant="primary"
          size="lg"
          className="w-full"
          icon={<Sparkles size={20} />}
          iconPosition="left"
        >
          Quero meu Ebook
        </Button>

          <div className="flex items-center justify-center gap-2 mt-4">
          <ShieldCheck size={16} className="text-gray-400" />
          <span className="text-gray-400 text-xs">Compra segura • Acesso imediato</span>
        </div>
      </div>
    </motion.div>
  );
}
