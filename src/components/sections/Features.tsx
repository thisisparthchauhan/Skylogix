"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Rocket, Users } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const features = [
    {
        icon: Globe2,
        title: "Global Reach",
        desc: "Serving clients across US, UK, Europe, Australia & Middle East with localized support.",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        desc: "Bank-grade security protocols ensuring your data and IP remain protected.",
    },
    {
        icon: Rocket,
        title: "Rapid Scalability",
        desc: "Cloud-native architectures designed to scale effortlessly with your growth.",
    },
    {
        icon: Users,
        title: "Expert Teams",
        desc: "Top 1% talent pool of developers, designers, and AI specialists.",
    },
];

export function Features() {
    return (
        <SectionWrapper id="why-us">
            <SectionHeading
                eyebrow="Why Choose Us"
                title="Engineering Excellence"
                subtitle="We combine technical expertise with business acumen to deliver superior results."
                className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <GlassCard key={index} className="flex items-start gap-4 p-8 hover:bg-white/5 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                            <feature.icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
