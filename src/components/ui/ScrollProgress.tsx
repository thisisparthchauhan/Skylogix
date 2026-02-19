"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
    // -------------------------------------------------------------
    // TOP PROGRESS BAR
    // -------------------------------------------------------------
    const { scrollYProgress } = useScroll();

    // Smooth out the progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Detect when we reach 100% to trigger the "pulse/flash" effect
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            if (latest >= 0.99) {
                setIsComplete(true);
            } else {
                setIsComplete(false);
            }
        });
    }, [scrollYProgress]);

    // -------------------------------------------------------------
    // SECTION DOTS (SIDE NAVIGATION)
    // -------------------------------------------------------------
    const pathname = usePathname();
    const [sections, setSections] = useState<HTMLElement[]>([]);
    const [activeSectionId, setActiveSectionId] = useState<string>("");

    // Scan for sections on mount and route change
    useEffect(() => {
        // Build a list of sections that have IDs
        const allSections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
        setSections(allSections);

        // Reset active section on path change
        setActiveSectionId("");
    }, [pathname]);

    // Intersection Observer to determine active section
    useEffect(() => {
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSectionId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px", // Trigger when section is near top/middle
                threshold: 0.1
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [sections]);

    // Smooth scroll handler
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset for navbar
                behavior: "smooth",
            });
        }
    };

    // Format ID for tooltip (e.g., "our-services" -> "Our Services")
    const formatLabel = (id: string) => {
        return id
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    // Fade out when at the very top
    const opacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

    return (
        <>
            {/* -------------------------------------------------------
                TOP PROGRESS BAR
               ------------------------------------------------------- */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left bg-gradient-to-r from-[#4F8EF7] via-[#00C2FF] to-[#7B5EA7]"
                style={{ scaleX, opacity }}
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-inherit blur-[2px] opacity-70" />

                {/* Pulse / Flash at 100% */}
                {isComplete && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.8, 0] }}
                        transition={{ duration: 0.5, repeat: 0 }}
                        className="absolute inset-0 bg-white"
                    />
                )}
            </motion.div>

            {/* -------------------------------------------------------
                SIDE SECTION DOTS (Desktop Only)
               ------------------------------------------------------- */}
            {sections.length > 0 && (
                <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
                    {sections.map((section) => {
                        const isActive = activeSectionId === section.id;
                        return (
                            <div key={section.id} className="relative group flex items-center justify-end">
                                {/* Tooltip (appears on hover) */}
                                <div
                                    className={`absolute right-8 px-2 py-1 bg-background/80 backdrop-blur-sm border border-border rounded text-xs font-medium whitespace-nowrap transition-all duration-300 pointer-events-none ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                        }`}
                                >
                                    {formatLabel(section.id)}
                                </div>

                                {/* Dot */}
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className={`relative w-3 h-3 rounded-full transition-all duration-300 border border-primary/50 ${isActive
                                        ? "bg-primary shadow-[0_0_10px_rgba(79,142,247,0.6)] scale-125"
                                        : "bg-transparent hover:bg-primary/20"
                                        }`}
                                    aria-label={`Scroll to ${formatLabel(section.id)}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSectionDot"
                                            className="absolute inset-0 rounded-full bg-primary blur-[2px]"
                                        />
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
