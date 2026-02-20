"use client";

import { useState } from "react";
import { Save, Eye, Undo2, Layout, Image as ImageIcon, Type, Link as LinkIcon, Plus, Trash2, GripVertical, CheckCircle2, TrendingUp } from "lucide-react";

export default function HomeContentEditor() {
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    // Mock accordion state
    const [openSection, setOpenSection] = useState("hero");

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        }, 1000);
    };

    return (
        <div className="space-y-6 pb-20 max-w-5xl">
            {/* Header & Sticky Action Bar */}
            <div className="sticky top-[64px] z-20 -mx-4 px-4 sm:-mx-8 sm:px-8 py-4 bg-[#060818]/90 backdrop-blur-md border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Home Page Content</h1>
                    <p className="text-[#8A9BB5] text-sm mt-1">Live edit the content shown on the main entry landing page.</p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm transition-colors text-white whitespace-nowrap">
                        <Undo2 size={16} /> Revert
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-[#0A0F2C] border border-[#4F8EF7]/30 hover:border-[#4F8EF7]/60 text-[#4F8EF7] rounded-lg text-sm transition-colors whitespace-nowrap">
                        <Eye size={16} /> Preview
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 text-white rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)] whitespace-nowrap disabled:opacity-70"
                    >
                        {isSaving ? "Saving..." : saveSuccess ? <><CheckCircle2 size={16} /> Saved</> : <><Save size={16} /> Save Changes</>}
                    </button>
                </div>
            </div>

            {/* Accordion Editor Sections */}
            <div className="space-y-4">

                {/* 1. Hero Section */}
                <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all">
                    <button
                        onClick={() => setOpenSection(openSection === 'hero' ? '' : 'hero')}
                        className="w-full flex items-center justify-between p-5 bg-white/5 text-left"
                    >
                        <div className="flex items-center gap-3">
                            <Layout className="w-5 h-5 text-[#4F8EF7]" />
                            <h2 className="text-lg font-bold text-white">Hero Section</h2>
                        </div>
                        <span className="text-[#8A9BB5]">{openSection === 'hero' ? '▲' : '▼'}</span>
                    </button>

                    {openSection === 'hero' && (
                        <div className="p-6 space-y-6 border-t border-white/5">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider flex items-center gap-2">
                                        <Type size={14} /> Main Headline
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Empowering Modern Software & AI Solutions"
                                        className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all"
                                    />
                                    <p className="text-xs text-[#8A9BB5]">The large H1 text shown immediately upon load.</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider flex items-center gap-2">
                                        <Type size={14} /> Animated Subheading Highlight
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Built for the Future."
                                        className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-[#00C2FF] font-semibold focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">
                                        Description Subtext
                                    </label>
                                    <textarea
                                        rows={3}
                                        defaultValue="We are an architecture-focused software studio designing sophisticated digital ecosystems, web platforms, and mobile applications."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all resize-none"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Primary Button Text</label>
                                        <input type="text" defaultValue="View Our Services" className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Secondary Button Text</label>
                                        <input type="text" defaultValue="Get Instant Estimate" className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* 2. Stats Marquee */}
                <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all">
                    <button
                        onClick={() => setOpenSection(openSection === 'stats' ? '' : 'stats')}
                        className="w-full flex items-center justify-between p-5 bg-white/5 text-left"
                    >
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-[#00C2FF]" />
                            <h2 className="text-lg font-bold text-white">Trust / Stats Numbers</h2>
                        </div>
                        <span className="text-[#8A9BB5]">{openSection === 'stats' ? '▲' : '▼'}</span>
                    </button>

                    {openSection === 'stats' && (
                        <div className="p-6 space-y-4 border-t border-white/5">
                            <p className="text-xs text-[#8A9BB5] mb-4">Edit the 4 main stat blocks displayed under the hero.</p>

                            {[
                                { num: "3+", label: "Years Experience" },
                                { num: "15+", label: "Projects Delivered" },
                                { num: "12+", label: "Happy Clients" },
                                { num: "99%", label: "Client Satisfaction" }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5">
                                    <GripVertical className="text-white/20 cursor-grab" />
                                    <input type="text" defaultValue={stat.num} className="w-20 h-10 bg-[#0A0F2C] border border-white/10 rounded px-3 text-white font-bold text-center" />
                                    <input type="text" defaultValue={stat.label} className="flex-1 h-10 bg-[#0A0F2C] border border-white/10 rounded px-3 text-sm text-white" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Other sections would go here (Services snippet, Testimonials snippet, etc) */}
                <div className="bg-[#0A0F2C]/50 border border-white/5 border-dashed rounded-xl p-6 text-center text-[#8A9BB5]">
                    + Add New Content Block
                </div>

            </div>
        </div>
    );
}
