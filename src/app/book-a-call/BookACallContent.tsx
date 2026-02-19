"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Clock,
    Video,
    Globe,
    ShieldCheck,
    Target,
    Hammer,
    Banknote,
    FileText,
    Mail,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import CalendlyEmbed from "@/components/booking/CalendlyEmbed";
import { testimonials } from "@/lib/testimonialsData";

export default function BookACallContent() {
    const testimonial = testimonials[0]; // Use the first one (FinTech CTO)

    return (
        <main className="min-h-screen bg-[#060818] text-white overflow-x-hidden selection:bg-primary/30">
            <Navbar />

            <div className="pt-32 pb-20 px-4 md:pt-40">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* LEFT COLUMN: Value content */}
                        <div className="space-y-10">

                            {/* Header */}
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
                                    <Clock className="w-3 h-3" />
                                    Free 30-Min Call
                                </div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                                    Let's Talk About <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#00C2FF]">
                                        Your Project
                                    </span>
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                                    No sales pitch. Just honest advice on the best tech approach for your goals.
                                </p>
                            </div>

                            {/* What to expect */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-white">What to expect:</h3>
                                <ul className="space-y-4">
                                    <ListItem icon={<Target className="w-5 h-5 text-primary" />} text="We review your project idea & requirements" />
                                    <ListItem icon={<Hammer className="w-5 h-5 text-primary" />} text="We suggest the best tech stack & approach" />
                                    <ListItem icon={<Banknote className="w-5 h-5 text-primary" />} text="We give you a realistic budget & timeline" />
                                    <ListItem icon={<FileText className="w-5 h-5 text-primary" />} text="You get a free written summary after the call" />
                                </ul>
                            </div>

                            {/* Call Details Card */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4">
                                <DetailRow icon={<Clock className="w-5 h-5 text-muted-foreground" />} label="Duration" value="30 Minutes" />
                                <DetailRow icon={<Video className="w-5 h-5 text-muted-foreground" />} label="Video" value="Google Meet or Zoom" />
                                <DetailRow icon={<Globe className="w-5 h-5 text-muted-foreground" />} label="Available" value="Mon–Fri, Multiple Timezones" />
                                <DetailRow icon={<ShieldCheck className="w-5 h-5 text-muted-foreground" />} label="NDA" value="Signed before call if needed" />
                            </div>

                            {/* Testimonial */}
                            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 relative">
                                <p className="text-[#C8D5E8] italic text-sm mb-4 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
                                        style={{ backgroundColor: testimonial.avatarColor }}
                                    >
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white">{testimonial.role}, {testimonial.company}</div>
                                        <div className="text-[10px] text-muted-foreground">{testimonial.service}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Async contact */}
                            <div className="pt-4 flex items-center gap-2 text-sm text-muted-foreground">
                                <span>Prefer async?</span>
                                <Link href="mailto:contact@skylogix.tech" className="text-primary hover:underline flex items-center gap-1">
                                    <Mail className="w-4 h-4" />
                                    Email us instead
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Calendly Embed */}
                        <div className="relative">
                            <div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
                                <div className="bg-[#060818] rounded-xl overflow-hidden border border-white/5 p-6 md:p-8">
                                    <div className="mb-6 text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">Pick a Time That Works</h3>
                                        <p className="text-sm text-muted-foreground">Select a slot on the calendar below.</p>
                                    </div>
                                    <div className="rounded-lg overflow-hidden border border-white/5 bg-black/20">
                                        <CalendlyEmbed variant="inline" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <SectionWrapper className="bg-white/[0.02] border-t border-white/5 py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-center mb-12">Common Questions</h2>

                    <div className="grid gap-6">
                        <FAQItem
                            q="Is this call really free?"
                            a="Yes, 100%. We believe in providing value first. Even if we don't end up working together, you'll walk away with a clear roadmap for your project."
                        />
                        <FAQItem
                            q="What if I'm not ready to start yet?"
                            a="That's perfectly fine. We often speak with founders who are in the early ideation phase. We can help you validate your idea and plan your next steps."
                        />
                        <FAQItem
                            q="Do you sign NDA before the call?"
                            a="Absolutely. If you have sensitive IP, we are happy to sign a Non-Disclosure Agreement before our conversation. Just email us to request one."
                        />
                        <FAQItem
                            q="What timezone are you in?"
                            a="We are a global team with presence in multiple timezones. Our calendar automatically shows availability in your local time."
                        />
                    </div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}

function ListItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <li className="flex items-start gap-3">
            <div className="mt-1 p-1 rounded-full bg-primary/10 shrink-0">
                {icon}
            </div>
            <span className="text-muted-foreground">{text}</span>
        </li>
    );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 last:pb-0 first:pt-0">
            <div className="flex items-center gap-3">
                {icon}
                <span className="text-sm text-muted-foreground">{label}</span>
            </div>
            <span className="text-sm font-medium text-white">{value}</span>
        </div>
    );
}

function FAQItem({ q, a }: { q: string; a: string }) {
    return (
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/20 transition-colors">
            <h4 className="font-bold text-white mb-2">{q}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
        </div>
    );
}
