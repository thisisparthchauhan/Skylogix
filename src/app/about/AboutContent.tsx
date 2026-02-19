"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Shield, Zap, Search, PenTool, Code2, TestTube2, Rocket, Globe2, Building2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/seo/JsonLd";

const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Skylogix",
    description: "Global IT services partner delivering secure, scalable digital solutions.",
    publisher: {
        "@type": "Organization",
        name: "Skylogix Technologies",
        url: "https://skylogix.tech",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://skylogix.tech",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://skylogix.tech/about",
        },
    ],
};

export default function AboutContent() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <JsonLd data={[aboutSchema, breadcrumbSchema]} />
            <Navbar />

            <PageHeader
                title="About Skylogix"
                description="We are a global team of innovators, engineers, and strategists dedicated to building the digital future."
                breadcrumb={[{ label: "About" }]}
            />

            {/* Company Overview */}
            <SectionWrapper className="bg-[#0A0F2C]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionHeading
                            align="left"
                            eyebrow="Who We Are"
                            title="Pioneering the Future of Digital Innovation"
                            className="mb-8"
                        />
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Founded in 2024, Skylogix Technologies has rapidly evolved from a boutique development studio into a global technology partner. We specialize in transforming complex business challenges into elegant, scalable digital solutions.
                            </p>
                            <p>
                                Operating across the US, UK, Europe, Australia, and the Middle East, our distributed team brings together diverse perspectives and world-class expertise to deliver software that doesn't just meet standards—it sets them.
                            </p>
                        </div>
                    </motion.div>

                    <GlassCard className="p-8 md:p-10">
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { label: "Founded", value: "2024", suffix: "" },
                                { label: "Team Size", value: "10", suffix: "+" },
                                { label: "Countries", value: "15", suffix: "+" },
                                { label: "Projects", value: "50", suffix: "+" },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                                        {stat.value}{stat.suffix}
                                    </span>
                                    <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </SectionWrapper>

            {/* Vision & Mission */}
            <SectionWrapper className="bg-background relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard className="p-10 border-t-4 border-t-primary">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                            <Lightbulb className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            To be the global catalyst for digital transformation, where technology amplifies human potential and innovation knows no boundaries. We envision a future where every enterprise has the power to scale effortlessly through intelligent software.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-10 border-t-4 border-t-accent-cyan">
                        <div className="w-14 h-14 rounded-full bg-accent-cyan/10 flex items-center justify-center mb-6">
                            <Target className="w-7 h-7 text-accent-cyan" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            To engineer secure, scalable, and intuitive digital solutions that drive tangible business growth. We are committed to delivering code quality that rivals Silicon Valley giants while maintaining agility and personalized partnership.
                        </p>
                    </GlassCard>
                </div>
            </SectionWrapper>

            {/* Core Values */}
            <SectionWrapper className="bg-[#0A0F2C]">
                <SectionHeading
                    eyebrow="Our Culture"
                    title="Core Values"
                    subtitle="The principles that guide every line of code we write."
                    className="mb-16"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Lightbulb, title: "Innovation", desc: "We challenge the status quo to find better ways." },
                        { icon: Shield, title: "Integrity", desc: "Honesty and transparency in every interaction." },
                        { icon: Users, title: "Client First", desc: "Your success is the only metric that matters." },
                        { icon: Zap, title: "Quality", desc: "Zero compromise on performance and security." },
                        { icon: Search, title: "Transparency", desc: "Clear communication, no hidden surprises." },
                        { icon: Rocket, title: "Growth", desc: "Continuous learning and improvement." },
                    ].map((val, i) => (
                        <GlassCard key={i} className="hover:bg-white/5 transition-colors p-8">
                            <val.icon className="w-8 h-8 text-secondary mb-4" />
                            <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                            <p className="text-sm text-muted-foreground">{val.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </SectionWrapper>

            {/* Development Process */}
            <SectionWrapper>
                <SectionHeading
                    eyebrow="How We Work"
                    title="Our Development Process"
                    subtitle="A proven methodology designed for speed, quality, and collaboration."
                    className="mb-20"
                />

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                        {[
                            { step: "01", title: "Discovery", icon: Search, desc: "Understanding your goals and requirements." },
                            { step: "02", title: "Planning", icon: Globe2, desc: "Architecting the technical roadmap." },
                            { step: "03", title: "Design", icon: PenTool, desc: "Creating intuitive UI/UX prototypes." },
                            { step: "04", title: "Develop", icon: Code2, desc: "Coding with clean, scalable standards." },
                            { step: "05", title: "Testing", icon: TestTube2, desc: "Rigorous QA for bug-free deployment." },
                            { step: "06", title: "Launch", icon: Rocket, desc: "Deploying to production and support." },
                        ].map((process, i) => (
                            <div key={i} className="group relative">
                                <GlassCard className="p-6 text-center hover:border-primary transition-colors bg-background/80 backdrop-blur-xl h-full flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-secondary mb-4 border border-secondary/50 group-hover:bg-secondary group-hover:text-black transition-all">
                                        {process.step}
                                    </div>
                                    <process.icon className="w-8 h-8 text-white mb-3" />
                                    <h4 className="font-bold mb-2">{process.title}</h4>
                                    <p className="text-xs text-muted-foreground">{process.desc}</p>
                                </GlassCard>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Team Culture */}
            <SectionWrapper className="bg-[#0A0F2C]">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Life at Skylogix</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Built by Passionate Humans</h2>
                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                        We are more than just a dev shop. We are a collective of dreamers, doers, and creators who believe in the power of technology to change the world. Our culture is built on curiosity, collaboration, and a relentless pursuit of excellence.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Remote-First", "Continuous Learning", "Diverse Perspectives"].map((tag, i) => (
                            <span key={i} className="px-6 py-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-medium text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <CTA />
            <Footer />
        </main>
    );
}
