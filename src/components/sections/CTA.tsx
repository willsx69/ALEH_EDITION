"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SocialButton } from "@/components/ui/SocialButton";
import { DynamicIcon } from "@/components/ui/Icon";
import { PURCHASE_LINK, PRICING, OFFER_ITEMS } from "@/constants";

export function CTA() {
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
          <div className="mb-8">
            <p className="text-gray-400 line-through text-xl mb-1">De {PRICING.originalPrice}</p>
            <p className="text-4xl sm:text-5xl font-bold text-white">
              por <span className="text-gradient">{PRICING.price}</span>
            </p>
            <p className="text-gray-400 text-sm mt-2">Pagamento único - acesso vitalício</p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-balance">
            Seu futuro financeiro começa com{" "}
            <span className="text-gradient">uma decisão hoje</span>.
          </h2>

          <div className="mb-8">
            <p className="text-white font-semibold text-lg mb-4">Você recebe:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
              {OFFER_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-light/30 to-gold/20 flex items-center justify-center shrink-0">
                    <DynamicIcon name={item.icon} className="text-gold" size={16} />
                  </div>
                  <span className="text-white text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Comece agora a construir a vida organizada e tranquila que você merece, 
            com um passo a passo simples e acolhedor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              variant="gold"
              size="lg"
              className="sm:!text-xl sm:!px-10 sm:!py-5"
              icon={<Sparkles size={20} />}
              iconPosition="left"
              href={PURCHASE_LINK}
            >
              Quero meu Ebook Agora
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <SocialButton type="whatsapp" size="sm" />
            <SocialButton type="instagram" size="sm" />
            <SocialButton type="email" size="sm" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} />
              Compra Segura
            </span>
            <span className="flex items-center gap-1">
              <ArrowRight size={14} />
              Acesso Imediato
            </span>
            <span className="flex items-center gap-1">
              <Check size={14} />
              7 Dias de Garantia
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}