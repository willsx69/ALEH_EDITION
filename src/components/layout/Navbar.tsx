"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-soft"
          : "bg-white/80 backdrop-blur-xl"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#hero"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
          >
            <Image
              src="/images/logo aleh.png"
              alt="Edition Aleh"
              width={130}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-rose-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollToSection("#cta")}
            >
              Quero meu Ebook
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-rose-light/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-gray-600 font-medium py-2 hover:text-rose-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="w-full"
                onClick={() => scrollToSection("#cta")}
              >
                Quero meu Ebook
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
