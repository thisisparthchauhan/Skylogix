import AboutContent from "./AboutContent";

import { generatePageMetadata } from "@/lib/generatePageMetadata";

import BreadcrumbSchema from "@/components/seo/schemas/BreadcrumbSchema";

export const metadata = generatePageMetadata("about");

export default function AboutPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "About Us", url: "/about" }
            ]} />
            <AboutContent />
        </>
    );
}
