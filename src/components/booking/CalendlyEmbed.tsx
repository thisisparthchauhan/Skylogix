"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Loader2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CalendlyEmbedProps {
    variant: "inline" | "popup";
    buttonText?: string;
    buttonClassName?: string;
    calendlyUrl?: string;
}

declare global {
    interface Window {
        Calendly: any;
    }
}

export default function CalendlyEmbed({
    variant,
    buttonText = "Schedule a Call",
    buttonClassName,
    calendlyUrl,
}: CalendlyEmbedProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const url = calendlyUrl || process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/skylogix-tech/30min"; // Fallback for dev

    if (variant === "popup") {
        return (
            <>
                <Script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    strategy="lazyOnload"
                    onLoad={() => setIsLoaded(true)}
                />
                <Button
                    onClick={() => {
                        console.log("Opening Calendly Popup...", url);
                        if (window.Calendly) {
                            window.Calendly.initPopupWidget({ url: url });
                        } else {
                            console.warn("Calendly script not loaded yet");
                        }
                    }}
                    className={cn("gap-2", buttonClassName)}
                    disabled={!isLoaded}
                >
                    <Calendar className="w-4 h-4" />
                    {buttonText}
                </Button>

                {/* Required CSS for Popup */}
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            </>
        );
    }

    return (
        <div className="relative w-full min-h-[700px] bg-[#060818] rounded-xl overflow-hidden border border-white/5">
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
                onLoad={() => setIsLoaded(true)}
            />

            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-[#060818] z-10">
                    <Loader2 className="w-8 h-8 animate-spin mb-4 text-primary" />
                    <p className="animate-pulse">Loading booking calendar...</p>
                </div>
            )}

            <div
                className="calendly-inline-widget"
                data-url={`${url}?hide_gdpr_banner=1&background_color=060818&text_color=ffffff&primary_color=4F8EF7`}
                style={{ minWidth: "320px", height: "700px" }}
            />
        </div>
    );
}
