"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface PageViewTrackerProps {
    eventName: string;
    properties?: Record<string, any>;
}

export function PageViewTracker({ eventName, properties }: PageViewTrackerProps) {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", eventName, {
                event_category: "Page View",
                page_path: pathname,
                ...properties
            });
        }
    }, [pathname, eventName, properties]);

    return null;
}
