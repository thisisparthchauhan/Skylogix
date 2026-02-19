import { SITE_CONFIG, SERVICES_SEO } from "@/lib/seoConstants";
import StructuredData from "../StructuredData";

const OrganizationSchema = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/logo.png`,
        description: SITE_CONFIG.description,
        email: SITE_CONFIG.email,
        foundingDate: `${SITE_CONFIG.foundedYear}`,
        numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: SITE_CONFIG.teamSize,
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: SITE_CONFIG.address.city,
            addressRegion: SITE_CONFIG.address.state,
            addressCountry: SITE_CONFIG.address.countryCode,
        },
        sameAs: [SITE_CONFIG.linkedin, "https://github.com/skylogix"], // Placeholder for GitHub if not in constants
        serviceArea: {
            "@type": "Place",
            name: "Worldwide",
        },
        areaServed: ["US", "GB", "AU", "DE", "FR", "AE"],
        knowsAbout: [
            "Software Development",
            "Artificial Intelligence",
            "Mobile App Development",
            "Cloud Computing",
            "Web Development",
            "UI/UX Design",
            "Machine Learning",
            "IT Consulting",
            "No-Code Development",
            "Backend Engineering",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "IT Services",
            itemListElement: SERVICES_SEO.map((service, index) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.metaDescription,
                    url: `${SITE_CONFIG.url}/services/${service.slug}`,
                },
                position: index + 1,
            })),
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <>
            <StructuredData data={organizationSchema} />
            <StructuredData data={websiteSchema} />
        </>
    );
};

export default OrganizationSchema;
