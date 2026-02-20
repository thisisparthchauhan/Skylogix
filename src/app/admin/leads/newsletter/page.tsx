"use client";

import { useState } from "react";
import { Mail, Users, UserMinus, TrendingUp, MoreVertical, Send } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { FilterBar } from "@/components/admin/FilterBar";
import { newsletterSubs } from "@/lib/admin/sampleData";

export default function NewsletterSubscribersPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filtered = newsletterSubs.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || item.status === filter;
        return matchesSearch && matchesFilter;
    });

    const getSourceColor = (source: string) => {
        switch (source) {
            case "Footer Form": return "bg-gray-500/10 text-gray-400 border-gray-500/20";
            case "Blog Post": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
            case "Lead Magnet": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
            case "Estimator": return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
            case "Contact Form": return "bg-green-500/10 text-green-400 border-green-500/20";
            default: return "bg-white/10 text-white border-white/20";
        }
    };

    return (
        <div className="space-y-6">
            <PageHeader
                title="Newsletter Subscribers"
                subtitle="Manage your email list and blast out campaigns."
                actions={
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold shadow-[0_0_15px_rgba(0,194,255,0.2)] transition-all">
                        <Send size={16} /> Send Campaign
                    </button>
                }
            />

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Total Subscribers", value: "847", icon: Users, color: "text-[#4F8EF7]" },
                    { title: "Active", value: "791", icon: Mail, color: "text-green-400" },
                    { title: "Unsubscribed", value: "56", icon: UserMinus, color: "text-red-400" },
                    { title: "Growth This Month", value: "+43", icon: TrendingUp, color: "text-[#00C2FF]" },
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

            <FilterBar
                onSearch={setSearch}
                filters={["All", "Active", "Unsubscribed", "Bounced"]}
                onFilterChange={setFilter}
            />

            {/* Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-white/10 bg-black/20 text-[#4F8EF7] mr-2" />
                        <span className="text-sm text-[#8A9BB5]">0 selected</span>
                    </div>
                    <button className="text-sm px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-md transition-colors border border-white/10">
                        Export CSV
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase">
                            <tr>
                                <th className="px-4 py-4 w-10 text-center"></th>
                                <th className="px-6 py-4 font-medium">Email / Name</th>
                                <th className="px-6 py-4 font-medium">Source</th>
                                <th className="px-6 py-4 font-medium">Subscribed Date</th>
                                <th className="px-6 py-4 font-medium">Last Email Sent</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {filtered.map((item, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-4 py-4 text-center">
                                        <input type="checkbox" className="rounded border-white/10 bg-black/20 text-[#4F8EF7]" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-white">{item.email}</p>
                                        <p className="text-xs text-[#8A9BB5]">{item.name}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-medium border ${getSourceColor(item.source)}`}>
                                            {item.source}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.lastSent}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border ${item.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                item.status === 'Unsubscribed' ? 'bg-gray-500/10 text-gray-400 border-gray-500/20' :
                                                    'bg-red-500/10 text-red-400 border-red-500/20'
                                            }`}>
                                            {item.status === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-green-500" />}
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-[#8A9BB5] hover:text-white">
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
