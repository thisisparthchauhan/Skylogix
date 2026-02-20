"use client";

import { useState } from "react";
import { Briefcase, LayoutKanban, List, Plus, Activity, Clock } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { projectRequests } from "@/lib/admin/sampleData";

// Needs beautiful-dnd for real kanban, falling back to mock UI layout for now.
export default function ProjectRequestsPage() {
    const [viewMode, setViewMode] = useState<"kanban" | "table">("kanban");

    const columns = [
        { id: "New", items: projectRequests.filter(i => i.stage === "New") },
        { id: "Contacted", items: projectRequests.filter(i => i.stage === "Contacted") },
        { id: "Discussing", items: projectRequests.filter(i => i.stage === "Discussing") },
        { id: "Proposal", items: projectRequests.filter(i => i.stage === "Proposal") },
        { id: "Won/Lost", items: projectRequests.filter(i => i.stage === "Won/Lost") },
    ];

    return (
        <div className="space-y-6 flex flex-col h-[calc(100vh-[104px])]">
            <PageHeader
                title="Project Requests"
                subtitle="Track and manage project inquiries through your pipeline."
                actions={
                    <div className="flex bg-white/5 border border-white/10 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode("kanban")}
                            className={`p-1.5 rounded-md flex items-center justify-center transition-colors ${viewMode === "kanban" ? "bg-white/10 text-white" : "text-[#8A9BB5] hover:text-white"}`}
                        >
                            <LayoutKanban size={16} />
                        </button>
                        <button
                            onClick={() => setViewMode("table")}
                            className={`p-1.5 rounded-md flex items-center justify-center transition-colors ${viewMode === "table" ? "bg-white/10 text-white" : "text-[#8A9BB5] hover:text-white"}`}
                        >
                            <List size={16} />
                        </button>
                    </div>
                }
            />

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
                {[
                    { title: "Total Requests", value: "156", icon: Briefcase, color: "text-[#4F8EF7]" },
                    { title: "This Month", value: "18", icon: Clock, color: "text-[#00C2FF]" },
                    { title: "Active Projects", value: "8", icon: Activity, color: "text-green-400" },
                    { title: "Pipeline Value", value: "$284,500", icon: TrendingUpIcon, color: "text-[#7B5EA7]" },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#0A0F2C]/80 border border-white/10 rounded-xl p-5 flex items-center justify-between">
                        <div>
                            <p className="text-[#8A9BB5] text-sm font-medium mb-1">{stat.title}</p>
                            <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Pipeline View */}
            {viewMode === "kanban" ? (
                <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar">
                    <div className="flex gap-4 h-full min-w-max">
                        {columns.map((col, idx) => (
                            <div key={idx} className="w-[300px] flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-xl flex-shrink-0">
                                <div className="p-4 border-b border-white/5 flex items-center justify-between shrink-0">
                                    <h3 className="font-semibold text-white">{col.id}</h3>
                                    <span className="bg-white/10 text-[#8A9BB5] px-2 py-0.5 rounded text-xs font-bold">{col.items.length}</span>
                                </div>
                                <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                                    {col.items.map((item, i) => (
                                        <div key={i} className="bg-[#0A0F2C] border border-white/10 rounded-lg p-4 cursor-grab hover:border-white/30 transition-colors shadow-lg">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F8EF7] bg-[#4F8EF7]/10 px-2 py-1 rounded">
                                                    {item.service}
                                                </span>
                                            </div>
                                            <h4 className="text-white font-medium text-sm mb-1">{item.client}</h4>
                                            <p className="text-xs text-[#8A9BB5] mb-3">{item.company}</p>

                                            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-medium">
                                                <span className="text-green-400">{item.budget}</span>
                                                <span className="text-[#8A9BB5]">{item.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                    <button className="w-full py-2 border border-dashed border-white/10 rounded-lg text-[#8A9BB5] hover:text-white hover:border-white/30 transition-colors text-sm flex items-center justify-center gap-2">
                                        <Plus size={14} /> Add Request
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex-1 bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden overflow-y-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase sticky top-0 z-10 backdrop-blur-md">
                            <tr>
                                <th className="px-6 py-4 font-medium">Client / Company</th>
                                <th className="px-6 py-4 font-medium">Service</th>
                                <th className="px-6 py-4 font-medium">Budget & Timeline</th>
                                <th className="px-6 py-4 font-medium">Stage</th>
                                <th className="px-6 py-4 font-medium">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {projectRequests.map((item, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors cursor-pointer">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-white">{item.client}</p>
                                        <p className="text-xs text-[#8A9BB5]">{item.company}</p>
                                    </td>
                                    <td className="px-6 py-4">{item.service}</td>
                                    <td className="px-6 py-4">
                                        <p className="text-white">{item.budget}</p>
                                        <p className="text-xs text-[#8A9BB5]">{item.timeline}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-white/10 text-white px-2.5 py-1 rounded-full text-[10px] font-medium border border-white/20">
                                            {item.stage}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-green-400">{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

function TrendingUpIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    )
}
