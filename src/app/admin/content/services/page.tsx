"use client";

import { useState } from "react";
import { Plus, GripVertical, Settings2, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { TagInput } from "@/components/admin/TagInput";

export default function ServicesContentEditor() {
    const [selectedService, setSelectedService] = useState<number>(0);
    const [tags, setTags] = useState<string[]>(["React", "Node.js", "AWS", "TypeScript"]);
    const [richTextContent, setRichTextContent] = useState("**Empowering** your digital infrastructure \n\n- bullet 1\n- bullet 2");

    // Sample list
    const servicesList = [
        { id: 1, name: "Web App Development", active: true },
        { id: 2, name: "Mobile App Development", active: true },
        { id: 3, name: "Cloud Architectures", active: true },
        { id: 4, name: "UI/UX Design", active: true },
        { id: 5, name: "AI Integration", active: false },
    ];

    return (
        <div className="space-y-6 flex flex-col h-[calc(100vh-[104px])]">
            <PageHeader
                title="Services Editor"
                subtitle="Manage and edit your detailed service offerings."
            />

            <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
                {/* Left Sidebar List */}
                <div className="w-full md:w-64 shrink-0 bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-white/5 bg-white/5">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">All Services</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                        {servicesList.map((svc, i) => (
                            <div
                                key={svc.id}
                                onClick={() => setSelectedService(i)}
                                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${selectedService === i ? 'bg-[#4F8EF7]/10 border border-[#4F8EF7]/30 text-white' : 'hover:bg-white/5 text-[#8A9BB5] border border-transparent'}`}
                            >
                                <GripVertical size={14} className="text-white/20 shrink-0" />
                                <div className="flex-1 truncate text-sm font-medium">{svc.name}</div>
                                <div className={`w-2 h-2 rounded-full shrink-0 ${svc.active ? 'bg-green-500' : 'bg-white/20'}`} />
                            </div>
                        ))}
                    </div>
                    <div className="p-3 border-t border-white/5 bg-[#060818]/50">
                        <button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-dashed border-white/20 rounded-lg text-sm text-white flex items-center justify-center gap-2 transition-colors">
                            <Plus size={16} /> Add Service
                        </button>
                    </div>
                </div>

                {/* Right Editor Panel */}
                <div className="flex-1 bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-y-auto custom-scrollbar">
                    {/* Editor Header */}
                    <div className="sticky top-0 z-10 bg-[#060818]/90 backdrop-blur-md border-b border-white/5 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                                🌐
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-white">{servicesList[selectedService]?.name || "New Service"}</h2>
                                <p className="text-xs text-[#8A9BB5]">/services/web-app-development</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm text-white transition-colors">
                                View Live
                            </button>
                            <button className="px-6 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)]">
                                Save Service
                            </button>
                        </div>
                    </div>

                    <div className="p-4 sm:p-8 space-y-8 max-w-3xl">
                        {/* Basic Info */}
                        <div className="space-y-4">
                            <h3 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider pb-2 border-b border-white/5">
                                <Settings2 size={16} className="text-[#4F8EF7]" /> Basic Details
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Service Name</label>
                                    <input type="text" defaultValue={servicesList[selectedService]?.name} className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">URL Slug</label>
                                    <input type="text" defaultValue="web-app-development" className="w-full h-11 bg-[#060818] border border-white/5 rounded-lg px-4 text-sm text-[#8A9BB5] font-mono focus:outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Tagline (Short Summary)</label>
                                <input type="text" defaultValue="Building fast, secure, and scalable web applications." className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] transition-all" />
                            </div>
                        </div>

                        {/* Rich Text Description */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-2 border-b border-white/5">Full Description</h3>
                            <RichTextEditor
                                value={richTextContent}
                                onChange={(val) => setRichTextContent(val || "")}
                                height={250}
                            />
                        </div>

                        {/* Technologies */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-2 border-b border-white/5">Technologies Used</h3>
                            <TagInput tags={tags} setTags={setTags} placeholder="Add a tech stack tool..." />
                        </div>

                        {/* SEO */}
                        <div className="space-y-4 bg-white/[0.02] border border-white/5 rounded-xl p-5">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">SEO Settings</h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Meta Title</label>
                                        <span className="text-[10px] text-green-400">45/60</span>
                                    </div>
                                    <input type="text" defaultValue="Web App Development Services | Skylogix" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Meta Description</label>
                                        <span className="text-[10px] text-[#8A9BB5]">120/155</span>
                                    </div>
                                    <textarea rows={3} defaultValue="We build custom, scalable, and secure web applications using React, Next.js, and modern cloud architectures." className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#4F8EF7] transition-all resize-none" />
                                </div>
                            </div>
                        </div>

                        {/* Status */}
                        <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                            <div>
                                <p className="text-white font-medium">Service Status</p>
                                <p className="text-xs text-[#8A9BB5]">Determine if this service is visible on the website.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={servicesList[selectedService]?.active} />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8EF7]"></div>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
