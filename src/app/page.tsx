import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTA } from "@/components/sections/CTA";


import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <Hero />

      <Services />

      <TechStack />

      <WhyChooseUs />

      <CTA />

      <Footer />
    </main>
  );
}
