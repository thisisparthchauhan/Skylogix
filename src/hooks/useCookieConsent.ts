"use client";

import { useState, useEffect } from "react";

type ConsentState = {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
    timestamp?: string;
    version?: string;
};

const CONSENT_KEY = "skylogix_consent";
const CURRENT_VERSION = "1.0";

const defaultConsent: ConsentState = {
    essential: true,
    analytics: false,
    marketing: false,
};

export function useCookieConsent() {
    const [consent, setConsent] = useState<ConsentState>(defaultConsent);
    const [hasConsent, setHasConsent] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(CONSENT_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (parsed.version === CURRENT_VERSION) {
                    setConsent(parsed);
                    setHasConsent(true);
                }
            } catch (e) {
                console.error("Failed to parse cookie consent", e);
            }
        }
        setIsLoaded(true);
    }, []);

    const updateConsent = (newConsent: Partial<ConsentState>) => {
        const updated = {
            ...consent,
            ...newConsent,
            essential: true, // Always true
            timestamp: new Date().toISOString(),
            version: CURRENT_VERSION,
        };

        setConsent(updated);
        setHasConsent(true);
        localStorage.setItem(CONSENT_KEY, JSON.stringify(updated));

        // Trigger Google Analytics update if needed
        if (updated.analytics) {
            console.log("Analytics consent granted via hook");
            if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("consent", "update", {
                    analytics_storage: "granted",
                    ad_storage: updated.marketing ? "granted" : "denied",
                });
            }
        } else {
            console.log("Analytics consent denied via hook");
            if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("consent", "update", {
                    analytics_storage: "denied",
                    ad_storage: "denied",
                });
            }
        }
    };

    return {
        consent,
        hasConsent,
        isLoaded,
        updateConsent,
    };
}
