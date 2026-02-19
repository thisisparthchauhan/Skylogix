"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import ServiceCard from "@/components/ui/ServiceCard";
import { CTA } from "@/components/sections/CTA";
import { serviceData } from "@/lib/serviceData";
import { JsonLd } from "@/components/seo/JsonLd";

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: serviceData.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `https://skylogix.tech/services/${service.slug}`,
        },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://skylogix.tech",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://skylogix.tech/services",
        },
    ],
};

export default function ServicesContent() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

            <JsonLd data={[serviceSchema, breadcrumbSchema]} />
            <Navbar />

            <PageHeader
                title="Our Services"
                description="Comprehensive technology solutions designed to scale your business. From MVP to Enterprise, we cover it all."
                breadcrumb={[{ label: "Services" }]}
            />

            <SectionWrapper className="bg-[#0A0F2C]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {serviceData.map((service) => (
                        <ServiceCard
                            key={service.slug}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            lottieUrl={service.lottieUrl}
                            slug={service.slug}
                        />
                    ))}
                </div>
            </SectionWrapper>

            <CTA />
            <Footer />
        </main>
    );
}
