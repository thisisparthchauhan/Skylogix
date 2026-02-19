"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
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
                    {serviceData.map((service, index) => (
                        <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full">
                            <GlassCard
                                className="h-full flex flex-col group hover:border-primary/50 transition-all duration-300"
                                hoverEffect={true}
                            >
                                <div className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                                    Learn More
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </SectionWrapper>

            <CTA />
            <Footer />
        </main>
    );
}
