"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/CTA";
import { caseStudies } from "@/lib/caseStudyData";
import { JsonLd } from "@/components/seo/JsonLd";

const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Skylogix Case Studies",
    description: "A showcase of our engineering capabilities and client success stories.",
    url: "https://skylogix.tech/case-studies",
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
            name: "Case Studies",
            item: "https://skylogix.tech/case-studies",
        },
    ],
};

const industries = ["All", "FinTech", "HealthTech", "E-commerce", "EdTech", "SaaS"];

export default function CaseStudiesContent() {
    const [filter, setFilter] = useState("All");

    const filteredStudies = filter === "All"
        ? caseStudies
        : caseStudies.filter(study => study.industry === filter);

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <JsonLd data={[caseStudiesSchema, breadcrumbSchema]} />
            <Navbar />

            <PageHeader
                title="Our Work"
                description="A showcase of our engineering capabilities. Please note that due to strict NDAs, client names and proprietary details have been anonymized."
                breadcrumb={[{ label: "Case Studies" }]}
            />

            {/* NDA Banner */}
            <div className="container mx-auto px-4 -mt-10 mb-12 relative z-20">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 flex items-center justify-center gap-3 text-yellow-200/80 max-w-2xl mx-auto backdrop-blur-md">
                    <Lock className="w-5 h-5" />
                    <span className="text-sm font-medium">All case studies presented below are NDA compliant. Client identities are protected.</span>
                </div>
            </div>

            <SectionWrapper className="bg-[#0A0F2C] pt-0">
                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {industries.map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === item
                                ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(79,142,247,0.4)]"
                                : "bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:text-foreground"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredStudies.map((study) => (
                            <motion.div
                                key={study.slug}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GlassCard className="h-full flex flex-col group hover:border-primary/50 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge variant="outline" className="bg-white/5 text-primary border-primary/20">
                                            {study.industry}
                                        </Badge>
                                        <Badge variant="secondary" className="bg-white/5 text-muted-foreground text-xs">
                                            {study.region}
                                        </Badge>
                                    </div>

                                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                                        {study.title}
                                    </h3>
                                    <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
                                        {study.type}
                                    </div>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div>
                                            <span className="text-xs text-muted-foreground uppercase font-bold">Challenge: </span>
                                            <span className="text-sm text-gray-300">{study.challenge}</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-muted-foreground uppercase font-bold">Solution: </span>
                                            <span className="text-sm text-gray-300">{study.solution}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {study.results.map((res, i) => (
                                            <span key={i} className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                                                {res}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/case-studies/${study.slug}`}
                                        className="mt-auto w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-sm font-medium transition-colors group-hover:border-primary/30"
                                    >
                                        View Details
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </SectionWrapper>

            <CTA />
            <Footer />
        </main>
    );
}
