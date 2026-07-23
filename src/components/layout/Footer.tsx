"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin, Phone, Heart } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/constants";
import { DynamicIcon } from "@/components/ui/Icon";
import { Newsletter } from "@/components/layout/Newsletter";

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
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-rose-medium hover:text-white transition-all duration-300"
                  aria-label={link.name}
                >
                  <DynamicIcon name={link.icon} size={18} />
                </a>
              ))}
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
