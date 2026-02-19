"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { CookiePreferencesModal } from "./CookiePreferencesModal";

export function CookieConsent() {
    const { hasConsent, isLoaded, updateConsent, consent } = useCookieConsent();
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Show banner after delay if not already consented
        if (isLoaded && !hasConsent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isLoaded, hasConsent]);

    const handleAcceptAll = () => {
        updateConsent({ essential: true, analytics: true, marketing: true });
        setIsVisible(false); // Close immediately for better UX
    };

    const handleRejectNonEssential = () => {
        updateConsent({ essential: true, analytics: false, marketing: false });
        setIsVisible(false);
    };

    const handleSavePreferences = (preferences: any) => {
        updateConsent(preferences);
        setIsModalOpen(false);
        setIsVisible(false);
    };

    // Don't render anything until loaded to avoid hydration mismatch
    if (!isLoaded) return null;

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                    >
                        <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl relative">
                            {/* Background with blur */}
                            <div className="absolute inset-0 bg-[#0A0F2C]/95 backdrop-blur-xl border-t border-primary/20" />

                            {/* Left Accent Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-1">
                                {/* Left Content */}
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0 hidden sm:flex">
                                        <Cookie className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-white font-semibold flex items-center gap-2 text-lg">
                                            <span className="sm:hidden">🍪</span> We use cookies
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                                            We use cookies to enhance your experience, analyze site traffic, and for marketing purposes.
                                            By continuing, you agree to our{" "}
                                            <Link href="/cookie-policy" className="text-primary hover:underline underline-offset-4">Cookie Policy</Link>
                                            {" "}and{" "}
                                            <Link href="/privacy-policy" className="text-primary hover:underline underline-offset-4">Privacy Policy</Link>.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Actions */}
                                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                                    <Button
                                        variant="ghost"
                                        className="w-full sm:w-auto text-muted-foreground hover:text-white"
                                        onClick={handleRejectNonEssential}
                                    >
                                        Reject Non-Essential
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full sm:w-auto border-white/10 hover:bg-white/5"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        Manage Preferences
                                    </Button>
                                    <Button
                                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(79,142,247,0.3)] hover:shadow-[0_0_20px_rgba(79,142,247,0.5)] transition-all"
                                        onClick={handleAcceptAll}
                                    >
                                        Accept All
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CookiePreferencesModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                consent={consent}
                onSave={handleSavePreferences}
                onAcceptAll={handleAcceptAll}
            />
        </>
    );
}
