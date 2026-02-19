"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { GlowOrb } from "@/components/ui/GlowOrb";

const ParticlesBackground = dynamic(() => import("@/components/ui/ParticlesBackground").then(mod => mod.ParticlesBackground), {
    ssr: false,
});

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 bg-background">
                <ParticlesBackground />
                {/* Purple Glow Orb behind heading */}
                <GlowOrb
                    color="secondary"
                    size="xl"
                    className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7B5EA7]/40 blur-[150px]"
                />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-[72px] font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg"
                >
                    Global IT Services & <br className="hidden md:block" />
                    Consulting Company
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-[18px] text-[#8A9BB5] max-w-3xl mb-10 leading-relaxed font-sans"
                >
                    We build secure, scalable, AI-driven digital solutions for businesses across US, UK, Europe, Australia & Middle East.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                >
                    {/* Primary Button: Book a Call */}
                    <Link href="/book-a-call">
                        <Button
                            size="lg"
                            className="h-14 px-8 text-lg font-semibold rounded-full bg-[#00C2FF] hover:bg-[#00C2FF]/90 text-white shadow-[0_0_20px_rgba(0,194,255,0.4)] hover:shadow-[0_0_30px_rgba(0,194,255,0.6)] transition-all w-full sm:w-auto"
                        >
                            Book a Free Call
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>

                    {/* Secondary Button: Check Estimate */}
                    <Link href="/estimate">
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-lg font-medium rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all w-full sm:w-auto"
                        >
                            Get Free Estimate
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8A9BB5]/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-6 h-6 text-[#00C2FF]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
