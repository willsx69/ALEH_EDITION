"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Countdown } from "@/components/layout/Countdown";

export function CTA() {
  const handleClick = () => {
    const el = document.querySelector("#hero");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-rose-bg"
    >
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute inset-0 bg-gradient-radial from-rose-strong/10 via-transparent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium">Oferta por tempo limitado</span>
          </div>

          <div className="mb-8">
            <Countdown />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-balance">
            Seu futuro financeiro começa com{" "}
            <span className="text-gradient">uma decisão hoje</span>.
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Não espere o momento perfeito. Comece agora a construir a vida organizada e 
            próspera que você merece. Seu eu do futuro vai te agradecer.
          </p>

          <Button
            variant="gold"
            size="lg"
            className="sm:!text-xl sm:!px-10 sm:!py-5"
            icon={<Sparkles size={20} />}
            iconPosition="left"
            onClick={handleClick}
          >
            Quero meu Ebook Agora
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} />
              Compra Segura
            </span>
            <span className="flex items-center gap-1">
              <ArrowRight size={14} />
              Acesso Imediato
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} />
              7 Dias de Garantia
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
