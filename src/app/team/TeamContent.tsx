"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Mail, ArrowRight, Globe, Zap, Target } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { DepartmentFilter } from "@/components/team/DepartmentFilter";
import { TeamMembersData, DepartmentsData } from "@/lib/teamData";
import BreadcrumbSchema from "@/components/seo/schemas/BreadcrumbSchema";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 24 }
    }
};

export default function TeamContent() {
    const [filter, setFilter] = useState("all");

    const leadershipMembers = TeamMembersData.filter(m => m.isLeadership);
    const nonLeadershipMembers = TeamMembersData.filter(m => !m.isLeadership);

    const displayedMembers = filter === "all"
        ? nonLeadershipMembers
        : TeamMembersData.filter(m => m.department === filter);

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "AboutPage",
                name: "Meet Our Team | Skylogix Technologies",
                description: "Meet the engineers, designers, and strategists behind Skylogix Technologies.",
                publisher: {
                    "@type": "Organization",
                    name: "Skylogix Technologies"
                }
            }} />
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Team", url: "/team" }
            ]} />
            <PageViewTracker eventName="team_page_view" />
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[#0A0F2C]">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="container relative z-10 text-center px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-accent-cyan text-sm font-bold tracking-wider mb-6 border border-white/10 uppercase">
                            The People Behind The Code
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white tracking-tight">
                            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skylogix</span> Team
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            10 passionate technologists. 3+ years average tenure. Delivering excellence for clients across 12+ countries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CULTURE BANNER */}
            <div className="border-y border-white/10 bg-white/5 backdrop-blur-sm relative z-20">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                                <Globe className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-gray-200">Remote-first team</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-amber-500/20 text-amber-400">
                                <Zap className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-gray-200">Async-friendly</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-green-500/20 text-green-400">
                                <Target className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-gray-200">Outcome focused</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* LEADERSHIP SECTION */}
            <SectionWrapper className="bg-[#0A0F2C]">
                <SectionHeading
                    title="Leadership"
                    subtitle="Visionaries guiding our technological direction."
                    className="mb-16"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {leadershipMembers.map((member) => (
                        <motion.div key={member.id} variants={itemVariants}>
                            <TeamMemberCard member={member} />
                        </motion.div>
                    ))}
                </motion.div>
            </SectionWrapper>

            {/* TEAM GRID */}
            <SectionWrapper className="bg-background pt-0">
                <div className="max-w-7xl mx-auto">
                    <DepartmentFilter
                        departments={DepartmentsData}
                        selectedId={filter}
                        onSelect={setFilter}
                    />

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {displayedMembers.map((member) => (
                                <motion.div
                                    layout
                                    key={member.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <TeamMemberCard member={member} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {displayedMembers.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground">No team members found in this category.</p>
                        </div>
                    )}
                </div>
            </SectionWrapper>

            {/* HIRING SECTION */}
            <SectionWrapper className="bg-[#0A0F2C] pb-32">
                <GlassCard className="max-w-5xl mx-auto p-12 text-center relative overflow-hidden group border-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-600/10 opacity-50" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
                            We're Growing — Join Us
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                            We're always looking for talented engineers and designers who want to build products used globally. If you love solving hard problems, we want to hear from you.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold w-full sm:w-auto"
                                disabled // Coming soon
                            >
                                View Open Positions
                            </Button>
                            <a href="mailto:careers@skylogix.tech" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 w-full"
                                >
                                    Send Your CV
                                    <Mail className="ml-2 w-4 h-4" />
                                </Button>
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-muted-foreground"> * Careers page coming soon</p>
                    </div>
                </GlassCard>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
