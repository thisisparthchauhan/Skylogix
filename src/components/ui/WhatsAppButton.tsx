"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // Default number if env variable is missing
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917227937710";
    const message = encodeURIComponent("Hi Skylogix Technologies! I'm interested in your services. Can we discuss my project?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Handle tooltip timing
    useEffect(() => {
        // Show tooltip after 5 seconds
        const showTimer = setTimeout(() => {
            setShowTooltip(true);
        }, 5000);

        // Hide tooltip after showing for 3 seconds (total 8s)
        const hideTimer = setTimeout(() => {
            setShowTooltip(false);
        }, 8000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

            {/* Tooltip - Desktop Only */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="hidden md:block bg-white text-black text-sm font-medium py-2 px-4 rounded-lg shadow-lg relative mb-2"
                    >
                        Need help? Chat now!
                        {/* Triangular arrow pointing down */}
                        <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white rotate-45 transform" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Button */}
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg group overflow-hidden"
                initial={{ width: 56, height: 56 }}
                animate={{
                    width: isHovered ? "auto" : 56,
                    height: 56
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Pulse Animation Effect */}
                <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white duration-1000" />

                {/* Glowing Ring Animation */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="flex items-center px-4 h-full">
                    {/* WhatsApp Icon */}
                    <div className="min-w-[24px] flex items-center justify-center">
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="fill-white stroke-none"
                        >
                            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.303-.345.451-.523.151-.18.2-.3.3-.497.098-.196.05-.368-.025-.516-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51h-.572c-.198 0-.52.074-.792.372-.272.299-1.047 1.026-1.047 2.502 0 1.476 1.076 2.901 1.224 3.101.149.2 2.118 3.375 5.132 4.679.717.306 1.275.489 1.707.626.712.226 1.36.194 1.871.118.571-.085 1.767-.719 2.016-1.413.249-.694.249-1.29.174-1.425-.076-.135-.275-.21-.572-.36Z" />
                        </svg>
                    </div>

                    {/* Text - Only visible on hover/desktop expansion */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.span
                                initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                                animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
                                exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                                className="whitespace-nowrap font-bold text-white overflow-hidden"
                            >
                                Chat with us
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </motion.a>
        </div>
    );
}
