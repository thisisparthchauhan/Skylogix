import { Metadata } from "next";
import { PAGE_METADATA, SITE_CONFIG, PageSEO } from "./seoConstants";

type PageKey = keyof typeof PAGE_METADATA;

export function generatePageMetadata(
    pageKey: PageKey,
    overrides?: Partial<PageSEO>
): Metadata {
    const baseData = PAGE_METADATA[pageKey];
    const data = { ...baseData, ...overrides };

    const url = `${SITE_CONFIG.url}${data.canonical}`;

    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: data.title,
            description: data.description,
            url: url,
            siteName: SITE_CONFIG.name,
            locale: "en_US",
            type: "website",
            images: [
                {
                    url: `${SITE_CONFIG.url}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: data.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: data.title,
            description: data.description,
            creator: SITE_CONFIG.twitter,
            images: [`${SITE_CONFIG.url}/og-image.png`],
        },
    };
}
