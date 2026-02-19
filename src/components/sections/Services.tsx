"use client";

import { motion } from "framer-motion";
import {
    Smartphone,
    Server,
    Globe,
    Palette,
    Brain,
    Bot,
    Zap,
    Wrench,
    Briefcase,
    Headphones,
    GraduationCap
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
    {
        icon: Smartphone,
        title: "Mobile App Development",
        desc: "Native and cross-platform apps for iOS and Android.",
    },
    {
        icon: Server,
        title: "Backend Services",
        desc: "Robust, scalable server-side architecture and APIs.",
    },
    {
        icon: Globe,
        title: "Website Development",
        desc: "High-performance websites built with Next.js and React.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        desc: "Intuitive, user-centric interfaces and experiences.",
    },
    {
        icon: Brain,
        title: "AI-Based Software",
        desc: "Intelligent software solutions powered by machine learning.",
    },
    {
        icon: Bot,
        title: "AI Integrations",
        desc: "Seamless integration of AI models into existing workflows.",
    },
    {
        icon: Zap,
        title: "No-Code Development",
        desc: "Rapid application development using modern no-code tools.",
    },
    {
        icon: Wrench,
        title: "App Maintenance",
        desc: "Ongoing support, updates, and optimization for your apps.",
    },
    {
        icon: Briefcase,
        title: "IT Consulting",
        desc: "Strategic technology guidance to drive business growth.",
    },
    {
        icon: Headphones,
        title: "Tech Support",
        desc: "Reliable technical assistance and troubleshooting.",
    },
    {
        icon: GraduationCap,
        title: "Mentorship",
        desc: "Expert guidance for developers and tech teams.",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Services() {
    return (
        <SectionWrapper id="services" className="bg-[#0A0F2C]">
            <SectionHeading
                eyebrow="Our Services"
                title="What We Build"
                subtitle="End-to-end technology solutions tailored to your business needs."
                className="mb-16"
            />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {services.map((service, index) => (
                    <motion.div key={index} variants={item}>
                        <GlassCard
                            className="h-full group hover:border-[#4F8EF7] border-white/10 bg-white/5 transition-all duration-300"
                            hoverEffect={true}
                        >
                            <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(79,142,247,0.3)] transition-all duration-300">
                                <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {service.desc}
                            </p>
                        </GlassCard>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
