"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Cosmic Flash Overlay */}
            <motion.div
                className="fixed inset-0 z-[100] pointer-events-none bg-[#0A0F2C] flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                {/* Subtle Star Burst */}
                <motion.div
                    className="w-[200px] h-[200px] bg-white rounded-full blur-[80px]"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0.8 }} // Flash up
                    transition={{ duration: 0.2 }} // Fast burst
                />
            </motion.div>

            {/* Page Content Transition */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.5,
                }}
            >
                {children}
            </motion.div>
        </>
    );
}
