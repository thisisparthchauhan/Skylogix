"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export function SectionWrapper({
    children,
    className,
    id,
    delay = 0,
}: SectionWrapperProps) {
    return (
        <section id={id} className={cn("py-20 md:py-32 relative", className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
                className="container px-4 md:px-6 mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
}
