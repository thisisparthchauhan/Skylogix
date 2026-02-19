"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { GlassCard } from "@/components/ui/GlassCard";

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasSeenPopup, setHasSeenPopup] = useState(false);

    useEffect(() => {
        // checkpoint: logic for checking storage
        const seen = sessionStorage.getItem("skylogix_exit_popup_seen");
        if (seen) {
            setHasSeenPopup(true);
            return;
        }

        // DESKTOP TRIGGER: Mouse leaves top of window
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                triggerPopup();
            }
        };

        // MOBILE TRIGGER: Time based (60 seconds)
        const mobileTimer = setTimeout(() => {
            triggerPopup();
        }, 60000);

        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            clearTimeout(mobileTimer);
        };
    }, [hasSeenPopup]);

    const triggerPopup = () => {
        if (!hasSeenPopup) {
            setIsVisible(true);
            setHasSeenPopup(true);
            sessionStorage.setItem("skylogix_exit_popup_seen", "true");
        }
    };

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-[#060818]/85 backdrop-blur-sm"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-[480px] z-10"
                    >
                        <GlassCard className="p-8 border border-[#4F8EF7]/50 shadow-[0_0_50px_rgba(79,142,247,0.2)] bg-[#0A0F2C]">
                            {/* Close Button */}
                            <button
                                onClick={closePopup}
                                className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Content */}
                            <div className="text-center mb-6">
                                <span className="text-[#4F8EF7] text-sm font-medium tracking-wider uppercase mb-2 block">
                                    Wait — before you go!
                                </span>
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                                    Get a Free Project Consultation
                                </h2>
                                <p className="text-muted-foreground">
                                    Tell us about your project and get a free 30-min strategy call with our team.
                                </p>
                            </div>

                            {/* Form */}
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <Input
                                    placeholder="Your Name"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-[#4F8EF7]"
                                />
                                <Input
                                    type="email"
                                    placeholder="Work Email"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-[#4F8EF7]"
                                />
                                <Select className="bg-white/5 border-white/10 text-white focus:border-[#4F8EF7]">
                                    <option value="" className="bg-[#0A0F2C]">What do you need?</option>
                                    <option value="mobile-app" className="bg-[#0A0F2C]">Mobile App Development</option>
                                    <option value="web-dev" className="bg-[#0A0F2C]">Web Development</option>
                                    <option value="ai-ml" className="bg-[#0A0F2C]">AI & Machine Learning</option>
                                    <option value="consulting" className="bg-[#0A0F2C]">IT Consulting</option>
                                    <option value="other" className="bg-[#0A0F2C]">Other</option>
                                </Select>

                                <Button className="w-full bg-[#4F8EF7] hover:bg-[#4F8EF7]/90 text-white font-semibold py-6 shadow-[0_0_20px_rgba(79,142,247,0.4)]">
                                    Book Free Call
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </form>

                            <div className="mt-4 text-center">
                                <a href="mailto:contact@skylogix.tech" className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center justify-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    Or email us at contact@skylogix.tech
                                </a>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
