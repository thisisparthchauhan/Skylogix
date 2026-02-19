import { SITE_CONFIG } from "@/lib/seoConstants";
import StructuredData from "../StructuredData";

const ProfessionalServiceSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: SITE_CONFIG.name,
        image: `${SITE_CONFIG.url}/og-image.png`,
        priceRange: "$$$",
        currenciesAccepted: "USD, GBP, EUR, AED",
        paymentAccepted: "Bank Transfer, PayPal, Wise",
        openingHours: "Mo-Fr 09:00-18:00",
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        url: SITE_CONFIG.url,
        address: {
            "@type": "PostalAddress",
            streetAddress: "Start-Up Street", // Placeholder
            addressLocality: SITE_CONFIG.address.city,
            addressRegion: SITE_CONFIG.address.state,
            postalCode: "380001", // Placeholder
            addressCountry: SITE_CONFIG.address.countryCode,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: "23.0225", // Ahmedabad coordinates
            longitude: "72.5714",
        },
        sameAs: [
            SITE_CONFIG.linkedin,
            SITE_CONFIG.twitter,
            "https://github.com/skylogix" // Placeholder
        ]
    };

    return <StructuredData data={schema} />;
};

export default ProfessionalServiceSchema;
