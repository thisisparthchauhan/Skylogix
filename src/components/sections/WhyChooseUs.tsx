"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Cpu, Layers } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GradientText } from "@/components/ui/GradientText";

const stats = [
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 10, suffix: "+", label: "Team Members" },
    { value: 15, suffix: "+", label: "Happy Clients" },
];

const pillars = [
    {
        icon: ShieldCheck,
        title: "NDA & MOU Protected",
        desc: "Complete confidentiality on all projects.",
    },
    {
        icon: Globe,
        title: "Global Standards",
        desc: "US, UK, Europe ready code quality.",
    },
    {
        icon: Cpu,
        title: "AI-First Approach",
        desc: "Future-ready AI integrated solutions.",
    },
    {
        icon: Layers,
        title: "End-to-End Delivery",
        desc: "From idea to deployment and beyond.",
    },
];

export function WhyChooseUs() {
    return (
        <SectionWrapper id="why-us" className="bg-[#060818]">
            {/* Stats Bar */}
            <div className="container px-4 md:px-6 mx-auto mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center px-4">
                            <span className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </span>
                            <span className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center mb-16">
                <SectionHeading
                    title="Why Choose Skylogix"
                    className="mb-6"
                />
                {/* Accent Line */}
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#4F8EF7] to-transparent rounded-full" />
            </div>

            {/* Trust Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:w-3/4 mx-auto gap-6">
                {pillars.map((pillar, index) => (
                    <GlassCard
                        key={index}
                        className="flex items-center gap-6 p-8 hover:bg-white/5 transition-all duration-300 group"
                    >
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                            <pillar.icon className="w-8 h-8 text-primary group-hover:text-accent-cyan transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                                {pillar.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {pillar.desc}
                            </p>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
