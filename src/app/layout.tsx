import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edition Aleh | Organização Financeira para Mulheres",
  description:
    "O guia prático para assumir o controle do seu dinheiro, eliminar o caos financeiro e conquistar uma vida mais tranquila.",
  keywords: [
    "organização financeira",
    "finanças pessoais",
    "educação financeira feminina",
    "ebook finanças",
    "Edition Aleh",
    "planejamento financeiro",
    "controle de gastos",
  ],
  authors: [{ name: "Edition Aleh" }],
  creator: "Edition Aleh",
  metadataBase: new URL("https://editionaleh.com"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://editionaleh.com",
    siteName: "Edition Aleh",
    title: "Edition Aleh | Organização Financeira para Mulheres",
    description:
      "O guia prático para assumir o controle do seu dinheiro, eliminar o caos financeiro e conquistar uma vida mais tranquila.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Edition Aleh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edition Aleh | Organização Financeira para Mulheres",
    description:
      "O guia prático para assumir o controle do seu dinheiro, eliminar o caos financeiro e conquistar uma vida mais tranquila.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${dancingScript.variable}`}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
