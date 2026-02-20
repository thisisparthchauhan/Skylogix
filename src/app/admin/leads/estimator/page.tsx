"use client";

import { useState } from "react";
import { Calculator, Users, DollarSign, Activity, ChevronDown, ChevronUp, MoreVertical } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { FilterBar } from "@/components/admin/FilterBar";
import { estimatorLeads } from "@/lib/admin/sampleData";

export default function EstimatorLeadsPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [expandedRow, setExpandedRow] = useState<string | null>(null);

    const filtered = estimatorLeads.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || item.status === filter;
        return matchesSearch && matchesFilter;
    });

    const getBudgetColor = (budget: string) => {
        if (budget.includes("Under $5K")) return "text-gray-400 bg-gray-500/10 border-gray-500/20";
        if (budget.includes("$5K - $15K")) return "text-blue-400 bg-blue-500/10 border-blue-500/20";
        if (budget.includes("$15K - $30K")) return "text-purple-400 bg-purple-500/10 border-purple-500/20";
        if (budget.includes("$30K - $50K")) return "text-orange-400 bg-orange-500/10 border-orange-500/20";
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
    };

    return (
        <div className="space-y-6">
            <PageHeader
                title="Estimator Leads"
                subtitle="High-intent leads that have completed the project estimator tool."
            />

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Total Estimator Leads", value: "203", icon: Users, color: "text-[#4F8EF7]" },
                    { title: "This Month", value: "34", icon: Activity, color: "text-[#00C2FF]" },
                    { title: "Avg Budget Range", value: "$18,500", icon: DollarSign, color: "text-green-400" },
                    { title: "Conversion Rate", value: "28%", icon: Calculator, color: "text-[#7B5EA7]" },
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
                filters={["All", "Contacted", "Not Contacted"]}
                onFilterChange={setFilter}
            />

            {/* Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4 font-medium w-10"></th>
                                <th className="px-6 py-4 font-medium">Name & Email</th>
                                <th className="px-6 py-4 font-medium">Service</th>
                                <th className="px-6 py-4 font-medium">Platform</th>
                                <th className="px-6 py-4 font-medium">Est. Budget</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {filtered.map((item, i) => (
                                <React.Fragment key={i}>
                                    <tr className={`hover:bg-white/5 transition-colors cursor-pointer ${expandedRow === item.id ? 'bg-white/5' : ''}`} onClick={() => setExpandedRow(expandedRow === item.id ? null : item.id)}>
                                        <td className="px-6 py-4 text-[#8A9BB5]">
                                            {expandedRow === item.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7B5EA7] to-[#4F8EF7] flex items-center justify-center text-white font-bold text-xs shrink-0">
                                                    {item.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-white flex items-center gap-2">
                                                        {item.name}
                                                        {!item.status.includes('Not Contacted') && (
                                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                        )}
                                                    </p>
                                                    <p className="text-xs text-[#8A9BB5]">{item.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{item.service}</td>
                                        <td className="px-6 py-4">{item.platform}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-2 py-1 rounded-md text-xs font-medium border ${getBudgetColor(item.budgetRange)}`}>
                                                {item.budgetRange}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-[#8A9BB5] hover:text-white" onClick={(e) => e.stopPropagation()}>
                                                <MoreVertical size={16} />
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Expanded Details Row */}
                                    {expandedRow === item.id && (
                                        <tr className="bg-[#0A0F2C]">
                                            <td colSpan={7} className="px-6 py-6 border-b border-white/5">
                                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5 mb-2">
                                                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Full Estimator Selections</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                        <div className="space-y-1">
                                                            <span className="text-xs text-[#8A9BB5]">Service</span>
                                                            <p className="text-sm text-white">{item.service}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <span className="text-xs text-[#8A9BB5]">Platform</span>
                                                            <p className="text-sm text-white">{item.platform}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <span className="text-xs text-[#8A9BB5]">Features Selected</span>
                                                            <p className="text-sm text-white">{item.featuresCount} Features</p>
                                                            <p className="text-xs text-[#8A9BB5] mt-1">Auth, Payments, Admin Profile, Search...</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <span className="text-xs text-[#8A9BB5]">Timeline Need</span>
                                                            <p className="text-sm text-white">{item.timeline}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <span className="text-xs text-[#8A9BB5]">System Estimate</span>
                                                            <p className="text-sm text-green-400 font-medium">{item.budgetRange}</p>
                                                        </div>
                                                    </div>

                                                    <div className="mt-6 pt-4 border-t border-white/5 flex gap-3">
                                                        <button className="px-4 py-2 bg-[#4F8EF7]/10 hover:bg-[#4F8EF7]/20 text-[#4F8EF7] rounded-lg text-sm font-medium transition-colors">
                                                            Mark Contacted
                                                        </button>
                                                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors">
                                                            Convert to Project Request
                                                        </button>
                                                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors">
                                                            Send Email
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Ensure React is available for the Fragment shorthand if needed, explicitly importing here to prevent errors in some Nextjs setups
import React from 'react';

function CalculatorsIcon(props: any) {
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
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <line x1="8" x2="16" y1="6" y2="6" />
            <line x1="16" x2="16" y1="14" y2="18" />
            <path d="M16 10h.01" />
            <path d="M12 10h.01" />
            <path d="M8 10h.01" />
            <path d="M12 14h.01" />
            <path d="M8 14h.01" />
            <path d="M12 18h.01" />
            <path d="M8 18h.01" />
        </svg>
    )
}
