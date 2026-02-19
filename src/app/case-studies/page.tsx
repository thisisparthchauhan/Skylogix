import CaseStudiesContent from "./CaseStudiesContent";

import { generatePageMetadata } from "@/lib/generatePageMetadata";

import BreadcrumbSchema from "@/components/seo/schemas/BreadcrumbSchema";

export const metadata = generatePageMetadata("caseStudies");

export default function CaseStudiesPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Case Studies", url: "/case-studies" }
            ]} />
            <CaseStudiesContent />
        </>
    );
}
