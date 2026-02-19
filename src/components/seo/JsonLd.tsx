import Head from "next/head";

type JsonLdProps = {
    data: Record<string, any> | Record<string, any>[];
};

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skylogix Technologies",
    url: "https://skylogix.tech",
    logo: "https://skylogix.tech/logo.png", // Replace with actual logo URL
    sameAs: [
        "https://www.linkedin.com/company/skylogix-technologies",
        "https://twitter.com/skylogixtech",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-012-3456",
        contactType: "customer service",
    },
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Skylogix Technologies",
    url: "https://skylogix.tech",
    potentialAction: {
        "@type": "SearchAction",
        target: "https://skylogix.tech/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
    },
};
