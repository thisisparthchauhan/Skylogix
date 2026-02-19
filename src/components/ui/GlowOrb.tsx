"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
    className?: string;
    color?: "primary" | "secondary" | "accent";
    size?: "sm" | "md" | "lg" | "xl";
    delay?: number;
}

export function GlowOrb({
    className,
    color = "primary",
    size = "md",
    delay = 0,
}: GlowOrbProps) {
    const sizeClasses = {
        sm: "w-48 h-48 blur-[80px]",
        md: "w-72 h-72 blur-[100px]",
        lg: "w-96 h-96 blur-[120px]",
        xl: "w-[500px] h-[500px] blur-[140px]",
    };

    const colorClasses = {
        primary: "bg-primary/30",
        secondary: "bg-secondary/30",
        accent: "bg-accent-cyan/30",
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                delay: delay,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
            }}
            className={cn(
                "absolute rounded-full -z-10 pointer-events-none mix-blend-screen",
                sizeClasses[size],
                colorClasses[color],
                className
            )}
        />
    );
}
