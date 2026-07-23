"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PeonyDecorationLeft, PeonyDecorationRight } from "@/components/animations/PeonyDecoration";

export function Hero() {
  const scrollToCTA = () => {
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: 'url("/background-mobile.png")' }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center hidden sm:block"
        style={{ backgroundImage: 'url("/background.png")' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-rose-medium animate-pulse" />
              <span className="text-white text-sm font-medium">
                Edição Limitada
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
              Organize suas finanças e{" "}
              <span className="text-gradient">realize seus sonhos</span>.
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
              O guia prático para assumir o controle do seu dinheiro, eliminar o caos financeiro e conquistar uma vida mais tranquila.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="primary"
                icon={<Sparkles size={20} />}
                onClick={scrollToCTA}
              >
                Quero meu Ebook
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                onClick={() => document.querySelector("#problemas")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saiba mais
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-rose-light to-rose-medium flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">+2.000 mulheres</p>
                <p className="text-white/60 text-xs">já transformaram suas finanças</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              className="w-72 h-72 rounded-full border border-white/10"
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-4 rounded-full border border-white/10" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-bg to-transparent" />
    </section>
  );
}
