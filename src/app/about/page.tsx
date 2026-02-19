import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Us | Skylogix Technologies",
    description: "Learn about Skylogix Technologies, a global IT services partner built on innovation, integrity, and engineering excellence.",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
