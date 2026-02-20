"use client";

import { useState } from "react";
import { DollarSign, PieChart, CreditCard, Receipt, Plus, Download, MoreVertical } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { FilterBar } from "@/components/admin/FilterBar";
import { expenseEntries } from "@/lib/admin/sampleData";

export default function ExpensesPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filtered = expenseEntries.filter(item => {
        const matchesSearch = item.description.toLowerCase().includes(search.toLowerCase()) || item.paidTo.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || item.category === filter;
        return matchesSearch && matchesFilter;
    });

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Salaries": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
            case "Software & Tools": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
            case "Marketing": return "bg-orange-500/10 text-orange-400 border-orange-500/20";
            case "Infrastructure": return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
            default: return "bg-white/10 text-white border-white/20";
        }
    };

    return (
        <div className="space-y-6">
            <PageHeader
                title="Expenses Tracker"
                subtitle="Monitor outgoing business expenses and regular payments."
                actions={
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm text-white transition-colors">
                            <Download size={16} /> Export CSV
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-lg text-sm text-red-400 font-semibold transition-all">
                            <Plus size={16} /> Add Expense
                        </button>
                    </div>
                }
            />

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Total Expenses YTD", value: "$142,300", icon: DollarSign, color: "text-red-400" },
                    { title: "This Month", value: "$10,200", icon: CreditCard, color: "text-orange-400" },
                    { title: "Largest Category", value: "Salaries", icon: PieChart, color: "text-[#4F8EF7]" },
                    { title: "Expense Ratio", value: "50%", icon: PieChart, color: "text-[#7B5EA7]" },
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

            {/* Placeholder for Expense Chart */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl p-6 h-[300px] flex flex-col items-center justify-center border-dashed">
                <PieChart className="w-10 h-10 text-[#8A9BB5] mb-4 opacity-50" />
                <p className="text-[#8A9BB5] font-medium">Expense Breakdown Donut Chart</p>
                <p className="text-xs text-[#8A9BB5] max-w-sm text-center mt-2">Will be implemented with Recharts to show the split across Salaries, Software, Marketing, etc.</p>
            </div>

            <FilterBar
                onSearch={setSearch}
                filters={["All", "Salaries", "Software & Tools", "Marketing", "Infrastructure"]}
                onFilterChange={setFilter}
            />

            {/* Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4 font-medium">Description</th>
                                <th className="px-6 py-4 font-medium">Category</th>
                                <th className="px-6 py-4 font-medium">Amount</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Paid To</th>
                                <th className="px-6 py-4 font-medium">Receipt</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {filtered.map((item, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-white">{item.description}</span>
                                            {item.recurring !== "No" && (
                                                <span className="text-[10px] bg-white/10 text-[#8A9BB5] px-1.5 py-0.5 rounded border border-white/10">
                                                    {item.recurring}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-medium border ${getCategoryColor(item.category)}`}>
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-white">${item.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="px-6 py-4 text-[#8A9BB5]">{item.paidTo}</td>
                                    <td className="px-6 py-4">
                                        {item.receipt === "yes" ? (
                                            <button className="flex items-center gap-1.5 text-xs text-[#4F8EF7] hover:underline">
                                                <Receipt size={14} /> View
                                            </button>
                                        ) : (
                                            <span className="text-xs text-[#8A9BB5]">-</span>
                                        )}
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
