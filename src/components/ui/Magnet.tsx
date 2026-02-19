"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagnetProps {
    children: ReactNode;
    padding?: number;
    disabled?: boolean;
    strength?: number; // How strong the pull is (higher = more movement)
    className?: string; // Add className prop
}

export default function Magnet({
    children,
    padding = 20, // Hit area padding
    disabled = false,
    strength = 0.5, // Default strength factor
    className = "" // Default to empty string
}: MagnetProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || disabled) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate center of the element
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const distX = clientX - centerX;
        const distY = clientY - centerY;

        // Move element towards mouse (magnetic effect)
        // Max shift clamping can be added here if needed, but framer motion handles it smoothly
        setPosition({ x: distX * strength, y: distY * strength });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            className={className}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
            style={{
                display: "inline-block",
                padding: padding,
                margin: -padding // Offset padding to not affect layout flow
            }}
        >
            {children}
        </motion.div>
    );
}
