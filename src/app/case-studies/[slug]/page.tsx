import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/CTA";
import { caseStudies } from "@/lib/caseStudyData";
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

import { generatePageMetadata } from "@/lib/generatePageMetadata";
import BreadcrumbSchema from "@/components/seo/schemas/BreadcrumbSchema";
import { RelatedLinks } from "@/components/seo/RelatedLinks";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        return generatePageMetadata("caseStudies", { title: "Case Study Not Found" });
    }

    return generatePageMetadata("caseStudies", {
        title: `${study.title} | Skylogix Case Studies`,
        description: study.challenge,
        canonical: `/case-studies/${slug}`,
        keywords: [study.industry, study.techStack[0], "case study"]
    });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    // Related studies (same industry preferrably)
    const relatedStudies = caseStudies
        .filter((s) => s.slug !== slug && s.industry === study.industry)
        .slice(0, 2);

    // If not enough same industry, fill with others
    if (relatedStudies.length < 2) {
        const others = caseStudies
            .filter((s) => s.slug !== slug && s.industry !== study.industry)
            .slice(0, 2 - relatedStudies.length);
        relatedStudies.push(...others);
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: study.title,
        description: study.overview,
        articleBody: `${study.fullChallenge} ${study.fullSolution}`,
        author: {
            "@type": "Organization",
            name: "Skylogix Technologies",
        },
        publisher: {
            "@type": "Organization",
            name: "Skylogix Technologies",
            logo: {
                "@type": "ImageObject",
                url: "https://skylogix.tech/logo.png",
            },
        },
    };



    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <JsonLd data={jsonLd} />
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Case Studies", url: "/case-studies" },
                { name: study.title, url: `/case-studies/${slug}` }
            ]} />
            <PageViewTracker eventName="case_study_view" properties={{ case_study: study.title, industry: study.industry }} />
            <Navbar />

            <PageHeader
                title={study.title}
                description={`${study.industry} • ${study.region} • ${study.type}`}
                breadcrumb={[
                    { label: "Case Studies", href: "/case-studies" },
                    { label: study.title }
                ]}
            />

            <SectionWrapper className="bg-[#0A0F2C]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <Link href="/case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Case Studies
                        </Link>

                        {/* Overview */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-heading font-bold text-white">Project Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {study.overview}
                            </p>
                        </div>

                        {/* Challenge & Solution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <GlassCard className="p-8 border-l-4 border-l-red-500/50">
                                <h3 className="text-xl font-bold mb-4 text-white">The Challenge</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {study.fullChallenge}
                                </p>
                            </GlassCard>
                            <GlassCard className="p-8 border-l-4 border-l-green-500/50">
                                <h3 className="text-xl font-bold mb-4 text-white">The Solution</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {study.fullSolution}
                                </p>
                            </GlassCard>
                        </div>

                        {/* Results */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-heading font-bold text-white">Key Results</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {study.results.map((res, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                                        <div className="text-accent-cyan font-bold text-lg mb-1">{res}</div>
                                        {/* Simple parsing for label if needed, or just display as is */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-8 relative">
                            <Quote className="w-10 h-10 text-secondary/40 absolute top-4 left-4" />
                            <blockquote className="relative z-10 text-center pt-6">
                                <p className="text-lg text-gray-200 italic mb-6">"{study.testimonial.quote}"</p>
                                <footer className="text-sm font-bold text-secondary">
                                    — {study.testimonial.author}
                                </footer>
                            </blockquote>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <GlassCard className="p-6">
                            <h3 className="font-bold mb-4 text-lg">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {study.techStack.map((tech, i) => (
                                    <Badge key={i} variant="outline" className="border-white/10 bg-white/5 text-gray-300">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </GlassCard>

                        <GlassCard className="p-6">
                            <h3 className="font-bold mb-4 text-lg">Project Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                    <span>Confidential Client (NDA)</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                    <span>Region: {study.region}</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                    <span>Industry: {study.industry}</span>
                                </li>
                            </ul>
                        </GlassCard>

                        <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl p-6 text-center border border-white/10">
                            <h3 className="font-bold mb-2">Have a similar project?</h3>
                            <p className="text-sm text-muted-foreground mb-4">Let's discuss how we can help you achieve similar results.</p>
                            <Link href="/book-a-call" className="block w-full py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                                Build Something Similar
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Related Section */}
            <SectionWrapper className="bg-background">
                <SectionHeading
                    title="More Success Stories"
                    align="left"
                    className="mb-8"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {relatedStudies.map((related, i) => (
                        <Link key={i} href={`/case-studies/${related.slug}`}>
                            <GlassCard className="p-6 hover:border-primary/50 transition-colors h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-xs font-bold text-secondary">{related.industry}</span>
                                        <span className="text-xs text-muted-foreground">{related.region}</span>
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">{related.title}</h4>
                                    <p className="text-sm text-muted-foreground line-clamp-2">{related.challenge}</p>
                                </div>
                                <div className="mt-4 text-sm font-medium text-primary">Read Case Study →</div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </SectionWrapper>

            <RelatedLinks currentPage={slug} className="bg-[#050714]" title="Explore Related Solutions" />

            <CTA />
            <Footer />
        </main>
    );
}
