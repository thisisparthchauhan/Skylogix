"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Linkedin, Users, Globe, Briefcase } from "lucide-react";
import { TeamMembersData } from "@/lib/teamData";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function TeamPreview() {
    // Get leadership members only
    const leadership = TeamMembersData.filter(m => m.isLeadership).slice(0, 3);

    return (
        <SectionWrapper className="bg-[#0A0F2C] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />

            <SectionHeading
                eyebrow="OUR TEAM"
                title="The Experts Behind Your Project"
                subtitle="Senior engineers and designers with global project experience."
                className="mb-16 relative z-10"
            />

            {/* Leadership Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 relative z-10">
                {leadership.map((member, index) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <GlassCard className="h-full p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300 hover:border-primary/50">
                            {/* Avatar with Orbit Animation */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 rounded-full border border-primary/30 scale-125 group-hover:scale-150 transition-transform duration-700 opacity-50" />
                                <div className="absolute inset-0 rounded-full border border-dashed border-white/20 scale-150 animate-[spin_10s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite]" />

                                <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}>
                                    {member.avatar}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-sm text-muted-foreground font-medium mb-4">{member.role}</p>

                            {/* Skills Pills */}
                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                {member.skills.slice(0, 3).map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:border-primary/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-[#0077b5] hover:text-white text-muted-foreground transition-all duration-300"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 relative z-10 border-t border-b border-white/10 py-8 bg-white/5 backdrop-blur-sm rounded-2xl">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-1">
                        <Users className="w-6 h-6 text-primary" />
                        10+
                    </div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center border-l md:border-l border-white/10 border-t md:border-t-0 pt-4 md:pt-0">
                    <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-1">
                        <Briefcase className="w-6 h-6 text-accent-cyan" />
                        50+ Years
                    </div>
                    <div className="text-sm text-muted-foreground">Combined Experience</div>
                </div>
                <div className="text-center border-l md:border-l border-white/10 border-t md:border-t-0 pt-4 md:pt-0">
                    <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-1">
                        <Globe className="w-6 h-6 text-secondary" />
                        12+
                    </div>
                    <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center relative z-10">
                <Link href="/team">
                    <Button variant="ghost" className="group text-lg font-medium hover:bg-white/5">
                        Meet the Full Team
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </SectionWrapper>
    );
}
