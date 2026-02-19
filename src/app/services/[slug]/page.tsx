import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/CTA";
import { serviceData } from "@/lib/serviceData";
import { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return serviceData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | Skylogix Services`,
        description: service.description,
        openGraph: {
            title: `${service.title} | Skylogix Services`,
            description: service.description,
            url: `/services/${slug}`,
        },
        alternates: {
            canonical: `/services/${slug}`,
        },
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = serviceData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    // Get 3 related services (excluding current one)
    const relatedServices = serviceData
        .filter((s) => s.slug !== slug)
        .slice(0, 3);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
            "@type": "Organization",
            name: "Skylogix Technologies",
            url: "https://skylogix.tech",
        },
        offers: {
            "@type": "Offer",
            description: service.tagline,
        },
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
            {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: `https://skylogix.tech/services/${slug}`,
            },
        ],
    };

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <JsonLd data={[jsonLd, breadcrumbSchema]} />
            <Navbar />

            <PageHeader
                title={service.title}
                description={service.tagline}
                breadcrumb={[
                    { label: "Services", href: "/services" },
                    { label: service.title }
                ]}
            />

            {/* Main Content & Offerings */}
            <SectionWrapper className="bg-[#0A0F2C]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Services
                        </Link>

                        <h2 className="text-3xl md:text-4xl font-heading font-bold">
                            Unlocking Potential with {service.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {service.description} At Skylogix, we ensure that every solution is tailored to your specific business environment, ensuring maximum impact and ROI.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">What We Offer</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {service.offerings.map((offering, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-gray-200">{offering}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Side Panel */}
                    <GlassCard className="p-8 sticky top-24">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                                <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Technologies</h3>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {service.technologies.map((tech, i) => (
                                <Badge key={i} variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-white/10 px-3 py-1">
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <div className="border-t border-white/10 pt-6">
                            <h4 className="font-bold mb-4">Why This Service?</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                                    Scalable Architecture
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                                    Industry Best Practices
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                                    Dedicated Support
                                </li>
                            </ul>
                        </div>
                    </GlassCard>
                </div>
            </SectionWrapper>

            {/* Process Section */}
            <SectionWrapper className="bg-background">
                <SectionHeading
                    eyebrow="Our Approach"
                    title="How We Deliver"
                    subtitle="A structured process to ensure quality and consistency."
                    className="mb-16"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.process.map((step, i) => (
                        <GlassCard key={i} className="relative p-6 group hover:border-primary/50 transition-colors">
                            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg text-lg">
                                {i + 1}
                            </div>
                            <h4 className="text-lg font-bold mt-4 mb-2">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </SectionWrapper>

            {/* Related Services */}
            <SectionWrapper className="bg-[#0A0F2C]">
                <SectionHeading
                    title="Related Services"
                    align="left"
                    className="mb-10"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedServices.map((related, i) => (
                        <Link key={i} href={`/services/${related.slug}`}>
                            <GlassCard className="h-full p-6 hover:bg-white/5 transition-colors group">
                                <div className="flex items-center gap-3 mb-4">
                                    <related.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <h4 className="font-bold text-lg">{related.title}</h4>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {related.description}
                                </p>
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
