"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface ConsentState {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
}

interface CookiePreferencesModalProps {
    isOpen: boolean;
    onClose: () => void;
    consent: ConsentState;
    onSave: (newConsent: ConsentState) => void;
    onAcceptAll: () => void;
}

export function CookiePreferencesModal({
    isOpen,
    onClose,
    consent,
    onSave,
    onAcceptAll,
}: CookiePreferencesModalProps) {
    // Local state for toggles before saving
    // We can just use the parent's state or local state?
    // Let's passed down controlled state handling would be better but let's do local for the modal interaction
    // Actually, to keep it simple, let's just use a local copy

    // Changing approach: The parent provided 'consent' is the source of truth, but we need editable state.
    // However, react hooks rules... let's just assume parent handles the logic or we create a small wrapper.
    // Better: This component is purely presentation for the modal? No, it needs state.

    // WAIT: I can't easily use hooks inside a conditional return if I did that.
    // Let's assume the parent passes the CURRENT consent, and we initialize local state with it.
    // But since the modal is conditionally rendered via AnimatePresence usually, we can init state on mount.

    const { essential, analytics, marketing } = consent;

    // We need state to toggle within the modal without saving yet.
    // But since this is a controlled component from the parent's perspective regarding open/close,
    // we should manage the "pending" preferences here.

    // NOTE: For simplicity in this specific file generation without a complex parent wrapper, 
    // I will use a simple internal state initialized from props. 
    // This assumes the modal is unmounted when closed, or we use useEffect to sync.

    // Re-implementing with local state management inside the component requires import React
    const { useState, useEffect } = require("react");
    const [preferences, setPreferences] = useState(consent);

    useEffect(() => {
        if (isOpen) {
            setPreferences(consent);
        }
    }, [isOpen, consent]);

    const handleToggle = (key: keyof ConsentState) => {
        if (key === "essential") return; // Locked
        setPreferences((prev: any) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#0A0F2C]/90 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-6 h-6 text-primary" />
                                    <h2 className="text-xl font-heading font-bold text-white">Cookie Preferences</h2>
                                </div>
                                <button onClick={onClose} className="text-muted-foreground hover:text-white transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar">
                                <p className="text-sm text-muted-foreground">
                                    Manage your cookie settings. You can enable or disable different types of cookies below.
                                </p>

                                {/* Essential */}
                                <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-white">Essential Cookies</h3>
                                            <span className="text-[10px] uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-full border border-primary/20">Required</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            Necessary for the website to function (e.g., security, session management). Cannot be disabled.
                                        </p>
                                    </div>
                                    <Switch checked={true} disabled aria-label="Essential cookies" />
                                </div>

                                {/* Analytics */}
                                <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-white">Analytics Cookies</h3>
                                        <p className="text-xs text-muted-foreground">
                                            Help us understand how visitors interact with our website via Google Analytics.
                                        </p>
                                    </div>
                                    <Switch
                                        checked={preferences.analytics}
                                        onCheckedChange={() => handleToggle("analytics")}
                                        aria-label="Analytics cookies"
                                    />
                                </div>

                                {/* Marketing */}
                                <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-white">Marketing Cookies</h3>
                                        <p className="text-xs text-muted-foreground">
                                            Used to deliver relevant advertisements and track ad performance.
                                        </p>
                                    </div>
                                    <Switch
                                        checked={preferences.marketing}
                                        onCheckedChange={() => handleToggle("marketing")}
                                        aria-label="Marketing cookies"
                                    />
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-white/5 bg-black/20 flex flex-col sm:flex-row items-center gap-3">
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto"
                                    onClick={onAcceptAll}
                                >
                                    Accept All
                                </Button>
                                <Button
                                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white ml-auto"
                                    onClick={() => onSave(preferences)}
                                >
                                    Save Preferences
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
