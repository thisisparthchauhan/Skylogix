"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isTextHover, setIsTextHover] = useState(false);

    // Mouse position state for the ring (laggy)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring physics for smooth movement
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Ref for the dot (immediate movement)
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Hide on touch devices
        if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            // Update spring values for ring
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Directly move dot for instant response
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }

            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsHovering(true);
        const handleMouseUp = () => setIsHovering(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Text hover detection
            if (target.tagName === "P" || target.tagName === "SPAN" || target.tagName === "H1" || target.tagName === "H2" || target.tagName === "H3" || target.tagName === "H4" || target.tagName === "H5" || target.tagName === "H6" || target.tagName === "LI") {
                setIsTextHover(true);
            } else {
                setIsTextHover(false);
            }

            // Interactive element hover detection
            const isInteractive =
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA" ||
                target.classList.contains("magnetic-target");

            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
            {/* Inner Dot - No spring, follows exactly */}
            <div
                ref={dotRef}
                className={`absolute top-0 left-0 w-[6px] h-[6px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isHovering ? "opacity-0" : "opacity-100"}`}
            />

            {/* Outer Ring - Spring physics, lags slightly */}
            <motion.div
                className="absolute top-0 left-0 border border-[#4F8EF7] rounded-full -translate-x-1/2 -translate-y-1/2 box-border flex items-center justify-center backdrop-blur-[1px]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    width: isHovering ? 60 : 32,
                    height: isHovering ? 60 : 32,
                    backgroundColor: isHovering ? "rgba(79, 142, 247, 0.15)" : "transparent",
                    borderColor: isTextHover ? "transparent" : "#4F8EF7", // Hide border on text hover for I-beam effect (if desired, or keep generic)
                    mixBlendMode: isTextHover ? "difference" : "normal", // Cool effect for text
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
            >
                {/* Optional I-beam visual for text hover */}
                {isTextHover && !isHovering && (
                    <div className="w-[1px] h-[20px] bg-[#4F8EF7] absolute" />
                )}
            </motion.div>
        </div>
    );
}
