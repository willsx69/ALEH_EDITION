"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "rose" | "gold";
}

export function Badge({ children, variant = "rose" }: BadgeProps) {
  const styles = {
    rose: "bg-rose-light text-rose-strong",
    gold: "bg-gold/10 text-gold-dark border border-gold/20",
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
        tracking-wide uppercase ${styles[variant]}
      `}
    >
      {children}
    </span>
  );
}
