"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function CTA() {
    return (
        <SectionWrapper id="contact" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5" />
            <GlowOrb color="accent" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 max-w-2xl">
                    Ready to Transform Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">
                        Digital Future?
                    </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mb-10">
                    Join leading enterprises across the globe who trust Skylogix for secure, scalable, and innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-glow-md">
                            Get a Proposal
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/case-studies">
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full backdrop-blur-md">
                            Explore Case Studies
                        </Button>
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
}
