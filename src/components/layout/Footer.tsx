"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Heart } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/constants";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Newsletter } from "@/components/layout/Newsletter";

const socialStyles: Record<string, string> = {
  WhatsApp: "bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-500/20",
  Instagram: "bg-gradient-to-br from-pink-500/10 to-purple-500/10 text-pink-400 hover:from-pink-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-pink-500/20",
  Email: "bg-rose-medium/10 text-rose-medium hover:bg-rose-medium hover:text-white hover:shadow-lg hover:shadow-rose-medium/20",
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-aleh.png"
                alt="Edition Aleh"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${socialStyles[link.name] || "bg-white/5 text-gray-400 hover:bg-rose-medium hover:text-white"}`}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                  title={link.name}
                >
                  <SocialIcon name={link.name} size={20} />
                </motion.a>
              ))}
              <motion.a
                href={`mailto:${SITE_CONFIG.email}`}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${socialStyles.Email}`}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.95 }}
                aria-label="E-mail"
                title="E-mail"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-rose-medium transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.slice(5).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-rose-medium transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <Newsletter />
            </div>
            <div className="flex flex-col items-start lg:items-end gap-4">
              <div className="flex flex-wrap gap-6">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-rose-medium transition-colors text-sm"
                >
                  <Mail size={14} />
                  {SITE_CONFIG.email}
                </a>
              </div>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                © {currentYear} Edition Aleh. Todos os direitos reservados.
                Feito com <Heart size={14} className="text-rose-medium" /> para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
