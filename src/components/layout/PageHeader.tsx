"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

interface PageHeaderProps {
    title: string;
    description?: string;
    breadcrumb: { label: string; href?: string }[];
}

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#060818]">
                <ParticlesBackground />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none" />
                <GlowOrb color="secondary" size="lg" className="top-0 right-1/4 opacity-40 blur-[120px]" />
                <GlowOrb color="primary" size="md" className="bottom-0 left-1/4 opacity-30 blur-[100px]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
                >
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    {breadcrumb.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            {item.href ? (
                                <Link href={item.href} className="hover:text-primary transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-foreground font-medium">{item.label}</span>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-6"
                >
                    {title}
                </motion.h1>

                {/* Description */}
                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        {description}
                    </motion.p>
                )}
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>
    );
}
