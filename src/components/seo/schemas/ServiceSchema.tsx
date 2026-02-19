import { SITE_CONFIG } from "@/lib/seoConstants";
import StructuredData from "../StructuredData";

interface ServiceData {
    slug: string;
    title: string;
    description: string;
    offerings: string[];
}

interface ServiceSchemaProps {
    service: ServiceData;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({ service }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
        },
        serviceType: service.title,
        areaServed: ["US", "GB", "AU", "DE", "AE"],
        url: `${SITE_CONFIG.url}/services/${service.slug}`,
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            priceSpecification: {
                "@type": "PriceSpecification",
                description: "Custom pricing based on requirements",
            },
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${service.title} Features`,
            itemListElement: service.offerings.map((offering, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "Service",
                    name: offering,
                },
            })),
        },
    };

    return <StructuredData data={schema} />;
};

export default ServiceSchema;
