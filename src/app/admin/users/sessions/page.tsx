"use client";

import { useState } from "react";
import { Monitor, Smartphone, Tablet, Activity, Clock, Users, MoreVertical, Search, Filter } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { FilterBar } from "@/components/admin/FilterBar";
import { sessions } from "@/lib/admin/sampleData";
import { ConfirmModal } from "@/components/admin/ConfirmModal";

export default function UserSessionsPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [terminateModalOpen, setTerminateModalOpen] = useState(false);
    const [selectedSession, setSelectedSession] = useState<string | null>(null);

    const filteredSessions = sessions.filter(s => {
        const matchesSearch = s.user.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || s.status === filter;
        return matchesSearch && matchesFilter;
    });

    const getDeviceIcon = (device: string) => {
        switch (device) {
            case "Desktop": return <Monitor size={14} className="text-[#8A9BB5]" />;
            case "Mobile": return <Smartphone size={14} className="text-[#8A9BB5]" />;
            case "Tablet": return <Tablet size={14} className="text-[#8A9BB5]" />;
            default: return <Monitor size={14} className="text-[#8A9BB5]" />;
        }
    };

    return (
        <div className="space-y-6">
            <PageHeader
                title="User Sessions"
                subtitle="Monitor active and recent user sessions across devices."
            />

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { title: "Active Right Now", value: "24", icon: Activity, color: "text-green-400" },
                    { title: "Sessions Today", value: "186", icon: Users, color: "text-[#4F8EF7]" },
                    { title: "Avg Session Duration", value: "4m 32s", icon: Clock, color: "text-[#7B5EA7]" },
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
                filters={["All", "Active", "Ended", "Expired"]}
                onFilterChange={setFilter}
            />

            {/* Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4 font-medium">User</th>
                                <th className="px-6 py-4 font-medium">Device & Browser</th>
                                <th className="px-6 py-4 font-medium">Location & IP</th>
                                <th className="px-6 py-4 font-medium">Started</th>
                                <th className="px-6 py-4 font-medium">Duration</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {filteredSessions.map((session, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#4F8EF7] to-[#00C2FF] flex items-center justify-center text-white font-bold text-xs shrink-0">
                                                {session.user.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-medium text-white">{session.user}</p>
                                                <p className="text-xs text-[#8A9BB5]">{session.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {getDeviceIcon(session.device)}
                                            <span>{session.device} • {session.browser}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-white">{session.location}</p>
                                        <p className="text-xs text-[#8A9BB5]">{session.ip}</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{session.started}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{session.duration}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border ${session.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                session.status === 'Ended' ? 'bg-gray-500/10 text-gray-400 border-gray-500/20' :
                                                    'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                            }`}>
                                            {session.status === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />}
                                            {session.status === 'Active' ? 'Live' : session.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => {
                                                setSelectedSession(session.id);
                                                setTerminateModalOpen(true);
                                            }}
                                            className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-[#8A9BB5] hover:text-white"
                                        >
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ConfirmModal
                isOpen={terminateModalOpen}
                onClose={() => setTerminateModalOpen(false)}
                onConfirm={() => console.log("Terminated session", selectedSession)}
                title="End User Session"
                message="Are you sure you want to forcefully terminate this user's active session? They will be logged out immediately."
                dangerLabel="Terminate Session"
            />
        </div>
    );
}
