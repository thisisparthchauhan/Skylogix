import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seoConstants";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = SITE_CONFIG.url;

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/_next/",
                    "/admin/",
                    "/private/",
                    "/*.json$",
                ],
                crawlDelay: 10,
            },
            {
                userAgent: "Googlebot",
                allow: "/",
            },
            {
                userAgent: "Bingbot",
                allow: "/",
            },
            {
                userAgent: ["GPTBot", "CCBot", "anthropic-ai", "Claude-Web"],
                disallow: "/",
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
