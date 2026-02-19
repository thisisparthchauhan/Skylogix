import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <Hero />
    </main>
  );
}
