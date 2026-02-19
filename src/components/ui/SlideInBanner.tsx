"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SlideInBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show banner after 30 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

    const dismissBanner = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-4"
                >
                    <div className="bg-[#0A0F2C]/90 backdrop-blur-md border border-[#4F8EF7]/30 rounded-xl p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">

                        <div className="flex items-center gap-3 text-center sm:text-left">
                            <span className="text-2xl">🚀</span>
                            <div>
                                <h4 className="text-white font-bold text-sm">Free consultation available</h4>
                                <p className="text-muted-foreground text-xs">
                                    Book your call today to discuss your project.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <Button size="sm" className="w-full sm:w-auto bg-[#4F8EF7] hover:bg-[#4F8EF7]/90 text-white rounded-full">
                                Book Now
                                <ArrowRight className="ml-2 w-3 h-3" />
                            </Button>

                            <button
                                onClick={dismissBanner}
                                className="p-2 text-muted-foreground hover:text-white transition-colors rounded-full hover:bg-white/10"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
