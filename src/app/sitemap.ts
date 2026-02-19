import { MetadataRoute } from "next";
import { SITE_CONFIG, SERVICES_SEO } from "@/lib/seoConstants";
import { caseStudies } from "@/lib/caseStudyData";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;

    // 1. Static Pages
    const staticPages = [
        { route: "", frequency: "weekly", priority: 1.0 },
        { route: "/about", frequency: "monthly", priority: 0.8 },
        { route: "/services", frequency: "weekly", priority: 0.9 },
        { route: "/case-studies", frequency: "weekly", priority: 0.8 },
        { route: "/contact", frequency: "monthly", priority: 0.7 },
        { route: "/book-a-call", frequency: "monthly", priority: 0.9 },
        { route: "/estimate", frequency: "monthly", priority: 0.8 },
        { route: "/team", frequency: "monthly", priority: 0.6 },
        { route: "/testimonials", frequency: "monthly", priority: 0.7 },
    ].map((item) => ({
        url: `${baseUrl}${item.route}`,
        lastModified: new Date(),
        changeFrequency: item.frequency as "weekly" | "monthly" | "yearly",
        priority: item.priority,
    }));

    // Specific priorities for static pages
    const privacyPages = [
        "/privacy-policy",
        "/terms",
        "/cookie-policy",
        "/nda",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 0.3,
    }));

    // 2. Services (Dynamic)
    const serviceUrls = SERVICES_SEO.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // 3. Case Studies (Dynamic)
    const caseStudyUrls = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // 4. Blog (Placeholder - empty for now)
    const blogUrls: MetadataRoute.Sitemap = [];

    return [
        ...staticPages,
        ...privacyPages,
        ...serviceUrls,
        ...caseStudyUrls,
        ...blogUrls,
    ];
}
