"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Loader2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <h4 className="font-semibold text-white mb-2">Receba novidades</h4>
      <p className="text-gray-400 text-sm mb-4">
        Dicas de organização financeira direto no seu email.
      </p>
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-green-400 text-sm"
        >
          <Check size={18} />
          Você está inscrita! Fique de olho no seu email.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor email"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-rose-medium transition-colors text-sm"
              required
              aria-label="Email para newsletter"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-rose-medium hover:bg-rose-strong text-white px-5 py-3 rounded-xl font-medium text-sm transition-colors disabled:opacity-50 sm:w-auto w-full"
          >
            {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : "Enviar"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-400 text-xs mt-2">Erro ao enviar. Tente novamente.</p>
      )}
    </div>
  );
}
