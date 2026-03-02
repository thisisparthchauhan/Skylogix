"use client";

import { Star, Quote, Globe } from "lucide-react";
import { testimonials } from "@/lib/testimonialsData";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
    // Split testimonials into two rows (6 total)
    const firstRow = testimonials.slice(0, 3);
    const secondRow = testimonials.slice(3, 6);

    return (
        <section className="bg-[#060818] border-t border-white/5 relative overflow-hidden py-24 w-full">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#060818] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#060818] to-transparent z-10 pointer-events-none" />

            {/* Header - Constrained for readability but full width available */}
            <div className="container mx-auto text-center w-full mb-16 px-4 relative z-20">

                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
                    Client Testimonials
                </h2>
                <p className="text-muted-foreground text-lg">
                    All reviews anonymized per NDA agreements
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="container mx-auto px-4 relative z-0">
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Map all 6 items into a centered responsive grid */}
                    {[...firstRow, ...secondRow].map((item, idx) => (
                        <TestimonialCard key={`${item.id}-${idx}`} item={item} />
                    ))}
                </div>
            </div>


        </section>
    );
}

function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
    return (
        <div className="w-[340px] shrink-0 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:border-[#4F8EF7] hover:shadow-[0_0_20px_rgba(79,142,247,0.15)] group/card">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
            </div>


            {/* Quote */}
            <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#4F8EF7]/30 rotate-180" />
                <p className="text-[#C8D5E8] text-sm italic leading-relaxed relative z-10 pl-2">
                    "{item.quote}"
                </p>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: item.avatarColor }}
                >
                    {item.avatar}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white text-[13px] font-semibold truncate leading-none">
                            {item.role}, {item.company}
                        </h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded border border-[#4F8EF7]/30 text-[#4F8EF7] text-[10px] uppercase font-bold tracking-wide">
                            {item.service}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                            {mapRegionToFlag(item.region)} {item.region}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatPill({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 hover:bg-white/10 transition-colors">
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    );
}

function mapRegionToFlag(region: string) {
    switch (region) {
        case "USA": return "🇺🇸";
        case "UK": return "🇬🇧";
        case "Australia": return "🇦🇺";
        case "Germany": return "🇩🇪";
        case "UAE": return "🇦🇪";
        case "Canada": return "🇨🇦";
        case "Netherlands": return "🇳🇱";
        default: return "🌍";
    }
}
