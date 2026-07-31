"use client";

import { ShieldCheck, Zap, Headphones } from "lucide-react";
import { MotionBox } from "@/components/animations/MotionBox";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Compra Segura",
    desc: "Dados protegidos com criptografia de ponta a ponta.",
    gradient: "from-gold/10 to-gold/5",
    iconColor: "text-gold",
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    desc: "Receba o ebook e bônus logo após a confirmação.",
    gradient: "from-rose-light/30 to-rose-light/10",
    iconColor: "text-rose-medium",
  },
  {
    icon: Headphones,
    title: "Suporte Premium",
    desc: "Equipe pronta para te ajudar em qualquer dúvida.",
    gradient: "from-violet-500/10 to-purple-500/5",
    iconColor: "text-violet-600",
  },
];

export function Guarantee() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-rose-bg to-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionBox>
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mx-auto mb-8 shadow-gold">
            <ShieldCheck size={48} className="text-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Sua compra 100% protegida
          </h2>

          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
            Você tem <strong className="text-rose-strong">7 dias de garantia incondicional</strong>. 
            Se por qualquer motivo você não ficar satisfeita com o Edition Aleh, 
            devolvemos 100% do seu dinheiro sem burocracia.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {guarantees.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white shadow-card border border-gray-100 hover:shadow-card-hover transition-shadow duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon size={24} className={item.iconColor} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </MotionBox>
      </div>
    </section>
  );
}
