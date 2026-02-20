"use client";

import { useState } from "react";
import { Save, RefreshCcw } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { ColorPicker } from "@/components/admin/ColorPicker";
import { FileUpload } from "@/components/admin/FileUpload";

export default function AppearanceSettingsPage() {
    const [primaryColor, setPrimaryColor] = useState("#4F8EF7");
    const [secondaryColor, setSecondaryColor] = useState("#00C2FF");
    const [glowColor, setGlowColor] = useState("#7B5EA7");

    const [logoUrl, setLogoUrl] = useState("");
    const [faviconUrl, setFaviconUrl] = useState("");

    return (
        <div className="space-y-6 pb-20 max-w-4xl">
            <PageHeader
                title="Appearance Settings"
                subtitle="Customize the look and feel of your public-facing website."
                actions={
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm text-white transition-colors">
                            <RefreshCcw size={16} /> Reset
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)]">
                            <Save size={16} /> Save Changes
                        </button>
                    </div>
                }
            />

            {/* Brand Colors */}
            <section className="bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-white/5 bg-white/5">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Brand Colors</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <ColorPicker label="Primary Accent" color={primaryColor} onChange={setPrimaryColor} />
                        <ColorPicker label="Secondary Accent" color={secondaryColor} onChange={setSecondaryColor} />
                        <ColorPicker label="Glow / Highlight" color={glowColor} onChange={setGlowColor} />
                    </div>
                    {/* Live Preview Panel */}
                    <div className="bg-[#060818] border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center gap-6 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('/noise.svg')] mix-blend-overlay pointer-events-none" />
                        <div
                            className="absolute w-[200px] h-[200px] blur-[100px] rounded-full pointer-events-none"
                            style={{ backgroundColor: glowColor, opacity: 0.15 }}
                        />

                        <button
                            className="relative px-6 py-2 rounded-lg text-sm font-semibold text-white transition-all z-10"
                            style={{ background: `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})` }}
                        >
                            Primary Button
                        </button>

                        <div className="relative w-full max-w-[240px] bg-white/5 border border-white/10 rounded-xl p-4 z-10 text-center">
                            <span
                                className="inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider mb-2 border"
                                style={{ color: primaryColor, borderColor: `${primaryColor}40`, backgroundColor: `${primaryColor}15` }}
                            >
                                Preview Badge
                            </span>
                            <h4 className="text-white font-semibold text-sm">Theme Colors Live Preview</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo & Favicon */}
            <section className="bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-white/5 bg-white/5">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Logo & Media</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FileUpload label="Main Logo (Light Text)" value={logoUrl} onChange={setLogoUrl} />
                    <FileUpload label="Favicon (32x32px .ico or .png)" value={faviconUrl} onChange={setFaviconUrl} />
                </div>
            </section>

            {/* Default Theme */}
            <section className="bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-white/5 bg-white/5">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Default Theme</h3>
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-5 h-5 rounded-full border-2 border-[#4F8EF7] flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#4F8EF7]" />
                            </div>
                            <span className="text-sm text-white font-medium">Dark Mode (Space Theme)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group opacity-50">
                            <div className="w-5 h-5 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-white/40">
                            </div>
                            <span className="text-sm text-[#8A9BB5] font-medium group-hover:text-white">Light Mode (Coming Soon)</span>
                        </label>
                    </div>
                </div>
            </section>

            {/* Announcement Bar */}
            <section className="bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-white/5 bg-white/5 flex justify-between items-center">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Announcement Top Bar</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={false} />
                        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8EF7]"></div>
                    </label>
                </div>
                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Announcement Text</label>
                        <input type="text" placeholder="e.g. 🎉 New Service Launched! Get 20% off your first month." className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Link URL (Optional)</label>
                            <input type="text" placeholder="https://..." className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                        </div>
                        <ColorPicker label="Background Color" color="#4F8EF7" onChange={() => { }} />
                    </div>
                </div>
            </section>
        </div>
    );
}
