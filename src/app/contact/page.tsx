import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us | Start Your Project with Skylogix",
    description: "Get in touch with Skylogix Technologies for your web, mobile, or AI development needs. We respond within 24 hours.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
