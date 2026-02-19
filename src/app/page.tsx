import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services"; // Keep above fold static if possible, or dynamic if heavy

// Dynamic Imports for below-fold heavy components
const TechStack = dynamic(() => import("@/components/sections/TechStack"), {
  loading: () => <div className="h-96 w-full bg-[#0A0F2C] animate-pulse" />,
});
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs").then(mod => mod.WhyChooseUs));
const EstimatorTeaser = dynamic(() => import("@/components/home/EstimatorTeaser"));
const TeamPreview = dynamic(() => import("@/components/home/TeamPreview"));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"));
const CTA = dynamic(() => import("@/components/sections/CTA").then(mod => mod.CTA));
const RelatedLinks = dynamic(() => import("@/components/seo/RelatedLinks").then(mod => mod.RelatedLinks));

import { generatePageMetadata } from "@/lib/generatePageMetadata";

export const metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <Hero />

      <Services />

      <TechStack />

      <WhyChooseUs />

      <EstimatorTeaser />

      <TeamPreview />

      <TestimonialsSection />

      <CTA />

      <RelatedLinks currentPage="home" className="bg-[#050714]" title="Explore More Resources" />

      <Footer />
    </main>
  );
}
