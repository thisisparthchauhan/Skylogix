"use client";

import Script from "next/script";

export default function TawkToChat() {
    // Only load if IDs are present (or if you want to hardcode them, but env vars are safer)
    const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
    const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

    // If environment variables are missing, don't render the script to avoid errors.
    // In production, you would want these variables to be set.
    if (!propertyId || !widgetId) {
        // You can log a warning in development mode if needed
        if (process.env.NODE_ENV === 'development') {
            console.warn("Tawk.to Property ID or Widget ID is missing in environment variables.");
        }
        return null;
    }

    return (
        <Script
            id="tawk-to-chat"
            strategy="lazyOnload"
            src={`https://embed.tawk.to/${propertyId}/${widgetId}`}
            onLoad={() => {
                console.log("Tawk.to script loaded successfully");
            }}
            onError={(e) => {
                console.error("Tawk.to script failed to load", e);
            }}
        />
    );
}
