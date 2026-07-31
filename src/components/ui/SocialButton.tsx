"use client";

import { motion } from "framer-motion";
import { Mail, ShoppingBag } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { WHATSAPP_LINK, INSTAGRAM_LINK, SITE_CONFIG, PURCHASE_LINK } from "@/constants";

const socialConfig = {
  whatsapp: {
    icon: () => <SocialIcon name="WhatsApp" size={18} />,
    label: "Fale conosco",
    href: WHATSAPP_LINK,
    bg: "from-green-500 to-green-600",
    hoverBg: "from-green-600 to-green-700",
    shadow: "shadow-green-500/25",
  },
  instagram: {
    icon: () => <SocialIcon name="Instagram" size={18} />,
    label: "Siga no Instagram",
    href: INSTAGRAM_LINK,
    bg: "from-pink-500 to-purple-600",
    hoverBg: "from-pink-600 to-purple-700",
    shadow: "shadow-pink-500/25",
  },
  email: {
    icon: () => <Mail size={18} />,
    label: "Envie um e-mail",
    href: `mailto:${SITE_CONFIG.email}`,
    bg: "from-rose-medium to-rose-strong",
    hoverBg: "from-rose-strong to-rose-strong",
    shadow: "shadow-rose-medium/25",
  },
  buy: {
    icon: () => <ShoppingBag size={18} />,
    label: "Comprar Agora",
    href: PURCHASE_LINK,
    bg: "from-gold to-gold-light",
    hoverBg: "from-gold-dark to-gold",
    shadow: "shadow-gold/25",
  },
};

type SocialType = keyof typeof socialConfig;

interface SocialButtonProps {
  type: SocialType;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  showLabel?: boolean;
}

export function SocialButton({ type, size = "md", fullWidth = false, showLabel = true }: SocialButtonProps) {
  const config = socialConfig[type];

  const sizeClasses = {
    sm: "px-3 py-2 text-xs gap-1.5 rounded-lg",
    md: "px-5 py-3 text-sm gap-2 rounded-xl",
    lg: "px-7 py-4 text-base gap-2.5 rounded-2xl",
  };

  return (
    <motion.a
      href={config.href}
      target={type !== "email" ? "_blank" : undefined}
      rel={type !== "email" ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`
        inline-flex items-center justify-center gap-2 font-semibold
        bg-gradient-to-r ${config.bg}
        hover:bg-gradient-to-r ${config.hoverBg}
        shadow-md ${config.shadow}
        hover:shadow-lg
        text-white
        transition-all duration-300
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
      `}
      aria-label={config.label}
    >
      <config.icon />
      {showLabel && <span>{config.label}</span>}
    </motion.a>
  );
}
