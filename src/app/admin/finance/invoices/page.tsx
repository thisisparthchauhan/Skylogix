"use client";

import { useState } from "react";
import { FileText, CheckCircle, Clock, AlertCircle, Plus, Download, MoreVertical, Send } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { FilterBar } from "@/components/admin/FilterBar";
import { invoices } from "@/lib/admin/sampleData";

export default function InvoicesPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filtered = invoices.filter(item => {
        const matchesSearch = item.client.toLowerCase().includes(search.toLowerCase()) || item.id.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || item.status === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-6">
            <PageHeader
                title="Invoices"
                subtitle="Create and manage client invoices."
                actions={
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)]">
                        <Plus size={16} /> Create Invoice
                    </button>
                }
            />

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Total Invoiced", value: "$310,000", icon: FileText, color: "text-[#4F8EF7]" },
                    { title: "Paid", value: "$284,500", icon: CheckCircle, color: "text-green-400" },
                    { title: "Pending", value: "$18,500", icon: Clock, color: "text-yellow-400" },
                    { title: "Overdue", value: "$7,000", icon: AlertCircle, color: "text-red-400" },
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
                filters={["All", "Draft", "Sent", "Paid", "Overdue"]}
                onFilterChange={setFilter}
            />

            {/* Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4 font-medium">Invoice #</th>
                                <th className="px-6 py-4 font-medium">Client</th>
                                <th className="px-6 py-4 font-medium">Amount</th>
                                <th className="px-6 py-4 font-medium">Issue Date</th>
                                <th className="px-6 py-4 font-medium">Due Date</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {filtered.map((item, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white">{item.id}</td>
                                    <td className="px-6 py-4">{item.client}</td>
                                    <td className="px-6 py-4 font-medium text-white">{item.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-[#8A9BB5]">{item.issueDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-[#8A9BB5]">{item.dueDate}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border ${item.status === 'Paid' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                item.status === 'Sent' ? 'bg-[#4F8EF7]/10 text-[#4F8EF7] border-[#4F8EF7]/20' :
                                                    item.status === 'Overdue' ? 'bg-red-500/10 text-red-400 border-red-500/20 animate-pulse' :
                                                        'bg-white/5 text-[#8A9BB5] border-white/10'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {item.status !== "Paid" && item.status !== "Draft" && (
                                                <button title="Send Reminder" className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-[#8A9BB5] hover:text-white">
                                                    <Send size={16} />
                                                </button>
                                            )}
                                            <button title="Download PDF" className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-[#8A9BB5] hover:text-white">
                                                <Download size={16} />
                                            </button>
                                            <button className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-[#8A9BB5] hover:text-white">
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
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
