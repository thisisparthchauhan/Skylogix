"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/GradientText";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    eyebrow?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

export function SectionHeading({
    title,
    subtitle,
    eyebrow,
    align = "center",
    className,
}: SectionHeadingProps) {
    const alignClasses = {
        left: "text-left items-start",
        center: "text-center items-center mx-auto",
        right: "text-right items-end ml-auto",
    };

    return (
        <div className={cn("flex flex-col mb-16", alignClasses[align], className)}>
            {eyebrow && (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold tracking-wider text-primary uppercase mb-3"
                >
                    {eyebrow}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-foreground mb-4"
            >
                <GradientText>{title}</GradientText>
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
