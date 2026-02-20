"use client";

import { useState } from "react";
import { Save, CheckCircle2, Building, Mail, Phone, Globe, Instagram, Github, Linkedin, MessageSquare } from "lucide-react";

export default function GeneralSettings() {
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        }, 1000);
    };

    return (
        <div className="space-y-6 pb-20 max-w-4xl">
            {/* Header & Sticky Action Bar */}
            <div className="sticky top-[64px] z-20 -mx-4 px-4 sm:-mx-8 sm:px-8 py-4 bg-[#060818]/90 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">General Settings</h1>
                    <p className="text-[#8A9BB5] text-sm mt-1">Manage baseline company info, links, and forms.</p>
                </div>

                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 text-white rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)] disabled:opacity-70"
                >
                    {isSaving ? "Saving..." : saveSuccess ? <><CheckCircle2 size={16} /> Saved</> : <><Save size={16} /> Save Changes</>}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-8">

                {/* Main Settings Form */}
                <div className="space-y-8">

                    {/* Company Info */}
                    <section className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg p-6 space-y-6">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                            <Building className="w-5 h-5 text-[#4F8EF7]" />
                            <h2 className="text-lg font-bold text-white">Company Information</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Company Name</label>
                                <input type="text" defaultValue="Skylogix Technologies" className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:border-[#4F8EF7]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Tagline</label>
                                <input type="text" defaultValue="Empowering Modern Software & AI Solutions" className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:border-[#4F8EF7]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Business Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                                    <input type="email" defaultValue="contact@skylogix.com" className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white focus:border-[#4F8EF7]" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                                    <input type="text" defaultValue="+1 (555) 000-0000" className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white focus:border-[#4F8EF7]" />
                                </div>
                            </div>
                            <div className="sm:col-span-2 space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Physical Address</label>
                                <textarea rows={2} defaultValue="123 Tech Avenue, Silicon Valley, CA 94025" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#4F8EF7] resize-none"></textarea>
                            </div>
                        </div>
                    </section>

                    {/* Social Media Links */}
                    <section className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg p-6 space-y-6">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                            <Globe className="w-5 h-5 text-[#4F8EF7]" />
                            <h2 className="text-lg font-bold text-white">Social & External Links</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: Linkedin, name: "LinkedIn URL", val: "https://linkedin.com/company/skylogix" },
                                { icon: Github, name: "GitHub Organization", val: "https://github.com/skylogix" },
                                { icon: Instagram, name: "Instagram Profile", val: "https://instagram.com/skylogix.tech" }
                            ].map((social, i) => (
                                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <label className="sm:w-48 text-sm font-medium text-[#8A9BB5] flex items-center gap-2">
                                        <social.icon size={16} /> {social.name}
                                    </label>
                                    <input type="url" defaultValue={social.val} className="flex-1 h-[42px] bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:border-[#4F8EF7]" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Form Behavior */}
                    <section className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg p-6 space-y-6">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                            <MessageSquare className="w-5 h-5 text-[#4F8EF7]" />
                            <h2 className="text-lg font-bold text-white">Contact Form Settings</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                                <div>
                                    <p className="font-semibold text-white">Enable Site-wide Contact Forms</p>
                                    <p className="text-xs text-[#8A9BB5] mt-1">If disabled, contact forms will show "Currently Unavailable" message.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8EF7]"></div>
                                </label>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Internal Notification Email</label>
                                <input type="email" defaultValue="leads@skylogix.com" className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:border-[#4F8EF7]" />
                                <p className="text-xs text-[#8A9BB5]">Where new contact form submissions should be sent.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Helpful Sidebar Context */}
                <div className="hidden md:block space-y-4">
                    <div className="bg-[#0A0F2C]/50 border border-white/10 rounded-xl p-5">
                        <h3 className="font-bold text-white text-sm mb-2">Need Help?</h3>
                        <p className="text-xs text-[#8A9BB5] leading-relaxed mb-4">
                            These core settings affect the entire website footprint, including footers, metadata, and schema markup maps.
                        </p>
                        <a href="#" className="text-xs text-[#4F8EF7] hover:underline">View Documentation →</a>
                    </div>
                </div>

            </div>
        </div>
    );
}
