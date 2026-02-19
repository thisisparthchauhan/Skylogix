import { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
    title: "Case Studies | Success Stories & Client Results",
    description: "Discover how Skylogix has transformed businesses across FinTech, HealthTech, and E-commerce with custom software solutions.",
    alternates: {
        canonical: "/case-studies",
    },
};

export default function CaseStudiesPage() {
    return <CaseStudiesContent />;
}
