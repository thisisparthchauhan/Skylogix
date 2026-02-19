"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Clock, MapPin, Loader2, CheckCircle2, Globe2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { serviceData } from "@/lib/serviceData";
import { JsonLd } from "@/components/seo/JsonLd";

const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Skylogix",
    description: "Contact page for Skylogix Technologies inquiry form.",
    url: "https://skylogix.tech/contact",
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
            name: "Contact",
            item: "https://skylogix.tech/contact",
        },
    ],
};

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        budget: "",
        service: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setFormData({ name: "", company: "", email: "", phone: "", budget: "", service: "", message: "" });
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <JsonLd data={[contactSchema, breadcrumbSchema]} />
            <Navbar />

            <PageHeader
                title="Contact Us"
                description="Ready to start your project? Get in touch with our team of experts today."
                breadcrumb={[{ label: "Contact" }]}
            />

            <SectionWrapper className="bg-[#0A0F2C]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Panel - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Let's Build Together</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Whether you have a groundbreaking idea or need to modernize your existing systems, we're here to help. Reach out to discuss your vision.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <a href="mailto:contact@skylogix.tech" className="text-muted-foreground hover:text-primary transition-colors">
                                        contact@skylogix.tech
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Linkedin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Connect on LinkedIn</h3>
                                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        Skylogix Technologies
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Response Time</h3>
                                    <p className="text-muted-foreground">
                                        We typically respond within 24 hours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Visual */}
                        <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
                            <Globe2 className="w-32 h-32 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />
                            <div className="absolute bottom-4 left-4 text-xs font-mono text-primary/60">
                                Global Operations • Remote First
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Panel - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <GlassCard className="p-8 md:p-10">
                            {status === "success" ? (
                                <div className="text-center py-20 space-y-6">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                    <p className="text-muted-foreground">
                                        Thank you for reaching out. We've received your message and will get back to you shortly.
                                    </p>
                                    <Button onClick={() => setStatus("idle")} variant="outline">
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Full Name *</label>
                                            <Input
                                                name="name"
                                                required
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Company Name</label>
                                            <Input
                                                name="company"
                                                placeholder="Acme Inc."
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Email Address *</label>
                                            <Input
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                                            <Input
                                                name="phone"
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Budget Range</label>
                                            <div className="relative">
                                                <select
                                                    name="budget"
                                                    className="flex h-12 w-full appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" className="bg-[#0A0F2C]">Select a range</option>
                                                    <option value="< $5K" className="bg-[#0A0F2C]">&lt; $5K</option>
                                                    <option value="$5K - $15K" className="bg-[#0A0F2C]">$5K - $15K</option>
                                                    <option value="$15K - $50K" className="bg-[#0A0F2C]">$15K - $50K</option>
                                                    <option value="$50K+" className="bg-[#0A0F2C]">$50K+</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground">
                                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Service Interest</label>
                                            <div className="relative">
                                                <select
                                                    name="service"
                                                    className="flex h-12 w-full appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" className="bg-[#0A0F2C]">Select a service</option>
                                                    {serviceData.map((s) => (
                                                        <option key={s.slug} value={s.title} className="bg-[#0A0F2C]">{s.title}</option>
                                                    ))}
                                                    <option value="Other" className="bg-[#0A0F2C]">Other</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground">
                                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Project Details</label>
                                        <Textarea
                                            name="message"
                                            placeholder="Tell us about your project, goals, and timeline..."
                                            className="min-h-[150px]"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* hCaptcha Placeholder */}
                                    <div className="bg-white/5 border border-white/10 rounded-md p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-5 h-5 border-2 border-white/20 rounded-[2px]" />
                                            <span className="text-sm text-muted-foreground">I am human</span>
                                            <span className="text-[10px] text-muted-foreground ml-2">(hCaptcha)</span>
                                        </div>
                                        <div className="w-6 h-6 bg-gray-600 rounded-full opacity-50" />
                                    </div>

                                    {errorMessage && (
                                        <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded">
                                            {errorMessage}
                                        </div>
                                    )}

                                    <Button type="submit" className="w-full h-12 text-lg" disabled={status === "loading"}>
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </form>
                            )}
                        </GlassCard>
                    </motion.div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
