import ContactContent from "./ContactContent";

import { generatePageMetadata } from "@/lib/generatePageMetadata";

import BreadcrumbSchema from "@/components/seo/schemas/BreadcrumbSchema";

export const metadata = generatePageMetadata("contact");

export default function ContactPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Contact", url: "/contact" }
            ]} />
            <ContactContent />
        </>
    );
}
