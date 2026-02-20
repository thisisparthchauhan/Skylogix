"use client";

import React, { useEffect } from "react";
import { useAuthModal } from "@/hooks/useAuthModal";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { LoginView } from "./LoginView";
import { SignUpView } from "./SignUpView";
import { ForgotPasswordView } from "./ForgotPasswordView";

export function AuthModal() {
    const { isOpen, closeModal, currentView } = useAuthModal();

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [closeModal]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal}
                        className="fixed inset-0 z-[9998] bg-[#060818]/95 backdrop-blur-md"
                    >
                        {/* Overlay Texture for Space Theme Depth */}
                        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                    </motion.div>

                    {/* Modal Wrapper for scrolling */}
                    <div className="fixed inset-0 z-[9999] overflow-y-auto pointer-events-none flex items-center justify-center p-4">
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="pointer-events-auto cursor-auto relative w-full max-w-[420px] max-h-[90vh] overflow-y-auto bg-[#050505] border border-white/10 rounded-[16px] shadow-2xl p-[28px] md:px-[32px]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 w-[28px] h-[28px] rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <X size={14} />
                            </button>

                            {/* Header Logo */}
                            <div className="flex flex-col items-center mb-[12px]">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-[28px] h-[28px] rounded-md bg-white/10 flex flex-shrink-0 items-center justify-center">
                                        <span className="text-white font-bold text-sm">S</span>
                                    </div>
                                    <span className="text-[15px] font-heading font-bold text-white tracking-wide">
                                        Skylogix
                                    </span>
                                </div>
                                <div className="w-10 h-[2px] rounded-full bg-white/10" />
                            </div>

                            {/* Dynamic Views */}
                            <div className="w-full">
                                {currentView === "login" && <LoginView />}
                                {currentView === "signup" && <SignUpView />}
                                {currentView === "forgot" && <ForgotPasswordView />}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
