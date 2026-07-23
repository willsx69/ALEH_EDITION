"use client";

import { ShieldCheck } from "lucide-react";
import { MotionBox } from "@/components/animations/MotionBox";

export function Guarantee() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-rose-bg to-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionBox>
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mx-auto mb-8">
            <ShieldCheck size={48} className="text-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Sua compra 100% protegida
          </h2>

          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8">
            Você tem <strong className="text-rose-strong">7 dias de garantia incondicional</strong>. 
            Se por qualquer motivo você não ficar satisfeita com o Edition Aleh, 
            devolvemos 100% do seu dinheiro sem burocracia.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: "Compra Segura", desc: "Dados protegidos com criptografia de ponta a ponta." },
              { title: "Acesso Imediato", desc: "Receba o ebook e bônus logo após a confirmação." },
              { title: "Suporte Premium", desc: "Equipe pronta para te ajudar em qualquer dúvida." },
            ].map((item) => (
              <div key={item.title} className="p-4">
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
