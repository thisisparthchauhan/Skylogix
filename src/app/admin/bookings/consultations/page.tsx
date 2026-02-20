"use client";

import { useState } from "react";
import { PhoneCall, CheckCircle, XCircle, AlertCircle, Calendar as CalendarIcon, MoreVertical } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { FilterBar } from "@/components/admin/FilterBar";
import { consultations } from "@/lib/admin/sampleData";
import { DetailDrawer } from "@/components/admin/DetailDrawer";

export default function ConsultationsPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const filtered = consultations.filter(item => {
        const matchesSearch = item.clientName.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || item.status === filter;
        return matchesSearch && matchesFilter;
    });

    const handleRowClick = (item: any) => {
        setSelectedItem(item);
        setIsDrawerOpen(true);
    };

    return (
        <div className="space-y-6">
            <PageHeader
                title="Consultations"
                subtitle="Manage and review all consultation bookings."
                actions={
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm text-white transition-colors">
                        <CalendarIcon size={16} /> Calendar View
                    </button>
                }
            />

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Total Consultations", value: "89", icon: PhoneCall, color: "text-[#4F8EF7]" },
                    { title: "This Month", value: "12", icon: CalendarIcon, color: "text-[#00C2FF]" },
                    { title: "Completed", value: "67", icon: CheckCircle, color: "text-green-400" },
                    { title: "Win Rate", value: "72%", icon: TrendingUpIcon, color: "text-[#7B5EA7]" },
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
                filters={["All", "Scheduled", "Completed", "Cancelled", "No-Show"]}
                onFilterChange={setFilter}
            />

            {/* Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4 font-medium">Client</th>
                                <th className="px-6 py-4 font-medium">Date & Time</th>
                                <th className="px-6 py-4 font-medium">Service</th>
                                <th className="px-6 py-4 font-medium">Budget</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {filtered.map((item, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors cursor-pointer" onClick={() => handleRowClick(item)}>
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-white">{item.clientName}</p>
                                        <p className="text-xs text-[#8A9BB5]">{item.email}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-white">{item.date}</p>
                                        <p className="text-xs text-[#8A9BB5]">{item.duration}</p>
                                    </td>
                                    <td className="px-6 py-4">{item.service}</td>
                                    <td className="px-6 py-4 font-medium">{item.budget}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-medium border ${item.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                item.status === 'Scheduled' ? 'bg-[#4F8EF7]/10 text-[#4F8EF7] border-[#4F8EF7]/20' :
                                                    item.status === 'Cancelled' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                        'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-[#8A9BB5] hover:text-white" onClick={(e) => { e.stopPropagation(); handleRowClick(item); }}>
                                            <MoreVertical size={16} />
                                        </button>
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
                title="Consultation Details"
            >
                {selectedItem && (
                    <div className="space-y-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <h3 className="text-white font-semibold mb-4">Client Information</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-[#8A9BB5]">Name</span>
                                    <span className="text-white font-medium">{selectedItem.clientName}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-[#8A9BB5]">Email</span>
                                    <span className="text-[#4F8EF7]">{selectedItem.email}</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span className="text-[#8A9BB5]">Phone</span>
                                    <span className="text-white">{selectedItem.phone}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <h3 className="text-white font-semibold mb-4">Call Details</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-[#8A9BB5]">Date & Time</span>
                                    <span className="text-white">{selectedItem.date}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-[#8A9BB5]">Service</span>
                                    <span className="text-white">{selectedItem.service}</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span className="text-[#8A9BB5]">Budget</span>
                                    <span className="text-white">{selectedItem.budget}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Call Notes</label>
                            <textarea
                                className="w-full h-32 bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#4F8EF7] outline-none resize-none transition-colors"
                                placeholder="Add notes from the consultation call..."
                            ></textarea>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Outcome</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#4F8EF7] outline-none appearance-none transition-colors">
                                <option value="" className="bg-[#0A0F2C]">Select outcome...</option>
                                <option value="won" className="bg-[#0A0F2C]">Won Project</option>
                                <option value="followup" className="bg-[#0A0F2C]">Follow-up Needed</option>
                                <option value="notqualified" className="bg-[#0A0F2C]">Not Qualified</option>
                                <option value="lost" className="bg-[#0A0F2C]">Lost</option>
                            </select>
                        </div>

                        <div className="pt-4 flex gap-3">
                            <button className="flex-1 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] text-white py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
                                Save Details
                            </button>
                            <button className="flex-1 bg-white/5 border border-white/10 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all">
                                Convert to Project
                            </button>
                        </div>
                    </div>
                )}
            </DetailDrawer>
        </div>
    );
}

// Needed for TrendingUp icon since it wasn't imported in the list above implicitly.
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
