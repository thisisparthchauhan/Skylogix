import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Our Services | Custom Software, AI & Mobile App Development",
    description: "Explore Skylogix's comprehensive IT services including mobile app development, backend engineering, AI solutions, and enterprise web development.",
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesPage() {
    return <ServicesContent />;
}
