"use client";

import { useState } from "react";
import { Plus, GripVertical, Star } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { DetailDrawer } from "@/components/admin/DetailDrawer";

export default function TestimonialsEditor() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const testimonials = [
        { id: 1, name: "Sarah Jenkins", role: "CTO, TechFlow", quote: "Skylogix completely transformed how we handle our data architecture. Incredible team to work with.", rating: 5, region: "USA" },
        { id: 2, name: "Mark Donovan", role: "Founder, HealthApp", quote: "The most professional development agency I've ever worked with. They delivered 2 weeks ahead of schedule.", rating: 5, region: "UK" },
    ];

    return (
        <div className="space-y-6">
            <PageHeader
                title="Testimonials"
                subtitle="Manage client reviews and social proof shown on the site."
                actions={
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold shadow-[0_0_15px_rgba(0,194,255,0.2)] transition-all"
                    >
                        <Plus size={16} /> Add Testimonial
                    </button>
                }
            />

            <div className="space-y-4">
                {testimonials.map((t) => (
                    <div key={t.id} className="group bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-white/30 transition-colors flex items-start gap-4 cursor-pointer" onClick={() => setIsDrawerOpen(true)}>
                        <div className="mt-1 cursor-grab text-white/20 group-hover:text-white/50 transition-colors">
                            <GripVertical size={20} />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7B5EA7] to-[#4F8EF7] flex items-center justify-center text-white font-bold shrink-0">
                            {t.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"} />
                                    ))}
                                </div>
                                <span className="text-xs text-[#8A9BB5] bg-white/5 px-2 py-0.5 rounded border border-white/10">{t.region}</span>
                            </div>
                            <p className="text-white text-sm italic mb-3">&quot;{t.quote}&quot;</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                                    <p className="text-xs text-[#4F8EF7]">{t.role}</p>
                                </div>
                                <button className="text-xs text-[#4F8EF7] hover:underline opacity-0 group-hover:opacity-100 transition-opacity">Edit Review</button>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="w-full py-4 border-2 border-dashed border-white/10 hover:border-white/30 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex items-center justify-center gap-2 text-[#8A9BB5] hover:text-white text-sm font-medium"
                >
                    <Plus size={16} /> Add Another Testimonial
                </button>
            </div>

            <DetailDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title="Edit Testimonial"
            >
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Quote Text</label>
                        <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#4F8EF7] resize-none" placeholder="What did they say?" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Client Name</label>
                            <input type="text" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Role / Company</label>
                            <input type="text" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Region</label>
                            <select className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] appearance-none">
                                <option className="bg-[#0A0F2C]">USA</option>
                                <option className="bg-[#0A0F2C]">UK</option>
                                <option className="bg-[#0A0F2C]">Europe</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Rating</label>
                            <div className="h-11 flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg px-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={18} className="text-yellow-400 fill-yellow-400 cursor-pointer" />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-white/5">
                        <button className="flex-1 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] text-white py-2.5 rounded-lg font-semibold text-sm hover:brightness-110">
                            Save Testimonial
                        </button>
                    </div>
                </div>
            </DetailDrawer>
        </div>
    );
}
