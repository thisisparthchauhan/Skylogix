"use client";

import { useState } from "react";
import { DollarSign, TrendingUp, Download, Plus, MoreVertical } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { FilterBar } from "@/components/admin/FilterBar";
import { revenueEntries } from "@/lib/admin/sampleData";

export default function RevenuePage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filtered = revenueEntries.filter(item => {
        const matchesSearch = item.client.toLowerCase().includes(search.toLowerCase()) || item.source.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || item.status === filter;
        return matchesSearch && matchesFilter;
    });

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Project Income": return "bg-[#4F8EF7]/10 text-[#4F8EF7] border-[#4F8EF7]/20";
            case "IT Consulting": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
            case "Maintenance Retainer": return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
            case "Design Services": return "bg-pink-500/10 text-pink-400 border-pink-500/20";
            default: return "bg-white/10 text-white border-white/20";
        }
    };

    return (
        <div className="space-y-6">
            <PageHeader
                title="Revenue Tracking"
                subtitle="Monitor all incoming revenue streams and project payments."
                actions={
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm text-white transition-colors">
                            <Download size={16} /> Export CSV
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)]">
                            <Plus size={16} /> Add Revenue
                        </button>
                    </div>
                }
            />

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Total Revenue YTD", value: "$284,500", icon: DollarSign, color: "text-[#4F8EF7]" },
                    { title: "This Month", value: "$24,800", icon: TrendingUp, color: "text-green-400" },
                    { title: "Avg per Project", value: "$12,500", icon: DollarSign, color: "text-[#00C2FF]" },
                    { title: "MoM Growth", value: "+18%", icon: TrendingUp, color: "text-[#7B5EA7]" },
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

            {/* Placeholder for Revenue Chart */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl p-6 h-[300px] flex flex-col items-center justify-center border-dashed">
                <TrendingUp className="w-10 h-10 text-[#8A9BB5] mb-4 opacity-50" />
                <p className="text-[#8A9BB5] font-medium">Revenue Stacked Bar Chart</p>
                <p className="text-xs text-[#8A9BB5] max-w-sm text-center mt-2">Will be implemented with Recharts to show project income vs consulting vs retainers over time.</p>
            </div>

            <FilterBar
                onSearch={setSearch}
                filters={["All", "Received", "Pending", "Overdue"]}
                onFilterChange={setFilter}
            />

            {/* Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4 font-medium">Source</th>
                                <th className="px-6 py-4 font-medium">Category</th>
                                <th className="px-6 py-4 font-medium">Amount</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Invoice #</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {filtered.map((item, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-white">{item.source}</p>
                                        <p className="text-xs text-[#8A9BB5]">{item.client}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-medium border ${getCategoryColor(item.category)}`}>
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-green-400">${item.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="px-6 py-4 font-medium text-[#8A9BB5]">{item.invoice}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border ${item.status === 'Received' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                item.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                                    'bg-red-500/10 text-red-400 border-red-500/20'
                                            }`}>
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
