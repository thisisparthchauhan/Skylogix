"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Shield, MessageSquare, Globe, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/testimonialsData";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ReviewSchema from "@/components/seo/schemas/ReviewSchema";

// Filter Options
const SERVICES = ["All", "Mobile App", "Web Dev", "AI", "UI/UX", "Consulting", "No-Code"];
const REGIONS = ["All", "USA", "UK", "Europe", "Middle East", "Australia"];

// Helper to map country to region
const getRegion = (country: string) => {
    if (["Germany", "Netherlands"].includes(country)) return "Europe";
    if (["UAE"].includes(country)) return "Middle East";
    return country; // USA, UK, Australia, Canada map to themselves
};

export default function TestimonialsContent() {
    const [activeService, setActiveService] = useState("All");
    const [activeRegion, setActiveRegion] = useState("All");

    // Filter Logic
    const filteredTestimonials = testimonials.filter((t) => {
        // Service Matching (Flexible matching)
        const serviceMatch = activeService === "All" || t.service.includes(activeService) ||
            (activeService === "Web Dev" && t.service.includes("Website")) ||
            (activeService === "Mobile App" && t.service.includes("Mobile"));

        // Region Matching
        const regionMatch = activeRegion === "All" || getRegion(t.region) === activeRegion || t.region === activeRegion;

        return serviceMatch && regionMatch;
    });

    return (
        <main className="min-h-screen bg-[#060818] text-white overflow-x-hidden selection:bg-primary/30">
            <ReviewSchema />
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="container max-w-4xl mx-auto text-center relative z-10 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#00C2FF]">Clients Say</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Honest reviews from real projects. Identities protected per NDA agreements.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span>4.9/5 Average Rating</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                            <MessageSquare className="w-4 h-4 text-primary" />
                            <span>50+ Reviews</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                            <Globe className="w-4 h-4 text-green-500" />
                            <span>12+ Countries</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Filter Section */}
            <SectionWrapper className="py-8 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-6xl mx-auto space-y-6">
                    {/* Service Filters */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {SERVICES.map((service) => (
                            <button
                                key={service}
                                onClick={() => setActiveService(service)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                    activeService === service
                                        ? "bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(79,142,247,0.3)]"
                                        : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:text-white"
                                )}
                            >
                                {service}
                            </button>
                        ))}
                    </div>

                    {/* Region Filters */}
                    <div className="flex flex-wrap justify-center gap-2">
                        <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider py-2 px-2">Region:</span>
                        {REGIONS.map((region) => (
                            <button
                                key={region}
                                onClick={() => setActiveRegion(region)}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 border",
                                    activeRegion === region
                                        ? "bg-white/20 border-white text-white"
                                        : "bg-transparent border-transparent text-muted-foreground hover:text-white"
                                )}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* 3. Testimonials Grid */}
            <SectionWrapper className="py-20">
                <div className="max-w-7xl mx-auto min-h-[400px]">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredTestimonials.map((t) => (
                                <motion.div
                                    layout
                                    key={t.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:border-primary/50 transition-colors group">
                                        {/* Stars */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                                ))}
                                            </div>
                                            <div className="px-2 py-1 rounded bg-white/5 text-[10px] uppercase font-bold text-muted-foreground border border-white/5">
                                                {t.service}
                                            </div>
                                        </div>

                                        {/* Quote */}
                                        <div className="mb-8 relative">
                                            <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/20 rotate-180" />
                                            <p className="text-[#C8D5E8] italic leading-relaxed relative z-10 pl-2">
                                                &quot;{t.quote}&quot;
                                            </p>
                                        </div>

                                        {/* User Info */}
                                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0"
                                                style={{ backgroundColor: t.avatarColor }}
                                            >
                                                {t.avatar}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold leading-none mb-1">
                                                    {t.role}
                                                </h4>
                                                <p className="text-sm text-muted-foreground mb-1">
                                                    {t.company}
                                                </p>
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground/80">
                                                    <span>{t.region === "USA" ? "🇺🇸" : t.region === "UK" ? "🇬🇧" : t.region === "Germany" ? "🇩🇪" : t.region === "Netherlands" ? "🇳🇱" : t.region === "Australia" ? "🇦🇺" : t.region === "UAE" ? "🇦🇪" : t.region === "Canada" ? "🇨🇦" : "🌍"}</span>
                                                    <span>{t.region}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredTestimonials.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground text-lg">No reviews found for this combination.</p>
                            <Button
                                variant="link"
                                onClick={() => { setActiveService("All"); setActiveRegion("All") }}
                                className="text-primary mt-2"
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </SectionWrapper>

            {/* 4. Trust Section */}
            <SectionWrapper className="bg-[#0A0F2C]">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-4">
                        <Shield className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl font-heading font-bold">Why Are Reviews Anonymous?</h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        We work with high-growth startups and enterprises on creating their <span className="text-white font-medium">competitive advantage</span>.
                        To protect their intellectual property and market strategy, we sign strict Non-Disclosure Agreements (NDAs) with 95% of our clients.
                    </p>

                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 max-w-2xl mx-auto">
                        <p className="text-white font-medium mb-4">Need verify our work?</p>
                        <p className="text-sm text-muted-foreground mb-6">
                            We can arrange a private reference call with a past client upon request, subject to their availability and approval.
                        </p>
                        <Link href="/contact">
                            <Button variant="outline" className="border-primary/30 hover:bg-primary/10 text-primary">
                                Request Reference Call
                            </Button>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>

            {/* 5. Bottom CTA */}
            <SectionWrapper className="pb-32">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-white/10 p-12 md:p-20 text-center">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                            Ready to become our next <br />
                            <span className="text-primary">Success Story?</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link href="/contact">
                                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-white text-black hover:bg-white/90">
                                    Start Your Project
                                </Button>
                            </Link>
                            <Link href="/estimate">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-white/20 hover:bg-white/10">
                                    <Zap className="w-4 h-4 mr-2" />
                                    Get Free Estimate
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
