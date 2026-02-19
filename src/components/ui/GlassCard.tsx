"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverEffect ? { scale: 1.02, borderColor: "rgba(79, 142, 247, 0.4)" } : {}}
            transition={{ duration: 0.3 }}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-surface/50 p-6 backdrop-blur-xl transition-colors",
                "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
