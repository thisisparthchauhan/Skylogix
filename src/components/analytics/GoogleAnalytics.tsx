"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import * as gtag from "@/lib/gtag";

export default function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { consent } = useCookieConsent();

    useEffect(() => {
        const url = pathname + searchParams.toString();
        gtag.pageview(url);
    }, [pathname, searchParams]);

    // Construct the initialization script with default denied consent
    // We strictly follow GDPR: Default is denied.
    const initScript = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'marketing': 'denied'
        });

        gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: '${pathname}',
        });
    `;

    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="google-analytics-init"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: initScript,
                }}
            />
        </>
    );
}
