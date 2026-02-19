"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse-glow" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse-glow" style={{ animationDelay: "2s" }} />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-8 shadow-glow-sm"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                        Next-Gen Digital Solutions
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-foreground mb-6 max-w-4xl"
                >
                    Building the Future of <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary text-glow">
                        Digital Experiences
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                >
                    We transform ambitious ideas into secure, scalable, and stunning web applications using cutting-edge technologies.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="h-12 px-8 text-lg shadow-glow-md hover:shadow-glow-lg transition-all rounded-full bg-primary hover:bg-primary/90">
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary/20 hover:bg-primary/10 hover:border-primary/50 text-foreground transition-all rounded-full backdrop-blur-sm">
                        View Our Work
                    </Button>
                </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-[-1]" />
        </section>
    );
}
