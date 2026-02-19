"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    ChevronLeft,
    Check,
    Rocket,
    ShieldCheck,
    Clock,
    MessageSquare,
    CreditCard,
    Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ServicesData, PlatformsData, FeaturesData, TimelinesData, calculateEstimate, getBudgetLabel } from "@/lib/estimatorData";
import { GlassCard } from "@/components/ui/GlassCard";

// Types
type Step = 1 | 2 | 3 | 4 | 5 | 6; // 6 = Success

interface Selections {
    service: string;
    platform: string;
    features: string[];
    timeline: string;
}

interface LeadInfo {
    name: string;
    email: string;
    company: string;
    phone: string;
}

export default function ProjectEstimator() {
    const [step, setStep] = useState<Step>(1);
    const [selections, setSelections] = useState<Selections>({
        service: "",
        platform: "",
        features: [],
        timeline: "",
    });
    const [lead, setLead] = useState<LeadInfo>({
        name: "",
        email: "",
        company: "",
        phone: "",
    });
    const [estimate, setEstimate] = useState({ low: 0, high: 0, budgetRange: "$0" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Update estimate whenever selections change
    useEffect(() => {
        const result = calculateEstimate(
            selections.service,
            selections.platform,
            selections.features,
            selections.timeline
        );
        setEstimate(result);
    }, [selections]);

    // Navigation Handlers
    const nextStep = () => {
        if (step < 5) setStep((prev) => (prev + 1) as Step);
    };

    const prevStep = () => {
        if (step > 1) setStep((prev) => (prev - 1) as Step);
    };

    const toggleFeature = (id: string) => {
        setSelections((prev) => {
            const exists = prev.features.includes(id);
            return {
                ...prev,
                features: exists
                    ? prev.features.filter((f) => f !== id)
                    : [...prev.features, id],
            };
        });
    };

    const handleLeadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLead({ ...lead, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!lead.name || !lead.email) return;
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/estimate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...lead,
                    service: selections.service,
                    platform: selections.platform,
                    features: selections.features,
                    timeline: selections.timeline,
                    estimateLow: estimate.low,
                    estimateHigh: estimate.high,
                    budgetRange: estimate.budgetRange,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            // Track completion
            const selectedService = ServicesData.find(s => s.id === selections.service)?.label || selections.service;
            if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "estimator_completed", {
                    event_category: "Lead Generation",
                    event_label: selectedService
                });
            }

            setStep(6); // Go to success
        } catch (error) {
            console.error("Submission failed:", error);
            // Optional: Show error toast here
            alert("Failed to send estimate. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Render Helpers
    const getPlatformsForService = () => {
        return PlatformsData[selections.service] || [];
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-4 md:p-6">
            {/* ----------------------------------------------------------------
               STEP PROCESS BAR (Only show if not success)
               ---------------------------------------------------------------- */}
            {step !== 6 && (
                <div className="mb-8 hidden md:block">
                    <div className="relative flex justify-between items-center max-w-3xl mx-auto">
                        {/* Background Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full" />

                        {/* Active Progress Line */}
                        <motion.div
                            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#4F8EF7] to-[#00C2FF] -translate-y-1/2 rounded-full origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: (step - 1) / 4 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{ width: "100%" }}
                        />

                        {[1, 2, 3, 4, 5].map((s) => {
                            const isCompleted = s < step;
                            const isCurrent = s === step;

                            return (
                                <div key={s} className="relative z-10 flex flex-col items-center gap-2">
                                    <motion.div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${isCompleted || isCurrent
                                            ? "bg-[#060818] border-[#4F8EF7] text-white shadow-[0_0_15px_rgba(79,142,247,0.5)]"
                                            : "bg-[#060818] border-white/20 text-muted-foreground"
                                            }`}
                                        animate={{ scale: isCurrent ? 1.2 : 1 }}
                                    >
                                        {isCompleted ? <Check className="w-5 h-5 text-[#4F8EF7]" /> : s}
                                    </motion.div>
                                    <span className={`text-xs font-medium uppercase tracking-wider ${isCurrent ? "text-white" : "text-muted-foreground"}`}>
                                        {s === 1 && "Service"}
                                        {s === 2 && "Platform"}
                                        {s === 3 && "Features"}
                                        {s === 4 && "Timeline"}
                                        {s === 5 && "Details"}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* ----------------------------------------------------------------
               MAIN CONTENT AREA
               ---------------------------------------------------------------- */}
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-heading font-bold text-white mb-2">What can we build for you?</h2>
                            <p className="text-muted-foreground">Select the type of service you need.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {ServicesData.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    icon={service.icon}
                                    label={service.label}
                                    selected={selections.service === service.id}
                                    onClick={() => setSelections({ ...selections, service: service.id, platform: "" })} // Reset platform on service change
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-heading font-bold text-white mb-2">Choose your platform</h2>
                            <p className="text-muted-foreground">Which technology stack or platform fits your needs?</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {getPlatformsForService().map((platform) => (
                                <ServiceCard
                                    key={platform.id}
                                    icon={platform.icon}
                                    label={platform.label}
                                    selected={selections.platform === platform.id}
                                    onClick={() => setSelections({ ...selections, platform: platform.id })}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-heading font-bold text-white mb-2">Add Features</h2>
                            <p className="text-muted-foreground">Select any add-ons you need (Optional).</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {FeaturesData.map((feature) => (
                                <ServiceCard
                                    key={feature.id}
                                    icon={feature.icon}
                                    label={feature.label}
                                    selected={selections.features.includes(feature.id)}
                                    onClick={() => toggleFeature(feature.id)}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-heading font-bold text-white mb-2">Timeline Expectations</h2>
                            <p className="text-muted-foreground">How fast do you need this delivered?</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Options */}
                            <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {TimelinesData.map((timeline) => (
                                    <GlassCard
                                        key={timeline.id}
                                        className={`p-6 cursor-pointer border transition-all duration-300 relative group overflow-hidden ${selections.timeline === timeline.id
                                            ? "border-[#4F8EF7] bg-gradient-to-br from-[#4F8EF7]/20 to-transparent shadow-[0_0_20px_rgba(79,142,247,0.2)]"
                                            : "border-white/10 hover:border-[#4F8EF7]/50 hover:bg-white/5"
                                            }`}
                                        onClick={() => setSelections({ ...selections, timeline: timeline.id })}
                                    >
                                        {/* Selection Badge */}
                                        {selections.timeline === timeline.id && (
                                            <div className="absolute top-2 right-2 w-6 h-6 bg-[#4F8EF7] rounded-full flex items-center justify-center text-white">
                                                <Check className="w-4 h-4" />
                                            </div>
                                        )}
                                        <div className="text-4xl mb-4">{timeline.icon}</div>
                                        <h3 className="font-bold text-white text-lg mb-2">{timeline.label}</h3>
                                        <p className="text-sm text-muted-foreground">{timeline.description}</p>
                                    </GlassCard>
                                ))}
                            </div>

                            {/* Estimate Preview */}
                            <div className="col-span-1">
                                <GlassCard className="p-6 border-[#4F8EF7] shadow-[0_0_30px_rgba(79,142,247,0.15)] bg-[#0A0F2C]/80 h-full flex flex-col justify-center text-center">
                                    <h4 className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Estimated Range</h4>
                                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#00C2FF] mb-4">
                                        {estimate.budgetRange}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        *This is a rough estimate based on typical requirements. Final quote may vary.
                                    </p>
                                </GlassCard>
                            </div>
                        </div>
                    </motion.div>
                )}

                {step === 5 && (
                    <motion.div
                        key="step5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-2xl mx-auto space-y-6"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-heading font-bold text-white mb-2">Final Step!</h2>
                            <p className="text-muted-foreground">Where should we send your detailed estimate?</p>
                        </div>

                        <GlassCard className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Full Name *</label>
                                    <Input
                                        name="name"
                                        placeholder="John Doe"
                                        value={lead.name}
                                        onChange={handleLeadChange}
                                        className="bg-white/5 border-white/10 text-white focus:border-[#4F8EF7]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Email Address *</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={lead.email}
                                        onChange={handleLeadChange}
                                        className="bg-white/5 border-white/10 text-white focus:border-[#4F8EF7]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Company</label>
                                    <Input
                                        name="company"
                                        placeholder="Acme Inc."
                                        value={lead.company}
                                        onChange={handleLeadChange}
                                        className="bg-white/5 border-white/10 text-white focus:border-[#4F8EF7]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Phone</label>
                                    <Input
                                        name="phone"
                                        placeholder="+1 (555) 000-0000"
                                        value={lead.phone}
                                        onChange={handleLeadChange}
                                        className="bg-white/5 border-white/10 text-white focus:border-[#4F8EF7]"
                                    />
                                </div>
                            </div>

                            <Button
                                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-[#4F8EF7] to-[#00C2FF] hover:opacity-90 transition-all shadow-[0_0_20px_rgba(79,142,247,0.4)]"
                                onClick={handleSubmit}
                                disabled={!lead.name || !lead.email || isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                        Generating Estimate...
                                    </>
                                ) : (
                                    <>
                                        🚀 Get My Estimate
                                    </>
                                )}
                            </Button>
                        </GlassCard>
                    </motion.div>
                )}

                {step === 6 && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="max-w-3xl mx-auto text-center py-10"
                    >
                        {/* Success Icon */}
                        <div className="relative w-32 h-32 mx-auto mb-8">
                            <div className="absolute inset-0 bg-[#4F8EF7] rounded-full opacity-20 animate-ping" />
                            <div className="relative z-10 w-full h-full bg-gradient-to-tr from-[#4F8EF7] to-[#00C2FF] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(79,142,247,0.5)]">
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Rocket className="w-16 h-16 text-white" />
                                </motion.div>
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            You're all set, {lead.name.split(' ')[0]}!
                        </h2>

                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We've sent a detailed breakdown to <span className="text-[#4F8EF7] bg-[#4F8EF7]/10 px-2 py-1 rounded">{lead.email}</span>.
                            Our team will review your requirements and reach out within 24 hours.
                        </p>

                        {/* Summary Box */}
                        <GlassCard className="p-8 mb-12 border-[#4F8EF7]/50 max-w-xl mx-auto bg-[#0A0F2C]">
                            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Your Estimated Range</p>
                            <div className="text-5xl font-bold text-white mb-4">{estimate.budgetRange}</div>
                            <p className="text-xs text-muted-foreground">Based on {selections.features.length} features, {TimelinesData.find(t => t.id === selections.timeline)?.label} timeline.</p>
                        </GlassCard>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                            <div className="flex flex-col items-center gap-2">
                                <ShieldCheck className="w-6 h-6 text-[#4F8EF7]" />
                                <span>NDA Protected</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Clock className="w-6 h-6 text-[#4F8EF7]" />
                                <span>24hr Response</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <MessageSquare className="w-6 h-6 text-[#4F8EF7]" />
                                <span>Free Consultation</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <CreditCard className="w-6 h-6 text-[#4F8EF7]" />
                                <span>No Payment Req.</span>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Button
                                variant="outline"
                                className="border-white/20 hover:bg-white/10"
                                onClick={() => window.location.reload()}
                            >
                                Start New Estimate
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ----------------------------------------------------------------
               NAVIGATION FOOTER
               ---------------------------------------------------------------- */}
            {step < 5 && (
                <div className="flex justify-between mt-12 pt-6 border-t border-white/10">
                    <Button
                        variant="ghost"
                        onClick={prevStep}
                        disabled={step === 1}
                        className="text-muted-foreground hover:text-white hover:bg-white/5"
                    >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>

                    <Button
                        onClick={nextStep}
                        disabled={
                            (step === 1 && !selections.service) ||
                            (step === 2 && !selections.platform) ||
                            (step === 4 && !selections.timeline)
                        }
                        className="bg-[#4F8EF7] hover:bg-[#4F8EF7]/90 text-white min-w-[120px]"
                    >
                        {step === 3 && selections.features.length === 0 ? (
                            <>Skip <ChevronRight className="w-4 h-4 ml-2" /></>
                        ) : (
                            <>Next <ChevronRight className="w-4 h-4 ml-2" /></>
                        )}
                    </Button>
                </div>
            )}
        </div>
    );
}

// Helper Components
function ServiceCard({ icon, label, selected, onClick }: { icon: string, label: string, selected: boolean, onClick: () => void }) {
    return (
        <GlassCard
            className={`p-6 cursor-pointer border transition-all duration-300 relative group overflow-hidden h-full flex flex-col items-center justify-center text-center gap-4 ${selected
                ? "border-[#4F8EF7] bg-gradient-to-br from-[#4F8EF7]/20 to-transparent shadow-[0_0_20px_rgba(79,142,247,0.2)] scale-[1.02]"
                : "border-white/10 hover:border-[#4F8EF7]/50 hover:bg-white/5"
                }`}
            onClick={onClick}
        >
            {/* Selection Checkmark */}
            {selected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#4F8EF7] rounded-full flex items-center justify-center text-white">
                    <Check className="w-4 h-4" />
                </div>
            )}

            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
            <h3 className="font-bold text-white text-lg">{label}</h3>
        </GlassCard>
    );
}
