"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MapPin } from "lucide-react";
import { TeamMember } from "@/lib/teamData";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
    member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
    return (
        <GlassCard className="group relative p-6 h-full flex flex-col items-center text-center overflow-hidden hover:border-[#4F8EF7]/50 transition-colors duration-500">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-[#4F8EF7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Avatar Section */}
            <div className="relative mb-6">
                {/* Animated Ring */}
                <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${member.avatarGradient} opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
                <div className={`absolute -inset-[2px] rounded-full bg-gradient-to-r ${member.avatarGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Avatar Image/Initials */}
                <div className={`relative ${member.isLeadership ? 'w-24 h-24 text-3xl' : 'w-20 h-20 text-2xl'} rounded-full bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center text-white font-bold shadow-xl z-10`}>
                    {member.avatar}
                </div>
            </div>

            {/* Info */}
            <div className="relative z-10 w-full flex flex-col h-full">
                <h3 className={`font-heading font-bold text-white mb-1 ${member.isLeadership ? 'text-xl' : 'text-lg'}`}>
                    {member.name}
                </h3>
                <p className="text-[#4F8EF7] text-sm font-medium mb-3">{member.role}</p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
                    {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                    {member.skills.slice(0, 4).map((skill, i) => (
                        <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 group-hover:bg-white/10 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between w-full">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {member.location.split(',')[0]}
                    </div>

                    <div className="flex items-center gap-3">
                        {member.github && (
                            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
}
