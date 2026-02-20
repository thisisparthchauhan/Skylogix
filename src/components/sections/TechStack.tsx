"use client";

import {
    SiMongodb, SiExpress, SiReact, SiNodedotjs, SiNextdotjs,
    SiVuedotjs, SiAngular, SiSvelte, SiPostgresql, SiRedis,
    SiSwift, SiKotlin, SiOpenjdk, SiC, SiCplusplus,
    SiPython, SiDotnet, SiFlutter, SiRust, SiGo
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { Brain, Cpu, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const technologies = [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Svelte", icon: SiSvelte, color: "#FF3E00" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Swift", icon: SiSwift, color: "#FA7343" },
    { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "C#", icon: TbBrandCSharp, color: "#239120" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Rust", icon: SiRust, color: "#CE422B" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "AI", icon: Brain, color: "#4F8EF7" },
    { name: "Machine Learning", icon: Cpu, color: "#7B5EA7" },
    { name: "AGI", icon: Zap, color: "#F59E0B" },
];

export default function TechStack() {
    return (
        <section className="py-24 bg-[#0A0F2C] overflow-hidden relative">
            <div className="container px-4 mx-auto mb-12 text-center relative z-20">
                <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">
                    Our Stack
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                    Technologies We Master
                </h2>
            </div>

            {/* Pure CSS Styles for exact matching of spec */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marqueeScroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .tech-marquee-container {
                    width: 200%;
                    width: fit-content;
                    display: flex;
                    animation: marqueeScroll 30s linear infinite;
                    gap: 12px;
                }
                .tech-pill-custom {
                    display: flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 999px;
                    padding: 8px 16px 8px 12px;
                    gap: 8px;
                    transition: all 0.3s ease;
                    cursor: default;
                }
                .tech-pill-custom:hover {
                    border-color: var(--pill-color);
                    box-shadow: 0 0 16px var(--pill-color)40;
                }
                .tech-edge-gradient {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 120px;
                    z-index: 10;
                    pointer-events: none;
                }
            `}} />

            <div className="relative flex overflow-hidden w-full max-w-full group">
                {/* Edge gradients */}
                <div className="tech-edge-gradient left-0 bg-gradient-to-r from-[#060818] to-transparent" />
                <div className="tech-edge-gradient right-0 bg-gradient-to-l from-[#060818] to-transparent" />

                {/* The infinitely scrolling container */}
                <div className="tech-marquee-container">
                    {[...technologies, ...technologies].map((tech, i) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={`tech-${i}`}
                                className="tech-pill-custom"
                                style={{ '--pill-color': tech.color } as React.CSSProperties}
                            >
                                <Icon size={18} color={tech.color} />
                                <span className="text-[13px] text-white font-medium whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
