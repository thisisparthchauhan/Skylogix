import { MetadataRoute } from "next";
import { serviceData } from "@/lib/serviceData";
import { caseStudies } from "@/lib/caseStudyData";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://skylogix.tech";

    const staticRoutes = [
        "",
        "/about",
        "/services",
        "/case-studies",
        "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const serviceRoutes = serviceData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    const caseStudyRoutes = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
