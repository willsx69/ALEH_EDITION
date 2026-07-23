import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatYouLearn } from "@/components/sections/WhatYouLearn";
import { Modules } from "@/components/sections/Modules";
import { Bonuses } from "@/components/sections/Bonuses";
import { BeforeAfterSection } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTA } from "@/components/sections/CTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Benefits />
        <HowItWorks />
        <WhatYouLearn />
        <Modules />
        <Bonuses />
        <BeforeAfterSection />
        <Testimonials />
        <Guarantee />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
