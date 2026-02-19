import ProjectEstimator from "@/components/estimator/ProjectEstimator";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Zap, MessageCircle, HelpCircle } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

import { generatePageMetadata } from "@/lib/generatePageMetadata";

export const metadata = generatePageMetadata("estimate");

export default function EstimatePage() {
    return (
        <main className="min-h-screen bg-[#060818] text-white overflow-x-hidden relative selection:bg-primary/30">
            <Navbar />

            {/* 2. Page Hero */}
            <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-4">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="container max-w-4xl mx-auto text-center relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        <Zap className="w-3 h-3" />
                        Free Tool
                    </div>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Estimate Your Project <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#00C2FF]">Cost Instantly</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        4 quick questions. Instant estimate. No commitment required.
                    </p>

                    {/* Trust Pills */}
                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            <span>NDA Safe</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground">
                            <Zap className="w-4 h-4 text-primary" />
                            <span>Instant</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground">
                            <MessageCircle className="w-4 h-4 text-primary" />
                            <span>Free Call</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Estimator Component */}
            <section className="relative z-10 pb-20 px-4">
                <ProjectEstimator />
            </section>

            {/* 4. FAQ Section */}
            <SectionWrapper className="bg-white/5 border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">Common questions about our estimation process.</p>
                    </div>

                    <div className="grid gap-6">
                        {/* Q1 */}
                        <div className="bg-[#0A0F2C]/50 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <HelpCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white mb-2">Is this estimate accurate?</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        This is a preliminary range based on typical projects. After a free 30-min call, we provide a precise fixed quote tailored to your exact requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Q2 */}
                        <div className="bg-[#0A0F2C]/50 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white mb-2">Do I need to pay anything?</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Zero upfront. We discuss, plan, and only invoice after you approve the final proposal. This tool is completely free to use.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Q3 */}
                        <div className="bg-[#0A0F2C]/50 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Zap className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white mb-2">How long until I get a response?</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Within 24 business hours. For urgent projects, WhatsApp us directly for same-day response using the button in the corner.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Background Starfield */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>

            <Footer />
        </main>
    );
}
