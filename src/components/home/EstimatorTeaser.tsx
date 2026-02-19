"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Smartphone, Globe, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";

const features = [
    "Instant estimate range",
    "No email required to start",
    "Covers all 8 service types",
    "Detailed proposal within 24 hours",
];

const cards = [
    {
        icon: <Smartphone className="w-6 h-6 text-[#4F8EF7]" />,
        title: "Mobile App",
        range: "$8K – $45K",
        delay: 0.1,
        rotation: -6,
        x: -20,
    },
    {
        icon: <Bot className="w-6 h-6 text-[#4F8EF7]" />,
        title: "AI Software",
        range: "$15K – $80K",
        delay: 0.2,
        rotation: 6,
        x: 20,
    },
    {
        icon: <Globe className="w-6 h-6 text-[#4F8EF7]" />,
        title: "Web Platform",
        range: "$5K – $30K",
        delay: 0.3,
        rotation: 0,
        x: 0,
    },
];

export default function EstimatorTeaser() {
    return (
        <SectionWrapper className="bg-[#0A0F2C] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* LEFT COLUMN: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                            Free Estimator Tool
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                            Estimate Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#00C2FF]">
                                Project Cost
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            Answer 4 quick questions and get an instant cost estimate for your project. No calls, no commitment needed to get started.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-green-500" />
                                </div>
                                <span className="text-white/90 text-sm font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2">
                        <Link href="/estimate">
                            <Button
                                size="lg"
                                className="h-14 px-8 text-lg font-bold bg-gradient-to-r from-[#4F8EF7] to-[#00C2FF] hover:opacity-90 shadow-[0_0_20px_rgba(79,142,247,0.4)] transition-all"
                            >
                                Try the Estimator
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: Visuals */}
                <div className="relative h-[400px] flex items-center justify-center">
                    {/* Decorative cards stack */}
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 100, rotate: 0 }}
                            whileInView={{ opacity: 1, x: card.x, rotate: card.rotation }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: card.delay, type: "spring", stiffness: 100 }}
                            className="absolute z-10 w-64 md:w-72"
                            style={{
                                zIndex: idx === 2 ? 30 : 20, // Middle card on top
                                top: idx === 1 ? '10%' : idx === 0 ? '20%' : '50%', // Arrange vertically slightly
                                left: '50%',
                                translateX: '-50%',
                                translateY: '-50%'
                            }}
                        >
                            <GlassCard className="p-4 border-white/20 bg-[#0A0F2C]/80 backdrop-blur-xl shadow-2xl">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        {card.icon}
                                    </div>
                                    <div className="px-2 py-1 rounded bg-white/5 text-[10px] uppercase font-bold text-muted-foreground border border-white/5">
                                        Estimated
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">{card.title}</h4>
                                    <div className="text-lg font-mono text-[#4F8EF7] font-bold">
                                        {card.range}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}

                    {/* Background Pulse Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-primary/20 animate-pulse opacity-50 pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-primary/10 animate-ping opacity-20 pointer-events-none duration-3000" />
                </div>

            </div>
        </SectionWrapper>
    );
}
