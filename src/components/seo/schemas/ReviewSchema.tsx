import { SITE_CONFIG } from "@/lib/seoConstants";
import StructuredData from "../StructuredData";

const ReviewSchema = () => {
    // Hardcoded sample reviews for schema as requested
    const reviews = [
        {
            reviewRating: "5",
            reviewBody: "Skylogix transformed our mobile presence. The new app is blazing fast and our customers love it.",
            author: "CTO, FinTech Company",
            datePublished: "2023-10-15"
        },
        {
            reviewRating: "5",
            reviewBody: "The reliability and security of this platform have allowed us to expand our services nationwide.",
            author: "Director of Operations, HealthTech Firm",
            datePublished: "2023-11-22"
        },
        {
            reviewRating: "5",
            reviewBody: "The ROI on this project was immediate. Our customers are finding exactly what they want, faster.",
            author: "Head of Digital, E-commerce Retailer",
            datePublished: "2024-01-10"
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_CONFIG.name,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "50",
            bestRating: "5",
            worstRating: "1"
        },
        review: reviews.map(review => ({
            "@type": "Review",
            reviewRating: {
                "@type": "Rating",
                ratingValue: review.reviewRating,
                bestRating: "5",
                worstRating: "1"
            },
            reviewBody: review.reviewBody,
            author: {
                "@type": "Person",
                name: review.author // Using anonymous role/title as name per request
            },
            datePublished: review.datePublished
        }))
    };

    return <StructuredData data={schema} />;
};

export default ReviewSchema;
