"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import Image from "next/image";

// Data: Technology Stack
const technologies = {
    row1: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
        { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    ],
    row2: [
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
        { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
        { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
        { name: "OpenAI API", icon: "https://cdn.simpleicons.org/openai/412991" },
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
        { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
        { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
    ],
};

const TechPill = ({ name, icon }: { name: string; icon: string }) => (
    <div className="
        flex items-center gap-3 px-6 py-3 mx-4 rounded-full
        bg-white/5 border border-white/10 backdrop-blur-md
        transition-all duration-300
        hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(79,142,247,0.3)]
        group cursor-default
    ">
        <div className="relative w-6 h-6">
            {/* unoptimized because simpleicons are external SVGs */}
            <img
                src={icon}
                alt={name}
                className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
            />
        </div>
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
            {name}
        </span>
    </div >
);

export default function TechStack() {
    return (
        <section className="py-24 bg-[#0A0F2C] overflow-hidden relative">
            <div className="container px-4 mx-auto mb-12 text-center">
                <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">
                    Our Stack
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                    Technologies We Master
                </h2>
            </div>

            {/* Row 1: Left Scroll */}
            <div className="relative w-full flex overflow-hidden mask-linear-gradient">
                <div className="flex animate-scroll hover:[animation-play-state:paused] whitespace-nowrap py-4">
                    {[...technologies.row1, ...technologies.row1].map((tech, i) => (
                        <TechPill key={`${tech.name}-${i}`} {...tech} />
                    ))}
                </div>
                <div className="flex animate-scroll hover:[animation-play-state:paused] whitespace-nowrap py-4 absolute top-0 left-0" aria-hidden="true">
                    {[...technologies.row1, ...technologies.row1].map((tech, i) => (
                        <div key={`dup-${i}`} className="opacity-0 w-0 h-0 overflow-hidden">{/* Spacer to match width, duplicates strictly for visual continuity is handled by singular scroll container usually, but let's use the standard marquee structure */}</div>
                    ))}
                    {/* Actually, the standard 'animate-scroll' usually works on a wrapper moving -100%. 
                        Let's use a simpler structure: Two identical sets in one flex container. 
                    */}
                </div>
            </div>

            {/* 
                Correct Marquee Structure:
                div.flex
                  div.flex.animate-scroll -> contains items twice
            */}
            <div className="flex mb-8 overflow-hidden mask-edges w-full">
                <div className="flex animate-scroll hover:[animation-play-state:paused] min-w-full shrink-0 gap-0">
                    {technologies.row1.map((tech, i) => (
                        <TechPill key={`r1-${i}`} {...tech} />
                    ))}
                    {/* Duplicate for loop */}
                    {technologies.row1.map((tech, i) => (
                        <TechPill key={`r1-dup-${i}`} {...tech} />
                    ))}
                </div>
                {/* Second infinite implementation often needs a second immediate follower if using translate-50% */}
                <div className="flex animate-scroll hover:[animation-play-state:paused] min-w-full shrink-0 gap-0" aria-hidden="true">
                    {technologies.row1.map((tech, i) => (
                        <TechPill key={`r1-dup2-${i}`} {...tech} />
                    ))}
                    {technologies.row1.map((tech, i) => (
                        <TechPill key={`r1-dup3-${i}`} {...tech} />
                    ))}
                </div>
            </div>


            {/* Row 2: Right Scroll (Reverse) */}
            {/* Note: Tailwind doesn't have 'scroll-reverse' by default unless I add it. 
                I'll add 'direction: rtl' to the container or create a 'scroll-reverse' animation. 
                Or simply use negative animation-delay? No.
                Let's use a wrapper with `flex-row-reverse`? No, that just reorders items.
                I will just define 'animate-scroll-reverse' or use style={{ animationDirection: 'reverse' }} 
            */}
            <div className="flex overflow-hidden mask-edges w-full">
                <div
                    className="flex animate-scroll hover:[animation-play-state:paused] min-w-full shrink-0 gap-0"
                    style={{ animationDirection: 'reverse' }}
                >
                    {technologies.row2.map((tech, i) => (
                        <TechPill key={`r2-${i}`} {...tech} />
                    ))}
                    {technologies.row2.map((tech, i) => (
                        <TechPill key={`r2-dup-${i}`} {...tech} />
                    ))}
                </div>
                <div
                    className="flex animate-scroll hover:[animation-play-state:paused] min-w-full shrink-0 gap-0"
                    style={{ animationDirection: 'reverse' }}
                    aria-hidden="true"
                >
                    {technologies.row2.map((tech, i) => (
                        <TechPill key={`r2-dup2-${i}`} {...tech} />
                    ))}
                    {technologies.row2.map((tech, i) => (
                        <TechPill key={`r2-dup3-${i}`} {...tech} />
                    ))}
                </div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0F2C] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0F2C] to-transparent z-10 pointer-events-none" />

        </section>
    );
}
