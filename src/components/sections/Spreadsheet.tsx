"use client";

import { motion } from "framer-motion";
import { Table2, Check, Sparkles, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SPREADSHEET_LINK, SPREADSHEET_PRICING } from "@/constants";

export function Spreadsheet() {
  return (
    <section
      id="planilha"
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Planilha Financeira Premium"
          subtitle="Uma ferramenta complementar ao Edition Aleh para colocar sua organização financeira em prática."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-lg mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-gold via-rose-medium to-gold rounded-3xl blur opacity-20" />

          <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-card overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-rose-medium to-gold" />

            <div className="text-center mb-8">
              <Badge variant="gold">Novidade</Badge>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/15 to-rose-light/20 flex items-center justify-center mx-auto mt-6">
                <Table2 size={32} className="text-rose-medium" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-4">{SPREADSHEET_PRICING.name}</h3>
              <p className="text-gray-500 mt-2">{SPREADSHEET_PRICING.description}</p>
            </div>

            <div className="text-center mb-8">
              {SPREADSHEET_PRICING.originalPrice && (
                <p className="text-gray-400 line-through text-lg mb-1">{SPREADSHEET_PRICING.originalPrice}</p>
              )}
              <p className="text-3xl sm:text-5xl font-bold text-gray-900">{SPREADSHEET_PRICING.price}</p>
              <p className="text-gray-400 text-sm mt-2">Pagamento único - acesso vitalício</p>
            </div>

            <ul className="space-y-4 mb-8">
              {SPREADSHEET_PRICING.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-gold-dark" />
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
              href={SPREADSHEET_LINK}
            >
              Quero minha Planilha
            </Button>

            <div className="flex items-center justify-center gap-2 mt-4">
              <ShieldCheck size={16} className="text-gray-400" />
              <span className="text-gray-400 text-xs">Compra segura • Acesso imediato</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}