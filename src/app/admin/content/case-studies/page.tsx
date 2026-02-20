"use client";

import { useState } from "react";
import { Plus, CheckCircle, Clock } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { FilterBar } from "@/components/admin/FilterBar";
import { DetailDrawer } from "@/components/admin/DetailDrawer";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { TagInput } from "@/components/admin/TagInput";

export default function CaseStudiesEditor() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [tags, setTags] = useState<string[]>([]);

    // Using a simple state for now, will connect to real DB later
    const [challengeContent, setChallengeContent] = useState("");
    const [solutionContent, setSolutionContent] = useState("");

    const caseStudies = [
        { id: 1, title: "Global Fintech App", industry: "Finance", region: "USA", status: "Published", date: "Oct 15, 2024" },
        { id: 2, title: "Healthcare Portal Revamp", industry: "Healthcare", region: "Europe", status: "Draft", date: "Oct 10, 2024" },
        { id: 3, title: "B2B E-Commerce Migration", industry: "Retail", region: "UK", status: "Published", date: "Sep 28, 2024" },
    ];

    const filtered = caseStudies.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || item.status === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-6">
            <PageHeader
                title="Case Studies"
                subtitle="Manage your portfolio of successful projects and case studies."
                actions={
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold shadow-[0_0_15px_rgba(0,194,255,0.2)] transition-all"
                    >
                        <Plus size={16} /> Add New Case Study
                    </button>
                }
            />

            <FilterBar
                onSearch={setSearch}
                filters={["All", "Published", "Draft"]}
                onFilterChange={setFilter}
            />

            {/* Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4 font-medium">Project Title</th>
                                <th className="px-6 py-4 font-medium">Industry & Region</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {filtered.map((item, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors cursor-pointer" onClick={() => setIsDrawerOpen(true)}>
                                    <td className="px-6 py-4 font-medium text-white">{item.title}</td>
                                    <td className="px-6 py-4">
                                        <span className="text-[#8A9BB5]">{item.industry}</span>
                                        <span className="mx-2 text-white/20">•</span>
                                        <span className="text-white">{item.region}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border ${item.status === 'Published' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                'bg-gray-500/10 text-gray-400 border-gray-500/20'
                                            }`}>
                                            {item.status === 'Published' ? <CheckCircle size={10} /> : <Clock size={10} />}
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-[#8A9BB5]">{item.date}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-xs text-[#4F8EF7] hover:underline">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <DetailDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title="Edit Case Study"
            >
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Title</label>
                            <input type="text" placeholder="Global Fintech App" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Industry</label>
                                <select className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] appearance-none">
                                    <option className="bg-[#0A0F2C]">Finance</option>
                                    <option className="bg-[#0A0F2C]">Healthcare</option>
                                    <option className="bg-[#0A0F2C]">Retail</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Region</label>
                                <select className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] appearance-none">
                                    <option className="bg-[#0A0F2C]">USA</option>
                                    <option className="bg-[#0A0F2C]">Europe</option>
                                    <option className="bg-[#0A0F2C]">UK</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <RichTextEditor
                            label="The Challenge"
                            value={challengeContent}
                            onChange={(v) => setChallengeContent(v || "")}
                            height={200}
                        />
                        <RichTextEditor
                            label="Our Solution"
                            value={solutionContent}
                            onChange={(v) => setSolutionContent(v || "")}
                            height={200}
                        />
                    </div>

                    <div className="space-y-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase mb-2 block">Key Results</label>
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex gap-2">
                                <input type="text" placeholder="🚀" className="w-12 h-10 bg-[#060818] border border-white/10 rounded-lg text-center text-sm" />
                                <input type="text" placeholder="e.g. 40% faster load time" className="flex-1 h-10 bg-[#060818] border border-white/10 rounded-lg px-3 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                            </div>
                        ))}
                        <button className="text-xs text-[#4F8EF7] font-medium">+ Add Result</button>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Tech Stack Used</label>
                        <TagInput tags={tags} setTags={setTags} placeholder="Add technology..." />
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-white/5">
                        <button className="flex-1 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] text-white py-2.5 rounded-lg font-semibold text-sm hover:brightness-110">
                            Save Changes
                        </button>
                    </div>
                </div>
            </DetailDrawer>
        </div>
    );
}
